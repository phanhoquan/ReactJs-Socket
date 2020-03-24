import React, { useState } from "react";
import { registerFrom } from "../service/services";
import { Link } from "react-router-dom";
import { validator } from "../validate";

const RegisterForm = () => {
  const [dataBody, setDataBody] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [statusRegister, setStatusRegister] = useState({
    status: false,
    mes: ""
  });
  const [errorMess, setErrorMess] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeInput = (value, name) => {
    setDataBody({
      ...dataBody,
      [name]: value
    });
  };
  const rules = {
    name: ["required"],
    email: ["required"],
    password: ["required"],
    confirmPassword: ["required"]
  };
  const registerForm = async () => {
    let validation: {
      name?: string,
      email?: string,
      password?: string
    };
    const objSubmit = {
      name: dataBody.name,
      email: dataBody.email,
      password: dataBody.password
    };
    const objValidate = {
      name: dataBody.name,
      email: dataBody.email,
      password: dataBody.password,
      confirmPassword: dataBody.confirmPassword
    };
    validation = validator(objValidate, rules);
    if (Object.keys(validation).length > 0) {
      setErrorMess(validation);
      return;
    }
    if (dataBody.password !== dataBody.confirmPassword) {
      setErrorMess({
        ...errorMess,
        confirmPassword: "Password is inconsistent"
      });
      return;
    }
    try {
      await registerFrom(objSubmit)
        .then(response => {
          setIsLoading(true);
          if (response.status === 200) {
            setIsLoading(false);
            setStatusRegister({
              ...statusRegister,
              status: true,
              mes: "Register Success"
            });
            setErrorMess({
              ...errorMess,
              password: "",
              email: "",
              name: "",
              confirmPassword: ""
            });
          } else {
            setStatusRegister({
              ...statusRegister,
              status: false,
              mes: "Register Fail"
            });
            setIsLoading(false);
          }
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err.response);
        });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const handleRegister = () => {
    registerForm();
  };

  return (
    <div className="login">
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
                <h5 className="card-title text-center">Register Form</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputUserame"
                      className="form-control"
                      placeholder="Username"
                      autoFocus
                      value={dataBody.name}
                      onChange={e => handleChangeInput(e.target.value, "name")}
                    />
                    {errorMess && (
                      <p className="text-danger">{errorMess.name}</p>
                    )}
                    <label htmlFor="inputUserame">Username</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      value={dataBody.email}
                      onChange={e => handleChangeInput(e.target.value, "email")}
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
                      value={dataBody.password}
                      onChange={e =>
                        handleChangeInput(e.target.value, "password")
                      }
                    />
                    {errorMess && (
                      <p className="text-danger">{errorMess.password}</p>
                    )}
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputConfirmPassword"
                      className="form-control"
                      placeholder="Password"
                      value={dataBody.confirmPassword}
                      onChange={e =>
                        handleChangeInput(e.target.value, "confirmPassword")
                      }
                    />
                    <label htmlFor="inputConfirmPassword">
                      Confirm password
                    </label>
                    {errorMess && (
                      <p className="text-danger">{errorMess.confirmPassword}</p>
                    )}
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="button"
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                  <Link className="d-block text-center mt-2 small" to={"login"}>
                    Sign In
                  </Link>
                  {statusRegister.mes && (
                    <div className="alert alert-success mt-4">
                      <div className="d-flex align-items-baseline">
                        {statusRegister.mes}
                        {statusRegister.status && (
                          <Link
                            className="d-block text-center mt-2 small ml-2"
                            to={"login"}
                          >
                            Go to Login
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
