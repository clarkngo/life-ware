import { motion } from 'framer-motion'
import { BubbleGrid } from '../components/BubbleGrid'
import { WaterScene } from '../components/WaterScene'
import { useReducedMotion } from '../hooks/useReducedMotion'
import styles from './HomePage.module.css'

export function HomePage() {
  const reduced = useReducedMotion()

  return (
    <div className={styles.home}>
      <WaterScene />
      <motion.div
        className={styles.content}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <BubbleGrid />
      </motion.div>
    </div>
  )
}
