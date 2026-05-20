import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import styles from './FrameworkView.module.css'

interface FrameworkSectionProps {
  id: string
  title: string
  index: number
  children: ReactNode
}

export function FrameworkSection({ id, title, index, children }: FrameworkSectionProps) {
  const reduced = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={styles.block}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.04, ease: [0.25, 1, 0.5, 1] }}
    >
      <h2 className={styles.heading}>{title}</h2>
      {children}
    </motion.section>
  )
}
