import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="brand">
          Tim<span className="dot">.</span>
        </NavLink>
        <nav className="nav">
          <NavLink to="/" end>Über</NavLink>
          <NavLink to="/projekte">Projekte</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </nav>
      </div>
    </header>
  );
}
