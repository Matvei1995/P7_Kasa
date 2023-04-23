import './Navbar.scss';
import logo from '../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="nav-header">
      <div className="navbar__logo">
        <NavLink to="/">
          <img src={logo} alt="Voici le logo de l'entreprise" />
        </NavLink>
      </div>
      <div className="nav-header_to-home_to-about">
        <NavLink to="/" className="nav-header_to-home">
          Accueil
        </NavLink>
        <NavLink to="/About" className="nav-header_to-about">
          A propos
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
