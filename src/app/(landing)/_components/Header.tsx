'use client'

import { useState } from 'react'

import { NavBarProvider } from '@/components/context/NavBarContext'
import MenuNavBar from '@/app/(landing)/_components/MenuNavBar'
import MenuMobile from '@/app/(landing)/_components/MenuMobile'


export default function Header (){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const variables = {
    mobileMenuOpen, 
    setMobileMenuOpen
  }

  return (
    <header className="bg-white">
      <NavBarProvider variables={variables}>
        <MenuNavBar />
        <MenuMobile />
      </NavBarProvider>
    </header>
  )
}