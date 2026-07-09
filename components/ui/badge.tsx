import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] sm:text-xs font-medium uppercase tracking-wide',
  {
    variants: {
      variant: {
        accent: 'border-indigo-500/30 bg-indigo-500/5 text-indigo-300',
        neutral: 'border-white/10 bg-white/5 text-slate-400',
      },
    },
    defaultVariants: { variant: 'accent' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Render a small pulsing dot before the content */
  dot?: boolean;
}

function Badge({ className, variant, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 flex-shrink-0 animate-pulse rounded-full bg-indigo-400 motion-reduce:animate-none"
        />
      )}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
