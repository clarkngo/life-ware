import { useAudio } from '../context/AudioContext'
import styles from './AudioControl.module.css'

export function AudioControl() {
  const { muted, playing, toggleMute } = useAudio()

  return (
    <button
      type="button"
      className={`${styles.control} ${muted ? styles.off : styles.on}`}
      onClick={toggleMute}
      aria-pressed={!muted}
      aria-label={
        muted ? 'Turn background music on' : 'Turn background music off'
      }
    >
      <span className={`${styles.wave} ${playing && !muted ? styles.pulse : ''}`}>
        <span />
        <span />
        <span />
      </span>
      <span className={styles.label}>{muted ? 'Music off' : 'Music on'}</span>
    </button>
  )
}
