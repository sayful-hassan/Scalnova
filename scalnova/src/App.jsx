import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import NavBar from './components/Navbar/NavBar'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Hero />
      <WhatWeDo />
      <Footer />
    </div>
  )
}

export default App