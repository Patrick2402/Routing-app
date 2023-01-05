import { useState } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import './App.css'

// Paths
import Home from './pages/Home';
import Contact from './pages/Contact';
//Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import Faq from './pages/help/Faq';
import Vmware from './pages/help/Vmware';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />}/>
        <Route path='vmware'element={<Vmware />}/>
      </Route>
    </Route>
  )
)

function App() {

  return (
  <RouterProvider router={router} />
  )
}

export default App
