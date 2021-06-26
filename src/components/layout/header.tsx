import { useState, createContext } from 'react'
import Menu from './menu'
import MenuMobile from './menu-mobile'

export const MenuMobileStatus = createContext(
  {} as {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  }
)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MenuMobileStatus.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative bg-gray shadow z-30">
        <Menu />
        <MenuMobile />
      </div>
    </MenuMobileStatus.Provider>
  )
}
