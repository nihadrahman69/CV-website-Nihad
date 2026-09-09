import { ExternalLink } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { masterProfile } from '../data/masterProfile';

function Projects() {
  const { projects } = masterProfile;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-navy-800 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          headingId="projects-heading"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-ink-50">{project.name}</h3>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy-600 text-ink-400 transition-colors hover:border-accent-400 hover:text-accent-300"
                  aria-label={`View ${project.name} source code on GitHub (opens in a new tab)`}
                >
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                {project.description}
              </p>

              {project.transferableValue ? (
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {project.transferableValue}
                </p>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
