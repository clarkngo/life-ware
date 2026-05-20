import styles from './LessonsBackdrop.module.css'

export function LessonsBackdrop() {
  return (
    <div className={styles.scene} aria-hidden>
      <div className={styles.mist} />
      <div className={styles.glow} />
      <div className={styles.stream} />
    </div>
  )
}
