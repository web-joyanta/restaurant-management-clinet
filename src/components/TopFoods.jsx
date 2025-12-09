import useAxios from '../hooks/useAxios';
import { useQuery } from "@tanstack/react-query";
import FoodCard from './FoodCard';
import { Link } from 'react-router-dom';
import { motion } from "motion/react";
const TopFoods = () => {
    const axiosInstance = useAxios();

    const { data, isLoading } = useQuery({
        queryKey: ['top-foods'],
        queryFn: async () => {
            const response = await axiosInstance.get('/top-foods');
            return response.data;
        }
    })

    // data load pending
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <span className="loading loading-spinner text-orange-500 text-9xl"></span>
            </div>
        )
    }

    return (
        <div className='container mx-auto px-4 py-20'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: [0, 1], y: [50, 0] }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className='text-center'>
                <h2 className="text-4xl font-bold mb-5">Top Selling Foods</h2>
                <p className='text-lg text-custom-gray font-mono'>Discover our most popular dishes</p>
            </motion.div>
            {/* top 6 food grid col */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: [0, 1], y: [50, 0] }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
                {data.map(food => <FoodCard key={food._id} food={food} ></FoodCard>)}
            </motion.div>
            <div className='flex justify-center pt-10'>
                <Link to="all-foods" className='btn text-white font-medium rounded-md border-0 bg-[#d26f2d]'>View All Foods</Link>
            </div>
        </div>
    );
};

export default TopFoods;