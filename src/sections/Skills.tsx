import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { masterProfile } from '../data/masterProfile';

function Skills() {
  const { technicalSkills, additionalSkills, aiTools } = masterProfile;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-navy-800 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Skills & capabilities"
          headingId="skills-heading"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {technicalSkills.map((category) => (
            <Card key={category.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
                {category.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}

          {additionalSkills.length > 0 ? (
            <Card>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
                Additional skills
              </h3>
              <ul className="mt-4 space-y-2">
                {additionalSkills.map((skill) => (
                  <li key={skill} className="flex gap-3 text-sm leading-relaxed text-ink-300">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ) : null}

          {aiTools.length > 0 ? (
            <Card>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
                AI-assisted workflow
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Comfortable using modern AI tools to research, draft, and problem-solve faster.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {aiTools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
            </Card>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
