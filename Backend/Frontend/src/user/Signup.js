import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpFormRight = () => {
    return (
      <div className="display-4 logintoaccount">
        <div>
          <div>Welcome New User,</div>
          <div>If you already have an account</div>
          <div>Please Sign in</div>
          <div>Click the link below</div>
          <Link to="/signin">
            <button className="btn signin-button">Log In</button>
          </Link>
        </div>
      </div>
    );
  };

  const signUpFormLeft = () => {
    return (
      // <div className="row">
      //   <div className="col-md-6 offset-sm-3 text-left">
      //     <form>
      //       <div className="form-group">
      //         <label className="text-light">Name</label>
      //         <input
      //           className="form-control"
      //           onChange={handleChange("name")}
      //           type="text"
      //           value={name}
      //         />
      //       </div>
      //       <div className="form-group">
      //         <label className="text-light">Email</label>
      //         <input
      //           className="form-control"
      //           onChange={handleChange("email")}
      //           type="email"
      //           value={email}
      //         />
      //       </div>

      //       <div className="form-group">
      //         <label className="text-light">Password</label>
      //         <input
      //           onChange={handleChange("password")}
      //           className="form-control"
      //           type="password"
      //           value={password}
      //         />
      //       </div>
      //       <button onClick={onSubmit} className="btn btn-success btn-block">
      //         Submit
      //       </button>
      //     </form>
      //   </div>
      // </div>

      <div className="mb-3 mt-3">
        <div>
          <div className="signup">
            <div className="display-4 welcome">
              <div>Welcome to asTroid,</div>
              <div>Sign yourself Up</div>
            </div>
            <form className="fields">
              <div class="mb-3 name">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"></path>
                </svg>
                <input
                  type="text"
                  onChange={handleChange("name")}
                  value={name}
                  id="name"
                />
              </div>
              <div class="mb-3 email">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                </svg>
                <input
                  type="email"
                  onChange={handleChange("email")}
                  value={email}
                  id="email"
                />
              </div>
              <div className="mb-3 password">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
                </svg>
                <input
                  type="password"
                  id="password"
                  onChange={handleChange("password")}
                  value={password}
                />
              </div>
            </form>
            <button
              onClick={onSubmit}
              type="submit"
              className="btn signin-button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sign up page" description="A page for user to sign up!">
      <div className="onlysignup">
        {successMessage()}
        {errorMessage()}
        <div className="row">
          <div className="col-5">{signUpFormLeft()}</div>
          <div className="col-7">{signUpFormRight()}</div>
        </div>
      </div>

      {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
    </Base>
  );
};

export default Signup;
