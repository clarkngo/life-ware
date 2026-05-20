import type { FrameworkCategory } from '../types/framework'
import styles from './FrameworkBackdrop.module.css'

const TINT: Record<FrameworkCategory, string> = {
  identity: 'rgba(123, 158, 184, 0.35)',
  money: 'rgba(196, 168, 130, 0.32)',
  wellbeing: 'rgba(139, 158, 174, 0.34)',
}

interface FrameworkBackdropProps {
  category: FrameworkCategory
}

export function FrameworkBackdrop({ category }: FrameworkBackdropProps) {
  return (
    <div
      className={styles.backdrop}
      style={{ '--category-tint': TINT[category] } as React.CSSProperties}
      aria-hidden
    >
      <div className={styles.gradient} />
      <div className={styles.glow} />
      <div className={styles.ripple} />
    </div>
  )
}
