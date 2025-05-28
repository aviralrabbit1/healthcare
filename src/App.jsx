import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardMainContent from './components/Dashboard/DashboardMainContent'

function App() {

  return (
    <div className="app">
      <Sidebar />
      <main>            
        <Header />
        <DashboardMainContent />
      </main>
    </div>
  )
}

export default App
