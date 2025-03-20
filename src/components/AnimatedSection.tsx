"use client";

import React, { ReactNode, useRef } from 'react';
import { motion, Variants, TargetAndTransition } from 'framer-motion';
import * as animations from '@/lib/animation';
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none' | 'scale';
  once?: boolean;
  amount?: number;
  stagger?: boolean;
  custom?: number;
  variant?: {
    hidden: Partial<TargetAndTransition>;
    visible: Partial<TargetAndTransition>;
  };
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0.2,
  direction = 'up',
  once = true,
  amount = 0.2,
  stagger = false,
  custom = 0,
  variant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  // Select the right animation variant based on direction
  const getVariant = (): Variants => {
    if (delay) {
      // Apply custom delay to the variant
      const variant = getBaseVariant();
      return {
        hidden: variant.hidden,
        visible: {
          ...variant.visible,
          transition: {
            duration: 0.5,
            ease: "easeOut",
            delay,
          }
        }
      };
    }
    return getBaseVariant();
  };

  const getBaseVariant = (): Variants => {
    switch (direction) {
      case 'up':
        return animations.fadeInUp;
      case 'down':
        return animations.fadeInDown;
      case 'left':
        return animations.fadeInLeft;
      case 'right':
        return animations.fadeInRight;
      case 'scale':
        return animations.scaleIn;
      case 'none':
        return animations.fadeIn;
      default:
        return animations.fadeInUp;
    }
  };

  // Use stagger container if stagger is true
  const containerVariant = stagger ? animations.staggerContainer : getVariant();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? {
        ...variant.visible,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay,
        }
      } : "hidden"}
      variants={containerVariant}
      custom={custom}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}
