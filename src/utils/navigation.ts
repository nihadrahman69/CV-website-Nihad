export interface NavLink {
  id: string;
  label: string;
}

/**
 * Single source of truth for the header/footer navigation.
 * Most entries are in-page section anchors (`#about`, `#projects`, ...).
 * `cv` is the one exception: it's picked up by the hash route in App.tsx
 * to swap the whole page for the standalone CV generator instead of
 * scrolling to a section.
 */
export const navLinks: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'languages', label: 'Languages' },
  { id: 'contact', label: 'Contact' },
  { id: 'cv', label: 'CV' },
];
