import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { gameLessons } from '../data/gameLessons'
import { GamesBackdrop } from '../components/GamesBackdrop'
import { useReducedMotion } from '../hooks/useReducedMotion'
import styles from './GameLessonsPage.module.css'

export function GameLessonsPage() {
  const reduced = useReducedMotion()

  return (
    <div className={styles.page}>
      <GamesBackdrop />
      <motion.div
        className={styles.content}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Lessons from video games</p>
          <h1>Play, then pause</h1>
          <p className={styles.intro}>
            Long-form reflections on what games teach about life—story beats, moral
            grey zones, and the quiet moments between boss fights. Read slowly.
          </p>
        </header>

        <ul className={styles.list}>
          {gameLessons.map((lesson, i) => (
            <motion.li
              key={lesson.slug}
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: reduced ? 0 : i * 0.08,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <Link to={`/games/${lesson.slug}`} className={styles.card}>
                <span className={styles.game}>{lesson.game}</span>
                <span className={styles.title}>{lesson.title}</span>
                <span className={styles.sub}>{lesson.subtitle}</span>
                <span className={styles.cta}>Read lesson →</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
