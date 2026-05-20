import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { playChime, playLogo, playPop } from '../audio/ambient'

interface AudioContextValue {
  muted: boolean
  playing: boolean
  toggleMute: () => void
  onBubbleHover: () => void
  onBubblePop: () => void
  onLogoClick: () => void
  onFirstInteraction: () => void
}

const AudioCtx = createContext<AudioContextValue | null>(null)

const AMBIENT_SRC = `${import.meta.env.BASE_URL}assets/skyrim-dawn.mp3`

export function AudioProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      const el = new Audio(AMBIENT_SRC)
      el.loop = true
      el.volume = 0.35
      el.preload = 'auto'
      audioRef.current = el
    }
    return audioRef.current
  }, [])

  const play = useCallback(async () => {
    const el = getAudio()
    try {
      await el.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }, [getAudio])

  const pause = useCallback(() => {
    const el = audioRef.current
    if (el) {
      el.pause()
      el.currentTime = 0
    }
    setPlaying(false)
  }, [])

  const toggleMute = useCallback(() => {
    setMuted((m) => {
      const next = !m
      if (next) {
        pause()
      } else {
        void play()
      }
      return next
    })
  }, [pause, play])

  const onFirstInteraction = useCallback(() => {
    if (!muted && !playing) void play()
  }, [muted, playing, play])

  const onBubbleHover = useCallback(() => {
    playChime(muted)
  }, [muted])

  const onBubblePop = useCallback(() => {
    playPop(muted)
  }, [muted])

  const onLogoClick = useCallback(() => {
    playLogo(muted)
    if (!muted && !playing) void play()
  }, [muted, playing, play])

  useEffect(() => {
    if (!muted) void play()
  }, [muted, play])

  useEffect(() => {
    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [])

  const value = useMemo(
    () => ({
      muted,
      playing,
      toggleMute,
      onBubbleHover,
      onBubblePop,
      onLogoClick,
      onFirstInteraction,
    }),
    [muted, playing, toggleMute, onBubbleHover, onBubblePop, onLogoClick, onFirstInteraction],
  )

  return <AudioCtx.Provider value={value}>{children}</AudioCtx.Provider>
}

export function useAudio(): AudioContextValue {
  const ctx = useContext(AudioCtx)
  if (!ctx) throw new Error('useAudio must be used within AudioProvider')
  return ctx
}
