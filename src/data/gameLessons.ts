import type { GameLesson } from '../types/gameLesson'

const base = import.meta.env.BASE_URL

export const gameLessons: GameLesson[] = [
  {
    slug: 'breath-of-fire-iii-childhood',
    game: 'Breath of Fire III',
    title: 'When heroes meet harsh reality',
    subtitle: 'The McNeil heist and the Nue — childhood arc',
    intro:
      'Breath of Fire III shifts from a lighthearted RPG about three orphaned thieves into a masterclass in emotional complexity. These two childhood-arc storylines strip the romantic “Robin Hood” illusion and force you to sit with survival, fear, and systemic oppression.',
    audioSrc: `${base}assets/bof3-prologue.mp3`,
    audioLabel: 'Prologue theme',
    chapters: [
      {
        id: 'mcneil-heist',
        title: 'The McNeil Manor heist',
        lessonHeading: 'Systemic terror outlasts wealth',
        paragraphs: [
          'The heist on McNeil Manor is built up like a classic, triumphant caper. You spend hours bypassing guards, bribing caretakers, scaling roofs, and confronting the cartoonishly corrupt landlord, Torajiro McNeil.',
          'When you steal his hoard and distribute it around impoverished Farmtown, it feels like an absolute victory for the Cedar Woods Family. You think you have saved the day.',
          'Instead, the game hits you with a devastating reality check: the villagers return every single coin to McNeil.',
        ],
        bullets: [
          'The farmers are not ungrateful—they are terrified. A bag of gold feeds them for weeks; McNeil’s wrath and his ties to Balio and Sunder can haunt them for generations.',
          'If they keep the money, their homes may burn, or their children may disappear.',
          'For Rei, Teepo, and Ryu, the illusion shatters: they thought they were heroes. They have placed a dangerous target on the people they meant to protect.',
        ],
        image: {
          src: `${base}assets/bof3-infiltrate-mcneil-manor.jpeg`,
          alt: 'Ryu and allies infiltrating McNeil Manor',
          caption: 'Infiltrating McNeil Manor. Source: Breath of Fire Wiki (Fandom)',
        },
      },
      {
        id: 'nue',
        title: 'The killing of the Nue',
        lessonHeading: 'Empathy in the face of a “monster”',
        paragraphs: [
          'Before the heist, your first major test is hunting the Nue—a chimera-like creature terrorizing Mt. Gaba, killing travelers, and stealing the village food supply.',
          'You track it down, fight a grueling boss battle, and corner it deep in its cave.',
          'When you land the final blow, the narrative shifts from standard monster hunt to gut-wrenching tragedy. You discover why the Nue attacked:',
        ],
        bullets: [
          'The Nue was not acting from malice. She was a starving mother trying to provide for her cubs.',
          'Her cubs have already frozen or starved to death. The game notes she did not realize they were gone—still bringing food from pure maternal instinct.',
          'There is no triumphant victory music. You and the Nue were in the same struggle: vulnerable orphans surviving a harsh winter by any means necessary.',
        ],
        image: {
          src: `${base}assets/bof3-tragic-nue.jpeg`,
          alt: 'The tragic discovery inside the Nue\'s cave',
          caption: 'The tragic discovery inside the Nue\'s cave. Source: Geek Pride',
        },
      },
    ],
  },
]

export function getGameLessonBySlug(slug: string): GameLesson | undefined {
  return gameLessons.find((g) => g.slug === slug)
}
