import type { EffortLevel } from '../types/framework'
import styles from './EffortRating.module.css'

const LABELS: Record<EffortLevel, string> = {
  low: 'Low effort',
  medium: 'Medium effort',
  high: 'High effort',
}

const DOTS: Record<EffortLevel, number> = {
  low: 1,
  medium: 2,
  high: 3,
}

interface EffortRatingProps {
  level: EffortLevel
  note: string
}

export function EffortRating({ level, note }: EffortRatingProps) {
  return (
    <div className={styles.wrap} aria-label={LABELS[level]}>
      <span className={styles.label}>Token cost</span>
      <span className={styles.dots} aria-hidden>
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`${styles.dot} ${i <= DOTS[level] ? styles.filled : ''}`}
          />
        ))}
      </span>
      <span className={styles.level}>{LABELS[level]}</span>
      <p className={styles.note}>{note}</p>
    </div>
  )
}
