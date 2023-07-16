import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#000000" };
  }
};

const Menu = ({ history }) => (
  // <div>
  //   <ul className="nav nav-tabs bg-dark">
  //     <li className="nav-item">
  //       <Link style={currentTab(history, "/")} className="nav-link" to="/">
  //         Home
  //       </Link>
  //     </li>
  //     <li className="nav-item">
  //       <Link
  //         style={currentTab(history, "/cart")}
  //         className="nav-link"
  //         to="/cart"
  //       >
  //         Cart
  //       </Link>
  //     </li>
  //     {isAuthenticated() && isAuthenticated().user.role === 0 && (
  //       <li className="nav-item">
  //         <Link
  //           style={currentTab(history, "/user/dashboard")}
  //           className="nav-link"
  //           to="/user/dashboard"
  //         >
  //           U. Dashboard
  //         </Link>
  //       </li>
  //     )}
  //     {isAuthenticated() && isAuthenticated().user.role === 1 && (
  //       <li className="nav-item">
  //         <Link
  //           style={currentTab(history, "/admin/dashboard")}
  //           className="nav-link"
  //           to="/admin/dashboard"
  //         >
  //           A. Dashboard
  //         </Link>
  //       </li>
  //     )}
  //     {!isAuthenticated() && (
  //       <Fragment>
  //         <li className="nav-item">
  //           <Link
  //             style={currentTab(history, "/signup")}
  //             className="nav-link"
  //             to="/signup"
  //           >
  //             Signup
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link
  //             style={currentTab(history, "/signin")}
  //             className="nav-link"
  //             to="/signin"
  //           >
  //             Sign In
  //           </Link>
  //         </li>
  //       </Fragment>
  //     )}
  //     {isAuthenticated() && (
  //       <li className="nav-item">
  //         <span
  //           className="nav-link text-warning"
  //           onClick={() => {
  //             signout(() => {
  //               history.push("/");
  //             });
  //           }}
  //         >
  //           Signout
  //         </span>
  //       </li>
  //     )}
  //   </ul>
  // </div>


  <nav className="navbar navbar-expand-lg sticky-top menu">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">asTroid</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
        </li>
        <li className="nav-item mx-2">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          Cart
        </Link>
        </li>
        {isAuthenticated() && isAuthenticated().user.role === 0 && (
        <li className="nav-item mx-2">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            U. Dashboard
          </Link>
        </li>
      )}
      {isAuthenticated() && isAuthenticated().user.role === 1 && (
        <li className="nav-item mx-2">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            A. Dashboard
          </Link>
        </li>
      )}
      {!isAuthenticated() && (
        <Fragment>
          <li className="nav-item mx-2">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link"
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link"
              to="/signin"
            >
              Sign In
            </Link>
          </li>
        </Fragment>
      )}
      {isAuthenticated() && (
        <li className="nav-item mx-2">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
      </ul>
    </div>
  </div>
</nav>
);

export default withRouter(Menu);
