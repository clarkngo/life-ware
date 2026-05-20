import { useCallback, useEffect, useRef, useState } from 'react'
import { useAudio } from '../context/AudioContext'
import styles from './GameLessonAudio.module.css'

interface GameLessonAudioProps {
  src: string
  label: string
}

export function GameLessonAudio({ src, label }: GameLessonAudioProps) {
  const { muted } = useAudio()
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = useCallback(() => {
    if (muted) return
    const el = audioRef.current ?? new Audio(src)
    audioRef.current = el
    el.loop = true
    el.volume = 0.4

    if (playing) {
      el.pause()
      setPlaying(false)
    } else {
      void el.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }
  }, [muted, playing, src])

  useEffect(() => {
    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [])

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={`${styles.btn} ${playing ? styles.on : ''}`}
        onClick={toggle}
        disabled={muted}
        aria-pressed={playing}
      >
        {playing ? 'Pause' : 'Play'} {label}
      </button>
      {muted && (
        <span className={styles.hint}>Turn on music in the navbar to listen.</span>
      )}
    </div>
  )
}
