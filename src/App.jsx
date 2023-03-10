import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import './App.css'

// Paths
import Home from './pages/Home';
import Contact, { contactAction } from './pages/Contact';
//Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout';
import Faq from './pages/help/Faq';
import Vmware from './pages/help/Vmware';
import NotFound from './pages/NotFound';
import Careers, { carrersLoader } from './pages/careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';
import CareersError from './pages/careers/CareersError';
import About from './pages/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='contact' element={<Contact />} action={contactAction} />
      <Route path='about' element={<About />}  />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='vmware' element={<Vmware />} />
      </Route>

      <Route path='careers' element={<CareersLayout />} errorElement={<CareersError />}>
        <Route
          index
          element={<Careers />}
          loader={carrersLoader}
     //     errorElement={<CareersError />} 
          />

        <Route
          path=':id'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
       //   errorElement={<CareersError />}
        />
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
