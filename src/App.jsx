import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardMainContent from './components/Dashboard/DashboardMainContent'

function App() {
  console.log("in App")
  return (
    <>
      <Sidebar />
        <main>
          <header>
            <Header />
          </header>
          <DashboardMainContent />
        </main>
    </>
  )
}

export default App
