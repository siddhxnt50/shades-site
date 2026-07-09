import * as React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Use 'article' only for self-contained content with a heading child. */
  as?: 'div' | 'article';
}

const Card = React.forwardRef<HTMLElement, CardProps>(
  ({ className, as: Tag = 'div', ...props }, ref) => (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn(
        'relative rounded-2xl border border-white/10 bg-slate-800/30 p-5 sm:p-7 md:p-9',
        'transition-all duration-300 active:border-indigo-500/40',
        '[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1',
        '[@media(hover:hover)_and_(pointer:fine)]:hover:border-indigo-500/50',
        '[@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_20px_40px_-20px_rgba(99,102,241,0.25)]',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';


const CardLabel = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-xs font-medium uppercase tracking-[0.15em] text-slate-400',
      className
    )}
    {...props}
  />
));
CardLabel.displayName = 'CardLabel';

export { Card, CardLabel };
