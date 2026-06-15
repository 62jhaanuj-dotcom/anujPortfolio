'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const Projects = () => {
    const { ref, inView } = useInView({ threshold: 0.1 });

    const projects = [
        {
            id: 1,
            title: 'Skill School',
            subtitle: 'Full Stack Learning Management Platform',
            description: 'Build, manage, and deliver online courses with secure authentication, role-based access, and a seamless learning experience.',
            highlights: [
                'JWT Authentication & Authorization',
                'Role-Based Access Control',
                'Course Creation & Management',
                'REST API Architecture',
                'Redux Toolkit State Management',
                'MongoDB Database Design',
            ],
            tech: ['React', 'Redux', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
            impact: [
                'Secure and scalable architecture',
                'Optimized API performance',
                'Production-ready code structure',
            ],
            color: 'from-orange-400 to-pink-500',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
            ),
            github: 'https://github.com/62jhaanuj-dotcom', // Replace with actual specific repo if you have one
        },
        {
            id: 2,
            title: 'Mechano',
            subtitle: 'On-Demand Mechanic Booking Platform',
            description: 'A real-world platform connecting vehicle owners with nearby mechanics through a fast and intuitive booking experience.',
            highlights: [
                'Nearby Mechanic Discovery',
                'Real-Time Service Booking',
                'Firebase Authentication',
                'Firestore Database Architecture',
                'Mobile-First Responsive Design',
                'Production Deployment',
            ],
            tech: ['React', 'Firebase Auth', 'Firestore', 'Tailwind'],
            impact: [
                'Simplified mechanic discovery process',
                'Improved user booking workflow',
                'Real-world production deployment',
            ],
            color: 'from-blue-400 to-emerald-400',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            liveUrl: 'https://mechano-ed20f.web.app',
            github: 'https://github.com/62jhaanuj-dotcom', // Replace with actual specific repo
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section
            id="projects"
            className="relative mx-4 py-24 px-4 md:px-8 lg:px-16 bg-black text-white overflow-hidden"
        >
            {/* Background Decorative Blurs */}
            <div className="absolute top-40 right-0 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-screen filter blur-[120px] opacity-50" />
            <div className="absolute bottom-40 left-0 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-screen filter blur-[120px] opacity-50" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    ref={ref as React.Ref<HTMLDivElement>}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
                        A selection of my recent work showcasing full-stack development, scalable architecture, and modern UI/UX.
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mt-6 rounded-full" />
                </motion.div>

                {/* Projects Stack */}
                <motion.div
                    ref={ref as React.Ref<HTMLDivElement>}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="space-y-12"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group relative"
                        >
                            {/* Project Card */}
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500">
                                <div className="p-8 md:p-12 lg:p-14">

                                    {/* Header Section */}
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                                        <div className="flex items-start gap-5">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${project.color} bg-opacity-20 text-white shadow-lg`}>
                                                {project.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-white tracking-tight mb-1">
                                                    {project.title}
                                                </h3>
                                                <p className={`text-transparent bg-clip-text bg-gradient-to-r ${project.color} font-medium`}>
                                                    {project.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light max-w-4xl">
                                        {project.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                                        {/* Highlights */}
                                        <div>
                                            <h4 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Key Features</h4>
                                            <ul className="space-y-3">
                                                {project.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-300 font-light">
                                                        <svg className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Impact / Outcomes */}
                                        <div>
                                            <h4 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">Impact & Outcomes</h4>
                                            <div className="bg-white/5 border-l-2 border-orange-400 rounded-r-xl p-5">
                                                <ul className="space-y-3">
                                                    {project.impact.map((item, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-gray-300 font-light">
                                                            <span className="text-orange-400 mt-1 text-xs">◆</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tech Stack & CTAs */}
                                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pt-8 border-t border-white/10">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 cursor-default hover:bg-white/10 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-4 w-full lg:w-auto">
                                            {project.liveUrl && (
                                                <motion.a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="px-6 py-2.5 bg-white text-black font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all flex items-center gap-2"
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                    Live Demo
                                                </motion.a>
                                            )}
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full transition-all flex items-center gap-2"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                                                Source Code
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Projects Button */}
                <motion.div
                    ref={ref as React.Ref<HTMLDivElement>}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <motion.a
                        href="https://github.com/62jhaanuj-dotcom"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-widest font-bold text-white border border-white/20 rounded-full hover:bg-white/5 hover:border-white/40 transition-all"
                    >
                        View All on GitHub
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;