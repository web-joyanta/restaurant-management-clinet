import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import MyFoodCard from "../components/MyFoodCard";

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

    console.log(data);

    return (
        <div className="pb-20">
            <div className="bg-custom-orange text-white text-center py-20 mb-12">
                <h2 className="text-5xl font-bold">My Foods</h2>
                <p className="text-lg font-mono pt-2">Manage your food listings</p>
            </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
                    {data.map(food => <MyFoodCard key={food._id} food={food}></MyFoodCard>)}
                </div>
            </div>
        </div>
    );
};

export default MyFoods;