import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top py-3">
        <div className="container">
          <a href="#" className="navbar-brand text-uppercase font-weight-bold">
            Transparent Nav
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler navbar-toggler-right"
          >
            <i className="fa fa-bars"></i>
          </button>

          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a
                  href="#"
                  className="nav-link text-uppercase font-weight-bold"
                >
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-uppercase font-weight-bold"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-uppercase font-weight-bold"
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-uppercase font-weight-bold"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-uppercase font-weight-bold"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
