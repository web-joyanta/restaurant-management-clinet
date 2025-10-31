import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import FoodCard from "../components/FoodCard";

const AllFoods = () => {
    const categories = ["Starter", "Main Course", "Fast Food", "Japanese Cuisine", "Italian Cuisine", "Traditional", "Salad", "Dessert", "Beverage", "Noodles", "Side"];
    const axiosInstance = useAxios();

    // all data get
    const { isPending, data } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await axiosInstance.get('/foods');
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
    }

    return (
        <div className="bg-gray-50 pb-20">
            <div className="bg-custom-orange text-white text-center py-20">
                <h2 className="text-5xl font-bold">All Foods</h2>
                <p className="text-lg font-mono pt-2">Explore our complete menu</p>
            </div>

            {/* container section */}
            <div className="container mx-auto px-4 mb-12 mt-7">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Filter & Search</h3>
                        <button
                            className="btn btn-ghost btn-sm text-gray-600 hover:text-custom-orange"
                        >
                            Reset All
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Category Filter */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select
                                className="select select-bordered w-full focus:border-custom-orange"
                            >
                                <option value="">All Categories</option>
                                {categories.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>

                        {/* Search Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Search</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Search foods by name..."
                                className="input input-bordered w-full focus:border-custom-orange"
                            />
                        </div>

                        {/* Sort */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sort By</span>
                            </label>
                            <select
                                className="select select-bordered w-full focus:border-custom-orange"
                            >
                                <option value="">Default</option>
                                <option value="price-asc">Price (Low to High)</option>
                                <option value="price-desc">Price (High to Low)</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* grid col */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
                    {data.map(food => <FoodCard key={food._id} food={food} ></FoodCard>)}
                </div>
            </div>
        </div>
    );
};

export default AllFoods;