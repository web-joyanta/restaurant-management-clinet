import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const AddFood = () => {
    const { user } = useAuth?.() || {};
    const navigate = useNavigate();
    const categories = ["Starter", "Main Course", "Fast Food", "Japanese Cuisine", "Italian Cuisine", "Traditional", "Salad", "Dessert", "Beverage", "Noodles", "Side"];

    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    // Mutation for adding food item
    const { isPending, mutateAsync } = useMutation({
        mutationFn: async (fromData) => {
            await axiosSecure.post("/foods", fromData);
        },
        onSuccess: () => {
            toast.success("Food item added successfully!");
            queryClient.invalidateQueries({ queryKey: ['foods'] });
        },
    });

    // Handle form submission
    const handleAddFood = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const origin = form.origin.value;
        const description = form.description.value;
        const fromData = {
            name,
            image,
            category,
            quantity: Number(quantity),
            purchase: Number(0),
            price: Number(price),
            description,
            origin,
            addedBy: {
                name: user?.displayName || "Anonymous",
                email: user?.email || "No Email"
            },
        };

        // Submit the form data
        try {
            await mutateAsync(fromData);
            form.reset();
            navigate("/my-foods");
        } catch (err) {
            toast.error(`Error adding food item: ${err.message}`);
        }

    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div
                className="bg-custom-orange text-white text-center py-20 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <h2 className="text-5xl font-bold">Add Food</h2>
                    <p className="text-lg font-mono pt-2">Share your delicious creation</p>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: [0, 1], y: [50, 0] }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6 my-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Food Details</h2>

                <form onSubmit={handleAddFood} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Food Name</label>
                        <input
                            name="name"
                            className="input w-full mt-1"
                            placeholder="e.g. Spicy Chicken Curry"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Food Image (URL)</label>
                        <input
                            name="image"
                            type="url"
                            className="input w-full mt-1"
                            placeholder="https://example.com/image.jpg"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select
                                name="category"
                                className="input w-full mt-1"
                                required
                            >
                                {categories.map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Quantity</label>
                            <input
                                name="quantity"
                                type="number"
                                min="0"
                                className="input w-full mt-1"
                                placeholder="0"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price($)</label>
                            <input
                                name="price"
                                type="number"
                                step="0.01"
                                min="0"
                                className="input w-full mt-1"
                                placeholder="0.00"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Add By (name & email)</label>
                        <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <input
                                value={user?.displayName || user?.name || ""}
                                readOnly
                                className="input w-full bg-gray-100"
                                placeholder="Name"
                            />
                            <input
                                value={user?.email || ""}
                                readOnly
                                className="input w-full bg-gray-100"
                                placeholder="Email"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Food Origin (Country)</label>
                        <input
                            name="origin"
                            className="input w-full mt-1"
                            placeholder="e.g. India"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Short Description</label>
                        <textarea
                            name="description"
                            rows="5"
                            className="input w-full mt-1 textarea"
                            placeholder="Ingredients, making procedure, etc."
                            required
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="btn btn-orange w-full"
                        > {isPending ? "Adding..." : "Add Food"}
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default AddFood;