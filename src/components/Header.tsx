function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[108px] w-full flex justify-between items-center px-[60px]">
      <div className="flex items-center px-4">
        <h1 className=" font-medium text-[32px] text-white tracking-[0.05em]">ウェルケア温泉ダミー</h1>
      </div>
      <nav className="flex items-center py-2">
        <div className="flex items-center gap-4">
          <a className="border border-white text-white h-[40px] px-[30px] text-[14px] leading-[40px] cursor-pointer">
            <span className=" font-medium tracking-[0.11em] leading-[40px]"> お問い合わせ</span>
          </a>
          <a className="bg-primary p-[0px_24px] h-[40px] flex items-center cursor-pointer">
            <div className="flex flex-col gap-[6px] justify-center">
              <span className="block w-[50px] h-[1px] bg-white"></span>
              <span className="block w-[50px] h-[1px] bg-white"></span>
              <span className="block w-[50px] h-[1px] bg-white"></span>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header 
