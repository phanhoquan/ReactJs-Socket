import React, { useState, useRef } from "react";
import { loginFrom } from "../service/services";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import httpService from "../service/httpServices";
import { validator } from "../validate";

const LoginForm = () => {
  const useRefEmail = useRef("");
  const useRefPassword = useRef("");
  const [isRedirect, setIsRedirect] = useState(false);
  const [errorMess, setErrorMess] = useState([]);

  const rules = {
    email: ["required"],
    password: ["required"]
  };
  const [isLoading, setIsLoading] = useState(false);
  const handleLoginForm = async () => {
    let validation: {
      email?: string,
      password?: string
    };
    const objSubmit = {
      email: useRefEmail.current ? useRefEmail.current.value : "",
      password: useRefPassword.current ? useRefPassword.current.value : ""
    };
    validation = validator(objSubmit, rules);
    if (Object.keys(validation).length > 0) {
      setErrorMess(validation);
      return;
    }
    setErrorMess([]);
    try {
      await loginFrom(objSubmit).then(response => {
        setIsLoading(true);
        if (response.status === 200) {
          if (response.data.token) {
            localStorage.setItem("tokenAPI", response.data.token);
            httpService.setAccessToken(response.data.token);
            localStorage.setItem(
              "UserInfo",
              JSON.stringify(response.data.user)
            );
            setIsLoading(false);
          }
          setIsRedirect(true);
        } else {
          setIsLoading(false);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      {isRedirect && (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )}
      {isLoading && (
        <div className="isLoadingOvl">
          <div className="isload">
            <div className="spinner-border text-warning"></div>
          </div>
        </div>
      )}
      <div className="container login-container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body">
                <h5 className="card-title text-center">Login Form</h5>
                <div className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      ref={useRefEmail}
                    />
                    {errorMess && (
                      <p className="text-danger">{errorMess.email}</p>
                    )}
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <hr />
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      ref={useRefPassword}
                    />
                    {errorMess && (
                      <p className="text-danger">{errorMess.password}</p>
                    )}
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="button"
                    onClick={() => handleLoginForm()}
                  >
                    Login
                  </button>
                  <div className="text-center mt-4">
                    <Link to="/register">Go to page register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
