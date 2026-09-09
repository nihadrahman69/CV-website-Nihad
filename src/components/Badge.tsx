import type { ReactNode } from 'react';
import { cn } from '../utils/cn';

interface BadgeProps {
  children: ReactNode;
  tone?: 'default' | 'gold';
  className?: string;
}

/** Small rounded pill used for skills, tags and technology labels. */
function Badge({ children, tone = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium',
        tone === 'gold'
          ? 'border-gold-500/30 bg-gold-500/10 text-gold-300'
          : 'border-navy-500/60 bg-navy-800 text-ink-300',
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
