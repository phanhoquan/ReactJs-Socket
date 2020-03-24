import React from "react";
import { Link } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import imgPro1 from "../img/portfolio/01-thumbnail.jpg";
import imgPro2 from "../img/portfolio/02-thumbnail.jpg";
import imgPro3 from "../img/portfolio/03-thumbnail.jpg";
import imgPro4 from "../img/portfolio/04-thumbnail.jpg";
import imgPro5 from "../img/portfolio/05-thumbnail.jpg";
import imgPro6 from "../img/portfolio/06-thumbnail.jpg";
import imgabout1 from "../img/about/1.jpg";
import imgabout2 from "../img/about/2.jpg";
import imgabout3 from "../img/about/3.jpg";
import imgabout4 from "../img/about/4.jpg";
import imgTeam1 from "../img/team/1.jpg";
import imgTeam2 from "../img/team/2.jpg";
import imgTeam3 from "../img/team/3.jpg";

const HomePage = () => {
  return (
    <div>
      <Header />

      {/* Header */}
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To Our Studio!</div>
            <div className="intro-heading text-uppercase">
              It's Nice To Meet You
            </div>
            <Link
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              to="#services"
            >
              Tell Me More
            </Link>
          </div>
        </div>
      </header>
      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">E-Commerce</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-laptop fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">Responsive Design</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-lock fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">Web Security</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Grid */}
      <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 portfolio-item">
              <Link
                className="portfolio-link"
                data-toggle="modal"
                to="#portfolioModal1"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={imgPro1} alt="" />
              </Link>
              <div className="portfolio-caption">
                <h4>Threads</h4>
                <p className="text-muted">Illustration</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <Link
                className="portfolio-link"
                data-toggle="modal"
                to="#portfolioModal2"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={imgPro2} alt="" />
              </Link>
              <div className="portfolio-caption">
                <h4>Explore</h4>
                <p className="text-muted">Graphic Design</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <Link
                className="portfolio-link"
                data-toggle="modal"
                to="#portfolioModal3"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={imgPro3} alt="" />
              </Link>
              <div className="portfolio-caption">
                <h4>Finish</h4>
                <p className="text-muted">Identity</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <Link
                className="portfolio-link"
                data-toggle="modal"
                to="#portfolioModal4"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={imgPro4} alt="" />
              </Link>
              <div className="portfolio-caption">
                <h4>Lines</h4>
                <p className="text-muted">Branding</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <Link
                className="portfolio-link"
                data-toggle="modal"
                to="#portfolioModal5"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={imgPro5} alt="" />
              </Link>
              <div className="portfolio-caption">
                <h4>Southwest</h4>
                <p className="text-muted">Website Design</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <Link
                className="portfolio-link"
                data-toggle="modal"
                to="#portfolioModal6"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img className="img-fluid" src={imgPro6} alt="" />
              </Link>
              <div className="portfolio-caption">
                <h4>Window</h4>
                <p className="text-muted">Photography</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src={imgabout1}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2009-2011</h4>
                      <h4 className="subheading">Our Humble Beginnings</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                        temporibus qui quibusdam, recusandae sit vero unde, sed,
                        incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src={imgabout2}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>March 2011</h4>
                      <h4 className="subheading">An Agency is Born</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                        temporibus qui quibusdam, recusandae sit vero unde, sed,
                        incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src={imgabout3}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>December 2012</h4>
                      <h4 className="subheading">Transition to Full Service</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                        temporibus qui quibusdam, recusandae sit vero unde, sed,
                        incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src={imgabout4}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>July 2014</h4>
                      <h4 className="subheading">Phase Two Expansion</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                        temporibus qui quibusdam, recusandae sit vero unde, sed,
                        incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>
                      Be Part <br />
                      Of Our <br />
                      Story!
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Team */}
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                Our Amazing Team
              </h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={imgTeam1} alt="" />
                <h4>Kay Garland</h4>
                <p className="text-muted">Lead Designer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={imgTeam2} alt="" />
                <h4>Larry Parker</h4>
                <p className="text-muted">Lead Marketer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={imgTeam3} alt="" />
                <h4>Diana Pertersen</h4>
                <p className="text-muted">Lead Developer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" noValidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Your Name *"
                        required="required"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Your Email *"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Your Phone *"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Your Message *"
                        required="required"
                        data-validation-required-message="Please enter a message."
                        defaultValue={""}
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="col-lg-12 text-center">
                    <div id="success" />
                    <button
                      id="sendMessageButton"
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default HomePage;
