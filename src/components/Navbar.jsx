import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><NavLink className="font-medium hover:text-[#d26f2d] text-[15px]">Home</NavLink></li>
        <li><NavLink className="font-medium hover:text-[#d26f2d] text-[15px]">All Foods</NavLink></li>
        <li><NavLink className="font-medium hover:text-[#d26f2d] text-[15px]">Gallery</NavLink></li>
    </>
    return (
        <nav className="fixed navbar bg-base-100 shadow-sm z-50">
            {/* nav container */}
            <div className='flex container mx-auto px-4'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    {/* logo lg start */}
                    <div className='hidden lg:flex'>
                        <Link className="text-xl text-[#d26f2d] font-bold">DelightBites</Link>
                    </div>
                </div>
                {/* logo sm center */}
                <div className='navbar-center lg:hidden'>
                    <Link className="text-xl text-[#d26f2d] font-bold">DelightBites</Link>
                </div>
                <div className="navbar-end">
                    {/* nav links lg */}
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    {/* profile */}
                    <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-15 rounded-full">
                                <img
                                    referrerPolicy='no-referrer'
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link className="hover:bg-[#39c674] hover:text-white text-[15px]">My Foods</Link></li>
                            <li><Link className="hover:bg-[#39c674] hover:text-white text-[15px]">Add Food</Link></li>
                            <li><Link className="hover:bg-[#39c674] hover:text-white text-[15px] text-[#dc2828]">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;