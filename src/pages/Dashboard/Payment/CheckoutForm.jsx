import {CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

 
const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

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

    }

    return (
      <>
         <form className="p-6" onSubmit={handleSubmit}>
      <CardElement
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
      <button className="btn btn-outline btn-sm btn-secondary px-8 mt-4" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {
      cardError && <p className="text-red-500">{cardError}</p>
    }
      </>
    );
};

export default CheckoutForm;