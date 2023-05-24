 
const MenuItem = ({item}) => {
    
    const {image, name, price, recipe} = item;
     
    return (
        <section>
            <img style={{width:"118px", borderRadius:"0 200px 200px 200px"}} src={image} alt="" />
            <div className="flex justify-between">
            <h4 className="text-lg uppercase">{name}--------------</h4>
            <p className="text-yellow-500">${price}</p>
            </div>
            <p>{recipe}</p>
        </section>
    );
};

export default MenuItem;