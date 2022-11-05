import React from 'react'
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-white sticky-top ">
    <div className="container-fluid">
      <img
        className="img-fluid  m-image offset-1 "
        src="./smartphone-call.png"
        alt=""
        width="3%"
      />{" "}
      <Link className="navbar-brand fw-bold   " to={"#"}>
        T.Mobiles{" "}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav  ms-auto mx-5 fw-bold  ">
          <Link className="nav-link  " aria-current="page" to={"/"}>
            Home
          </Link>
          <Link className="nav-link   " to={"/Service"}>
            Service
          </Link>
          <Link className="nav-link   " to={"/Feature"}>
            Feature
          </Link>
          <Link className="nav-link   " to={"/Pricing"}>
            Price
          </Link>
          <Link className="nav-link   " to={"/Faq"}>
            FAQ
          </Link>
          <li className="nav-item dropdown  ">
            <Link
              className="nav-link text-dark dropdown-toggle me-5 "
              to={"#"}
              data-bs-toggle="dropdown"
              aria-expanded="false"
              role="button"
            >
              Pages
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item fw-bold nav-link text-dark"
                  to={"#"}
                >
                  Generic
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item fw-bold nav-link text-dark"
                  to={"#"}
                >
                  Elements
                </Link>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;
