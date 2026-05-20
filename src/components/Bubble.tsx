import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import type { Framework } from '../types/framework'
import type { BubblePlacement } from '../data/bubbleLayout'
import { useAudio } from '../context/AudioContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import styles from './Bubble.module.css'

interface BubbleProps {
  framework: Framework
  index: number
  placement: BubblePlacement
}

const POP_DURATION = 0.55

export function Bubble({ framework, index, placement }: BubbleProps) {
  const navigate = useNavigate()
  const { onBubbleHover, onBubblePop, onFirstInteraction } = useAudio()
  const reduced = useReducedMotion()
  const [popping, setPopping] = useState(false)
  const Icon = framework.icon
  const isLarge = framework.size === 'large'

  const handleActivate = () => {
    if (popping) return
    onFirstInteraction()
    onBubblePop()
    if (reduced) {
      navigate(`/framework/${framework.slug}`)
      return
    }
    setPopping(true)
    window.setTimeout(() => {
      navigate(`/framework/${framework.slug}`)
    }, POP_DURATION * 1000)
  }

  return (
    <motion.div
      className={`${styles.slot} ${isLarge ? styles.slotLarge : styles.slotSmall} ${popping ? styles.popping : ''}`}
      style={
        {
          '--slot-left': placement.left,
          '--slot-top': placement.top,
          '--slot-rotate': `${placement.rotate}deg`,
          '--float-duration': `${placement.floatDuration}s`,
          '--float-delay': `${placement.floatDelay}s`,
          '--bubble-accent': framework.accent,
        } as React.CSSProperties
      }
      initial={reduced ? false : { opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: reduced ? 0 : index * 0.09,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      {popping && !reduced && (
        <>
          <motion.span
            className={styles.popRing}
            initial={{ scale: 0.8, opacity: 0.7 }}
            animate={{ scale: 2.8, opacity: 0 }}
            transition={{ duration: POP_DURATION, ease: [0.25, 1, 0.5, 1] }}
          />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.span
              key={i}
              className={styles.droplet}
              initial={{ scale: 0, opacity: 0.9, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0.3],
                opacity: [0.9, 0.6, 0],
                x: Math.cos((i / 6) * Math.PI * 2) * 72,
                y: Math.sin((i / 6) * Math.PI * 2) * 72,
              }}
              transition={{ duration: POP_DURATION * 0.85, ease: 'easeOut' }}
            />
          ))}
        </>
      )}

      <motion.button
        type="button"
        layoutId={popping ? undefined : `bubble-${framework.slug}`}
        className={`${styles.bubble} ${isLarge ? styles.large : styles.small}`}
        onClick={handleActivate}
        onMouseEnter={onBubbleHover}
        disabled={popping}
        aria-label={`Open ${framework.title}`}
        animate={
          popping
            ? { scale: [1, 1.28, 0], opacity: [1, 0.85, 0] }
            : { scale: 1, opacity: 1 }
        }
        transition={
          popping
            ? { duration: POP_DURATION, times: [0, 0.32, 1], ease: [0.25, 1, 0.5, 1] }
            : { type: 'spring', stiffness: 320, damping: 22 }
        }
        whileHover={
          reduced || popping
            ? undefined
            : { scale: 1.22, y: -10, transition: { type: 'spring', stiffness: 400, damping: 18 } }
        }
        whileTap={reduced || popping ? undefined : { scale: 1.12 }}
      >
        <Icon className={styles.icon} strokeWidth={1.5} aria-hidden />
        <span className={styles.title}>{framework.shortTitle}</span>
      </motion.button>
    </motion.div>
  )
}
