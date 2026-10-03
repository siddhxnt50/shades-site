'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  /** Seconds to wait after entering the viewport */
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'span';
}

/**
 * Scroll-reveal for below-the-fold content: opacity + translateY only
 * (compositor-friendly), fires once. Above-the-fold content uses CSS
 * keyframes instead so it paints before hydration.
 */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const Tag = motion[as];
  return (
    <Tag
      // Matched by the <noscript> override in layout.tsx so content stays visible without JS.
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay }}
    >
      {children}
    </Tag>
  );
}
