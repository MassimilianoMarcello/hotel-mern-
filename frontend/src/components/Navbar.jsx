import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Aggiungi il tuo CSS personalizzato per la navbar

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><NavLink to="/" className="nav-link" end>Home</NavLink></li>
        <li><NavLink to="/add" className="nav-link">Add Hotel</NavLink></li>
        <li><NavLink to="/register" className="nav-link">Register</NavLink></li>
        <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
        <li><NavLink to="/logout" className="nav-link">Logout</NavLink></li>
      </ul>
    </nav>
  );
};


