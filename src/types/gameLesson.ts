export interface GameLessonImage {
  src: string
  alt: string
  caption: string
}

export interface GameLessonChapter {
  id: string
  title: string
  lessonHeading: string
  paragraphs: string[]
  bullets?: string[]
  image?: GameLessonImage
}

export interface GameLesson {
  slug: string
  game: string
  title: string
  subtitle: string
  intro: string
  audioSrc?: string
  audioLabel?: string
  chapters: GameLessonChapter[]
}
