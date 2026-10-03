'use client';

import { MotionConfig } from 'framer-motion';

/**
 * reducedMotion="user" keeps opacity fades but drops transforms for visitors
 * who ask for less motion — without swapping element trees, which would
 * cause a hydration mismatch against the statically exported HTML.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
