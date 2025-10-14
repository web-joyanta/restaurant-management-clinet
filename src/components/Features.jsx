import React from 'react';
import { ChefHat, Clock, Star } from "lucide-react";

const Features = () => {
    return (
        <div>
            {/* Features Section */}
            <section className="py-20 bg-[#F8F5F3]/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-xl shadow-2xl ">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d26f2d] text-white mb-4">
                                <Clock className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                            <p className="text-muted-foreground">Get your food delivered hot and fresh within 30 minutes</p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl shadow-2xl">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d26f2d] text-white mb-4">
                                <ChefHat className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Quality Ingredients</h3>
                            <p className="text-muted-foreground">Fresh, high-quality ingredients in every dish</p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl shadow-2xl">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d26f2d] text-white mb-4">
                                <Star className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Top Rated</h3>
                            <p className="text-muted-foreground">Highly rated by thousands of satisfied customers</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;