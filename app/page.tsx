'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <main className=" min-h-screen overflow-x-hidden text-gray-300 selection:bg-orange-500/30 selection:text-orange-200 font-sans antialiased">
            <Navbar />
            
            {/* Wrapper for all sections. w-full ensures it takes full width, pt-20 ensures it clears the floating navbar properly */}
            <div className="pt-20 w-full">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <Achievements />
            </div>
            
            <Contact />
        </main>
    );
}