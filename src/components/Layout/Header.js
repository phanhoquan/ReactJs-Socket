import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Redirect } from "react-router-dom";
import icon from "../../img/icon.png";

const Header = () => {
  const [redirect, setRedirect] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    if (localStorage.UserInfo) {
      setUserInfo(JSON.parse(localStorage.UserInfo));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.UserInfo]);
  const handleLogOut = () => {
    localStorage.removeItem("tokenAPI");
    localStorage.removeItem("UserInfo");
    setRedirect(true);
  };
  return (
    <>
      {redirect && (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/">
            Demo Profiles
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse " id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto align-items-center d-flex">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="#services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="#portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="#about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="#team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="#contact">
                  Contact
                </Link>
              </li>

              <Dropdown>
                <Dropdown.Toggle
                  variant="warning text-white transparent d-flex align-items-center"
                  id="dropdown-basic"
                >
                  <img
                    className="img-fluid mr-2"
                    src={(userInfo && userInfo.avatar) || icon}
                    alt=""
                    width="20"
                    height="20"
                  />
                  {userInfo && userInfo.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as="button">
                    <Link className="text-dark" to="/profile">
                      PROFILE
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item as="button">
                    <Link className="text-dark" to="/register">
                      REGISTER USER
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item as="button">
                    <Link className="text-dark" to="/add-post">
                      ADD NEW POST
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleLogOut}>
                    LOGOUT
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
