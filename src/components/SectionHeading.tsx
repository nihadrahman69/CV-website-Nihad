interface SectionHeadingProps {
  /** Short uppercase label, e.g. "Experience" */
  eyebrow: string;
  title: string;
  description?: string;
  /** id used so the parent <section> can reference this heading via aria-labelledby */
  headingId: string;
  align?: 'left' | 'center';
}

function SectionHeading({
  eyebrow,
  title,
  description,
  headingId,
  align = 'left',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={isCenter ? 'text-center' : 'text-left'}>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
        {eyebrow}
      </span>
      <h2
        id={headingId}
        className="mt-3 text-2xl font-semibold tracking-tight text-ink-50 sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={
            isCenter
              ? 'mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-400'
              : 'mt-4 max-w-2xl text-base leading-relaxed text-ink-400'
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
