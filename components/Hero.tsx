'use client';

import { motion } from 'framer-motion';

const Hero = () => {
    const handleDownloadResume = () => {
        window.open('https://drive.google.com/file/d/14N4-CNz-rezJ5CxbvNOPV50uVlcNirVI/view?usp=drive_link', '_blank');
    };

    const techStack = ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'];

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-black text-white">
            
            {/* Background Decorative Blurs */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/30 to-transparent" />
            <div className="absolute left-1/2 top-24 h-72 w-[min(42rem,90vw)] -translate-x-1/2 bg-orange-500/10 blur-[120px]" />

            <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
                
                {/* Profile Image / Avatar */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }}
                    className="mb-8 relative"
                >
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-br from-orange-400 to-rose-500">
                        <div className="w-full h-full rounded-full bg-zinc-900 border-4 border-black overflow-hidden flex items-center justify-center">
                            {/* Replace src with your actual professional photo */}
                            <img 
                                src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=transparent" 
                                alt="Profile Avatar" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Subtitle Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-white/10 bg-white/[0.04] text-sm font-medium text-gray-300"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Available for new opportunities
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
                >
                    I write code and create <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-rose-400 to-amber-300">
                        content about it.
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light"
                >
                    Full-stack developer passionate about modern web technologies. 
                    Currently a Final-year CSE student at RGPV Bhopal, specializing in the MERN stack and scalable production deployments.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mb-16"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-7 py-3.5 bg-white text-black font-semibold rounded-lg shadow-sm hover:bg-orange-100 transition-all flex items-center justify-center gap-2"
                    >
                        Get in Touch
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </motion.a>

                    <motion.button
                        onClick={handleDownloadResume}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-7 py-3.5 bg-white/[0.04] hover:bg-white/10 border border-white/10 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                        Download CV
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    </motion.button>
                </motion.div>

                {/* Tech Stack Pills instead of emojis */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="flex flex-col items-center space-y-4"
                >
                    <p className="text-gray-500 uppercase text-xs tracking-[0.2em] font-semibold">Technologies I work with</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {techStack.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                className="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-sm font-medium text-gray-300 transition-colors cursor-default"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
