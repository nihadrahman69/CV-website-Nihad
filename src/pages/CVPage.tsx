import { PDFDownloadLink } from '@react-pdf/renderer';
import CVDocument from '../components/cv/CVDocument';
import ReactPDFDocument from '../components/cv/ReactPDFDocument';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from '../components/ThemeToggle';

/**
 * Standalone CV page, reachable at `#cv` (see useHashRoute / App.tsx).
 *
 * Renders the CVDocument markup for on-screen preview.
 * The Download button uses @react-pdf/renderer for vector PDF generation.
 */
function CVPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-navy-950 print:bg-white">
      {/* ── Toolbar (hidden in print) ─────────────────── */}
      <div className="sticky top-0 z-10 border-b border-navy-800 bg-navy-950/95 backdrop-blur print:hidden">
        <div className="mx-auto flex max-w-[780px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a
            href="#home"
            className="text-sm font-medium text-ink-400 transition-colors hover:text-ink-100"
          >
            ← Back to portfolio
          </a>

          <div className="flex items-center gap-4">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            
            <PDFDownloadLink
              document={<ReactPDFDocument />}
              fileName="Nihad_Rahman_Rawdra_CV.pdf"
              className="rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
              onClick={(e) => {
                const isInAppBrowser = /FBAN|FBAV|Messenger|Instagram|LinkedInApp/i.test(navigator.userAgent);
                if (isInAppBrowser) {
                  e.preventDefault();
                  const blobUrl = e.currentTarget.href;
                  if (blobUrl && blobUrl.startsWith('blob:')) {
                    window.open(blobUrl, '_blank');
                  } else {
                    alert('Download blocked by in-app browser. Please tap the menu (•••) and select "Open in External Browser" (Chrome/Safari) to download.');
                  }
                }
              }}
            >
              {/* @ts-ignore */}
              {({ loading }) => (loading ? 'Generating PDF...' : 'Download CV (PDF)')}
            </PDFDownloadLink>
          </div>
        </div>
      </div>

      {/* ── CV Preview ────────────────────────────────── */}
      <div className="py-6 sm:py-10 print:py-0">
        <CVDocument />
      </div>
    </div>
  );
}

export default CVPage;
