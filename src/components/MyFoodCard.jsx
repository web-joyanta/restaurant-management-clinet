import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MyFoodCard = ({ food }) => {
    const { _id, name, image, category, price, quantity } = food;
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const { isPending, mutateAsync } = useMutation({
        mutationFn: async (id) => {
            await axiosSecure.delete(`/my-food/${id}`)
        },
        onSuccess: () => {
            toast.success("Deleted Successfully!");
            queryClient.invalidateQueries(["my-foods"]) // Refresh my-foods
        }
    })

    const handleDelete = (id) => {
        try {
            toast((t) => (
                <div className="flex flex-col gap-2">
                    <p>Are you sure you want to delete?</p>
                    <div className="flex gap-2 justify-end">
                        <button className="btn btn-sm btn-error"
                            onClick={async () => {
                                await mutateAsync(id); // delete call
                                toast.dismiss(t.id);  //close toast
                            }}>Delete</button>
                        {/*  cancel button */}
                        <button className="btn btn-sm btn-success"
                            onClick={() => toast.dismiss(t.id)}
                        >Cancel</button>
                    </div>
                </div>
            ),
                { duration: 5000 }
            )
        } catch {
            toast.error("Delete failed!");
        }
    }

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
                    <Link to={`/update-food/${_id}`} className="flex-1 btn w-full hover:bg-custom-green hover:text-white" ><GrEdit />Update</Link>
                    <button onClick={() => handleDelete(_id)} className="flex-1 btn bg-custom-red text-white w-full"><RiDeleteBinLine className="text-lg" />{isPending ? "Deleting..." : "Delete"}</button>
                </div>
            </div>
        </div>
    );
};

export default MyFoodCard;