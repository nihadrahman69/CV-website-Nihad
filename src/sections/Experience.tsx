import { Briefcase } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { masterProfile } from '../data/masterProfile';

function Experience() {
  const { experience } = masterProfile;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-navy-800 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          headingId="experience-heading"
        />

        <ol className="mt-10 space-y-6">
          {experience.map((role) => (
            <li key={role.id}>
              <Card>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                      <Briefcase size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink-50">
                        {role.position}
                      </h3>
                      <p className="text-sm font-medium text-accent-300">
                        {role.organization}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-ink-500">
                    {role.duration}
                  </span>
                </div>

                <ul className="mt-5 space-y-2 pl-1">
                  {role.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-300">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {role.transferableSkills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default Experience;
