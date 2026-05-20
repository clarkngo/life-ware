import { Navigate, useParams } from 'react-router-dom'
import { getGameLessonBySlug } from '../data/gameLessons'
import { GamesBackdrop } from '../components/GamesBackdrop'
import { GameLessonView } from '../components/GameLessonView'
import styles from './GameLessonPage.module.css'

export function GameLessonPage() {
  const { slug } = useParams<{ slug: string }>()
  const lesson = slug ? getGameLessonBySlug(slug) : undefined

  if (!lesson) {
    return <Navigate to="/games" replace />
  }

  return (
    <div className={styles.page}>
      <GamesBackdrop />
      <GameLessonView lesson={lesson} />
    </div>
  )
}
