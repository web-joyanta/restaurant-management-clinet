import { BsBoxSeam } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
    const { _id, image, name, category, purchase, origin, price, quantity } = food;
    return (
        <div className="card bg-base-100 shadow-sm overflow-hidden group">
            <figure className="relative">
                <img
                    src={image}
                    className="w-full h-56 object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
                    alt="Shoes" />
                <span className="absolute text-white font-medium rounded-md border-0 bg-[#d26f2d] font-medium  px-2 right-3 top-3">{category}</span>
            </figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title">{name}</h2>
                    <span className="text-lg font-bold text-custom-orange">${price}</span>
                </div>
                <div className="flex justify-between">
                    <div className="text-custom-gray"><BsBoxSeam className="inline mr-2" />Qty:<span className={`${quantity === 0 ? "text-red-500 font-semibold" : ""}`}> {quantity === 0 ? `${quantity} (Out of Stock)` : quantity}</span></div>
                    <div><p className="text-custom-gray">Origin: {origin}</p></div>
                </div>
                <div className="text-custom-gray"><LuShoppingCart className="inline mr-2" /><span>{purchase} sold</span></div>
                <div className="card-actions justify-center pt-2">
                    <Link to={`/food/${_id}`} className="btn text-white font-medium rounded-md border-0 bg-[#d26f2d] w-full btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;