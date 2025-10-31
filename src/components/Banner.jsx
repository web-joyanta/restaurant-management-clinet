import Lottie from "lottie-react";
import foodLottieAnimation from '../assets/lottie/hero-food.json';
import { Link } from "react-router-dom";
const Banner = () => {

    return (
        <div className="flex items-center text-white min-h-[600px] bg-[url('src/assets/hero-banner.jpg')] bg-black/80 bg-blend-overlay bg-center bg-cover bg-no-repeat py-6">
            <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row justify-between items-center gap-10">

                {/* Left: Text (will appear below on small, left on large) */}
                <div className="flex-1 text-center md:text-left space-y-5">
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        Discover Delicious Food from Around the World
                    </h2>
                    <p className="text-lg md:text-xl">
                        Order your favorite dishes and experience culinary excellence delivered to your door.
                    </p>
                    <button className="btn text-custom-orange">
                        <Link to="all-foods">Explore All Foods</Link>
                    </button>
                </div>

                {/* Right: Lottie Animation (will appear on top on small, right on large) */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px]">
                        <Lottie animationData={foodLottieAnimation} loop autoplay />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;