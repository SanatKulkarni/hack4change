import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const navItems = [
        { link: "Home", path: "Home" },
        { link: "Services", path: "Services" },
        { link: "Testimonial", path: "Testimonial" },
        { link: "About", path: "About" },
        { link: "Contact", path: "MyFooter" },
    ];

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : "bg-[#F5F7FA]"}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <RouterLink to="/" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo} alt="logo" className='w-10 inline-block items-center'/>
                        <span className='text-[#263238]'>GemPermit</span>
                    </RouterLink>

                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            location.pathname === '/' ? (
                                <ScrollLink to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-grey900 hover:text-brandPrimary first:font-medium'>
                                    {link}
                                </ScrollLink>
                            ) : (
                                <RouterLink to={`/#${path}`} key={path} className='block text-grey900 hover:text-brandPrimary first:font-medium'>
                                    {link}
                                </RouterLink>
                            )
                        ))}
                    </ul>

                    {/* btn for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <RouterLink to="/dashboard" className='hidden lg:flex items-center text-brandPrimary hover:text-grey900'>
                            Go to Dashboard
                        </RouterLink>
                        <RouterLink to="/business-types" className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>
                            Business Types
                        </RouterLink>
                    </div>

                    {/* menu button for only mobile */}
                    <div className='md:hidden'>
                        <button 
                        onClick={toggleMenu}
                        className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                            {isMenuOpen ? <FaXmark className='h-6 w-6 text-neutralDGrey'/> : <FaBars className='h-6 w-6 text-neutralDGrey'/>}
                        </button>
                    </div>
                </div>
                {/* nav items for mobile devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        location.pathname === '/' ? (
                            <ScrollLink to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-white hover:text-brandPrimary first:font-medium'>
                                {link}
                            </ScrollLink>
                        ) : (
                            <RouterLink to={`/#${path}`} key={path} className='block text-white hover:text-brandPrimary first:font-medium'>
                                {link}
                            </RouterLink>
                        )
                    ))}
                    <RouterLink to="/business-types" className='block text-white hover:text-brandPrimary font-medium'>
                        Sign Up
                    </RouterLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
