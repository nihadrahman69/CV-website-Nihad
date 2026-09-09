import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

type CardProps = HTMLAttributes<HTMLDivElement>;

function Card({ className, children, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-navy-600/60 bg-navy-850 p-6 shadow-[var(--shadow-card)] transition-colors',
        'hover:border-navy-500',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
