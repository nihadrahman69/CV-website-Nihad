import { useEffect, useState } from 'react';

function readHash(): string {
  if (typeof window === 'undefined') return '';
  return window.location.hash.replace(/^#/, '');
}

/**
 * Tracks the current URL hash (without the leading `#`), updating whenever
 * it changes. Used to switch between the main portfolio and the standalone
 * CV page (`#cv`) without pulling in a routing library — every other nav
 * link keeps working exactly as before via the browser's native anchor
 * scrolling.
 */
export function useHashRoute(): string {
  const [hash, setHash] = useState<string>(readHash);

  useEffect(() => {
    function handleHashChange() {
      setHash(readHash());
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return hash;
}
