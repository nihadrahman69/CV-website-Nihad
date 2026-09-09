import type { ReactNode } from 'react';
import { masterProfile } from '../../data/masterProfile';

/** Strip protocol and trailing slash for compact display URLs. */
function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '');
}

/** Number of projects shown on the CV — strongest first from masterProfile. */
const MAX_PROJECTS = 4;

/* ──────────────────────────────────────────────────────────
   Section — reusable heading + content wrapper with
   consistent spacing and page-break management.
   ────────────────────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-5">
      <h2 className="break-after-avoid border-b-[1.5px] border-navy-700 pb-[3px] text-[13px] font-bold uppercase tracking-[0.06em] text-ink-50">
        {title}
      </h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   CVDocument — the single-column, ATS-friendly resume.

   Renders entirely from `masterProfile` (no other data source).
   The same markup is previewed on screen and printed via
   `window.print()`, so screen and PDF always match.

   Design constraints (per requirements):
   • No tables, sidebars, multi-column, icons, graphics, photos
   • Real selectable text — never canvas-rendered
   • All links are functional <a> tags
   • Page-break-inside: avoid on entry blocks
   • Professional at any size, including grayscale print
   ────────────────────────────────────────────────────────── */
function CVDocument() {
  const {
    personal,
    contact,
    summary,
    education,
    experience,
    projects,
    technicalSkills,
    professionalSkills,
    languages,
    professionalInterests,
    aiTools,
    additionalSkills,
  } = masterProfile;

  const visibleProjects = projects.slice(0, MAX_PROJECTS);

  /* Contact line: email | phones | location (no Facebook per spec). */
  const contactParts = [
    contact.email,
    ...contact.phoneNumbers,
    personal.location,
  ];

  const linkEntries = [
    { label: 'LinkedIn', href: contact.linkedin },
    { label: 'GitHub', href: contact.github },
  ];

  return (
    <article
      className={
        'cv-document mx-auto max-w-[740px] bg-navy-900 text-ink-50 shadow-sm ' +
        /* Screen spacing */
        'border border-navy-800 px-10 py-10 sm:px-14 sm:py-12 ' +
        /* Print overrides — @page margin:0 suppresses browser chrome; we
           supply our own content margins here so the PDF matches the preview. */
        'print:mx-0 print:max-w-none print:border-0 print:shadow-none ' +
        'print:px-[18mm] print:py-[14mm]'
      }
      style={{ fontFamily: "Arial, Helvetica, 'Liberation Sans', sans-serif" }}
      lang="en"
    >
      {/* ── Header ─────────────────────────────────────── */}
      <header className="text-center">
        <h1 className="text-[22px] font-bold leading-tight tracking-tight text-ink-50">
          {personal.name}
        </h1>
        <p className="mt-1 text-[13px] font-medium text-ink-300">
          {personal.headline}
        </p>

        <p className="mt-3 text-[11px] leading-relaxed text-ink-400">
          {contactParts.join('  \u00A0|\u00A0  ')}
        </p>
        <p className="mt-1 text-[11px] leading-relaxed text-ink-400">
          {linkEntries.map(({ label, href }, i) => (
            <span key={label}>
              {i > 0 ? '  \u00A0|\u00A0  ' : ''}
              {label}:{' '}
              <a
                href={href}
                className="text-ink-400 underline decoration-navy-600 underline-offset-2 hover:text-accent-400"
              >
                {displayUrl(href)}
              </a>
            </span>
          ))}
        </p>
      </header>

      {/* ── Summary ────────────────────────────────────── */}
      <Section title="Summary">
        <p className="text-[12px] leading-[1.65] text-ink-300">{summary}</p>
      </Section>

      {/* ── Education ──────────────────────────────────── */}
      <Section title="Education">
        <div className="space-y-2.5">
          {education.map((entry) => (
            <div key={entry.id} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[12px] font-bold text-ink-50">
                  {entry.degree}
                  {entry.major ? `, ${entry.major}` : ''}
                </h3>
                <span className="text-[11px] text-ink-400">{entry.year}</span>
              </div>
              <p className="text-[11.5px] text-ink-400">
                {entry.institution}
                {entry.gpa ? ` — ${entry.gpa}` : ''}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Experience ─────────────────────────────────── */}
      <Section title="Experience">
        <div className="space-y-3">
          {experience.map((entry) => (
            <div key={entry.id} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[12px] font-bold text-ink-50">
                  {entry.position} — {entry.organization}
                </h3>
                <span className="text-[11px] text-ink-400">
                  {entry.duration}
                </span>
              </div>
              <ul className="mt-1.5 list-disc space-y-1 pl-5">
                {entry.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="text-[12px] leading-[1.6] text-ink-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Projects ───────────────────────────────────── */}
      <Section title="Projects">
        <div className="space-y-3">
          {visibleProjects.map((project) => (
            <div key={project.id} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[12px] font-bold text-ink-50">
                  {project.name}
                </h3>
                <span className="text-[11px] text-ink-400">
                  {project.technologies.join(', ')}
                </span>
              </div>
              <p className="mt-0.5 text-[12px] leading-[1.6] text-ink-300">
                {project.description}
              </p>
              <p className="mt-0.5 text-[10.5px] text-ink-500">
                <a
                  href={project.repoUrl}
                  className="text-ink-500 underline decoration-navy-600 underline-offset-2 hover:text-accent-400"
                >
                  {displayUrl(project.repoUrl)}
                </a>
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Skills ─────────────────────────────────────── */}
      <Section title="Skills">
        <div className="space-y-1">
          {technicalSkills.map((cat) => (
            <p
              key={cat.category}
              className="text-[12px] leading-[1.6] text-ink-300"
            >
              <span className="font-bold text-ink-50">{cat.category}:</span>{' '}
              {cat.skills.join(', ')}
            </p>
          ))}
          {professionalSkills.length > 0 && (
            <p className="text-[12px] leading-[1.6] text-ink-300">
              <span className="font-bold text-ink-50">Professional:</span>{' '}
              {professionalSkills.map((s) => s.name).join(', ')}
            </p>
          )}
          {aiTools.length > 0 && (
            <p className="text-[12px] leading-[1.6] text-ink-300">
              <span className="font-bold text-ink-50">AI Tools:</span>{' '}
              {aiTools.join(', ')}
            </p>
          )}
        </div>
      </Section>

      {/* ── Languages ──────────────────────────────────── */}
      <Section title="Languages">
        <p className="text-[12px] leading-[1.6] text-ink-300">
          {languages
            .map((lang) => {
              const parts = [`Spoken: ${lang.spoken}`];
              if (lang.written) parts.push(`Written: ${lang.written}`);
              return `${lang.name} (${parts.join(', ')})`;
            })
            .join('  \u00B7  ')}
        </p>
      </Section>

      {/* ── Additional Information ─────────────────────── */}
      {(professionalInterests.length > 0 ||
        additionalSkills.length > 0) && (
        <Section title="Additional Information">
          <div className="space-y-1">
            {professionalInterests.length > 0 && (
              <p className="text-[12px] leading-[1.6] text-ink-300">
                <span className="font-bold text-ink-50">Interests:</span>{' '}
                {professionalInterests.join(', ')}
              </p>
            )}
            {additionalSkills.length > 0 && (
              <p className="text-[12px] leading-[1.6] text-ink-300">
                <span className="font-bold text-ink-50">Additional:</span>{' '}
                {additionalSkills.join(', ')}
              </p>
            )}
          </div>
        </Section>
      )}
    </article>
  );
}

export default CVDocument;
