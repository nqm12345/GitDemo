import { NavLink, useNavigate } from "react-router-dom";



function Navbar() {


  const hanldRender = useNavigate();

  return (
    <div id="header" className="solid-header">
      <div className="logo">
        <div className="img_logo">
          <img src="../../public/images/0000242_Logos-Desktop-1.webp" alt="" />
        </div>
      </div>
      <nav>
      <ul>
      <li>
        <NavLink to="/" className="nav-link" >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink  to="/introduction" className="nav-link">
          Introduction
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      </li>
    </ul>
      </nav>
      <div className="icons">
        <div className="ti-search"></div>
        <div className="ti-shopping-cart"></div>
        <div onClick={() => hanldRender("/login")} className="ti-user"></div>
      </div>
    </div>
  );
}

export default Navbar;
