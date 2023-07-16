import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card text-dark border-0 adminnav">
        <h4
          className="card-header border-0 text-center pt-4"
          style={{ backgroundColor: "#e0e0e0" }}
        >
          Admin Navigation
        </h4>
        <ul className="list-group border-0 adminpower">
          <li className="list-group-item border-0 ">
            <Link to="/admin/create/category" className="nav-link text-success">
              Create Categories
            </Link>
          </li>
          <li className="list-group-item border-0">
            <Link to="/admin/categories" className="nav-link text-success">
              Manage Categories
            </Link>
          </li>
          <li className="list-group-item border-0">
            <Link to="/admin/create/product" className="nav-link text-success">
              Create Product
            </Link>
          </li>
          <li className="list-group-item border-0">
            <Link to="/admin/products" className="nav-link text-success">
              Manage Products
            </Link>
          </li>
          {/* <li className="list-group-item border-0">
            <Link to="/admin/orders" className="nav-link text-success">
              Manage Orders
            </Link>
          </li> */}
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4 text-dark border-0 glasseffect">
        <h4 className="card-header border-0 text-center" style={{ backgroundColor: "transparent" }}>Admin Information</h4>
        <ul className="list-group border-0">
          <li className="list-group-item border-0">
            <span className="mr-2">Name:</span> {name}
          </li>
          <li className="list-group-item border-0">
            <span className="mr-2">Email:</span> {email}
          </li>

          <li className="list-group-item border-0">
            <span className="text-danger">Admin</span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base title="Welcome to admin area">
      <div className="admindashboard">
        <div className="jumbotron text-dark text-center">
          <h3 className="display-4">Welcome to Admin area</h3>
        </div>
        <div className="row">
          <div className="col-3">{adminLeftSide()}</div>
          <div className="col-9">{adminRightSide()}</div>
        </div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
