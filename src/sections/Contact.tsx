import { Mail, MapPin, Phone } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import IconLink from '../components/IconLink';
import Button from '../components/Button';
import { masterProfile } from '../data/masterProfile';

function Contact() {
  const { contact, personal } = masterProfile;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-navy-800 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to internships, graduate opportunities, and roles at the intersection of technology and business. Feel free to reach out."
          headingId="contact-heading"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <IconLink icon={<Mail size={16} aria-hidden="true" />} href={`mailto:${contact.email}`}>
            {contact.email}
          </IconLink>

          {contact.phoneNumbers.map((phone) => (
            <IconLink
              key={phone}
              icon={<Phone size={16} aria-hidden="true" />}
              href={`tel:${phone.replace(/\s+/g, '')}`}
            >
              {phone}
            </IconLink>
          ))}

          <IconLink
            icon={<span aria-hidden="true">in</span>}
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </IconLink>

          <IconLink
            icon={<span aria-hidden="true">GH</span>}
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </IconLink>

          <IconLink
            icon={<span aria-hidden="true">f</span>}
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </IconLink>

          <div className="flex items-center gap-3 rounded-lg border border-navy-600/60 bg-navy-850 px-4 py-3 text-sm text-ink-300">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-700 text-accent-400">
              <MapPin size={16} aria-hidden="true" />
            </span>
            <span>{personal.location}</span>
          </div>
        </div>

        <div className="mt-10">
          <Button href={`mailto:${contact.email}`} variant="primary">
            Email me directly
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
