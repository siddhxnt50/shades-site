import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-paper text-ink hover:bg-white',
        secondary: 'border border-paper/20 text-paper hover:border-paper/50 hover:bg-paper/5',
      },
      size: {
        sm: 'h-10 px-5 text-sm',
        md: 'h-12 px-6 text-[15px]',
        lg: 'h-14 px-8 text-base',
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

export { ButtonLink };
