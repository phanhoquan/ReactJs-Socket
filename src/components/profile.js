import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProfile, updateProfile } from "../service/services";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

const PageProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState({
    email: "",
    name: "",
    skills: "",
    avatar: "",
    youtube: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    facebook: "",
    bio: "",
    company: "",
    githubusername: "",
    location: "",
    status: "",
    website: ""
  });
  const handleGetProfile = async idUser => {
    await getProfile(idUser).then(response => {
      if (response.status === 200) {
        setIsLoading(false);
        const {
          user,
          social,
          bio,
          company,
          githubusername,
          location,
          status,
          website,
          skills
        } = response.data;
        setUserProfile({
          ...userProfile,
          email: user.email,
          name: user.name,
          avatar: user.avatar,
          youtube: social.youtube,
          twitter: social.twitter,
          instagram: social.instagram,
          linkedin: social.linkedin,
          facebook: social.facebook,
          bio,
          company,
          skills,
          githubusername,
          location: location || "",
          status,
          website
        });
      } else {
        if (localStorage.UserInfo) {
          const { email, name, avatar } = JSON.parse(localStorage.UserInfo);
          setUserProfile({
            ...userProfile,
            email,
            name,
            avatar
          });
        }
      }
      return response;
    });
  };
  useEffect(() => {
    handleGetProfile(JSON.parse(localStorage.UserInfo)._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleChangeFile = e => {
  // if (e.target.validity.valid && e.target.files[0]) {
  //   setUserProfile({
  //     ...userProfile,
  //     userProfile: (window.URL || window.webkitURL).createObjectURL(
  //       e.target.files[0]
  //     )
  //   });
  // }
  // };

  const handleChangeInput = (e, name) => {
    const { value } = e.target;
    switch (name) {
      default:
        setUserProfile({
          ...userProfile,
          [name]: value
        });
        break;
    }
  };
  const handleUpdateProfile = async () => {
    await updateProfile(userProfile).then(res => {
      if (res.status === 200) {
        setIsLoading(true);
        handleGetProfile(JSON.parse(localStorage.UserInfo)._id);
      } else {
        console.log("fail");
      }
    });
  };

  return (
    <>
      <Header />
      <div>
        {isLoading ? (
          <div className="isLoading">
            <div className="spinner-border text-warning"></div>
          </div>
        ) : (
          <div className="container">
            <div className="view-account">
              <section className="module">
                <div className="module-inner">
                  <div className="side-bar">
                    <div className="user-info">
                      <div className="avatar">
                        <img
                          className="img-profile img-thumbnail img-circle img-responsive center-block"
                          src={userProfile && userProfile.avatar}
                          alt=""
                        />
                        {/* <input
                          type="file"
                          className="file-uploader pull-left"
                          onChange={e => handleChangeFile(e)}
                          accept="image/jpg, image/jpeg, image/png"
                        /> */}
                      </div>
                      <ul className="meta list list-unstyled">
                        <li className="name">
                          <label className="d-block">
                            {userProfile && userProfile.name}
                          </label>
                          <label className="label badge badge-info">
                            {userProfile && userProfile.status}
                          </label>
                        </li>
                        <li className="email">
                          <Link to="#">{userProfile && userProfile.email}</Link>
                        </li>
                        <li className="activity">
                          Last logged in: Today at{" "}
                          {new Date().getHours() +
                            "h" +
                            new Date().getMinutes() +
                            "p"}
                        </li>
                      </ul>
                    </div>
                    <nav className="side-menu">
                      <ul className="nav">
                        <li className="active">
                          <Link to="#">
                            <span className="fa fa-user" /> Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="fa fa-cog" /> Settings
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="fa fa-credit-card" /> Billing
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="fa fa-envelope" /> Messages
                          </Link>
                        </li>
                        <li>
                          <Link to="user-drive.html">
                            <span className="fa fa-th" /> Drive
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="fa fa-clock-o" /> Reminders
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="content-panel">
                    <h2 className="title">
                      Profile
                      <span className="pro-label label badge badge-warning text-white">
                        PRO
                      </span>
                    </h2>
                    <form className="form-horizontal">
                      <fieldset className="fieldset">
                        <h3 className="fieldset-title">Personal Info</h3>
                        <div className="form-group">
                          <label className="col-md-2 col-sm-3 col-xs-12 control-label">
                            Name
                          </label>
                          <div className="col-md-10 col-sm-9 col-xs-12">
                            <input
                              type="text"
                              className="form-control"
                              value={userProfile && userProfile.name}
                              onChange={e => handleChangeInput(e, "name")}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 col-sm-3 col-xs-12 control-label">
                            Status
                          </label>
                          <div className="col-md-10 col-sm-9 col-xs-12">
                            <input
                              type="text"
                              className="form-control"
                              value={userProfile && userProfile.status}
                              onChange={e => handleChangeInput(e, "status")}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 col-sm-3 col-xs-12 control-label">
                            Skills
                          </label>
                          <div className="col-md-10 col-sm-9 col-xs-12">
                            <input
                              type="text"
                              className="form-control"
                              value={userProfile && userProfile.skills}
                              onChange={e => handleChangeInput(e, "skills")}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 col-sm-3 col-xs-12 control-label">
                            Company
                          </label>
                          <div className="col-md-10 col-sm-9 col-xs-12">
                            <input
                              type="text"
                              className="form-control"
                              value={userProfile && userProfile.company}
                              onChange={e => handleChangeInput(e, "company")}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 col-sm-3 col-xs-12 control-label">
                            Website
                          </label>
                          <div className="col-md-10 col-sm-9 col-xs-12">
                            <input
                              type="text"
                              className="form-control"
                              value={userProfile && userProfile.website}
                              onChange={e => handleChangeInput(e, "website")}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2 col-sm-3 col-xs-12 control-label">
                            Github
                          </label>
                          <div className="col-md-10 col-sm-9 col-xs-12">
                            <input
                              type="text"
                              className="form-control"
                              value={userProfile && userProfile.githubusername}
                              onChange={e =>
                                handleChangeInput(e, "githubusername")
                              }
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="col-md-2 col-sm-3 col-xs-12 control-label">
                            Bio
                          </label>
                          <div className="col-md-10 col-sm-9 col-xs-12">
                            <input
                              type="text"
                              className="form-control"
                              value={userProfile && userProfile.bio}
                              onChange={e => handleChangeInput(e, "bio")}
                            />
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="fieldset">
                        <h3 className="fieldset-title">Contact Info</h3>
                        <div className="form-group">
                          <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                            Email
                          </label>
                          <div className="col-md-10 col-sm-9 col-xs-12">
                            <input
                              type="email"
                              className="form-control"
                              value={userProfile && userProfile.email}
                              onChange={e => handleChangeInput(e, "email")}
                              readOnly
                            />
                            <p className="help-block">This is the email </p>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                            Location
                          </label>
                          <div className="col-md-10 col-sm-9 col-xs-12">
                            <input
                              type="email"
                              className="form-control"
                              value={userProfile && userProfile.location}
                              onChange={e => handleChangeInput(e, "location")}
                            />
                            <p className="help-block">This is the email </p>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset className="fieldset">
                        <h3 className="fieldset-title">Social Info</h3>
                        <div className="form-group">
                          <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                            Youtube
                          </label>
                          <div className="col-md-10 col-sm-9 col-xs-12">
                            <input
                              type="email"
                              className="form-control"
                              value={userProfile && userProfile.youtube}
                              onChange={e => handleChangeInput(e, "youtube")}
                            />
                            <p className="help-block">
                              eg. https://www.youtube.com/id
                            </p>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                            Twitter
                          </label>
                          <div className="col-md-10 col-sm-9 col-xs-12">
                            <input
                              type="text"
                              className="form-control"
                              value={userProfile && userProfile.twitter}
                              onChange={e => handleChangeInput(e, "twitter")}
                            />
                            <p className="help-block">
                              eg. https://www.twitter.com/id
                            </p>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                            Instagram
                          </label>
                          <div className="col-md-10 col-sm-9 col-xs-12">
                            <input
                              type="url"
                              className="form-control"
                              value={userProfile && userProfile.instagram}
                              onChange={e => handleChangeInput(e, "instagram")}
                            />
                            <p className="help-block">
                              eg. https://www.instagram.com/id
                            </p>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                            Linkedin
                          </label>
                          <div className="col-md-10 col-sm-9 col-xs-12">
                            <input
                              type="url"
                              className="form-control"
                              value={userProfile && userProfile.linkedin}
                              onChange={e => handleChangeInput(e, "linkedin")}
                            />
                            <p className="help-block">
                              eg. https://www.linkedin.com/id
                            </p>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-2  col-sm-3 col-xs-12 control-label">
                            Facebook
                          </label>
                          <div className="col-md-10 col-sm-9 col-xs-12">
                            <input
                              type="url"
                              className="form-control"
                              value={userProfile && userProfile.facebook}
                              onChange={e => handleChangeInput(e, "facebook")}
                            />
                            <p className="help-block">
                              eg. https://www.facebook.com/id
                            </p>
                          </div>
                        </div>
                      </fieldset>
                      <hr />
                      <div className="form-group">
                        <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                          <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleUpdateProfile}
                          >
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};
export default PageProfile;
