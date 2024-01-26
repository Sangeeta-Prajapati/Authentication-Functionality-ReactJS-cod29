// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header">
    <ul className="nav-items">
      <li className="nav-menu">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-menu">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
