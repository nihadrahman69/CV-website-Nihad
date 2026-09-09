import { Moon, Sun } from 'lucide-react';
import { cn } from '../utils/cn';
import type { Theme } from '../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  className?: string;
}

/** Sun/moon toggle for switching between the dark and light themes. */
function ThemeToggle({ theme, onToggle, className }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={!isDark}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-300',
        'transition-colors hover:text-accent-400',
        className,
      )}
    >
      {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  );
}

export default ThemeToggle;
