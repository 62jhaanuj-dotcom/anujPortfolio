'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import type React from 'react';

const Contact = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    }) as {
        ref: React.RefObject<HTMLDivElement>;
        inView: boolean;
    }; const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/62jhaanuj-dotcom',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            ),
            hoverClass: 'group-hover:text-white',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/anuj-jha-8b41b9262',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            ),
            hoverClass: 'group-hover:text-[#0A66C2]',
        },
        {
            name: 'LeetCode',
            url: 'https://leetcode.com/u/Jha_anuj',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.543l5.997 5.608a3.802 3.802 0 0 0 2.714.707 3.766 3.766 0 0 0 2.716-.707l4.979-4.653a1.815 1.815 0 0 0 .483-.909 1.87 1.87 0 0 0-.083-1.118 1.723 1.723 0 0 0-.482-.871 1.9 1.9 0 0 0-.858-.456 1.942 1.942 0 0 0-1.071.077 1.986 1.986 0 0 0-.853.482l-3.153 2.946a.379.379 0 0 1-.27.112.383.383 0 0 1-.271-.112l-5.996-5.608a1.95 1.95 0 0 1-.453-.541 2.023 2.023 0 0 1-.225-.63 2.1 2.1 0 0 1 .022-.676 2.072 2.072 0 0 1 .238-.619l3.853-4.126 5.405-5.787a1.353 1.353 0 0 0 .385-.989 1.328 1.328 0 0 0-.402-.931 1.295 1.295 0 0 0-.91-.403zM20.916 11.233a1.968 1.968 0 0 0-1.01.291 1.967 1.967 0 0 0-.71.748 1.95 1.95 0 0 0-.256 1.031 1.96 1.96 0 0 0 .284 1.025 1.944 1.944 0 0 0 .736.716 1.98 1.98 0 0 0 1.038.261 1.96 1.96 0 0 0 1.01-.29 1.967 1.967 0 0 0 .71-.749 1.951 1.951 0 0 0 .256-1.03 1.96 1.96 0 0 0-.284-1.026 1.944 1.944 0 0 0-.736-.716 1.979 1.979 0 0 0-1.038-.261z" /></svg>
            ),
            hoverClass: 'group-hover:text-[#FFA116]',
        },
        {
            name: 'Email',
            url: 'mailto:jhaanuj7389@gmail.com',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            ),
            hoverClass: 'group-hover:text-pink-500',
        },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);
        setSubmitSuccess(false);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setSubmitSuccess(true);
            setFormData({
                name: "",
                email: "",
                message: "",
            });

            // Auto-hide success message after 4 seconds
            setTimeout(() => setSubmitSuccess(false), 4000);

        } catch (error) {
            console.error(error);
            alert("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section id="contact" className="relative pt-24 pb-12 px-4 md:px-8 lg:px-16 bg-black text-white overflow-hidden">

            {/* Background Decorative Blurs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full mix-blend-screen filter blur-[150px] opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full mix-blend-screen filter blur-[150px] opacity-50 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Title */}
                <motion.div
                    ref={ref as React.RefObject<HTMLDivElement>}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Let's Build Something <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Great Together</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
                        I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mt-6 rounded-full" />
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start"
                >
                    {/* Left: Contact Form */}
                    <motion.div variants={itemVariants} className="lg:col-span-3">
                        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                            {/* Subtle internal glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full filter blur-[80px]" />

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all duration-300"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project, opportunity, or just say hello..."
                                        required
                                        rows={6}
                                        className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all duration-300 resize-none"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-white text-black font-bold rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                            Send Message
                                        </>
                                    )}
                                </motion.button>

                                {/* Success Message Popup */}
                                {submitSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center gap-3 text-emerald-400"
                                    >
                                        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <p className="text-sm font-medium">Message sent successfully! I'll be in touch soon.</p>
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>

                    {/* Right: Socials & Availability */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">

                        {/* Social Links Grid */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Connect With Me</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5 }}
                                        className={`group flex flex-col items-center justify-center gap-3 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300`}
                                    >
                                        <span className={`text-gray-400 transition-colors duration-300 ${social.hoverClass}`}>
                                            {social.icon}
                                        </span>
                                        <span className={`font-medium text-sm text-gray-400 transition-colors duration-300 ${social.hoverClass}`}>
                                            {social.name}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Card */}
                        <div className="bg-gradient-to-br from-orange-400/10 to-pink-500/10 border border-orange-400/20 p-6 rounded-2xl backdrop-blur-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" /></svg>
                            </div>
                            <div className="relative z-10">
                                <h4 className="text-orange-400 font-bold mb-4 flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                                    </span>
                                    Available For
                                </h4>
                                <ul className="space-y-3 text-gray-300 text-sm font-light">
                                    <li className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        Full-time Software Engineering roles
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        Internship opportunities
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        Freelance web development
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Premium Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-32 relative z-10 border-t border-white/10 pt-8 pb-4"
            >
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm font-light">
                        &copy; {new Date().getFullYear()} Anuj Jha. All rights reserved.
                    </p>

                    <p className="text-gray-500 text-sm font-light flex items-center gap-1.5">
                        Designed & Built with
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="text-orange-500 inline-block"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                        </motion.span>
                    </p>

                    <div className="text-gray-500 text-sm font-light">
                        Next.js &bull; Tailwind CSS &bull; Framer Motion
                    </div>
                </div>
            </motion.footer>
        </section>
    );
};

export default Contact;