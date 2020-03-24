import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright © Your Website 2019</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons d-flex">
                <li className="list-inline-item">
                  <Link to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">Terms of Use</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
