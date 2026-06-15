'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const Education = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    }) as {
        ref: React.RefObject<HTMLDivElement>;
        inView: boolean;
    };
    const education = [
        {
            degree: 'B.Tech in Computer Science & Engineering',
            institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)',
            location: 'Bhopal, India',
            period: '2022 - 2026',
            status: 'Final Year',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            ),
            details: [
                'CGPA: 7.5+',
                'Relevant Coursework: Data Structures, Algorithms, DBMS, OS, Web Development',
                'Active participant in competitive coding and hackathons',
            ],
        },
    ];

    const Learning = [
        {
            title: 'The Complete JavaScript Course',
            provider: 'Udemy',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            ),
        },
        {
            title: 'React - The Complete Guide',
            provider: 'Udemy',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            ),
        },
        {
            title: 'Node.js & Express Complete Guide',
            provider: 'Udemy',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            ),
        },
        {
            title: 'MongoDB & Mongoose Masterclass',
            provider: 'Udemy',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            ),
        },
        {
            title: 'Next.js & TypeScript Bootcamp',
            provider: 'Online',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            ),
        },
        {
            title: 'DSA Mastery & Problem Solving',
            provider: 'LeetCode & InterviewBit',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            ),
        },
    ];

    const coursework = [
        { title: 'Data Structures & Algorithms', status: 'Advanced' },
        { title: 'Database Management Systems', status: 'Advanced' },
        { title: 'Operating Systems', status: 'Advanced' },
        { title: 'Object-Oriented Programming', status: 'Expert' },
        { title: 'Web Technologies & Development', status: 'Expert' },
        { title: 'Computer Networks', status: 'Intermediate' },
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
            id="education"
            className="relative py-24 px-4 md:px-8 lg:px-16 bg-black text-white overflow-hidden"
        >
            {/* Background Decorative Blurs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-screen filter blur-[150px] opacity-50" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-screen filter blur-[150px] opacity-50" />

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
                        Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Learning</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
                        My formal academic background combined with continuous professional development.
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mt-6 rounded-full" />
                </motion.div>

                {/* Primary Degree */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="mb-20"
                >
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 hover:border-orange-500/30 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Subtle hover glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full filter blur-[80px] group-hover:bg-orange-500/10 transition-colors duration-500" />

                            <div className="relative z-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-8">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-2xl flex items-center justify-center text-orange-400 shadow-lg"
                                >
                                    {edu.icon}
                                </motion.div>

                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 font-semibold mb-2">
                                        {edu.institution}
                                    </p>
                                    <p className="text-gray-400 mb-4 font-light flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        {edu.location}
                                    </p>
                                    <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <p className="font-medium text-sm text-gray-300">
                                            {edu.period} <span className="mx-2 text-gray-600">|</span> {edu.status}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Degree Details List */}
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                {edu.details.map((detail, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                        transition={{ delay: 0.2 + idx * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <svg className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <p className="text-gray-300 font-light leading-relaxed">{detail}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Coursework */}
                    <motion.div
                        ref={ref}
                        variants={itemVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
                            <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            Core Coursework
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {coursework.map((course, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-colors"
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <h4 className="font-semibold text-gray-200">{course.title}</h4>
                                        <span className="text-xs font-medium px-2.5 py-1 bg-white/10 rounded-full text-orange-400">
                                            {course.status}
                                        </span>
                                    </div>
                                    {/* Sleek Progress Bar */}
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={inView ? {
                                                width: course.status === 'Expert' ? '100%' :
                                                    course.status === 'Advanced' ? '80%' : '60%'
                                            } : { width: 0 }}
                                            transition={{ delay: 0.3 + index * 0.1, duration: 1, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full relative"
                                        >
                                            {/* Shimmer effect on bar */}
                                            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Learning */}
                    <motion.div
                        ref={ref}
                        variants={itemVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
                            <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            Learning
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Learning.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-pink-500/30 transition-all group flex items-start gap-4"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 15 }}
                                        className="w-10 h-10 shrink-0 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-xl flex items-center justify-center text-pink-400"
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <div>
                                        <h4 className="font-semibold text-gray-200 text-sm leading-snug mb-1 group-hover:text-white transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-orange-400 font-medium">
                                            {item.provider}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;