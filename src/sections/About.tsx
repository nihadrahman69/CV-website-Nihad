import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import { masterProfile } from '../data/masterProfile';

function About() {
  const { summary, professionalSkills, professionalInterests } = masterProfile;

  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Professional profile"
          headingId="about-heading"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <p className="text-base leading-relaxed text-ink-300 lg:col-span-2">
            {summary}
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
                Core strengths
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {professionalSkills.map((skill) => (
                  <Badge key={skill.name}>{skill.name}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
                Areas of interest
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {professionalInterests.map((interest) => (
                  <Badge key={interest} tone="gold">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
