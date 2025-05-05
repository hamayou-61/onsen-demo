import logo from '../assets/logo.svg'
import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuAnimation, setMenuAnimation] = useState(false)

  const toggleMenu = () => {
    if (isMenuOpen) {
      setMenuAnimation(false)
      setTimeout(() => {
        setIsMenuOpen(false)
      }, 300)
    } else {
      setIsMenuOpen(true)
      setTimeout(() => {
        setMenuAnimation(true)
      }, 10)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[116px] w-full flex justify-between items-center px-[50px]">
      <div className="flex items-center px-4">
        <h1 className=" font-medium text-[32px] text-white tracking-[0.05em]">
          <img src={logo} alt="ウェルケア温泉" className="w-[270px] h-[65px]" />
          </h1>
      </div>
      <nav className="flex items-center py-2">
        <div className="flex items-center gap-4">
          <a className="border border-white text-white h-[40px] px-[30px] text-[14px] leading-[40px] cursor-pointer">
            <span className=" font-medium tracking-[0.11em] leading-[40px]"> お問い合わせ</span>
          </a>
          <a 
            className="bg-primary p-[0px_24px] h-[40px] flex items-center cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="flex flex-col gap-[5px] justify-center">
              <span className="block w-[50px] h-[1.5px] bg-white"></span>
              <span className="block w-[40px] h-[1.5px] bg-white"></span>
              <span className="block w-[30px] h-[1.5px] bg-white"></span>
            </div>
          </a>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={`fixed inset-0 bg-primary z-50 flex items-center justify-center transition-all duration-300 ease-in-out ${menuAnimation ? 'bg-opacity-95 opacity-100' : 'bg-opacity-0 opacity-0'}`}>
          <div className="relative w-full h-full">
            <button 
              className="absolute top-[40px] right-[50px] p-4 cursor-pointer"
              onClick={toggleMenu}
            >
              <div className="relative w-8 h-8">
                <span className="absolute top-1/2 left-0 w-8 h-[2px] bg-white transform -rotate-45"></span>
                <span className="absolute top-1/2 left-0 w-8 h-[2px] bg-white transform rotate-45"></span>
              </div>
            </button>
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="text-center">
                <ul className={`flex flex-col gap-8 transition-all duration-500 ease-out ${menuAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <li className="transition-all duration-300 delay-100">
                    <a className=" text-3xl font-medium  ">TOP</a>
                  </li>
                  <li className="transition-all duration-300 delay-200">
                    <a className=" text-3xl font-medium  ">施設案内</a>
                  </li>
                  <li className="transition-all duration-300 delay-300">
                    <a className=" text-3xl font-medium  ">アクセス</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header 
