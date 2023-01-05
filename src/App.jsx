import { useState } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import './App.css'

// Paths
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

function App() {

  return (
  <RouterProvider router={router} />
  )
}

export default App
