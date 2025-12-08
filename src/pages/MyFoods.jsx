import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import MyFoodCard from "../components/MyFoodCard";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { motion } from "motion/react";

const MyFoods = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { isLoading, data } = useQuery({
        queryKey: ['myFoods'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myFoods/${user?.email}`);
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
                    <h2 className="text-5xl font-bold">My Foods</h2>
                    <p className="text-lg font-mono pt-2">Manage your food listings</p>
                </motion.div>
            </div>
            <div className="container mx-auto px-4 mt-7">
                {data && data.length > 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: [0, 1], y: [50, 0] }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {data.map(food => <MyFoodCard key={food._id} food={food} />)}
                    </motion.div>
                ) : (
                    <div
                        className="flex flex-col justify-center items-center h-[30vh]">
                        <p className="text-xl text-custom-gray mb-4">
                            You haven't added any foods yet
                        </p>
                        <Link to="/all-foods" className="btn btn-orange">
                            Add Your First Food
                        </Link>
                    </div>
                )}
            </div>

        </div>
    );
};

export default MyFoods;