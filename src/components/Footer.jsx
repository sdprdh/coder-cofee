import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import creaditCard from '../assets/website/credit-cards.webp';


export const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-primary to-primaryDark p-4 md:p-8 text-white mt-10">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <section className="space-y-6">
                        <h1 className="text-3xl font-bold uppercase">Coders Cafe</h1>
                        <p className="text-sm max-w-[300px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, numquam dolores
                        </p>
                        <div>
                            <p className="flex items-center gap-2">
                                <FaPhone /> +1 (123) 456-7890
                            </p>
                            <p className="flex items-center gap-2 mt-2">
                                <FaMapMarkerAlt /> Noida, Uttar Pradesh
                            </p>
                        </div>
                    </section>

                    {/* Quick Links */}
                    <section className="space-y-6">
                        <h1 className="text-3xl font-bold">Quick Links</h1>
                        <div className="grid grid-cols-2 gap-3">
                            <ul className="space-y-2">
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                            </ul>
                            <ul className="space-y-2">
                                <li>Terms</li>
                                <li>Services</li>
                                <li>Support</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </section>

                    {/* Follow Us */}
                    <section className="space-y-6">
                        <h1 className="text-3xl font-bold">Follow Us</h1>
                        <div className="flex items-center gap-3">
                            <FaFacebook className="text-3xl hover:scale-105 duration-300" />
                            <FaTwitter className="text-3xl hover:scale-105 duration-300" />
                            <FaInstagram className="text-3xl hover:scale-105 duration-300" />
                            <FaYoutube className="text-3xl hover:scale-105 duration-300" />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
                            <img src={creaditCard} alt="credit cards" className="w-[80%]" />
                        </div>
                    </section>
                </div>
                <p className="text-white text-center mt-8 pt-8 border-t-2">
                    Copyright © 2024 Company Name. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

