import { useState } from 'react'
import styles from './ProtocolStep.module.css'

interface ProtocolStepProps {
  step: number
  title: string
  body: string
}

export function ProtocolStep({ step, title, body }: ProtocolStepProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    const text = `${step}. ${title}\n${body}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <li className={styles.step}>
      <span className={styles.num}>{step}</span>
      <div className={styles.body}>
        <div className={styles.head}>
          <strong>{title}</strong>
          <button type="button" className={styles.copy} onClick={copy}>
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <p>{body}</p>
      </div>
    </li>
  )
}
