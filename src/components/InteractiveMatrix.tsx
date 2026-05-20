import { useState } from 'react'
import type { Framework } from '../types/framework'
import { useAudio } from '../context/AudioContext'
import styles from './InteractiveMatrix.module.css'

interface InteractiveMatrixProps {
  matrix: NonNullable<Framework['matrix']>
}

export function InteractiveMatrix({ matrix }: InteractiveMatrixProps) {
  const { onBubbleHover } = useAudio()
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = matrix.quadrants.find((q) => q.id === activeId)

  const select = (id: string) => {
    onBubbleHover()
    setActiveId(activeId === id ? null : id)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.grid} role="group" aria-label="Money stress matrix">
        <span className={`${styles.axis} ${styles.axisYHigh}`}>{matrix.axisY.high}</span>
        <span className={`${styles.axis} ${styles.axisYLow}`}>{matrix.axisY.low}</span>
        <span className={`${styles.axis} ${styles.axisXLow}`}>{matrix.axisX.low}</span>
        <span className={`${styles.axis} ${styles.axisXHigh}`}>{matrix.axisX.high}</span>

        {matrix.quadrants.map((q) => (
          <button
            key={q.id}
            type="button"
            className={`${styles.cell} ${styles[q.position]} ${activeId === q.id ? styles.active : ''}`}
            onMouseEnter={onBubbleHover}
            onClick={() => select(q.id)}
            aria-pressed={activeId === q.id}
            aria-describedby={activeId === q.id ? 'matrix-advice' : undefined}
          >
            <span className={styles.cellLabel}>{q.label}</span>
          </button>
        ))}
      </div>

      <div
        id="matrix-advice"
        className={`${styles.advice} ${active ? styles.adviceVisible : ''}`}
        aria-live="polite"
      >
        {active ? (
          <>
            <strong>{active.label}</strong>
            <p>{active.advice}</p>
          </>
        ) : (
          <p className={styles.hint}>Click a quadrant to reveal guidance.</p>
        )}
      </div>
    </div>
  )
}
