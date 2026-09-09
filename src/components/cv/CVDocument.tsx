import { masterProfile } from '../../data/masterProfile';

/** Strips the protocol/www for display, while the real URL still goes in the href. */
function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '');
}

/**
 * Section heading used throughout the CV: a plain, bold, title-case label
 * with a thin rule underneath. Deliberately avoids uppercase/letter-spacing
 * tricks, icons, and background color — ATS parsers and human reviewers
 * both just need a clear, real text heading.
 */
function CVSectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mt-6 border-b border-gray-300 pb-1 text-[13px] font-bold text-gray-900">
      {children}
    </h2>
  );
}

/**
 * The resume content itself — a single-column, plain-text, ATS-friendly
 * document rendered from `masterProfile` (no other data source). This same
 * markup is what gets previewed on screen and what gets printed to PDF via
 * `window.print()`, so what the user sees in the preview is exactly what
 * ends up in the download.
 */
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

  const contactLine = [
    contact.email,
    ...contact.phoneNumbers,
    personal.location,
  ].join('  |  ');

  const linkLine = [
    { label: 'LinkedIn', href: contact.linkedin },
    { label: 'GitHub', href: contact.github },
    { label: 'Facebook', href: contact.facebook },
  ];

  return (
    <article
      className="mx-auto max-w-3xl border border-gray-200 bg-white px-8 py-10 text-gray-900 shadow-sm sm:px-12 sm:py-12 print:max-w-none print:border-0 print:px-0 print:py-0 print:shadow-none"
      style={{ fontFamily: "Arial, Helvetica, 'Liberation Sans', sans-serif" }}
      lang="en"
    >
      {/* Name, title line, contact details */}
      <header>
        <h1 className="text-[24px] font-bold leading-tight text-gray-900">{personal.name}</h1>
        <p className="mt-1 text-[14px] font-medium text-gray-700">{personal.headline}</p>

        <p className="mt-3 text-[11.5px] leading-relaxed text-gray-700">{contactLine}</p>
        <p className="mt-1 text-[11.5px] leading-relaxed text-gray-700">
          {linkLine.map(({ label, href }, index) => (
            <span key={label}>
              {index > 0 ? '  |  ' : ''}
              {label}: <a href={href} className="text-gray-700 underline">{displayUrl(href)}</a>
            </span>
          ))}
        </p>
      </header>

      {/* Summary */}
      <section aria-labelledby="cv-summary">
        <CVSectionHeading>Summary</CVSectionHeading>
        <p id="cv-summary" className="mt-2 text-[12px] leading-relaxed text-gray-800">
          {summary}
        </p>
      </section>

      {/* Education */}
      <section aria-labelledby="cv-education">
        <CVSectionHeading>Education</CVSectionHeading>
        <div className="mt-2 space-y-3">
          {education.map((entry) => (
            <div key={entry.id} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-[12.5px] font-bold text-gray-900">
                  {entry.degree}
                  {entry.major ? `, ${entry.major}` : ''}
                </h3>
                <span className="text-[11.5px] text-gray-600">{entry.year}</span>
              </div>
              <p className="text-[12px] text-gray-800">
                {entry.institution}
                {entry.gpa ? `  —  ${entry.gpa}` : ''}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section aria-labelledby="cv-experience">
        <CVSectionHeading>Experience</CVSectionHeading>
        <div className="mt-2 space-y-4">
          {experience.map((entry) => (
            <div key={entry.id} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-[12.5px] font-bold text-gray-900">
                  {entry.position} — {entry.organization}
                </h3>
                <span className="text-[11.5px] text-gray-600">{entry.duration}</span>
              </div>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                {entry.responsibilities.map((item) => (
                  <li key={item} className="text-[12px] leading-relaxed text-gray-800">
                    {item}
                  </li>
                ))}
              </ul>
              {entry.transferableSkills.length > 0 ? (
                <p className="mt-1 text-[11.5px] leading-relaxed text-gray-600">
                  Relevant skills: {entry.transferableSkills.join(', ')}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section aria-labelledby="cv-projects">
        <CVSectionHeading>Projects</CVSectionHeading>
        <div className="mt-2 space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-[12.5px] font-bold text-gray-900">{project.name}</h3>
                <span className="text-[11.5px] text-gray-600">{project.technologies.join(', ')}</span>
              </div>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                <li className="text-[12px] leading-relaxed text-gray-800">{project.description}</li>
                {project.transferableValue ? (
                  <li className="text-[12px] leading-relaxed text-gray-800">{project.transferableValue}</li>
                ) : null}
              </ul>
              <p className="mt-1 text-[11.5px] leading-relaxed text-gray-600">
                Repository:{' '}
                <a href={project.repoUrl} className="text-gray-600 underline">
                  {displayUrl(project.repoUrl)}
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section aria-labelledby="cv-skills">
        <CVSectionHeading>Skills</CVSectionHeading>
        <div className="mt-2 space-y-1.5">
          {technicalSkills.map((category) => (
            <p key={category.category} className="text-[12px] leading-relaxed text-gray-800">
              <span className="font-bold">{category.category}:</span> {category.skills.join(', ')}
            </p>
          ))}
          {professionalSkills.length > 0 ? (
            <p className="text-[12px] leading-relaxed text-gray-800">
              <span className="font-bold">Professional Skills:</span>{' '}
              {professionalSkills.map((skill) => skill.name).join(', ')}
            </p>
          ) : null}
          {aiTools.length > 0 ? (
            <p className="text-[12px] leading-relaxed text-gray-800">
              <span className="font-bold">AI Tools:</span> {aiTools.join(', ')}
            </p>
          ) : null}
        </div>
      </section>

      {/* Languages */}
      <section aria-labelledby="cv-languages">
        <CVSectionHeading>Languages</CVSectionHeading>
        <div className="mt-2 space-y-1">
          {languages.map((language) => (
            <p key={language.name} className="text-[12px] leading-relaxed text-gray-800">
              <span className="font-bold">{language.name}:</span> Spoken – {language.spoken}
              {language.written ? `, Written – ${language.written}` : ''}
            </p>
          ))}
        </div>
      </section>

      {/* Additional Information */}
      {professionalInterests.length > 0 || additionalSkills.length > 0 ? (
        <section aria-labelledby="cv-additional">
          <CVSectionHeading>Additional Information</CVSectionHeading>
          <div className="mt-2 space-y-1.5">
            {professionalInterests.length > 0 ? (
              <p className="text-[12px] leading-relaxed text-gray-800">
                <span className="font-bold">Professional Interests:</span>{' '}
                {professionalInterests.join(', ')}
              </p>
            ) : null}
            {additionalSkills.length > 0 ? (
              <p className="text-[12px] leading-relaxed text-gray-800">
                <span className="font-bold">Additional Skills:</span> {additionalSkills.join(', ')}
              </p>
            ) : null}
          </div>
        </section>
      ) : null}
    </article>
  );
}

export default CVDocument;
