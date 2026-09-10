import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets window scroll position on route changes.
 * Tracks both pathname (per request) and hash (because the current architecture
 * relies on useHashRoute for standalone pages like #cv).
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if we are navigating to a new "page" (like #cv or back to home).
    // Standard anchor links (like #projects) should naturally scroll to their section,
    // so we skip scrolling to top if the hash corresponds to a valid portfolio section.
    const isSectionAnchor = ['#about', '#experience', '#projects', '#skills', '#languages', '#contact'].includes(hash);
    
    if (!isSectionAnchor) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
