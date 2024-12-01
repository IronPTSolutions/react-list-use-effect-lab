import { Link } from 'react-router-dom';
import logo from '../../../assets/react.svg';

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="me-1" alt="React LAB" width="23" height="23" />
          React Use Effect LAB
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;