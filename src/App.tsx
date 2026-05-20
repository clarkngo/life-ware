import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { AudioProvider } from './context/AudioContext'
import { FocusProvider } from './context/FocusContext'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { FrameworkPage } from './pages/FrameworkPage'
import { LessonsPage } from './pages/LessonsPage'
import { GameLessonsPage } from './pages/GameLessonsPage'
import { GameLessonPage } from './pages/GameLessonPage'

function SpaRedirect() {
  const navigate = useNavigate()
  useEffect(() => {
    const match = window.location.search.match(/^\?\/?(.*)$/)
    if (match?.[1]) {
      navigate('/' + match[1].replace(/~and~/g, '&'), { replace: true })
    }
  }, [navigate])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename="/life-ware">
      <SpaRedirect />
      <AudioProvider>
        <FocusProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="framework/:slug" element={<FrameworkPage />} />
              <Route path="lessons" element={<LessonsPage />} />
              <Route path="games" element={<GameLessonsPage />} />
              <Route path="games/:slug" element={<GameLessonPage />} />
            </Route>
          </Routes>
        </FocusProvider>
      </AudioProvider>
    </BrowserRouter>
  )
}
