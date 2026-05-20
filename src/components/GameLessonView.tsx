import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { GameLesson } from '../types/gameLesson'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { GameLessonAudio } from './GameLessonAudio'
import { ReadingProgress } from './ReadingProgress'
import styles from './GameLessonView.module.css'

interface GameLessonViewProps {
  lesson: GameLesson
}

export function GameLessonView({ lesson }: GameLessonViewProps) {
  const reduced = useReducedMotion()

  return (
    <>
      <ReadingProgress />
      <motion.article
        className={styles.article}
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
      >
        <header className={styles.hero}>
          <p className={styles.game}>{lesson.game}</p>
          <h1>{lesson.title}</h1>
          <p className={styles.subtitle}>{lesson.subtitle}</p>
        </header>

        <p className={styles.intro}>{lesson.intro}</p>

        {lesson.audioSrc && lesson.audioLabel && (
          <GameLessonAudio src={lesson.audioSrc} label={lesson.audioLabel} />
        )}

        {lesson.chapters.map((chapter, i) => (
          <motion.section
            key={chapter.id}
            id={chapter.id}
            className={styles.chapter}
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
          >
            <h2>{chapter.title}</h2>

            {chapter.image && (
              <figure className={styles.figure}>
                <img src={chapter.image.src} alt={chapter.image.alt} loading="lazy" />
                <figcaption>{chapter.image.caption}</figcaption>
              </figure>
            )}

            {chapter.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}

            <div className={styles.lesson}>
              <h3>{chapter.lessonHeading}</h3>
              {chapter.bullets && (
                <ul>
                  {chapter.bullets.map((b) => (
                    <li key={b.slice(0, 24)}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.section>
        ))}

        <p className={styles.back}>
          <Link to="/games">← All game lessons</Link>
        </p>
      </motion.article>
    </>
  )
}
