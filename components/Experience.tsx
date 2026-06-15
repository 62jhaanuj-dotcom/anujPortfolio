'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const Experience = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    }) as {
        ref: React.RefObject<HTMLDivElement>;
        inView: boolean;
    };
    const timeline = [
        {
            year: '2022',
            title: 'Started B.Tech CSE',
            description: 'Began my Computer Science & Engineering journey at RGPV Bhopal, building a strong foundation in programming, algorithms, and computer science principles.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            ),
            color: 'from-orange-400 to-red-500',
        },
        {
            year: '2023',
            title: 'Started Web Development',
            description: 'Discovered my passion for web development and began mastering React, modern JavaScript, and responsive UI design principles.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            color: 'from-blue-400 to-purple-500',
        },
        {
            year: '2024',
            title: 'Full Stack Architecture',
            description: 'Transitioned into backend development. Created multiple complex full-stack applications using the MERN stack with scalable database designs.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            color: 'from-purple-400 to-pink-500',
        },
        {
            year: '2025',
            title: 'Production Deployments',
            description: 'Successfully engineered and deployed applications to live production environments. Launched the Mechano platform to real-world users.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            color: 'from-pink-400 to-red-500',
        },
        {
            year: '2026',
            title: 'Software Engineering Opportunities',
            description: 'Actively seeking exciting roles to contribute to impactful projects, solve hard technical problems, and grow as a professional engineer.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            color: 'from-red-400 to-orange-500',
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section
            id="experience"
            className="relative py-24 px-4 md:px-8 lg:px-16 bg-black text-white overflow-hidden"
        >
            {/* Background Decorative Blurs */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-[120px] opacity-50" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-screen filter blur-[120px] opacity-50" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-rose-400 to-amber-300">Timeline</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
                        A focused path from fundamentals to production-ready full-stack development.
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-rose-500 mx-auto mt-6 rounded-full" />
                </motion.div>

                {/* Timeline Container */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="relative"
                >
                    {/* Vertical Timeline Line */}
                    {/* Desktop: Centered. Mobile: Aligned to the left. */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-400 via-rose-500 to-amber-500 md:-translate-x-1/2 opacity-40" />

                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                variants={itemVariants}
                                className={`relative flex gap-6 md:gap-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                <div className="absolute left-0 md:left-1/2 top-6 h-10 w-10 -translate-x-0 md:-translate-x-1/2 rounded-full border border-white/10 bg-[#0a0a0a] p-2 text-orange-300 shadow-lg">
                                    {item.icon}
                                </div>

                                <div className="ml-16 md:ml-0 md:w-[calc(50%-2.5rem)]">
                                    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 md:p-6 transition-colors hover:border-orange-400/40 hover:bg-white/[0.06]">
                                        <span className={`inline-flex rounded-lg bg-gradient-to-r ${item.color} px-3 py-1 text-xs font-bold text-black`}>
                                            {item.year}
                                        </span>
                                        <h3 className="mt-4 text-xl font-bold text-white">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 text-sm md:text-base text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Current Status CTA Banner */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 relative p-[1px] rounded-lg overflow-hidden bg-gradient-to-r from-orange-400 via-rose-500 to-amber-500"
                >
                    {/* Inner Content of the Banner */}
                    <div className="bg-[#0a0a0a] w-full h-full rounded-lg p-7 md:p-10 text-center relative overflow-hidden">

                        {/* Subtle background glow inside the banner */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/20 rounded-full filter blur-[80px]" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 mx-auto mb-6 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                                <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                                Open to New Opportunities
                            </h3>
                            <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-light text-lg">
                                I'm actively seeking exciting internship or full-time opportunities as a Software Engineer or Full Stack Developer. Let's connect and build something amazing together.
                            </p>

                            <motion.button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-7 py-3.5 bg-white text-black font-bold rounded-lg shadow-sm hover:bg-orange-100 transition-all"
                            >
                                Let's Get in Touch
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
