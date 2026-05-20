import {
  Anchor,
  Boxes,
  Flame,
  Layers,
  PieChart,
  Shield,
} from 'lucide-react'
import type { Framework } from '../types/framework'

export const frameworks: Framework[] = [
  {
    id: 'identity-partition',
    slug: 'identity-partition',
    title: 'The Identity Partition Protocol',
    shortTitle: 'Identity Partition',
    category: 'identity',
    size: 'large',
    icon: Layers,
    accent: '#7B9EB8',
    bug: 'We tie self-worth to a Jira ticket. A rough sprint becomes an existential audit, and recovery takes days instead of hours.',
    modelIntro:
      'Treat your career as one isolated virtual machine on a broader life OS. Work runs in a sandbox: it can crash, update, or migrate without taking the host system down.',
    modelType: 'sandbox',
    protocol: [
      {
        step: 1,
        title: 'Name the partition',
        body: 'Write one sentence: “My role is ___; my identity is ___.” Keep them grammatically separate. Read it before standup on hard weeks.',
      },
      {
        step: 2,
        title: 'Define a shutdown ritual',
        body: 'Close the VM: mute Slack, change clothes, or take a ten-minute walk. The ritual is the syscall that ends the work process.',
      },
      {
        step: 3,
        title: 'Maintain one non-work metric',
        body: 'Track something outside the job—sleep, a lift, a language lesson. When work wobbles, you still have a signal that the host OS is fine.',
      },
    ],
    effort: 'medium',
    effortNote: 'Weekly reflection; daily shutdown on stressful days.',
  },
  {
    id: 'portfolio-life',
    slug: 'portfolio-life',
    title: 'The Portfolio Life',
    shortTitle: 'Portfolio Life',
    category: 'identity',
    size: 'small',
    icon: PieChart,
    accent: '#9BB5C9',
    companionOf: 'identity-partition',
    bug: 'All fulfillment eggs sit in one employer-shaped basket. A reorg feels like a personal bankruptcy.',
    modelIntro:
      'Diversify fulfillment across three pillars: Monetized Skills (paid craft), Creative Sandbox (unpaid exploration), and Physical/Community Output (body + belonging).',
    modelType: 'portfolio',
    protocol: [
      {
        step: 1,
        title: 'Audit the mix',
        body: 'Score each pillar 0–10 for how much energy you gave it last month. One pillar above 8 while others sit below 3 is concentration risk.',
      },
      {
        step: 2,
        title: 'Schedule a sandbox block',
        body: 'Two hours weekly, no ROI required. Write, build, teach—anything that cannot appear on a performance review.',
      },
      {
        step: 3,
        title: 'Ship one community artifact',
        body: 'Cook for friends, mentor once, or show up to a local group. Belonging is an asset class too.',
      },
    ],
    effort: 'low',
    effortNote: 'Monthly audit; small weekly blocks.',
  },
  {
    id: 'money-stress-matrix',
    slug: 'money-stress-matrix',
    title: 'The Money Stress Matrix',
    shortTitle: 'Money Stress Matrix',
    category: 'money',
    size: 'large',
    icon: Boxes,
    accent: '#C4A882',
    bug: 'We assume more income automatically equals peace. Stress changes shape—it rarely disappears without a framework.',
    modelIntro:
      'Plot your relationship to money on Control (how much agency you feel) versus Anxiety (how often money hijacks your mood).',
    modelType: 'matrix',
    matrix: {
      axisX: { low: 'Low control', high: 'High control' },
      axisY: { low: 'Low anxiety', high: 'High anxiety' },
      quadrants: [
        {
          id: 'drift',
          label: 'Drift',
          position: 'top-left',
          advice:
            'Income may be fine, but vagueness breeds worry. Automate one bill, set a 48-hour “money date” monthly, and name your next three numbers (savings, debt, runway).',
        },
        {
          id: 'grip',
          label: 'Grip',
          position: 'top-right',
          advice:
            'You track everything yet still feel tense. Stress here is often identity-linked—see Identity Partition. Cap optimization hours; good enough ledgers beat perfect spreadsheets.',
        },
        {
          id: 'ease',
          label: 'Ease',
          position: 'bottom-left',
          advice:
            'Rare and fragile. Protect with boring systems: emergency fund, insurance basics, and a friend who can reality-check big purchases.',
        },
        {
          id: 'flow',
          label: 'Flow',
          position: 'bottom-right',
          advice:
            'Agency without panic. Reinvest surplus into optionality (skills, health, relationships) instead of lifestyle inflation by default.',
        },
      ],
    },
    protocol: [
      {
        step: 1,
        title: 'Place yourself honestly',
        body: 'Mark one quadrant for today—not where you wish you were. Revisit after major life events (move, promotion, layoff).',
      },
      {
        step: 2,
        title: 'Pick one lever',
        body: 'Low control → automate or learn one skill (negotiation, budgeting). High anxiety → shrink decision surface (fewer accounts, simpler goals).',
      },
      {
        step: 3,
        title: 'Separate numbers from narrative',
        body: 'Write the facts on line one, the story on line two. Most spirals are story upgrades, not math emergencies.',
      },
    ],
    effort: 'medium',
    effortNote: 'Monthly placement; quarterly lever review.',
  },
  {
    id: 'burn-rate-of-joy',
    slug: 'burn-rate-of-joy',
    title: 'The Burn Rate of Joy',
    shortTitle: 'Burn Rate of Joy',
    category: 'money',
    size: 'small',
    icon: Flame,
    accent: '#D4B896',
    companionOf: 'money-stress-matrix',
    bug: 'Subscriptions and “treat yourself” purchases masquerade as restoration. The burn rate of joy exceeds the deposit rate.',
    modelIntro:
      'Calculate the cost per genuine spark: total spend divided by hours of real energy returned. Kill anything with a terrible ratio.',
    modelType: 'burn-rate',
    protocol: [
      {
        step: 1,
        title: 'List last month’s “rest” spend',
        body: 'Include subscriptions, delivery, impulse buys framed as self-care.',
      },
      {
        step: 2,
        title: 'Score energy return 1–5',
        body: 'Be ruthless. A $15 walk scores higher than a $200 gadget you haven’t touched.',
      },
      {
        step: 3,
        title: 'Cut the bottom quartile',
        body: 'Redirect 50% of freed cash to a high-return joy item (class, trip fund, tool you’ll actually use).',
      },
    ],
    effort: 'low',
    effortNote: 'One evening per month.',
  },
  {
    id: 'anchorless-survival',
    slug: 'anchorless-survival',
    title: 'The Anchorless Survival Guide',
    shortTitle: 'Anchorless Survival',
    category: 'wellbeing',
    size: 'large',
    icon: Anchor,
    accent: '#8B9EAE',
    bug: 'Big moves—new country, remote role, grad school—strip away default routines. Without anchors, mood tracks the weather.',
    modelIntro:
      'When the macro-environment shifts, you need three micro-anchors: Routine (predictable cadence), Third Place (neither home nor work), and Micro-Community (five people who know your name).',
    modelType: 'tri-anchor',
    protocol: [
      {
        step: 1,
        title: 'Install one non-negotiable routine',
        body: 'Same time, same trigger—morning coffee walk, evening stretch. Small, boring, daily.',
      },
      {
        step: 2,
        title: 'Claim a third place',
        body: 'Library, café, climbing gym—somewhere you go twice weekly until staff recognize you.',
      },
      {
        step: 3,
        title: 'Seed micro-community',
        body: 'One recurring group + one individual coffee monthly. Depth beats network size in transition.',
      },
    ],
    effort: 'high',
    effortNote: 'Active for first 90 days of any major transition.',
  },
  {
    id: 'transition-shield',
    slug: 'transition-shield',
    title: 'The Transition Shield',
    shortTitle: 'Transition Shield',
    category: 'wellbeing',
    size: 'small',
    icon: Shield,
    accent: '#A8B8C4',
    companionOf: 'anchorless-survival',
    bug: 'You optimize for productivity in week one of a move, then wonder why week six feels hollow.',
    modelIntro:
      'Front-load belonging over output. The shield is a 30-day rule: no heroic work goals until all three tri-anchors have a placeholder slot on the calendar.',
    modelType: 'tri-anchor',
    protocol: [
      {
        step: 1,
        title: 'Block anchor time first',
        body: 'Before deep work blocks, schedule routine + third place + community touchpoints for the month.',
      },
      {
        step: 2,
        title: 'Cap ambition temporarily',
        body: 'Halve what you’d normally commit to at work or school. Transition tax is real.',
      },
      {
        step: 3,
        title: 'Review at day 30',
        body: 'Only then add a stretch goal. If anchors are shaky, extend the shield another two weeks.',
      },
    ],
    effort: 'medium',
    effortNote: 'Runs alongside any relocation or role change.',
  },
]

export function getFrameworkBySlug(slug: string): Framework | undefined {
  return frameworks.find((f) => f.slug === slug)
}

export function getCompanionFrameworks(parentId: string): Framework[] {
  return frameworks.filter((f) => f.companionOf === parentId)
}

export function getParentFramework(framework: Framework): Framework | undefined {
  if (!framework.companionOf) return undefined
  return frameworks.find((f) => f.id === framework.companionOf)
}

const CATEGORY_LABELS: Record<Framework['category'], string> = {
  identity: 'Identity & career',
  money: 'Emotional finances',
  wellbeing: 'Contextual well-being',
}

export function getCategoryLabel(category: Framework['category']): string {
  return CATEGORY_LABELS[category]
}

export function estimateReadMinutes(framework: Framework): number {
  const text = [
    framework.title,
    framework.bug,
    framework.modelIntro,
    framework.effortNote,
    ...framework.protocol.flatMap((p) => [p.title, p.body]),
    ...(framework.matrix?.quadrants.map((q) => q.advice) ?? []),
  ].join(' ')
  const words = text.split(/\s+/).length
  return Math.max(2, Math.ceil(words / 200))
}
