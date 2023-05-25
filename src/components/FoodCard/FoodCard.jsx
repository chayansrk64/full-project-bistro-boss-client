const FoodCard = ({item}) => {
    const {image, name, price, recipe} = item;
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
          <button className="btn btn-outline mt-5 bg-slate-100 border-orange-300 border-0 border-b-4">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
