import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import OrderCard from "../components/OrderCard";




const MyOrders = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { isLoading, data } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders/${user?.email}`);
            return res.data;
        }
    })

    // loading spinner
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <span className="loading loading-spinner text-orange-500 text-9xl"></span>
            </div>
        )
    }

    return (
        <div className="bg-gray-50 pb-20">
            <div className="bg-custom-orange text-white text-center py-20 mb-12">
                <h2 className="text-5xl font-bold">My Orders</h2>
                <p className="text-lg font-mono pt-2">Track your food orders</p>
            </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
                    {data.map(food => <OrderCard key={food._id} food={food}></OrderCard>)}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;