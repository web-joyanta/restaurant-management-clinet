import React from 'react';
import { ChefHat, Clock, Star } from "lucide-react";
import { motion } from "motion/react";

const Features = () => {
    return (
        <div>
            {/* Features Section */}
            <section className="py-20 bg-[#F8F5F3]/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: [0, 1], y: [50, 0] }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="text-center p-6 bg-white rounded-xl shadow-2xl ">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-custom-orange text-white mb-4">
                                <Clock className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                            <p className="text-muted-foreground">Get your food delivered hot and fresh within 30 minutes</p>
                        </motion.div>

                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                            }}
                            className="text-center p-6 bg-white rounded-xl shadow-2xl">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-custom-orange text-white mb-4">
                                <ChefHat className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Quality Ingredients</h3>
                            <p className="text-muted-foreground">Fresh, high-quality ingredients in every dish</p>
                        </motion.div>

                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                            }}
                            className="text-center p-6 bg-white rounded-xl shadow-2xl">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-custom-orange text-white mb-4">
                                <Star className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Top Rated</h3>
                            <p className="text-muted-foreground">Highly rated by thousands of satisfied customers</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Features;