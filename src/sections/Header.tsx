import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../components/Container';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../hooks/useTheme';
import { masterProfile } from '../data/masterProfile';
import { navLinks } from '../utils/navigation';
import heroPhoto from '../assets/IMG_1424.jpeg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close the mobile menu on Escape and whenever the viewport grows back to desktop size.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsMenuOpen(false);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-700/70 bg-navy-950/85 backdrop-blur">
      <a href="#main-content" className="skip-link rounded-md bg-accent-500 px-4 py-2 text-sm font-semibold text-white">
        Skip to content
      </a>
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-3 text-sm font-semibold text-ink-100"
            aria-label={`${masterProfile.personal.name} — go to top`}
          >
            <img
              src={heroPhoto}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-inset ring-accent-500/30"
            />
            <span className="hidden sm:inline">{masterProfile.personal.name}</span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="rounded-md px-3 py-2 text-sm font-medium text-ink-300 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggleTheme} className="hidden md:inline-flex" />

            <a
              href="#contact"
              className="hidden rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-600 md:inline-flex"
            >
              Get in touch
            </a>

            <ThemeToggle theme={theme} onToggle={toggleTheme} className="md:hidden" />

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-200 md:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </Container>

      {isMenuOpen ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-navy-700/70 bg-navy-950 md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block rounded-md px-2 py-3 text-base font-medium text-ink-200 hover:text-accent-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg bg-accent-500 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export default Header;
