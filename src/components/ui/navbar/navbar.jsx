import { Link } from 'react-router-dom';
import logo from '../../../assets/react.svg';

function Navbar() {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img src={logo} className="me-1" alt="React LAB" width="23" height="23" />
          React Use Effect LAB
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;