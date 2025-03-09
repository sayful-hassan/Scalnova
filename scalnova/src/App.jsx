import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import NavBar from './components/Navbar/NavBar'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import Careers from './components/Careers/Careers'

function App() {
  return (
    <Router>
     <div className="app">
      <NavBar/>
       <Routes>
       <Route path="/" element={<><Hero /><WhatWeDo /></>} />
       <Route path="/about" element={<About />} />
       <Route path="/services" element={<Services />} />
       <Route path="/works" element={<Works />} />
       <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
     </div>
    </Router>
  )
}

export default App