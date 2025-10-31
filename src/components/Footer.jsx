import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-base-100 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                    {/* Branding / CTA */}
                    <div>
                        <h3 className="text-2xl font-bold text-custom-orange">DelightBites</h3>
                        <p className="mt-2 text-sm max-w-sm">
                            Delicious meals delivered fast. Follow us for updates, new menus and special offers.
                        </p>
                        <div className="mt-4 flex gap-3">
                            <a aria-label="facebook" className="p-2 rounded bg-custom-orange hover:bg-orange-400" href="https://www.facebook.com/web.joyanta">
                                <FaFacebookF />
                            </a>
                            <a aria-label="twitter" className="p-2 rounded bg-custom-orange hover:bg-orange-400" href="https://x.com/web_joyanta">
                                <FaTwitter />
                            </a>
                            <a aria-label="instagram" className="p-2 rounded bg-custom-orange hover:bg-orange-400" href="https://www.instagram.com/web.joyanta">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="mt-3 space-y-2 text-sm ">
                            <li><Link to="/" className="hover:text-custom-orange">Home</Link></li>
                            <li><Link to="/all-foods" className="hover:text-custom-orange">All Foods</Link></li>
                            <li><Link to="/gallery" className="hover:text-custom-orange">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <span>+1 234 567 890</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                <span>info@delightbites.com</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>123 Food Street, NY</span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold">Hours</h4>
                        <div className="space-y-2 text-sm mt-2 text-muted-foreground">
                            <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
                            <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                        </div>

                    </div>
                </div>

                {/* bottom row */}
                <div className="mt-8 border-t border-gray-800 text-center pt-6 text-sm">
                    <p>© {new Date().getFullYear()} DelightBites. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;