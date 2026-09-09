import { ArrowRight, MapPin } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import { masterProfile } from '../data/masterProfile';

function Hero() {
  const { personal } = masterProfile;

  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden">
      {/* Restrained radial glow — no gradients loud enough to feel like a game/hacker theme */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(77,125,224,0.14) 0%, rgba(5,7,12,0) 70%)',
        }}
      />

      <Container className="flex min-h-[85vh] flex-col justify-center py-24 text-center sm:py-28">
        <div className="mx-auto flex items-center gap-2 rounded-full border border-navy-600/60 bg-navy-850 px-4 py-1.5 text-xs font-medium text-ink-400 animate-[var(--animate-fade-in)]">
          <MapPin size={14} className="text-accent-400" aria-hidden="true" />
          {personal.location}
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-ink-50 sm:text-5xl lg:text-6xl">
          {personal.name}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-accent-300 sm:text-xl">
          {personal.headline}
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-400">
          {personal.subheadline}
        </p>

        <div className="mx-auto mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button href="#projects" variant="primary">
            View my work
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
          <Button href="#contact" variant="secondary">
            Get in touch
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
