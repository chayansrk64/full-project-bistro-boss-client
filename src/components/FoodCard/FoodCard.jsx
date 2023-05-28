
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
    const {_id, image, name, price, recipe} = item;

    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();

    const handleAddToCart = item => {
      console.log(item);
      if(user && user.email){
        const cartItem = {menuItemId: _id, name, price, image, email: user.email}
        fetch('http://localhost:5000/carts', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
         if(data.insertedId){
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Added to cart',
            showConfirmButton: false,
            timer: 1500
          })
         }
        })
      }
      else{
        Swal.fire({
          title: 'You have to login first',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state:{from:location}})
          }
        })
      }
     

    }
  return (
    <div className="card w-96 bg-base-100   shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 bg-slate-900 text-white px-4 py-1 mt-4 me-8">${price}</p>
      <div className="card-body">
        <h2 className="card-title justify-center"> {name} </h2>
        <p className="text-center"> {recipe} </p>
        <div className="card-actions flex flex-col items-center">
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline mt-5 bg-slate-100 border-orange-300 border-0 border-b-4">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
