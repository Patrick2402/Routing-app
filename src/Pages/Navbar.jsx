import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <header>
        <nav>
          <h1>Menu</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='contact'>Contact</NavLink>
        </nav>
      </header>
     );
}
 
export default Navbar;