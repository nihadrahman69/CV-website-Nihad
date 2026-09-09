import { Github, Linkedin, Mail } from 'lucide-react';
import Container from '../components/Container';
import { masterProfile } from '../data/masterProfile';
import { navLinks } from '../utils/navigation';

function Footer() {
  const { personal, contact } = masterProfile;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 py-12">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-semibold text-ink-100">{personal.name}</p>
            <p className="mt-1 max-w-xs text-sm text-ink-500">{personal.headline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm text-ink-400 transition-colors hover:text-accent-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-navy-800 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-ink-500">
            &copy; {year} {personal.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-600 text-ink-400 transition-colors hover:border-accent-400 hover:text-accent-300"
            >
              <Mail size={15} aria-hidden="true" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-600 text-ink-400 transition-colors hover:border-accent-400 hover:text-accent-300"
            >
              <Linkedin size={15} aria-hidden="true" />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-600 text-ink-400 transition-colors hover:border-accent-400 hover:text-accent-300"
            >
              <Github size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
