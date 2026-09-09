import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

/** Centers content and applies the site's consistent max-width and gutters. */
function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10', className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Container;
