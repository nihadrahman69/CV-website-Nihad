import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Resolve and apply the theme before the app renders, so the first paint
// already matches the stored choice (or system preference) instead of
// briefly flashing the default dark theme. Mirrors the logic in useTheme.
try {
  const stored = window.localStorage.getItem('theme')
  const theme =
    stored === 'light' || stored === 'dark'
      ? stored
      : window.matchMedia?.('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark'
  document.documentElement.classList.toggle('light', theme === 'light')
} catch {
  // localStorage/matchMedia unavailable — the dark default from index.css stands.
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
