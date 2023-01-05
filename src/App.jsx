import { useState } from 'react'
import { Route, Routes, BrowserRouter, Link, NavLink } from 'react-router-dom';
import './App.css'

// Paths
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Navbar from './Pages/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
