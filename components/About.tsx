'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    }) as {
        ref: React.RefObject<HTMLDivElement>;
        inView: boolean;
    };
    const achievements = [
        {
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            title: 'JEE Main Qualified',
            description: 'Cleared top-tier engineering entrance exam',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'AIR 83,225',
            description: 'Top percentile in national competitive exams',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            title: 'Production Ready',
            description: 'Full-stack applications deployed and live',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            title: 'Full Stack Expert',
            description: 'Specialized in scalable MERN architecture',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section
            id="about"
            className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-black text-white overflow-hidden"
        >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute -left-40 top-40 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-50" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Title - Reduced bottom margin */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Me</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full" />
                </motion.div>

                {/* About Content Grid - Adjusted gap and alignment */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">

                    {/* Left Side - About Text */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="space-y-5"
                    >
                        <motion.p variants={itemVariants} className="text-[17px] text-gray-400 leading-relaxed font-light">
                            I'm a final-year Computer Science & Engineering student at
                            <span className="text-white font-medium"> RGPV Bhopal </span>
                            with a deep passion for building modern, scalable web applications that solve real problems.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-[17px] text-gray-400 leading-relaxed font-light">
                            My expertise revolves around the{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-semibold">MERN Stack</span>.
                            I am highly proficient in designing RESTful APIs, crafting responsive user interfaces, and architecting robust solutions.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-[17px] text-gray-400 leading-relaxed font-light">
                            Beyond standard web development, I maintain a{' '}
                            <span className="text-orange-400 font-medium">strong foundation in Data Structures & Algorithms</span>.
                            This enables me to write optimized code and tackle complex logical challenges systematically.
                        </motion.p>

                        {/* Info Stats Panel - Tighter padding and shorter labels */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/10"
                        >
                            {[
                                { label: 'Projects', value: '5+' },
                                { label: 'Years Dev Exp.', value: '2+' },
                                { label: 'Tech Skills', value: '15+' },
                            ].map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <p className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-1 group-hover:scale-105 transition-transform">
                                        {stat.value}
                                    </p>
                                    <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider font-semibold">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Glassmorphism Achievement Cards - Increased grid gap slightly */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                    >
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-2xl hover:bg-white/10 transition-all group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400/20 to-pink-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 group-hover:text-pink-400 transition-all duration-300">
                                        {achievement.icon}
                                    </div>
                                    <h3 className="font-bold text-white mb-2 text-base md:text-lg tracking-tight">
                                        {achievement.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed font-light">
                                    {achievement.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Education Card Container - Adjusted margins */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="mt-12 md:mt-16 max-w-5xl mx-auto"
                >
                    <motion.div
                        variants={itemVariants}
                        className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl hover:border-orange-500/30 transition-colors group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full filter blur-[80px] group-hover:bg-orange-500/10 transition-colors" />

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                            {/* Education Details */}
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">Education</h3>
                                </div>
                                <h4 className="text-lg text-orange-400 font-semibold mb-1">B.Tech in Computer Science</h4>
                                <p className="text-gray-300 font-medium mb-1">RGPV Bhopal</p>
                                <p className="text-gray-500 text-sm">Final Year (2025-2026)</p>
                            </div>

                            {/* Specialization List */}
                            <div className="bg-black/30 p-5 rounded-2xl border border-white/5">
                                <h3 className="text-sm uppercase tracking-wider font-bold text-gray-400 mb-3">Core Focus Areas</h3>
                                <ul className="space-y-2.5">
                                    {[
                                        'Full Stack Web Architecture',
                                        'Data Structures & Algorithms',
                                        'RESTful API Integration'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-300 group/item text-sm">
                                            <span className="text-orange-400 group-hover/item:translate-x-1 transition-transform">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;