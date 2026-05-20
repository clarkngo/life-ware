import { useState } from 'react'
import type { Framework } from '../types/framework'
import styles from './ModelDiagram.module.css'

const TRI_ANCHOR_TIPS: Record<string, { label: string; tip: string }[]> = {
  'anchorless-survival': [
    { label: 'Routine', tip: 'Same time, same trigger—daily and boring beats ambitious.' },
    { label: 'Third place', tip: 'Neither home nor work. Visit twice weekly until you’re recognized.' },
    { label: 'Micro-community', tip: 'Five people who know your name beat five hundred LinkedIn connections.' },
  ],
  'transition-shield': [
    { label: 'Routine', tip: 'Block it on the calendar before any deep-work goals.' },
    { label: 'Third place', tip: 'Claim it in week one—even if you only read for twenty minutes.' },
    { label: 'Micro-community', tip: 'One recurring group + one coffee monthly. Non-negotiable for 30 days.' },
  ],
}

const PORTFOLIO_TIPS = [
  { label: 'Monetized', subtitle: 'paid craft', tip: 'Skills that earn. Score your energy here monthly.' },
  { label: 'Sandbox', subtitle: 'unpaid exploration', tip: 'Zero ROI required. Protect two hours weekly.' },
  { label: 'Community', subtitle: 'body + belonging', tip: 'Ship one artifact that builds connection.' },
]

interface ModelDiagramProps {
  framework: Framework
}

export function ModelDiagram({ framework }: ModelDiagramProps) {
  const [activeTip, setActiveTip] = useState<string | null>(null)

  switch (framework.modelType) {
    case 'sandbox':
      return (
        <figure className={styles.figure} aria-label="Sandbox model diagram">
          <div className={styles.sandbox}>
            <div className={styles.host}>
              <span className={styles.hostLabel}>Life OS</span>
              <div className={styles.vm}>
                <span>Career VM</span>
                <small>Isolated process</small>
              </div>
            </div>
          </div>
          <figcaption className={styles.caption}>
            Work crashes inside the VM; the host keeps running.
          </figcaption>
        </figure>
      )

    case 'portfolio': {
      const active = PORTFOLIO_TIPS.find((p) => p.label === activeTip)
      return (
        <figure className={styles.figure} aria-label="Portfolio pillars">
          <ul className={styles.pillars}>
            {PORTFOLIO_TIPS.map((p) => (
              <li key={p.label}>
                <button
                  type="button"
                  className={activeTip === p.label ? styles.pillarActive : ''}
                  onClick={() => setActiveTip(activeTip === p.label ? null : p.label)}
                  aria-pressed={activeTip === p.label}
                >
                  <span>{p.label}</span>
                  <small>{p.subtitle}</small>
                </button>
              </li>
            ))}
          </ul>
          <p className={styles.tipPanel} aria-live="polite">
            {active ? active.tip : 'Click a pillar for guidance.'}
          </p>
        </figure>
      )
    }

    case 'tri-anchor': {
      const tips = TRI_ANCHOR_TIPS[framework.slug] ?? TRI_ANCHOR_TIPS['anchorless-survival']
      const active = tips.find((a) => a.label === activeTip)
      return (
        <figure className={styles.figure} aria-label="Tri-anchor system">
          <div className={styles.triAnchor}>
            {tips.map((a) => (
              <button
                key={a.label}
                type="button"
                className={`${styles.anchor} ${activeTip === a.label ? styles.anchorActive : ''}`}
                onClick={() => setActiveTip(activeTip === a.label ? null : a.label)}
                aria-pressed={activeTip === a.label}
              >
                {a.label}
              </button>
            ))}
          </div>
          <p className={styles.tipPanel} aria-live="polite">
            {active ? active.tip : 'Click an anchor to explore.'}
          </p>
        </figure>
      )
    }

    case 'burn-rate':
      return (
        <figure className={styles.figure} aria-label="Joy burn rate formula">
          <p className={styles.formula}>
            <span>Cost per spark</span> = monthly spend ÷ hours of real energy
          </p>
          <div className={styles.meter}>
            <span className={styles.bad}>Low return</span>
            <span className={styles.good}>High return</span>
          </div>
          <p className={styles.caption}>Cut the bottom quartile of spend; fund what actually restores you.</p>
        </figure>
      )

    default:
      return null
  }
}
