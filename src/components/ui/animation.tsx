'use client';

import React, { ReactNode } from 'react';
import { motion, Variants, TargetAndTransition, VariantLabels } from 'framer-motion';

type AnimationWrapperProps = {
  children: ReactNode;
  variants?: Variants;
  initial?: boolean | VariantLabels | TargetAndTransition;
  animate?: VariantLabels | TargetAndTransition;
  transition?: object;
  delay?: number;
  className?: string;
  viewport?: { once?: boolean; margin?: string };
};

export const FadeIn = ({
  children,
  variants,
  initial = "hidden",
  animate = "visible",
  transition,
  delay = 0,
  className = "",
  viewport,
}: AnimationWrapperProps) => {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
        ...transition
      }
    }
  };

  return (
    <motion.div
      initial={initial}
      animate={animate === "visible" && !viewport ? animate : undefined}
      whileInView={viewport ? animate : undefined}
      variants={variants || defaultVariants}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInLeft = ({
  children,
  delay = 0,
  className = "",
  viewport = { once: true, margin: "-100px" },
  ...props
}: AnimationWrapperProps) => {
  const slideVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay
      }
    }
  };

  return (
    <FadeIn
      variants={slideVariants}
      viewport={viewport}
      className={className}
      {...props}
    >
      {children}
    </FadeIn>
  );
};

export const FadeInRight = ({
  children,
  delay = 0,
  className = "",
  viewport = { once: true, margin: "-100px" },
  ...props
}: AnimationWrapperProps) => {
  const slideVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay
      }
    }
  };

  return (
    <FadeIn
      variants={slideVariants}
      viewport={viewport}
      className={className}
      {...props}
    >
      {children}
    </FadeIn>
  );
};

export const FadeInUp = ({
  children,
  delay = 0,
  className = "",
  viewport = { once: true, margin: "-100px" },
  ...props
}: AnimationWrapperProps) => {
  const slideVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay
      }
    }
  };

  return (
    <FadeIn
      variants={slideVariants}
      viewport={viewport}
      className={className}
      {...props}
    >
      {children}
    </FadeIn>
  );
};

export const ScaleIn = ({
  children,
  delay = 0,
  className = "",
  viewport = { once: true, margin: "-100px" },
  ...props
}: AnimationWrapperProps) => {
  const scaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: delay
      }
    }
  };

  return (
    <FadeIn
      variants={scaleVariants}
      viewport={viewport}
      className={className}
      {...props}
    >
      {children}
    </FadeIn>
  );
};

export const StaggerContainer = ({
  children,
  delay = 0,
  className = "",
  viewport = { once: true, margin: "-100px" },
  ...props
}: AnimationWrapperProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
