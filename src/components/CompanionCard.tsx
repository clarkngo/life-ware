import { Link } from 'react-router-dom'
import type { Framework } from '../types/framework'
import { useAudio } from '../context/AudioContext'
import styles from './CompanionCard.module.css'

interface CompanionCardProps {
  framework: Framework
  variant?: 'companion' | 'parent'
}

export function CompanionCard({ framework, variant = 'companion' }: CompanionCardProps) {
  const { onBubbleHover } = useAudio()
  const Icon = framework.icon

  return (
    <Link
      to={`/framework/${framework.slug}`}
      className={styles.card}
      style={{ '--card-accent': framework.accent } as React.CSSProperties}
      onMouseEnter={onBubbleHover}
    >
      <Icon className={styles.icon} strokeWidth={1.5} aria-hidden />
      <span className={styles.meta}>
        {variant === 'parent' ? 'Parent framework' : 'Companion'}
      </span>
      <span className={styles.title}>{framework.shortTitle}</span>
    </Link>
  )
}
