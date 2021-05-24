import React from "react";
import "../assets/css/Header.css";
import { ReactComponent as Favicon } from "../assets/svg/favicon.svg";
import { ReactComponent as Seacrh } from "../assets/svg/icon-awesome-search.svg";
import { ReactComponent as Bar } from "../assets/svg/menu-left-alt.svg";
import { ReactComponent as Bell } from "../assets/svg/feather-bell.svg";
import { ReactComponent as Message } from "../assets/svg/message-circle.svg";
import { ReactComponent as Logo } from "../assets/svg/radial_code_logo.svg";
import EnglishFlag from "../assets/image/united-kingdom.png";
import JeetBeniwal from "../assets/image/jeet-beniwal.jpg";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <a className="favicon">
          <Favicon className="radial-favicon" />
        </a>
      </div>
      <div>
        <div>
          <a className="item-bar">
            <Bar />
          </a>

          <a className="logo">
            <Logo className="radial-logo" />
          </a>
        </div>
        >
        <ul className="d-flex nav-user-menu list-unstyled">
          <li className="nav-item">
            <div className="top-nav-search">
              <form>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Seacrh Here"
                ></input>
                <button className="search-btn">
                  <Seacrh />
                </button>
              </form>
            </div>
          </li>
          <li className="dropdown nav-item has-arrow position-relative">
            <a className=" nav-link language-nav d-block">
              <img src={EnglishFlag} className="eng-flag" />
              <span class="down-arrow">English</span>
            </a>
          </li>
          <li className="dropdown nav-item position-relative">
            <a className=" nav-link nav-notification">
              <span>
                <Bell />
              </span>
              <span className="badge badge-pill">3</span>
            </a>
          </li>
          <li className="nav-item position-relative">
            <a className="nav-link nav-notification">
              <span>
                <Message />
              </span>
              <span className="badge badge-pill">3</span>
            </a>
          </li>

          <li className="nav-item dropdown has-arrow main-drop show">
            <a className="dropdown-toggle nav-link position-relative">
              <span className="user-img">
                <img className="current-img" src={JeetBeniwal} />
                <span className="status online"></span>
              </span>
              <span>Admin</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
