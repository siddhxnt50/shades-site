import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-indigo-500 text-white font-semibold shadow-[0_0_40px_rgba(99,102,241,0.25)] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-indigo-400 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5',
        outline:
          'border border-white/10 text-white active:bg-white/5 [@media(hover:hover)_and_(pointer:fine)]:hover:border-white/30 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/5',
        inverted:
          'bg-white text-slate-900 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-indigo-100 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-lg [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-white/10',
      },
      size: {
        sm: 'px-5 py-2.5 text-sm',
        md: 'px-7 py-4 sm:py-3.5 text-base',
        lg: 'px-7 sm:px-9 py-4 text-base sm:text-lg',
      },
      fullWidthMobile: {
        true: 'w-full sm:w-auto',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidthMobile: false,
    },
  }
);

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

/** Anchor styled as a button — every CTA on this site navigates, so links are the correct semantic element. */
const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, fullWidthMobile, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(buttonVariants({ variant, size, fullWidthMobile }), className)}
      {...props}
    />
  )
);
ButtonLink.displayName = 'ButtonLink';

export { ButtonLink, buttonVariants };
