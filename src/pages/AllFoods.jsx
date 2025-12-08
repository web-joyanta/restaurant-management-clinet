import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import useAxios from "../hooks/useAxios";
import { motion } from "motion/react";

const AllFoods = () => {
    const categories = ["Starter", "Main Course", "Fast Food", "Japanese Cuisine", "Italian Cuisine", "Traditional", "Salad", "Dessert", "Beverage", "Noodles", "Side"];

    const axiosInstance = useAxios();
    const [itemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');


    // foods count
    const { data: foodsCount } = useQuery({
        queryKey: ['foods-count'],
        queryFn: async () => {
            const res = await axiosInstance.get('/foods-count');
            return res.data;
        }
    });

    // dynamic navigation button
    const totalPages = Math.ceil((foodsCount?.count || 0) / itemsPerPage);
    const pages = [...Array(totalPages).keys()].map(num => num + 1);

    // get all foods data and controls
    useEffect(() => {
        const fetchFoods = async () => {
            const res = await axiosInstance.get(
                `/foods?page=${currentPage}&size=${itemsPerPage}&search=${search}&filter=${filter}&sort=${sort}`
            );
            setFoods(res.data);
        }

        fetchFoods();
    }, [currentPage, itemsPerPage, search, filter, sort]);

    // reset button handler
    const handleReset = () => {
        setSearch('');
        setFilter('');
        setSort('');
    }

    return (
        <div className="bg-gray-50 pb-20">
            <div className="bg-custom-orange text-white text-center py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="space-y-2">
                    <h2 className="text-5xl font-bold">All Foods</h2>
                    <p className="text-lg font-mono pt-2">Explore our complete menu</p>
                </motion.div>
            </div>

            {/* container section */}
            <div className="container mx-auto px-4 mb-12 mt-7">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Filter & Search</h3>
                        <button onClick={handleReset} className="btn bg-custom-orange text-white">
                            Reset
                        </button>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Category Filter */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select onChange={(e) => setFilter(e.target.value)}
                                value={filter}
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
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                                name='search'
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
                            <select onChange={(e) => setSort(e.target.value)} value={sort}
                                className="select select-bordered w-full focus:border-custom-orange"
                            >
                                <option value="">Default</option>
                                <option value="price-asc">Price (Low to High)</option>
                                <option value="price-desc">Price (High to Low)</option>
                            </select>
                        </div>
                    </div>
                </motion.div>
                {/* grid col */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
                    {foods.map(food => <FoodCard key={food._id} food={food} ></FoodCard>)}
                </motion.div>
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