import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className=" section">
      <div className="container">
        <div className="subContainer">
          <div className="contentOne">
            <div className="mainContent">
              <div className="logoFooter">
                <Logo />
              </div>
              <div>
                <p>&copy; Copyright 2023. All Rights Reserved by DevUI.</p>
              </div>
            </div>
          </div>
          <div className="contentTwo">
            <h3 className="heading">Company</h3>
            <ul>
              <li>
                <Link className="link" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div className="contentTwo">
            <h3 className="heading">Support</h3>
            <ul>
              <li className="mb-4">
                <Link className="link" to="/">
                  Account
                </Link>
              </li>
              <li className="mb-4">
                <Link className="link" to="/">
                  Help
                </Link>
              </li>
              <li className="mb-4">
                <Link className="link" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="contentTwo">
            <h3 className="heading">Legals</h3>
            <ul>
              <li className="mb-4">
                <Link className="link" to="/">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-4">
                <Link className="link" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
