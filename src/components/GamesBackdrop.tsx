import styles from './GamesBackdrop.module.css'

export function GamesBackdrop() {
  return (
    <div className={styles.scene} aria-hidden>
      <div className={styles.sky} />
      <div className={styles.glow} />
      <div className={styles.pixelMist} />
    </div>
  )
}
