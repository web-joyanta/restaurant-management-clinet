import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Branding / CTA */}
                    <div>
                        <h3 className="text-2xl font-bold text-custom-orange">DelightBites</h3>
                        <p className="mt-2 text-sm text-gray-300 max-w-sm">
                            Delicious meals delivered fast. Follow us for updates, new menus and special offers.
                        </p>
                        <div className="mt-4 flex gap-3">
                            <a aria-label="facebook" className="p-2 rounded bg-gray-800 hover:bg-gray-700" href="https://www.facebook.com/web.joyanta">
                                <FaFacebookF />
                            </a>
                            <a aria-label="twitter" className="p-2 rounded bg-gray-800 hover:bg-gray-700" href="https://x.com/web_joyanta">
                                <FaTwitter />
                            </a>
                            <a aria-label="instagram" className="p-2 rounded bg-gray-800 hover:bg-gray-700" href="https://www.instagram.com/web.joyanta">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="mt-3 space-y-2 text-sm text-gray-300">
                            <li><Link to="/" className="hover:text-white">Home</Link></li>
                            <li><Link to="/all-foods" className="hover:text-white">All Foods</Link></li>
                            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold">Join Our Newsletter</h4>
                        <p className="mt-2 text-sm text-gray-300">Get updates on new dishes and exclusive offers.</p>
                        <form className="mt-4 flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-3 py-2 rounded bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none"
                                aria-label="Email"
                            />
                            <button type="submit" className="px-4 py-2 bg-custom-orange text-white rounded">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* bottom row */}
                <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} DelightBites. All rights reserved.</p>
                    <div className="mt-3 md:mt-0">
                        <Link to="/privacy" className="mr-4 hover:text-white">Privacy</Link>
                        <Link to="/terms" className="hover:text-white">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;