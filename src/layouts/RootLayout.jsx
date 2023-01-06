import { Outlet,NavLink } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
export default function RootLayout() {
  return (
    <div className='root-layout'>
      <header>
        <nav>
          <h1>Menu</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='contact'>Contact</NavLink>
          <NavLink to='help'>Help</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='careers'>Careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
