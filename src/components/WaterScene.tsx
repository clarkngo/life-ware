import styles from './WaterScene.module.css'

export function WaterScene() {
  return (
    <div className={styles.scene} aria-hidden>
      <div className={styles.sky} />
      <div className={styles.tide} />
      <div className={styles.depth} />
      <div className={`${styles.orb} ${styles.orbA}`} />
      <div className={`${styles.orb} ${styles.orbB}`} />
      <div className={`${styles.orb} ${styles.orbC}`} />

      <div className={styles.waveLayer} data-speed="slow">
        <div className={styles.waveTrack}>
          <div className={styles.wave} />
          <div className={styles.wave} />
        </div>
      </div>

      <div className={styles.waveLayer} data-speed="mid">
        <div className={styles.waveTrack}>
          <div className={styles.wave} />
          <div className={`${styles.wave} ${styles.waveOffset}`} />
        </div>
      </div>

      <div className={styles.waveLayer} data-speed="fast">
        <div className={styles.ripple} />
        <div className={`${styles.ripple} ${styles.rippleTwo}`} />
        <div className={`${styles.ripple} ${styles.rippleThree}`} />
      </div>

      <div className={styles.shimmer} />
      <div className={styles.caustics} />
      <div className={styles.vignette} />
    </div>
  )
}
