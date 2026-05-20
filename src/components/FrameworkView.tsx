import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Framework } from '../types/framework'
import {
  estimateReadMinutes,
  getCategoryLabel,
  getCompanionFrameworks,
  getParentFramework,
} from '../data/frameworks'
import { useFocus } from '../context/FocusContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { CompanionCard } from './CompanionCard'
import { EffortRating } from './EffortRating'
import { FrameworkSection } from './FrameworkSection'
import { InteractiveMatrix } from './InteractiveMatrix'
import { ModelDiagram } from './ModelDiagram'
import { ProtocolStep } from './ProtocolStep'
import { ReadingProgress } from './ReadingProgress'
import styles from './FrameworkView.module.css'

interface FrameworkViewProps {
  framework: Framework
}

const SECTIONS = [
  { id: 'bug', label: 'Bug' },
  { id: 'model', label: 'Model' },
  { id: 'protocol', label: 'Protocol' },
  { id: 'effort', label: 'Effort' },
] as const

export function FrameworkView({ framework }: FrameworkViewProps) {
  const companions = getCompanionFrameworks(framework.id)
  const parent = getParentFramework(framework)
  const { focusMode, toggleFocusMode } = useFocus()
  const reduced = useReducedMotion()
  const Icon = framework.icon
  const readMin = estimateReadMinutes(framework)
  const depthLabel = framework.size === 'large' ? 'Deep dive' : 'Quick model'

  return (
    <>
      <ReadingProgress />
      <motion.article
        className={`${styles.article} ${focusMode ? styles.focusMode : ''}`}
        style={{ '--page-accent': framework.accent } as React.CSSProperties}
        initial={reduced ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      >
        <motion.header
          layoutId={`bubble-${framework.slug}`}
          className={styles.hero}
        >
          <Icon className={styles.heroIcon} strokeWidth={1.25} aria-hidden />
          <div className={styles.meta}>
            <span className={styles.category}>{getCategoryLabel(framework.category)}</span>
            <span className={styles.dot} aria-hidden>
              ·
            </span>
            <span className={styles.readTime}>{readMin} min read</span>
            <span className={styles.dot} aria-hidden>
              ·
            </span>
            <span className={styles.depth}>{depthLabel}</span>
          </div>
          <h1>{framework.title}</h1>
        </motion.header>

        {!focusMode && (
          <nav className={styles.jumpNav} aria-label="On this page">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                {s.label}
              </a>
            ))}
          </nav>
        )}

        <FrameworkSection id="bug" title="The bug" index={0}>
          <p className={styles.bug}>{framework.bug}</p>
        </FrameworkSection>

        <FrameworkSection id="model" title="The model" index={1}>
          <p className={styles.modelIntro}>{framework.modelIntro}</p>
          {framework.matrix ? (
            <InteractiveMatrix matrix={framework.matrix} />
          ) : (
            <ModelDiagram framework={framework} />
          )}
        </FrameworkSection>

        <FrameworkSection id="protocol" title="The protocol" index={2}>
          <ol className={styles.protocol}>
            {framework.protocol.map((step) => (
              <ProtocolStep
                key={step.step}
                step={step.step}
                title={step.title}
                body={step.body}
              />
            ))}
          </ol>
        </FrameworkSection>

        <FrameworkSection id="effort" title="Effort to maintain" index={3}>
          <EffortRating level={framework.effort} note={framework.effortNote} />
        </FrameworkSection>

        {!focusMode && (parent || companions.length > 0) && (
          <section className={styles.related}>
            <h2 className={styles.heading}>Related</h2>
            <div className={styles.relatedGrid}>
              {parent && <CompanionCard framework={parent} variant="parent" />}
              {companions.map((c) => (
                <CompanionCard key={c.id} framework={c} />
              ))}
            </div>
          </section>
        )}

        {!focusMode && (
          <p className={styles.back}>
            <Link to="/">← All frameworks</Link>
          </p>
        )}

        {focusMode && (
          <button type="button" className={styles.exitFocus} onClick={toggleFocusMode}>
            Exit focus
          </button>
        )}
      </motion.article>
    </>
  )
}
