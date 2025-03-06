import './App.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/Navbar/NavBar'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Hero />
      <WhatWeDo />
    </div>
  )
}

export default App