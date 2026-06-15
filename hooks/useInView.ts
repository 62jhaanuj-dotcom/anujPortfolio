'use client';

import { useEffect, useRef, useState } from 'react';

// Define standard options + our custom triggerOnce option
interface UseInViewOptions extends IntersectionObserverInit {
    triggerOnce?: boolean;
}

export const useInView = ({
    threshold = 0.2,
    root = null,
    rootMargin = '0px',
    triggerOnce = true, // By default, animations will play only once
}: UseInViewOptions = {}) => {
    
    const ref = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    
                    // Stop observing if triggerOnce is true
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    // Reset the animation if it goes out of view and triggerOnce is false
                    setInView(false);
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(element);

        // Cleanup function
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, root, rootMargin, triggerOnce]); // Spread out dependencies to prevent infinite re-renders

    return { ref, inView };
};

export default useInView;
