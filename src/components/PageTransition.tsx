"use client";

import React, { useEffect, useState, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isFirstMount, setIsFirstMount] = useState(true);

  // Enable snap scrolling
  useEffect(() => {
    document.documentElement.classList.add('snap-scroll');

    return () => {
      document.documentElement.classList.remove('snap-scroll');
    };
  }, []);

  // Handle first mount to avoid initial animation
  useEffect(() => {
    if (isFirstMount) {
      setTimeout(() => {
        setIsFirstMount(false);
      }, 500);
    }
  }, [isFirstMount]);

  const variants = {
    hidden: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isFirstMount ? false : "hidden"}
        animate="enter"
        exit="exit"
        variants={variants}
        className="min-h-screen w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Scroll indicator component
export function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator after user has scrolled down
      if (window.scrollY > window.innerHeight / 2) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="text-white/70 text-sm mb-2">Scroll</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/70"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </motion.div>
  );
}
