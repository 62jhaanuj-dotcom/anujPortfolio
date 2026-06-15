'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const Skills = () => {
    const { ref, inView } = useInView({ threshold: 0.1 });

    const skillCategories = [
        {
            category: 'Languages',
            skills: ['JavaScript', 'TypeScript', 'Java', 'C/C++'],
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
        },
        {
            category: 'Frontend',
            skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            ),
        },
        {
            category: 'Backend',
            skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT', 'Authentication'],
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
        },
        {
            category: 'Database',
            skills: ['MongoDB', 'Mongoose', 'Firebase', 'Firestore'],
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
        },
        {
            category: 'Tools & DevOps',
            skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render'],
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            category: 'Core CS',
            skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
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
            id="skills"
            className="relative py-24 px-4 md:px-8 lg:px-16 bg-black text-white overflow-hidden"
        >
            {/* Background Decorative Blurs */}
            <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-[150px] opacity-50" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-screen filter blur-[150px] opacity-50" />

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
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
                        A comprehensive overview of my technical stack, tools, and core computer science competencies.
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mt-6 rounded-full" />
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.category}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-orange-500/30 transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Hover Card Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400/20 to-pink-500/20 flex items-center justify-center text-orange-400 shadow-lg group-hover:scale-110 group-hover:text-pink-400 transition-all duration-300 shrink-0">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">
                                        {category.category}
                                    </h3>
                                </div>

                                {/* Skills Pills List */}
                                <div className="flex flex-wrap gap-2.5">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                            transition={{ delay: 0.1 + skillIndex * 0.05 }}
                                            className="group/skill"
                                        >
                                            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 group-hover/skill:text-white group-hover/skill:bg-white/10 group-hover/skill:border-white/20 transition-all duration-300 cursor-default">
                                                {skill}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Proficiency Levels Section */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
                >
                    {/* Inner decorative glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange-500/5 filter blur-[100px]" />

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 tracking-tight flex items-center gap-3">
                            <svg className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                            Proficiency Levels
                        </h3>

                        <div className="space-y-8">
                            {[
                                { level: 'Expert', description: 'React, Node.js, JavaScript, Tailwind CSS', percentage: 95 },
                                { level: 'Advanced', description: 'Next.js, Express.js, MongoDB, REST APIs', percentage: 85 },
                                { level: 'Intermediate', description: 'TypeScript, Firebase, OOP, DBMS', percentage: 65 },
                            ].map((prof, index) => (
                                <motion.div
                                    key={prof.level}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ delay: 0.2 + index * 0.15 }}
                                    className="group"
                                >
                                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 gap-2">
                                        <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                                            {prof.level}
                                        </h4>
                                        <p className="text-sm font-light text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 inline-block md:inline w-fit">
                                            {prof.description}
                                        </p>
                                    </div>
                                    
                                    {/* Sleek Progress Bar */}
                                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${prof.percentage}%` } : { width: 0 }}
                                            transition={{ delay: 0.4 + index * 0.15, duration: 1.2, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full relative"
                                        >
                                            {/* Shimmer effect inside the bar */}
                                            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;