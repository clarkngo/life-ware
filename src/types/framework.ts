import type { LucideIcon } from 'lucide-react'

export type EffortLevel = 'low' | 'medium' | 'high'

export type BubbleSize = 'large' | 'small'

export type FrameworkCategory = 'identity' | 'money' | 'wellbeing'

export interface MatrixQuadrant {
  id: string
  label: string
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  advice: string
}

export interface Framework {
  id: string
  slug: string
  title: string
  shortTitle: string
  category: FrameworkCategory
  size: BubbleSize
  icon: LucideIcon
  accent: string
  companionOf?: string
  bug: string
  modelIntro: string
  modelType: 'matrix' | 'sandbox' | 'tri-anchor' | 'burn-rate' | 'portfolio'
  matrix?: {
    axisX: { low: string; high: string }
    axisY: { low: string; high: string }
    quadrants: MatrixQuadrant[]
  }
  protocol: { step: number; title: string; body: string }[]
  effort: EffortLevel
  effortNote: string
}
