import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const UpdateFood = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const categories = ["Starter", "Main Course", "Fast Food", "Japanese Cuisine", "Italian Cuisine", "Traditional", "Salad", "Dessert", "Beverage", "Noodles", "Side"];

    const { isLoading, data } = useQuery({
        queryKey: ['foods', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/foods/${id}`);
            return res.data;
        }
    })

    const { isPending, mutateAsync } = useMutation({
        mutationFn: async (updatedFood) => {
            await axiosSecure.put(`/update-food/${id}`, updatedFood);
            queryClient.invalidateQueries({ queryKey: ['foods'] });
        },
        onSuccess: () => {
            toast.success("Food item updated successfully!");
        }
    })

    const { image, name, category, origin, price, quantity, description, addedBy } = data || {};

    const handleUpdateFood = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const origin = form.origin.value;
        const description = form.description.value;

        const updatedFood = {
            name,
            image,
            category,
            quantity: Number(quantity),
            price: Number(price),
            origin,
            description,
        }

        try {
            await mutateAsync(updatedFood);
            form.reset();
            navigate("/my-foods");
        } catch (err) {
            toast.error(`Error updating food item: ${err.message}`);
        }
    }


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
                <h2 className="text-5xl font-bold">Update Food</h2>
                <p className="text-lg font-mono pt-2">Modify food details easily</p>
            </div>
            <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6 my-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Food Details</h2>

                <form onSubmit={handleUpdateFood} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Food Name</label>
                        <input
                            name="name"
                            className="input w-full mt-1"
                            placeholder="e.g. Spicy Chicken Curry"
                            defaultValue={name}
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
                            defaultValue={image}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select
                                name="category"
                                className="input w-full mt-1"
                                defaultValue={category}
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
                                defaultValue={quantity}
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
                                defaultValue={price}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Add By (name & email)</label>
                        <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <input
                                defaultValue={addedBy?.name}
                                readOnly
                                className="input w-full bg-gray-100"
                                placeholder="Name"
                            />
                            <input
                                defaultValue={addedBy?.email}
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
                            defaultValue={origin}
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
                            defaultValue={description}
                            required
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="btn btn-orange w-full"
                        > {isPending ? "Updating" : "Update Food"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;