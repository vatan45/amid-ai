import { Variants } from 'framer-motion';

// Animation durations
export const DURATION = {
  faster: 0.2,
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
  slower: 1,
};

// Animation delays
export const DELAY = {
  none: 0,
  faster: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.7,
};

// Animation easings
export const EASE = {
  gentle: [0.22, 1, 0.36, 1], // Custom cubic-bezier curve for gentle motion
  bounce: [0.43, 0.13, 0.23, 0.96], // Slight bounce effect
  easeOut: [0.16, 1, 0.3, 1], // Custom ease-out
  easeIn: [0.67, 0.03, 0.29, 0.98], // Custom ease-in
};

// Reusable framer-motion variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASE.easeOut,
    }
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.gentle,
    }
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.gentle,
    }
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.gentle,
    }
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.gentle,
    }
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASE.bounce,
    }
  },
};

// Container variants for staggered children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

// Button hover animations
export const buttonHover = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10
  }
};

export const buttonTap = {
  scale: 0.97
};

// Card hover effects
export const cardHover = {
  y: -8,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20
  }
};

// Generate fade in variants with custom delay
export const fadeInWithDelay = (delay: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      delay,
      ease: EASE.easeOut,
    }
  },
});
