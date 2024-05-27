import './App.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

function App() {
  const [status, setStatus] = useState({})

  return (
    <>
      <div className='App'>
      <NavBar status={status} setStatus={setStatus} />
      <Banner />
      <Skills />
      <Projects />
      <Contact setStatus={setStatus} />
      <Footer />
      </div>
    </>
  )
}

export default App
