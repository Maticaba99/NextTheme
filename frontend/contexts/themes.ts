import { useContext, createContext } from 'react'

export interface ThemeInterface {
  color: string,
  background: string
}

export const theme = {
  default: {
    color: '#f5f5f5',
    background: '#5b5b5b',
  },
  solaris: {
    color: '#ED765F',
    background: '#414C55',
  },
  brown: {
    color: 'yellow',
    background: 'brown'
  }
}

export const temaContext = createContext(theme.default)
export const useTema = () => useContext(temaContext)

export const TemaProvider = temaContext.Provider
