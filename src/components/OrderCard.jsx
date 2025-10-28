import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FiCalendar } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const OrderCard = ({ food }) => {
    const { _id, image, name, buyingDate, price, totalPrice, purchaseQuantity, addedBy: { email } } = food;
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: async (foodId) => {
            await axiosSecure.delete(`/food/${foodId}`);
        },
        onSuccess: () => {
            toast.success("deleted successfully!");
            queryClient.invalidateQueries(["orders"]) // Refresh orders
        },
        onError: () => {
            toast.error("Delete failed!");
        },
    })

    // delete function
    const handleDelete = async (id) => {
        toast((t) => (
            <div className="flex flex-col gap-2">
                <p>Are you sure you want to cancel this order?</p>
                <div className="flex gap-2 justify-end">
                    <button className="btn btn-sm btn-error "
                        onClick={() => {
                            mutate(id); // delete call
                            toast.dismiss(t.id);  //close toast
                        }}>Yes</button>
                    {/*  cancel button */}
                    <button className="btn btn-sm btn-success"
                        onClick={() => toast.dismiss(t.id)}
                    >No</button>
                </div>
            </div>
        ),
            { duration: 5000 }
        )
    };
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
                    <span className="text-lg font-bold text-custom-orange">${totalPrice}</span>
                </div>
                <div className="flex justify-between">
                    <div className="text-custom-gray">Quantity:</div>
                    <div><p className="text-custom-gray font-bold">{purchaseQuantity}</p></div>
                </div>
                <div className="flex justify-between">
                    <div className="text-custom-gray">Price per item:</div>
                    <div><p className="text-custom-gray font-bold">${price}</p></div>
                </div>
                <div className="text-custom-gray flex items-center gap-2"><FiCalendar /><span>{buyingDate}</span></div>
                <div className="text-custom-gray flex items-center gap-2"><LuUser /><span>{email}</span></div>
                <div className="card-actions justify-center pt-2">
                    <button onClick={() => handleDelete(_id)} className="btn bg-custom-red text-white w-full"><RiDeleteBinLine className="text-lg" />{isPending ? "Cancelling..." : "Cancel Order"}</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;