// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FirstView from './components/FirstView'

function App() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <Header />
      <FirstView />
    </div>
  )
}

export default App
