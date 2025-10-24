import { BsBoxSeam } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";

const FoodCard = ({ food }) => {
    const { image, name, category, purchase, origin, price, quantity } = food;
    return (
        <div className="card bg-base-100 shadow-sm overflow-hidden group">
            <figure className="relative">
                <img
                    src={image}
                    className="w-full h-56 object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
                    alt="Shoes" />
                    <span className="absolute btn-orange font-medium  px-2 right-3 top-3">{category}</span>
            </figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title">{name}</h2>
                    <span className="text-lg font-bold text-custom-orange">${price}</span>
                </div>
                <div className="flex justify-between">
                    <div className="text-custom-gray"><BsBoxSeam className="inline mr-2" /><span>Qty: {quantity}</span></div>
                    <div><p className="text-custom-gray">Origin: {origin}</p></div>
                </div>
                <div className="text-custom-gray"><LuShoppingCart className="inline mr-2" /><span>{purchase} sold</span></div>
                <div className="card-actions justify-center pt-2">
                    <button className="btn btn-orange w-full btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;