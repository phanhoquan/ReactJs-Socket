import React, { useState } from "react";
import { registerPostFrom } from "../service/services";
import Header from "./Layout/Header";
import { validator } from "../validate";

type Props = {
  history: {
    push: Function
  }
};

const FormAddPost = ({ history }: Props) => {
  // console.log(history.push("/"), "history");
  const [dataBody, setDataBody] = useState({
    name: "",
    image: "",
    text: ""
  });
  const [statusRegisterPost, setStatusRegisterPost] = useState({
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
    image: ["required"],
    text: ["required"]
  };
  const FormAddPost = async () => {
    let validation: {
      name?: string,
      image?: string,
      text?: string
    };
    const objSubmit = {
      name: dataBody.name,
      image: dataBody.image,
      text: dataBody.text
    };
    const objValidate = {
      name: dataBody.name,
      image: dataBody.image,
      text: dataBody.text
    };
    validation = validator(objValidate, rules);
    if (Object.keys(validation).length > 0) {
      setErrorMess(validation);
      return;
    }
    try {
      await registerPostFrom(objSubmit)
        .then(response => {
          setIsLoading(true);
          if (response.status === 200) {
            setIsLoading(false);
            setStatusRegisterPost({
              ...statusRegisterPost,
              status: true,
              mes: "Register Success"
            });
            setErrorMess({
              ...errorMess,
              text: "",
              image: "",
              name: ""
            });
            history.push("/post");
          } else {
            setStatusRegisterPost({
              ...statusRegisterPost,
              status: false,
              mes: "Add Post Fail"
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
    FormAddPost();
  };

  return (
    <>
      <Header />
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
                  <h5 className="card-title text-center"> Form Add New Post</h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="inputUserame"
                        className="form-control"
                        placeholder="Title Post"
                        autoFocus
                        value={dataBody.name}
                        onChange={e =>
                          handleChangeInput(e.target.value, "name")
                        }
                      />
                      {errorMess && (
                        <p className="text-danger">{errorMess.name}</p>
                      )}
                      <label htmlFor="inputUserame">Title Post</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Url Images"
                        value={dataBody.image}
                        onChange={e =>
                          handleChangeInput(e.target.value, "image")
                        }
                      />
                      {errorMess && (
                        <p className="text-danger">{errorMess.image}</p>
                      )}
                      <label htmlFor="inputEmail">Url Images</label>
                    </div>
                    <hr />
                    <div className="form-label-group">
                      <textarea
                        id="inputtext"
                        className="form-control"
                        placeholder="Text"
                        value={dataBody.text}
                        onChange={e =>
                          handleChangeInput(e.target.value, "text")
                        }
                      />
                      {errorMess && (
                        <p className="text-danger">{errorMess.text}</p>
                      )}
                    </div>
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="button"
                      onClick={handleRegister}
                    >
                      Add Post
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormAddPost;
