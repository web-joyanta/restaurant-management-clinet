import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import { LuShoppingCart, LuUser } from "react-icons/lu";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const FoodDetails = () => {
    const { id } = useParams();
    const axiosInstance = useAxios();
    const { user } = useAuth();
    const navigate = useNavigate();
    // all data get
    const { isPending, data } = useQuery({
        queryKey: ['foods', id],
        queryFn: async () => {
            const res = await axiosInstance.get(`/foods/${id}`);
            return res.data;
        }
    });
    // data load pending
    if (isPending) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <span className="loading loading-spinner text-orange-500 text-9xl"></span>
            </div>
        )
    };

    const { _id, image, name, category, purchase, origin, price, quantity, description, addedBy } = data;

    const handlePurchase = () => {
        if (user?.email === addedBy?.email) {
            return toast.error('You cannot purchase your own food item');
        }
        navigate(`/food-purchase/${_id}`);
    };

    return (
        <div className="bg-custom-red-bg pb-20">
            <div className="container mx-auto px-4 py-12">
                {/* main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <img src={image} alt="food" className="w-full h-[500px] object-cover rounded-2xl shadow-warm" />
                    </div>
                    <div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="rounded-full border font-semibold btn-orange text-lg px-4 py-1">
                                    {category}
                                </div>
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-sm border-custom-gray">
                                    <HiOutlineLocationMarker />
                                    {origin}
                                </div>
                            </div>
                            <h2 className="text-4xl font-bold mb-4">{name}</h2>
                            <p className="text-3xl font-bold text-custom-orange mb-6">${price}</p>
                        </div>
                        <div className="rounded-lg border border-custom-gray shadow-sm">
                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <BsBoxSeam className="text-custom-gray"></BsBoxSeam>
                                        <span className="font-medium">Available Quantity:</span>
                                    </div>
                                    <span className={`${quantity === 0 ? 'text-red-500 font-bold' : 'font-bold text-custom-orange'}`}>{quantity === 0 ? '(Out of Stock)' : quantity}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <LuShoppingCart className="text-custom-gray"></LuShoppingCart>
                                        <span className="font-medium">Total Purchases:</span>
                                    </div>
                                    <span className="font-bold">{purchase}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <LuUser className="text-custom-gray"></LuUser>
                                        <span className="font-medium">Added By:</span>
                                    </div>
                                    <span className="font-semibold">{addedBy?.name}</span>
                                </div>
                            </div>
                        </div>
                        <div className="py-6">
                            <h3 className="text-2xl font-semibold mb-3">Description</h3>
                            <p className="text-custom-gray">{description}</p>
                        </div>
                        <button onClick={handlePurchase} disabled={quantity === 0} className={`btn btn-orange w-full h-12 text-lg py-2 ${quantity === 0 ? 'text-custom-orange' : 'hover:bg-amber-600'}`}>{quantity === 0 ? "Out of Stock" : "Purchase Now"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;