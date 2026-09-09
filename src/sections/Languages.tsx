import { Languages as LanguagesIcon } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import { masterProfile } from '../data/masterProfile';

function Languages() {
  const { languages } = masterProfile;

  return (
    <section
      id="languages"
      aria-labelledby="languages-heading"
      className="border-t border-navy-800 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Languages"
          title="Languages I work in"
          headingId="languages-heading"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {languages.map((language) => (
            <Card key={language.name} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                <LanguagesIcon size={18} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink-50">{language.name}</h3>
                <p className="mt-1 text-sm text-ink-400">Spoken: {language.spoken}</p>
                {language.written ? (
                  <p className="text-sm text-ink-400">Written: {language.written}</p>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Languages;
