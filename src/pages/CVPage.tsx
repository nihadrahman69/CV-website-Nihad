import CVDocument from '../components/cv/CVDocument';

/**
 * Standalone CV generator page, reachable at `#cv` (see useHashRoute / App.tsx).
 * Renders the same CVDocument markup used for both the on-screen preview and
 * the printed PDF, so there's no risk of the preview and the download drifting
 * apart. "Download PDF" uses the browser's native print-to-PDF pipeline
 * (see the `print:` styles in CVDocument and the @page rule in index.css)
 * instead of a canvas/screenshot library, which is what keeps the PDF's text
 * genuinely selectable and searchable.
 */
function CVPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/95 backdrop-blur print:hidden">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a
            href="#home"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            ← Back to portfolio
          </a>

          <div className="flex items-center gap-3">
            <p className="hidden text-xs text-gray-500 sm:block">
              Preview below, then download the PDF.
            </p>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>

      <div className="py-6 sm:py-10 print:py-0">
        <CVDocument />
      </div>
    </div>
  );
}

export default CVPage;
