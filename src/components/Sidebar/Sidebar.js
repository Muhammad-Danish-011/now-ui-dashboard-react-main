import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";

import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo-white.svg";

var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  const location = useLocation();

  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div className="sidebar" data-color={props.backgroundColor}>
      <div className="logo">
        <a
          href="https://www.xloopdigital.com/contact-us.html"
          className="simple-text logo-mini"
          target="_blank"
        ></a>
        <a
          href="https://www.xloopdigital.com/"
          className="simple-text logo-normal"
          target="blank"
        >
          XLOOP
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            if (prop.redirect) return null;
            return (
              <li
                className={
                  activeRoute(prop.layout + prop.path) +
                  (prop.pro ? " active active-pro" : "")
                }
                key={key}
              >
                <NavLink to={prop.layout + prop.path} className="nav-link">
                  <i className={"now-ui-icons " + prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
