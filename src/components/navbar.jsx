import React from 'react'

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
      <a className="navbar-brand fw-bold   " href="#">
        T.Mobiles{" "}
      </a>
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
          <a className="nav-link  " aria-current="page" href="#title">
            Home
          </a>
          <a className="nav-link   " href="#services">
            Service
          </a>
          <a className="nav-link   " href="#features">
            Feature
          </a>
          <a className="nav-link   " href="#pricing">
            Price
          </a>
          <a className="nav-link   " href="#FAQ">
            FAQ
          </a>
          <li className="nav-item dropdown     ">
            <a
              className="nav-link text-dark dropdown-toggle me-5 "
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              role="button"
            >
              Pages
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item fw-bold nav-link text-dark"
                  href="#"
                >
                  Generic
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item fw-bold nav-link text-dark"
                  href="#"
                >
                  Elements
                </a>
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
