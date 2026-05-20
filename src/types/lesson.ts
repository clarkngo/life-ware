export type LessonTheme = 'design' | 'life' | 'build'

export interface Lesson {
  id: string
  title: string
  theme: LessonTheme
  context: string
  reflection: string
  takeaway: string
  relatedFrameworkSlug?: string
}
