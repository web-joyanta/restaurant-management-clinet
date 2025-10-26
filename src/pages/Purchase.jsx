import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { format } from "date-fns";

const Purchase = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [purchaseQuantity, setPurchaseQuantity] = useState(1);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    // all data get
    const { data, isLoading } = useQuery({
        queryKey: ['foods', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/foods/${id}`);
            return res.data;
        }
    });

    const { mutateAsync, isPending } = useMutation({
        mutationFn: async ({ formData, id, quantity, purchase }) => {
            await axiosSecure.post('/purchases', formData);
            await axiosSecure.patch(`/food/${id}`, { quantity, purchase });
        },
        onSuccess: () => {
            toast.success("Food Purchases successfully!");
            queryClient.invalidateQueries({ queryKey: ['purchases'] });
        },
    })

    // data load pending
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <span className="loading loading-spinner text-orange-500 text-9xl"></span>
            </div>
        )
    }

    // data props items
    const { name, image, price, quantity, purchase, addedBy } = data;

    // quantity or price validation
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value) || 1;
        if (quantity >= value) {
            setPurchaseQuantity(value);
        } else {
            setPurchaseQuantity(quantity);
            toast.error(`Only ${quantity} items available`);
        }
    };

    const handlePurchase = async (e) => {
        e.preventDefault();
        const buyingDate = format(new Date(), "MMM dd, yyyy, hh:mm a");
        const totalPrice = price * purchaseQuantity;
        const currentQuantity = quantity - purchaseQuantity;
        const totalPurchase = purchase + purchaseQuantity;

        const foodPurchase = {
            food_id: id,
            name,
            image,
            price,
            totalPrice,
            purchaseQuantity,
            buyingDate,
            addedBy,
            buyer: {
                name: user?.displayName || "Anonymous",
                email: user?.email || "No Email"
            },
        }

        // Submit the form data
        try {
            await mutateAsync({
                formData: foodPurchase,
                id,
                quantity: currentQuantity,
                purchase: totalPurchase,
            });
            navigate("/my-orders");
        } catch (err) {
            toast.error(`Error purchases food item: ${err.message}`);
        }
    }

    return (
        <div className="bg-custom-red-bg pb-20">
            <div className="container mx-auto px-4 py-12">
                <div className="bg-white rounded-lg shadow-sm max-w-2xl mx-auto">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="font-semibold text-3xl">Complete Your Purchase</h3>
                    </div>
                    <div className="p-6 pt-0">
                        <form onSubmit={handlePurchase} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium">Food Name</label>
                                    <input className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm bg-custom-red-bg" readonly value={name} />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Price</label>
                                    <input className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm bg-custom-red-bg" readonly value={`$${price}`} />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Quantity</label>
                                    {/* onChange current quantity */}
                                    <input onChange={handleQuantityChange} type="number" value={purchaseQuantity} className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm bg-custom-red-bg" />
                                    <p className="text-sm text-custom-gray mt-1">Available: {quantity}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Total Price</label>
                                    <input className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm bg-custom-red-bg font-bold" readonly value={`$${(price * purchaseQuantity).toFixed(2)}`} />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Buyer Name</label>
                                    <input className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm bg-custom-red-bg" readonly value={user?.displayName} />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Buyer Email</label>
                                    <input className="flex h-10 w-full rounded-md border px-3 py-2 text-base md:text-sm bg-custom-red-bg" readonly value={user?.email} />
                                </div>
                            </div>
                            <button className="btn btn-orange w-full h-12 text-lg py-2">{isPending ? 'Processing' : 'Confirm Purchase'}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;