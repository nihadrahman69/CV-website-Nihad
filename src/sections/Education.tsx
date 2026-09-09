import { GraduationCap } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import { masterProfile } from '../data/masterProfile';

function Education() {
  const { education } = masterProfile;

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-t border-navy-800 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          headingId="education-heading"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((entry) => (
            <Card key={entry.id}>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                <GraduationCap size={18} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink-50">{entry.degree}</h3>
              {entry.major ? (
                <p className="mt-1 text-sm text-accent-300">{entry.major}</p>
              ) : null}
              <p className="mt-1 text-sm text-ink-300">{entry.institution}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-ink-500">
                <span>{entry.year}</span>
                {entry.gpa ? <span className="font-medium text-ink-300">{entry.gpa}</span> : null}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Education;
