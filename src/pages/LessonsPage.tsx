import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ALL_THEMES, lessons, THEME_LABELS } from '../data/lessons'
import type { LessonTheme } from '../types/lesson'
import { LessonsBackdrop } from '../components/LessonsBackdrop'
import { LessonLeaf } from '../components/LessonLeaf'
import { useReducedMotion } from '../hooks/useReducedMotion'
import styles from './LessonsPage.module.css'

type Filter = 'all' | LessonTheme

export function LessonsPage() {
  const reduced = useReducedMotion()
  const [filter, setFilter] = useState<Filter>('all')
  const [openId, setOpenId] = useState<string | null>(null)

  const filtered =
    filter === 'all' ? lessons : lessons.filter((l) => l.theme === filter)

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <div className={styles.page}>
      <LessonsBackdrop />
      <motion.div
        className={styles.content}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Reflections</p>
          <h1>Lessons learned</h1>
          <p className={styles.intro}>
            Quiet notes from building LifeWare and living its frameworks—no hot takes,
            no urgency. Open one leaf at a time. For video games, see{' '}
            <Link to="/games">Lessons from games</Link>.
          </p>
        </header>

        <div
          className={styles.filters}
          role="tablist"
          aria-label="Filter lessons by theme"
        >
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'all'}
            className={filter === 'all' ? styles.filterActive : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          {ALL_THEMES.map((theme) => (
            <button
              key={theme}
              type="button"
              role="tab"
              aria-selected={filter === theme}
              className={filter === theme ? styles.filterActive : ''}
              onClick={() => {
                setFilter(theme)
                setOpenId(null)
              }}
            >
              {THEME_LABELS[theme]}
            </button>
          ))}
        </div>

        <ul className={styles.stream} key={filter}>
          {filtered.map((lesson, i) => (
            <LessonLeaf
              key={lesson.id}
              lesson={lesson}
              index={i}
              isOpen={openId === lesson.id}
              onToggle={() => handleToggle(lesson.id)}
            />
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className={styles.empty}>No lessons in this theme yet.</p>
        )}
      </motion.div>
    </div>
  )
}
