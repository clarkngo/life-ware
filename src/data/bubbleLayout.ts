export interface BubblePlacement {
  left: string
  top: string
  rotate: number
  floatDuration: number
  floatDelay: number
}

/** Organic pond positions — not grid-aligned */
export const bubblePlacements: Record<string, BubblePlacement> = {
  'identity-partition': {
    left: '5%',
    top: '8%',
    rotate: -5,
    floatDuration: 7.2,
    floatDelay: 0,
  },
  'money-stress-matrix': {
    left: '36%',
    top: '2%',
    rotate: 4,
    floatDuration: 6.5,
    floatDelay: -1.2,
  },
  'anchorless-survival': {
    left: '64%',
    top: '16%',
    rotate: -3,
    floatDuration: 8,
    floatDelay: -2.4,
  },
  'portfolio-life': {
    left: '10%',
    top: '56%',
    rotate: 6,
    floatDuration: 6.8,
    floatDelay: -0.8,
  },
  'burn-rate-of-joy': {
    left: '46%',
    top: '50%',
    rotate: -4,
    floatDuration: 7.5,
    floatDelay: -3,
  },
  'transition-shield': {
    left: '74%',
    top: '58%',
    rotate: 3,
    floatDuration: 6.2,
    floatDelay: -1.8,
  },
}
