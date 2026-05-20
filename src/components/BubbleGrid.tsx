import { frameworks } from '../data/frameworks'
import { bubblePlacements } from '../data/bubbleLayout'
import { Bubble } from './Bubble'
import styles from './BubbleGrid.module.css'

export function BubbleGrid() {
  return (
    <section className={styles.section} aria-label="Framework gallery">
      <p className={styles.intro}>
        A pond of mental models — hover, listen, explore.
      </p>
      <div className={styles.pond}>
        {frameworks.map((f, i) => {
          const placement = bubblePlacements[f.slug]
          if (!placement) return null
          return (
            <Bubble key={f.id} framework={f} index={i} placement={placement} />
          )
        })}
      </div>
    </section>
  )
}
