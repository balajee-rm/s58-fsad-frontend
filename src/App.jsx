import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {

  return (
      <div className='container'>
         <Header />
         <Content />
         <Footer />
      </div>
  )

}

export default App
