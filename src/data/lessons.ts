import type { Lesson, LessonTheme } from '../types/lesson'

export const lessons: Lesson[] = [
  {
    id: 'calm-over-clever',
    title: 'Calm beats clever',
    theme: 'design',
    context:
      'Early mocks stacked animations, hover sounds, and dense copy on one screen. It felt alive—and immediately tiring.',
    reflection:
      'Restraint isn’t missing personality; it’s respecting attention. Users came to think, not to be entertained by the chrome.',
    takeaway:
      'Ship one calming motion per view. If everything moves, nothing guides.',
  },
  {
    id: 'silence-as-default',
    title: 'Silence is a valid default',
    theme: 'design',
    context:
      'Background music was tempting as “atmosphere.” Autoplay tested poorly in every browser and annoyed testers who wanted to read.',
    reflection:
      'Audio should invite, not assume. A clear Music on control respects focus and still allows sanctuary when wanted.',
    takeaway:
      'Default to quiet. Let the first intentional click unlock sound.',
  },
  {
    id: 'one-idea-per-bubble',
    title: 'One idea per bubble',
    theme: 'design',
    context:
      'The home screen almost became a dashboard: titles, summaries, tags, and CTAs inside every circle.',
    reflection:
      'Icon + title turned the pond into a gallery of curiosity. Detail belongs after the click, not before.',
    takeaway:
      'The entry point should whisper. The framework page can speak.',
  },
  {
    id: 'identity-not-sprint',
    title: 'A bad sprint is not a bad self',
    theme: 'life',
    context:
      'Writing the Identity Partition framework surfaced how often work verdicts became identity verdicts.',
    reflection:
      'Partitioning career from self isn’t denial—it’s fault tolerance. The host OS keeps running when one VM crashes.',
    takeaway:
      'Name the partition in one sentence before Monday standup on hard weeks.',
    relatedFrameworkSlug: 'identity-partition',
  },
  {
    id: 'money-shape-shifts',
    title: 'Stress changes shape, not just size',
    theme: 'life',
    context:
      'Interviewing the Money Stress Matrix made it obvious: more income didn’t automatically land people in “ease.”',
    reflection:
      'Control and anxiety are independent axes. Optimization without agency still feels like grip.',
    takeaway:
      'Plot where you are today—not where you think you should be—and pick one lever.',
    relatedFrameworkSlug: 'money-stress-matrix',
  },
  {
    id: 'anchors-before-output',
    title: 'Belonging before throughput',
    theme: 'life',
    context:
      'The Anchorless guide came from moves that looked productive in week one and hollow by week six.',
    reflection:
      'Transitions tax output. Routine, third place, and micro-community are infrastructure—not rewards for later.',
    takeaway:
      'Block anchor time on the calendar before heroic work goals.',
    relatedFrameworkSlug: 'anchorless-survival',
  },
  {
    id: 'motion-breathes',
    title: 'Motion should breathe',
    theme: 'design',
    context:
      'Snappy transitions felt “premium” in isolation. Together they felt like the UI was interrupting reading.',
    reflection:
      'Slow ease curves and long durations mimic exhale. The page should feel like it’s settling, not performing.',
    takeaway:
      'Prefer 600–900ms fades with soft cubic-bezier over snappy 200ms snaps.',
  },
  {
    id: 'whitespace-teaches',
    title: 'Whitespace teaches',
    theme: 'build',
    context:
      'Compressing sections to “fit above the fold” made frameworks feel like blog posts again.',
    reflection:
      'Space is how you tell the eye what matters. Jump links and focus mode only work when sections have room.',
    takeaway:
      'When in doubt, add margin before adding UI.',
  },
]

export const THEME_LABELS: Record<LessonTheme, string> = {
  design: 'Design & calm',
  life: 'Life systems',
  build: 'Building LifeWare',
}

export const ALL_THEMES: LessonTheme[] = ['design', 'life', 'build']
