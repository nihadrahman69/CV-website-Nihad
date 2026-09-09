import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils/cn';

interface IconLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode;
  children: ReactNode;
  href: string;
}

/** Icon-prefixed link used for email, phone, and social profile links. */
function IconLink({ icon, children, className, href, ...rest }: IconLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'group flex items-center gap-3 rounded-lg border border-navy-600/60 bg-navy-850 px-4 py-3',
        'text-sm text-ink-300 transition-colors hover:border-accent-400/60 hover:text-ink-100',
        className,
      )}
      {...rest}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-700 text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-white">
        {icon}
      </span>
      <span className="truncate">{children}</span>
    </a>
  );
}

export default IconLink;
