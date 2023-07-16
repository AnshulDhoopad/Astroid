import React from "react";
import Menu from "./menu";

const Base = ({
  title = "My Title",
  className = "text-dark p-4",
  children,
}) => {
  return (
    <div>
      <Menu />

      <div className="container-fluid">
        {/* <div className="jumbotron text-dark text-center">
          <h3 className="display-4 typewriter">{title}</h3>
        </div> */}
        <div className={className}>{children}</div>
      </div>

      <footer className="page-footer font-small cyan darken-3 md-auto py-3">
        <div class="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a href="/" style={{textDecoration: "none", color:"white"}}> asTroid.com</a>
        </div>
      </footer>
    </div>
  );
};
export default Base;
