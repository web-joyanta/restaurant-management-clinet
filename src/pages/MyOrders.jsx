import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import OrderCard from "../components/OrderCard";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { motion } from "motion/react";

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
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="space-y-2">
                    <h2 className="text-5xl font-bold">My Orders</h2>
                    <p className="text-lg font-mono pt-2">Track your food orders</p>
                </motion.div>
            </div>
            <div className="container mx-auto px-4">
                {data && data.length > 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: [0, 1], y: [50, 0] }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
                        {data.map(food => <OrderCard key={food._id} food={food}></OrderCard>)}
                    </motion.div>
                ) : (
                    <div className="flex flex-col justify-center items-center h-[30vh]">
                        <p className="text-xl text-custom-gray mb-4">
                            You haven't placed any orders yet
                        </p>
                        <Link to="/all-foods" className="btn btn-orange">
                            Browse Foods
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;