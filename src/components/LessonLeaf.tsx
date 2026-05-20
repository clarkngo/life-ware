import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Lesson } from '../types/lesson'
import { THEME_LABELS } from '../data/lessons'
import { useAudio } from '../context/AudioContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import styles from './LessonLeaf.module.css'

interface LessonLeafProps {
  lesson: Lesson
  index: number
  isOpen: boolean
  onToggle: () => void
}

export function LessonLeaf({ lesson, index, isOpen, onToggle }: LessonLeafProps) {
  const { onBubbleHover } = useAudio()
  const reduced = useReducedMotion()

  const handleToggle = () => {
    if (!isOpen) onBubbleHover()
    onToggle()
  }

  return (
    <motion.li
      className={styles.leaf}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.65,
        delay: reduced ? 0 : index * 0.06,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      <span className={styles.marker} aria-hidden />
      <div className={styles.card}>
        <button
          type="button"
          className={`${styles.trigger} ${isOpen ? styles.open : ''}`}
          onClick={handleToggle}
          aria-expanded={isOpen}
        >
          <span className={styles.theme}>{THEME_LABELS[lesson.theme]}</span>
          <span className={styles.title}>{lesson.title}</span>
          <span className={styles.chevron} aria-hidden>
            {isOpen ? '−' : '+'}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className={styles.body}
              initial={reduced ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduced ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className={styles.sections}>
                <div className={styles.section}>
                  <h3>Context</h3>
                  <p>{lesson.context}</p>
                </div>
                <div className={styles.section}>
                  <h3>Reflection</h3>
                  <p>{lesson.reflection}</p>
                </div>
                <div className={`${styles.section} ${styles.takeaway}`}>
                  <h3>Takeaway</h3>
                  <p>{lesson.takeaway}</p>
                </div>
                {lesson.relatedFrameworkSlug && (
                  <Link
                    to={`/framework/${lesson.relatedFrameworkSlug}`}
                    className={styles.frameworkLink}
                    onClick={onBubbleHover}
                  >
                    Explore related framework →
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  )
}
