import {CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

 
const CheckoutForm = ({cart, price}) => {

    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth()
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');



    useEffect(()=> {
      axiosSecure.post('/create-payment-intent', {price})
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        console.log('card',card);
        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card
        })

        if(error){
          console.log('error', error);
          setCardError(error.message)
        }
        else{
          console.log('paymentMethod', paymentMethod);
          setCardError('')
        }

        setProcessing(true);

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
         clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email || 'unknown',
                name: user?.displayName || 'anonymous'
              },
            },
          },
        );

        if(confirmError){
          console.log(confirmError);
        }

        console.log("payment Intent",paymentIntent);

        setProcessing(true);

        if(paymentIntent.status === 'succeeded'){

          setTransactionId(paymentIntent.id);
          //save payment info to the server
          const payment = {
            email: user?.email,
            transactionId: paymentIntent.id,
            price,
            date: new Date(),
            status: 'service pending',
            quantity: cart.length,
            cartItems: cart.map(item => item._id),
            menuItems: cart.map(item => item.menuItemId),
            itemNames: cart.map(item => item.name)
          }

          axiosSecure.post('/payments', payment)
          .then(res => {
            console.log(res.data);
            if(res.data.result.insertedId){
              // display confirm message
            }
          })

        }

    }

    return (
      <div>
         <form className="p-6" onSubmit={handleSubmit}>
      <CardElement 
      className="border py-5 md:w-1/2 mx-auto"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     <div className="text-center">
     <button className="  btn btn-outline btn-sm btn-secondary px-24 mt-8" type="submit"
      disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
     </div>
    </form>
    {
      cardError && <p className="text-red-500 text-center">{cardError}</p>
    }
    {
      transactionId && <p className="text-green-500 text-center">Transaction Complete With TransactionId: {transactionId}</p>
    }
      </div>
    );
};

export default CheckoutForm;