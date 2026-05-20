import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

interface FocusContextValue {
  focusMode: boolean
  toggleFocusMode: () => void
}

const FocusCtx = createContext<FocusContextValue | null>(null)

export function FocusProvider({ children }: { children: ReactNode }) {
  const [focusMode, setFocusMode] = useState(false)
  const toggleFocusMode = useCallback(() => setFocusMode((f) => !f), [])

  const value = useMemo(
    () => ({ focusMode, toggleFocusMode }),
    [focusMode, toggleFocusMode],
  )

  return <FocusCtx.Provider value={value}>{children}</FocusCtx.Provider>
}

export function useFocus(): FocusContextValue {
  const ctx = useContext(FocusCtx)
  if (!ctx) throw new Error('useFocus must be used within FocusProvider')
  return ctx
}
