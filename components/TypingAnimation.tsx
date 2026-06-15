'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
    roles: string[];
}

const TypingAnimation = ({ roles }: TypingAnimationProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const currentRole = roles[roleIndex];

    useEffect(() => {
        const timeout = setTimeout(
            () => {
                if (!isDeleting && charIndex < currentRole.length) {
                    setDisplayedText(currentRole.substring(0, charIndex + 1));
                    setCharIndex((prev) => prev + 1);
                } else if (isDeleting && charIndex > 0) {
                    setDisplayedText(currentRole.substring(0, charIndex - 1));
                    setCharIndex((prev) => prev - 1);
                } else if (charIndex === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 1000);
                } else if (isDeleting && charIndex === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentRole, roleIndex, roles]);

    return (
        <div className="relative h-20 flex items-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-cyan-400">{displayedText}</span>
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="text-cyan-400 ml-1"
                >
                    |
                </motion.span>
            </div>
        </div>
    );
};

export default TypingAnimation;
