import { Link, NavLink } from 'react-router-dom'
import { useAudio } from '../context/AudioContext'
import { useFocus } from '../context/FocusContext'
import { AudioControl } from './AudioControl'
import styles from './Navbar.module.css'

export function Navbar() {
  const { focusMode, toggleFocusMode } = useFocus()
  const { onLogoClick } = useAudio()

  return (
    <header className={`${styles.header} ${focusMode ? styles.hidden : ''}`}>
      <nav className={styles.nav} aria-label="Main">
        <Link to="/" className={styles.logo} onClick={onLogoClick}>
          LifeWare
        </Link>
        <div className={styles.links}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            Frameworks
          </NavLink>
          <NavLink
            to="/lessons"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            Lessons
          </NavLink>
          <NavLink
            to="/games"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            Games
          </NavLink>
        </div>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.focusBtn}
            onClick={toggleFocusMode}
            aria-pressed={focusMode}
          >
            Focus
          </button>
          <AudioControl />
        </div>
      </nav>
    </header>
  )
}
