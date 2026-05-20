import { Navigate, useParams } from 'react-router-dom'
import { getFrameworkBySlug } from '../data/frameworks'
import { FrameworkBackdrop } from '../components/FrameworkBackdrop'
import { FrameworkView } from '../components/FrameworkView'
import styles from './FrameworkPage.module.css'

export function FrameworkPage() {
  const { slug } = useParams<{ slug: string }>()
  const framework = slug ? getFrameworkBySlug(slug) : undefined

  if (!framework) {
    return <Navigate to="/" replace />
  }

  return (
    <div className={styles.page}>
      <FrameworkBackdrop category={framework.category} />
      <FrameworkView framework={framework} />
    </div>
  )
}
