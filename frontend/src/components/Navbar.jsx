import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Aggiungi il tuo CSS personalizzato per la navbar

export const Navbar = () => {
  const isLoggedIn = sessionStorage.getItem('_id'); // Verifica se l'utente è loggato

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {/* Link per la Home */}
        <li><NavLink to="/hotels" className="nav-link" end>Home</NavLink></li>

        {/* Link per aggiungere un hotel */}
        {isLoggedIn && (
          <li><NavLink to="/add" className="nav-link">Add Hotel</NavLink></li>
        )}

        {/* Link per gli hotel dell'utente, visibile solo se l'utente è loggato */}
        {isLoggedIn && (
          <li><NavLink to="/user-hotels" className="nav-link">My Hotels</NavLink></li>
        )}

        {/* Link di registrazione e login, visibili solo se l'utente non è loggato */}
        {!isLoggedIn && (
          <>
            <li><NavLink to="/register" className="nav-link">Register</NavLink></li>
            <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
          </>
        )}

        {/* Link di logout, visibile solo se l'utente è loggato */}
        {isLoggedIn && (
          <li><NavLink to="/logout" className="nav-link">Logout</NavLink></li>
        )}
      </ul>
    </nav>
  );
};



