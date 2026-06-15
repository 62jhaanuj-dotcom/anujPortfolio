'use client';

import { useState, useEffect } from 'react';
import type React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            // Adjust offset for the floating navbar
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        // Outer wrapper fixes the navbar to the top and adds padding
        <div className="fixed top-0 w-full z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-500">
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full max-w-6xl transition-all duration-500 rounded-lg ${
                    isScrolled
                        ? 'bg-black/75 backdrop-blur-xl border border-white/10 shadow-lg py-3 px-5 md:px-6'
                        : 'bg-transparent border border-transparent py-4 px-2 md:px-4 lg:px-8'
                }`}
            >
                <div className="flex justify-between items-center relative">
                    
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-xl font-extrabold tracking-tight cursor-pointer flex items-center gap-1"
                        onClick={(e) => handleNavClick(e, '#hero')}
                    >
                        <span className="text-white">{'<'}</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                            Anuj Jha
                        </span>
                        <span className="text-white">{'>'}</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-300"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Right Side Desktop CTA (Optional but recommended for portfolios) */}
                    <div className="hidden md:block">
                        <motion.a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2.5 text-sm font-bold text-black bg-white rounded-lg hover:bg-orange-100 transition-all"
                        >
                            Hire Me
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 8, backgroundColor: '#fff' } : { rotate: 0, y: 0, backgroundColor: '#9ca3af' }}
                            className="w-6 h-0.5 rounded-full transition-colors"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: '#9ca3af' }}
                            className="w-6 h-0.5 rounded-full transition-colors"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8, backgroundColor: '#fff' } : { rotate: 0, y: 0, backgroundColor: '#9ca3af' }}
                            className="w-6 h-0.5 rounded-full transition-colors"
                        />
                    </motion.button>
                </div>

                {/* Mobile Navigation Dropdown Card */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="md:hidden overflow-hidden absolute top-full left-0 w-full mt-4"
                        >
                            <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-lg p-3 shadow-2xl mx-auto flex flex-col gap-1">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.href}
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-medium transition-all"
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                                <motion.a
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, '#contact')}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="mt-2 text-center text-black bg-white px-4 py-3 rounded-lg font-bold hover:bg-orange-100 transition-colors"
                                >
                                    Hire Me
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
};

export default Navbar;
