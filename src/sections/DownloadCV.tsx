import { FileDown } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

function DownloadCV() {
  return (
    <section
      id="download-cv"
      aria-labelledby="download-cv-heading"
      className="border-t border-navy-800 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Curriculum Vitae"
          title="Get my full CV"
          description="Download a detailed, ATS-friendly PDF with my complete academic history, project portfolio, technical skills, and professional experience."
          headingId="download-cv-heading"
          align="center"
        />

        <div className="mt-10 flex justify-center gap-3">
          <Button href="#cv" variant="primary">
            <FileDown size={16} aria-hidden="true" />
            View &amp; Download CV
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default DownloadCV;
