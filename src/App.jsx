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
import CareersLayout from './layouts/CareersLayout';
import Faq from './pages/help/Faq';
import Vmware from './pages/help/Vmware';
import NotFound from './pages/NotFound';
import Careers, { carrersLoader } from './pages/careers/Careers';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='contact' element={<Contact />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />}/>
        <Route path='vmware'element={<Vmware />}/>
      </Route>

      <Route path='careers' element={<CareersLayout />}>
        <Route 
         index
         element={<Careers />}
         loader={carrersLoader} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (
  <RouterProvider router={router} />
  )
}

export default App
