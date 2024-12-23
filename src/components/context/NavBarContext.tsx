'use client'
import { createContext, useContext } from 'react'

export type NavBarContextType = {
    mobileMenuOpen: boolean, 
    setMobileMenuOpen: (open: boolean) => void
}
const NavBarContext = createContext<NavBarContextType | undefined>(undefined)

export function useNavBar() {
  const context = useContext(NavBarContext)
  if (!context) {
    throw new Error('useNavBar must be used within a NavBarProvider')
  }
  return context
}

type NavBarProvider = {
  children: React.ReactNode
  variables:  NavBarContextType
}

export function NavBarProvider({ children, variables }: NavBarProvider) {
  return (
    <NavBarContext.Provider value={variables}>
      {children}
    </NavBarContext.Provider>
  )
}