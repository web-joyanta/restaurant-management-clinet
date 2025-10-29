import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

const MyFoodCard = ({ food }) => {
    const { name, image, category, price, quantity, origin, description } = food;
    console.log(name, image, category, price, quantity, origin, description)
    return (
        <div className="card bg-base-100 shadow-md 
                    hover:shadow-orange-200 hover:shadow-2xl 
                    transition-all duration-300 ease-in-out">
            <figure >
                <img
                    src={image}
                    className="w-full h-56 object-cover"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title">{name}</h2>
                    <span className="text-lg font-bold text-custom-orange">${price}</span>
                </div>
                <div className="flex justify-between text-custom-gray">
                    <div>Category: {category}</div>
                    <div>Qty: {quantity}</div>
                </div>
                <div className="flex justify-between gap-2 pt-2">
                    <button className="flex-1 btn w-full hover:bg-custom-green hover:text-white"><GrEdit /> Update</button>
                    <button className="flex-1 btn bg-custom-red text-white w-full"><RiDeleteBinLine className="text-lg" />Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyFoodCard;