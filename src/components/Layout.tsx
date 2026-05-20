import { Outlet } from 'react-router-dom'
import { useFocus } from '../context/FocusContext'
import { Navbar } from './Navbar'
import styles from './Layout.module.css'

export function Layout() {
  const { focusMode } = useFocus()

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={`${styles.footer} ${focusMode ? styles.hidden : ''}`}>
        <p className={styles.tagline}>Operating systems for life.</p>
        <p className={styles.credit}>
          © {new Date().getFullYear()} Clark Ngo
        </p>
      </footer>
    </>
  )
}
