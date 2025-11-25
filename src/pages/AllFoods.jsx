import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import FoodCard from "../components/FoodCard";
import useAxios from "../hooks/useAxios";

const AllFoods = () => {
    const categories = ["Starter", "Main Course", "Fast Food", "Japanese Cuisine", "Italian Cuisine", "Traditional", "Salad", "Dessert", "Beverage", "Noodles", "Side"];

    const axiosInstance = useAxios();
    const [itemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    // foods count
    const { data: foodsCount } = useQuery({
        queryKey: ['foods-count'],
        queryFn: async () => {
            const res = await axiosInstance.get('/foods-count');
            return res.data;
        }
    });

    const totalPages = Math.ceil((foodsCount?.count || 0) / itemsPerPage);
    const pages = [...Array(totalPages).keys()].map(num => num + 1);

    // all data get
    const { isPending, data } = useQuery({
        queryKey: ['foods', currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await axiosInstance.get(`/foods?page=${currentPage}&size=${itemsPerPage}`);
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

    // 
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
                        <button className="btn bg-custom-orange text-white">
                            Reset
                        </button>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                        <div className="form-control lg:col-span-2">
                            <label className="label flex lg:justify-center">
                                <span className="label-text">Search</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Search foods by name..."
                                className="input input-bordered w-full lg:border-2 lg:border-custom-orange  lg:rounded-4xl"
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
                {/* navigation start*/}
                <div className="flex mt-9 justify-center">
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="flex shadow items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-custom-orange dark:hover:bg-custom-orange hover:text-white dark:hover:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {pages.map(page => (
                        <button onClick={() => setCurrentPage(page)} key={page} className={`hidden shadow px-4 py-2 mx-1 text-custom-orange transition-colors duration-300 transform  rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 ${currentPage === page ? 'bg-custom-orange text-white' : 'bg-white'} hover:bg-custom-orange dark:hover:bg-custom-orange hover:text-white dark:hover:text-gray-200`}>
                            {page}
                        </button>
                    ))}

                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className="flex shadow items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-custom-orange dark:hover:bg-custom-orange hover:text-white dark:hover:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                {/* navigation end */}
            </div>
        </div>
    );
};

export default AllFoods;