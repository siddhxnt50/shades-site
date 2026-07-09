'use client';

import * as React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

/**
 * Scroll-reveal wrapper. Animates opacity + translateY only (GPU-composited,
 * no layout work). Fires once when the element enters the viewport.
 * Renders children statically when the user prefers reduced motion.
 */

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay },
  }),
};

interface RevealProps {
  children: React.ReactNode;
  /** Seconds to wait after entering the viewport */
  delay?: number;
  className?: string;
  /** Render as a different element (defaults to div) */
  as?: 'div' | 'section' | 'header' | 'li' | 'span';
}

export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag
      // data-reveal lets the <noscript> rule in layout.tsx force visibility
      // when JS is disabled (the static export inlines opacity:0 otherwise).
      data-reveal=""
      className={className}
      custom={delay}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </Tag>
  );
}
