'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const Achievements = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    }) as {
        ref: React.RefObject<HTMLDivElement>;
        inView: boolean;
    };
    const achievements = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M19 3v4M5 7h14a2 2 0 012 2v2a5 5 0 01-10 0V7a2 2 0 012-2M5 11v9a2 2 0 002 2h10a2 2 0 002-2v-9" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 21v-5a2 2 0 012-2h2a2 2 0 012 2v5" />
                </svg>
            ),
            title: 'JEE Main Qualified',
            description: 'Qualified in the JEE Main competitive examination, demonstrating high-level analytical and problem-solving skills.',
            highlight: 'Competitive Excellence',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'AIR 83,225',
            description: 'Achieved a highly competitive All India Rank in JEE Main, standing out among millions of national candidates.',
            highlight: 'National Rank',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            title: 'Production Deployments',
            description: 'Successfully engineered and deployed multiple full-stack applications to production, currently serving real users.',
            highlight: 'Live in Production',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            title: 'Full Stack Expert',
            description: 'Proficient in architecting complete applications from responsive frontends to scalable backend databases.',
            highlight: 'MERN Stack',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            title: 'DSA Proficiency',
            description: 'Strong foundation in Data Structures & Algorithms, enabling me to write highly optimized, efficient code.',
            highlight: 'Algorithm Specialist',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Responsive Design',
            description: 'Expertise in translating complex Figma designs into pixel-perfect, mobile-first responsive web applications.',
            highlight: 'UI/UX Implementation',
        },
    ];

    const stats = [
        { number: '5+', label: 'Projects Completed' },
        { number: '2+', label: 'Years Development Experience' },
        { number: '15+', label: 'Technologies Mastered' },
        { number: '50', label: 'GitHub Contributions' },
    ];

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
        <section
            id="achievements"
            className="relative py-24 px-4 md:px-8 lg:px-16 bg-black text-white overflow-hidden"
        >
            {/* Background Decorative Blurs */}
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-screen filter blur-[120px] opacity-50" />
            <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full mix-blend-screen filter blur-[120px] opacity-50" />

            <div className="max-w-6xl mx-auto relative z-10">


                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Milestones & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Achievements</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
                        A snapshot of my technical accomplishments, problem-solving abilities, and continuous growth.
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto mt-6 rounded-full" />
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group"
                        >
                            <motion.h3
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                                className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-2 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)] group-hover:scale-105 transition-transform"
                            >
                                {stat.number}
                            </motion.h3>
                            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Achievements Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-orange-500/30 transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Card Hover Background Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex-1">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400/20 to-yellow-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300">
                                    {achievement.icon}
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                                    {achievement.title}
                                </h3>
                                <p className="text-gray-400 font-light leading-relaxed mb-6">
                                    {achievement.description}
                                </p>
                            </div>

                            {/* Highlight Badge (Pushed to bottom) */}
                            <div className="relative z-10 mt-auto pt-4 border-t border-white/5">
                                <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-orange-400 tracking-wide group-hover:bg-orange-500/10 transition-colors">
                                    {achievement.highlight}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Achievement Summary Bottom Banner */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden"
                >
                    {/* Subtle inner glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/5 filter blur-[100px]" />

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                            Driven by <span className="text-orange-400">Continuous Growth</span>
                        </h3>
                        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 font-light text-lg">
                            I am fundamentally committed to pushing boundaries and continuous learning. Every line of code, new framework, and deployed project contributes to my evolution as a software engineer.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                            {['Passion', 'Innovation', 'Dedication', 'Excellence'].map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                    transition={{ delay: 0.6 + idx * 0.1 }}
                                    whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                    className="p-4 bg-white/5 border border-white/10 rounded-xl cursor-default transition-colors"
                                >
                                    <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 tracking-wide uppercase text-sm">
                                        {value}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;