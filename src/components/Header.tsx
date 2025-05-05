import logo from '../assets/logo.svg'
import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[116px] px-12 flex justify-between items-center bg-transparent">
      <div>
        <img src={logo} alt="ウェルケア温泉" className="w-[260px] h-[64px]" />
      </div>
      <nav className="flex items-center py-2">
        <div className="flex items-center gap-4">
          <a className="border border-white text-white h-[40px] px-[30px] text-[14px] leading-[40px] cursor-pointer">
            <span className="font-medium tracking-[0.11em] leading-[40px]"> お問い合わせ</span>
          </a>
          <a 
            className="bg-primary p-[0px_24px] h-[40px] flex items-center cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="flex flex-col gap-[5px] justify-center">
              <span className="block w-[50px] h-[1px] bg-white"></span>
              <span className="block w-[40px] h-[1px] bg-white"></span>
              <span className="block w-[30px] h-[1px] bg-white"></span>
            </div>
          </a>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-primary transition-opacity duration-300 ease-in-out pointer-events-none ${
          isMenuOpen ? 'opacity-99 pointer-events-auto' : 'opacity-0'
        }`}
      >
        <button
          onClick={toggleMenu}
          className={`absolute top-10 right-12 z-50 transition-opacity duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-12 h-12">
            <span className="absolute top-1/2 left-0 w-12 h-[1px] bg-white transform -rotate-45" />
            <span className="absolute top-1/2 left-0 w-12 h-[1px] bg-white transform rotate-45" />
          </div>
        </button>

        <div
          className={`flex flex-col items-center justify-center h-full text-white transform transition-all duration-500 ease-out ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-8 text-3xl font-medium text-center">
            <li><a>TOP</a></li>
            <li><a>施設案内</a></li>
            <li><a>アクセス</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
