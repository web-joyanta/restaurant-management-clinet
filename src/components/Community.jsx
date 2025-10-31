import React from "react";
import { FaUsers, FaRegComments, FaHeart } from "react-icons/fa";

const Community = () => {
    return (
        <section className="bg-orange-50 rounded-lg shadow-md">
            <div className="container mx-auto py-16 px-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold mb-5">Join Our Food Community</h2>
                    <p className="text-lg text-custom-gray font-mono mt-4">
                        A friendly community of chefs, food lovers and restaurant partners <br /> — share recipes, reviews and grow together.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    <div className="group flex items-center gap-4 p-6 bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl transition-all duration-300 cursor-pointer border border-orange-100/20">
                        <div className="text-3xl text-custom-orange group-hover:scale-110 transition-transform"><FaUsers /></div>
                        <div>
                            <div className="text-2xl font-bold group-hover:text-custom-orange transition-colors">12.5k</div>
                            <div className="text-sm text-custom-gray">Active Members</div>
                        </div>
                    </div>

                    <div className="group flex items-center gap-4 p-6 bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl transition-all duration-300 cursor-pointer border border-orange-100/20">
                        <div className="text-3xl text-custom-orange group-hover:scale-110 transition-transform"><FaRegComments /></div>
                        <div>
                            <div className="text-2xl font-bold group-hover:text-custom-orange transition-colors">24k+</div>
                            <div className="text-sm text-custom-gray">Discussions</div>
                        </div>
                    </div>

                    <div className="group flex items-center gap-4 p-6 bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl transition-all duration-300 cursor-pointer border border-orange-100/20">
                        <div className="text-3xl text-custom-orange group-hover:scale-110 transition-transform"><FaHeart /></div>
                        <div>
                            <div className="text-2xl font-bold group-hover:text-custom-orange transition-colors">8k</div>
                            <div className="text-sm text-custom-gray">Favorites Saved</div>
                        </div>
                    </div>
                </div>

                {/* Testimonials / Community Voices */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <article className="group bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl transition-all duration-300">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="relative">
                                        <img src="https://i.ibb.co.com/zVSzvfpp/RAK.png"
                                            alt="Aisha avatar"
                                            className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                                    </div>
                                    <div>
                                        <div className="font-semibold group-hover:text-custom-orange transition-colors">Aisha R.</div>
                                        <div className="text-xs text-custom-gray">Home Chef</div>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="px-3 py-1 text-xs font-medium bg-orange-100 text-custom-orange rounded-full">
                                            Top Contributor
                                        </span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <span className="absolute -left-2 -top-2 text-4xl text-orange-200 opacity-50">"</span>
                                    <p className="text-sm text-custom-gray relative z-10 pl-4">
                                        I discovered so many new recipes and connected with local chefs. The meal-planning tools saved me hours.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="group bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl transition-all duration-300">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="relative">
                                        <img src="https://i.ibb.co.com/yF8rM663/bunnyimagenews.jpg"
                                            alt="Marco avatar"
                                            className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                                    </div>
                                    <div>
                                        <div className="font-semibold group-hover:text-custom-orange transition-colors">Marco P.</div>
                                        <div className="text-xs text-custom-gray">Restaurant Owner</div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <span className="absolute -left-2 -top-2 text-4xl text-orange-200 opacity-50">"</span>
                                    <p className="text-sm text-custom-gray relative z-10 pl-4">
                                        The feedback from the community helped refine our seasonal menu — higher satisfaction and repeat orders.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="group bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl transition-all duration-300">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="relative">
                                        <img src="https://i.ibb.co.com/sJkRXRQK/1706022354445.jpg"
                                            alt="Lina avatar"
                                            className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-lg group-hover:scale-105 transition-transform duration-300" />
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                                    </div>
                                    <div>
                                        <div className="font-semibold group-hover:text-custom-orange transition-colors">Lina K.</div>
                                        <div className="text-xs text-custom-gray">Food Blogger</div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <span className="absolute -left-2 -top-2 text-4xl text-orange-200 opacity-50">"</span>
                                    <p className="text-sm text-custom-gray relative z-10 pl-4">
                                        Great platform to share recipes and get honest reviews. The community is supportive and creative.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Contributors / Avatars */}
                <div className="flex justify-center items-center gap-4 mb-8">
                    <div className="flex -space-x-3">
                        <img className="w-12 h-12 rounded-full ring-4 ring-white shadow-lg transform hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer object-cover"
                            src="https://i.ibb.co.com/d4xt4vwj/Colors-in-Profile-Pictures.jpg"
                            alt="contrib1" />
                        <img className="w-12 h-12 rounded-full ring-4 ring-white shadow-lg transform hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer object-cover"
                            src="https://i.ibb.co.com/ymWqtqRp/profile-picture-hero-before.webp"
                            alt="contrib2" />
                        <img className="w-12 h-12 rounded-full ring-4 ring-white shadow-lg transform hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer object-cover"
                            src="https://i.ibb.co.com/Xrt4Q6nR/1747851920584.jpg"
                            alt="contrib3" />
                        <img className="w-12 h-12 rounded-full ring-4 ring-white shadow-lg transform hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer object-cover"
                            src="https://i.ibb.co.com/QjcgpJ4C/Professional-Profile-Picture.jpg"
                            alt="contrib4" />
                    </div>
                    <div className="text-sm font-medium text-custom-gray bg-white px-4 py-2 rounded-full shadow-md">
                        Join 200+ contributors sharing recipes, photos and tips.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;