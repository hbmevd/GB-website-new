import { Fragment, useEffect, useState } from "react";
import {
  Accordion,
  Card,
  Col,
  Container,
  Nav,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import logowhite from "../../../assets/img/brand/logo-white.png";
import logowhiteoriginal from "../../../assets/img/brand/logo-white-original.png";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import Landingcarousel from "../landing/data/carousel";
import { connect } from "react-redux";
import * as SwitcherData from "../../../components/common/switcher/switcherdata";
import { ThemeChanger } from "../../../redux/action";

const GorillaBullyLogo = "./public/images/gb1.jpg";

function Landing({
  local_varaiable,
  ThemeChanger,
}: {
  local_varaiable: any;
  ThemeChanger: any;
}) {
  useEffect(() => {
    ThemeChanger({
      ...local_varaiable,
    });
  }, []);
  const Topup = () => {
    if (window.scrollY > 30 && document.querySelector(".nav-header-main")) {
      const Scolls = document.querySelectorAll(".sticky");
      Scolls.forEach((e) => {
        e.classList.add("sticky-pin");
      });
    } else {
      const Scolls = document.querySelectorAll(".sticky");
      Scolls.forEach((e) => {
        e.classList.remove("sticky-pin");
      });
    }
  };
  window.addEventListener("scroll", Topup);

  const Sidebartoggle = () => {
    let bodytag = document.querySelector("body") as HTMLElement;

    bodytag.classList.toggle("landing-sidemenu-open");
  };

  useEffect(() => {
    SwitcherData.LocalStorageBackup(ThemeChanger);
  }, []);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const homeSection: any = document.getElementById("home");
      const servicesSection: any = document.getElementById("services");
      const featuresSection: any = document.getElementById("features");
      const pricingSection: any = document.getElementById("pricing");
      const reviewsSection: any = document.getElementById("reviews");
      const contactSection: any = document.getElementById("contact");
      const offset = 100;

      if (homeSection.offsetTop - offset <= window.scrollY) {
        setActiveSection("home");
      }
      if (servicesSection.offsetTop - offset <= window.scrollY) {
        setActiveSection("services");
      }
      if (featuresSection.offsetTop - offset <= window.scrollY) {
        setActiveSection("features");
      }
      if (pricingSection.offsetTop - offset <= window.scrollY) {
        setActiveSection("pricing");
      }
      if (reviewsSection.offsetTop - offset <= window.scrollY) {
        setActiveSection("reviews");
      }
      if (contactSection.offsetTop - offset <= window.scrollY) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <Helmet>
        <html
          dir={local_varaiable.dir}
          data-theme-color={local_varaiable.datathemecolor}
          data-menuimg={local_varaiable.bgImg}
          data-width={local_varaiable.datawidth}
          data-position={local_varaiable.dataposition}
          data-vertical-style={local_varaiable.dataverticalstyle}
          data-layout={local_varaiable.datalayout}
          data-hor-style={local_varaiable.datahorstyle}
        ></html>
        <body className="ltr main-body app sidebar-mini"></body>
      </Helmet>
      <div className="page landing-page">
        <div className="landing-layout">
          <div className="sidemenu-landing">
            <ul className=" nav flex-column flex-nowrap mt-3 pb-3 border-bottom">
              <li className="nav-item">
                <a href="#home" className="nav-link active nav-scroll">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link nav-scroll">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#features" className="nav-link nav-scroll">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#pricing" className="nav-link nav-scroll">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#reviews" className="nav-link nav-scroll">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link nav-scroll">
                  Contact
                </a>
              </li>
            </ul>
            <div className="p-3">
              <a className="btn btn-block rounded-pill btn-primary">Sign Up</a>
              <a className="btn btn-block rounded-pill btn-primary">Login</a>
            </div>
          </div>
          <div className="landing-page-content">
            <section className="banner-section" id="home">
              <div className="nav-header-main sticky">
                <Container>
                  <Row className="row align-items-center justify-content-between">
                    <Col lg={9} md={11} sm={12}>
                      <div className="d-flex align-items-center justify-content-between">
                        <Link
                          to={`${import.meta.env.BASE_URL}dashboard/index/`}
                          className="header-logo"
                        >
                          <img
                            src={logowhite}
                            className="mobile-logo dark-logo-1"
                            alt="logo"
                          />
                        </Link>
                        <div className="d-md-none d-block">
                          <a
                            href="#;"
                            className="nav-header-icon flex-center"
                            id="landingMenuBtn"
                            onClick={() => Sidebartoggle()}
                          >
                            <i className="fe fe-align-left landing-open-btn"></i>
                            <i className="fe fe-x landing-close-btn"></i>
                          </a>
                        </div>
                        <div className="ms-lg-4 ms-2 d-md-flex d-none align-items-center flex-1">
                          <Nav
                            defaultActiveKey="/home"
                            className='justify-content-center flex-nowrap"'
                          >
                            <Nav.Item className="nav-item">
                              <Nav.Link
                                href="#home"
                                className={`nav-link  nav-scroll ${
                                  activeSection == "home" ? "active" : ""
                                }`}
                              >
                                Home
                              </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="nav-item">
                              <Nav.Link
                                href="#services"
                                className={`nav-link  nav-scroll ${
                                  activeSection == "services" ? "active" : ""
                                }`}
                              >
                                Services
                              </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="nav-item">
                              <Nav.Link
                                href="#features"
                                className={`nav-link  nav-scroll ${
                                  activeSection == "features" ? "active" : ""
                                }`}
                              >
                                Features
                              </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="nav-item">
                              <Nav.Link
                                href="#pricing"
                                className={`nav-link  nav-scroll ${
                                  activeSection == "pricing" ? "active" : ""
                                }`}
                              >
                                Pricing
                              </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="nav-item">
                              <Nav.Link
                                href="#reviews"
                                className={`nav-link  nav-scroll ${
                                  activeSection == "reviews" ? "active" : ""
                                }`}
                              >
                                Reviews
                              </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="nav-item">
                              <Nav.Link
                                href="#contact"
                                className={`nav-link  nav-scroll ${
                                  activeSection == "contact" ? "active" : ""
                                }`}
                              >
                                Contact
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </div>
                    </Col>
                    <Col lg={3} md={1} sm={12}>
                      <div className="d-none d-lg-flex justify-content-end">
                        <div className="btn-list min-btn-list">
                          <Link
                            to={`${
                              import.meta.env.BASE_URL
                            }pages/authentication/signin/`}
                            className="btn rounded-pill btn-secondary"
                          >
                            Login
                          </Link>
                          <Link
                            to={`${
                              import.meta.env.BASE_URL
                            }pages/authentication/signup/`}
                            className="btn rounded-pill btn-primary"
                          >
                            Sign up
                          </Link>
                        </div>
                      </div>
                      <div className="d-md-block d-lg-none d-none">
                        <a
                          href="#;"
                          className="dropdown-link"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fe fe-settings"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={`${
                                import.meta.env.BASE_URL
                              }pages/authentication/signin/`}
                              className="dropdown-item"
                            >
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${
                                import.meta.env.BASE_URL
                              }pages/authentication/signup/`}
                              className="dropdown-item"
                            >
                              Sign Up
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div
                className="jumps-prevent"
                style={{
                  paddingTop: 57,
                }}
              ></div>

              <Container>
                <div className="d-flex flex-wrap">
                  <div className="wd-lg-40p wd-100p mb-lg-0 mb-4">
                    <p className="title-content">
                      <span className="title me-2"> Welcome to</span>
                      GorillaBully
                    </p>
                    <p className="title-desc">
                      Pioneering the Evolution of Digital Culture
                    </p>
                    <p className="title-desc mb-md-4 mb-3">
                      Welcome to an NFT revolution that seamlessly blends
                      technology, community, and street culture in a symphony of
                      modern minimalism. Our project transcends the ordinary,
                      embodying a brand that is clean, futuristic, and pulsating
                      with the vibrant essence of street culture. At the heart
                      of GorillaBully lies a commitment to seamlessly blend
                      cutting-edge technology with a thriving community spirit.
                      We are not just creators; we are curators of a movement
                      that celebrates uniqueness and diversity. Our brand is a
                      testament to the combination of art and technology, where
                      each NFT is more than a digital asset - it's ownership of
                      our brands future.
                    </p>
                    <a
                      href="#;"
                      className="btn btn-secondary rounded-pill btn-lg"
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="wd-lg-50p wd-100p ms-auto">
                    <div className="image-container">
                      <a>
                        <img
                          src={GorillaBullyLogo}
                          className="img-fluid"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </Container>
            </section>

            <section className="companies-section mt-3">
              <Container>
                <div className="text-center">
                  <p className="section-title mb-4">
                    Companies that have already tried our services
                  </p>
                </div>
                <div className="d-md-flex align-items-center justify-content-between flex-wrap">
                  <img
                    src={Allimages("Clients1")}
                    alt="img"
                    className="brand-img"
                  />
                  <img
                    src={Allimages("Clients2")}
                    alt="img"
                    className="brand-img"
                  />
                  <img
                    src={Allimages("Clients3")}
                    alt="img"
                    className="brand-img"
                  />
                  <img
                    src={Allimages("Clients4")}
                    alt="img"
                    className="brand-img"
                  />
                  <img
                    src={Allimages("Clients5")}
                    alt="img"
                    className="brand-img"
                  />
                </div>
              </Container>
            </section>

            <section className="choose-section" id="services">
              <Container>
                <div className="text-center mb-5">
                  <a href="#top" className="tx-primary">
                    Services
                  </a>
                  <p className="section-title-2 mb-1">Why Choose Zem?</p>
                  <p>
                    The Zem admin template comes with strong features which are
                    completely easy-to-use for any user, even for a beginner.
                  </p>
                </div>
                <Row>
                  <Col xl={3} lg={4} md={6} sm={6} className="col-12">
                    <div className="p-3 feature-card bg-hover-shape shadow-none ">
                      <p className="rounded-icon bg-info-transparent flex-center">
                        <i className="fe fe-package tx-info"></i>
                      </p>
                      <h5>Unique Design</h5>
                      <p className="mb-0 title-desc">
                        Zem has a unique design that you cannot compare with any
                        other templates.
                      </p>
                    </div>
                  </Col>
                  <Col xl={3} lg={4} md={6} sm={6} className="col-12">
                    <div className="p-3 feature-card bg-hover-shape shadow-none ">
                      <p className="rounded-icon bg-danger-transparent flex-center">
                        <i className="fe fe-code tx-danger"></i>
                      </p>
                      <h5>Quality & Clean Code</h5>
                      <p className="mb-0 title-desc">
                        The Zem admin code is maintained very cleanly and
                        well-structured with proper comments.
                      </p>
                    </div>
                  </Col>
                  <Col xl={3} lg={4} md={6} sm={6} className="col-12">
                    <div className="p-3 feature-card bg-hover-shape shadow-none ">
                      <p className="rounded-icon bg-green-transparent flex-center">
                        <i className="fe fe-layers tx-green"></i>
                      </p>
                      <h5>Multiple Demos</h5>
                      <p className="mb-0 title-desc">
                        Zem included with multiple demos and screen shots to
                        give a quick overview.
                      </p>
                    </div>
                  </Col>
                  <Col xl={3} lg={4} md={6} sm={6} className="col-12">
                    <div className="p-3 feature-card bg-hover-shape shadow-none ">
                      <p className="rounded-icon bg-teal-transparent flex-center">
                        <i className="fe fe-book-open tx-teal"></i>
                      </p>
                      <h5>Well Documentation</h5>
                      <p className="mb-0 title-desc">
                        The documentation provides clear-cut material and is
                        instructed with such a way that every user can
                        understand.
                      </p>
                    </div>
                  </Col>
                  <Col xl={3} lg={4} md={6} sm={6} className="col-12">
                    <div className="p-3 feature-card bg-hover-shape shadow-none ">
                      <p className="rounded-icon bg-green-transparent flex-center">
                        <i className="fe fe-file tx-green"></i>
                      </p>
                      <h5>User Pages</h5>
                      <p className="mb-0 title-desc">
                        The most advanced "User Pages" are included in this
                        template, like registration, profile, and log-in pages,
                        etc.
                      </p>
                    </div>
                  </Col>
                  <Col xl={3} lg={4} md={6} sm={6} className="col-12">
                    <div className="p-3 feature-card bg-hover-shape shadow-none ">
                      <p className="rounded-icon bg-warning-transparent flex-center">
                        <i className="fe fe-aperture tx-warning"></i>
                      </p>
                      <h5>Modern UI Widgets</h5>
                      <p className="mb-0 title-desc">
                        Modern widgets are included in this template. Please
                        check out the best option that suits for your projects.
                      </p>
                    </div>
                  </Col>
                  <Col xl={3} lg={4} md={6} sm={6} className="col-12">
                    <div className="p-3 feature-card bg-hover-shape shadow-none ">
                      <p className="rounded-icon bg-info-transparent flex-center">
                        <i className="fe fe-box tx-info"></i>
                      </p>
                      <h5>100+ UI Components</h5>
                      <p className="mb-0 title-desc">
                        Tempor accusam magna ipsum ea et. Sanctus aliquyam ea
                        duo sit consetetur. Labore stet sed.
                      </p>
                    </div>
                  </Col>
                  <Col xl={3} lg={4} md={6} sm={6} className="col-12">
                    <div className="p-3 feature-card bg-hover-shape shadow-none ">
                      <p className="rounded-icon bg-orange-transparent flex-center">
                        <i className="fe fe-file-text tx-orange"></i>
                      </p>
                      <h5>Validating Forms</h5>
                      <p className="mb-0 title-desc">
                        Tempor accusam magna ipsum ea et. Sanctus aliquyam ea
                        duo sit consetetur. Labore stet sed.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section
              className="product-section bg-primary-transparent mt-3"
              id="features"
            >
              <Container>
                <Row>
                  <Col xl={6} lg={6} md={12}>
                    <a href="#top" className="tx-primary">
                      Features
                    </a>
                    <p className="section-title-2">Look Into The Product</p>
                    <p className="title-desc">
                      No sanctus ea diam duo no kasd amet. Gubergren justo kasd
                      nonumy est dolor, aliquyam at dolores eirmod dolore lorem.
                    </p>
                    <p className="title-desc">
                      No sanctus ea diam duo no kasd amet. Gubergren justo kasd
                      nonumy est dolor, aliquyam at dolores eirmod dolore lorem.
                      Stet et rebum dolore consetetur eirmod no sit lorem
                      lorem..
                    </p>
                    <div className="btn-list min-btn-list-lg mt-5">
                      <Link
                        to={`${import.meta.env.BASE_URL}dashboard/index/`}
                        className="btn btn-primary"
                      >
                        Live Preview
                      </Link>
                      <a href="#;" className="btn btn-secondary">
                        Buy Now
                      </a>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={12}>
                    <div className="text-center">
                      <img
                        src="/Images/gb5.png"
                        alt="Your Image Description"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="counters-section">
              <Container>
                <div className="d-sm-flex align-items-center justify-content-between text-center">
                  <div className="text-center counter-container container-1">
                    <span className="counter fw-semibold counter">
                      <CountUp end={3} start={0} duration={4.94} />
                    </span>
                    <span>+</span>
                    <p className="mb-0 tx-18">Dashboard</p>
                  </div>
                  <div className="text-center counter-container container-2">
                    <span className="counter fw-semibold counter">
                      <CountUp end={105} start={0} duration={4.94} />
                    </span>
                    <span>+</span>
                    <p className="mb-0 tx-18">Pages</p>
                  </div>
                  <div className="text-center counter-container container-3">
                    <span className="counter fw-semibold counter">
                      <CountUp end={40} start={0} duration={4.94} />
                    </span>
                    <span>+</span>
                    <p className="mb-0 tx-18">Plugins</p>
                  </div>
                  <div className="text-center counter-container container-4">
                    <span className="counter fw-semibold counter">
                      <CountUp end={4} start={0} duration={4.94} />
                    </span>
                    <span>+</span>
                    <p className="mb-0 tx-18">Advanced Pages</p>
                  </div>
                </div>
              </Container>
            </section>

            <section className="working-section mt-3">
              <Container>
                <div className="text-center mb-4">
                  <p className="section-title-2 mb-1">How It Works</p>
                  <p>
                    Et labore elitr elitr no ipsum vero stet invidunt, takimata
                    magna ipsum aliquyam consetetur, accusam.
                  </p>
                </div>
                <div>
                  <div className="working-container container-1">
                    <div className="row align-items-center">
                      <Col xl={6} lg={6} md={6} sm={12}>
                        <div className="working-svg-container svg-container-1">
                          <svg
                            id="SvgjsSvg1237"
                            className="working-svg"
                            width="360"
                            height="360"
                            version="1.1"
                          >
                            <defs id="SvgjsDefs1238"></defs>
                            <g id="SvgjsG1239">
                              <svg
                                width="360"
                                height="360"
                                enableBackground="new 0 0 3000 2000"
                                viewBox="0 0 3000 2000"
                              >
                                <path
                                  fill="#a9e3f7"
                                  d="M444.265 1411.216c-9.038-3.131-18.347-5.308-27.79-6.525.309 8.334-6.693 17.97-19.922 18.663-5.958.307-17.079-1.261-22.855-2.552-16.578-3.693-35.047 1.708-48.297 14.127 7.674-9.813 15.417-19.7 24.631-27.809 9.21-8.107 21.026-19.681 32.589-21.144 11.173-1.411 28.145.23 32.979 14.256 7.037.821 14 2.157 20.849 4.025-12.551-11.424-24.605-23.47-36.105-36.122-.235.017-.484 0-.753-.102-9.924-3.674-20.192-6.176-30.624-7.506.332 8.345-6.67 18.011-19.922 18.704-5.959.309-17.078-1.261-22.852-2.548-16.582-3.697-35.054 1.706-48.303 14.123 7.679-9.816 15.422-19.7 24.632-27.808 9.214-8.108 21.03-19.682 32.593-21.142 11.171-1.413 28.145.23 32.979 14.258 9.044 1.056 17.972 2.976 26.682 5.762-10.789-12.239-21.082-24.995-30.823-38.263-9.911-3.67-20.169-6.172-30.59-7.502.334 8.351-6.675 18.014-19.918 18.707-5.963.311-17.082-1.26-22.86-2.546-16.578-3.698-35.05 1.706-48.299 14.123 7.681-9.816 15.424-19.7 24.634-27.811 9.214-8.106 21.028-19.679 32.593-21.14 11.173-1.413 28.146.23 32.977 14.262 9.208 1.075 18.297 3.046 27.156 5.914-4.577-6.407-9.056-12.906-13.376-19.538-3.61-5.551-7.025-11.25-10.453-16.937-7.878-5.658-16.254-10.449-24.991-14.341-1.716 8.239-10.712 15.667-23.476 12.59-5.754-1.39-15.97-6.083-21.159-8.986-14.899-8.322-33.802-8.291-49.417.094 9.681-7.42 19.443-14.885 30.172-20.196 10.733-5.313 24.777-13.272 36.147-11.418 10.981 1.795 26.754 8.221 27.978 23.306 6.72 2.893 13.243 6.301 19.503 10.229-10.22-17.665-19.478-35.989-27.878-54.808-7.316-7.23-15.297-13.569-23.802-18.974-2.714 7.974-12.509 14.061-24.692 9.096-5.487-2.239-14.946-8.432-19.696-12.094-13.617-10.509-32.217-13.274-48.639-7.229 10.459-5.965 20.893-15.59 32.117-19.295 11.231-3.708 26.169-5.938 37.124-2.403 10.579 3.413 25.281 12.154 24.598 27.36 6.569 4.085 12.853 8.704 18.774 13.845-7.17-16.848-13.587-34.085-19.252-51.658-.153-.095-.311-.172-.452-.33-7.216-8.048-15.204-15.169-23.797-21.298-3.063 7.847-13.103 13.432-25.03 7.803-5.363-2.536-14.511-9.245-19.065-13.165-13.094-11.253-31.503-15.017-48.139-9.851 10.696-5.405 21.783-14.374 33.145-17.486 11.357-3.105 26.078-4.647 36.836-.519 10.382 3.986 24.632 13.524 23.258 28.713 7.191 5.023 13.967 10.716 20.256 17.034-5.629-18.456-10.447-37.242-14.355-56.299-.116-.552-2.05-8.458-6.515-20.248-6.55 3.645-16.364 1.774-22.632-9.271-3.054-5.386-7.048-16.629-8.751-22.733-4.884-17.513-17.868-31.75-33.949-37.229 11.393 1.724 22.87 3.469 33.634 7.573 10.766 4.102 25.499 8.71 32.109 18.689 6.378 9.633 13.067 26.356 4.268 38.626 2.803 7.368 5.116 14.982 6.9 22.783.021.079.068.127.085.216.083.386.172.764.253 1.15.042.189.085.377.125.562 2.369 11.368 5.069 22.632 8.054 33.792 1.567-8.382 3.709-16.64 6.382-24.706-.067-.063-.145-.114-.214-.179-11.123-10.822-4.795-29.003 1.533-39.664 6.322-10.658 18.997-19.629 29.854-25.053 10.858-5.421 24.773-6.077 36.384-9.243-16.248 7.461-28.914 23.125-33.132 40.965-1.467 6.216-5.057 17.779-7.945 23.464-6.007 11.824-16.169 14.841-23.061 11.901-3.359 10.295-5.822 20.899-7.303 31.682 5.172 18.213 11.196 36.091 17.988 53.594 1.583-10.401 4.03-20.634 7.287-30.578-9.237-10.986-3.098-28.659 2.959-39.195 6.264-10.898 18.677-20.157 29.283-25.785 10.608-5.633 24.129-6.457 35.441-9.806-15.862 7.76-28.35 23.823-32.648 41.994-1.498 6.328-5.117 18.117-7.988 23.928-6.386 12.92-17.281 15.663-23.883 11.652-3.481 10.87-5.967 22.084-7.344 33.481-.052.465-.234.821-.462 1.133 1.948 4.838 3.958 9.646 6.025 14.42 5.548 12.795 11.66 25.252 18.051 37.526 1.589-9.66 3.911-19.171 6.944-28.431-9.21-10.988-3.077-28.645 2.973-39.172 6.266-10.901 18.685-20.158 29.285-25.785 10.604-5.631 24.132-6.459 35.448-9.806-15.868 7.762-28.354 23.82-32.653 41.991-1.498 6.33-5.116 18.119-7.988 23.933-6.378 12.901-17.256 15.652-23.858 11.667-3.272 10.241-5.658 20.789-7.075 31.506 8.598 16.071 17.916 31.638 27.904 46.676 1.579-10.662 4.069-21.152 7.401-31.341-9.239-10.986-3.102-28.661 2.957-39.194 6.266-10.899 18.681-20.155 29.285-25.788 10.604-5.629 24.132-6.455 35.444-9.804-15.864 7.764-28.35 23.823-32.649 41.992-1.498 6.332-5.116 18.119-7.992 23.931-6.382 12.921-17.283 15.662-23.883 11.649-3.478 10.875-5.963 22.086-7.341 33.483 0 .006-.004.006-.004.012 9.214 13.557 19.04 26.592 29.341 39.186 1.548-10.822 4.048-21.467 7.434-31.804-9.086-10.836-3.033-28.256 2.936-38.641 6.181-10.751 18.428-19.884 28.891-25.439 10.461-5.554 23.802-6.37 34.964-9.67-15.652 7.658-27.968 23.5-32.213 41.423-1.475 6.247-5.044 17.874-7.88 23.608-6.287 12.731-17.021 15.445-23.532 11.511-3.436 10.718-5.886 21.777-7.241 33.014-.01.052-.035.081-.044.133 10.241 12.276 21.047 23.99 32.282 35.231 1.577-10.463 4.037-20.758 7.309-30.763-9.234-10.984-3.097-28.659 2.961-39.192 6.262-10.901 18.677-20.157 29.281-25.788 10.604-5.631 24.136-6.455 35.444-9.804-15.864 7.76-28.35 23.823-32.648 41.994-1.498 6.328-5.117 18.117-7.988 23.926-6.378 12.906-17.256 15.657-23.858 11.671-3.264 10.22-5.646 20.746-7.062 31.439 1.297 1.274 2.521 2.623 3.824 3.88 55.917 53.772 122.719 94.191 194.942 117.939 3.214 1.058 1.676 6.631-1.54 5.575-40.794-13.414-79.902-32.035-116.314-55.409C484.468 1443.927 463.802 1428.306 444.265 1411.216zM332.306 1800.864c5.544 15.789 36.993 17.096 50.26 17.617 15.054.564 38.224-.89 73.999-15.955 18.424-7.772 43.002-18.119 68.026-38.674 1.068-.915 2.168-1.795 3.247-2.77 3.581-3.036 7.123-6.255 10.664-9.751 10.015-9.887 74.084-73.005 59.762-141.964-.672-3.291-9.471-43.81-30.876-47.592-26.622-4.689-54.065 50.774-65.177 45.031-5.515-2.853-.257-17.239-.031-36.122.523-42.253-24.217-95.969-60.922-103.075-17.354-3.365-37.884 3.627-50.239 18.565-19.895 24.099.301 66.75-3.438 67.887-5.305 1.568-19.547-88.502-68.835-103.947-17.372-5.434-40.562-2.099-49.342 10.623-12.953 18.698 10.481 49.84 1.807 56.411-9.172 6.914-33.775-28.758-80.252-36.939-11.911-2.102-39.545-6.965-57.256 9.751-15.405 14.484-19.16 40.021-10.544 59.086 7.982 17.667 24.593 25.293 29.115 27.248 29.576 13.087 48.023-5.851 100.448-.963 18.325 1.716 38.392 6.079 38.834 12.291.33 4.709-10.776 6.066-22.036 17.665-.243.247-.581.573-1.036 1.1-3.4 3.604-15.48 16.569-14.77 33.28.004.757 1.004 18.988 13.21 25.553 6.31 3.368 12.897 2.241 15.895 1.751 29.07-4.602 66.771-1.359 67.851 3.463 1.245 5.508-45.631 12.521-47.535 30.885-1.587 15.274 28.765 29.877 32.632 31.697 32.75 15.415 66.781 8.751 66.978 11.382.189 2.419-28.037.768-50.185 18.578C342.209 1771.269 327.818 1788.112 332.306 1800.864z"
                                  className="colorFEB7A3 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M344.103,1651.195c1.015,0.72,2.183,0.33,2.969-0.462c6.181-6.544,14.7-10.583,23.576-11.52
c0.178,0.021,0.312-0.087,0.436-0.128c0.643-0.027,1.28-0.044,1.925-0.066c13.096-0.714,26.916-1.892,38.937,4.44
c0.052,0.066,0.145,0.046,0.205,0.052c0.042,0.127,0.094,0.253,0.146,0.32c1.338,1.666,3.195,2.963,5.177,3.727
c8.135,8.786,16.042,17.764,23.908,26.824c-7.461,0.179-14.997-1.591-21.482-5.312c-1-0.564-2.216-0.514-2.961,0.463
c-0.616,0.873-0.508,2.372,0.492,2.938c8.021,4.619,17.167,6.748,26.375,6.09c0.367-0.017,0.654-0.139,0.919-0.353
c9.017,10.434,17.969,20.922,27.061,31.24c9.167,10.475,18.561,20.828,28.263,30.82c-9.916,3.247-19.972,6.938-30.248,8.718
c-10.027,1.751-21.611,0.595-28.491-7.778c-1.741-2.106-5.035,0.538-3.333,2.67c5.305,6.409,13.061,9.326,21.069,9.905
c-5.446,5.351-9.926,11.563-13.087,18.532c-1.125,2.486,2.867,3.988,3.958,1.527c3.448-7.575,8.494-14.301,14.851-19.673
c0.133-0.106,0.18-0.253,0.286-0.391c0.946-0.049,1.832-0.103,2.76-0.242c5.913-0.747,11.654-2.455,17.339-4.225
c6.063-1.851,12.167-3.791,18.231-5.704c6.855,6.976,13.909,13.735,21.206,20.244c1.068-0.915,2.168-1.795,3.247-2.77
c-2.961-2.602-5.882-5.291-8.77-8.005c3.363-4.063,3.26-9.78,2.276-14.623c-0.996-4.997-3.042-10.412-0.919-15.339
c1.035-2.527-2.897-4.021-3.957-1.529c-2.135,5.048-0.909,10.403,0.294,15.511c0.954,4.266,1.83,9.249-0.797,12.996
c-3.485-3.33-6.934-6.743-10.351-10.185l-0.027-0.035c-12.011-12.188-23.445-24.949-34.68-37.871
c0.073-0.114,0.146-0.227,0.193-0.374c3.602-15.082-0.56-30.503-6.143-44.563c-0.706-1.839-1.51-3.656-2.249-5.474
c0.205-0.218,0.415-0.438,0.5-0.67c13.629-7.481,25.474-17.743,34.736-30.201c1.639-2.187-1.764-4.653-3.397-2.467
c-8.971,12.003-20.418,21.943-33.591,29.113c0,0,0,0-0.033,0.025c-2.098-4.934-4.197-9.87-6.003-14.926
c-2.614-7.146-4.614-14.621-2.896-22.231c0.625-2.633-3.61-3.071-4.199-0.463c-1.643,7.224-0.112,14.527,2.168,21.393
c2.712,8.158,6.285,15.957,9.573,23.878c5.608,13.546,10.31,28.209,7.868,42.96c-2.187-2.513-4.338-4.999-6.494-7.479
c-24.596-28.568-49.091-57.488-77.453-82.433c-0.664-0.62-1.39-1.187-2.083-1.78c-0.946-4.38-1.859-8.791-2.774-13.141
c-0.577-2.766-1.633-6.399,0.164-8.937c1.527-2.261-1.909-4.701-3.456-2.475c-2.247,3.274-1.862,7.232-1.121,10.955
c0.637,3.045,1.303,6.123,1.938,9.168c-12.266-10.183-25.223-19.592-38.929-27.688c0.04-0.087,0.073-0.112,0.11-0.201
c1.716-6.185,0.338-12.405-2.116-18.26c-2.666-6.395-6.623-12.355-7.988-19.244c-0.521-2.699-4.718-2.069-4.195,0.63
c1.278,6.576,4.654,12.289,7.457,18.302c2.322,5.083,4.315,10.917,3.002,16.571c-12.175-6.926-24.881-12.816-38.163-17.314
c-2.604-0.865-4.131,3.096-1.527,3.961c4.125,1.394,8.214,2.878,12.219,4.529c32.935,13.461,61.797,35.275,87.396,59.702
c4.803,4.628,9.557,9.403,14.19,14.22c-9.86-3.361-20.632-3.091-30.989-2.498c-12.789,0.685-26.719,1.73-38.273-4.974
c-2.34-1.355-4.838,2.077-2.473,3.459c6.393,3.679,13.351,5.266,20.474,5.898c-4.743,2.271-9.065,5.405-12.704,9.254
C342.85,1649.085,343.294,1650.588,344.103,1651.195z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#a9e3f7"
                                  d="M2515.23 1358.247c9.042-3.129 18.349-5.307 27.789-6.527-.307 8.341 6.695 17.974 19.922 18.665 5.958.312 17.084-1.257 22.856-2.547 16.577-3.698 35.05 1.705 48.299 14.125-7.679-9.816-15.422-19.698-24.633-27.809-9.214-8.108-21.025-19.681-32.592-21.144-11.17-1.414-28.144.232-32.975 14.254-7.035.821-14.007 2.159-20.854 4.026 12.555-11.424 24.608-23.472 36.106-36.124.234.018.485.004.755-.098 9.921-3.676 20.191-6.178 30.626-7.508-.334 8.345 6.67 18.009 19.918 18.703 5.958.311 17.082-1.258 22.858-2.546 16.576-3.695 35.048 1.705 48.297 14.127-7.676-9.818-15.424-19.702-24.631-27.811-9.212-8.108-21.026-19.684-32.591-21.144-11.173-1.409-28.147.228-32.977 14.255-9.044 1.058-17.972 2.978-26.682 5.766 10.788-12.241 21.081-24.997 30.819-38.267 9.911-3.67 20.168-6.166 30.594-7.496-.334 8.343 6.669 18.009 19.918 18.702 5.963.311 17.079-1.259 22.856-2.55 16.578-3.695 35.052 1.709 48.301 14.127-7.678-9.817-15.42-19.7-24.635-27.811-9.21-8.108-21.026-19.679-32.594-21.142-11.168-1.411-28.149.23-32.975 14.262-9.203 1.079-18.294 3.046-27.158 5.917 4.577-6.411 9.061-12.907 13.38-19.54 3.612-5.548 7.023-11.25 10.447-16.935 7.884-5.66 16.255-10.455 24.992-14.343 1.718 8.241 10.715 15.671 23.481 12.588 5.753-1.388 15.965-6.083 21.157-8.981 14.901-8.324 33.799-8.291 49.415.089-9.68-7.419-19.438-14.884-30.171-20.196-10.733-5.312-24.775-13.268-36.145-11.412-10.984 1.793-26.757 8.217-27.977 23.3-6.72 2.892-13.245 6.303-19.502 10.232 10.216-17.663 19.474-35.991 27.874-54.809 7.32-7.23 15.302-13.569 23.802-18.974 2.716 7.971 12.509 14.061 24.696 9.093 5.49-2.236 14.947-8.432 19.69-12.094 13.623-10.507 32.221-13.27 48.646-7.229-10.466-5.961-20.893-15.585-32.122-19.293-11.231-3.708-26.165-5.94-37.12-2.402-10.579 3.413-25.281 12.152-24.596 27.364-6.577 4.083-12.855 8.702-18.777 13.841 7.171-16.849 13.586-34.084 19.25-51.658.154-.095.312-.172.455-.33 7.216-8.05 15.202-15.168 23.796-21.299 3.061 7.847 13.105 13.436 25.026 7.803 5.369-2.533 14.515-9.243 19.075-13.165 13.087-11.249 31.5-15.017 48.135-9.847-10.694-5.407-21.788-14.378-33.145-17.486-11.364-3.11-26.078-4.647-36.834-.523-10.39 3.988-24.64 13.526-23.266 28.72-7.187 5.017-13.967 10.709-20.254 17.031 5.633-18.455 10.445-37.24 14.359-56.301.114-.552 2.044-8.459 6.51-20.246 6.555 3.644 16.368 1.772 22.634-9.274 3.051-5.384 7.051-16.63 8.752-22.731 4.889-17.513 17.87-31.752 33.952-37.228-11.399 1.722-22.875 3.469-33.639 7.569-10.762 4.102-25.501 8.714-32.106 18.691-6.377 9.631-13.069 26.354-4.271 38.626-2.803 7.372-5.113 14.982-6.897 22.785-.025.081-.07.128-.091.213-.074.384-.17.766-.251 1.151-.04.185-.081.376-.12.561-2.37 11.368-5.068 22.632-8.057 33.79-1.569-8.384-3.712-16.636-6.382-24.704.066-.064.145-.114.216-.18 11.116-10.82 4.788-29.001-1.531-39.664-6.324-10.656-19.005-19.631-29.856-25.051-10.857-5.421-24.777-6.079-36.383-9.245 16.241 7.461 28.914 23.127 33.126 40.966 1.472 6.216 5.058 17.781 7.95 23.468 6.001 11.82 16.167 14.835 23.062 11.899 3.354 10.291 5.822 20.899 7.301 31.682-5.17 18.21-11.195 36.086-17.992 53.589-1.577-10.399-4.029-20.632-7.284-30.578 9.234-10.986 3.101-28.659-2.957-39.193-6.266-10.901-18.681-20.158-29.286-25.789-10.604-5.629-24.132-6.454-35.441-9.803 15.861 7.763 28.347 23.822 32.646 41.993 1.503 6.33 5.121 18.117 7.992 23.928 6.386 12.922 17.283 15.663 23.881 11.654 3.486 10.87 5.971 22.083 7.349 33.479.053.464.234.821.46 1.135-1.946 4.838-3.952 9.646-6.023 14.419-5.548 12.795-11.667 25.25-18.057 37.529-1.582-9.663-3.905-19.173-6.942-28.433 9.209-10.984 3.079-28.644-2.973-39.174-6.268-10.896-18.681-20.156-29.286-25.785-10.606-5.631-24.132-6.457-35.441-9.803 15.86 7.762 28.347 23.82 32.647 41.991 1.502 6.333 5.116 18.119 7.986 23.931 6.384 12.905 17.262 15.654 23.86 11.669 3.272 10.243 5.66 20.787 7.075 31.503-8.594 16.071-17.912 31.639-27.902 46.678-1.577-10.66-4.066-21.152-7.403-31.339 9.239-10.984 3.099-28.659-2.958-39.199-6.266-10.896-18.676-20.154-29.279-25.785-10.606-5.631-24.135-6.457-35.444-9.803 15.861 7.762 28.35 23.823 32.653 41.994 1.492 6.328 5.112 18.115 7.986 23.928 6.384 12.921 17.279 15.661 23.88 11.652 3.481 10.87 5.967 22.085 7.345 33.482 0 .004.005.006.005.008-9.214 13.561-19.047 26.594-29.342 39.188-1.548-10.824-4.05-21.47-7.436-31.804 9.083-10.839 3.033-28.256-2.938-38.641-6.183-10.751-18.424-19.885-28.889-25.439-10.463-5.556-23.806-6.37-34.962-9.67 15.648 7.658 27.97 23.5 32.207 41.427 1.482 6.243 5.05 17.872 7.88 23.603 6.295 12.732 17.026 15.445 23.537 11.513 3.435 10.719 5.888 21.777 7.245 33.016.004.048.029.079.042.128-10.245 12.281-21.047 23.993-32.28 35.234-1.584-10.465-4.039-20.756-7.315-30.763 9.239-10.986 3.1-28.659-2.957-39.195-6.268-10.898-18.681-20.156-29.281-25.785-10.61-5.631-24.136-6.457-35.446-9.805 15.859 7.764 28.348 23.822 32.65 41.993 1.498 6.329 5.113 18.118 7.986 23.931 6.376 12.903 17.254 15.654 23.86 11.669 3.258 10.218 5.646 20.743 7.063 31.438-1.296 1.272-2.52 2.623-3.829 3.882-55.916 53.768-122.715 94.19-194.942 117.937-3.212 1.056-1.673 6.629 1.546 5.573 40.788-13.414 79.902-32.034 116.313-55.407C2475.03 1390.958 2495.694 1375.339 2515.23 1358.247zM2667.697 1745.787c-5.548 15.789-36.998 17.094-50.268 17.617-15.05.563-38.218-.892-73.995-15.955-18.424-7.772-43-18.119-68.026-38.674-1.068-.915-2.167-1.796-3.251-2.77-3.577-3.038-7.118-6.258-10.66-9.753-10.013-9.886-74.085-73.003-59.762-141.963.668-3.291 9.471-43.809 30.877-47.593 26.624-4.691 54.064 50.776 65.177 45.031 5.515-2.851.258-17.237.031-36.12-.521-42.255 24.217-95.971 60.917-103.075 17.357-3.369 37.884 3.627 50.243 18.563 19.897 24.101-.299 66.75 3.44 67.885 5.299 1.572 19.545-88.502 68.833-103.945 17.374-5.434 40.563-2.097 49.342 10.625 12.953 18.696-10.478 49.838-1.801 56.411 9.162 6.911 33.774-28.761 80.249-36.941 11.909-2.102 39.543-6.963 57.257 9.753 15.401 14.48 19.157 40.02 10.542 59.085-7.984 17.667-24.594 25.292-29.115 27.246-29.579 13.089-48.025-5.849-100.448-.961-18.327 1.712-38.394 6.079-38.834 12.289-.332 4.71 10.776 6.069 22.035 17.665.244.249.581.573 1.031 1.102 3.405 3.602 15.487 16.564 14.775 33.277-.005.76-1.004 18.991-13.208 25.553-6.312 3.368-12.899 2.241-15.902 1.749-29.063-4.598-66.771-1.356-67.847 3.465-1.245 5.511 45.63 12.521 47.535 30.887 1.587 15.272-28.765 29.876-32.632 31.695-32.75 15.415-66.781 8.751-66.978 11.384-.187 2.417 28.038.768 50.184 18.574C2657.792 1716.192 2672.183 1733.035 2667.697 1745.787z"
                                  className="colorFEB7A3 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M2655.896,1596.118c-1.012,0.718-2.182,0.33-2.97-0.462c-6.18-6.546-14.699-10.585-23.575-11.519
c-0.178,0.021-0.311-0.087-0.435-0.133c-0.644-0.023-1.282-0.04-1.922-0.067c-13.102-0.709-26.92-1.89-38.939,4.442
c-0.054,0.067-0.147,0.048-0.208,0.052c-0.045,0.129-0.093,0.255-0.145,0.32c-1.338,1.664-3.195,2.961-5.174,3.726
c-8.137,8.787-16.042,17.764-23.911,26.823c7.458,0.181,14.997-1.587,21.483-5.307c1.002-0.566,2.22-0.519,2.965,0.46
c0.612,0.874,0.504,2.374-0.496,2.938c-8.021,4.619-17.167,6.747-26.373,6.091c-0.366-0.019-0.653-0.141-0.918-0.354
c-9.019,10.436-17.972,20.92-27.068,31.24c-9.162,10.478-18.557,20.831-28.262,30.823c9.915,3.247,19.975,6.938,30.252,8.716
c10.023,1.753,21.613,0.598,28.491-7.778c1.74-2.104,5.039,0.539,3.332,2.666c-5.306,6.415-13.061,9.332-21.07,9.911
c5.447,5.349,9.926,11.561,13.088,18.528c1.124,2.486-2.868,3.99-3.959,1.531c-3.448-7.575-8.495-14.302-14.852-19.675
c-0.132-0.106-0.18-0.251-0.286-0.388c-0.951-0.052-1.833-0.104-2.759-0.247c-5.914-0.745-11.653-2.45-17.344-4.22
c-6.056-1.851-12.16-3.793-18.227-5.704c-6.855,6.975-13.91,13.733-21.207,20.243c-1.068-0.915-2.167-1.796-3.251-2.77
c2.965-2.604,5.887-5.291,8.775-8.009c-3.364-4.063-3.264-9.778-2.276-14.621c0.996-4.996,3.042-10.409,0.921-15.339
c-1.038-2.524,2.894-4.021,3.954-1.526c2.137,5.045,0.908,10.403-0.295,15.511c-0.954,4.263-1.83,9.249,0.797,12.994
c3.485-3.33,6.934-6.743,10.353-10.185l0.025-0.034c12.013-12.187,23.445-24.951,34.68-37.871
c-0.073-0.116-0.15-0.228-0.193-0.374c-3.603-15.081,0.556-30.503,6.143-44.564c0.708-1.842,1.51-3.656,2.251-5.473
c-0.208-0.218-0.415-0.44-0.502-0.67c-13.627-7.484-25.474-17.744-34.735-30.201c-1.64-2.189,1.763-4.656,3.397-2.471
c8.97,12.005,20.417,21.945,33.589,29.113c0,0,0,0,0.031,0.029c2.1-4.938,4.199-9.872,6.004-14.926
c2.614-7.146,4.616-14.623,2.896-22.233c-0.625-2.631,3.606-3.071,4.2-0.461c1.643,7.222,0.112,14.523-2.166,21.393
c-2.714,8.158-6.291,15.957-9.576,23.878c-5.608,13.546-10.31,28.207-7.865,42.961c2.185-2.513,4.336-4.999,6.492-7.48
c24.597-28.567,49.091-57.49,77.454-82.437c0.663-0.616,1.392-1.187,2.085-1.776c0.943-4.382,1.856-8.791,2.771-13.144
c0.577-2.766,1.633-6.4-0.164-8.936c-1.528-2.26,1.909-4.7,3.461-2.476c2.242,3.276,1.858,7.23,1.116,10.955
c-0.635,3.046-1.303,6.122-1.938,9.166c12.266-10.179,25.223-19.588,38.931-27.684c-0.046-0.089-0.074-0.114-0.112-0.202
c-1.716-6.187-0.334-12.405,2.116-18.262c2.662-6.397,6.623-12.355,7.987-19.242c0.523-2.699,4.719-2.068,4.195,0.631
c-1.278,6.573-4.657,12.287-7.457,18.302c-2.321,5.083-4.315,10.917-2.995,16.569c12.17-6.926,24.874-12.814,38.157-17.312
c2.604-0.865,4.131,3.094,1.527,3.961c-4.123,1.393-8.21,2.874-12.218,4.529c-32.94,13.461-61.797,35.275-87.396,59.702
c-4.803,4.626-9.556,9.403-14.189,14.221c9.86-3.363,20.631-3.092,30.989-2.504c12.795,0.689,26.715,1.736,38.273-4.969
c2.341-1.353,4.838,2.079,2.478,3.461c-6.397,3.678-13.356,5.264-20.483,5.896c4.745,2.272,9.069,5.405,12.708,9.255
C2657.149,1594.006,2656.705,1595.51,2655.896,1596.118z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M2573.593,1691.321H458.494c-27.242,0-49.328,19.922-49.328,44.498v21.708
c0,24.576,22.086,44.5,49.328,44.5h2115.099c27.242,0,49.33-19.924,49.33-44.5v-21.708
C2622.923,1711.244,2600.835,1691.321,2573.593,1691.321z"
                                  className="color4D4D4D svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M2401.403,483.342H630.659c-28.424,0-51.544,23.067-51.544,51.542v1160.245
c0,28.479,23.12,51.544,51.544,51.544h1770.744c28.45,0,51.569-23.065,51.569-51.544V534.884
C2452.972,506.41,2429.853,483.342,2401.403,483.342z M2386.148,1656.598c0,18.588-15.084,33.622-33.647,33.622H676.344
c-18.609,0-33.672-15.034-33.672-33.622V573.392c0-18.561,15.063-33.645,33.672-33.645h1676.157
c18.563,0,33.647,15.083,33.647,33.645V1656.598z"
                                  className="color4D4D4D svgShape"
                                ></path>
                                <path
                                  fill="#fdb8a9"
                                  d="M2100.548 668.205H728.174c-19.35 0-35.035 16.578-35.035 37.022 0 20.449 15.685 37.026 35.035 37.026h1372.374c19.354 0 35.042-16.578 35.042-37.026C2135.589 684.783 2119.902 668.205 2100.548 668.205zM2306.858 742.254h-104.144c-20.448 0-37.026-16.578-37.026-37.026l0 0c0-20.445 16.578-37.022 37.026-37.022h104.144c20.451 0 37.024 16.578 37.024 37.022l0 0C2343.882 725.676 2327.309 742.254 2306.858 742.254z"
                                  className="colorFE8765 svgShape"
                                ></path>
                                <path
                                  fill="#a9e3f7"
                                  d="M2330.641,632.492h-42.698c-7.316,0-13.245-5.932-13.245-13.243v-42.701
c0-7.313,5.929-13.243,13.245-13.243h42.698c7.312,0,13.241,5.93,13.241,13.243v42.701
C2343.882,626.56,2337.952,632.492,2330.641,632.492z"
                                  className="colorFEB7A3 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M2325.313,620.728c2.463-2.345,4.927-4.687,7.391-7.032c-5.702-5.211-11.404-10.421-17.107-15.633
c6.036-4.82,12.073-9.64,18.113-14.461c-2.301-2.502-4.608-5.004-6.913-7.506c-5.376,5.587-10.758,11.173-16.14,16.76
c-4.895-5.93-9.789-11.857-14.677-17.788c-2.469,2.345-4.93,4.689-7.399,7.034c5.589,5.206,11.171,10.411,16.759,15.619
c-5.92,4.824-11.841,9.65-17.758,14.474c2.306,2.502,4.607,5.006,6.908,7.506c5.274-5.589,10.552-11.179,15.833-16.771
C2315.315,608.862,2320.317,614.796,2325.313,620.728z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#a9e3f7"
                                  d="M2150.241 621.784c0-5.913 4.791-10.706 10.708-10.706 5.911 0 10.702 4.792 10.702 10.706 0 5.916-4.791 10.708-10.702 10.708C2155.032 632.492 2150.241 627.699 2150.241 621.784zM2184.253 621.784c0-5.913 4.792-10.706 10.706-10.706 5.915 0 10.706 4.792 10.706 10.706 0 5.916-4.79 10.708-10.706 10.708C2189.045 632.492 2184.253 627.699 2184.253 621.784zM2218.267 621.784c0-5.913 4.793-10.706 10.708-10.706 5.911 0 10.704 4.792 10.704 10.706 0 5.916-4.793 10.708-10.704 10.708C2223.06 632.492 2218.267 627.699 2218.267 621.784zM779.842 577.301h-79.167c-4.162 0-7.536 3.375-7.536 7.538v47.234c0 4.162 3.374 7.538 7.536 7.538h79.167c4.162 0 7.537-3.375 7.537-7.538v-47.234C787.379 580.676 784.004 577.301 779.842 577.301z"
                                  className="colorFEB7A3 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M758.482,606.124h-12.341v-12.341c0-2.455-1.99-4.442-4.442-4.442c-2.45,0-4.44,1.988-4.44,4.442v12.341
h-12.341c-2.453,0-4.442,1.987-4.442,4.44c0,2.448,1.99,4.438,4.442,4.438h12.341v12.343c0,2.452,1.99,4.44,4.44,4.44
c2.452,0,4.442-1.988,4.442-4.44v-12.343h12.341c2.45,0,4.44-1.99,4.44-4.438C762.922,608.111,760.932,606.124,758.482,606.124z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="var(--primary-bg-color)"
                                  d="M919.547,1214.859c-3.089,0-5.701-2.383-5.937-5.517c-0.243-3.28,2.219-6.139,5.502-6.382
c10.229-0.766,20.435-2.415,30.337-4.904c3.175-0.795,6.43,1.131,7.234,4.326c0.799,3.191-1.139,6.426-4.33,7.233
c-10.561,2.653-21.449,4.413-32.358,5.228C919.845,1214.854,919.697,1214.859,919.547,1214.859z M887.81,1214.533
c-0.189,0-0.38-0.01-0.573-0.029c-10.89-1.038-21.739-3.025-32.242-5.903c-3.175-0.865-5.044-4.146-4.177-7.319
c0.869-3.17,4.149-5.036,7.323-4.171c9.845,2.697,20.013,4.557,30.224,5.534c3.278,0.313,5.683,3.222,5.37,6.494
C893.44,1212.224,890.843,1214.533,887.81,1214.533z M980.917,1199.415c-2.276,0-4.453-1.315-5.442-3.531
c-1.343-3.009,0.008-6.529,3.013-7.868c9.334-4.162,18.378-9.17,26.88-14.882c2.739-1.83,6.436-1.11,8.266,1.621
c1.834,2.734,1.109,6.436-1.622,8.27c-9.067,6.091-18.714,11.432-28.669,15.872
C982.55,1199.249,981.73,1199.415,980.917,1199.415z M826.765,1197.8c-0.852,0-1.72-0.182-2.537-0.57
c-9.867-4.65-19.407-10.194-28.35-16.482c-2.693-1.892-3.34-5.608-1.452-8.299c1.899-2.691,5.61-3.338,8.303-1.452
c8.388,5.896,17.329,11.096,26.578,15.455c2.977,1.403,4.251,4.951,2.849,7.93C831.137,1196.535,828.998,1197.8,826.765,1197.8z
M1033.444,1164.135c-1.573,0-3.135-0.618-4.311-1.844c-2.272-2.38-2.187-6.15,0.197-8.421
c7.409-7.079,14.254-14.833,20.341-23.055c1.959-2.643,5.685-3.199,8.335-1.241c2.643,1.955,3.199,5.687,1.241,8.333
c-6.49,8.764-13.789,17.036-21.69,24.58C1036.401,1163.587,1034.926,1164.135,1033.444,1164.135z M774.972,1161.421
c-1.527,0-3.046-0.579-4.208-1.734c-7.731-7.703-14.854-16.123-21.163-25.021c-1.905-2.685-1.272-6.403,1.411-8.304
c2.687-1.906,6.403-1.274,8.308,1.411c5.926,8.353,12.602,16.25,19.853,23.47c2.332,2.324,2.341,6.096,0.017,8.426
C778.026,1160.838,776.495,1161.421,774.972,1161.421z M1071.101,1113.27c-0.896,0-1.817-0.203-2.672-0.635
c-2.938-1.477-4.125-5.056-2.647-8c4.602-9.154,8.431-18.762,11.382-28.553c0.951-3.149,4.27-4.934,7.424-3.988
c3.148,0.952,4.936,4.274,3.986,7.428c-3.147,10.444-7.235,20.698-12.148,30.468
C1075.383,1112.068,1073.284,1113.27,1071.101,1113.27z M738.394,1109.794c-2.231,0-4.361-1.253-5.386-3.396
c-4.698-9.859-8.565-20.192-11.494-30.705c-0.886-3.172,0.971-6.453,4.141-7.338c3.172-0.888,6.455,0.969,7.336,4.141
c2.745,9.855,6.37,19.534,10.774,28.777c1.413,2.969,0.159,6.525-2.82,7.94C740.12,1109.605,739.249,1109.794,738.394,1109.794z
M1089.382,1052.678c-0.238,0-0.483-0.017-0.724-0.045c-3.268-0.394-5.594-3.363-5.202-6.629
c0.87-7.143,1.305-14.448,1.305-21.708c0-3.01-0.073-6.046-0.226-9.019c-0.16-3.289,2.374-6.083,5.654-6.245
c3.287-0.147,6.087,2.365,6.252,5.652c0.157,3.17,0.234,6.407,0.234,9.613c0,7.737-0.469,15.523-1.39,23.138
C1094.922,1050.458,1092.355,1052.678,1089.382,1052.678z M721.394,1048.841c-3.029,0-5.619-2.294-5.922-5.367
c-0.632-6.33-0.95-12.776-0.95-19.179c0-10.961,0.934-21.943,2.776-32.651c0.562-3.243,3.645-5.407,6.884-4.859
c3.243,0.56,5.415,3.641,4.859,6.886c-1.726,10.038-2.604,20.343-2.604,30.624c0,6.009,0.299,12.063,0.89,17.997
c0.328,3.274-2.063,6.191-5.336,6.519C721.792,1048.831,721.591,1048.841,721.394,1048.841z M1086.208,989.478
c-2.728,0-5.189-1.882-5.809-4.654c-2.247-9.984-5.376-19.837-9.306-29.288c-1.261-3.033,0.177-6.523,3.214-7.787
c3.033-1.257,6.525,0.176,7.791,3.214c4.191,10.079,7.531,20.595,9.924,31.248c0.724,3.21-1.297,6.401-4.504,7.121
C1087.077,989.428,1086.635,989.478,1086.208,989.478z M731.24,967.903c-0.668,0-1.343-0.112-2.007-0.353
c-3.101-1.106-4.713-4.515-3.602-7.615c3.675-10.27,8.274-20.3,13.669-29.808c1.625-2.863,5.261-3.864,8.123-2.243
c2.863,1.625,3.863,5.261,2.241,8.123c-5.06,8.911-9.372,18.314-12.816,27.941C735.975,966.386,733.689,967.903,731.24,967.903z
M1061.927,931.055c-1.967,0-3.893-0.976-5.029-2.764c-5.49-8.628-11.765-16.847-18.653-24.428
c-2.212-2.436-2.033-6.202,0.407-8.416c2.428-2.216,6.201-2.033,8.409,0.405c7.346,8.082,14.04,16.845,19.886,26.045
c1.772,2.778,0.951,6.461-1.826,8.226C1064.13,930.753,1063.023,931.055,1061.927,931.055z M762.466,912.844
c-1.332,0-2.67-0.444-3.778-1.353c-2.542-2.09-2.913-5.843-0.822-8.389c6.926-8.428,14.625-16.324,22.883-23.462
c2.494-2.149,6.253-1.877,8.405,0.612c2.147,2.492,1.873,6.255-0.612,8.405c-7.752,6.697-14.972,14.1-21.47,22.011
C765.895,912.104,764.184,912.844,762.466,912.844z M1019.363,884.21c-1.276,0-2.571-0.411-3.657-1.262
c-8.086-6.305-16.756-11.946-25.769-16.764c-2.905-1.552-3.997-5.16-2.449-8.063c1.548-2.9,5.154-3.996,8.067-2.446
c9.611,5.139,18.864,11.156,27.479,17.882c2.593,2.021,3.054,5.768,1.029,8.359
C1022.892,883.424,1021.136,884.21,1019.363,884.21z M810.368,871.479c-2.029,0-3.996-1.029-5.112-2.886
c-1.698-2.822-0.789-6.482,2.037-8.177c9.355-5.625,19.258-10.475,29.431-14.407c3.062-1.184,6.519,0.339,7.708,3.407
c1.187,3.066-0.343,6.521-3.413,7.708c-9.531,3.687-18.818,8.229-27.588,13.505
C812.468,871.206,811.407,871.479,810.368,871.479z M963.54,854.385c-0.615,0-1.245-0.096-1.865-0.299
c-9.706-3.199-19.772-5.574-29.902-7.054c-3.259-0.479-5.51-3.504-5.031-6.762c0.475-3.251,3.485-5.502,6.755-5.034
c10.809,1.589,21.547,4.119,31.908,7.532c3.123,1.029,4.824,4.396,3.794,7.523C968.375,852.798,966.047,854.385,963.54,854.385z
M869.365,848.675c-2.787,0-5.272-1.961-5.836-4.799c-0.641-3.228,1.454-6.361,4.685-7c10.669-2.121,21.63-3.326,32.572-3.598
c3.234-0.139,6.023,2.523,6.104,5.81c0.081,3.291-2.521,6.019-5.809,6.104c-10.267,0.251-20.547,1.386-30.547,3.369
C870.143,848.638,869.749,848.675,869.365,848.675z"
                                  className="color30CFE1 svgShape"
                                ></path>
                                <path
                                  fill="#fddfa3"
                                  d="M776.954,1290.688h86.917c11.905,0,21.561,9.652,21.561,21.561v86.913c0,11.91-9.656,21.561-21.561,21.561
h-86.917c-11.905,0-21.561-9.651-21.561-21.561v-86.913C755.393,1300.34,765.049,1290.688,776.954,1290.688z"
                                  className="colorFED791 svgShape"
                                ></path>
                                <path
                                  fill="#a9e3f7"
                                  d="M962.159 1290.688h86.917c11.909 0 21.561 9.652 21.561 21.561v86.913c0 11.91-9.652 21.561-21.561 21.561h-86.917c-11.905 0-21.561-9.651-21.561-21.561v-86.913C940.598 1300.34 950.254 1290.688 962.159 1290.688zM776.954 1481.226h86.917c11.905 0 21.561 9.654 21.561 21.559v86.917c0 11.905-9.656 21.561-21.561 21.561h-86.917c-11.905 0-21.561-9.656-21.561-21.561v-86.917C755.393 1490.88 765.049 1481.226 776.954 1481.226z"
                                  className="colorFEB7A3 svgShape"
                                ></path>
                                <path
                                  fill="#fddfa3"
                                  d="M962.159,1481.226h86.917c11.909,0,21.561,9.654,21.561,21.559v86.917
c0,11.905-9.652,21.561-21.561,21.561h-86.917c-11.905,0-21.561-9.656-21.561-21.561v-86.917
C940.598,1490.88,950.254,1481.226,962.159,1481.226z"
                                  className="colorFED791 svgShape"
                                ></path>
                                <rect
                                  width="989.714"
                                  height="370.236"
                                  x="1274.708"
                                  y="839.179"
                                  fill="#9fd7f9"
                                  className="colorACECF3 svgShape"
                                ></rect>
                                <path
                                  fill="var(--primary-bg-color)"
                                  d="M1540.217,1600.662h-31.802c-3.291,0-5.96-2.666-5.96-5.957s2.668-5.959,5.96-5.959h31.802
c3.293,0,5.959,2.668,5.959,5.959S1543.51,1600.662,1540.217,1600.662z M1476.608,1600.662h-31.81
c-3.291,0-5.955-2.666-5.955-5.957s2.664-5.959,5.955-5.959h31.81c3.291,0,5.955,2.668,5.955,5.959
S1479.899,1600.662,1476.608,1600.662z M1412.996,1600.662h-31.804c-3.288,0-5.96-2.666-5.96-5.957s2.672-5.959,5.96-5.959
h31.804c3.291,0,5.955,2.668,5.955,5.959S1416.287,1600.662,1412.996,1600.662z M1349.385,1600.662h-31.804
c-3.29,0-5.955-2.666-5.955-5.957s2.665-5.959,5.955-5.959h31.804c3.288,0,5.955,2.668,5.955,5.959
S1352.673,1600.662,1349.385,1600.662z M1285.775,1600.662h-17.026v-26.696c0-3.288,2.668-5.957,5.959-5.957
c3.288,0,5.959,2.668,5.959,5.957v14.781h5.108c3.288,0,5.958,2.668,5.958,5.959S1289.063,1600.662,1285.775,1600.662z
M1554.047,1582.684c-3.29,0-5.96-2.668-5.96-5.959v-31.806c0-3.288,2.67-5.954,5.96-5.954c3.288,0,5.955,2.666,5.955,5.954
v31.806C1560.002,1580.016,1557.336,1582.684,1554.047,1582.684z M1274.708,1548.118c-3.291,0-5.959-2.668-5.959-5.957v-31.806
c0-3.289,2.668-5.957,5.959-5.957c3.288,0,5.959,2.668,5.959,5.957v31.806
C1280.667,1545.45,1277.996,1548.118,1274.708,1548.118z M1554.047,1519.074c-3.29,0-5.96-2.666-5.96-5.957v-31.809
c0-3.289,2.67-5.957,5.96-5.957c3.288,0,5.955,2.668,5.955,5.957v31.809C1560.002,1516.408,1557.336,1519.074,1554.047,1519.074
z M1274.708,1484.506c-3.291,0-5.959-2.664-5.959-5.957v-31.804c0-3.289,2.668-5.955,5.959-5.955
c3.288,0,5.959,2.666,5.959,5.955v31.804C1280.667,1481.842,1277.996,1484.506,1274.708,1484.506z M1554.047,1455.463
c-3.29,0-5.96-2.668-5.96-5.959V1417.7c0-3.291,2.67-5.957,5.96-5.957c3.288,0,5.955,2.666,5.955,5.957v31.804
C1560.002,1452.795,1557.336,1455.463,1554.047,1455.463z M1274.708,1420.897c-3.291,0-5.959-2.668-5.959-5.957v-31.809
c0-3.287,2.668-5.957,5.959-5.957c3.288,0,5.959,2.67,5.959,5.957v31.809
C1280.667,1418.229,1277.996,1420.897,1274.708,1420.897z M1554.047,1391.85c-3.29,0-5.96-2.664-5.96-5.958v-31.804
c0-3.291,2.67-5.957,5.96-5.957c3.288,0,5.955,2.667,5.955,5.957v31.804C1560.002,1389.187,1557.336,1391.85,1554.047,1391.85z
M1274.708,1357.288c-3.291,0-5.959-2.667-5.959-5.958v-31.805c0-0.732,0.133-1.432,0.372-2.081
c-0.239-0.643-0.372-1.342-0.372-2.074c0-3.289,2.668-5.955,5.959-5.955h31.806c3.288,0,5.955,2.666,5.955,5.955
c0,3.29-2.667,5.958-5.955,5.958h-25.848v30.001C1280.667,1354.621,1277.996,1357.288,1274.708,1357.288z M1554.047,1328.241
c-3.29,0-5.96-2.668-5.96-5.958v-0.954h-18.937c-3.291,0-5.958-2.668-5.958-5.958c0-3.289,2.667-5.955,5.958-5.955h30.852
v12.868C1560.002,1325.573,1557.336,1328.241,1554.047,1328.241z M1497.348,1321.329h-31.81c-3.291,0-5.959-2.668-5.959-5.958
c0-3.289,2.668-5.955,5.959-5.955h31.81c3.291,0,5.955,2.666,5.955,5.955C1503.303,1318.66,1500.639,1321.329,1497.348,1321.329
z M1433.731,1321.329h-31.802c-3.288,0-5.958-2.668-5.958-5.958c0-3.289,2.67-5.955,5.958-5.955h31.802
c3.291,0,5.959,2.666,5.959,5.955C1439.69,1318.66,1437.022,1321.329,1433.731,1321.329z M1370.125,1321.329h-31.811
c-3.288,0-5.954-2.668-5.954-5.958c0-3.289,2.666-5.955,5.954-5.955h31.811c3.288,0,5.955,2.666,5.955,5.955
C1376.08,1318.66,1373.413,1321.329,1370.125,1321.329z"
                                  className="color30CFE1 svgShape"
                                ></path>
                                <path
                                  fill="#fdb8a9"
                                  d="M1895.403,1600.662H1863.6c-3.29,0-5.958-2.666-5.958-5.957s2.668-5.959,5.958-5.959h31.802
c3.288,0,5.959,2.668,5.959,5.959S1898.691,1600.662,1895.403,1600.662z M1831.79,1600.662h-31.807
c-3.29,0-5.954-2.666-5.954-5.957s2.664-5.959,5.954-5.959h31.807c3.294,0,5.959,2.668,5.959,5.959
S1835.084,1600.662,1831.79,1600.662z M1768.181,1600.662h-31.804c-3.295,0-5.961-2.666-5.961-5.957s2.667-5.959,5.961-5.959
h31.804c3.29,0,5.959,2.668,5.959,5.959S1771.472,1600.662,1768.181,1600.662z M1704.566,1600.662h-31.8
c-3.295,0-5.961-2.666-5.961-5.957s2.667-5.959,5.961-5.959h31.8c3.293,0,5.958,2.668,5.958,5.959
S1707.859,1600.662,1704.566,1600.662z M1640.96,1600.662h-17.021v-26.703c0-3.286,2.664-5.957,5.958-5.957
c3.29,0,5.955,2.67,5.955,5.957v14.787h5.108c3.288,0,5.954,2.668,5.954,5.959S1644.249,1600.662,1640.96,1600.662z
M1909.229,1582.684c-3.29,0-5.957-2.666-5.957-5.955v-31.807c0-3.291,2.667-5.958,5.957-5.958c3.293,0,5.959,2.667,5.959,5.958
v31.807C1915.188,1580.018,1912.521,1582.684,1909.229,1582.684z M1629.897,1548.114c-3.295,0-5.958-2.668-5.958-5.957v-31.806
c0-3.289,2.664-5.957,5.958-5.957c3.29,0,5.955,2.668,5.955,5.957v31.806C1635.852,1545.446,1633.188,1548.114,1629.897,1548.114
z M1909.229,1519.075c-3.29,0-5.957-2.667-5.957-5.957v-31.808c0-3.289,2.667-5.957,5.957-5.957c3.293,0,5.959,2.668,5.959,5.957
v31.808C1915.188,1516.408,1912.521,1519.075,1909.229,1519.075z M1629.897,1484.503c-3.295,0-5.958-2.666-5.958-5.957v-31.806
c0-3.289,2.664-5.955,5.958-5.955c3.29,0,5.955,2.666,5.955,5.955v31.806C1635.852,1481.837,1633.188,1484.503,1629.897,1484.503
z M1909.229,1455.463c-3.29,0-5.957-2.666-5.957-5.955v-31.806c0-3.293,2.667-5.957,5.957-5.957c3.293,0,5.959,2.664,5.959,5.957
v31.806C1915.188,1452.797,1912.521,1455.463,1909.229,1455.463z M1629.897,1420.893c-3.295,0-5.958-2.668-5.958-5.959v-31.804
c0-3.293,2.664-5.957,5.958-5.957c3.29,0,5.955,2.664,5.955,5.957v31.804C1635.852,1418.225,1633.188,1420.893,1629.897,1420.893
z M1909.229,1391.854c-3.29,0-5.957-2.668-5.957-5.957v-31.809c0-3.288,2.667-5.957,5.957-5.957c3.293,0,5.959,2.668,5.959,5.957
v31.809C1915.188,1389.187,1912.521,1391.854,1909.229,1391.854z M1629.897,1357.284c-3.295,0-5.958-2.668-5.958-5.958v-31.806
c0-0.731,0.129-1.428,0.371-2.079c-0.243-0.641-0.371-1.338-0.371-2.07c0-3.289,2.664-5.955,5.958-5.955h31.806
c3.288,0,5.958,2.666,5.958,5.955c0,3.29-2.67,5.958-5.958,5.958h-25.851v29.997
C1635.852,1354.616,1633.188,1357.284,1629.897,1357.284z M1909.229,1328.244c-3.29,0-5.957-2.67-5.957-5.961v-0.954h-18.932
c-3.29,0-5.958-2.668-5.958-5.958c0-3.289,2.668-5.955,5.958-5.955h30.848v12.868
C1915.188,1325.573,1912.521,1328.244,1909.229,1328.244z M1852.534,1321.329h-31.806c-3.291,0-5.955-2.668-5.955-5.958
c0-3.289,2.664-5.955,5.955-5.955h31.806c3.295,0,5.958,2.666,5.958,5.955C1858.492,1318.66,1855.828,1321.329,1852.534,1321.329
z M1788.921,1321.329h-31.803c-3.288,0-5.958-2.668-5.958-5.958c0-3.289,2.67-5.955,5.958-5.955h31.803
c3.29,0,5.958,2.666,5.958,5.955C1794.88,1318.66,1792.211,1321.329,1788.921,1321.329z M1725.311,1321.329h-31.807
c-3.288,0-5.954-2.668-5.954-5.958c0-3.289,2.666-5.955,5.954-5.955h31.807c3.292,0,5.958,2.666,5.958,5.955
C1731.269,1318.66,1728.603,1321.329,1725.311,1321.329z"
                                  className="colorFE8765 svgShape"
                                ></path>
                                <path
                                  fill="#ffda82"
                                  d="M2250.597,1595.994h-31.807c-3.295,0-5.958-2.667-5.958-5.957s2.664-5.957,5.958-5.957h31.807
c3.288,0,5.954,2.666,5.954,5.957S2253.885,1595.994,2250.597,1595.994z M2186.979,1595.994h-31.802
c-3.288,0-5.958-2.667-5.958-5.957s2.67-5.957,5.958-5.957h31.802c3.29,0,5.959,2.666,5.959,5.957
S2190.27,1595.994,2186.979,1595.994z M2123.371,1595.994h-31.804c-3.288,0-5.955-2.667-5.955-5.957s2.667-5.957,5.955-5.957
h31.804c3.29,0,5.955,2.666,5.955,5.957S2126.661,1595.994,2123.371,1595.994z M2059.76,1595.994h-31.804
c-3.291,0-5.959-2.667-5.959-5.957s2.668-5.957,5.959-5.957h31.804c3.289,0,5.96,2.666,5.96,5.957
S2063.049,1595.994,2059.76,1595.994z M1996.15,1595.994h-17.021v-26.697c0-3.29,2.664-5.956,5.954-5.956
c3.295,0,5.959,2.666,5.959,5.956v14.783h5.108c3.288,0,5.959,2.666,5.959,5.957S1999.438,1595.994,1996.15,1595.994z
M2264.419,1578.014c-3.291,0-5.955-2.666-5.955-5.957v-31.806c0-3.291,2.664-5.957,5.955-5.957
c3.288,0,5.958,2.666,5.958,5.957v31.806C2270.377,1575.348,2267.707,1578.014,2264.419,1578.014z M1985.082,1543.448
c-3.29,0-5.954-2.667-5.954-5.959v-31.804c0-3.291,2.664-5.955,5.954-5.955c3.295,0,5.959,2.665,5.959,5.955v31.804
C1991.042,1540.782,1988.377,1543.448,1985.082,1543.448z M2264.419,1514.407c-3.291,0-5.955-2.668-5.955-5.959v-31.806
c0-3.292,2.664-5.958,5.955-5.958c3.288,0,5.958,2.666,5.958,5.958v31.806
C2270.377,1511.739,2267.707,1514.407,2264.419,1514.407z M1985.082,1479.837c-3.29,0-5.954-2.666-5.954-5.957v-31.805
c0-3.295,2.664-5.958,5.954-5.958c3.295,0,5.959,2.664,5.959,5.958v31.805
C1991.042,1477.171,1988.377,1479.837,1985.082,1479.837z M2264.419,1450.793c-3.291,0-5.955-2.667-5.955-5.957v-31.807
c0-3.288,2.664-5.957,5.955-5.957c3.288,0,5.958,2.668,5.958,5.957v31.807
C2270.377,1448.126,2267.707,1450.793,2264.419,1450.793z M1985.082,1416.225c-3.29,0-5.954-2.664-5.954-5.957v-31.804
c0-3.291,2.664-5.959,5.954-5.959c3.295,0,5.959,2.668,5.959,5.959v31.804
C1991.042,1413.561,1988.377,1416.225,1985.082,1416.225z M2264.419,1387.182c-3.291,0-5.955-2.668-5.955-5.955v-31.809
c0-3.293,2.664-5.957,5.955-5.957c3.288,0,5.958,2.664,5.958,5.957v31.809
C2270.377,1384.514,2267.707,1387.182,2264.419,1387.182z M1985.082,1352.616c-3.29,0-5.954-2.668-5.954-5.957v-31.806
c0-0.729,0.128-1.43,0.371-2.079c-0.243-0.642-0.371-1.343-0.371-2.075c0-3.289,2.664-5.958,5.954-5.958h31.811
c3.288,0,5.955,2.67,5.955,5.958c0,3.293-2.667,5.957-5.955,5.957h-25.851v30.003
C1991.042,1349.948,1988.377,1352.616,1985.082,1352.616z M2264.419,1323.571c-3.291,0-5.955-2.666-5.955-5.957v-0.959h-18.935
c-3.295,0-5.959-2.664-5.959-5.957c0-3.289,2.664-5.958,5.959-5.958h30.848v12.874
C2270.377,1320.905,2267.707,1323.571,2264.419,1323.571z M2207.723,1316.656h-31.806c-3.291,0-5.958-2.664-5.958-5.957
c0-3.289,2.667-5.958,5.958-5.958h31.806c3.29,0,5.959,2.67,5.959,5.958C2213.682,1313.992,2211.013,1316.656,2207.723,1316.656
z M2144.111,1316.656h-31.802c-3.293,0-5.958-2.664-5.958-5.957c0-3.289,2.666-5.958,5.958-5.958h31.802
c3.29,0,5.954,2.67,5.954,5.958C2150.064,1313.992,2147.401,1316.656,2144.111,1316.656z M2080.5,1316.656h-31.806
c-3.29,0-5.959-2.664-5.959-5.957c0-3.289,2.67-5.958,5.959-5.958h31.806c3.288,0,5.958,2.67,5.958,5.958
C2086.458,1313.992,2083.788,1316.656,2080.5,1316.656z"
                                  className="colorFEBD48 svgShape"
                                ></path>
                                <path
                                  fill="#a9e3f7"
                                  d="M1831.138,1438.747h-45.284v-45.282c0-8.999-7.295-16.291-16.291-16.291
c-9,0-16.289,7.292-16.289,16.291v45.282h-45.286c-8.996,0-16.289,7.291-16.289,16.293c0,8.996,7.293,16.292,16.289,16.292
h45.286v45.279c0,8.996,7.29,16.294,16.289,16.294c8.996,0,16.291-7.298,16.291-16.294v-45.279h45.284
c8.996,0,16.291-7.295,16.291-16.292C1847.429,1446.037,1840.134,1438.747,1831.138,1438.747z"
                                  className="colorFEB7A3 svgShape"
                                ></path>
                                <rect
                                  width="235.989"
                                  height="231.776"
                                  x="1295.779"
                                  y="1338.848"
                                  fill="#9fd7f9"
                                  className="colorACECF3 svgShape"
                                ></rect>
                                <path
                                  fill="#141414"
                                  d="M1322.046 1499.004l41.782-57.45c2.228-3.066 6.839-2.953 8.913.224l35.593 54.43c2.22 3.402 7.251 3.238 9.249-.296l8.022-14.184c2.068-3.67 7.357-3.67 9.428 0l6.816 12.044c2.237 3.969 8.078 3.563 9.751-.676l18.713-47.434c1.853-4.693 8.546-4.532 10.173.249l18.495 54.542c1.19 3.514-1.422 7.156-5.131 7.156h-167.423C1321.998 1507.608 1319.44 1502.587 1322.046 1499.004zM1403.576 1422.472c0-8.725 7.071-15.799 15.798-15.799 8.728 0 15.795 7.074 15.795 15.799 0 8.727-7.067 15.798-15.795 15.798C1410.647 1438.27 1403.576 1431.198 1403.576 1422.472zM1370.102 1415.693c-.29 0-.577.027-.855.083.021-.214.034-.43.034-.648 0-3.477-2.822-6.294-6.291-6.294-2.969 0-5.454 2.052-6.123 4.811-.661-.616-1.551-.994-2.533-.994-1.367 0-2.56.739-3.208 1.832-.625-.27-1.311-.417-2.036-.417-2.848 0-5.151 2.307-5.151 5.15 0 2.847 2.303 5.151 5.151 5.151 1.206 0 2.314-.413 3.191-1.11 1.696 1.415 4.505 2.336 7.687 2.336 2.982 0 5.64-.812 7.353-2.075.76.621 1.727.992 2.78.992 2.436 0 4.411-1.974 4.411-4.412C1374.513 1417.667 1372.538 1415.693 1370.102 1415.693zM1479.82 1415.693c-.295 0-.58.027-.859.083.02-.214.033-.43.033-.648 0-3.477-2.813-6.294-6.295-6.294-2.967 0-5.452 2.052-6.118 4.811-.662-.616-1.554-.994-2.533-.994-1.366 0-2.561.739-3.208 1.832-.625-.27-1.313-.417-2.037-.417-2.847 0-5.15 2.307-5.15 5.15 0 2.847 2.303 5.151 5.15 5.151 1.207 0 2.315-.413 3.197-1.11 1.691 1.415 4.501 2.336 7.684 2.336 2.981 0 5.643-.812 7.353-2.075.757.621 1.728.992 2.784.992 2.436 0 4.407-1.974 4.407-4.412C1484.227 1417.667 1482.256 1415.693 1479.82 1415.693z"
                                  className="colorFFF svgShape"
                                ></path>
                                <rect
                                  width="989.711"
                                  height="370.242"
                                  x="1341.775"
                                  y="789.395"
                                  fill="var(--primary-bg-color)"
                                  className="color30CFE1 svgShape"
                                ></rect>
                                <polygon
                                  fill="#f7f7f7"
                                  points="2309.625 789.395 2309.625 1137.677 1341.775 1137.677 1341.775 1159.637 2331.486 1159.637 2331.486 789.395"
                                  className="colorCCC svgShape"
                                ></polygon>
                                <rect
                                  width="60.391"
                                  height="60.127"
                                  x="1851.639"
                                  y="1024.621"
                                  fill="#141414"
                                  className="colorFFF svgShape"
                                ></rect>
                                <rect
                                  width="60.397"
                                  height="168.592"
                                  x="1940.45"
                                  y="916.155"
                                  fill="#141414"
                                  className="colorFFF svgShape"
                                ></rect>
                                <rect
                                  width="60.392"
                                  height="123.79"
                                  x="2029.268"
                                  y="960.958"
                                  fill="#141414"
                                  className="colorFFF svgShape"
                                ></rect>
                                <rect
                                  width="60.39"
                                  height="91.367"
                                  x="2118.08"
                                  y="993.38"
                                  fill="#141414"
                                  className="colorFFF svgShape"
                                ></rect>
                                <rect
                                  width="60.39"
                                  height="220.464"
                                  x="2206.897"
                                  y="864.284"
                                  fill="#141414"
                                  className="colorFFF svgShape"
                                ></rect>
                                <g fill="#333232" className="color000 svgShape">
                                  <path
                                    fill="#141414"
                                    d="M1651.546 1043.312c-21.97 36.508-62.088 60.938-107.942 60.938-33.487 0-63.937-13.027-86.473-34.29l86.473-90.932L1651.546 1043.312zM1672.078 969.699h-125.761V844.48C1615.768 844.48 1672.078 900.539 1672.078 969.699zM1706.29 983.978c-.052 23.397-6.544 45.28-17.823 63.998l-107.942-64.285h124.734L1706.29 983.978zM1528.704 844.48v125.219l-86.472 90.929c-24.203-22.816-39.301-55.121-39.301-90.929C1402.931 900.539 1459.237 844.48 1528.704 844.48z"
                                    className="colorFFF svgShape"
                                  ></path>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <rect
                                    width="295.368"
                                    height="280.344"
                                    x="2104.289"
                                    y="1423.169"
                                    fill="#ffda82"
                                    className="colorFEBD48 svgShape"
                                  ></rect>
                                  <polygon
                                    fill="#f7f7f7"
                                    points="2381.146 1423.169 2381.146 1682.522 2104.289 1682.522 2104.289 1703.509 2399.657 1703.509 2399.657 1423.169"
                                    className="colorCCC svgShape"
                                  ></polygon>
                                  <path
                                    fill="#141414"
                                    d="M2143.957 1601.6l50.475-69.401c2.693-3.706 8.26-3.569 10.773.268l42.996 65.756c2.682 4.106 8.761 3.911 11.172-.359l9.685-17.136c2.507-4.434 8.891-4.434 11.397 0l8.227 14.55c2.707 4.797 9.761 4.305 11.785-.817l22.604-57.301c2.238-5.672 10.331-5.473 12.284.299l22.35 65.889c1.436 4.248-1.72 8.647-6.199 8.647h-202.258C2143.903 1611.994 2140.808 1605.926 2143.957 1601.6zM2242.451 1509.146c0-10.542 8.543-19.086 19.087-19.086 10.54 0 19.084 8.544 19.084 19.086 0 10.538-8.544 19.082-19.084 19.082C2250.994 1528.228 2242.451 1519.684 2242.451 1509.146zM2202.017 1500.955c-.356 0-.703.033-1.037.104.027-.26.04-.523.04-.787 0-4.201-3.405-7.606-7.606-7.606-3.579 0-6.587 2.48-7.392 5.82-.801-.747-1.874-1.203-3.058-1.203-1.652 0-3.092.89-3.876 2.214-.753-.328-1.587-.504-2.461-.504-3.436 0-6.224 2.785-6.224 6.222 0 3.436 2.789 6.223 6.224 6.223 1.461 0 2.799-.504 3.86-1.343 2.046 1.706 5.441 2.822 9.282 2.822 3.606 0 6.817-.98 8.887-2.505.915.747 2.087 1.193 3.363 1.193 2.942 0 5.324-2.383 5.324-5.324C2207.341 1503.34 2204.959 1500.955 2202.017 1500.955zM2334.557 1500.955c-.355 0-.702.033-1.035.104.025-.26.039-.523.039-.787 0-4.201-3.404-7.606-7.602-7.606-3.585 0-6.587 2.48-7.392 5.82-.805-.747-1.877-1.203-3.058-1.203-1.651 0-3.098.89-3.876 2.214-.757-.328-1.587-.504-2.464-.504-3.436 0-6.224 2.785-6.224 6.222 0 3.436 2.788 6.223 6.224 6.223 1.46 0 2.801-.504 3.859-1.343 2.046 1.706 5.441 2.822 9.288 2.822 3.602 0 6.809-.98 8.879-2.505.917.747 2.088 1.193 3.364 1.193 2.944 0 5.326-2.383 5.326-5.324C2339.882 1503.34 2337.5 1500.955 2334.557 1500.955z"
                                    className="colorFFF svgShape"
                                  ></path>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <circle
                                    cx="486.59"
                                    cy="1041.64"
                                    r="182.266"
                                    fill="var(--primary-bg-color)"
                                    className="color30CFE1 svgShape"
                                  ></circle>
                                  <path
                                    fill="#f7f7f7"
                                    d="M536.466,866.338c64.295,28.161,109.235,92.319,109.235,167.003
c0,100.664-81.601,182.265-182.267,182.265c-17.299,0-34.016-2.461-49.872-6.966c22.362,9.795,47.048,15.265,73.028,15.265
c100.662,0,182.265-81.603,182.265-182.265C668.856,958.277,612.872,888.04,536.466,866.338z"
                                    className="colorCCC svgShape"
                                  ></path>
                                  <circle
                                    cx="490.441"
                                    cy="1002.971"
                                    r="61.755"
                                    fill="#141414"
                                    className="colorFFF svgShape"
                                  ></circle>
                                  <path
                                    fill="#141414"
                                    d="M547.079,1065.224c-4.971-3.88-11.913-3.747-16.8,0.241c-10.629,8.67-24.221,13.897-39.039,13.897
c-14.334,0-27.528-4.882-37.991-13.092c-4.979-3.907-12.038-3.828-16.847,0.293c-12.457,10.683-20.041,26.088-20.041,46.112
v1.805c0,10.355,8.393,18.753,18.75,18.753H550.51c10.357,0,18.75-8.398,18.75-18.753v-1.805
C569.26,1091.796,560.785,1075.932,547.079,1065.224z"
                                    className="colorFFF svgShape"
                                  ></path>
                                  <g
                                    fill="#333232"
                                    className="color000 svgShape"
                                  >
                                    <path
                                      fill="#141414"
                                      d="M486.591,1183.665c-78.315,0-142.025-63.71-142.025-142.025c0-78.317,63.71-142.025,142.025-142.025
c78.311,0,142.025,63.708,142.025,142.025C628.616,1119.955,564.901,1183.665,486.591,1183.665z M486.591,909.147
c-73.057,0-132.493,59.436-132.493,132.493c0,73.059,59.436,132.493,132.493,132.493c73.057,0,132.489-59.434,132.489-132.493
C619.08,968.583,559.648,909.147,486.591,909.147z"
                                      className="colorFFF svgShape"
                                    ></path>
                                  </g>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <path
                                    fill="#ffda82"
                                    d="M1235.714,425.626h-136.715c-9.718,0-17.595,7.878-17.595,17.598v136.711
c0,9.721,7.876,17.6,17.595,17.6h136.715c9.718,0,17.595-7.879,17.595-17.6V443.224
C1253.309,433.504,1245.432,425.626,1235.714,425.626z"
                                    className="colorFEBD48 svgShape"
                                  ></path>
                                  <path
                                    fill="#f7f7f7"
                                    d="M1239.411,426.021c1.775,2.749,2.818,6.021,2.818,9.54v136.715c0,9.718-7.876,17.596-17.595,17.596
H1087.92c-1.266,0-2.502-0.139-3.694-0.396c3.138,4.847,8.574,8.061,14.773,8.061h136.715c9.718,0,17.595-7.879,17.595-17.6
V443.224C1253.309,434.772,1247.354,427.717,1239.411,426.021z"
                                    className="colorCCC svgShape"
                                  ></path>
                                  <g
                                    fill="#333232"
                                    className="color000 svgShape"
                                  >
                                    <polygon
                                      fill="#141414"
                                      points="1217.071 487.16 1203.271 480.807 1203.364 489.94 1122.51 489.94 1122.51 497.644 1203.443 497.644 1203.532 506.781 1217.199 500.148 1230.868 493.517"
                                      className="colorFFF svgShape"
                                    ></polygon>
                                    <polygon
                                      fill="#141414"
                                      points="1117.647 522.738 1131.442 516.383 1131.353 525.518 1212.203 525.518 1212.203 533.222 1131.274 533.222 1131.181 542.357 1117.514 535.724 1103.845 529.095"
                                      className="colorFFF svgShape"
                                    ></polygon>
                                  </g>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <path
                                    fill="#fdb8a9"
                                    d="M650.484,1372.908h-142.73c-10.148,0-18.374,8.226-18.374,18.374v142.732
c0,10.146,8.226,18.37,18.374,18.37h142.73c10.147,0,18.372-8.224,18.372-18.37v-142.732
C668.856,1381.134,660.631,1372.908,650.484,1372.908z"
                                    className="colorFE8765 svgShape"
                                  ></path>
                                  <path
                                    fill="#f7f7f7"
                                    d="M654.341,1373.32c1.859,2.874,2.948,6.289,2.948,9.963v142.728c0,10.148-8.227,18.375-18.376,18.375
H496.185c-1.324,0-2.612-0.145-3.857-0.411c3.272,5.058,8.952,8.409,15.426,8.409h142.73c10.147,0,18.372-8.224,18.372-18.37
v-142.732C668.856,1382.46,662.631,1375.094,654.341,1373.32z"
                                    className="colorCCC svgShape"
                                  ></path>
                                  <g
                                    fill="#333232"
                                    className="color000 svgShape"
                                  >
                                    <polygon
                                      fill="#141414"
                                      points="542.591 1488.267 533.203 1488.267 506.058 1461.123 530.982 1436.205 540.375 1436.205 515.448 1461.123"
                                      className="colorFFF svgShape"
                                    ></polygon>
                                    <polygon
                                      fill="#141414"
                                      points="653.147 1461.123 626.009 1488.267 616.615 1488.267 643.759 1461.123 618.837 1436.205 628.225 1436.205"
                                      className="colorFFF svgShape"
                                    ></polygon>
                                    <polygon
                                      fill="#141414"
                                      points="600.343 1436.205 566.771 1488.267 558.863 1488.267 592.442 1436.205"
                                      className="colorFFF svgShape"
                                    ></polygon>
                                  </g>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <path
                                    fill="#fdb8a9"
                                    d="M2564.452,1146.78H2430.38c-9.536,0-17.262,7.724-17.262,17.255v134.075
c0,9.533,7.726,17.26,17.262,17.26h134.072c9.532,0,17.258-7.727,17.258-17.26v-134.075
C2581.71,1154.504,2573.984,1146.78,2564.452,1146.78z"
                                    className="colorFE8765 svgShape"
                                  ></path>
                                  <path
                                    fill="#f7f7f7"
                                    d="M2568.075,1147.163c1.747,2.697,2.768,5.907,2.768,9.357v134.076c0,9.531-7.724,17.258-17.256,17.258
H2419.51c-1.241,0-2.451-0.137-3.618-0.388c3.071,4.753,8.405,7.903,14.488,7.903h134.072c9.532,0,17.258-7.727,17.258-17.26
v-134.075C2581.71,1155.749,2575.866,1148.829,2568.075,1147.163z"
                                    className="colorCCC svgShape"
                                  ></path>
                                  <path
                                    fill="#141414"
                                    d="M2468.608,1281.375c-3.276,0-6.43-1.375-8.642-3.772c-2.021-2.189-3.004-4.963-2.776-7.819
c0.249-3.094,0.641-6.092,1.016-8.989c1.071-8.191,1.996-15.259-0.821-20.368c-0.478-0.871-3.199-3.454-5.44-5.317l-2.315-1.929
l2.349-1.888c2.486-1.992,4.983-4.411,5.352-5.17c3.008-6.336,1.604-13.343,0.478-18.974c-0.268-1.367-0.529-2.654-0.693-3.81
c-0.388-2.745,0.457-5.473,2.376-7.681c2.224-2.562,5.599-4.089,9.031-4.089v4.93c-1.996,0-4.025,0.917-5.309,2.393
c-0.689,0.788-1.45,2.081-1.214,3.757c0.146,1.017,0.389,2.241,0.648,3.536c1.199,6.008,2.846,14.239-0.863,22.053
c-0.694,1.462-2.752,3.479-4.47,5.006c1.66,1.504,3.647,3.457,4.388,4.807c3.598,6.52,2.53,14.712,1.394,23.385
c-0.371,2.836-0.753,5.768-0.991,8.741c-0.117,1.471,0.409,2.919,1.483,4.081c1.261,1.374,3.14,2.188,5.019,2.188V1281.375z"
                                    className="colorFFF svgShape"
                                  ></path>
                                  <g
                                    fill="#333232"
                                    className="color000 svgShape"
                                  >
                                    <path
                                      fill="#141414"
                                      d="M2523.637,1281.375v-4.93c1.88,0,3.756-0.815,5.023-2.188c1.068-1.162,1.599-2.61,1.479-4.081
c-0.24-2.973-0.62-5.905-0.991-8.741c-1.134-8.673-2.204-16.865,1.39-23.385c0.743-1.351,2.734-3.303,4.394-4.807
c-1.722-1.527-3.778-3.544-4.47-5.006c-3.71-7.813-2.063-16.044-0.865-22.053c0.261-1.295,0.506-2.519,0.651-3.536
c0.234-1.676-0.531-2.969-1.216-3.757c-1.282-1.475-3.315-2.393-5.307-2.393v-4.93c3.43,0,6.805,1.527,9.029,4.089
c1.922,2.208,2.76,4.937,2.374,7.681c-0.163,1.156-0.423,2.442-0.693,3.81c-1.129,5.63-2.527,12.637,0.479,18.974
c0.367,0.759,2.865,3.179,5.351,5.17l2.349,1.884l-2.313,1.933c-2.243,1.868-4.961,4.451-5.442,5.317
c-2.818,5.109-1.89,12.177-0.822,20.368c0.378,2.897,0.772,5.895,1.015,8.989c0.231,2.856-0.757,5.63-2.772,7.819
C2530.063,1279.999,2526.915,1281.375,2523.637,1281.375z"
                                      className="colorFFF svgShape"
                                    ></path>
                                  </g>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <path
                                    fill="#fdb8a9"
                                    d="M2203.536,310.007h-148.417c-10.549,0-19.1,8.552-19.1,19.104v148.413
c0,10.552,8.552,19.107,19.1,19.107h148.417c10.552,0,19.105-8.555,19.105-19.107V329.111
C2222.641,318.559,2214.088,310.007,2203.536,310.007z"
                                    className="colorFE8765 svgShape"
                                  ></path>
                                  <path
                                    fill="#f7f7f7"
                                    d="M2207.548,310.436c1.934,2.986,3.063,6.534,3.063,10.355v148.416c0,10.55-8.552,19.106-19.105,19.106
h-148.413c-1.378,0-2.716-0.153-4.012-0.43c3.406,5.26,9.309,8.748,16.038,8.748h148.417c10.552,0,19.105-8.555,19.105-19.107
V329.111C2222.641,319.935,2216.172,312.281,2207.548,310.436z"
                                    className="colorCCC svgShape"
                                  ></path>
                                  <g
                                    fill="#333232"
                                    className="color000 svgShape"
                                  >
                                    <polygon
                                      fill="#141414"
                                      points="2103.604 456.355 2082.415 456.355 2082.415 349.422 2103.604 349.422 2103.604 355.88 2088.875 355.88 2088.875 449.898 2103.604 449.898"
                                      className="colorFFF svgShape"
                                    ></polygon>
                                    <polygon
                                      fill="#141414"
                                      points="2181.295 456.355 2160.107 456.355 2160.107 449.898 2174.837 449.898 2174.837 355.88 2160.107 355.88 2160.107 349.422 2181.295 349.422"
                                      className="colorFFF svgShape"
                                    ></polygon>
                                  </g>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <path
                                    fill="#a9e3f7"
                                    d="M2526.903,806.962c3.054-30.827,30.516-53.345,61.347-50.291c30.827,3.05,53.345,30.518,50.291,61.345
c-3.05,30.827-30.518,53.345-61.344,50.292C2546.364,865.255,2523.853,837.789,2526.903,806.962z"
                                    className="colorFEB7A3 svgShape"
                                  ></path>
                                  <polygon
                                    fill="#141414"
                                    points="2614.811 796.872 2606.645 793.111 2606.696 798.518 2558.828 798.518 2558.828 803.078 2606.744 803.078 2606.798 808.487 2614.894 804.562 2622.981 800.634"
                                    className="colorFFF svgShape"
                                  ></polygon>
                                  <polygon
                                    fill="#141414"
                                    points="2555.943 817.938 2564.116 814.171 2564.063 819.581 2611.931 819.581 2611.931 824.143 2564.017 824.143 2563.96 829.552 2555.866 825.626 2547.777 821.701"
                                    className="colorFFF svgShape"
                                  ></polygon>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <path
                                    fill="#a9e3f7"
                                    d="M1674.601,231.991c3.05-30.83,30.517-53.345,61.346-50.293c30.827,3.052,53.343,30.518,50.293,61.347
c-3.054,30.827-30.524,53.344-61.344,50.292C1694.064,290.284,1671.547,262.818,1674.601,231.991z"
                                    className="colorFEB7A3 svgShape"
                                  ></path>
                                  <polygon
                                    fill="#141414"
                                    points="1762.509 221.901 1754.338 218.138 1754.396 223.546 1706.523 223.546 1706.523 228.107 1754.442 228.107 1754.492 233.516 1762.588 229.588 1770.679 225.663"
                                    className="colorFFF svgShape"
                                  ></polygon>
                                  <polygon
                                    fill="#141414"
                                    points="1703.643 242.967 1711.81 239.203 1711.757 244.61 1759.627 244.61 1759.627 249.172 1711.71 249.172 1711.66 254.581 1703.564 250.656 1695.473 246.728"
                                    className="colorFFF svgShape"
                                  ></polygon>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <path
                                    fill="#a9e3f7"
                                    d="M268.979,690.179c3.054-30.83,30.52-53.345,61.349-50.293c30.827,3.054,53.344,30.518,50.29,61.345
c-3.05,30.829-30.518,53.346-61.343,50.292C288.445,748.474,265.926,721.008,268.979,690.179z"
                                    className="colorFEB7A3 svgShape"
                                  ></path>
                                  <polygon
                                    fill="#141414"
                                    points="356.894 680.087 348.724 676.326 348.78 681.737 300.906 681.737 300.906 686.295 348.821 686.295 348.877 691.704 356.967 687.778 365.061 683.853"
                                    className="colorFFF svgShape"
                                  ></polygon>
                                  <polygon
                                    fill="#141414"
                                    points="298.027 701.152 306.193 697.389 306.139 702.798 354.012 702.798 354.012 707.36 306.095 707.36 306.043 712.767 297.95 708.846 289.856 704.916"
                                    className="colorFFF svgShape"
                                  ></polygon>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <path
                                    fill="#fddfa3"
                                    d="M807.592,258.104c3.054-30.83,30.522-53.349,61.347-50.293c30.831,3.05,53.347,30.516,50.296,61.345
c-3.056,30.829-30.524,53.344-61.349,50.292C827.056,316.399,804.542,288.931,807.592,258.104z"
                                    className="colorFED791 svgShape"
                                  ></path>
                                  <path
                                    fill="#141414"
                                    d="M847.299 283.199c-.494 0-.987-.189-1.369-.567l-15.735-15.731c-.363-.367-.569-.86-.569-1.373 0-.515.205-1.008.569-1.371l15.735-15.733c.757-.755 1.983-.755 2.743 0 .755.759.755 1.983 0 2.743l-14.361 14.362 14.361 14.361c.755.757.755 1.986 0 2.743C848.295 283.01 847.795 283.199 847.299 283.199zM881.881 283.199c.492 0 .988-.189 1.368-.567l15.735-15.731c.364-.367.569-.86.569-1.373 0-.515-.205-1.008-.569-1.371l-15.735-15.733c-.758-.755-1.984-.755-2.741 0-.758.759-.758 1.983 0 2.743l14.359 14.362-14.359 14.361c-.758.757-.758 1.986 0 2.743C880.884 283.01 881.384 283.199 881.881 283.199zM856.808 283.199c-.255 0-.521-.052-.774-.16-.983-.428-1.429-1.571-.999-2.552l13.722-31.468c.427-.982 1.569-1.43 2.55-1 .984.427 1.434 1.568 1.004 2.55l-13.722 31.467C858.267 282.767 857.557 283.199 856.808 283.199z"
                                    className="colorFFF svgShape"
                                  ></path>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <path
                                    fill="#fddfa3"
                                    d="M2763.922,1230.943c3.05-30.827,30.516-53.344,61.343-50.291c30.831,3.052,53.344,30.518,50.294,61.345
c-3.054,30.831-30.518,53.347-61.349,50.295C2783.383,1289.238,2760.865,1261.774,2763.922,1230.943z"
                                    className="colorFED791 svgShape"
                                  ></path>
                                  <path
                                    fill="#141414"
                                    d="M2803.628 1256.042c-.501 0-.994-.189-1.373-.568l-15.735-15.733c-.358-.363-.564-.857-.564-1.369 0-.517.206-1.01.564-1.372l15.735-15.735c.755-.757 1.983-.757 2.741 0 .757.756.757 1.986 0 2.741l-14.36 14.366 14.36 14.36c.757.757.757 1.987 0 2.743C2804.615 1255.853 2804.122 1256.042 2803.628 1256.042zM2838.2 1256.042c.5 0 .998-.189 1.374-.568l15.733-15.733c.366-.363.564-.857.564-1.369 0-.517-.198-1.01-.564-1.372l-15.733-15.735c-.758-.757-1.986-.757-2.737 0-.763.756-.763 1.986 0 2.741l14.36 14.366-14.36 14.36c-.763.757-.763 1.987 0 2.743C2837.213 1255.853 2837.709 1256.042 2838.2 1256.042zM2813.13 1256.042c-.254 0-.516-.052-.771-.16-.979-.432-1.429-1.575-1.002-2.554l13.725-31.466c.427-.983 1.569-1.434 2.552-1.006.979.432 1.43 1.575 1.002 2.554l-13.725 31.468C2814.595 1255.605 2813.882 1256.042 2813.13 1256.042z"
                                    className="colorFFF svgShape"
                                  ></path>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <path
                                    fill="#fddfa3"
                                    d="M2343.841,303.845c3.05-30.827,30.511-53.342,61.343-50.293c30.831,3.054,53.345,30.521,50.295,61.348
c-3.054,30.829-30.518,53.347-61.349,50.292C2363.302,362.14,2340.785,334.674,2343.841,303.845z"
                                    className="colorFED791 svgShape"
                                  ></path>
                                  <path
                                    fill="#141414"
                                    d="M2383.548 328.943c-.501 0-.998-.187-1.373-.569l-15.735-15.73c-.363-.363-.568-.859-.568-1.374 0-.512.205-1.006.568-1.369l15.735-15.733c.755-.757 1.983-.757 2.741 0 .757.757.757 1.983 0 2.741l-14.36 14.361 14.36 14.36c.757.759.757 1.986 0 2.745C2384.536 328.756 2384.042 328.943 2383.548 328.943zM2418.124 328.943c.491 0 .994-.187 1.369-.569l15.733-15.73c.365-.363.568-.859.568-1.374 0-.512-.203-1.006-.568-1.369l-15.733-15.733c-.753-.757-1.986-.757-2.743 0-.758.757-.758 1.983 0 2.741l14.361 14.361-14.361 14.36c-.758.759-.758 1.986 0 2.745C2417.126 328.756 2417.628 328.943 2418.124 328.943zM2393.051 328.943c-.255 0-.521-.052-.772-.164-.979-.427-1.429-1.571-1.006-2.552l13.729-31.466c.427-.981 1.569-1.432 2.552-1 .98.428 1.43 1.569 1.002 2.552l-13.724 31.466C2394.515 328.507 2393.801 328.943 2393.051 328.943z"
                                    className="colorFFF svgShape"
                                  ></path>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <path
                                    fill="#9fd7f9"
                                    d="M530.315 354.216v62.769h-21.945c-10.344 0-18.733-8.389-18.733-18.729V372.97c0-10.341 8.389-18.754 18.733-18.754H530.315zM609.762 415.576c-7.527 8.534-71.173 1.409-71.173 1.409v-62.769c0 0 11.673-11.32 14.791-21.731 3.081-10.345 5.841-25.283 13.822-23.163 8.008 2.121 11.538 31.026 1.668 44.895 0 0 31.101-8.413 39.537.786C616.414 363.702 616.82 407.594 609.762 415.576z"
                                    className="colorACECF3 svgShape"
                                  ></path>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <path
                                    fill="#9fd7f9"
                                    d="M2685.553 567.07v62.768h21.943c10.344 0 18.735-8.386 18.735-18.729v-25.285c0-10.341-8.391-18.754-18.735-18.754H2685.553zM2606.106 628.431c7.529 8.534 71.175 1.407 71.175 1.407V567.07c0 0-11.675-11.318-14.793-21.733-3.081-10.338-5.843-25.279-13.824-23.159-8.005 2.121-11.536 31.024-1.665 44.892 0 0-31.101-8.409-39.537.789C2599.454 576.558 2599.047 620.452 2606.106 628.431z"
                                    className="colorACECF3 svgShape"
                                  ></path>
                                </g>
                                <g fill="#333232" className="color000 svgShape">
                                  <path
                                    fill="#9fd7f9"
                                    d="M1481.532 315.953v62.768h21.945c10.34 0 18.729-8.392 18.729-18.731v-25.281c0-10.343-8.389-18.756-18.729-18.756H1481.532zM1402.084 377.317c7.529 8.529 71.179 1.404 71.179 1.404v-62.768c0 0-11.678-11.318-14.801-21.731-3.071-10.343-5.838-25.286-13.822-23.163-8.004 2.118-11.533 31.024-1.668 44.894 0 0-31.097-8.413-39.533.787C1395.43 325.437 1395.03 369.331 1402.084 377.317z"
                                    className="colorACECF3 svgShape"
                                  ></path>
                                </g>
                                <path
                                  fill="#a9e3f7"
                                  d="M485.591 763.097l-3.629-18.516c-.06-.303-.291-.543-.596-.605l-18.432-4.004c-.826-.181-.813-1.359.012-1.523l18.515-3.623c.303-.061.544-.293.606-.598l4.004-18.437c.18-.822 1.361-.809 1.519.017l3.625 18.515c.06.303.295.544.597.61l18.439 4.004c.822.177.809 1.355-.017 1.519l-18.515 3.625c-.303.058-.544.292-.612.595l-4 18.437C486.929 763.936 485.748 763.923 485.591 763.097zM1900.359 405.152l-3.629-18.515c-.058-.303-.29-.54-.594-.606l-18.436-4.008c-.822-.176-.809-1.353.016-1.517l18.515-3.627c.303-.056.544-.292.606-.593l4.004-18.437c.179-.824 1.361-.811 1.523.015l3.623 18.515c.058.307.29.544.595.608l18.435 4.006c.821.176.811 1.355-.013 1.519l-18.515 3.623c-.303.063-.544.294-.608.6l-4.009 18.434C1901.693 405.99 1900.519 405.978 1900.359 405.152zM2589.901 380.883l-3.622-18.513c-.061-.307-.295-.545-.596-.612l-18.439-4.003c-.825-.18-.806-1.358.02-1.518l18.508-3.623c.31-.062.548-.298.613-.6l4.004-18.436c.181-.82 1.355-.807 1.519.019l3.625 18.513c.058.301.294.542.597.608l18.432 4.004c.826.178.814 1.356-.016 1.519l-18.515 3.623c-.299.063-.537.295-.606.598l-4.004 18.435C2591.246 381.719 2590.063 381.709 2589.901 380.883zM2530.341 1003.503l-3.625-18.515c-.058-.301-.294-.542-.594-.608l-18.436-4.004c-.826-.178-.809-1.355.012-1.515l18.516-3.626c.307-.06.547-.295.61-.598l4.004-18.435c.181-.823 1.358-.813 1.519.015l3.623 18.515c.062.303.297.544.599.61l18.435 4c.821.18.809 1.359-.017 1.523l-18.516 3.623c-.299.06-.539.294-.608.597l-4.004 18.435C2531.678 1004.342 2530.505 1004.332 2530.341 1003.503zM1190.625 262.847l-3.626-18.516c-.056-.305-.29-.543-.593-.61l-18.434-4.004c-.826-.178-.814-1.356.012-1.516l18.513-3.627c.305-.056.544-.292.61-.595l4.009-18.437c.175-.823 1.355-.809 1.513.017l3.629 18.515c.053.303.291.541.594.608l18.438 4.004c.82.176.808 1.356-.018 1.517l-18.513 3.626c-.305.059-.539.292-.608.596l-4.004 18.434C1191.965 263.684 1190.783 263.67 1190.625 262.847zM161.739 1379.348l-3.623-18.513c-.06-.301-.29-.542-.599-.61l-18.432-4.004c-.822-.176-.813-1.355.017-1.519l18.515-3.623c.299-.06.537-.292.608-.595l4.002-18.437c.181-.821 1.357-.812 1.519.014l3.625 18.514c.058.303.294.545.593.61l18.438 4.004c.822.178.812 1.357-.014 1.519l-18.513 3.622c-.305.06-.544.297-.612.596l-4.004 18.438C163.079 1380.186 161.902 1380.173 161.739 1379.348z"
                                  className="colorFEB7A3 svgShape"
                                ></path>
                              </svg>
                            </g>
                          </svg>
                        </div>
                      </Col>
                      <Col xl={6} lg={6} md={6} sm={12}>
                        <div className="working-content content-1">
                          <h4 className="mb-3">Customize Your Dashboard</h4>
                          <p className="title-desc">
                            No ipsum rebum est invidunt eos dolore. Sed sea
                            ipsum vero invidunt rebum et erat, tempor consetetur
                            sadipscing no ipsum,.
                          </p>
                          <p className="title-desc mb-0">
                            Ut dolor sed aliquyam at lorem ipsum labore diam
                            eos. Tempor labore dolor justo nonumy stet, sanctus
                            amet sed accusam elitr amet eirmod. No ea gubergren
                            dolores elitr labore ipsum..
                          </p>
                        </div>
                      </Col>
                    </div>
                  </div>
                  <div className="working-container container-2">
                    <div className="row align-items-center">
                      <Col xl={6} lg={6} md={6} sm={12} className=" myorder-2">
                        <div className="working-content content-2">
                          <h4 className="mb-3">Built-In Themes</h4>
                          <p className="title-desc">
                            Dolore voluptua sed kasd labore erat sed ipsum rebum
                            sit, sanctus invidunt est sed sanctus. Dolor clita
                            invidunt elitr dolore.
                          </p>
                          <p className="title-desc mb-0">
                            Lorem dolores labore stet rebum invidunt voluptua at
                            dolores lorem, amet dolor dolore dolor ut
                            sadipscing, dolore sanctus accusam diam sanctus kasd
                            gubergren, ipsum dolor lorem amet stet, aliquyam
                            takimata.
                          </p>
                        </div>
                      </Col>
                      <Col xl={6} lg={6} md={6} sm={12} className=" myorder-1">
                        <div className="working-svg-container svg-container-2">
                          <svg
                            id="SvgjsSvg1336"
                            className="working-svg"
                            width="380"
                            height="380"
                            version="1.1"
                          >
                            <defs id="SvgjsDefs1337"></defs>
                            <g id="SvgjsG1338">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="380"
                                height="380"
                                viewBox="0 0 2000 1500"
                              >
                                <g
                                  fill="none"
                                  fillRule="evenodd"
                                  transform="translate(120 241.532)"
                                >
                                  <path
                                    fill="#141414"
                                    d="M45 646.468002L479 646.468002C476.25445 590.468002 450.190285 562.468002 400.807505 562.468002 326.733334 562.468002 281.241002 633.90502 183.242597 604.468002 117.910327 584.843323 71.8294615 598.843323 45 646.468002zM553 138.173348C553 138.173348 742.666667 138.173348 1122 138.173348 1117.03955 101.184634 1091.74815 82.6902768 1046.1258 82.6902768 977.692266 82.6902768 915.387843 10.1733485 837.5 10.1733485 759.612157 10.1733485 759.23035 73.4282881 695.929165 82.6902768 632.627981 91.9522655 553 91.9522655 553 138.173348zM1225 552.468002L1659 552.468002C1656.25445 496.468002 1630.19029 468.468002 1580.8075 468.468002 1506.73333 468.468002 1461.241 539.90502 1363.2426 510.468002 1297.91033 490.843323 1251.82946 504.843323 1225 552.468002z"
                                    className="colorFFF svgShape"
                                  ></path>
                                  <line
                                    x1=".793"
                                    x2="1759.586"
                                    y1="1048.468"
                                    y2="1048.468"
                                    stroke="#bfbfbf"
                                    strokeWidth="3"
                                    className="colorStroke151C24 svgStroke"
                                  ></line>
                                  <polygon
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    points="355 103.468 355 801.186 1404.162 801.186 1404.162 103.468"
                                    fill="#5a5e5f"
                                    className="color000 svgShape colorStrokeB4B1FF svgStroke"
                                  ></polygon>
                                  <circle
                                    cx="391.205"
                                    cy="132.996"
                                    r="10.577"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    fill="#5a5e5f"
                                    className="color000 svgShape colorStrokeB4B1FF svgStroke"
                                  ></circle>
                                  <line
                                    x1="399.216"
                                    x2="1404.162"
                                    y1="163.854"
                                    y2="163.854"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    className="colorStrokeB4B1FF svgStroke"
                                  ></line>
                                  <line
                                    x1="418.138"
                                    x2="463.747"
                                    y1="143.573"
                                    y2="143.573"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    className="colorStrokeB4B1FF svgStroke"
                                  ></line>
                                  <circle
                                    cx="1107.001"
                                    cy="471.99"
                                    r="183.001"
                                    fill="#f8f1eb"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    className="colorF8F1EB svgShape colorStrokeB4B1FF svgStroke"
                                  ></circle>
                                  <polygon
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    points="484.882 236.128 1106.605 236.128 1106.605 707.852 484.882 707.852"
                                    fill="#5a5e5f"
                                    className="color000 svgShape colorStrokeB4B1FF svgStroke"
                                  ></polygon>
                                  <polygon
                                    fill="#f8f1eb"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    points="469.081 220.327 500.683 220.327 500.683 251.929 469.081 251.929"
                                    className="colorF8F1EB svgShape colorStrokeB4B1FF svgStroke"
                                  ></polygon>
                                  <polygon
                                    fill="#f8f1eb"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    points="469.081 692.051 500.683 692.051 500.683 723.653 469.081 723.653"
                                    className="colorF8F1EB svgShape colorStrokeB4B1FF svgStroke"
                                  ></polygon>
                                  <polygon
                                    fill="#f8f1eb"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    points="1090.805 220.327 1122.406 220.327 1122.406 251.929 1090.805 251.929"
                                    className="colorF8F1EB svgShape colorStrokeB4B1FF svgStroke"
                                  ></polygon>
                                  <polygon
                                    fill="#f8f1eb"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    points="1090.805 692.051 1122.406 692.051 1122.406 723.653 1090.805 723.653"
                                    className="colorF8F1EB svgShape colorStrokeB4B1FF svgStroke"
                                  ></polygon>
                                  <polygon
                                    fill="#f8f1eb"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    points="783.98 590.594 783.98 573.272 760.942 571.367 754.88 565.824 754.88 372.861 797.491 372.861 802.687 377.364 808.75 415.299 833.174 415.299 833.174 352.594 628.604 352.594 628.604 415.299 653.028 415.299 659.091 377.364 664.46 372.861 706.898 372.861 706.898 565.824 701.009 571.367 677.798 573.272 677.798 590.594"
                                    className="colorF8F1EB svgShape colorStrokeB4B1FF svgStroke"
                                  ></polygon>
                                  <circle
                                    cx="628.604"
                                    cy="352.594"
                                    r="8.604"
                                    fill="#f8f1eb"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    className="colorF8F1EB svgShape colorStrokeB4B1FF svgStroke"
                                  ></circle>
                                  <circle
                                    cx="833.174"
                                    cy="352.594"
                                    r="8.604"
                                    fill="#f8f1eb"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    className="colorF8F1EB svgShape colorStrokeB4B1FF svgStroke"
                                  ></circle>
                                  <circle
                                    cx="628.604"
                                    cy="415.106"
                                    r="8.604"
                                    fill="#f8f1eb"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    className="colorF8F1EB svgShape colorStrokeB4B1FF svgStroke"
                                  ></circle>
                                  <circle
                                    cx="833.174"
                                    cy="415.106"
                                    r="8.604"
                                    fill="#f8f1eb"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    className="colorF8F1EB svgShape colorStrokeB4B1FF svgStroke"
                                  ></circle>
                                  <circle
                                    cx="784.086"
                                    cy="590.594"
                                    r="8.604"
                                    fill="#f8f1eb"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    className="colorF8F1EB svgShape colorStrokeB4B1FF svgStroke"
                                  ></circle>
                                  <circle
                                    cx="678.259"
                                    cy="590.594"
                                    r="8.604"
                                    fill="#f8f1eb"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    className="colorF8F1EB svgShape colorStrokeB4B1FF svgStroke"
                                  ></circle>
                                  <path
                                    fill="#f98fae"
                                    d="M439.869133,392.995466 L436.957676,413.703939 L448.918336,419.355069 C450.780478,419.782366 439.698565,457.723014 419.225881,455.183486 L418.604999,455.10135 C398.099937,452.219552 402.342922,409.911492 405.085327,410.179641 L406.563468,383.903158 L439.869133,392.995466 Z"
                                    className="colorFF8B98 svgShape"
                                  ></path>
                                  <path
                                    fill="#f98fae"
                                    d="M436.261201,329.449176 C450.446161,331.442742 460.329238,344.558028 458.335672,358.742987 L456.856588,369.264924 L460.979872,379.106576 C461.493476,380.332543 460.915991,381.742743 459.690024,382.256347 C459.499736,382.336066 459.299986,382.390986 459.09569,382.419757 L454.925416,383.005924 L453.446417,393.531846 C452.613964,399.455053 447.13742,403.581926 441.214213,402.749473 C440.940467,402.711001 440.668295,402.662062 440.398294,402.602763 L419.93127,398.107753 C411.768446,396.315017 406.153785,388.809078 406.739403,380.472253 L408.759635,351.712305 C409.695931,338.383229 421.2603,328.336896 434.589376,329.273192 C435.148521,329.312469 435.706133,329.371166 436.261201,329.449176 Z"
                                    className="colorFF8B98 svgShape"
                                  ></path>
                                  <path
                                    fill="#252727"
                                    d="M448.610506,355.318811 L458.736645,355.674912 C464.642789,351.725695 466.230241,346.722041 463.499002,340.663949 C459.402143,331.576811 437.430763,318.710609 423.061973,327.29306 C401.096473,330.472307 393.8636,341.194445 401.363354,359.459474 L406.182721,382.113417 C406.242928,382.396426 406.260293,384.283762 406.234816,387.775423 C406.215197,390.464107 408.321446,392.672597 410.981351,392.805571 L411.234683,392.811906 L411.234683,392.811906 L417.346072,392.811906 C420.070689,392.811906 422.648634,391.577623 424.357044,389.455155 L425.37396,388.197761 C431.470355,380.696996 435.401693,376.556823 437.167975,375.777242 C437.981016,375.418392 441.379423,376.002111 442.339005,373.928407 C445.158127,367.836145 447.180234,355.202184 448.610506,355.318811 Z"
                                    className="color273237 svgShape"
                                  ></path>
                                  <path
                                    fill="#f98fae"
                                    d="M438.705621,364.068612 C439.328835,364.156199 439.763046,364.732417 439.675459,365.35563 L437.564771,380.373956 L436.436343,380.215366 C431.97754,379.588722 428.870962,375.466153 429.497606,371.00735 C430.124249,366.548547 434.246819,363.441969 438.705621,364.068612 Z"
                                    className="colorFF8B98 svgShape"
                                  ></path>
                                  <path
                                    fill="#141414"
                                    stroke="#bfbfbf"
                                    strokeWidth="3"
                                    d="M271.980493,693.409133 L270.777818,793.477669 C270.662302,803.089172 269.161612,812.633812 266.322062,821.817018 L206,1016.90073 L295.388275,1016.90073 L379.875072,846.64098 C383.064704,840.21316 385.553216,833.460695 387.29761,826.500256 L436.680116,629.45543 L271.980493,693.409133 Z"
                                    className="colorFFF svgShape colorStroke151C24 svgStroke"
                                  ></path>
                                  <path
                                    fill="#151c24"
                                    d="M321.340058,695.997751 L411.778058,728.348751 L388.350818,821.827203 C387.641725,824.656608 386.810012,827.450308 385.85889,830.200617 L321.340058,695.997751 Z"
                                    className="color151C24 svgShape"
                                  ></path>
                                  <path
                                    fill="#141414"
                                    stroke="#bfbfbf"
                                    strokeWidth="3"
                                    d="M291.525659,685.205236 L439.866602,625.468002 L522.427032,740.841553 C530.452781,752.057084 536.071877,764.811481 538.931173,778.303153 L589.397526,1016.43016 L589.397526,1016.43016 L500.142257,1016.43016 L438.227761,842.736175 C433.11777,828.400682 424.803149,815.420643 413.917357,804.784954 L333.560182,726.274006 L333.560182,726.274006"
                                    className="colorFFF svgShape colorStroke151C24 svgStroke"
                                  ></path>
                                  <path
                                    fill="#151c24"
                                    d="M500.5 1016.05455L569.397526 1016.05455 574.237167 1020.3239C577.358683 1023.07759 581.421135 1024.51135 585.569195 1024.33481L585.984255 1024.31177C597.95463 1023.49252 608.32267 1032.53229 609.141923 1044.50267 609.19756 1045.31561 609.207406 1046.13087 609.171468 1046.9446L609.13593 1047.55455 516.470089 1047.55455C513.493665 1047.55455 510.842723 1045.67234 509.861447 1042.86233L500.5 1016.05455zM206 1016.05455L275.820177 1016.05455 270.700654 1024.77075 277.406906 1024.31177C289.37728 1023.49252 299.745321 1032.53229 300.564573 1044.50267 300.620211 1045.31561 300.630057 1046.13087 300.594119 1046.9446L300.558581 1047.55455 214.23449 1047.55455C207.054788 1047.55455 201.23449 1041.73425 201.23449 1034.55455 201.23449 1033.34663 201.402839 1032.14461 201.734678 1030.98317L206 1016.05455z"
                                    className="color151C24 svgShape"
                                  ></path>
                                  <path
                                    fill="#f98fae"
                                    d="M407.172742,485.892033 L358.21547,545.483512 C356.44046,547.644079 356.121524,550.653725 357.40428,553.138327 L415.803286,666.252808 L392.878652,684.03852 L301.180156,580.732953 C288.121639,566.021506 284.902535,545.020227 292.955065,527.072851 L332.503993,438.926708 C342.505346,416.635821 368.683379,406.673185 390.974265,416.674538 C392.842622,417.512822 394.650517,418.479826 396.384906,419.568573 C417.32195,432.711616 423.640236,460.338984 410.497193,481.276028 C409.488037,482.883628 408.377644,484.425409 407.172742,485.892033 Z"
                                    className="colorFF8B98 svgShape"
                                  ></path>
                                  <path
                                    fill="#ff8854"
                                    d="M359.812537,543.671884 L297.051136,518.276873 L332.321611,437.731719 C339.737237,420.797081 357.306001,410.654712 375.679473,412.70142 L380.50407,413.238854 C396.528324,415.023872 410.236954,425.557073 416.088956,440.580956 C421.960176,455.654178 419.159244,472.728452 408.779988,485.135881 L359.812537,543.671884 Z"
                                    className="colorFF5F13 svgShape"
                                  ></path>
                                  <path
                                    fill="#ff8854"
                                    d="M270,694.468002 L490.300173,694.468002 L490.300173,556.072983 L492.810454,485.046707 C494.342929,441.686111 460.434553,405.293072 417.073957,403.760579 C415.997937,403.722549 414.921287,403.706645 413.844688,403.711559 L412.768133,403.726478 L412.768133,403.726478 C366.616683,404.626058 327.077778,436.998115 317.087199,482.06422 L270,694.468002 Z"
                                    className="colorFF5F13 svgShape"
                                  ></path>
                                  <path
                                    fill="#f98fae"
                                    d="M485.141124,435.382402 L552.328615,473.247951 C554.764585,474.620816 557.783891,474.412287 560.007998,472.717572 L661.263135,395.563655 L682.759463,415.051556 L596.946616,523.295769 C584.726257,538.710514 564.603026,545.527546 545.530004,540.713881 L451.855399,517.072208 C428.166444,511.09357 413.809396,487.043234 419.788033,463.354279 C420.289145,461.36874 420.927521,459.420393 421.698554,457.523294 C431.006245,434.622066 457.116733,423.602327 480.017961,432.910017 C481.776376,433.624686 483.487552,434.450481 485.141124,435.382402 Z"
                                    className="colorFF8B98 svgShape"
                                  ></path>
                                  <polygon
                                    fill="var(--primary-bg-color)"
                                    points="671.541 312.989 729.327 342.432 702.314 395.447 644.528 366.004"
                                    className="color5F5AFF svgShape"
                                  ></polygon>
                                  <polygon
                                    fill="#ffda82"
                                    points="795 214.468 859.855 214.468 859.855 273.968 795 273.968"
                                    className="colorF9C21D svgShape"
                                  ></polygon>
                                  <polygon
                                    fill="#ff0033"
                                    points="826.855 468.468 891.71 468.468 891.71 527.968 826.855 527.968"
                                    className="colorF03 svgShape"
                                  ></polygon>
                                  <polygon
                                    fill="#00d3bd"
                                    points="870 503.468 934.855 503.468 934.855 562.968 870 562.968"
                                    className="color00D3BD svgShape"
                                  ></polygon>
                                  <polygon
                                    fill="#ff8854"
                                    points="949.195 299.14 1014.05 299.14 1014.05 358.64 949.195 358.64"
                                    className="colorFF5F13 svgShape"
                                  ></polygon>
                                  <path
                                    fill="#f98fae"
                                    d="M660.426727,396.034343 L657.850482,385.707774 C656.854736,381.716448 657.59994,377.496629 659.888062,374.09293 L660.114303,373.766122 L668.395275,377.687193 L678.420906,353.82569 C679.081198,352.254163 680.858642,351.477435 682.460447,352.060445 C684.040216,352.635434 684.854752,354.38221 684.279763,355.961979 L675.642788,379.691872 C675.530395,380.000671 675.689612,380.342114 675.998411,380.454508 C676.311952,380.568628 676.65999,380.417583 676.790788,380.110624 L686.88407,356.423502 C687.453567,355.086995 688.968934,354.42934 690.334103,354.926221 C691.678622,355.415586 692.371861,356.902242 691.882496,358.246761 L683.131371,382.29028 C682.996397,382.661118 683.187603,383.07116 683.55844,383.206133 C683.949896,383.348612 684.38766,383.197738 684.608212,382.844333 L698.263098,360.964198 C698.934568,359.888257 700.316499,359.503153 701.447649,360.076757 C702.552291,360.636918 702.995563,361.985176 702.438836,363.091553 L690.70572,386.408622 C690.562517,386.693207 690.67713,387.039998 690.961715,387.183201 L691.023713,387.209973 C691.379548,387.339486 691.777545,387.203562 691.979821,386.883442 L702.133424,370.814431 C702.714379,369.895016 703.90319,369.574536 704.867554,370.077365 C705.81938,370.573657 706.207037,371.734722 705.744304,372.703307 L697.659936,389.625361 L696.067866,403.655956 C695.608581,407.703539 692.95006,411.165913 689.158319,412.654728 L682.531642,415.256674 L660.426727,396.034343 Z"
                                    className="colorFF8B98 svgShape"
                                  ></path>
                                  <path
                                    fill="#ff8854"
                                    d="M550.267182,471.989733 L536.156381,538.207444 L450.710235,517.459327 C432.745162,513.09703 419.706095,497.556379 418.531189,479.106634 L418.222676,474.262009 C417.197993,458.171235 425.190692,442.841798 438.970139,434.469831 C452.794838,426.07037 470.096093,425.863834 484.117363,433.930878 L550.267182,471.989733 Z"
                                    className="colorFF5F13 svgShape"
                                  ></path>
                                  <path
                                    fill="#ff8854"
                                    d="M413.844688,403.710691 C414.921287,403.706645 415.997937,403.722549 417.073957,403.760579 C438.998616,404.535462 458.506651,414.223046 472.238395,429.217481 C476.346081,430.193219 480.350112,431.763415 484.117363,433.930878 L550.267182,471.989733 L536.156381,538.207444 L491.316,527.318691 L490.300173,556.072983 L490.300173,694.468002 L270,694.468002 L308.071,522.735691 L297.051136,518.276873 L332.321611,437.731719 C339.462224,421.425112 356.016868,411.416326 373.639096,412.523727 C385.401052,407.221542 398.322232,404.138526 411.825133,403.74926 L412.768133,403.726478 L413.844688,403.710691 Z"
                                    className="colorFF5F13 svgShape"
                                  ></path>
                                  <line
                                    x1="488.62"
                                    x2="444.266"
                                    y1="525.534"
                                    y2="512.535"
                                    stroke="#273237"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="colorStroke273237 svgStroke"
                                  ></line>
                                  <line
                                    x1="309.407"
                                    x2="314.839"
                                    y1="522.03"
                                    y2="489.297"
                                    stroke="#273237"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="colorStroke273237 svgStroke"
                                  ></line>
                                  <polygon
                                    fill="#252727"
                                    points="1394.384 688.048 1394.384 964.888 1327.877 964.888 1298.342 796.708 1251.156 688.048"
                                    className="color273237 svgShape"
                                  ></polygon>
                                  <path
                                    fill="#f7ba9f"
                                    d="M1334.94944,964.888259 L1393.619,964.888259 L1393.0114,1033.45479 L1331.28558,1033.45479 C1329.62872,1033.45479 1328.28558,1032.11164 1328.28558,1030.45479 C1328.28558,1029.2127 1329.05101,1028.09905 1330.21062,1027.65399 L1349.33831,1020.31274 L1334.94944,964.888259 Z"
                                    className="colorFDC9AB svgShape"
                                  ></path>
                                  <path
                                    fill="#151c24"
                                    d="M1302.49152,1033.31478 C1296.39419,1035.03898 1292.15202,1040.53784 1292.00755,1046.84676 L1292.00375,1047.17954 L1386.63153,1047.17954 C1390.49752,1047.17954 1393.63153,1044.04553 1393.63153,1040.17954 L1393.63153,1033.03418 L1331.9057,1033.03418 C1330.24885,1033.03418 1328.9057,1031.69103 1328.9057,1030.03418 C1328.9057,1028.79208 1329.67114,1027.67844 1330.83075,1027.23338 L1302.49152,1033.31478 Z"
                                    className="color151C24 svgShape"
                                  ></path>
                                  <path
                                    fill="#f7ba9f"
                                    d="M1256.92039,961.847047 L1322.02783,948.179536 L1342.63819,1013.57794 L1283.93345,1032.65227 C1282.35768,1033.16426 1280.66522,1032.30191 1280.15323,1030.72615 C1279.7694,1029.54485 1280.15323,1028.24918 1281.11856,1027.46756 L1297.0415,1014.57484 L1256.92039,961.847047 Z"
                                    className="colorFDC9AB svgShape"
                                  ></path>
                                  <path
                                    fill="#151c24"
                                    d="M1250.71617,1046.47243 L1250.81539,1046.7901 L1284.8359,1046.7901 L1340.81175,1028.60244 C1344.48853,1027.40778 1346.50069,1023.4587 1345.30603,1019.78193 L1343.09799,1012.98628 L1284.39325,1032.06061 C1282.81748,1032.57261 1281.12502,1031.71026 1280.61303,1030.13449 C1280.2292,1028.95319 1280.61303,1027.65752 1281.57836,1026.8759 L1266.04112,1035.88673 C1265.48734,1036.20789 1262.11719,1036.20789 1255.93067,1035.88673 C1249.48557,1036.36848 1250.10639,1044.43838 1250.71617,1046.47243 Z"
                                    className="color151C24 svgShape"
                                  ></path>
                                  <path
                                    fill="#252727"
                                    d="M1208.81958,688.047744 L1295.68526,688.047744 C1329.92691,688.047744 1357.68526,715.806089 1357.68526,750.047744 C1357.68526,759.366994 1355.58442,768.566359 1351.53896,776.961755 L1320.44588,841.488137 L1327.87672,964.888259 L1234.64133,964.888259 C1202.92144,896.224497 1187.06149,846.0184 1187.06149,814.269969 C1187.06149,782.521538 1194.31419,740.447463 1208.81958,688.047744 Z"
                                    className="color273237 svgShape"
                                  ></path>
                                  <path
                                    fill="#f7ba9f"
                                    d="M1281.47525,406.750752 L1281.61448,427.459224 L1271.71808,433.110355 C1269.71026,433.537652 1281.65916,471.4783 1303.73351,468.938772 L1304.40297,468.856636 C1326.51224,465.974837 1321.9373,423.666778 1318.98035,423.934926 L1317.38656,397.658443 L1281.47525,406.750752 Z"
                                    className="colorFDC9AB svgShape"
                                  ></path>
                                  <path
                                    fill="#f7ba9f"
                                    d="M1285.24898,343.204461 C1270.01451,345.198027 1259.4002,358.313313 1261.54127,372.498273 L1263.12979,383.02021 L1258.70143,392.861861 C1258.14983,394.087828 1258.77004,395.498029 1260.08671,396.011632 C1260.29108,396.091351 1260.50561,396.146272 1260.72502,396.175043 L1265.20384,396.76121 L1266.79227,407.287132 C1267.68631,413.210339 1273.56805,417.337211 1279.9295,416.504759 C1280.2235,416.466286 1280.51581,416.417347 1280.80579,416.358049 L1302.78712,411.863039 C1311.55389,410.070303 1317.58397,402.564363 1316.95503,394.227539 L1314.78532,365.467591 C1313.77975,352.138515 1301.35976,342.092182 1287.0445,343.028478 C1286.44398,343.067755 1285.84511,343.126451 1285.24898,343.204461 Z"
                                    className="colorFDC9AB svgShape"
                                  ></path>
                                  <path
                                    fill="#f7ba9f"
                                    d="M1283.29629,377.068612 C1282.67308,377.156199 1282.23887,377.732417 1282.32646,378.35563 L1284.43714,393.373956 L1285.56557,393.215366 C1290.02437,392.588722 1293.13095,388.466153 1292.50431,384.00735 C1291.87767,379.548547 1287.7551,376.441969 1283.29629,377.068612 Z"
                                    className="colorFDC9AB svgShape"
                                  ></path>
                                  <path
                                    fill="#00d3bd"
                                    d="M1295.25552,420.409791 C1357.6925,420.409791 1378.78003,484.499006 1382.96479,547.736678 L1383.24716,551.967896 L1383.69121,558.485348 C1386.40289,597.804944 1389.96703,640.992409 1394.38362,688.047744 L1208.88362,688.047744 L1211.09846,671.005183 C1217.1493,624.192983 1221.73528,586.521846 1224.85639,557.991773 C1212.30523,537.043348 1197.69834,527.146091 1203.42026,508.11625 C1208.27577,491.967902 1257.18562,420.409791 1295.25552,420.409791 Z"
                                    className="color00D3BD svgShape"
                                  ></path>
                                  <path
                                    fill="#0b8e7f"
                                    d="M1224.74004,559.053337 L1294.70599,629.021403 L1235.67998,688.047696 L1231.43698,688.047696 L1290.463,629.021002 L1224.31784,562.874618 L1224.74004,559.053337 L1224.74004,559.053337 Z M1389.96527,638.966228 L1339.671,638.967002 L1339.67098,688.047696 L1336.67098,688.047696 L1336.67174,635.968002 L1389.70844,635.968002 L1389.96527,638.966228 L1389.96527,638.966228 Z M1361.26629,460.910902 L1306.832,475.498002 L1337.918,591.512002 L1385.1468,578.856399 L1385.37276,581.90139 L1385.37276,581.90139 L1335.79727,595.186284 L1303.15843,473.376467 L1359.70774,458.221739 C1360.23771,459.106662 1360.75717,460.003195 1361.26629,460.910902 Z M1302.97122,420.750029 L1251.14427,510.51704 L1213.64298,488.867054 C1214.17405,488.041203 1214.72204,487.201604 1215.28625,486.349878 L1250.046,506.418002 L1299.6414,420.517715 C1300.76536,420.573693 1301.87525,420.65127 1302.97122,420.750029 Z"
                                    className="color00BAA7 svgShape"
                                  ></path>
                                  <path
                                    fill="#f7ba9f"
                                    d="M1208.02123,517.861696 L1233.87623,560.232696 L1224.85639,567.991773 L1220.9461,590.594179 L1199.51722,585.814042 C1189.49838,583.579141 1182.37323,574.689457 1182.37323,564.424375 C1182.37323,553.308653 1186.366,542.569862 1193.6126,534.158669 L1194.0111,533.702196 L1208.02123,517.861696 Z"
                                    className="colorFDC9AB svgShape"
                                  ></path>
                                  <polyline
                                    stroke="#273237"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    points="1207.493 516.994 1234.641 561.487 1300.388 505.447"
                                    fill="#5a5e5f"
                                    className="color000 svgShape"
                                  ></polyline>
                                  <path
                                    fill="#252727"
                                    d="M1269.08236,373.655421 C1271.96916,373.736062 1275.21064,373.468985 1278.80682,372.85419 C1283.90324,371.982917 1280.89684,381.719618 1287.14998,382.019415 L1287.44995,382.026479 C1291.38569,382.026479 1292.58914,389.207491 1290.11352,396.537388 L1290.00191,396.86084 C1285.74353,408.944935 1264.6051,456.885453 1315.26064,456.885453 C1365.91617,456.885453 1341.07886,423.116198 1333.19419,405.968002 C1325.30953,388.819805 1333.64006,342.468002 1305.84666,342.468002 L1301.01631,342.471917 C1291.53273,342.487578 1283.11193,342.550223 1275.7539,342.659851 C1267.65736,342.780523 1260.91825,348.912405 1260.0359,356.961626 L1259.42114,362.569648 C1258.81934,368.059609 1262.78196,372.997964 1268.27193,373.599774 C1268.54121,373.629292 1268.81157,373.647857 1269.08236,373.655421 Z"
                                    className="color273237 svgShape"
                                  ></path>
                                  <path
                                    fill="#f7ba9f"
                                    d="M1288.9741,376.533922 C1288.35089,376.621509 1287.91668,377.197726 1288.00427,377.82094 L1290.11495,392.839266 L1291.24338,392.680676 C1295.70218,392.054032 1298.80876,387.931463 1298.18212,383.47266 C1297.55548,379.013857 1293.43291,375.907278 1288.9741,376.533922 Z"
                                    className="colorFDC9AB svgShape"
                                  ></path>
                                  <circle
                                    cx="300.08"
                                    cy="155.253"
                                    r="145.08"
                                    fill="var(--primary-bg-color)"
                                    className="color5F5AFF svgShape"
                                  ></circle>
                                  <path
                                    fill="#141414"
                                    fillRule="nonzero"
                                    d="M280.866714,72.1174116 L281.902558,72.7628358 C334.077259,104.909908 335.169486,150.180211 287.718189,194.725956 L286.265415,196.075591 C256.593347,223.357055 245.589968,262.097936 253.260806,292.608952 C252.109656,292.22061 250.965348,291.814406 249.827749,291.39435 C242.908,260.437395 254.115096,222.079041 283.268558,194.691914 L284.198548,193.82761 C331.239262,150.576848 331.169325,107.570033 281.81145,76.3064767 L280.300668,75.3627026 C257.629218,61.3938491 244.964513,43.6086227 242.339693,22.1226527 C243.309239,21.6971373 244.285965,21.2856484 245.26807,20.8846139 C247.514313,41.532893 259.3695,58.5712123 280.866714,72.1174116 Z M375.920152,223.244764 C384.136152,235.394812 378.997717,250.596477 365.185045,262.319849 C352.073569,273.448089 335.01435,278.06019 324.022755,272.190605 C308.507075,263.905127 310.546648,242.809716 329.290057,209.357382 L330.139479,207.851821 L331.219074,207.459069 C349.437049,200.991156 364.469873,206.311772 375.920152,223.244764 Z M215.584097,271.925605 L215.534323,273.166185 C214.532677,272.446714 213.540575,271.714795 212.558241,270.970656 C213.55031,232.74149 197.439187,210.968001 163.937754,205.496085 C163.542834,204.432398 163.161715,203.361279 162.792908,202.284446 C198.831997,207.5464 216.540617,230.406093 215.617765,270.699264 L215.584097,271.925605 Z M333.239653,209.993457 L332.74111,210.16198 L332.243351,210.334664 L331.440016,211.771852 C314.280502,242.691845 312.286475,261.64854 324.680387,269.055643 L325.060364,269.276566 L325.461224,269.496877 C335.145199,274.668185 350.951923,270.394707 363.208995,259.991635 C375.971059,249.159956 380.565879,235.566533 373.390482,224.955355 C362.91855,209.469171 349.659615,204.537136 333.239653,209.993457 Z M412.794741,138.858746 C417.51447,141.679889 422.870335,149.903429 430.046776,164.362504 L431.017746,166.333424 L431.760191,167.859539 C433.926587,172.335744 436.294498,177.426422 439.24588,183.913446 L441.330746,188.508886 C440.956497,190.104643 440.555904,191.690254 440.129452,193.265234 L436.809379,185.932654 L434.775189,181.475031 L433.747205,179.240215 C431.751661,174.915885 430.026612,171.263904 428.400532,167.932988 L427.311417,165.720138 L426.708188,164.51123 L425.806148,162.728727 C419.661121,150.693266 414.936132,143.696421 411.227972,141.479927 C400.573427,135.111341 389.386818,135.085175 383.987084,141.093727 C377.991463,147.765354 379.570128,160.728945 390.396255,177.835671 L391.067148,178.882785 C401.604538,195.131515 408.489599,218.126611 411.746247,247.879524 C410.849851,248.96096 409.938071,250.027223 409.011272,251.079942 C405.986509,220.876896 399.311012,197.624044 389.008776,181.331055 L388.505007,180.544347 C376.411938,161.896749 374.457638,147.129015 381.715757,139.052544 C388.244561,131.787618 401.014828,131.817489 412.794741,138.858746 Z M217.290698,95.6669601 L217.957449,96.186936 L219.154119,97.0963114 C229.393915,104.992529 232.792771,117.236343 229.641326,131.155551 C226.732134,144.00478 218.381164,157.267377 207.194262,166.944206 C195.269838,177.259001 181.3471,182.544271 168.134177,180.963987 C164.209071,180.494539 160.404039,179.43711 156.743445,177.786541 C156.550881,176.577635 156.377197,175.363085 156.218653,174.143782 C160.148727,176.1672 164.252995,177.424284 168.496824,177.931852 C180.774363,179.400263 193.876603,174.426465 205.196452,164.634636 C215.906735,155.37009 223.903188,142.67052 226.662965,130.481221 C229.56599,117.659227 226.516189,106.645227 217.311768,99.5319088 L216.09558,98.6074765 C203.874118,89.1887562 195.08695,76.6720277 189.722157,61.0748069 C190.487935,60.1754148 191.264992,59.2877883 192.052597,58.4098175 C197.084319,73.9525104 205.500253,86.3643671 217.290698,95.6669601 Z M329.967376,13.2551457 C330.993266,13.4699853 332.015173,13.6956617 333.03297,13.9320499 C334.630581,51.8564194 349.271421,67.1206974 377.102048,60.642079 L377.966626,60.4348687 C392.519355,56.8479438 402.46675,57.8003058 409.533398,63.0741075 C415.185298,67.2920906 418.533046,73.3257665 422.802446,85.1620818 L426.137778,94.594941 L427.121069,97.3211588 L427.30945,97.8311883 C429.088365,102.602348 430.792101,106.64153 432.710742,110.494847 C435.404785,115.905449 438.450879,120.771911 442.04876,125.241059 C442.480909,127.279916 442.867137,129.335543 443.209528,131.405964 C442.789461,130.874922 442.362399,130.35248 441.925987,129.83872 L441.517991,129.364076 C436.952741,124.115625 433.212983,118.354745 429.977118,111.855971 C428.136803,108.15996 426.495155,104.312441 424.809982,99.8612575 L424.115102,97.9921267 L422.465642,93.3844664 C421.627919,91.0230147 420.787079,88.6326254 420.383115,87.4804047 L419.507459,85.0385155 L419.095538,83.9304386 L418.681355,82.8410363 C415.182357,73.7481557 412.206319,68.8792974 407.70696,65.5214492 C401.672078,61.0176491 392.989778,60.0674368 379.934255,63.1035498 L378.697434,63.3998773 C348.062048,70.9508201 331.77834,54.198429 330.000248,14.0939037 L329.967376,13.2551457 Z"
                                    className="colorFFF svgShape"
                                  ></path>
                                  <polygon
                                    fill="#ffda82"
                                    points="1182.373 0 1524.373 0 1524.373 279 1182.373 279"
                                    className="colorF9C21D svgShape"
                                  ></polygon>
                                  <path
                                    fill="#141414"
                                    fillRule="nonzero"
                                    d="M1270.97008,272.258212 C1270.65745,274.547388 1270.37639,276.795624 1270.12689,279.002966 L1267.10962,279.002966 C1267.3702,276.662825 1267.66622,274.279322 1267.99767,271.852277 C1276.52668,209.399645 1248.29441,182.447278 1182.37489,190.514675 L1182.37489,187.500665 C1249.93047,179.408651 1279.77013,207.820976 1270.97008,272.258212 Z M1336.54149,59.4443224 L1337.5591,60.0783874 C1388.81554,91.6596825 1389.88855,136.133244 1343.27238,179.895 L1341.84517,181.220881 C1311.7314,208.908465 1301.19074,248.610634 1310.2292,279.001635 L1307.09615,279.001635 C1298.27736,247.93166 1308.94621,208.001517 1338.90106,179.86156 L1339.81468,179.012464 C1386.0275,136.5229 1385.95879,94.27299 1337.4696,63.5596615 L1335.9854,62.6324974 C1310.17669,46.7306387 1297.56811,25.7945095 1298.21033,0.000856788959 L1301.20701,0.000856788959 C1300.57556,24.4345646 1312.33757,44.1925286 1336.54149,59.4443224 Z M1466.14763,125.011033 C1470.78429,127.782525 1476.04589,135.861333 1483.09603,150.065933 L1484.04991,152.002167 L1484.80561,153.555817 C1486.92674,157.940089 1489.24575,162.926193 1492.13324,169.272786 L1503.00288,193.270064 L1504.50743,196.541725 L1505.39495,198.457378 C1512.59879,213.962096 1518.7264,226.052246 1524.37397,235.473089 L1524.37397,241.180723 L1523.69409,240.107547 C1517.2181,229.794028 1510.23592,216.093711 1501.7929,197.819191 L1497.68491,188.822717 L1489.73962,171.256456 L1487.74123,166.877287 C1485.21387,161.366255 1483.13149,156.94257 1481.18034,152.963636 L1480.40882,151.399674 L1479.80742,150.194545 C1473.34026,137.306729 1468.42587,129.867896 1464.60843,127.586082 C1454.1414,121.329581 1443.15168,121.303875 1437.84698,127.206679 C1431.89738,133.827092 1433.53985,146.754236 1444.46842,163.812484 L1444.80243,164.330663 C1460.14332,187.986416 1467.60438,226.197299 1467.2621,278.999773 L1464.26185,278.999773 C1464.5979,227.310061 1457.41275,189.877096 1442.78029,166.735844 L1442.28538,165.962983 C1430.40515,147.643575 1428.48524,133.135748 1435.61562,125.20142 C1442.02952,118.064354 1454.57504,118.0937 1466.14763,125.011033 Z M1429.92202,207.911887 C1437.99342,219.848098 1432.94542,234.78222 1419.37585,246.299265 C1406.49513,257.231651 1389.73614,261.762581 1378.938,255.996298 C1363.69539,247.856641 1365.69906,227.132502 1384.1126,194.268918 L1384.94707,192.789854 L1386.00766,192.404014 C1403.90501,186.049934 1418.67326,191.27691 1429.92202,207.911887 Z M1387.99268,194.893799 L1387.50291,195.059355 L1387.01391,195.229 L1386.22472,196.640894 C1369.3672,227.016706 1367.40827,245.63977 1379.58406,252.91651 L1379.95734,253.133545 L1380.35115,253.349979 C1389.86469,258.430274 1405.39322,254.232008 1417.43457,244.012026 C1429.97203,233.370981 1434.48598,220.016797 1427.43687,209.592373 C1417.25212,194.530875 1404.3839,189.631448 1388.47568,194.736052 L1387.99268,194.893799 Z M1431.93247,47.9673882 C1446.22908,44.4435919 1456.00141,45.3791926 1462.94368,50.5601772 C1468.49611,54.7039253 1471.78494,60.6314106 1475.9792,72.2594111 L1479.25583,81.5262552 L1480.22182,84.2044925 L1480.22182,84.2044925 L1480.40688,84.7055458 C1482.15449,89.3927352 1483.82824,93.3608284 1485.71311,97.1463283 C1488.64435,103.033299 1491.99982,108.264555 1496.04611,113.036055 L1496.62888,113.714591 C1504.26168,122.489661 1509.10766,133.604939 1512.76088,148.529256 L1512.95897,149.347096 C1513.65154,152.236664 1514.29982,155.245006 1514.99295,158.728659 L1515.60008,161.837743 L1517.02478,169.357002 L1517.51566,171.89211 L1517.88313,173.730995 C1519.98518,184.090529 1521.74434,189.913466 1524.37379,194.273056 L1524.37379,199.351344 C1523.74984,198.655277 1523.15902,197.893469 1522.59974,197.066476 C1518.93535,191.648041 1516.92347,184.737044 1514.20575,170.587289 L1512.65426,162.405327 L1512.21023,160.120609 L1512.21023,160.120609 L1511.89342,158.528399 L1511.55406,156.863983 C1511.0487,154.41934 1510.55716,152.197376 1510.0416,150.046331 C1506.53304,135.407821 1501.93315,124.586966 1494.76617,116.149756 L1494.36536,115.683466 C1489.88045,110.527385 1486.20652,104.867895 1483.0276,98.4834971 C1481.21967,94.8525344 1479.60692,91.0727305 1477.95141,86.6998865 L1477.26875,84.8636517 L1476.2939,82.1522435 C1475.29329,79.3472229 1474.10447,75.968839 1473.60245,74.5369323 L1472.7422,72.1380194 C1468.93855,61.7986827 1465.91303,56.5195278 1461.14939,52.9644466 C1455.03545,48.4016451 1446.15559,47.551489 1432.65042,50.8802136 C1401.93974,58.4497149 1385.90974,41.1587358 1384.72112,0.000876658207 L1387.70869,0.000876658207 C1388.79454,39.3189313 1403.48275,54.9796148 1431.93247,47.9673882 Z M1274.7394,83.0902317 L1275.91501,83.9836024 C1285.97459,91.7408494 1289.31363,103.769177 1286.21765,117.443411 C1283.35966,130.066499 1275.15566,143.095679 1264.16564,152.602198 C1252.45109,162.735457 1238.77338,167.927709 1225.793,166.375237 C1211.07824,164.61533 1198.08123,154.443823 1188.13211,135.579077 L1187.81223,134.967521 C1186.01545,131.50397 1184.20238,127.965665 1182.37341,124.355458 L1182.37341,117.685255 C1185.10824,123.144778 1187.80987,128.448183 1190.47523,133.586048 C1200.036,152.015845 1212.34061,161.744931 1226.14927,163.396466 C1238.21073,164.839033 1251.08237,159.952773 1262.20299,150.333277 C1272.72478,141.231783 1280.5805,128.755721 1283.2917,116.780949 C1286.14269,104.188812 1283.14951,93.3716667 1274.11412,86.3833166 L1272.9103,85.4681715 C1250.12097,67.9051077 1239.48694,39.3769891 1240.92814,0.00148921317 L1243.92772,0.00148921317 C1242.49171,38.5130139 1252.78891,66.1700586 1274.7394,83.0902317 Z"
                                    className="colorFFF svgShape"
                                  ></path>
                                  <path
                                    stroke="#FFF"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1327.87672,964.888259 C1312.6226,875.756355 1304.99554,827.716444 1304.99554,820.768525 C1304.99554,810.346646 1338.17174,746.321393 1338.17174,727.086506"
                                    fill="#5a5e5f"
                                    className="color000 svgShape colorStrokeFFF svgStroke"
                                  ></path>
                                  <path
                                    fill="#b9430b"
                                    d="M301.61543,566.306473 C344.791031,566.306473 379.791771,601.307214 379.791771,644.482815 C379.791771,663.492778 373.006566,680.917972 361.725877,694.469509 L357.766388,694.469509 C369.600807,681.185157 376.791771,663.673756 376.791771,644.482815 C376.791771,602.964068 343.134177,569.306473 301.61543,569.306473 C300.310313,569.306473 299.012965,569.339731 297.724185,569.405445 L298.396008,566.371559 C299.46377,566.328308 300.53705,566.306473 301.61543,566.306473 Z M490.17521,540.236646 L490.858185,540.241577 L490.752889,543.238819 L490.17521,543.236646 L490.17521,543.236646 C448.656463,543.236646 414.998868,576.894241 414.998868,618.412988 C414.998868,659.931735 448.656463,693.589329 490.17521,693.589329 L490.299185,693.587577 L490.300173,694.468002 L472.020742,694.470463 C437.599915,686.284926 411.998868,655.338679 411.998868,618.412988 C411.998868,575.237386 446.999609,540.236646 490.17521,540.236646 Z M431.357856,405.571763 L431.409243,405.648757 C439.633635,418.026641 444.425236,432.882475 444.425236,448.857447 C444.425236,492.033049 409.424496,527.033789 366.248895,527.033789 C341.87,527.033789 320.097449,515.874707 305.760503,498.385806 L307.118708,495.285721 C320.882777,512.791045 342.252894,524.033789 366.248895,524.033789 C407.767642,524.033789 441.425236,490.376194 441.425236,448.857447 C441.425236,432.382738 436.125794,417.145779 427.138596,404.758257 C428.558341,404.992422 429.965279,405.263706 431.357856,405.571763 Z M463.970893,421.402257 L463.905838,421.592068 C461.419602,429.060553 460.073298,437.049857 460.073298,445.353606 C460.073298,486.872353 493.730892,520.529948 535.249639,520.529948 C536.829921,520.529948 538.398815,520.481188 539.954897,520.38509 L539.307015,523.426472 C537.963238,523.495176 536.610499,523.529948 535.249639,523.529948 C492.074038,523.529948 457.073298,488.529207 457.073298,445.353606 C457.073298,436.271377 458.622062,427.550881 461.469892,419.441817 C462.317989,420.078889 463.151394,420.7325 463.970893,421.402257 Z"
                                    className="colorB9430B svgShape"
                                  ></path>
                                </g>
                              </svg>
                            </g>
                          </svg>
                        </div>
                      </Col>
                    </div>
                  </div>
                  <div className="working-container container-3">
                    <div className="row align-items-center">
                      <Col xl={6} lg={6} md={6} sm={12}>
                        <div className="working-svg-container svg-container-3">
                          <svg
                            id="SvgjsSvg1403"
                            className="working-svg"
                            width="360"
                            height="360"
                            version="1.1"
                          >
                            <defs id="SvgjsDefs1404"></defs>
                            <g id="SvgjsG1405">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                enableBackground="new 0 0 1364 960"
                                viewBox="0 0 1364 960"
                                width="360"
                                height="360"
                              >
                                <path
                                  fill="#aedff5"
                                  d="M404.209 182.085c.223-2.676-1.427-5.298-3.742-6.651-2.315-1.353-5.172-1.558-7.799-1.015-2.627.542-5.06 1.777-7.359 3.16-3.805 2.29-7.429 5.146-9.85 8.824-1.191-6.407-1.886-12.908-2.081-19.43-.018-.593-.025-1.187-.034-1.78 4.646.189 9.291.378 13.936.566 3.099.126 6.288.239 9.211-.801 2.923-1.041 5.556-3.525 5.814-6.62.222-2.676-1.427-5.298-3.742-6.651-2.315-1.353-5.172-1.558-7.799-1.015-2.626.542-5.06 1.777-7.359 3.16-3.924 2.362-7.659 5.326-10.076 9.174.005-7.243.616-14.483 1.83-21.623 4.714.011 9.427.021 14.142.031 3.102.007 6.292-.003 9.174-1.155 2.882-1.152 5.417-3.735 5.556-6.838.12-2.682-1.629-5.239-3.994-6.502-2.365-1.263-5.228-1.358-7.832-.715-2.604.642-4.988 1.969-7.233 3.44-3.593 2.355-7.001 5.232-9.282 8.83.996-5.144 2.299-10.228 3.921-15.212.48-1.476.997-2.938 1.532-4.393 4.848-.149 9.697-.298 14.545-.447 3.1-.095 6.289-.209 9.131-1.456 2.842-1.246 5.292-3.911 5.329-7.017.031-2.685-1.801-5.182-4.206-6.366-2.405-1.185-5.27-1.185-7.852-.457-2.581.728-4.922 2.132-7.116 3.676-3.137 2.206-6.108 4.824-8.248 7.97 1.991-4.869 4.293-9.61 6.897-14.186 4.087-2.378 8.175-4.757 12.262-7.136 2.683-1.561 5.434-3.181 7.342-5.631 1.908-2.45 2.797-5.96 1.354-8.708-1.248-2.376-4.047-3.698-6.726-3.593-2.679.105-5.2 1.47-7.125 3.34-1.926 1.87-3.317 4.22-4.514 6.623-2.207 4.428-3.852 9.33-3.545 14.24-.01.015-.02.026-.029.041-2.78 4.866-5.218 9.919-7.31 15.113.143-3.988-.834-8.037-2.215-11.816-.921-2.521-2.041-5.01-3.745-7.081-1.704-2.072-4.057-3.707-6.708-4.108-2.651-.401-5.58.604-7.086 2.826-1.742 2.571-1.251 6.158.371 8.804 1.622 2.646 4.176 4.56 6.667 6.408 3.794 2.815 7.589 5.63 11.383 8.444-2.37 6.43-4.215 13.053-5.523 19.784-.769-4.13-2.803-8.026-5.199-11.52-1.517-2.213-3.22-4.345-5.384-5.928-2.164-1.583-4.849-2.582-7.517-2.311-2.668.271-5.257 1.972-6.165 4.499-1.051 2.923.314 6.275 2.542 8.435 2.228 2.16 5.176 3.379 8.048 4.55 4.372 1.782 8.744 3.565 13.116 5.347-.036.213-.077.424-.112.637-1.145 6.981-1.718 14.051-1.726 21.12-1.445-4.48-4.519-8.348-7.935-11.632-1.934-1.859-4.032-3.602-6.472-4.712-2.441-1.111-5.272-1.545-7.83-.739-2.558.806-4.75 2.997-5.129 5.655-.438 3.075 1.577 6.08 4.195 7.743 2.619 1.662 5.753 2.259 8.803 2.823 4.792.886 9.584 1.773 14.377 2.66.001.098.004.197.005.296l-.114.078c.039.002.077.003.116.005.107 6.878.755 13.746 1.955 20.524-2.776-3.19-6.515-5.551-10.367-7.385-2.468-1.175-5.057-2.185-7.774-2.475-2.717-.29-5.596.2-7.812 1.799-2.216 1.599-3.633 4.418-3.145 7.107.564 3.111 3.478 5.367 6.545 6.133 3.067.766 6.291.336 9.422-.098 4.447-.616 8.895-1.232 13.342-1.848.136.006.272.011.409.017 1.519 7.429 3.711 14.712 6.568 21.735.302.742 1.518.412 1.212-.339-2.81-6.905-4.97-14.055-6.483-21.343 4.407.179 8.814.358 13.221.537 3.099.126 6.288.239 9.211-.801C401.318 187.665 403.951 185.181 404.209 182.085zM1063.76 689.042c2.685-.027 5.142-1.914 6.274-4.344 1.132-2.431 1.07-5.295.286-7.859-.784-2.565-2.239-4.873-3.83-7.034-2.634-3.575-5.814-6.918-9.702-8.987 6.268-1.782 12.676-3.077 19.153-3.878.589-.073 1.179-.135 1.769-.2.244 4.643.488 9.285.732 13.928.163 3.098.346 6.283 1.654 9.097 1.308 2.814 4.026 5.205 7.132 5.173 2.685-.027 5.142-1.913 6.274-4.344 1.132-2.431 1.07-5.294.286-7.859-.784-2.565-2.239-4.873-3.831-7.034-2.716-3.688-6.015-7.13-10.071-9.18 7.212-.668 14.478-.733 21.699-.188.428 4.695.855 9.389 1.283 14.083.282 3.089.588 6.265 2.003 9.027 1.415 2.762 4.223 5.047 7.325 4.896 2.682-.13 5.065-2.109 6.102-4.582 1.038-2.472.866-5.332-.016-7.865-.882-2.533-2.424-4.784-4.098-6.882-2.679-3.359-5.86-6.484-9.654-8.421 5.214.513 10.397 1.339 15.51 2.49 1.514.341 3.018.72 4.517 1.117.599 4.813 1.198 9.627 1.797 14.44.383 3.078.793 6.243 2.299 8.956 1.505 2.714 4.386 4.905 7.482 4.654 2.676-.218 4.992-2.274 5.948-4.779.956-2.505.691-5.358-.274-7.86-.965-2.503-2.581-4.702-4.322-6.744-2.488-2.918-5.371-5.633-8.703-7.472 5.034 1.53 9.967 3.381 14.766 5.548 2.748 3.849 5.497 7.697 8.245 11.546 1.804 2.526 3.672 5.115 6.289 6.787 2.617 1.672 6.195 2.231 8.797.538 2.249-1.464 3.306-4.373 2.952-7.031-.353-2.658-1.947-5.041-3.988-6.784-2.041-1.743-4.51-2.91-7.014-3.879-4.615-1.786-9.647-2.968-14.508-2.206-.015-.008-.027-.018-.044-.025-5.103-2.315-10.361-4.274-15.727-5.873 3.984-.228 7.925-1.577 11.559-3.304 2.424-1.152 4.799-2.498 6.703-4.388 1.904-1.89 3.314-4.384 3.466-7.06.153-2.677-1.12-5.5-3.473-6.793-2.722-1.496-6.248-.673-8.732 1.188-2.484 1.861-4.152 4.582-5.761 7.234-2.45 4.039-4.9 8.079-7.35 12.118-6.623-1.762-13.389-2.984-20.211-3.66 4.041-1.15 7.731-3.537 10.987-6.248 2.062-1.717 4.027-3.61 5.402-5.912 1.375-2.302 2.12-5.068 1.602-7.699-.518-2.631-2.452-5.051-5.052-5.72-3.008-.774-6.219.896-8.162 3.315-1.943 2.419-2.883 5.468-3.782 8.436-1.368 4.519-2.736 9.038-4.105 13.556-.215-.016-.43-.037-.645-.052-7.057-.491-14.15-.404-21.189.245 4.327-1.855 7.892-5.275 10.844-8.982 1.671-2.098 3.211-4.349 4.09-6.882.879-2.533 1.048-5.393.008-7.865-1.04-2.472-3.425-4.451-6.107-4.581-3.102-.15-5.908 2.135-7.32 4.897-1.412 2.762-1.714 5.938-1.992 9.027-.437 4.854-.875 9.708-1.312 14.562-.098.01-.196.022-.294.033l-.088-.107c.002.039.004.077.006.115-6.838.746-13.616 2.03-20.254 3.855 2.918-3.06 4.922-7.002 6.39-11.009.94-2.566 1.705-5.238 1.741-7.971.036-2.733-.719-5.553-2.517-7.611-1.798-2.057-4.737-3.206-7.369-2.471-3.045.851-5.021 3.962-5.498 7.087-.477 3.125.25 6.295.973 9.372 1.027 4.371 2.053 8.742 3.08 13.113.007.136.014.272.021.408-7.255 2.203-14.303 5.062-21.03 8.56-.711.369-.27 1.55.45 1.175 6.614-3.439 13.532-6.255 20.648-8.438.231 4.404.463 8.809.694 13.213.163 3.097.346 6.283 1.654 9.097C1057.937 686.683 1060.654 689.073 1063.76 689.042z"
                                  className="colorB9B8FF svgShape"
                                ></path>
                                <path
                                  fill="#9adaf5"
                                  d="M261.217,229.09c-12.767-5.441-25.884-8.456-38.526-9.941c-0.233-0.019-0.418-0.057-0.652-0.076
c-4.141-0.478-8.238-0.776-12.242-0.913c2.534,5.948,1.651,11.324-1.259,16.358c0.082-7.648-3.676-12.991-10.952-16.212
c-0.306-0.13-0.676-0.208-1.006-0.188c-10.112,0.317-19.381,1.395-27.295,2.689c-0.229,0.064-0.442,0.094-0.656,0.124
c-13.704,2.327-23.106,5.32-25.155,5.974c-0.277,0.085-0.423,0.142-0.423,0.142s0.059,0.146,0.19,0.403
c1.366,2.835,10.252,20.783,26.668,40.128c0.141,0.141,0.268,0.316,0.409,0.456c4.569,5.327,9.692,10.769,15.383,16.01
c6.239,4.429,12.262,2.851,15.732,0.75c-1.84,3.28-4.304,5.568-8.186,5.804c9.662,7.82,20.693,14.974,33.12,20.269
c0.341,0.145,0.715,0.305,1.07,0.416l0.715,0.305c6.546,2.67,13.188,4.735,19.815,6.272c0.218,0.054,0.404,0.091,0.588,0.131
c46.162,10.62,90.825-3.374,95.555-4.939c0.277-0.083,0.422-0.142,0.422-0.142s-0.059-0.145-0.19-0.403
c-1.196-2.479-7.852-15.936-20.048-31.875c-0.126-0.175-0.234-0.301-0.36-0.476c-3.854-5.021-8.253-10.275-13.23-15.494
c-0.248-0.267-0.497-0.534-0.746-0.8c-6.623-6.925-14.168-13.762-22.719-19.941c-1.582,3.43-2.971,6.217-2.971,6.217l-5.224-11.721
C273.479,234.96,267.515,231.774,261.217,229.09z M156.39,241.342c-0.415-0.821-0.062-1.838,0.744-2.218
c0.82-0.414,1.803-0.077,2.217,0.744c0.414,0.821,0.076,1.803-0.744,2.218C157.802,242.465,156.805,242.161,156.39,241.342z
M160.412,245.308c0.566-1.328,2.071-1.934,3.399-1.368c1.328,0.566,1.967,2.086,1.401,3.414c-0.566,1.327-2.12,1.953-3.447,1.387
C160.437,248.175,159.847,246.636,160.412,245.308z M207.857,282.464c0.392-0.919,1.446-1.315,2.365-0.923
c0.885,0.377,1.33,1.411,0.938,2.331c-0.392,0.919-1.445,1.315-2.331,0.937C207.91,284.417,207.466,283.383,207.857,282.464z
M211.358,290.391c0.682-1.6,2.527-2.342,4.093-1.674c1.6,0.682,2.343,2.527,1.661,4.126c-0.668,1.567-2.513,2.309-4.113,1.627
C211.433,293.803,210.691,291.958,211.358,290.391z M213.749,221.534c0.189-0.443,0.674-0.638,1.116-0.449
c0.443,0.189,0.673,0.688,0.484,1.131c-0.188,0.442-0.708,0.623-1.151,0.434C213.756,222.462,213.561,221.976,213.749,221.534z
M194.776,225.275c0.435-1.021,1.6-1.49,2.622-1.055c1.021,0.435,1.49,1.601,1.055,2.622c-0.435,1.022-1.601,1.49-2.622,1.055
C194.81,227.462,194.341,226.297,194.776,225.275z M200.462,230.434c0.174-0.408,0.674-0.638,1.117-0.449
c0.443,0.189,0.657,0.723,0.483,1.131c-0.189,0.443-0.722,0.657-1.165,0.469C200.454,231.395,200.274,230.877,200.462,230.434z"
                                  className="colorB2B0FB svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M230.41,241.909l8.063-11.368l0.453,0.354l-8.291,11.714l8.507,25.066l28.462,12.129l-9.311-28.466
l0.52-0.181l9.506,28.952l49.332,21.023l-7.692-37.27c0.249,0.266,0.498,0.534,0.746,0.8l4.888,23.646l8.341-8.152
c0.126,0.175,0.234,0.301,0.36,0.476l-8.559,8.381l2.562,12.395l26.351,11.23l-0.233,0.546l-38.301-16.322l-16.477,7.42
l-0.249-0.548l16.011-7.176l-26.487-11.288l-20.96,10.86c-2.196,5.058-6.742,15.633-9.398,21.863
c-0.185-0.04-0.37-0.077-0.588-0.131c2.815-6.605,7.666-17.893,9.15-21.283l-28.965,15.011l-0.715-0.305l50.761-26.32
l-52.838-22.517l-14.226,10.632l-0.327-0.46l13.94-10.433l-22.402-9.547l-32.026,15.397c-0.141-0.141-0.268-0.315-0.409-0.456
l15.933-7.651c-6.283-2.155-15.24-5.208-15.808-5.29l0.033-0.267l-0.035-0.015l-0.267-0.033l0.136-0.224
c0.16-0.093,0.32-0.186,16.698,5.467l15.03-7.233l-58.388-24.882c-0.132-0.257-0.19-0.403-0.19-0.403s0.146-0.058,0.423-0.142
l45.826,19.529l-20.671-25.503c0.214-0.03,0.427-0.06,0.656-0.124l21.172,26.12l47.97,20.443l-16.388-48.297
c0.233,0.018,0.419,0.057,0.652,0.076L230.41,241.909z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#ffe4b6"
                                  d="M327.48,161.937c-6.954-12.01-15.643-22.289-24.869-31.059c-0.175-0.155-0.3-0.297-0.476-0.452
c-3.027-2.865-6.127-5.561-9.25-8.072c-1.539,6.279-5.469,10.052-10.817,12.336c4.652-6.072,4.849-12.6,0.957-19.542
c-0.167-0.288-0.416-0.572-0.693-0.753c-8.282-5.81-16.346-10.506-23.455-14.216c-0.221-0.086-0.41-0.19-0.599-0.295
c-12.362-6.356-21.68-9.599-23.713-10.304c-0.273-0.099-0.424-0.139-0.424-0.139s-0.04,0.152-0.09,0.437
c-0.607,3.088-4.259,22.779-2.723,48.104c0.028,0.197,0.025,0.414,0.054,0.61c0.462,7.003,1.298,14.43,2.71,22.037
c2.337,7.286,8.102,9.635,12.14,10.034c-3.44,1.521-6.783,1.875-10.032-0.264c3.042,12.051,7.58,24.391,14.349,36.081
c0.186,0.32,0.389,0.673,0.607,0.975l0.389,0.673c3.637,6.061,7.714,11.698,12.096,16.901c0.143,0.174,0.268,0.315,0.392,0.457
c30.572,36.181,74.706,51.766,79.429,53.35c0.271,0.099,0.423,0.139,0.423,0.139s0.04-0.151,0.09-0.436
c0.53-2.702,3.274-17.462,3.071-37.53c0.004-0.215-0.007-0.381-0.003-0.596c-0.074-6.33-0.443-13.172-1.296-20.332
c-0.039-0.362-0.078-0.725-0.117-1.088c-1.147-9.514-3.085-19.509-6.222-29.582c-3.323,1.796-6.106,3.194-6.106,3.194l2.849-12.512
C333.773,173.987,330.91,167.862,327.48,161.937z M236.246,108.879c0.161-0.906,1.053-1.507,1.926-1.329
c0.905,0.16,1.488,1.02,1.328,1.925c-0.161,0.905-1.02,1.489-1.925,1.329C236.702,110.625,236.086,109.784,236.246,108.879z
M237.086,114.466c1.25-0.724,2.817-0.306,3.541,0.943c0.723,1.249,0.324,2.849-0.926,3.573c-1.248,0.723-2.868,0.291-3.591-0.957
C235.387,116.775,235.837,115.189,237.086,114.466z M252.772,172.65c0.865-0.501,1.945-0.185,2.446,0.679
c0.482,0.833,0.218,1.927-0.647,2.428c-0.865,0.501-1.945,0.185-2.427-0.648C251.643,174.245,251.908,173.151,252.772,172.65z
M250.82,181.094c1.505-0.871,3.426-0.359,4.279,1.114c0.872,1.505,0.36,3.427-1.145,4.298c-1.474,0.853-3.395,0.341-4.267-1.165
C248.834,183.869,249.346,181.947,250.82,181.094z M294.025,127.425c0.417-0.241,0.922-0.106,1.163,0.31
c0.241,0.417,0.126,0.954-0.291,1.196c-0.416,0.241-0.941,0.074-1.182-0.342C293.474,128.172,293.61,127.666,294.025,127.425z
M276.599,119.041c0.961-0.556,2.174-0.233,2.731,0.728c0.556,0.96,0.233,2.174-0.728,2.731c-0.961,0.556-2.175,0.232-2.731-0.728
C275.314,120.811,275.638,119.598,276.599,119.041z M278.056,126.579c0.384-0.222,0.922-0.106,1.163,0.31
c0.241,0.416,0.092,0.972-0.292,1.195c-0.417,0.242-0.972,0.093-1.213-0.323C277.473,127.344,277.639,126.821,278.056,126.579z"
                                  className="colorFBBFF6 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M295.14,153.721l13.269-4.262l0.15,0.555l-13.659,4.402l-8.224,25.161l15.503,26.774l9.619-28.364
l0.525,0.167l-9.755,28.869l26.871,46.407l16.194-34.437c0.039,0.363,0.078,0.725,0.117,1.088l-10.268,21.854l11.564-1.521
c-0.004,0.215,0.007,0.381,0.003,0.596l-11.875,1.574l-5.382,11.456l14.353,24.788l-0.513,0.297l-20.862-36.03l-17.635-3.943
l0.129-0.588l17.116,3.859l-14.427-24.916l-23.286-3.879c-4.791,2.731-14.77,8.467-20.631,11.86
c-0.124-0.143-0.25-0.284-0.392-0.457c6.213-3.598,16.864-9.722,20.085-11.545l-32.181-5.357l-0.389-0.673l56.405,9.377
l-28.78-49.705l-17.76-0.023l0.015-0.564l17.412,0.011l-12.202-21.074l-34.862-6.884c-0.029-0.197-0.025-0.413-0.054-0.61
l17.338,3.432c-3.735-5.492-9.072-13.307-9.479-13.713l0.187-0.194l-0.019-0.032l-0.194-0.187l0.243-0.098
c0.184,0.021,0.367,0.043,10.084,14.388l16.365,3.225l-31.803-54.926c0.049-0.285,0.09-0.437,0.09-0.437s0.151,0.041,0.424,0.139
l24.961,43.108l-1.248-32.804c0.189,0.104,0.377,0.208,0.599,0.295l1.28,33.599l26.129,45.126l15.848-48.477
c0.175,0.155,0.301,0.297,0.476,0.452L295.14,153.721z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#ffe4b6"
                                  d="M1126.691,609.987c11.673-7.506,21.536-16.664,29.866-26.289c0.147-0.182,0.283-0.314,0.429-0.496
c2.721-3.158,5.269-6.38,7.632-9.616c-6.344-1.245-10.295-4.995-12.826-10.231c6.282,4.364,12.812,4.256,19.565,0.046
c0.28-0.18,0.551-0.443,0.72-0.727c5.418-8.543,9.733-16.818,13.108-24.092c0.076-0.225,0.171-0.419,0.266-0.612
c5.773-12.644,8.578-22.104,9.188-24.167c0.086-0.277,0.12-0.43,0.12-0.43s-0.154-0.034-0.44-0.069
c-3.113-0.462-22.953-3.193-48.178-0.478c-0.196,0.038-0.412,0.044-0.607,0.082c-6.973,0.788-14.354,1.969-21.886,3.733
c-7.169,2.674-9.247,8.543-9.458,12.594c-1.679-3.365-2.189-6.688-0.203-10.033c-11.896,3.601-24.012,8.708-35.373,16.014
c-0.312,0.2-0.654,0.42-0.945,0.651l-0.654,0.42c-5.885,3.916-11.326,8.251-16.319,12.87c-0.167,0.15-0.302,0.283-0.439,0.413
c-34.717,32.225-48.229,77.036-49.591,81.829c-0.087,0.276-0.119,0.429-0.119,0.429s0.153,0.033,0.44,0.07
c2.723,0.403,17.595,2.456,37.632,1.319c0.215-0.006,0.38-0.024,0.596-0.031c6.319-0.368,13.137-1.056,20.25-2.242
c0.36-0.056,0.721-0.111,1.081-0.168c9.45-1.589,19.344-3.991,29.26-7.594c-1.948-3.236-3.475-5.951-3.475-5.951l12.631,2.263
C1114.947,616.835,1120.933,613.69,1126.691,609.987z M1175.44,516.38c0.913,0.118,1.555,0.981,1.417,1.862
c-0.118,0.911-0.949,1.534-1.861,1.417c-0.911-0.118-1.535-0.95-1.417-1.861C1173.718,516.917,1174.529,516.263,1175.44,516.38z
M1169.899,517.479c0.781,1.214,0.437,2.8-0.777,3.581c-1.214,0.781-2.831,0.456-3.612-0.758c-0.78-1.214-0.425-2.851,0.789-3.631
C1167.513,515.89,1169.119,516.266,1169.899,517.479z M1112.509,535.86c0.54,0.841,0.276,1.935-0.564,2.475
c-0.809,0.52-1.915,0.307-2.455-0.533c-0.54-0.84-0.276-1.934,0.533-2.455C1110.863,534.807,1111.968,535.02,1112.509,535.86z
M1103.983,534.303c0.941,1.463,0.518,3.406-0.914,4.326c-1.463,0.941-3.406,0.519-4.347-0.944
c-0.921-1.432-0.499-3.376,0.964-4.317C1101.119,532.449,1103.062,532.871,1103.983,534.303z M1159.607,574.961
c0.26,0.405,0.149,0.916-0.255,1.176c-0.405,0.26-0.947,0.17-1.208-0.235c-0.26-0.404-0.118-0.936,0.287-1.197
C1158.835,574.445,1159.347,574.557,1159.607,574.961z M1167.17,557.163c0.6,0.934,0.334,2.161-0.6,2.762
c-0.933,0.6-2.161,0.334-2.762-0.6c-0.601-0.934-0.333-2.162,0.6-2.762C1165.342,555.962,1166.569,556.229,1167.17,557.163z
M1159.708,558.969c0.24,0.373,0.149,0.916-0.255,1.176c-0.405,0.26-0.967,0.138-1.207-0.236c-0.26-0.405-0.138-0.967,0.267-1.227
C1158.916,558.422,1159.447,558.564,1159.708,558.969z"
                                  className="colorFBBFF6 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M1133.391,577.3l4.876,13.056l-0.547,0.176l-5.033-13.439l-25.516-7.042l-26.023,16.734l28.781,8.287
l-0.142,0.532l-29.292-8.399l-45.105,29.004l35.155,14.572c-0.36,0.056-0.721,0.112-1.081,0.168l-22.309-9.239l2.059,11.48
c-0.215,0.006-0.38,0.024-0.596,0.031l-2.125-11.789l-11.694-4.843l-24.093,15.492l-0.321-0.499l35.019-22.518l3.117-17.8
l0.593,0.102l-3.057,17.277l24.217-15.572l2.79-23.441c-2.951-4.658-9.146-14.359-12.809-20.056
c0.137-0.131,0.272-0.263,0.439-0.413c3.883,6.039,10.497,16.393,12.468,19.526l3.852-32.396l0.654-0.42l-6.739,56.78l48.31-31.065
l-0.805-17.742l0.564-0.012l0.801,17.393l20.482-13.171l5.252-35.145c0.195-0.038,0.411-0.045,0.607-0.082l-2.62,17.479
c5.312-3.987,12.87-9.682,13.256-10.107l0.202,0.178l0.032-0.02l0.177-0.202l0.109,0.238c-0.013,0.185-0.026,0.369-13.903,10.744
l-2.459,16.498l53.384-34.328c0.287,0.036,0.44,0.069,0.44,0.069s-0.034,0.153-0.12,0.43l-41.898,26.942l32.71-2.775
c-0.095,0.193-0.19,0.387-0.266,0.612l-33.502,2.844l-43.859,28.203l49.162,13.572c-0.146,0.182-0.282,0.314-0.429,0.496
L1133.391,577.3z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#bee3ff"
                                  d="M1155.366,228.736l-7.379-3.065c1.871-10.44,2.122-20.95,0.862-31.171l8.659-3.577
c12.938-5.344,19.093-20.165,13.748-33.104c-5.345-12.938-20.166-19.093-33.104-13.748l-7.395,3.055
c-5.903-8.504-13.079-16.148-21.412-22.649c-0.003-0.002-0.005-0.004-0.008-0.006l3.593-8.652
c5.369-12.928-0.758-27.76-13.686-33.129c-12.928-5.369-27.76,0.758-33.129,13.686l-3.065,7.381
c-10.439-1.871-20.949-2.122-31.17-0.864l-3.577-8.659c-5.345-12.938-20.166-19.093-33.104-13.748
c-12.938,5.345-19.093,20.166-13.748,33.104l3.054,7.392c-8.505,5.904-16.151,13.081-22.653,21.415
c-0.002,0.003-0.003,0.005-0.005,0.007l-8.648-3.592c-12.928-5.369-27.76,0.758-33.129,13.686
c-5.369,12.928,0.758,27.76,13.686,33.129l7.375,3.063c-1.872,10.441-2.123,20.953-0.864,31.175l-8.653,3.575
c-12.938,5.345-19.093,20.166-13.748,33.104c5.345,12.938,20.166,19.093,33.104,13.748l7.369-3.044
c0.001,0.002,0.003,0.004,0.004,0.006c5.912,8.483,13.11,16.138,21.434,22.662l-3.583,8.628
c-5.369,12.928,0.758,27.76,13.686,33.129c12.928,5.369,27.76-0.759,33.129-13.686l3.063-7.374
c10.442,1.872,20.954,2.122,31.175,0.863l3.575,8.653c5.345,12.938,20.166,19.093,33.104,13.748
c12.937-5.345,19.093-20.166,13.748-33.103l-3.046-7.372c0.001,0,0.001,0,0.002-0.001c8.484-5.912,16.139-13.111,22.663-21.435
l8.632,3.585c12.928,5.369,27.76-0.758,33.129-13.686C1174.421,248.937,1168.294,234.105,1155.366,228.736z M1114.255,236.131
c-15.982,38.482-60.161,56.733-98.643,40.751c-38.482-15.982-56.734-60.16-40.752-98.643c15.991-38.504,60.161-56.733,98.643-40.751
C1111.986,153.47,1130.246,197.627,1114.255,236.131z"
                                  className="colorAEBEFF svgShape"
                                ></path>
                                <path
                                  fill="#bee3ff"
                                  d="M1000.508 188.891c-10.104 24.328 1.428 52.241 25.756 62.344 24.328 10.104 52.263-1.418 62.366-25.746 10.104-24.328-1.44-52.272-25.769-62.376C1038.533 153.009 1010.612 164.563 1000.508 188.891zM1239.239 411.993l-4.449-1.848c1.128-6.294 1.279-12.63.52-18.792l5.22-2.156c7.8-3.222 11.51-12.157 8.288-19.957-3.222-7.799-12.157-11.51-19.957-8.288l-4.458 1.842c-3.559-5.127-7.885-9.735-12.909-13.654-.002-.001-.003-.002-.005-.004l2.166-5.216c3.237-7.794-.457-16.735-8.251-19.972-7.794-3.237-16.736.457-19.972 8.251l-1.848 4.45c-6.294-1.128-12.63-1.279-18.791-.521l-2.156-5.22c-3.222-7.8-12.157-11.511-19.957-8.288s-11.51 12.157-8.288 19.957l1.841 4.457c-5.127 3.559-9.737 7.886-13.657 12.91-.001.002-.002.003-.003.004l-5.214-2.165c-7.793-3.237-16.735.457-19.972 8.251-3.237 7.794.457 16.736 8.251 19.972l4.446 1.847c-1.129 6.295-1.28 12.632-.521 18.794l-5.217 2.155c-7.8 3.222-11.51 12.157-8.288 19.957 3.222 7.8 12.157 11.511 19.957 8.288l4.442-1.835c.001.001.001.002.002.004 3.564 5.114 7.904 9.729 12.922 13.662l-2.16 5.202c-3.237 7.794.457 16.736 8.251 19.972 7.794 3.237 16.735-.457 19.972-8.251l1.846-4.446c6.295 1.129 12.632 1.279 18.794.52l2.155 5.217c3.222 7.8 12.157 11.51 19.957 8.288 7.8-3.222 11.51-12.157 8.288-19.957l-1.836-4.444c0 0 .001 0 .001-.001 5.115-3.564 9.73-7.904 13.663-12.923l5.204 2.161c7.794 3.237 16.736-.457 19.972-8.251C1250.727 424.172 1247.033 415.23 1239.239 411.993zM1214.455 416.451c-9.635 23.2-36.269 34.202-59.468 24.567-23.199-9.635-34.203-36.268-24.568-59.468 9.64-23.213 36.269-34.202 59.468-24.567C1213.087 366.618 1224.095 393.239 1214.455 416.451z"
                                  className="colorAEBEFF svgShape"
                                ></path>
                                <path
                                  fill="#bee3ff"
                                  d="M1145.881 387.972c-6.091 14.666.861 31.494 15.527 37.585 14.667 6.091 31.507-.855 37.599-15.522 6.091-14.667-.869-31.513-15.535-37.604C1168.805 366.341 1151.972 373.306 1145.881 387.972zM308.733 530.243l-4.449-1.848c1.128-6.294 1.279-12.63.52-18.792l5.22-2.156c7.8-3.222 11.51-12.157 8.288-19.957-3.222-7.8-12.157-11.51-19.957-8.288l-4.458 1.842c-3.559-5.127-7.885-9.735-12.909-13.654-.002-.001-.003-.002-.005-.004l2.166-5.216c3.237-7.794-.457-16.736-8.251-19.972-7.794-3.237-16.736.457-19.972 8.251l-1.848 4.449c-6.294-1.128-12.63-1.279-18.791-.521l-2.156-5.22c-3.222-7.799-12.157-11.51-19.957-8.288-7.8 3.222-11.51 12.157-8.288 19.957l1.841 4.457c-5.127 3.559-9.737 7.886-13.657 12.91-.001.001-.002.003-.003.004l-5.214-2.165c-7.794-3.237-16.735.457-19.972 8.251-3.237 7.794.457 16.736 8.251 19.972l4.446 1.847c-1.129 6.295-1.28 12.632-.521 18.794l-5.217 2.155c-7.8 3.222-11.511 12.157-8.288 19.957 3.222 7.8 12.157 11.511 19.957 8.288l4.442-1.835c.001.001.002.003.002.004 3.564 5.114 7.903 9.729 12.922 13.662l-2.16 5.202c-3.237 7.794.457 16.736 8.251 19.972 7.794 3.237 16.736-.457 19.972-8.251l1.846-4.446c6.295 1.129 12.632 1.279 18.794.52l2.155 5.217c3.222 7.8 12.157 11.51 19.957 8.288 7.799-3.222 11.51-12.157 8.288-19.957l-1.836-4.444c.001 0 .001 0 .001-.001 5.115-3.564 9.73-7.904 13.663-12.923l5.204 2.161c7.794 3.237 16.736-.457 19.973-8.251C320.221 542.422 316.527 533.48 308.733 530.243zM283.949 534.701c-9.635 23.2-36.269 34.202-59.468 24.567-23.199-9.635-34.203-36.268-24.568-59.468 9.641-23.213 36.269-34.202 59.468-24.567C282.581 484.868 293.589 511.489 283.949 534.701z"
                                  className="colorAEBEFF svgShape"
                                ></path>
                                <path
                                  fill="#bee3ff"
                                  d="M215.375,506.222c-6.091,14.666,0.861,31.494,15.527,37.585c14.666,6.091,31.507-0.855,37.598-15.521
c6.091-14.667-0.868-31.513-15.535-37.604C238.299,484.59,221.466,491.555,215.375,506.222z"
                                  className="colorAEBEFF svgShape"
                                ></path>
                                <rect
                                  width="750.857"
                                  height="481.544"
                                  x="289.044"
                                  y="207.498"
                                  fill="#141414"
                                  className="colorFFF svgShape"
                                ></rect>
                                <rect
                                  width="129.666"
                                  height="149.92"
                                  x="604.392"
                                  y="702.109"
                                  fill="#47a6ce"
                                  className="color7E97FB svgShape"
                                ></rect>
                                <path
                                  fill="#3886a2"
                                  d="M734.058,702.109v149.92H716.55c1.24-14.988,2.635-60.107-21.067-94.692
c-21.96-31.99-69.133-35.669-91.091-35.398v-19.83H734.058z"
                                  className="color6E88F0 svgShape"
                                ></path>
                                <path
                                  fill="#4d4d4d"
                                  d="M799.372,852.029H539.076c-21.47,0-38.873,17.405-38.873,38.875l0,0h338.045l0,0
C838.247,869.434,820.842,852.029,799.372,852.029z"
                                  className="color4D4D4D svgShape"
                                ></path>
                                <path
                                  fill="#47a6ce"
                                  d="M799.372 852.029H539.076c-21.47 0-38.873 17.405-38.873 38.875l0 0h338.045l0 0C838.247 869.434 820.842 852.029 799.372 852.029zM1044.813 194.024H293.63c-6.177 0-11.19 5.013-11.19 11.189v493.336c0 6.177 5.013 11.189 11.19 11.189h751.183c6.185 0 11.189-5.012 11.189-11.189V205.213C1056.002 199.036 1050.999 194.024 1044.813 194.024zM1037.35 655.651c0 6.59-5.322 11.93-11.893 11.93H308.47c-6.571 0-11.903-5.341-11.903-11.93v-434.18c0-6.589 5.332-11.93 11.903-11.93h716.987c6.571 0 11.893 5.341 11.893 11.93V655.651z"
                                  className="color7E97FB svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M1007.931,689.172h-30.309c-2.421,0-4.384-1.963-4.384-4.385l0,0c0-2.421,1.964-4.385,4.384-4.385h30.309
c2.421,0,4.385,1.964,4.385,4.385l0,0C1012.316,687.209,1010.352,689.172,1007.931,689.172z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#dfe2ed"
                                  d="M1010.008,680.997c0.344,0.625,0.593,1.31,0.593,2.076c0,2.421-1.962,4.385-4.384,4.385H975.91
c-0.768,0-1.452-0.249-2.077-0.595c0.745,1.354,2.134,2.308,3.79,2.308h30.309c2.421,0,4.385-1.963,4.385-4.385
C1012.316,683.132,1011.362,681.742,1010.008,680.997z"
                                  className="colorDFE2ED svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M964.726,689.172H947.29c-2.422,0-4.385-1.963-4.385-4.385l0,0c0-2.421,1.963-4.385,4.385-4.385h17.435
c2.421,0,4.385,1.964,4.385,4.385l0,0C969.11,687.209,967.147,689.172,964.726,689.172z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#dfe2ed"
                                  d="M965.946,680.649c0.606,0.752,1.021,1.669,1.021,2.71c0,2.422-1.963,4.384-4.385,4.384h-17.436
c-0.432,0-0.825-0.129-1.22-0.247c0.804,0.998,1.984,1.676,3.364,1.676h17.435c2.421,0,4.383-1.963,4.383-4.385
C969.109,682.798,967.761,681.187,965.946,680.649z"
                                  className="colorDFE2ED svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M933.188,689.403h-17.435c-2.423,0-4.385-1.963-4.385-4.385l0,0c0-2.421,1.962-4.385,4.385-4.385h17.435
c2.421,0,4.383,1.964,4.383,4.385l0,0C937.571,687.44,935.608,689.403,933.188,689.403z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#dfe2ed"
                                  d="M933.188,680.633h-0.657c0.526,0.722,0.897,1.566,0.897,2.529c0,2.421-1.962,4.383-4.384,4.383h-16.779
c0.798,1.098,2.028,1.858,3.488,1.858h17.435c2.421,0,4.383-1.963,4.383-4.385C937.571,682.597,935.608,680.633,933.188,680.633z"
                                  className="colorDFE2ED svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M892.536,684.787c0-3.723,3.019-6.74,6.742-6.74c3.723,0,6.742,3.017,6.742,6.74
c0,3.724-3.019,6.742-6.742,6.742C895.555,691.528,892.536,688.511,892.536,684.787z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#dfe2ed"
                                  d="M902.914,679.124c0.675,1.05,1.078,2.293,1.078,3.637c0,3.721-3.017,6.74-6.742,6.74
c-1.342,0-2.584-0.403-3.634-1.078c1.199,1.865,3.281,3.106,5.662,3.106c3.723,0,6.742-3.017,6.742-6.742
C906.02,682.405,904.778,680.323,902.914,679.124z"
                                  className="colorDFE2ED svgShape"
                                ></path>
                                <path
                                  fill="#3886a2"
                                  d="M799.372,852.029H539.076c-12.082,0-22.875,5.512-30.005,14.157c4.704-2.02,9.883-3.149,15.329-3.149
h260.295c17.644,0,32.52,11.763,37.269,27.867h16.283l0,0C838.247,869.434,820.842,852.029,799.372,852.029z"
                                  className="color6E88F0 svgShape"
                                ></path>
                                <path
                                  fill="#bee3ff"
                                  d="M929.396,579.268H423.701c-3.233,0-5.855-2.621-5.855-5.855l0,0c0-3.233,2.621-5.855,5.855-5.855h505.695
c3.234,0,5.855,2.621,5.855,5.855l0,0C935.25,576.646,932.629,579.268,929.396,579.268z"
                                  className="colorAEBEFF svgShape"
                                ></path>
                                <path
                                  fill="#67c0ec"
                                  d="M537.819,579.268H423.701c-3.233,0-5.855-2.621-5.855-5.855l0,0c0-3.233,2.621-5.855,5.855-5.855h114.118
c3.233,0,5.855,2.621,5.855,5.855l0,0C543.673,576.646,541.052,579.268,537.819,579.268z"
                                  className="color768DEB svgShape"
                                ></path>
                                <path
                                  fill="#bee3ff"
                                  d="M557.259 430.894l30.092-33.119-14.445-3.139c12.19-39.775 47.018-68.78 89.784-72.82 48.117-4.545 93.901 25.453 108.864 71.33.96 2.943 3.822 4.734 6.781 4.455.469-.044.942-.141 1.409-.293 3.411-1.112 5.274-4.779 4.161-8.19-8.119-24.892-24.666-46.628-46.595-61.203-22.255-14.791-49.189-21.55-75.841-19.032-26.617 2.515-51.785 14.174-70.866 32.831-14.236 13.919-24.677 31.295-30.369 50.169l-16.609-3.609L557.259 430.894zM803.566 447.43l-18.305-40.832-26.209 36.268 15.931 1.633c-8.323 45.023-45.958 80.396-92.691 84.811-52.679 4.977-100.701-30.235-111.705-81.905-.748-3.509-4.198-5.749-7.706-5-3.508.747-5.747 4.197-5 7.706 12.378 58.12 66.388 97.729 125.633 92.132 52.91-4.998 95.442-45.288 104.421-96.415L803.566 447.43z"
                                  className="colorAEBEFF svgShape"
                                ></path>
                                <path
                                  fill="#67c0ec"
                                  d="M617.778 415.596h7.086v13.692c0 1.358-.212 2.64-.636 3.846-.422 1.206-1.087 2.261-1.991 3.164-.904.903-1.853 1.538-2.845 1.903-1.379.512-3.036.768-4.969.768-1.119 0-2.339-.078-3.66-.235-1.323-.157-2.427-.467-3.316-.932-.888-.465-1.702-1.125-2.438-1.982-.736-.856-1.241-1.739-1.513-2.647-.439-1.462-.658-2.757-.658-3.885v-13.692h7.086v14.018c0 1.253.347 2.232 1.042 2.936.695.705 1.659 1.057 2.892 1.057 1.224 0 2.182-.347 2.877-1.041.695-.694 1.043-1.679 1.043-2.952V415.596zM629.534 415.596h11.805c2.571 0 4.496.611 5.776 1.834 1.28 1.223 1.921 2.963 1.921 5.22 0 2.32-.697 4.133-2.093 5.44-1.395 1.306-3.525 1.959-6.387 1.959h-3.888v8.528h-7.133V415.596zM636.667 425.394h1.741c1.369 0 2.329-.238 2.884-.713.553-.476.831-1.085.831-1.827 0-.721-.241-1.332-.721-1.834-.481-.501-1.385-.752-2.712-.752h-2.023V425.394zM652.845 415.596h10.55c2.08 0 3.76.282 5.04.846 1.28.565 2.339 1.374 3.175 2.43.836 1.056 1.442 2.284 1.818 3.684.376 1.401.564 2.885.564 4.452 0 2.456-.28 4.361-.839 5.714-.559 1.353-1.334 2.487-2.328 3.402-.992.914-2.058 1.523-3.198 1.826-1.558.418-2.968.627-4.233.627h-10.55V415.596zM659.948 420.8v12.556h1.739c1.484 0 2.539-.165 3.167-.494.627-.329 1.117-.904 1.474-1.725.355-.82.532-2.15.532-3.99 0-2.435-.396-4.102-1.191-5-.795-.899-2.111-1.348-3.951-1.348H659.948zM690.473 434.783h-8.062l-1.12 3.794h-7.251l8.637-22.982h7.746l8.636 22.982h-7.436L690.473 434.783zM689 429.814l-2.537-8.261-2.51 8.261H689zM697.491 415.596h21.587v5.675h-7.243v17.306h-7.101v-17.306h-7.243V415.596zM722.275 415.596h19.032v4.907h-11.914v3.653h11.052v4.687h-11.052v4.531h12.259v5.204h-19.377V415.596z"
                                  className="color768DEB svgShape"
                                ></path>
                                <circle
                                  cx="996.848"
                                  cy="248.144"
                                  r="8.714"
                                  fill="#bee3ff"
                                  className="colorAEBEFF svgShape"
                                ></circle>
                                <circle
                                  cx="996.848"
                                  cy="280.743"
                                  r="8.714"
                                  fill="#bee3ff"
                                  className="colorAEBEFF svgShape"
                                ></circle>
                                <circle
                                  cx="996.848"
                                  cy="313.342"
                                  r="8.714"
                                  fill="#bee3ff"
                                  transform="rotate(-76.714 996.93 313.336)"
                                  className="colorAEBEFF svgShape"
                                ></circle>
                                <path
                                  fill="#bee3ff"
                                  d="M394.351,300.188h-2.307c-0.657-2.991-1.754-5.821-3.222-8.407l1.913-1.913c2.858-2.858,2.858-7.491,0-10.35
c-2.858-2.858-7.492-2.858-10.35,0l-1.634,1.634c-2.516-1.614-5.276-2.858-8.218-3.668c-0.001,0-0.002-0.001-0.003-0.001v-2.705
c0-4.042-3.277-7.318-7.318-7.318c-4.042,0-7.318,3.276-7.318,7.318v2.307c-2.991,0.657-5.821,1.754-8.407,3.222l-1.913-1.913
c-2.858-2.858-7.492-2.858-10.35,0c-2.858,2.858-2.858,7.492,0,10.349l1.633,1.633c-1.614,2.516-2.858,5.277-3.669,8.219
c0,0.001,0,0.001-0.001,0.002h-2.704c-4.042,0-7.318,3.276-7.318,7.318s3.276,7.318,7.318,7.318h2.306
c0.657,2.992,1.754,5.822,3.222,8.408l-1.912,1.911c-2.858,2.858-2.858,7.492,0,10.35c2.858,2.858,7.492,2.858,10.35,0l1.628-1.628
c0.001,0,0.001,0.001,0.002,0.001c2.516,1.607,5.283,2.851,8.225,3.669v2.698c0,4.042,3.276,7.318,7.318,7.318
c4.042,0,7.318-3.276,7.318-7.318v-2.306c2.992-0.657,5.823-1.754,8.409-3.222l1.911,1.912c2.858,2.858,7.492,2.858,10.35,0
c2.858-2.858,2.858-7.492,0-10.35l-1.628-1.628c0,0,0,0,0,0c1.608-2.516,2.852-5.283,3.669-8.225h2.699
c4.042,0,7.318-3.277,7.318-7.318C401.669,303.464,398.393,300.188,394.351,300.188z M384.208,306.712
c0,12.031-9.759,21.79-21.79,21.79c-12.031,0-21.79-9.759-21.79-21.79c0-12.038,9.759-21.79,21.79-21.79
C374.449,284.922,384.208,294.674,384.208,306.712z"
                                  className="colorAEBEFF svgShape"
                                ></path>
                                <path
                                  fill="#bee3ff"
                                  d="M348.646 306.712c0 7.606 6.166 13.772 13.772 13.772 7.606 0 13.779-6.166 13.779-13.772 0-7.606-6.173-13.779-13.779-13.779C354.811 292.933 348.646 299.106 348.646 306.712zM446.54 265.29h-1.675c-.477-2.172-1.274-4.226-2.339-6.104l1.389-1.389c2.075-2.075 2.075-5.439 0-7.514-2.075-2.075-5.439-2.075-7.514 0l-1.186 1.186c-1.826-1.172-3.831-2.075-5.966-2.663-.001 0-.001 0-.002-.001v-1.964c0-2.934-2.379-5.313-5.313-5.313-2.935 0-5.313 2.379-5.313 5.313v1.675c-2.171.477-4.226 1.273-6.104 2.339l-1.389-1.389c-2.075-2.075-5.439-2.075-7.514 0-2.075 2.075-2.075 5.439 0 7.514l1.186 1.186c-1.172 1.827-2.075 3.831-2.664 5.967 0 .001 0 .001 0 .002h-1.963c-2.935 0-5.313 2.379-5.313 5.313 0 2.935 2.379 5.313 5.313 5.313h1.674c.477 2.172 1.274 4.227 2.339 6.105l-1.388 1.388c-2.075 2.075-2.075 5.439 0 7.514 2.075 2.075 5.439 2.075 7.514 0l1.182-1.182c0 0 .001.001.001.001 1.827 1.167 3.836 2.07 5.972 2.664v1.958c0 2.935 2.379 5.314 5.313 5.314 2.935 0 5.313-2.379 5.313-5.314v-1.674c2.172-.477 4.227-1.274 6.105-2.34l1.388 1.388c2.075 2.075 5.439 2.075 7.514 0 2.075-2.075 2.075-5.439 0-7.514l-1.182-1.182c0 0 0 0 0 0 1.167-1.827 2.07-3.836 2.664-5.972h1.96c2.935 0 5.313-2.379 5.313-5.313C451.853 267.669 449.474 265.29 446.54 265.29zM439.176 270.027c0 8.735-7.086 15.821-15.821 15.821s-15.821-7.085-15.821-15.821c0-8.74 7.086-15.821 15.821-15.821S439.176 261.287 439.176 270.027z"
                                  className="colorAEBEFF svgShape"
                                ></path>
                                <path
                                  fill="#bee3ff"
                                  d="M413.356,270.027c0,5.522,4.477,9.999,9.999,9.999s10.004-4.477,10.004-9.999
c0-5.522-4.482-10.004-10.004-10.004S413.356,264.505,413.356,270.027z"
                                  className="colorAEBEFF svgShape"
                                ></path>
                                <path
                                  fill="#edc0c1"
                                  d="M528.081,258.837c-3.276-15.688-5.111-28.525-4.804-39.855c0.215-8.31,0.952-15.943,1.536-23.617
l-48.47-27.047l-15.401-8.597l29.329-0.322c0,0,41.986,13.106,49.211,24.854c4.859,7.906,4.069,25.851,2.007,42.14
c-2.178,17.083-5.767,32.359-5.767,32.359L528.081,258.837z"
                                  className="colorEDC0C1 svgShape"
                                ></path>
                                <path
                                  fill="#237796"
                                  d="M527.957,258.491l-2.38,8.102l1.684,12.535l2.487,0.094l2.146-11.013l4.093,7.252
c1.102,1.953,2.741,3.542,4.968,3.806c5.872,0.696,17.334,0.768,17.766-3.086c0.444-3.96-10.665-4.007-13.957-8.319
c-3.188-4.176-7.025-9.642-7.025-9.642L527.957,258.491z"
                                  className="color1B1970 svgShape"
                                ></path>
                                <path
                                  fill="#1d6386"
                                  d="M541.49,226.394l-9.958,1.751l-8.255-9.163l-36.456-40.44l-10.478-10.224l-8.876-8.668l22.804-0.25
c0,0,41.986,13.106,49.211,24.854C544.342,192.16,543.551,210.105,541.49,226.394z"
                                  className="color161470 svgShape"
                                ></path>
                                <path
                                  fill="#f1cccd"
                                  d="M536.738,259.21c-8.848-7.417-14.777-16.877-19.445-27.666c-3.027-6.994-5.405-14.509-7.412-22.321
c0,0-44.675-3.28-56.605-20.237c-8.128-11.558-1.906-29.158-1.906-29.158c7.627,0.152,17.612-1.627,23.951,0.349
c23.89,7.432,49.559,17.295,55.681,33.703c3.613,9.687,6.152,20.415,8.704,32.312c2.112,9.828,4.042,21.255,6.812,32.747
L536.738,259.21z"
                                  className="colorF1CCCD svgShape"
                                ></path>
                                <path
                                  fill="#184a67"
                                  d="M539.707,226.191l-14.85,3.544l-7.564,1.808c-3.027-6.994-5.405-14.509-7.412-22.321
c0,0-26.306-1.937-43.933-10.483c-5.344-2.599-9.901-5.805-12.672-9.754c-7.435-10.577-2.862-26.226-2.027-28.795
c0.081-0.238,0.121-0.363,0.121-0.363l0.055-0.001c7.627,0.139,18.453-2.36,24.778-0.383c23.89,7.433,49.814,17.681,55.936,34.089
C535.767,203.219,537.155,214.294,539.707,226.191z"
                                  className="color1F1C80 svgShape"
                                ></path>
                                <path
                                  fill="#1d6386"
                                  d="M465.949,198.74c-5.344-2.599-9.901-5.805-12.672-9.754c-7.435-10.577-2.862-26.226-2.027-28.795
c0.081-0.238,0.121-0.363,0.121-0.363l0.055-0.001l7.491,3.02C453.753,176.374,456.914,188.168,465.949,198.74z"
                                  className="color161470 svgShape"
                                ></path>
                                <path
                                  fill="#184a67"
                                  d="M477.554,70.034c-2.072-2.043-5.556-2.666-8.011-1.103c-1.823,1.161-2.882,3.275-4.719,4.412
c-2.786,1.725-6.464,0.741-9.59,1.724c-2.972,0.935-5.233,3.798-5.453,6.906c-0.158,2.236,0.625,4.617-0.309,6.655
c-0.773,1.687-2.531,2.675-4.232,3.415c-4.165,1.812-8.867,2.96-11.945,6.3c-0.918,0.996-1.685,2.28-1.535,3.627
c0.152,1.361,1.205,2.49,1.38,3.848c0.195,1.512-0.76,2.967-1.965,3.902c-1.205,0.934-2.655,1.485-3.99,2.222
c-3.743,2.066-7.509,9.458-1.052,14.245c2.752,2.04,9.27-3.637,10.942,1.524c0.38,1.173,4.341,4.677,5.548,4.928
c11.39,2.369,22.229-14.998,24.701-22.302c7.009-8.409,8.106-15.458,5.763-23.58c2.117-1.997,6.148-5.79,6.703-8.647
C480.342,75.256,479.627,72.078,477.554,70.034z"
                                  className="color1F1C80 svgShape"
                                ></path>
                                <path
                                  fill="#ffbe29"
                                  d="M480.093,129.118c5.077,5.999,13.966,12.433,19.161,18.33c2.504-2.22,5.437-3.338,7.524-6.155
c-8.76-12.973-19.087-26.904-30.22-37.99C478.704,111.808,477.605,120.741,480.093,129.118z"
                                  className="colorFF8CE7 svgShape"
                                ></path>
                                <path
                                  fill="#ffc077"
                                  d="M492.394,160.086c-11.815-1.442-21.446,3.561-33.477,2.761c-1.448-0.095-2.939-0.274-4.459-0.549
c-2.803-0.526-4.779-3.065-4.517-5.906l3.54-38.722l3.362-11.935L457.62,103l6.217-3.423l6.879,0.162
c10.303,4.34,17.507,16.311,11.434,29.694C476.254,142.438,492.394,160.086,492.394,160.086z"
                                  className="colorFF73E2 svgShape"
                                ></path>
                                <path
                                  fill="#f1cccd"
                                  d="M471.017,99.841c0.043,3.892-3.572,3.932-7.239,0.08l0.799-4.714l0.494-2.932l5.481,2.665l0.454,4.796
L471.017,99.841z"
                                  className="colorF1CCCD svgShape"
                                ></path>
                                <path
                                  fill="#af7c09"
                                  d="M462.076,127.358c-2.659,7.488-5.247,25.313-3.159,35.49c-1.448-0.095-2.939-0.274-4.459-0.549
c-2.803-0.526-4.779-3.065-4.517-5.906l3.54-38.722l3.362-11.935c3.101,2.387,4.899,5.37,4.899,5.37
S465.343,118.235,462.076,127.358z"
                                  className="colorF06CD4 svgShape"
                                ></path>
                                <path
                                  fill="#f1cccd"
                                  d="M495.378,146.803c-3.078,4.796-5.002,3.96-9.194,4.259c-5.469-0.253-11.321,0.652-16.85,0.281
c-6.671-0.448-16.45,1.813-21.923-2.556c-5.472-4.369,1.161-26.298,2.709-31.231c2.056-6.551,4.407-9.422,7.487-14.622
c-1.351,5.019-2.705,9.813-4.058,14.743c0.967,7.601,1.793,15.246,2.663,22.847c5.397,0.669,9.452,1.104,15.151,2.008
c5.031,0.798,11.898,1.893,17.142,3.264C493.09,143.238,498.455,142.008,495.378,146.803z"
                                  className="colorF1CCCD svgShape"
                                ></path>
                                <path
                                  fill="#ffbe29"
                                  d="M471.185,142.496c-0.528,3.047-1.098,5.844-1.851,9.012c-7.047,0.408-15.572,2.524-22.207-2.937
c-6.634-5.462-2.455-27.926,0.133-34.086c2.779-6.613,5.133-8.737,10.365-11.577c10.18,10.014-0.243,24.19-1.387,37.626
C461.233,141.113,466.215,141.743,471.185,142.496z"
                                  className="colorFF8CE7 svgShape"
                                ></path>
                                <path
                                  fill="#a9e5ff"
                                  d="M479.241,164.893l7.873-24.528c0.817-1.51,2.388-2.458,4.105-2.477l36.372-0.399
c3.42-0.038,5.747,3.458,4.392,6.599l-9.226,21.387c-0.796,1.846-2.605,3.05-4.615,3.072l-35.913,0.394
C480.112,168.965,478.595,166.908,479.241,164.893z"
                                  className="colorD2D1FF svgShape"
                                ></path>
                                <path
                                  fill="#279fb7"
                                  d="M480.174,167.497l35.913-0.394c2.011-0.022,3.82-1.226,4.616-3.073l9.225-21.387
c0.75-1.737,0.369-3.58-0.696-4.877c2.463,0.876,3.874,3.717,2.751,6.321l-9.226,21.387c-0.796,1.846-2.605,3.05-4.616,3.072
l-35.913,0.394c-1.167,0.013-2.135-0.617-2.675-1.513C479.754,167.467,479.958,167.5,480.174,167.497z"
                                  className="colorC0BFF5 svgShape"
                                ></path>
                                <path
                                  fill="#f1babb"
                                  d="M470.862,98.21c-0.372,0.052-1.547,0.076-1.982,0.004c-2.264-0.374-3.305-0.972-4.303-3.007l0.494-2.932
l5.481,2.665L470.862,98.21z"
                                  className="colorF1BABB svgShape"
                                ></path>
                                <path
                                  fill="#f1cccd"
                                  d="M475.398,78.619c0,0-2.221,4.844-9.837,6.715c0,0-2.411-2.573-3.422-0.937
c-1.011,1.636,1.512,4.479,1.512,4.479c0.337,4.717,3.775,8.425,7.285,7.502C478.917,94.279,475.398,78.619,475.398,78.619z"
                                  className="colorF1CCCD svgShape"
                                ></path>
                                <path
                                  fill="#184a67"
                                  d="M536.738,259.21l-2.38,8.102l1.683,12.535l2.487,0.094l2.146-11.013l4.093,7.251
c1.102,1.953,2.742,3.542,4.968,3.806c5.872,0.695,17.334,0.767,17.766-3.086c0.445-3.96-10.665-4.008-13.957-8.32
c-3.187-4.176-7.025-9.642-7.025-9.642L536.738,259.21z"
                                  className="color1F1C80 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M504.741,157.282c-1.363-1.333-1.387-3.519-0.054-4.882c1.333-1.363,3.519-1.387,4.882-0.054
c1.363,1.333,1.387,3.519,0.054,4.882C508.29,158.592,506.104,158.616,504.741,157.282z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#1f78af"
                                  d="M1133.366,686.846c0,0-23.257,3.44-22.86,3.21c0.397-0.231,42.566,21.396,42.566,21.396l41.55-18.617
l-20.601-5.99H1133.366z"
                                  className="color414C96 svgShape"
                                ></path>
                                <path
                                  fill="#f7c1ce"
                                  d="M1142.299,718.58c-0.118,0.001-0.235,0.002-0.348,0.004c-0.072,0-0.143,0-0.215,0.001
c-5.917,0.068-9.781-0.079-9.781-0.079s-0.284,0.064-0.802,0.17c-5.059,1.049-32.335,6.246-30.011-4.032
c2.037-9.024,18.402-7.902,24.965-7.074c0.025,0,0.045,0.004,0.065,0.008c1.638,0.209,2.647,0.394,2.647,0.394
s3.256-1.4,8.395-3.393c0.211-0.084,0.429-0.171,0.646-0.254c16.928-6.57,52.531-19.023,61.747-11.539
c-0.001,0.005-0.001,0.005-0.001,0.005c0.101,0.077,0.201,0.164,0.295,0.251c0.006-0.004,0.015,0.003,0.018,0.013
c0.098,0.092,0.19,0.188,0.283,0.285c0.081,0.078,0.16,0.166,0.232,0.263c0.03,0.027,0.058,0.063,0.087,0.1
c0.101,0.129,0.201,0.262,0.29,0.398c-0.001,0.005,0.004,0.006,0.004,0.006c0.097,0.148,0.188,0.3,0.273,0.456
c0.081,0.149,0.151,0.302,0.215,0.458c0.149,0.338,0.264,0.699,0.347,1.079c0.083,0.385,0.152,0.763,0.198,1.135
c0.085,0.667,0.119,1.313,0.089,1.945C1201.195,715.778,1161.589,718.324,1142.299,718.58z"
                                  className="colorF7C1CE svgShape"
                                ></path>
                                <path
                                  fill="#0c548a"
                                  d="M1142.606 720.515l-.655-1.931-.284-.842c-.004-.006-.003-.01-.003-.01l-4.45-13.153-.639-1.886c16.945-6.577 53.651-17.727 63.025-9.923l.004.006c.105.084.204.171.297.267.006-.004.015.003.018.013.098.092.19.188.283.285.081.078.16.166.232.263.03.027.058.063.087.1.101.129.201.262.29.398-.001.005.004.006.004.006.097.148.188.3.273.456.081.149.151.302.215.458.149.338.264.699.347 1.079.083.385.152.763.198 1.135.085.667.119 1.313.089 1.945C1201.255 715.985 1161.905 720.261 1142.606 720.515zM1128.808 708.018c0 0-30.856-6.029-32.2 7.015-1.444 14.013 35.337 3.521 35.337 3.521s-14.186 3.104-13.512-4.852C1119.084 706.004 1128.808 708.018 1128.808 708.018z"
                                  className="color323B7D svgShape"
                                ></path>
                                <path
                                  fill="#f7c1ce"
                                  d="M1174.656,655.066c-6.055,8.504-0.639,31.78-0.639,31.78h-40.652c1.123-1.592,4.288-21.655-2.841-32.714
c-11.505-17.841,0.89-31.712,0.89-31.712l16.906-3.073l1.079-5.382l0.741-3.707l0.174-0.862h7.604l0.276,1.617l0.595,3.524
l0.881,5.198l15.541,3.374C1175.213,623.107,1188.523,635.585,1174.656,655.066z"
                                  className="colorF7C1CE svgShape"
                                ></path>
                                <path
                                  fill="#43abf7"
                                  d="M1174.654,655.072c-6.057,8.502-0.634,31.774-0.634,31.774h-40.654c0.956-1.355,3.39-16.115-0.311-27.284
c-0.645-1.956-1.478-3.79-2.534-5.435c-11.502-17.838,0.889-31.708,0.889-31.708l16.915-3.078c0.649,3.783,9.872,3.56,11.347,0.389
l15.537,3.378C1175.21,623.109,1188.524,635.578,1174.654,655.072z"
                                  className="color5651E2 svgShape"
                                ></path>
                                <path
                                  fill="#d89999"
                                  d="M1133.366,686.846c0.956-1.355,3.39-16.115-0.311-27.284c8.016-2.329,6.663,19.922,20.016,27.284H1133.366z"
                                  className="colorC4626E svgShape"
                                ></path>
                                <path
                                  fill="#f7c1ce"
                                  d="M1196.764,672.758c-0.422,2.634-2.278,5.49-5.024,8.313c-7.023,7.212-21.329,6.891-31.142,9.513
l-1.025-5.228c0,0,17.519-4.941,21.287-11.087c0.4-0.656,0.678-1.267,0.789-1.811c1.278-6.123-5.813-13.781-5.813-13.781
l-0.754-35.553C1175.082,623.124,1198.898,659.366,1196.764,672.758z"
                                  className="colorF7C1CE svgShape"
                                ></path>
                                <path
                                  fill="#43abf7"
                                  d="M1196.998,672.757c-0.455,2.478-1.941,5.591-4.414,8.306c-0.261,0.286-0.692,0.334-1.017,0.126l-3.011-1.956
l-7.894-5.115c0.401-0.654,0.605-1.312,0.716-1.859c1.278-6.122-10.082-15.594-10.082-15.594l2.73-33.76
c3.659-0.165,9.67,8.185,14.661,18.422c0,0,0.005,0.014,0.014,0.038C1194.104,652.438,1198.295,665.704,1196.998,672.757z"
                                  className="color5651E2 svgShape"
                                ></path>
                                <path
                                  fill="#f7c1ce"
                                  d="M1147.653,685.444l0.178,3.477c0.314-0.109,0.288-0.565-0.037-0.632c-8.746-1.807-23.119,0.693-30.118-5.25
c-4.312-3.668-6.667-8.183-7.223-11.661c-2.134-13.392,21.096-48.93,21.096-48.93l-0.858,35.507c0,0-7.091,7.658-5.813,13.781
c0.222,1.09,1.089,2.434,2.345,3.901C1132.469,681.794,1147.653,685.444,1147.653,685.444z"
                                  className="colorF7C1CE svgShape"
                                ></path>
                                <path
                                  fill="#43abf7"
                                  d="M1124.876,671.735c0.223,1.089,1.709,2.043,2.962,3.509l-7.333,6.098l-2.948,2.449
c-4.313-3.669-6.844-8.364-7.792-11.757c-1.466-5.223,0.62-14.148,4.138-23.01c0.014-0.048,0.024-0.073,0.024-0.073
c5.31-13.373,13.852-26.577,18.314-26.684l2.575,36.03C1134.818,658.3,1123.598,665.613,1124.876,671.735z"
                                  className="color5651E2 svgShape"
                                ></path>
                                <path
                                  fill="#f7c1ce"
                                  d="M1205.16,713.497c2.448,10.449-25.37,5.384-30.532,4.357c-0.528-0.104-0.818-0.166-0.818-0.166
s-4.032,0.188-10.18,0.163c-0.12,0-0.24,0-0.36,0c-8.927-0.046-22.131-0.534-33.963-2.645c-14.515-2.586-26.973-7.601-26.951-17.216
c0-0.021,0.002-0.037-0.001-0.052c0.004-0.392,0.027-0.788,0.074-1.195c0.003-0.011,0.001-0.016,0.001-0.021
c0.05-0.418,0.12-0.84,0.209-1.271c0.082-0.388,0.195-0.757,0.345-1.102c0.064-0.16,0.135-0.316,0.216-0.469
c0.085-0.159,0.177-0.315,0.274-0.466c0,0,0.005-0.001,0.004-0.006c0.09-0.14,0.19-0.276,0.292-0.408
c0.028-0.037,0.057-0.075,0.087-0.102c0.072-0.099,0.152-0.189,0.234-0.27c0.093-0.099,0.186-0.197,0.286-0.291
c0.003-0.011,0.011-0.018,0.018-0.014c1.123-1.047,2.695-1.754,4.625-2.184c13.27-2.952,43.39,7.375,58.658,13.155
c0.221,0.083,0.443,0.17,0.66,0.253c5.25,1.988,8.578,3.386,8.578,3.386s1.027-0.197,2.693-0.424
c0.02-0.004,0.041-0.003,0.066-0.009C1186.351,705.602,1203.005,704.324,1205.16,713.497z"
                                  className="colorF7C1CE svgShape"
                                ></path>
                                <path
                                  fill="#1f78af"
                                  d="M1168.972 701.62l-.635 1.926-4.707 14.304-.651 1.971c-8.101-.038-19.674-.745-30.535-2.759 0 0 0 0-.006-.004-15.815-2.929-30.137-8.628-30.081-19.07 0-.021.002-.037-.001-.052.004-.392.031-.794.074-1.195.003-.011.001-.016.001-.021.05-.418.12-.84.209-1.271.082-.388.195-.757.345-1.102.064-.16.135-.316.216-.469.085-.159.177-.315.274-.466 0 0 .005-.001.004-.006.09-.14.19-.276.292-.408.028-.037.057-.075.087-.102.072-.099.152-.189.234-.27.093-.099.186-.197.286-.291.003-.011.011-.018.018-.014 1.16-1.118 2.816-1.895 4.853-2.385C1122.894 686.607 1153.734 695.854 1168.972 701.62zM1176.924 706.98c0 0 31.376-6.398 32.855 6.875 1.589 14.26-35.961 3.883-35.961 3.883s13.717 2.598 12.964-5.499C1186.054 704.403 1176.924 706.98 1176.924 706.98z"
                                  className="color414C96 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M1182.115,655.478v33.367c0,1.796-1.457,3.253-3.253,3.253h-51.125c-1.796,0-3.253-1.457-3.253-3.253
v-33.367c0-1.796,1.457-3.253,3.253-3.253h51.125C1180.658,652.225,1182.115,653.682,1182.115,655.478z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#b8e6ff"
                                  d="M1148.208,672.162c0-2.812,2.28-5.091,5.091-5.091c2.812,0,5.091,2.279,5.091,5.091
c0,2.812-2.279,5.091-5.091,5.091C1150.488,677.253,1148.208,674.974,1148.208,672.162z"
                                  className="colorD7E0FA svgShape"
                                ></path>
                                <path
                                  fill="#b8e6ff"
                                  d="M1182.115,655.478v33.367c0,1.796-1.457,3.253-3.253,3.253h-51.125c-1.796,0-3.253-1.457-3.253-3.253
c51.707,2.374,57.631-5.21,54.378-36.62C1180.658,652.225,1182.115,653.682,1182.115,655.478z"
                                  className="colorD7E0FA svgShape"
                                ></path>
                                <path
                                  fill="#147db7"
                                  d="M1196.998,672.757c-0.455,2.478-1.941,5.591-4.414,8.306c-0.261,0.286-0.692,0.334-1.017,0.126l-3.011-1.956
c1.583-2.745,3.917-4.921,5.013-9.17c2.935-11.372-4.466-27.716-4.868-28.699C1194.104,652.438,1198.295,665.704,1196.998,672.757z"
                                  className="color4743DE svgShape"
                                ></path>
                                <path
                                  fill="#184a67"
                                  d="M1143.641,600.155c0,0-6.092-6.527-1.15-15.199c0,0,1.493,2.704,3.263,1.958c0,0,0.093-6.34,12.962-7.646
c0,0-0.933,2.517-0.466,3.171c4.243-1.865,8.36,2.766,12.496,1.025c0,0,1.142,7.347-3.613,11.636c0,0,0.722,2.537-0.956,5.055
C1164.498,602.673,1143.641,600.155,1143.641,600.155z"
                                  className="color1F1C80 svgShape"
                                ></path>
                                <path
                                  fill="#f7c1ce"
                                  d="M1145.559,598.185c0,0-2.78-2.718-3.041-0.08c-0.311,3.122,3.406,5.444,3.406,5.444s0.906,9.653,9.05,9.653
c8.078,0,9.43-9.69,9.43-9.69s4.249-1.159,3.347-4.828c-0.427-1.742-2.643,0.038-2.643,0.038v-4.585c0,0-2.265,1.151-6.636-0.724
c-3.165-1.359-4.293-3.245-6.998-3.138C1148.392,590.398,1145.438,593.781,1145.559,598.185z"
                                  className="colorF7C1CE svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M1251.095,810.938h-196.118c-0.315-0.132-0.624-0.27-0.926-0.416c-0.315-0.145-0.624-0.296-0.932-0.46
c-0.252-0.132-0.504-0.265-0.756-0.409c-0.264-0.151-0.529-0.302-0.787-0.466c-0.221-0.132-0.441-0.271-0.655-0.409
c-0.227-0.151-0.454-0.303-0.674-0.46c-0.195-0.138-0.39-0.277-0.579-0.416c-0.201-0.151-0.397-0.302-0.592-0.46
c-0.176-0.139-0.346-0.277-0.51-0.416c-0.182-0.151-0.359-0.302-0.535-0.46c-0.151-0.132-0.302-0.271-0.447-0.409
c-0.17-0.151-0.334-0.309-0.497-0.466c-0.069-0.069-0.139-0.138-0.208-0.208c-0.07-0.069-0.132-0.132-0.195-0.201
c-0.151-0.151-0.296-0.302-0.435-0.46c-0.132-0.132-0.258-0.271-0.384-0.416c-0.132-0.151-0.271-0.302-0.397-0.46
c-0.12-0.132-0.233-0.27-0.34-0.409c-0.126-0.151-0.252-0.309-0.371-0.466c-0.107-0.133-0.208-0.271-0.309-0.41
c-0.113-0.151-0.227-0.302-0.334-0.46c-0.101-0.138-0.201-0.277-0.29-0.415c-0.107-0.151-0.208-0.309-0.309-0.46
c-0.088-0.139-0.176-0.271-0.258-0.41c-0.095-0.151-0.189-0.308-0.284-0.466c-0.082-0.139-0.164-0.277-0.239-0.416h-0.031v-24.923
h0.019c0.076-0.139,0.157-0.277,0.239-0.409c0.088-0.158,0.183-0.315,0.284-0.466c0.082-0.138,0.17-0.271,0.258-0.409
c0.095-0.151,0.195-0.309,0.302-0.46c0.094-0.139,0.189-0.277,0.29-0.416c0.107-0.157,0.22-0.308,0.333-0.46
c0.101-0.138,0.202-0.277,0.309-0.409c0.12-0.157,0.246-0.315,0.365-0.466c0.113-0.139,0.227-0.278,0.34-0.41
c0.132-0.157,0.264-0.308,0.403-0.46c0.12-0.145,0.246-0.283,0.378-0.416c0.139-0.157,0.284-0.309,0.435-0.46
c0.132-0.138,0.271-0.277,0.409-0.416c0.157-0.151,0.322-0.309,0.485-0.46c0.145-0.139,0.296-0.277,0.454-0.409
c0.176-0.157,0.359-0.315,0.541-0.466c0.164-0.139,0.328-0.277,0.498-0.409c0.195-0.157,0.391-0.309,0.592-0.46
c0.189-0.139,0.378-0.277,0.573-0.416c0.22-0.157,0.447-0.308,0.674-0.46c0.214-0.138,0.428-0.277,0.649-0.409
c0.258-0.164,0.523-0.315,0.787-0.466c0.252-0.145,0.504-0.283,0.762-0.416c0.302-0.157,0.605-0.309,0.913-0.453
c0.302-0.145,0.611-0.283,0.926-0.416h195.821c-0.044,0.132-0.095,0.271-0.139,0.416c-0.05,0.145-0.095,0.296-0.145,0.453
c-0.044,0.132-0.082,0.271-0.126,0.416c-0.044,0.151-0.088,0.302-0.139,0.466c-0.031,0.132-0.069,0.271-0.113,0.409
c-0.038,0.151-0.082,0.302-0.12,0.46c-0.038,0.132-0.069,0.271-0.107,0.416c-0.038,0.151-0.076,0.302-0.113,0.46
c-0.032,0.132-0.063,0.271-0.095,0.409c-0.038,0.151-0.069,0.309-0.107,0.466c-0.032,0.132-0.063,0.271-0.088,0.409
c-0.032,0.151-0.063,0.302-0.095,0.46c-0.032,0.138-0.057,0.271-0.082,0.416c-0.031,0.145-0.063,0.303-0.088,0.46
c-0.031,0.132-0.057,0.271-0.082,0.416c-0.025,0.151-0.057,0.302-0.082,0.46c-0.025,0.132-0.044,0.271-0.069,0.41
c-0.025,0.151-0.051,0.308-0.076,0.466c-0.019,0.132-0.038,0.271-0.057,0.409c-0.025,0.151-0.05,0.302-0.069,0.46
c-0.025,0.139-0.044,0.277-0.063,0.416c-0.019,0.151-0.038,0.302-0.063,0.46c-0.012,0.132-0.031,0.271-0.05,0.409
c-0.019,0.151-0.038,0.309-0.057,0.466c-0.013,0.132-0.031,0.271-0.044,0.409c-0.019,0.151-0.038,0.302-0.057,0.46
c-0.013,0.132-0.025,0.271-0.038,0.416c-0.019,0.151-0.031,0.302-0.044,0.46c-0.013,0.132-0.025,0.271-0.038,0.409
c-0.013,0.151-0.025,0.309-0.038,0.466c-0.013,0.139-0.025,0.271-0.031,0.41c-0.012,0.151-0.025,0.302-0.038,0.46
c-0.012,0.139-0.019,0.277-0.025,0.416c-0.012,0.151-0.025,0.302-0.032,0.46c-0.006,0.139-0.019,0.271-0.019,0.409
c-0.013,0.151-0.025,0.309-0.025,0.466c-0.012,0.139-0.019,0.277-0.019,0.416c-0.013,0.151-0.019,0.302-0.019,0.453
c-0.012,0.139-0.019,0.277-0.019,0.416c-0.007,0.151-0.013,0.309-0.019,0.466c0,0.132-0.006,0.271-0.006,0.409
c-0.006,0.151-0.013,0.308-0.013,0.46c-0.007,0.138-0.007,0.277-0.007,0.415c-0.006,0.151-0.006,0.302-0.006,0.46
c0,0.139-0.006,0.271,0,0.41c-0.006,0.151-0.006,0.308-0.006,0.466v0.409c0,0.151,0,0.309,0.006,0.459c0,0.139,0,0.277,0.006,0.416
c-0.006,0.151,0,0.302,0.007,0.46c0,0.132,0,0.271,0.006,0.409c0,0.157,0.006,0.309,0.012,0.466c0,0.132,0,0.271,0.006,0.409
c0.006,0.151,0.013,0.303,0.019,0.46c0,0.139,0.006,0.277,0.012,0.416c0.006,0.151,0.013,0.309,0.013,0.46
c0.013,0.138,0.019,0.277,0.025,0.416c0.006,0.151,0.013,0.302,0.025,0.459c0,0.139,0.013,0.271,0.019,0.41
c0.006,0.157,0.019,0.308,0.025,0.466c0.006,0.132,0.019,0.271,0.031,0.409c0,0.151,0.013,0.309,0.026,0.46
c0.006,0.139,0.019,0.277,0.031,0.416c0.006,0.151,0.019,0.302,0.032,0.46c0.006,0.132,0.019,0.271,0.031,0.409
c0.006,0.157,0.019,0.309,0.038,0.466c0.006,0.139,0.019,0.271,0.031,0.409c0.013,0.151,0.025,0.302,0.044,0.46
c0.006,0.139,0.019,0.277,0.038,0.416c0.013,0.151,0.025,0.309,0.044,0.46c0.013,0.138,0.025,0.271,0.038,0.409
c0.013,0.151,0.032,0.309,0.051,0.466c0.012,0.138,0.025,0.271,0.044,0.409c0.012,0.151,0.031,0.302,0.05,0.46
c0.013,0.138,0.031,0.277,0.044,0.416c0.019,0.157,0.038,0.309,0.057,0.46c0.013,0.138,0.032,0.277,0.051,0.416
c0.019,0.151,0.038,0.302,0.057,0.46c0.013,0.139,0.032,0.271,0.05,0.41c0.019,0.158,0.038,0.309,0.063,0.466
c0.019,0.132,0.038,0.271,0.057,0.409c0.019,0.151,0.038,0.309,0.063,0.46c0.019,0.139,0.038,0.277,0.057,0.416
c0.019,0.151,0.044,0.308,0.069,0.466c0.019,0.139,0.038,0.271,0.063,0.41c0.019,0.151,0.044,0.309,0.069,0.46
c0.018,0.138,0.038,0.277,0.063,0.415c0.019,0.151,0.044,0.302,0.076,0.46c0.019,0.139,0.037,0.271,0.069,0.41
c0.019,0.157,0.044,0.308,0.076,0.466c0.019,0.132,0.038,0.271,0.063,0.409c0.025,0.151,0.051,0.302,0.082,0.46
c0.019,0.139,0.044,0.278,0.075,0.416c0.019,0.151,0.044,0.302,0.082,0.46c0.019,0.139,0.044,0.271,0.069,0.409
c0.025,0.157,0.057,0.309,0.088,0.466c0.019,0.138,0.044,0.271,0.076,0.409c0.025,0.151,0.057,0.308,0.088,0.46
c0.019,0.139,0.051,0.277,0.076,0.416c0.032,0.151,0.057,0.309,0.088,0.46c0.031,0.138,0.057,0.277,0.082,0.416
c0.032,0.151,0.063,0.309,0.094,0.46c0.032,0.138,0.057,0.271,0.088,0.409c0.032,0.158,0.063,0.308,0.095,0.466
c0.025,0.139,0.057,0.271,0.088,0.409c0.032,0.151,0.063,0.302,0.095,0.46C1251.031,810.661,1251.063,810.799,1251.095,810.938z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#ffda82"
                                  d="M1254.086,805.794c0.687,0.68,1.109,1.625,1.109,2.671c0,2.084-1.688,3.779-3.779,3.779h-190.178
c-3.483,0-6.802-0.7-9.819-1.972c-0.315-0.132-0.623-0.271-0.926-0.416c-0.315-0.145-0.624-0.296-0.932-0.46
c-0.252-0.132-0.504-0.264-0.756-0.409c-0.265-0.151-0.529-0.302-0.787-0.466c-0.221-0.132-0.441-0.271-0.655-0.409
c-0.227-0.151-0.453-0.302-0.674-0.46c-0.195-0.139-0.391-0.278-0.58-0.416c-0.201-0.151-0.397-0.302-0.592-0.46
c-0.176-0.139-0.346-0.277-0.51-0.416c-0.183-0.151-0.359-0.302-0.536-0.46c-0.151-0.132-0.302-0.27-0.447-0.409
c-0.17-0.151-0.334-0.309-0.498-0.466c-0.069-0.069-0.138-0.138-0.208-0.208c-0.069-0.069-0.132-0.132-0.195-0.202
c-0.151-0.151-0.296-0.302-0.434-0.46c-0.132-0.132-0.258-0.271-0.384-0.415c-0.132-0.151-0.271-0.303-0.397-0.46
c-0.12-0.132-0.233-0.27-0.34-0.409c-0.126-0.151-0.252-0.308-0.372-0.466c-0.107-0.132-0.208-0.271-0.309-0.41
c-0.113-0.151-0.227-0.302-0.334-0.459c-0.101-0.139-0.202-0.278-0.29-0.416c-0.107-0.152-0.208-0.309-0.309-0.46
c-0.088-0.139-0.176-0.271-0.258-0.409c-0.094-0.151-0.189-0.309-0.283-0.466c-0.082-0.138-0.164-0.277-0.239-0.416
c-0.012-0.019-0.025-0.037-0.032-0.057c-2.066-3.672-3.244-7.904-3.244-12.414c0-4.51,1.178-8.742,3.244-12.414
c0.007-0.013,0.013-0.026,0.019-0.038c0.075-0.139,0.157-0.277,0.239-0.409c0.088-0.158,0.183-0.315,0.284-0.466
c0.082-0.138,0.17-0.271,0.258-0.409c0.094-0.151,0.195-0.308,0.302-0.46c0.095-0.138,0.189-0.277,0.29-0.416
c0.107-0.158,0.22-0.308,0.333-0.46c0.101-0.138,0.202-0.277,0.309-0.409c0.12-0.157,0.245-0.315,0.365-0.466
c0.113-0.139,0.227-0.277,0.34-0.409c0.132-0.157,0.265-0.308,0.403-0.46c0.12-0.145,0.246-0.283,0.378-0.415
c0.139-0.158,0.283-0.309,0.435-0.46c0.132-0.139,0.271-0.277,0.409-0.416c0.157-0.152,0.321-0.309,0.485-0.46
c0.145-0.139,0.296-0.277,0.453-0.409c0.176-0.158,0.359-0.315,0.542-0.466c0.164-0.138,0.328-0.277,0.498-0.409
c0.195-0.158,0.39-0.308,0.592-0.46c0.189-0.139,0.378-0.277,0.573-0.416c0.221-0.158,0.447-0.309,0.674-0.46
c0.214-0.138,0.428-0.277,0.649-0.409c0.258-0.164,0.523-0.315,0.787-0.466c0.252-0.145,0.504-0.283,0.762-0.416
c0.302-0.157,0.605-0.309,0.913-0.453c0.302-0.145,0.611-0.283,0.926-0.416c3.036-1.285,6.374-1.997,9.876-1.997h190.178
c1.046,0,1.99,0.422,2.671,1.109c0.687,0.68,1.109,1.625,1.109,2.67c0,2.091-1.688,3.779-3.779,3.779h-189.517
c-0.636,0-1.266,0.032-1.883,0.095c-0.92,0.088-1.814,0.245-2.689,0.46c-0.479,0.12-0.957,0.258-1.423,0.415
c-0.422,0.139-0.838,0.29-1.247,0.46c-0.302,0.126-0.611,0.265-0.907,0.409c-0.309,0.145-0.611,0.296-0.913,0.466
c-0.239,0.126-0.472,0.258-0.706,0.409c-0.245,0.145-0.491,0.296-0.73,0.46c-0.202,0.132-0.403,0.271-0.598,0.416
c-0.208,0.152-0.403,0.302-0.605,0.46c-0.17,0.132-0.334,0.271-0.498,0.409c-0.176,0.151-0.353,0.302-0.523,0.466
c-0.145,0.132-0.29,0.271-0.435,0.409c-0.157,0.151-0.308,0.302-0.453,0.46c-0.132,0.139-0.258,0.277-0.378,0.416
c-0.139,0.151-0.271,0.302-0.391,0.46c-0.12,0.132-0.233,0.271-0.334,0.41c-0.126,0.151-0.239,0.309-0.353,0.466
c-0.107,0.138-0.208,0.277-0.302,0.416c-0.101,0.151-0.202,0.302-0.296,0.454c-0.094,0.138-0.183,0.277-0.258,0.415
c-0.101,0.151-0.189,0.309-0.277,0.466c-0.082,0.139-0.157,0.271-0.22,0.409c-0.088,0.151-0.164,0.302-0.239,0.46
c-0.069,0.139-0.139,0.277-0.195,0.416c-0.076,0.151-0.145,0.302-0.208,0.46c-0.063,0.138-0.113,0.271-0.164,0.409
c-0.069,0.158-0.126,0.309-0.176,0.466c-0.057,0.132-0.101,0.271-0.145,0.409c-0.057,0.151-0.107,0.302-0.145,0.46
c-0.05,0.138-0.088,0.277-0.126,0.416c-0.044,0.151-0.082,0.309-0.12,0.46c-0.037,0.132-0.069,0.271-0.094,0.409
c-0.038,0.151-0.069,0.309-0.095,0.466c-0.031,0.132-0.057,0.271-0.075,0.41c-0.031,0.151-0.05,0.302-0.069,0.46
c-0.025,0.139-0.044,0.277-0.057,0.416c-0.019,0.151-0.032,0.302-0.044,0.46c-0.019,0.139-0.025,0.277-0.031,0.416
c-0.013,0.151-0.019,0.302-0.019,0.46c-0.013,0.132-0.019,0.271-0.013,0.409c-0.006,0.076-0.006,0.145-0.006,0.221
c0,0.082,0,0.164,0.006,0.246c0,0.138,0,0.277,0.013,0.409c0,0.157,0.006,0.308,0.019,0.46c0.006,0.139,0.019,0.277,0.038,0.416
c0.006,0.158,0.019,0.308,0.044,0.46c0.012,0.138,0.031,0.277,0.057,0.409c0.012,0.157,0.038,0.315,0.069,0.466
c0.019,0.139,0.044,0.278,0.076,0.416c0.025,0.151,0.057,0.302,0.094,0.454c0.025,0.138,0.057,0.277,0.094,0.415
c0.038,0.157,0.076,0.309,0.12,0.466c0.038,0.138,0.082,0.277,0.126,0.409c0.044,0.158,0.088,0.309,0.151,0.46
c0.038,0.139,0.082,0.277,0.139,0.409c0.05,0.157,0.113,0.309,0.176,0.466c0.05,0.138,0.107,0.271,0.17,0.409
c0.063,0.157,0.132,0.309,0.208,0.46c0.057,0.139,0.126,0.277,0.195,0.416c0.076,0.157,0.151,0.309,0.239,0.46
c0.069,0.138,0.145,0.271,0.22,0.409c0.088,0.157,0.176,0.315,0.277,0.466c0.082,0.139,0.164,0.277,0.258,0.409
c0.095,0.157,0.196,0.309,0.302,0.46c0.094,0.138,0.195,0.277,0.302,0.416c0.107,0.158,0.227,0.309,0.346,0.46
c0.107,0.139,0.214,0.277,0.334,0.41c0.126,0.157,0.258,0.315,0.403,0.466c0.12,0.145,0.246,0.277,0.378,0.415
c0.145,0.151,0.296,0.309,0.447,0.453c0.145,0.145,0.296,0.284,0.441,0.416c0.17,0.164,0.347,0.315,0.529,0.466
c0.164,0.138,0.328,0.277,0.498,0.409c0.201,0.157,0.403,0.315,0.611,0.46c0.195,0.145,0.397,0.283,0.599,0.416
c0.239,0.163,0.479,0.315,0.73,0.459c0.233,0.145,0.472,0.283,0.718,0.41c0.296,0.17,0.605,0.321,0.913,0.466
c0.296,0.145,0.605,0.284,0.913,0.409c0.416,0.17,0.838,0.321,1.266,0.46c0.479,0.164,0.964,0.302,1.461,0.415
c0.945,0.233,1.921,0.384,2.916,0.46c0.51,0.051,1.021,0.07,1.543,0.07h189.517C1252.461,804.685,1253.406,805.107,1254.086,805.794
z"
                                  className="color87A8F5 svgShape"
                                ></path>
                                <path
                                  fill="#fdce7d"
                                  d="M1242.539,761.553H1051.94c-11.612,0-21.025-9.413-21.025-21.025l0,0c0-11.612,9.413-21.025,21.025-21.025
h190.599c11.612,0,21.025,9.413,21.025,21.025l0,0C1263.564,752.139,1254.151,761.553,1242.539,761.553z"
                                  className="colorA4BDF5 svgShape"
                                ></path>
                                <rect
                                  width="13.759"
                                  height="42.05"
                                  x="1053.932"
                                  y="719.502"
                                  fill="#141414"
                                  className="colorFFF svgShape"
                                ></rect>
                                <rect
                                  width="13.759"
                                  height="42.05"
                                  x="1075.575"
                                  y="719.502"
                                  fill="#141414"
                                  className="colorFFF svgShape"
                                ></rect>
                                <polygon
                                  fill="#fdce7d"
                                  points="1176.545 801.537 1170.172 795.702 1163.8 801.537 1163.8 776.653 1176.545 776.653"
                                  className="colorA4BDF5 svgShape"
                                ></polygon>
                                <path
                                  fill="#141414"
                                  d="M1249.434,855.381v27.191h-79.039c-7.499,0-13.601-6.091-13.601-13.59c0-7.499,6.102-13.601,13.601-13.601
H1249.434z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#fdce7d"
                                  d="M1170.395,855.381c-11.865,0-20.234,15.277-6.465,27.191h85.505v5.372h-223.543
c-3.195,0-5.785-2.59-5.785-5.785v-26.365c0-3.195,2.59-5.785,5.785-5.785h223.543v5.372H1170.395z"
                                  className="colorA4BDF5 svgShape"
                                ></path>
                                <path
                                  fill="#ffda82"
                                  d="M1156.794,868.982c0,7.499,6.102,13.59,13.601,13.59h79.039v5.372h-79.039
c-10.464,0-18.973-8.509-18.973-18.962c0-10.464,8.509-18.973,18.973-18.973h79.039v5.372h-79.039
C1162.896,855.381,1156.794,861.483,1156.794,868.982z"
                                  className="color87A8F5 svgShape"
                                ></path>
                                <rect
                                  width="5.089"
                                  height="37.935"
                                  x="1100.225"
                                  y="850.009"
                                  fill="#141414"
                                  className="colorFFF svgShape"
                                ></rect>
                                <rect
                                  width="5.089"
                                  height="37.935"
                                  x="1087.501"
                                  y="850.009"
                                  fill="#141414"
                                  className="colorFFF svgShape"
                                ></rect>
                                <polygon
                                  fill="#fdce7d"
                                  points="1175.542 865.11 1175.542 876.917 1181.547 872.744 1187.552 876.917 1187.552 865.11"
                                  className="colorA4BDF5 svgShape"
                                ></polygon>
                                <circle
                                  cx="1127.369"
                                  cy="871.013"
                                  r="11.024"
                                  fill="#141414"
                                  className="colorFFF svgShape"
                                ></circle>
                                <path
                                  fill="#141414"
                                  d="M1041.816,817.446v27.191h79.039c7.499,0,13.601-6.092,13.601-13.591c0-7.499-6.102-13.601-13.601-13.601
H1041.816z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#fdce7d"
                                  d="M1120.855,817.446c11.865,0,20.234,15.277,6.466,27.191h-85.505v5.372h225.102
c2.334,0,4.226-1.892,4.226-4.226V816.3c0-2.334-1.892-4.226-4.226-4.226h-225.102v5.372H1120.855z"
                                  className="colorA4BDF5 svgShape"
                                ></path>
                                <path
                                  fill="#ffeebd"
                                  d="M1134.457,831.047c0,7.499-6.102,13.591-13.601,13.591h-79.039v5.372h79.039
c10.464,0,18.973-8.509,18.973-18.962c0-10.464-8.509-18.972-18.973-18.972h-79.039v5.372h79.039
C1128.354,817.446,1134.457,823.548,1134.457,831.047z"
                                  className="colorDBE5FB svgShape"
                                ></path>
                                <rect
                                  width="5.089"
                                  height="37.935"
                                  x="1185.937"
                                  y="812.075"
                                  fill="#141414"
                                  transform="rotate(-180 1188.48 831.042)"
                                  className="colorFFF svgShape"
                                ></rect>
                                <rect
                                  width="5.089"
                                  height="37.935"
                                  x="1198.661"
                                  y="812.075"
                                  fill="#141414"
                                  transform="rotate(-180 1201.205 831.042)"
                                  className="colorFFF svgShape"
                                ></rect>
                                <polygon
                                  fill="#fdce7d"
                                  points="1115.709 827.175 1115.709 838.982 1109.704 834.809 1103.699 838.982 1103.699 827.175"
                                  className="colorA4BDF5 svgShape"
                                ></polygon>
                                <path
                                  fill="#141414"
                                  d="M1152.788 831.042c0-5.748 4.659-10.407 10.407-10.407 5.748 0 10.407 4.659 10.407 10.407 0 5.748-4.66 10.407-10.407 10.407C1157.448 841.449 1152.788 836.79 1152.788 831.042zM1104.774 740.527c0-6.039 4.896-10.935 10.935-10.935 6.039 0 10.935 4.896 10.935 10.935 0 6.039-4.896 10.935-10.935 10.935C1109.67 751.462 1104.774 746.567 1104.774 740.527z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#fbd2ce"
                                  d="M380.084,872.78c-0.217,2.844,2.966,5.825,3.138,8.749c-12.098,2.585-24.297,4.69-36.493,6.826
c2.073-9.858,14.295-9.301,22.354-12.477c0-49.104-20.688-106.191-9.294-154.615c3.808-0.086,4.082,1.053,8.553,0.87
c4.472-0.183,12.123-0.716,17.258-1.034C387.116,765.915,380.384,868.848,380.084,872.78z"
                                  className="colorFFCBC7 svgShape"
                                ></path>
                                <path
                                  fill="#fbd2ce"
                                  d="M451.047,827.491c2.714-0.944,5.875,2.005,8.608,1.311c-2.45,11.206-6.058,18.09-11.189,28.393
c-3.133-6.397-2.116-12.704-3.294-19.538c-8.181-1.982-51.139-16.667-57.01-29.562c-10.882-23.903-25.714-51.215-20.159-85.958
c7.19-0.224,14.38-0.847,21.542-1.185c13.409,19.302,16.854,71.127,20.212,76.822C416.271,808.821,448.005,823.619,451.047,827.491z
"
                                  className="colorFFCBC7 svgShape"
                                ></path>
                                <path
                                  fill="#0d628a"
                                  d="M354.843 879.256c-2.994 1.458-12.788 3.552-10.395 9.216 2.393 5.665 31.525.054 36.65-2.926 5.126-2.979.383-8.867-1.172-12.316-4.605 9.199-18.099 14.151-27.05 10.307C349.51 882.092 354.26 879.856 354.843 879.256zM446.471 849.461c.152 2.064-1.794 13.091 3.276 12.047 5.071-1.044 13.872-28.44 11.741-33.647-2.434-5.947-8.396-1.194-10.36-.399 7.273 5.067 3.451 20.697-2.252 24.545C446.893 853.346 446.426 850.407 446.471 849.461zM425.39 794.178c0 0-6.832 7.549-13.252 5.986 0 0-7.113 10.778-18.286 3.335-8.467 5.238-16.923 5.238-25.389 0-11.163 7.444-18.287-3.335-18.287-3.335-6.421 1.563-13.252-5.986-13.252-5.986 6.13-28.852 19.382-53.495 22.595-73.995l30.752 1.018C399.776 730.661 405.862 770.146 425.39 794.178zM376.656 631.188c-2.975 3.166-4.227 8.793-1.757 12.614 1.945 3.99 1.906 8.656 1.524 13.015.951-4.36 1.049-9.213-1.005-13.286C372.979 639.867 374.08 634.489 376.656 631.188z"
                                  className="color263182 svgShape"
                                ></path>
                                <path
                                  fill="#fbd2ce"
                                  d="M342.221,614.558c-0.049-0.049-0.958-0.614-0.974-3.445c-0.005-0.843,1.682-5.552,0.066-6.492
c-1.223-0.71-2.398,3.621-2.707,3.514c-2.633-0.909-3.587-9.832-6.891-8.841c-1.819,0.546-0.148,8.97,2.709,13.182
c0.317,0.468,0.297,4.295,0.297,4.295L342.221,614.558z"
                                  className="colorFFCBC7 svgShape"
                                ></path>
                                <path
                                  fill="#0d628a"
                                  d="M375.719,643.43c-2.033-4.32-2.719-11.753,4.203-14.239c5.035-1.809,9.268-1.883,13.847,1.572
c4.579,3.455,6.355,11.048,5.384,16.49c-1.164,6.521,6.547,12.178,3.538,17.47c-4.042,7.108-24.325,1.017-31.277-0.038
C375.971,657.253,380.424,653.428,375.719,643.43z"
                                  className="color263182 svgShape"
                                ></path>
                                <path
                                  fill="#ffb900"
                                  d="M376.302,681.539c-9.606-3.357-27.254-19.157-31.654-26.612c-2.017-4.828-8.876-31.009-10.614-37.692
c-0.237-0.912,0.257-1.847,1.137-2.184c1.954-0.749,3.961-1.324,6.03-1.699c0.887-0.161,1.762,0.34,2.067,1.189l11.625,32.432
c4.479,2.896,32.072,14.904,34.729,24.353C391.748,678.887,385.744,684.839,376.302,681.539z"
                                  className="colorFF91E8 svgShape"
                                ></path>
                                <path
                                  fill="#ffda82"
                                  d="M335.171,615.051c0.256-0.098,0.514-0.193,0.772-0.285c1.828,7.022,8.559,32.69,10.555,37.466
c12.309,22.787,19.539,12.373,27.176,12.373c4.948,0,1.423,13.172,4.478,14.24c4.916,1.718,8.896,0.925,11.286-1.295
c-1.655,4.096-6.56,6.288-13.135,3.99c-9.606-3.357-27.254-19.157-31.654-26.612c-2.017-4.828-8.876-31.009-10.614-37.692
C333.797,616.323,334.291,615.388,335.171,615.051z"
                                  className="colorFF82E5 svgShape"
                                ></path>
                                <path
                                  fill="#ffc077"
                                  d="M357.982,723.195c0.058,0.24,0.195,0.458,0.4,0.615c7.166,5.517,22.982,0.509,32.979-0.236
c0.909-0.068,1.598-0.861,1.535-1.768c-1.53-21.672,14.808-44.061-5.783-60.715c-3.095-0.076-6.338-1.021-9.291-0.091
c-15.489,4.876-18.095,20.274-18.554,35.239c-0.276,9.131,0.245,18.1-0.869,24.42c-0.005,0.026-0.01,0.051-0.015,0.076
c-0.028,0.175-0.061,0.344-0.094,0.514c-0.094,0.466-0.195,0.917-0.309,1.35C357.931,722.797,357.931,723.003,357.982,723.195z"
                                  className="colorFF73E2 svgShape"
                                ></path>
                                <path
                                  fill="#ffd680"
                                  d="M359.269,696.239c0.095,8.555-0.3,23.537-0.869,24.42c5.148-5.003,5.964-14.005,10.947-16.93
c6.904-4.053,15.211-11.431,15.211-11.431l-8.24,0.76L359.269,696.239z"
                                  className="colorF063D3 svgShape"
                                ></path>
                                <path
                                  fill="#fbd2ce"
                                  d="M387.562,663.096c0.431-0.228,0.821-0.443,1.15-0.631c-0.608-2.849-1.039-8.974-1.18-12.698
c-0.035-0.965-0.053-1.766-0.048-2.31c-1.684,1.406-4.785,2.113-6.016,3.99c-1.231,1.874-2.163,8.82-2.254,9.212
C377.569,667.602,383.993,664.967,387.562,663.096z"
                                  className="colorFFCBC7 svgShape"
                                ></path>
                                <path
                                  fill="#fabab4"
                                  d="M380.226,655.719c0,0,3.368-0.376,5.168-0.458c2.169-0.099,2.161,6.117,2.168,7.834
c0.431-0.228,0.821-0.443,1.15-0.631c-0.608-2.849-1.039-8.974-1.18-12.698C384.68,652.082,380.226,655.719,380.226,655.719z"
                                  className="colorFABAB4 svgShape"
                                ></path>
                                <path
                                  fill="#fbd2ce"
                                  d="M376.923,653.536c-3.565-1.596-2.685-13.43,0.277-17.194c3.023,3.855,8.41,3.772,12.751,2.401
c-0.364,0.974-0.217,4.17-0.966,5.406c0.703-1.162,3.191-1.006,2.755,1.281c-0.398,2.086-1.701,2.565-3.535,3.19
C386.583,653.019,381.672,655.661,376.923,653.536z"
                                  className="colorFFCBC7 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M324.134,646.973c1.585-1.012,3.243-1.722,4.96-2.195c0.261-0.071,0.523-0.139,0.788-0.2
c2.742-0.635,5.626-0.697,8.592-0.435c0.262,0.023,0.527,0.049,0.792,0.078c0.345,0.037,0.693,0.077,1.041,0.123
c0.141,0.018,0.281,0.036,0.423,0.057c0.149,0.018,0.298,0.04,0.449,0.063c0.132,0.018,0.264,0.036,0.396,0.057
c0.198-0.477,0.386-0.958,0.563-1.443c0.964-2.632,1.639-5.406,2.003-8.335c0.065-0.514,0.12-1.032,0.164-1.554
c-0.128-0.037-0.256-0.074-0.385-0.112c-0.143-0.042-0.286-0.085-0.428-0.125c-0.14-0.042-0.28-0.083-0.419-0.125
c-0.369-0.11-0.738-0.222-1.104-0.338c-0.253-0.08-0.505-0.161-0.756-0.246c-2.676-0.89-5.221-2.012-7.32-3.939
c-0.205-0.188-0.406-0.385-0.602-0.588c-1.221-1.269-2.265-2.854-3.063-4.884L324.134,646.973z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#d8daeb"
                                  d="M324.713,644.686l5.516-21.851c0.088,0.225,0.181,0.444,0.276,0.659L324.713,644.686z"
                                  className="colorD8DAEB svgShape"
                                ></path>
                                <path
                                  fill="#cfd2eb"
                                  d="M324.135,646.973c4.704-3.006,10.066-3.355,15.681-2.689c0.163,0.018,0.326,0.04,0.489,0.06
c0.033,0.005,0.064,0.008,0.097,0.012c0.108,0.015,0.217,0.029,0.326,0.045c0.077,0.009,0.153,0.019,0.229,0.031
c0.074,0.009,0.147,0.021,0.22,0.032c0.103,0.014,0.208,0.028,0.312,0.045c0.028,0.003,0.056,0.007,0.084,0.012
c0.198-0.477,0.385-0.958,0.564-1.443c-0.068,0.161-0.134,0.322-0.205,0.48c-0.01-0.002-0.019-0.003-0.029-0.005
c-0.121-0.023-0.243-0.046-0.364-0.066c-0.064-0.012-0.129-0.025-0.193-0.037c-0.084-0.016-0.169-0.029-0.253-0.043
c-0.1-0.018-0.201-0.036-0.3-0.052c-0.04-0.008-0.079-0.014-0.119-0.021c-0.15-0.025-0.303-0.049-0.453-0.072
c-5.584-0.875-10.937-0.722-15.685,2.12L324.135,646.973z"
                                  className="colorCFD2EB svgShape"
                                ></path>
                                <path
                                  fill="#3295bf"
                                  d="M316.276,632.129c-1.724,7.159,0.559,13.849,5.1,14.943c4.542,1.094,9.621-3.823,11.345-10.982
c1.725-7.159-0.559-13.849-5.1-14.943C323.08,620.053,318.001,624.97,316.276,632.129z"
                                  className="color4E6FD9 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M351.214,635.78l-2.298,9.538c1.157,0.204,3.81,1.12,4.968,0.916c2.991-0.221,5.18-3.488,4.188-6.367
C357.314,636.858,353.758,636.35,351.214,635.78z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#cfd2eb"
                                  d="M349.074,644.659l-0.159,0.659c1.157,0.204,3.81,1.12,4.968,0.916c2.991-0.221,5.18-3.488,4.188-6.367
c-0.155-0.492-0.393-0.959-0.693-1.379c1.441,2.841-0.675,6.635-3.822,6.919C352.406,645.644,350.214,644.887,349.074,644.659z"
                                  className="colorCFD2EB svgShape"
                                ></path>
                                <path
                                  fill="#5ed0ff"
                                  d="M317.481,632.419c-1.472,6.111,0.31,11.782,3.983,12.667c1.349,0.325,2.766-0.042,4.089-0.938
c0.956-0.645,1.862-1.566,2.664-2.702c0.284-0.402,0.552-0.83,0.807-1.282c0.014-0.026,0.028-0.052,0.043-0.079
c0.725-1.309,1.317-2.819,1.713-4.462c0.313-1.299,0.48-2.58,0.51-3.798c0.006-0.195,0.007-0.387,0.005-0.578
c0-0.008-0.001-0.017,0-0.026c-0.014-1.34-0.193-2.594-0.521-3.703c-0.703-2.39-2.092-4.107-3.978-4.561
C323.122,622.072,318.953,626.309,317.481,632.419z"
                                  className="colorBDC3FF svgShape"
                                ></path>
                                <path
                                  fill="#3295bf"
                                  d="M339.399,655.705c0.186,0.045,0.376-0.057,0.441-0.236c0.77-2.106,2.037-3.196,2.904-4.91
c1.073-2.122,0.973-5.192,3.286-6.886l4.247,1.023l-5.721,11.762c-0.109,0.225,0.017,0.493,0.26,0.552l0,0
c0.206,0.05,0.333,0.258,0.284,0.464l-0.324,1.346c-0.05,0.207-0.258,0.334-0.464,0.284l-5.417-1.305
c-0.207-0.05-0.333-0.257-0.284-0.464l0.324-1.346C338.985,655.783,339.193,655.655,339.399,655.705L339.399,655.705z"
                                  className="color4E6FD9 svgShape"
                                ></path>
                                <path
                                  fill="#2195c5"
                                  d="M343.463,658.307c0.206,0.05,0.414-0.077,0.464-0.284l0.324-1.346c0.05-0.206-0.077-0.414-0.283-0.464
c-0.243-0.059-0.37-0.327-0.26-0.552l5.463-11.231l1.106,0.266l-5.721,11.762c-0.109,0.225,0.017,0.493,0.26,0.552l0,0
c0.206,0.05,0.333,0.258,0.284,0.464l-0.324,1.346c-0.05,0.207-0.258,0.334-0.464,0.284l-5.417-1.305
c-0.207-0.05-0.333-0.257-0.284-0.464l0.045-0.187L343.463,658.307z"
                                  className="color505FEB svgShape"
                                ></path>
                                <path
                                  fill="#2b88b1"
                                  d="M322.687,643.63c0.956-0.645,1.862-1.566,2.664-2.701c0.284-0.402,0.552-0.83,0.807-1.283
c0.014-0.025,0.029-0.052,0.043-0.079c0.725-1.309,1.317-2.818,1.713-4.462c0.313-1.299,0.479-2.58,0.51-3.797
c0.006-0.195,0.007-0.388,0.005-0.578c0-0.008,0-0.018,0-0.026c-0.014-1.34-0.193-2.594-0.521-3.703
c-0.553-1.879-1.531-3.339-2.84-4.099c0.58-0.096,1.16-0.083,1.727,0.054c1.886,0.454,3.275,2.172,3.978,4.561
c0.328,1.109,0.507,2.363,0.521,3.703c0,0.008,0.001,0.018,0,0.026c0.002,0.19,0,0.383-0.005,0.578
c-0.03,1.218-0.197,2.498-0.51,3.798c-0.396,1.643-0.987,3.153-1.713,4.462c-0.015,0.027-0.029,0.053-0.043,0.079
c-0.254,0.452-0.523,0.88-0.807,1.282c-0.801,1.136-1.708,2.056-2.664,2.702c-1.323,0.897-2.74,1.264-4.089,0.938
c-0.404-0.097-0.783-0.256-1.14-0.463C321.122,644.49,321.921,644.15,322.687,643.63z"
                                  className="colorA8AEF0 svgShape"
                                ></path>
                                <path
                                  fill="#3295bf"
                                  d="M352.539,635.37c1.217,0.475,1.861,1.969,1.499,3.473l-1.234,5.124c-0.362,1.504-1.617,2.54-2.916,2.409
c-2.083-0.217-4.588-0.383-6.617-0.591c-1.412-0.144-2.383-1.424-1.947-2.588c1.158-3.096,1.875-6.273,2.209-9.545
c0.091-0.893,1.117-1.415,2.078-1.059C347.997,633.478,350.222,634.448,352.539,635.37z"
                                  className="color4E6FD9 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M322.39,636.475l6.677,3.608c0.725-1.309,1.317-2.819,1.713-4.462c0.313-1.299,0.48-2.58,0.51-3.798
c0.006-0.195,0.007-0.387,0.005-0.578c0-0.008-0.001-0.017,0-0.026l-7.766,0.699L322.39,636.475z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#e6e7f5"
                                  d="M327.094,638.05c0.874,0.473,1.972,0.094,2.354-0.823c0.365-0.876,0.673-1.813,0.911-2.8
c0.259-1.077,0.417-2.14,0.481-3.165l0.454-0.041c0,0.008,0.001,0.018,0,0.026c0.002,0.19,0,0.383-0.005,0.578
c-0.03,1.218-0.197,2.498-0.51,3.798c-0.396,1.643-0.987,3.153-1.713,4.462l-6.677-3.608l0.213-0.853L327.094,638.05z"
                                  className="colorE6E7F5 svgShape"
                                ></path>
                                <path
                                  fill="#3295bf"
                                  d="M321.18,633.855c-0.317,1.316,0.131,2.553,1.001,2.762c0.87,0.209,1.831-0.688,2.148-2.004
c0.317-1.316-0.131-2.553-1-2.762C322.458,631.642,321.497,632.539,321.18,633.855z"
                                  className="color4E6FD9 svgShape"
                                ></path>
                                <path
                                  fill="#3283a2"
                                  d="M321.381,633.904c-0.276,1.148,0.064,2.214,0.76,2.382c0.697,0.168,1.485-0.627,1.761-1.774
c0.277-1.148-0.064-2.214-0.76-2.382C322.446,631.961,321.658,632.756,321.381,633.904z"
                                  className="color4A59DB svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M322.946,634.37c0.085-0.353,0.009-0.674-0.17-0.717c-0.179-0.043-0.393,0.208-0.478,0.561
c-0.085,0.353-0.009,0.674,0.17,0.717C322.647,634.974,322.861,634.723,322.946,634.37z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#2195c5"
                                  d="M342.96,644.378c2.029,0.208,4.535,0.373,6.618,0.591c1.299,0.131,2.553-0.905,2.916-2.409l1.234-5.124
c0.067-0.277,0.099-0.555,0.1-0.825c0.309,0.641,0.402,1.434,0.21,2.232l-1.234,5.124c-0.362,1.504-1.617,2.54-2.916,2.409
c-2.083-0.217-4.588-0.383-6.617-0.591c-1.324-0.136-2.26-1.27-2.012-2.37C341.619,643.924,342.229,644.304,342.96,644.378z"
                                  className="color505FEB svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M348.384,637.294l2.911,0.701c0.429,0.103,0.86-0.161,0.964-0.59l0-0.001c0.103-0.429-0.161-0.86-0.59-0.963
l-2.91-0.701c-0.429-0.103-0.861,0.16-0.964,0.589l0,0C347.691,636.759,347.954,637.191,348.384,637.294z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#cfd2eb"
                                  d="M347.771,636.795l3.618,0.871c0.233,0.056,0.468-0.087,0.525-0.321l0.171-0.708
c0.007-0.029,0.011-0.057,0.012-0.086c0.189,0.083,0.298,0.291,0.248,0.499l-0.17,0.708c-0.056,0.234-0.291,0.377-0.525,0.321
l-3.618-0.872c-0.205-0.049-0.34-0.236-0.333-0.439C347.721,636.78,347.745,636.789,347.771,636.795z"
                                  className="colorCFD2EB svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M350.622,639.664l0.452,0.109c0.32,0.077,0.643-0.12,0.72-0.44l0,0c0.077-0.32-0.12-0.643-0.44-0.72
l-0.452-0.109c-0.321-0.077-0.643,0.12-0.72,0.441l0,0C350.104,639.265,350.301,639.587,350.622,639.664z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#cfd2eb"
                                  d="M350.238,639.431l1.032,0.249c0.16,0.039,0.321-0.06,0.36-0.22l0.14-0.58c0.01-0.043,0.01-0.087,0.002-0.128
c0.079,0.071,0.118,0.181,0.092,0.291l-0.14,0.58c-0.038,0.16-0.199,0.259-0.36,0.22l-1.032-0.249
c-0.117-0.028-0.2-0.122-0.222-0.232C350.145,639.394,350.188,639.419,350.238,639.431z"
                                  className="colorCFD2EB svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M349.012,638.662c0.091-0.38-0.142-0.763-0.523-0.854c-0.38-0.091-0.762,0.142-0.854,0.522
c-0.092,0.38,0.142,0.763,0.522,0.854C348.538,639.276,348.92,639.042,349.012,638.662z"
                                  className="colorFFF svgShape"
                                ></path>
                                <path
                                  fill="#cfd2eb"
                                  d="M348.098,639.075c0.38,0.092,0.762-0.142,0.854-0.522c0.038-0.156,0.018-0.31-0.041-0.447
c0.105,0.158,0.149,0.357,0.101,0.557c-0.091,0.38-0.474,0.614-0.854,0.522c-0.225-0.054-0.396-0.211-0.481-0.407
C347.772,638.921,347.918,639.031,348.098,639.075z"
                                  className="colorCFD2EB svgShape"
                                ></path>
                                <path
                                  fill="#3283a2"
                                  d="M352.852,646.228c0.349,0.038,0.694,0.04,1.032,0.006c2.21-2.251,3.053-6.409,2.524-8.756
c-0.298-0.231-0.625-0.431-0.979-0.592C356.368,639.357,355.329,643.721,352.852,646.228z"
                                  className="color4A59DB svgShape"
                                ></path>
                                <path
                                  fill="#fbd2ce"
                                  d="M347.409,659.986c0,0-0.661-3.219-0.43-4.236c0.232-1.017,1.959-4.274,0.859-6.105
c-1.804-3.004-8.795-2.461-9.423,0.149c-0.628,2.61,0.759,5.356,1.853,6.889c0.785,1.1,0.855,5.088,0.855,5.088L347.409,659.986z"
                                  className="colorFFCBC7 svgShape"
                                ></path>
                                <path
                                  fill="#ffb900"
                                  d="M389.422,688.432c-5.852,5.901-28.272,18.225-38.262,15.279c-11.252-3.318-10.912-33.728-11.947-40.973
c-0.118-0.824,0.423-1.597,1.237-1.771l6.89-1.473c0.818-0.175,1.632,0.317,1.857,1.123l7.561,23.984
c0,0,16.798-12.538,25.784-15.793C389.422,666.316,397.677,680.109,389.422,688.432z"
                                  className="colorFF91E8 svgShape"
                                ></path>
                                <path
                                  fill="#ffda82"
                                  d="M340.451,660.966l0.023-0.005c0.96,8.043,1.246,35.853,12.255,39.1c9.99,2.946,32.037-8.009,37.889-13.909
c0.57-0.574,1.058-1.176,1.477-1.795c-0.555,1.433-1.423,2.817-2.671,4.075c-5.852,5.901-28.272,18.225-38.262,15.279
c-11.252-3.318-10.912-33.728-11.947-40.973C339.096,661.914,339.637,661.141,340.451,660.966z"
                                  className="colorFF82E5 svgShape"
                                ></path>
                                <path
                                  fill="#fabab4"
                                  d="M377.732,636.955c0,0-0.134,4.009,3.918,5.509c0,0-0.798-1.513,1.035-3.065c0,0-0.17,2.487,1.241,3.855
c1.41,1.368,3.725,3.671,2.25,7.144l1.105-1.099l0.5-8.742l-5.789-3.763L377.732,636.955z"
                                  className="colorFABAB4 svgShape"
                                ></path>
                                <path
                                  fill="#0d628a"
                                  d="M375.1,641.706c0,0,0.417-3.269,2.632-4.751c0,0,0.971,3.65,4.007,4.835c0,0,0.083-1.716,0.946-2.391
c0,0,0.53,2.703,3.15,4.751c2.448,1.912,0.166,6.332-0.717,7.31c0,0,4.535-2.651,4.03-7.642c0,0,3.643-3.119,3.706-3.275
c0.062-0.156-0.25-3.712-0.25-3.712s-8.514-2.215-8.53-2.308c-0.016-0.094-3.471-1.216-3.471-1.216l-2.659,0.249l-1.996,0.717
L375.1,641.706z"
                                  className="color263182 svgShape"
                                ></path>
                                <path
                                  fill="#0d628a"
                                  d="M384.385,629.216c1.601-1.642,4.332-0.686,6.207-0.024c6.849,2.524,10.802,10.357,8.064,17.259
c-0.666,2.276-2.18,2.222-0.617,4.738c1.891,2.704,4.541,4.899,5.392,8.187c0.946,3.038-0.073,7.249-3.68,7.766
c3.767-0.317,5.003-4.703,4.087-7.872c-0.646-2.751-2.57-4.979-4.337-7.09c-0.731-0.871-1.453-1.883-1.596-3.016
c0.18-0.316,0.483-0.604,0.649-0.948c3.221-6.144,1.164-14.223-4.882-17.766C391.117,628.98,386.933,626.887,384.385,629.216z"
                                  className="color263182 svgShape"
                                ></path>
                                <path
                                  fill="#6bccff"
                                  d="M234.435,763.471c-6.191,1.531-12.192,4.538-16.24,9.442c-3.628,4.395-5.451,9.988-6.63,15.552
c-1.18,5.564-1.799,11.255-3.407,16.712c-1.166,3.957-3.319,8.202-7.3,9.352l7.555,6.716c5.727-2.54,8.938-8.719,10.447-14.772
c1.509-6.054,1.769-12.405,3.806-18.303c2.285-6.616,6.752-12.37,12.213-16.778c5.461-4.408,11.89-7.522,18.562-9.735
C247.063,761.76,240.626,761.939,234.435,763.471z"
                                  className="color7D65E0 svgShape"
                                ></path>
                                <path
                                  fill="#9addff"
                                  d="M196.125,803.113c-3.17-3.779-5.656-8.136-9.221-11.547c-5.114-4.893-12.281-7.503-19.375-7.378
c-7.095,0.125-14.056,2.91-19.485,7.456c10.401-4.823,23.771-2.298,31.671,5.982c2.861,3,5.003,6.598,7.62,9.81
c2.618,3.213,5.919,6.145,9.976,7.047l11.189-4.034C203.556,810.252,199.295,806.892,196.125,803.113z"
                                  className="colorAF9CFF svgShape"
                                ></path>
                                <path
                                  fill="#6bccff"
                                  d="M253.207 764.631c.646 11.396-6.67 22.811-17.331 27.037-3.861 1.531-8.015 2.175-11.985 3.402-3.97 1.227-7.932 3.188-10.279 6.602l-.27 12.55c2.018-4.493 6.623-7.903 11.326-9.429 4.703-1.526 9.693-2.208 14.201-4.236 6.465-2.909 11.559-8.562 14.074-15.162C255.458 778.795 255.438 771.331 253.207 764.631zM203.296 789.164c-2.606-5.592-6.757-10.304-10.865-14.919-3.457-3.885-7.002-7.894-8.741-12.786-1.739-4.891-1.25-10.943 2.572-14.472-5.181 1.633-8.573 6.945-9.181 12.318-.608 5.372 1.122 10.755 3.494 15.62 2.372 4.864 5.397 9.399 7.649 14.319 2.252 4.92 2.503 18.513 1.501 23.826l13.485-.621C205.779 806.84 205.901 794.757 203.296 789.164z"
                                  className="color7D65E0 svgShape"
                                ></path>
                                <path
                                  fill="#9addff"
                                  d="M213.474,778.681c1.473-21.137-11.796-42.501-31.458-50.652c13.909,14.096,21.027,34.548,18.857,54.181
c-0.543,4.914-1.635,9.8-1.456,14.741c0.179,4.94,2.552,14.658,6.495,17.667l11.475-0.015c-4.507-4.786-5.815-10.053-5.443-16.6
C212.315,791.455,213.018,785.223,213.474,778.681z"
                                  className="colorAF9CFF svgShape"
                                ></path>
                                <path
                                  fill="#ffc077"
                                  d="M226.646,810.804v79.26c-0.032,0-0.08,0.016-0.111,0.016c-15.044,2.33-29.389,2.647-42.689-0.016v-79.26
H226.646z"
                                  className="colorFF73E2 svgShape"
                                ></path>
                                <path
                                  fill="#ffd680"
                                  d="M226.646,810.804v79.26c-0.032,0.032-0.064,0.032-0.111,0.016c-8.737-42.787-10.56-64.825-42.689-64.692
v-14.583H226.646z"
                                  className="colorF063D3 svgShape"
                                ></path>
                                <rect
                                  width="47.03"
                                  height="8.132"
                                  x="181.731"
                                  y="810.804"
                                  fill="#ffc077"
                                  className="colorFF73E2 svgShape"
                                ></rect>
                                <path
                                  fill="#c3e8ff"
                                  d="M785.489 118.582c0 6.929-5.627 12.546-12.557 12.546-2.74 0-5.262-.875-7.325-2.355-3.053 5.221-8.722 8.743-15.214 8.743-4.877 0-9.285-1.99-12.473-5.189-3.011 2.407-6.825 3.845-10.983 3.845-1 0-1.98-.083-2.938-.25l-1.563-12.285h5.95c1.667 0 2.751-1.751 2.001-3.241l-13.734-27.478c-.823-1.646-3.189-1.646-4.012 0l-13.734 27.478c-.75 1.49.333 3.241 2.001 3.241h5.951c-.521 4.085-1.042 8.18-1.563 12.265-.99.177-2.011.271-3.053.271-3.616 0-6.982-1.094-9.775-2.96-3.084 2.678-7.117 4.304-11.524 4.304-6.919 0-12.9-4.001-15.777-9.806-2.251 2.126-5.273 3.418-8.607 3.418-6.94 0-12.556-5.617-12.556-12.546 0-6.94 5.617-12.557 12.556-12.557 2.553 0 4.929.761 6.909 2.074-.083-.677-.125-1.375-.125-2.074 0-9.722 7.878-17.6 17.6-17.6 4.512 0 8.628 1.709 11.744 4.502-.011-.26-.011-.532-.011-.792 0-13.296 10.774-24.081 24.071-24.081 13.015 0 23.612 10.316 24.06 23.216 2.761-1.792 6.054-2.845 9.587-2.845 9.722 0 17.6 7.878 17.6 17.6 0 .344-.011.688-.032 1.021 1.521-.657 3.199-1.021 4.971-1.021C779.862 106.026 785.489 111.642 785.489 118.582zM140.162 358.755c-2.863 0-5.566.586-7.959 1.623 1.425-2.794 2.215-5.882 2.215-9.129 0-12.563-11.834-22.747-26.433-22.747s-26.433 10.184-26.433 22.747c0 .292.006.583.019.872-1.572-.562-3.295-.872-5.103-.872-5.845 0-10.811 3.241-12.603 7.747-1.024-.158-2.078-.241-3.155-.241-9.781 0-17.71 6.824-17.71 15.241 0 8.417 7.929 15.24 17.71 15.24 5.727 0 10.817-2.34 14.055-5.968 3.23 3.715 8.383 6.12 14.19 6.12 4.714 0 8.997-1.585 12.17-4.169 3.173 2.584 7.456 4.169 12.17 4.169 5.414 0 10.26-2.091 13.509-5.386 3.247 3.207 8.027 5.234 13.358 5.234 9.781 0 17.71-6.823 17.71-15.24C157.872 365.579 149.943 358.755 140.162 358.755zM1303.29 242.058c-2.862 0-5.566.585-7.959 1.623 1.425-2.794 2.215-5.882 2.215-9.129 0-12.563-11.834-22.747-26.433-22.747-14.599 0-26.433 10.184-26.433 22.747 0 .292.006.583.019.872-1.572-.562-3.295-.872-5.103-.872-5.845 0-10.81 3.241-12.603 7.747-1.024-.158-2.078-.241-3.155-.241-9.781 0-17.71 6.824-17.71 15.24s7.929 15.24 17.71 15.24c5.726 0 10.817-2.34 14.055-5.968 3.23 3.715 8.383 6.119 14.19 6.119 4.714 0 8.997-1.585 12.17-4.169 3.173 2.584 7.457 4.169 12.17 4.169 5.414 0 10.26-2.091 13.509-5.386 3.247 3.207 8.027 5.234 13.358 5.234 9.781 0 17.71-6.823 17.71-15.24S1313.071 242.058 1303.29 242.058z"
                                  className="colorD6DEFF svgShape"
                                ></path>
                              </svg>
                            </g>
                          </svg>
                        </div>
                      </Col>
                      <Col xl={6} lg={6} md={6} sm={12}>
                        <div className="working-content content-3">
                          <h4 className="mb-3">Updates</h4>
                          <p className="title-desc">
                            Sea takimata sea sit justo consetetur et diam erat
                            erat, dolor vero et sit duo dolor, dolores ipsum
                            gubergren stet.
                          </p>
                          <p className="title-desc mb-0">
                            Stet sadipscing lorem ipsum invidunt takimata ipsum
                            no eos dolor. Sed at dolores et ut dolor voluptua
                            sit duo. Ipsum ea kasd nonumy dolor, eos takimata
                            eirmod est gubergren eos.
                          </p>
                        </div>
                      </Col>
                    </div>
                  </div>
                  <div className="working-container container-4">
                    <div className="row align-items-center">
                      <Col xl={6} lg={6} md={6} sm={12} className=" myorder-2">
                        <div className="working-content content-4">
                          <h4 className="mb-3">Compatibility</h4>
                          <p className="title-desc">
                            Sea takimata sea sit justo consetetur et diam erat
                            erat, dolor vero et sit duo dolor, dolores ipsum
                            gubergren stet.
                          </p>
                          <p className="title-desc mb-0">
                            Stet sadipscing lorem ipsum invidunt takimata ipsum
                            no eos dolor. Sed at dolores et ut dolor voluptua
                            sit duo. Ipsum ea kasd nonumy dolor, eos takimata
                            eirmod est gubergren eos.
                          </p>
                        </div>
                      </Col>
                      <Col xl={6} lg={6} md={6} sm={12} className=" myorder-1">
                        <div className="working-svg-container svg-container-4">
                          <svg
                            id="SvgjsSvg1549"
                            className="working-svg"
                            width="360"
                            height="360"
                            version="1.1"
                          >
                            <defs id="SvgjsDefs1550"></defs>
                            <g id="SvgjsG1551">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="360"
                                height="360"
                                fill="none"
                                viewBox="0 0 3000 3000"
                              >
                                <path
                                  fill="#ffda82"
                                  d="M1913.3 1131.45C1984.5 1001.25 2199.64 980.871 2392.24 1086.2C2584.85 1191.52 2683.78 1383.64 2612.58 1513.85C2541.38 1644.05 2326.86 1664.77 2133.64 1559.11C1940.42 1453.44 1841.77 1262.27 1913.3 1131.45Z"
                                  opacity=".2"
                                  className="colorFFE767 svgShape"
                                ></path>
                                <path
                                  fill="#2dce89"
                                  d="M328.209 1756.94C324.581 1736.07 368.577 1711.13 426.635 1701.15C484.692 1691.17 534.585 1699.79 538.214 1720.65C541.842 1741.52 497.846 1766.46 439.788 1776.44C381.731 1786.42 331.838 1777.35 328.209 1756.94Z"
                                  className="color2CC974 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  fillRule="evenodd"
                                  d="M382 1744.92C446.844 1718.33 513.695 1716.38 539.179 1718.74L538.717 1723.72C513.869 1721.41 447.853 1723.32 383.897 1749.54L382 1744.92Z"
                                  clipRule="evenodd"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M294.496 1317.98V896.155C294.496 889.267 295.86 882.447 298.51 876.088C301.159 869.73 305.042 863.96 309.934 859.11C314.826 854.261 320.629 850.428 327.01 847.834C333.391 845.239 340.223 843.934 347.111 843.994H1207.09C1220.92 843.994 1234.19 849.489 1243.97 859.272C1253.75 869.054 1259.25 882.321 1259.25 896.155V1317.98C1259.13 1331.78 1253.6 1344.97 1243.84 1354.73C1234.08 1364.49 1220.88 1370.02 1207.09 1370.14H347.111C333.235 1370.14 319.92 1364.66 310.066 1354.89C300.212 1345.12 294.616 1331.85 294.496 1317.98Z"
                                  className="colorfff svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M1207.09 1372.4H347.11C332.632 1372.4 318.741 1366.68 308.462 1356.49C298.182 1346.3 292.347 1332.45 292.228 1317.98V896.152C292.347 881.675 298.182 867.831 308.462 857.637C318.741 847.442 332.632 841.722 347.11 841.723H1207.09C1221.52 841.723 1235.37 847.457 1245.57 857.664C1255.78 867.872 1261.52 881.716 1261.52 896.152V1317.98C1261.52 1332.41 1255.78 1346.25 1245.57 1356.46C1235.37 1366.67 1221.52 1372.4 1207.09 1372.4ZM347.11 846.258C333.835 846.258 321.098 851.5 311.669 860.844C302.24 870.188 296.883 882.878 296.763 896.152V1317.98C296.883 1331.25 302.24 1343.94 311.669 1353.28C321.098 1362.63 333.835 1367.87 347.11 1367.87H1207.09C1220.32 1367.87 1233.01 1362.61 1242.37 1353.25C1251.72 1343.9 1256.98 1331.21 1256.98 1317.98V896.152C1256.98 882.919 1251.72 870.228 1242.37 860.872C1233.01 851.515 1220.32 846.258 1207.09 846.258H347.11Z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M1157.64 1351.99H333.047C329.919 1351.99 326.919 1350.75 324.708 1348.54C322.496 1346.33 321.254 1343.33 321.254 1340.2V878.916C321.252 875.745 322.48 872.697 324.679 870.413C326.878 868.129 329.878 866.787 333.047 866.67H1157.64C1160.81 866.787 1163.81 868.129 1166.01 870.413C1168.21 872.697 1169.44 875.745 1169.44 878.916V1340.2C1169.44 1343.33 1168.19 1346.33 1165.98 1348.54C1163.77 1350.75 1160.77 1351.99 1157.64 1351.99ZM333.047 871.206C331.081 871.321 329.235 872.185 327.885 873.618C326.536 875.052 325.786 876.947 325.79 878.916V1340.2C325.79 1342.13 326.554 1343.97 327.915 1345.33C329.276 1346.69 331.122 1347.46 333.047 1347.46H1157.64C1159.57 1347.46 1161.41 1346.69 1162.78 1345.33C1164.14 1343.97 1164.9 1342.13 1164.9 1340.2V878.916C1164.9 876.947 1164.16 875.052 1162.81 873.618C1161.46 872.185 1159.61 871.321 1157.64 871.206H333.047Z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#6be4ff"
                                  d="M746.253 946.498L592.038 1215.47H900.468L746.253 946.498Z"
                                  className="color6BE4FF svgShape"
                                ></path>
                                <path
                                  fill="#ffda82"
                                  d="M779.363 1146.98C779.363 1128.94 784.71 1111.32 794.728 1096.32C804.746 1081.33 818.984 1069.65 835.643 1062.75C852.302 1055.85 870.633 1054.04 888.318 1057.56C906.003 1061.08 922.247 1069.76 934.997 1082.51C947.748 1095.26 956.431 1111.5 959.948 1129.19C963.466 1146.87 961.66 1165.2 954.76 1181.86C947.86 1198.52 936.175 1212.76 921.182 1222.78C906.19 1232.8 888.563 1238.14 870.532 1238.14C846.352 1238.14 823.163 1228.54 806.066 1211.44C788.969 1194.34 779.363 1171.15 779.363 1146.98Z"
                                  className="colorFFE767 svgShape"
                                ></path>
                                <path
                                  fill="#45b3e8"
                                  d="M852.843 1104.34H689.557V1267.54H852.843V1104.34Z"
                                  className="colorFF7245 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M2855.19 1510.81H2152.15V789.627H2855.19V1510.81ZM2156.68 1506.27H2850.65V794.163H2156.68V1506.27Z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M2249.67 791.895H2245.13V1508.54H2249.67V791.895zM2335.85 791.895H2331.31V1508.54H2335.85V791.895zM2421.57 791.895H2417.03V1508.54H2421.57V791.895zM2505.94 791.895H2501.4V1508.54H2505.94V791.895zM2592.12 791.895H2587.58V1508.54H2592.12V791.895zM2678.29 791.895H2673.76V1508.54H2678.29V791.895zM2769.01 791.895H2764.47V1508.54H2769.01V791.895z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M2852.92 881.254H2154.42V885.79H2852.92V881.254zM2852.92 971.971H2154.42V976.506H2852.92V971.971zM2852.92 1062.68H2154.42V1067.22H2852.92V1062.68zM2852.92 1153.4H2154.42V1157.93H2852.92V1153.4zM2852.92 1244.12H2154.42V1248.65H2852.92V1244.12zM2852.5 1334.83H2154V1339.36H2852.5V1334.83zM2852.5 1416.47H2154V1421.01H2852.5V1416.47zM1492.2 2236.27H789.161V1515.08H1492.2V2236.27zM793.697 2231.73H1487.66V1519.62H793.697V2231.73z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M886.68 1517.35H882.145V2234H886.68V1517.35zM972.859 1517.35H968.323V2234H972.859V1517.35zM1059.04 1517.35H1054.5V2234H1059.04V1517.35zM1142.95 1517.35H1138.41V2234H1142.95V1517.35zM1229.13 1517.35H1224.59V2234H1229.13V1517.35zM1315.31 1517.35H1310.77V2234H1315.31V1517.35zM1406.02 1517.35H1401.49V2234H1406.02V1517.35z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M1489.93 1606.7H791.43V1611.24H1489.93V1606.7zM1489.93 1697.42H791.43V1701.95H1489.93V1697.42zM1489.93 1788.13H791.43V1792.67H1489.93V1788.13zM1489.93 1878.85H791.43V1883.38H1489.93V1878.85zM1489.93 1969.56H791.43V1974.1H1489.93V1969.56zM1487.86 2060.28H789.357V2064.81H1487.86V2060.28zM1487.86 2141.92H789.357V2146.46H1487.86V2141.92z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#6be4ff"
                                  d="M975 2346.5C975 2221.07 1165.61 2119 1400.5 2119C1635.39 2119 1826 2221.07 1826 2346.5C1826 2471.93 1635.39 2574 1400.5 2574C1165.61 2574 975 2471.93 975 2346.5Z"
                                  opacity=".2"
                                  className="color6BE4FF svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M2590.03 1155.59H970.771V2144.38H2590.03V1155.59Z"
                                  className="colorfff svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M2592.3 2146.65H968.505V1153.32H2592.3V2146.65ZM973.041 2142.12H2587.76V1157.86H973.041V2142.12Z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M2521.54 1215.92H1029.29V2086.56H2521.54V1215.92Z"
                                  className="colorfff svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M2523.81 2089.05H1027.02V1213.65H2523.81V2089.05ZM1031.55 2084.52H2519.28V1218.19H1031.55V2084.52Z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#6be4ff"
                                  d="M1731.42 1394.17L1485.58 1823.25H1977.25L1731.42 1394.17Z"
                                  className="color6BE4FF svgShape"
                                ></path>
                                <path
                                  fill="#ffda82"
                                  d="M1784.03 1714.4C1783.94 1685.58 1792.4 1657.39 1808.35 1633.38C1824.29 1609.38 1847 1590.65 1873.59 1579.56C1900.19 1568.47 1929.48 1565.52 1957.75 1571.09C1986.03 1576.65 2012.01 1590.49 2032.42 1610.83C2052.83 1631.17 2066.74 1657.12 2072.39 1685.37C2078.05 1713.63 2075.19 1742.92 2064.18 1769.56C2053.18 1796.19 2034.52 1818.95 2010.56 1834.97C1986.61 1850.99 1958.44 1859.54 1929.63 1859.54C1891.09 1859.54 1854.13 1844.26 1826.83 1817.06C1799.54 1789.85 1784.15 1752.93 1784.03 1714.4Z"
                                  className="colorFFE767 svgShape"
                                ></path>
                                <path
                                  fill="#45b3e8"
                                  d="M1901.51 1645.9H1641.15V1906.39H1901.51V1645.9Z"
                                  className="colorFF7245 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M1188.94 2402.19V1930.93C1188.94 1925.23 1190.07 1919.59 1192.27 1914.33C1194.46 1909.08 1197.67 1904.3 1201.72 1900.3C1205.77 1896.29 1210.58 1893.13 1215.86 1890.99C1221.14 1888.85 1226.79 1887.78 1232.49 1887.84H1485.58C1491.28 1887.78 1496.93 1888.85 1502.21 1890.99C1507.49 1893.13 1512.29 1896.29 1516.34 1900.3C1520.39 1904.3 1523.61 1909.08 1525.8 1914.33C1527.99 1919.59 1529.12 1925.23 1529.12 1930.93V2402.19C1529.12 2413.74 1524.54 2424.81 1516.37 2432.98C1508.2 2441.15 1497.13 2445.73 1485.58 2445.73H1232.49C1220.94 2445.73 1209.86 2441.15 1201.7 2432.98C1193.53 2424.81 1188.94 2413.74 1188.94 2402.19Z"
                                  className="colorfff svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M1485.58 2448H1232.49C1226.47 2448 1220.51 2446.81 1214.96 2444.51C1209.4 2442.21 1204.35 2438.84 1200.09 2434.58C1195.84 2430.33 1192.47 2425.28 1190.16 2419.72C1187.86 2414.16 1186.68 2408.2 1186.68 2402.19V1930.93C1186.8 1918.85 1191.68 1907.32 1200.25 1898.83C1208.83 1890.33 1220.42 1885.57 1232.49 1885.57H1485.58C1497.65 1885.57 1509.24 1890.33 1517.82 1898.83C1526.39 1907.32 1531.27 1918.85 1531.39 1930.93V2402.19C1531.39 2408.2 1530.21 2414.16 1527.91 2419.72C1525.6 2425.28 1522.23 2430.33 1517.98 2434.58C1513.72 2438.84 1508.67 2442.21 1503.11 2444.51C1497.55 2446.81 1491.6 2448 1485.58 2448ZM1232.49 1890.1C1227.09 1890.04 1221.73 1891.06 1216.73 1893.08C1211.72 1895.1 1207.17 1898.1 1203.33 1901.9C1199.49 1905.7 1196.44 1910.22 1194.36 1915.2C1192.28 1920.18 1191.21 1925.53 1191.21 1930.93V2402.19C1191.21 2413.14 1195.56 2423.63 1203.3 2431.38C1211.04 2439.12 1221.54 2443.46 1232.49 2443.46H1485.58C1496.53 2443.46 1507.03 2439.12 1514.77 2431.38C1522.51 2423.63 1526.86 2413.14 1526.86 2402.19V1930.93C1526.86 1925.53 1525.79 1920.18 1523.71 1915.2C1521.63 1910.22 1518.58 1905.7 1514.74 1901.9C1510.9 1898.1 1506.35 1895.1 1501.34 1893.08C1496.34 1891.06 1490.98 1890.04 1485.58 1890.1H1232.49Z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#6be4ff"
                                  d="M1341.34 2075.62L1254.26 2228.02H1428.88L1341.34 2075.62Z"
                                  className="color6BE4FF svgShape"
                                ></path>
                                <path
                                  fill="#ffda82"
                                  d="M1360.39 2189.46C1360.39 2179.23 1363.43 2169.24 1369.11 2160.73C1374.79 2152.23 1382.87 2145.6 1392.31 2141.69C1401.76 2137.78 1412.16 2136.75 1422.19 2138.75C1432.22 2140.74 1441.43 2145.67 1448.66 2152.9C1455.9 2160.13 1460.82 2169.34 1462.82 2179.37C1464.81 2189.4 1463.79 2199.8 1459.87 2209.25C1455.96 2218.7 1449.33 2226.77 1440.83 2232.45C1432.33 2238.14 1422.33 2241.17 1412.1 2241.17C1405.31 2241.17 1398.59 2239.83 1392.31 2237.23C1386.04 2234.63 1380.34 2230.83 1375.54 2226.02C1370.74 2221.22 1366.93 2215.52 1364.33 2209.25C1361.73 2202.98 1360.39 2196.25 1360.39 2189.46Z"
                                  className="colorFFE767 svgShape"
                                ></path>
                                <path
                                  fill="#45b3e8"
                                  d="M1402.12 2164.97H1309.59V2257.63H1402.12V2164.97Z"
                                  className="colorFF7245 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M2460.76 1679.93V1342.93C2460.76 1331.46 2465.29 1320.45 2473.36 1312.3C2481.42 1304.14 2492.38 1299.5 2503.85 1299.38H2675.76C2687.31 1299.38 2698.38 1303.97 2706.55 1312.14C2714.71 1320.3 2719.3 1331.38 2719.3 1342.93V1679.93C2719.3 1691.48 2714.71 1702.56 2706.55 1710.72C2698.38 1718.89 2687.31 1723.47 2675.76 1723.47H2503.85C2492.38 1723.35 2481.42 1718.71 2473.36 1710.56C2465.29 1702.41 2460.76 1691.4 2460.76 1679.93Z"
                                  className="colorfff svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M2675.76 1725.74H2504.31C2492.16 1725.74 2480.51 1720.92 2471.91 1712.33C2463.32 1703.73 2458.5 1692.08 2458.5 1679.93V1342.93C2458.5 1330.78 2463.32 1319.12 2471.91 1310.53C2480.51 1301.94 2492.16 1297.12 2504.31 1297.12H2675.76C2687.91 1297.12 2699.56 1301.94 2708.15 1310.53C2716.74 1319.12 2721.57 1330.78 2721.57 1342.93V1679.93C2721.57 1692.08 2716.74 1703.73 2708.15 1712.33C2699.56 1720.92 2687.91 1725.74 2675.76 1725.74ZM2504.31 1301.65C2493.36 1301.65 2482.86 1306 2475.12 1313.74C2467.38 1321.48 2463.03 1331.98 2463.03 1342.93V1679.93C2462.97 1685.37 2464 1690.76 2466.05 1695.8C2468.1 1700.83 2471.14 1705.41 2474.99 1709.25C2478.83 1713.1 2483.4 1716.14 2488.44 1718.19C2493.48 1720.24 2498.87 1721.27 2504.31 1721.21H2675.76C2686.7 1721.21 2697.2 1716.86 2704.94 1709.12C2712.68 1701.38 2717.03 1690.88 2717.03 1679.93V1342.93C2717.03 1331.98 2712.68 1321.48 2704.94 1313.74C2697.2 1306 2686.7 1301.65 2675.76 1301.65H2504.31Z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#6be4ff"
                                  d="M2576.88 1442.26L2510.2 1558.37H2643.1L2576.88 1442.26Z"
                                  className="color6BE4FF svgShape"
                                ></path>
                                <path
                                  fill="#ffda82"
                                  d="M2590.94 1528.88C2590.94 1521.08 2593.25 1513.45 2597.59 1506.96C2601.93 1500.47 2608.09 1495.41 2615.3 1492.43C2622.51 1489.44 2630.44 1488.66 2638.1 1490.18C2645.75 1491.7 2652.78 1495.46 2658.3 1500.98C2663.82 1506.5 2667.58 1513.53 2669.1 1521.18C2670.63 1528.84 2669.84 1536.77 2666.86 1543.98C2663.87 1551.19 2658.81 1557.36 2652.32 1561.69C2645.83 1566.03 2638.2 1568.34 2630.4 1568.34C2619.93 1568.34 2609.9 1564.19 2602.5 1556.79C2595.1 1549.39 2590.94 1539.35 2590.94 1528.88Z"
                                  className="colorFFE767 svgShape"
                                ></path>
                                <path
                                  fill="#45b3e8"
                                  d="M2622.69 1510.29H2552.39V1580.73H2622.69V1510.29Z"
                                  className="colorFF7245 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M2685.28 2073.18H2680.75V2233.11H2685.28V2073.18Z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M2683.92 2228.75H2561.46V2233.28H2683.92V2228.75zM210.585 769.152H206.049V918.832H210.585V769.152z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M329.873 769.152H207.408V773.688H329.873V769.152zM1529.12 1935.46H1188.94V1940H1529.12V1935.46zM2718.85 1333.85H2461.22V1338.39H2718.85V1333.85zM1827.03 1328.05C1825.67 1311.27 1815.69 1224.18 1762.17 1118.5 1695.94 987.869 1593.44 856.269 1457.36 785.965 1290.45 699.785 1162.09 739.7 1083.62 788.686 1031.14 821.782 986.174 865.509 951.628 917.048L948 914.78C982.855 862.661 1028.29 818.462 1081.35 785.057 1160.73 735.618 1290.9 694.796 1459.18 781.882 1596.16 852.64 1699.57 985.148 1765.79 1116.68 1819.77 1222.82 1830.2 1310.81 1831.56 1327.6L1827.03 1328.05zM1841.63 2041.88H1818.96V2037.34H1841.63V2041.88zM1764.53 2041.88H1710.1V2037.34H1764.53V2041.88zM1655.67 2041.88H1601.24V2037.34H1655.67V2041.88zM1546.81 2041.88H1492.38V2037.34H1546.81V2041.88z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M1841.64 2039.61H1837.1V1989.72H1841.64V2039.61zM1843 1935.29H1838.46L1839.37 1880.86H1843.9L1843 1935.29zM2501.13 1474.91H2446.7V1470.38H2501.13V1474.91zM2392.27 1474.91H2337.85V1470.38H2392.27V1474.91zM2283.42 1474.91H2228.99V1470.38H2283.42V1474.91zM2204.04 1632.3H2199.51V1577.87H2204.04V1632.3zM2204.04 1523.44H2199.51V1472.64H2204.04V1523.44zM1291.52 1335.57H1286.98V1281.14H1291.52V1335.57zM1291.52 1226.71H1286.98V1172.28H1291.52V1226.71zM1291.52 1117.85H1286.98V1063.42H1291.52V1117.85zM1291.93 1004.91H1239.86V1000.38H1291.93V1004.91zM1185.43 1004.91H1131V1000.38H1185.43V1004.91zM1084.14 1034.4H1079.15C1074.95 1033.78 1070.92 1032.3 1067.33 1030.03 1063.73 1027.77 1060.66 1024.77 1058.29 1021.24 1053.56 1014.35 1051.62 1005.92 1052.85 997.657 1054.4 989.411 1059.1 982.095 1065.96 977.266 1072.83 972.437 1081.3 970.477 1089.59 971.803 1093.68 972.462 1097.6 973.928 1101.12 976.114 1104.64 978.301 1107.69 981.165 1110.1 984.541 1112.51 987.917 1114.22 991.737 1115.13 995.779 1116.05 999.822 1116.15 1004.01 1115.44 1008.09 1114.16 1015.46 1110.32 1022.14 1104.59 1026.95 1098.86 1031.76 1091.62 1034.4 1084.14 1034.4zM1084.14 975.432C1078.45 975.333 1072.88 977.084 1068.27 980.421 1062.44 984.646 1058.53 991.007 1057.38 998.11 1056.33 1005.25 1058.11 1012.53 1062.35 1018.38 1066.59 1024.22 1072.95 1028.18 1080.06 1029.41 1087.22 1030.55 1094.54 1028.8 1100.41 1024.55 1106.28 1020.3 1110.22 1013.89 1111.36 1006.73 1112.5 999.571 1110.75 992.253 1106.5 986.383 1102.25 980.514 1095.84 976.575 1088.68 975.432H1084.14z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M2203.13 1618.69C2184.99 1618.69 2184.99 1645.45 2203.13 1645.91 2206.74 1645.91 2210.2 1644.47 2212.75 1641.92 2215.31 1639.37 2216.74 1635.91 2216.74 1632.3 2216.74 1628.69 2215.31 1625.23 2212.75 1622.68 2210.2 1620.12 2206.74 1618.69 2203.13 1618.69zM1841.63 1865.89C1838.03 1865.89 1834.57 1867.32 1832.01 1869.87 1829.46 1872.43 1828.03 1875.89 1828.03 1879.5 1828.03 1883.1 1829.46 1886.57 1832.01 1889.12 1834.57 1891.67 1838.03 1893.1 1841.63 1893.1 1845.24 1893.1 1848.7 1891.67 1851.26 1889.12 1853.81 1886.57 1855.24 1883.1 1855.24 1879.5 1855.24 1875.89 1853.81 1872.43 1851.26 1869.87 1848.7 1867.32 1845.24 1865.89 1841.63 1865.89zM1288.61 1326C1285 1326 1281.54 1327.43 1278.99 1329.99 1276.43 1332.54 1275 1336 1275 1339.61 1275 1343.22 1276.43 1346.68 1278.99 1349.23 1281.54 1351.78 1285 1353.21 1288.61 1353.21 1292.22 1353.21 1295.68 1351.78 1298.23 1349.23 1300.78 1346.68 1302.21 1343.22 1302.21 1339.61 1302.21 1336 1300.78 1332.54 1298.23 1329.99 1295.68 1327.43 1292.22 1326 1288.61 1326zM1854.7 1239L1827.47 1326.96 1831.8 1328.3 1859.03 1240.34 1854.7 1239z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M1772.03 1252L1768.47 1254.81L1828.07 1330.27L1831.62 1327.46L1772.03 1252Z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#ffda82"
                                  d="M430.537 1402.25C430.537 1383.41 436.124 1365 446.59 1349.33C457.056 1333.67 471.933 1321.46 489.337 1314.25C506.742 1307.04 525.893 1305.15 544.37 1308.83C562.847 1312.51 579.819 1321.58 593.14 1334.9C606.461 1348.22 615.533 1365.19 619.208 1383.67C622.884 1402.15 620.997 1421.3 613.788 1438.7C606.578 1456.11 594.37 1470.98 578.706 1481.45C563.042 1491.91 544.626 1497.5 525.788 1497.5C500.526 1497.5 476.298 1487.47 458.435 1469.6C440.572 1451.74 430.537 1427.51 430.537 1402.25Z"
                                  className="colorFFE767 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M606.071 1861.26C580.671 1745.6 529.417 1500.22 528.964 1497.95L533.5 1497.04C533.953 1499.31 585.207 1744.69 610.607 1859.9L606.071 1861.26zM597.001 1884.85C594.733 1842.21 593.825 1820.89 516.264 1687.09 438.703 1553.28 277.231 1601.82 275.417 1602.27L274.51 1598.19C275.87 1597.73 443.693 1552.83 520.347 1684.82 597.001 1816.81 599.269 1841.3 601.536 1884.85H597.001z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#45b3e8"
                                  d="M651.021 1983.73V1821.81H548.514V1981.92C524.474 2005.96 504.517 2046.33 493.178 2100.3C468.231 2219.14 495.899 2356.57 554.864 2407.37L561.214 2412.36H564.842C574.492 2411.15 584.264 2411.3 593.871 2412.81C595.103 2412.09 596.531 2411.77 597.953 2411.91L606.118 2411L613.828 2413.27C614.736 2411.45 615.643 2410.55 617.457 2410.55C623.227 2409.04 629.192 2408.43 635.146 2408.73L641.95 2410.55H642.404C670.525 2388.32 693.658 2344.78 706.358 2284.91C730.397 2170.61 705.45 2038.62 651.021 1983.73Z"
                                  className="colorFF7245 svgShape"
                                ></path>
                                <path
                                  fill="#9278ff"
                                  d="M172 1570.52C172 1551.69 177.587 1533.27 188.053 1517.61C198.519 1501.94 213.395 1489.73 230.8 1482.52C248.205 1475.31 267.356 1473.43 285.833 1477.1C304.31 1480.78 321.282 1489.85 334.603 1503.17C347.924 1516.49 356.996 1533.46 360.671 1551.94C364.346 1570.42 362.46 1589.57 355.251 1606.97C348.041 1624.38 335.833 1639.26 320.169 1649.72C304.505 1660.19 286.089 1665.77 267.251 1665.77C241.989 1665.77 217.761 1655.74 199.898 1637.88C182.035 1620.01 172 1595.79 172 1570.52Z"
                                  className="color8568FC svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M914.501 2408.27H398.787V2412.81H914.501V2408.27Z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M262.262 1526.52C251.377 1517.45 235.048 1516.54 221.441 1517.9C215.145 1519.47 209.384 1522.69 204.757 1527.24C200.131 1531.79 196.807 1537.49 195.134 1543.76C190.598 1558.27 188.33 1575.96 197.402 1589.11C202.455 1594.42 208.9 1598.19 215.998 1600C225.268 1600.67 234.463 1597.93 241.852 1592.29C247.335 1587.12 251.263 1580.52 253.191 1573.24C253.672 1566.92 252.25 1560.6 249.109 1555.1C247.287 1551.2 244.703 1547.71 241.509 1544.82C238.315 1541.94 234.576 1539.73 230.512 1538.31C225.869 1537.69 221.151 1538.65 217.12 1541.04C213.088 1543.43 209.977 1547.1 208.287 1551.47C206.414 1555.53 205.76 1560.05 206.405 1564.48C207.049 1568.91 208.963 1573.05 211.916 1576.41C212.583 1577.04 213.369 1577.52 214.226 1577.83C215.083 1578.14 215.994 1578.28 216.905 1578.23C219.431 1578.9 222.09 1578.9 224.616 1578.23C226.43 1576.87 224.616 1573.24 222.348 1574.15C220.08 1575.05 215.544 1574.15 214.184 1572.33C212.823 1570.52 210.555 1548.75 220.987 1543.76C223.255 1542.85 230.059 1541.94 231.42 1543.3C236.626 1545.92 240.997 1549.94 244.043 1554.91C247.088 1559.88 248.685 1565.6 248.655 1571.43C248.055 1575.2 246.701 1578.82 244.676 1582.07C242.65 1585.31 239.994 1588.12 236.863 1590.32C233.733 1592.52 230.193 1594.07 226.453 1594.87C222.713 1595.68 218.849 1595.73 215.091 1595.01C205.112 1591.38 197.855 1585.94 196.041 1574.15C194.226 1562.35 200.576 1530.15 217.358 1524.25C224.604 1521.5 232.515 1521.03 240.037 1522.89C245.48 1523.35 256.366 1525.61 260.448 1531.06C264.53 1536.5 273.602 1551.47 273.148 1565.08C273.945 1577.1 270.405 1589.01 263.17 1598.64C256.82 1608.62 241.852 1614.51 229.605 1614.51C229.174 1614.6 228.77 1614.78 228.426 1615.06C228.082 1615.33 227.81 1615.68 227.632 1616.08C227.454 1616.48 227.375 1616.92 227.403 1617.36C227.43 1617.8 227.564 1618.22 227.791 1618.6C230.593 1619.5 233.607 1619.5 236.409 1618.6C244.156 1617.16 251.55 1614.24 258.18 1609.98C264.886 1604.81 270.06 1597.91 273.148 1590.02C281.313 1569.16 279.952 1541.94 262.262 1526.52Z"
                                  opacity=".95"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M572.503 1368.23C571.143 1356.89 562.525 1347.37 553 1341.47 534.857 1334.22 513.085 1337.84 496.303 1347.37 479.521 1356.89 473.624 1368.69 473.171 1383.66 472.717 1398.62 488.592 1409.51 502.653 1413.14 510.436 1415.48 518.608 1416.25 526.693 1415.41 526.954 1415.31 527.19 1415.16 527.385 1414.97 527.579 1414.77 527.726 1414.53 527.813 1414.27 527.901 1414 527.927 1413.73 527.89 1413.45 527.853 1413.18 527.754 1412.91 527.6 1412.68 527.6 1411.78 526.692 1411.32 525.785 1411.32H515.353C501.292 1409.96 485.871 1404.52 479.521 1390.91 473.171 1377.31 486.325 1359.62 499.025 1351.45 511.725 1343.29 540.753 1339.21 553.454 1347.37 558.999 1351.58 563.499 1357.01 566.607 1363.24 568.875 1370.5 569.782 1377.76 567.061 1382.75 562.392 1388.8 555.751 1393.02 548.292 1394.67 540.833 1396.33 533.03 1395.32 526.239 1391.82 514.9 1388.19 503.106 1374.13 509.91 1363.7 516.714 1353.27 525.785 1352.36 536.671 1355.53 539.242 1356.5 541.537 1358.08 543.356 1360.13 545.175 1362.19 546.462 1364.66 547.103 1367.33 547.557 1371.86 548.01 1371.41 545.289 1375.49 543.679 1377.66 541.542 1379.38 539.082 1380.49 536.621 1381.6 533.919 1382.07 531.228 1381.84 528.812 1380.24 527.044 1377.82 526.239 1375.04 526.693 1374.58 526.239 1372.77 525.785 1372.32 525.5 1371.94 525.102 1371.65 524.647 1371.51 524.193 1371.37 523.705 1371.37 523.254 1371.53 522.802 1371.68 522.41 1371.96 522.131 1372.35 521.853 1372.74 521.703 1373.2 521.703 1373.68 521.747 1376.29 522.539 1378.83 523.987 1381 525.434 1383.17 527.475 1384.88 529.867 1385.92 534.577 1386.6 539.376 1385.61 543.434 1383.13 547.492 1380.64 550.555 1376.82 552.093 1372.32 552.294 1368.14 551.289 1364 549.197 1360.38 547.106 1356.76 544.017 1353.82 540.3 1351.91 536.014 1350.07 531.353 1349.28 526.701 1349.59 522.049 1349.91 517.538 1351.32 513.539 1353.72 500.839 1362.79 500.385 1376.4 511.271 1387.74 516.881 1393.14 523.85 1396.92 531.438 1398.68 539.025 1400.43 546.947 1400.1 554.36 1397.72 561.485 1395.03 567.537 1390.1 571.597 1383.66 573.248 1378.84 573.561 1373.67 572.503 1368.69M1402.12 1913.69H1310.04V1918.22H1402.12V1913.69zM2614.98 1314.8H2560.55V1319.33H2614.98V1314.8zM1529.12 2376.78H1188.94V2381.32H1529.12V2376.78zM2718.85 1674.03H2461.22V1678.57H2718.85V1674.03z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M2056.63 2144.38H1589.45V2230.7H2056.63V2144.38Z"
                                  className="colorfff svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M2058.9 2233.29H1587.18V2142.12H2058.9V2233.29ZM1591.72 2228.75H2054.36V2146.65H1591.72V2228.75Z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#141414"
                                  d="M2187.71 2221.04H1529.12V2277.83H2187.71V2221.04Z"
                                  className="colorfff svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  d="M2189.53 2280.46H1526.86V2218.77H2189.53V2280.46zM1531.39 2275.92H2184.99V2223.31H1531.39V2275.92zM1211.17 1133.82C1207.95 1133.82 1204.77 1133.19 1201.8 1131.96 1198.83 1130.73 1196.12 1128.92 1193.85 1126.65 1191.58 1124.38 1189.77 1121.68 1188.54 1118.7 1187.31 1115.73 1186.68 1112.55 1186.68 1109.33 1186.68 1106.11 1187.31 1102.93 1188.54 1099.96 1189.77 1096.99 1191.58 1094.29 1193.85 1092.01 1196.12 1089.74 1198.83 1087.93 1201.8 1086.7 1204.77 1085.47 1207.95 1084.84 1211.17 1084.84 1217.63 1084.95 1223.79 1087.57 1228.36 1092.14 1232.93 1096.71 1235.55 1102.87 1235.66 1109.33 1235.66 1115.83 1233.08 1122.06 1228.49 1126.65 1223.9 1131.24 1217.67 1133.82 1211.17 1133.82zM1211.17 1089.37C1205.88 1089.37 1200.8 1091.48 1197.06 1095.22 1193.31 1098.96 1191.21 1104.04 1191.21 1109.33 1191.21 1114.62 1193.31 1119.7 1197.06 1123.44 1200.8 1127.19 1205.88 1129.29 1211.17 1129.29 1216.46 1129.29 1221.54 1127.19 1225.28 1123.44 1229.02 1119.7 1231.13 1114.62 1231.13 1109.33 1231.13 1104.04 1229.02 1098.96 1225.28 1095.22 1221.54 1091.48 1216.46 1089.37 1211.17 1089.37zM2076.58 2143.02C2076.29 2142.99 2075.99 2143.02 2075.7 2143.11 2075.41 2143.19 2075.15 2143.34 2074.91 2143.52 2074.68 2143.71 2074.49 2143.95 2074.35 2144.21 2074.21 2144.48 2074.12 2144.76 2074.09 2145.06 2074.06 2145.36 2074.09 2145.66 2074.18 2145.95 2074.26 2146.23 2074.4 2146.5 2074.59 2146.73 2074.78 2146.96 2075.02 2147.16 2075.28 2147.3 2075.54 2147.44 2075.83 2147.53 2076.13 2147.56 2078.85 2147.56 2079.31 2143.02 2076.58 2143.02z"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  fillRule="evenodd"
                                  d="M2444.96 2014L2368.73 1937.77L2372.27 1934.23L2448.5 2010.46V1974C2448.5 1972.62 2449.62 1971.5 2451 1971.5C2452.38 1971.5 2453.5 1972.62 2453.5 1974V2016.5C2453.5 2017.88 2452.38 2019 2451 2019H2408.5C2407.12 2019 2406 2017.88 2406 2016.5C2406 2015.12 2407.12 2014 2408.5 2014H2444.96Z"
                                  clipRule="evenodd"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#ffe5d2"
                                  d="M2247.29 604H1874V974.706H2247.29V604Z"
                                  className="colorFFDCC4 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  fillRule="evenodd"
                                  d="M2181.47 661.001C2182.85 660.968 2183.99 662.061 2184.02 663.442L2184.55 705.936C2184.58 707.316 2183.49 708.461 2182.11 708.493 2180.73 708.525 2179.58 707.433 2179.55 706.052L2179.17 669.592 1947 912.86 1983.46 912.475C1984.84 912.443 1985.99 913.536 1986.02 914.916 1986.05 916.297 1984.96 917.442 1983.58 917.474L1941.08 917.999C1939.7 918.032 1938.56 916.939 1938.53 915.558L1938 873.064C1937.97 871.684 1939.06 870.539 1940.44 870.507 1941.82 870.475 1942.97 871.567 1943 872.948L1943.38 909.408 2175.55 666.14 2139.09 666.525C2137.71 666.557 2136.56 665.464 2136.53 664.084 2136.5 662.703 2137.59 661.558 2138.97 661.526L2181.47 661.001zM1106.54 1289L1182.77 1365.23 1179.23 1368.77 1103 1292.54 1103 1329C1103 1330.38 1101.88 1331.5 1100.5 1331.5 1099.12 1331.5 1098 1330.38 1098 1329L1098 1286.5C1098 1285.12 1099.12 1284 1100.5 1284L1143 1284C1144.38 1284 1145.5 1285.12 1145.5 1286.5 1145.5 1287.88 1144.38 1289 1143 1289L1106.54 1289z"
                                  clipRule="evenodd"
                                  className="color000 svgShape"
                                ></path>
                                <path
                                  fill="#228abd"
                                  d="M540 1820H658V1851H540V1820Z"
                                  className="colorFFA451 svgShape"
                                ></path>
                                <path
                                  fill="#5d6162"
                                  fillRule="evenodd"
                                  d="M654 1824H544V1847H654V1824ZM540 1820V1851H658V1820H540Z"
                                  clipRule="evenodd"
                                  className="color000 svgShape"
                                ></path>
                              </svg>
                            </g>
                          </svg>
                        </div>
                      </Col>
                    </div>
                  </div>
                </div>
              </Container>
            </section>

            <section
              className="pricing-section bg-primary-transparent mt-3"
              id="pricing"
            >
              <Container>
                <div className="text-center mb-4">
                  <a href="#top" className="tx-primary">
                    Pricing
                  </a>
                  <p className="section-title-2 mb-1">
                    Choose Best Plans For You
                  </p>
                  <p className="title-desc">
                    Takimata erat aliquyam ipsum amet et eos vero sit sit..
                    Rebum et lorem voluptua lorem.
                  </p>
                </div>

                <div className="panel tabs-style5 w-fit-content mx-auto">
                  <div className="panel-head text-center">
                    <Tabs
                      defaultActiveKey="monthly"
                      id="uncontrolled-tab-example"
                      className="mb-3 d-inline-flex"
                    >
                      <Tab eventKey="monthly" title="Monthly">
                        <div className="row align-items-center">
                          <Col xl={4} md={12}>
                            <Card className="card pricing-card">
                              <Card.Body>
                                <div className="tx-center">
                                  <h4>Basic</h4>
                                  <p className="tx-muted">
                                    Sed duo rebum et et dolores sed amet rebum
                                    magna. Et sea elitr.
                                  </p>
                                  <p className="tx-50">$10</p>
                                </div>
                                <ul className="list-unstyled mb-4">
                                  <li className="mb-3 tx-14 tx-primary">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    2 Free Domain Name
                                  </li>
                                  <li className="mb-3 tx-14 tx-primary">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    3 One-Click Apps
                                  </li>
                                  <li className="mb-3 tx-14 tx-muted">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    1 Databases
                                  </li>
                                  <li className="mb-3 tx-14 tx-muted">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    Money BackGuarantee
                                  </li>
                                  <li className="mb-0 tx-14 tx-muted">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    24/7 support
                                  </li>
                                </ul>
                                <div className="tx-center">
                                  <a
                                    href="#;"
                                    className="btn btn-primary-light btn-block"
                                  >
                                    Choose Plan
                                  </a>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col xl={4} md={12}>
                            <Card className="card pricing-card bg-primary-transparent premium-card">
                              <Card.Body>
                                <div className="tx-center">
                                  <h4>Premium</h4>
                                  <p className="op-8">
                                    Sed duo rebum et et dolores sed amet rebum
                                    magna. Et sea elitr.
                                  </p>
                                  <p className="tx-50">$29</p>
                                </div>
                                <ul className="list-unstyled mb-4">
                                  <li className="mb-3 tx-14">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                      2 Free Domain Name
                                    </span>
                                  </li>
                                  <li className="mb-3 tx-14">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                      3 One-Click Apps
                                    </span>
                                  </li>
                                  <li className="mb-3 tx-14">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                      1 Databases
                                    </span>
                                  </li>
                                  <li className="mb-3 tx-14">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                      Money BackGuarantee
                                    </span>
                                  </li>
                                  <li className="mb-3 tx-14">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                      Visitors Monitoring
                                    </span>
                                  </li>
                                  <li className="mb-3 tx-14">
                                    <span className="op-7">
                                      <i className="fa fa-check me-2 tx-10"></i>
                                      Regular Updates
                                    </span>
                                    <span className="badge badge-light rounded-pill ms-3">
                                      Yearly paln
                                    </span>
                                  </li>
                                  <li className="mb-0 tx-14">
                                    <span className="op-7">
                                      <i className="fa fa-check me-2 tx-10"></i>
                                      24/7 support
                                    </span>
                                    <span className="badge badge-light rounded-pill ms-3">
                                      Yearly paln
                                    </span>
                                  </li>
                                </ul>
                                <div className="tx-center">
                                  <a
                                    href="#;"
                                    className="btn btn-primary btn-block"
                                  >
                                    Choose Plan
                                  </a>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col xl={4} md={12}>
                            <Card className="card pricing-card">
                              <Card.Body>
                                <div className="tx-center">
                                  <h4>Standard</h4>
                                  <p className="tx-muted">
                                    Sed duo rebum et et dolores sed amet rebum
                                    magna. Et sea elitr.
                                  </p>
                                  <p className="tx-50">$15</p>
                                </div>
                                <ul className="list-unstyled mb-4">
                                  <li className="mb-3 tx-14 tx-primary">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    2 Free Domain Name
                                  </li>
                                  <li className="mb-3 tx-14 tx-primary">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    3 One-Click Apps
                                  </li>
                                  <li className="mb-3 tx-14 tx-primary">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    1 Databases
                                  </li>
                                  <li className="mb-3 tx-14 tx-muted">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    Money BackGuarantee
                                  </li>
                                  <li className="mb-0 tx-14 tx-muted">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    24/7 support
                                  </li>
                                </ul>
                                <div className="tx-center">
                                  <a
                                    href="#;"
                                    className="btn btn-primary-light btn-block"
                                  >
                                    Choose Plan
                                  </a>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        </div>
                      </Tab>
                      <Tab eventKey="yearly" title="Yearly">
                        <Row className="row align-items-center">
                          <Col xl={4} md={12}>
                            <Card className="card pricing-card">
                              <Card.Body>
                                <div className="tx-center">
                                  <h4>Basic</h4>
                                  <p className="tx-muted">
                                    Sed duo rebum et et dolores sed amet rebum
                                    magna. Et sea elitr.
                                  </p>
                                  <p className="tx-50">$170</p>
                                </div>
                                <ul className="list-unstyled mb-4">
                                  <li className="mb-3 tx-14 tx-primary">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    2 Free Domain Name
                                  </li>
                                  <li className="mb-3 tx-14 tx-primary">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    3 One-Click Apps
                                  </li>
                                  <li className="mb-3 tx-14 tx-muted">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    1 Databases
                                  </li>
                                  <li className="mb-3 tx-14 tx-muted">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    Money BackGuarantee
                                  </li>
                                  <li className="mb-0 tx-14 tx-muted">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    24/7 support
                                  </li>
                                </ul>
                                <div className="tx-center">
                                  <a
                                    href="#;"
                                    className="btn btn-primary-light btn-block"
                                  >
                                    Choose Plan
                                  </a>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col xl={4} md={12}>
                            <Card className="card pricing-card bg-primary-transparent premium-card">
                              <Card.Body>
                                <div className="tx-center">
                                  <h4>Premium</h4>
                                  <p className="op-8">
                                    Sed duo rebum et et dolores sed amet rebum
                                    magna. Et sea elitr.
                                  </p>
                                  <p className="tx-50">$319</p>
                                </div>
                                <ul className="list-unstyled mb-4">
                                  <li className="mb-3 tx-14">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                      2 Free Domain Name
                                    </span>
                                  </li>
                                  <li className="mb-3 tx-14">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                      3 One-Click Apps
                                    </span>
                                  </li>
                                  <li className="mb-3 tx-14">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                      1 Databases
                                    </span>
                                  </li>
                                  <li className="mb-3 tx-14">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                      Money BackGuarantee
                                    </span>
                                  </li>
                                  <li className="mb-3 tx-14">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                      Visitors Monitoring
                                    </span>
                                  </li>
                                  <li className="mb-3 tx-14">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                      Regular Updates
                                    </span>
                                  </li>
                                  <li className="mb-0 tx-14">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                      24/7 support
                                    </span>
                                  </li>
                                </ul>
                                <div className="tx-center">
                                  <a
                                    href="#;"
                                    className="btn btn-primary btn-block"
                                  >
                                    Choose Plan
                                  </a>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col xl={4} md={12}>
                            <Card className="card pricing-card">
                              <Card.Body>
                                <div className="tx-center">
                                  <h4>Standard</h4>
                                  <p className="tx-muted">
                                    Sed duo rebum et et dolores sed amet rebum
                                    magna. Et sea elitr.
                                  </p>
                                  <p className="tx-50">$239</p>
                                </div>
                                <ul className="list-unstyled mb-4">
                                  <li className="mb-3 tx-14 tx-primary">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    2 Free Domain Name
                                  </li>
                                  <li className="mb-3 tx-14 tx-primary">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    3 One-Click Apps
                                  </li>
                                  <li className="mb-3 tx-14 tx-primary">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    1 Databases
                                  </li>
                                  <li className="mb-3 tx-14 tx-muted">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    Money BackGuarantee
                                  </li>
                                  <li className="mb-0 tx-14 tx-muted">
                                    <span>
                                      <i className="fa fa-check me-2 tx-10"></i>
                                    </span>
                                    24/7 support
                                  </li>
                                </ul>
                                <div className="tx-center">
                                  <a
                                    href="#;"
                                    className="btn btn-primary-light btn-block"
                                  >
                                    Choose Plan
                                  </a>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </Container>
            </section>

            <section className="best-features-section mt-3">
              <Container>
                <div className="text-center mb-5">
                  <p className="section-title-2 mb-1">Our Best Features</p>
                  <p className="title-desc">
                    Et tempor. Sadipscing et nonumy. Magna eirmod amet erat et,
                    sit sed at sed et aliquyam nonumy aliquyam sit.
                  </p>
                </div>
                <div className="row justify-content-between">
                  <Col xl={4} sm={4} className="col-12">
                    <div className="p-3 feature-card text-center bg-hover-shape shadow-none ">
                      <p className="rounded-icon bg-primary-transparent flex-center mx-auto">
                        <i className="fe fe-shield tx-primary"></i>
                      </p>
                      <h5>On Demand</h5>
                      <p className="mb-0 title-desc">
                        Tempor accusam magna ipsum ea et. Sanctus aliquyam ea
                        duo sit consetetur. Labore stet sed.
                      </p>
                    </div>
                  </Col>
                  <Col xl={4} sm={4} className="col-12">
                    <div className="p-3 feature-card text-center bg-hover-shape shadow-none ">
                      <p className="rounded-icon bg-green-transparent flex-center mx-auto">
                        <i className="fe fe-clock tx-green"></i>
                      </p>
                      <h5>Any Time</h5>
                      <p className="mb-0 title-desc">
                        Tempor accusam magna ipsum ea et. Sanctus aliquyam ea
                        duo sit consetetur. Labore stet sed.
                      </p>
                    </div>
                  </Col>
                  <Col xl={4} sm={4} className="col-12">
                    <div className="p-3 feature-card text-center bg-hover-shape shadow-none ">
                      <p className="rounded-icon bg-warning-transparent flex-center mx-auto">
                        <i className="fe fe-zap tx-warning"></i>
                      </p>
                      <h5>24*7 Support</h5>
                      <p className="mb-0 title-desc">
                        Tempor accusam magna ipsum ea et. Sanctus aliquyam ea
                        duo sit consetetur. Labore stet sed.
                      </p>
                    </div>
                  </Col>
                </div>
              </Container>
            </section>

            <section className="happy-clients-section" id="reviews">
              <Container>
                <div className="text-center mb-5">
                  <a href="#top" className="invert">
                    Reviews
                  </a>
                  <p className="section-title-2 invert mb-1">
                    What Our Happy Clients Say
                  </p>
                  <p className="title-desc invert op-6">
                    Kasd sadipscing ipsum sit stet ea. Ea aliquyam kasd accusam
                    ea duo stet elitr. Lorem accusam et kasd duo gubergren..
                  </p>
                </div>
                <Landingcarousel />
              </Container>
            </section>

            <section className="faq-section mt-3">
              <Container>
                <div className="text-center mb-5">
                  <p className="section-title-2 mb-1">
                    Frequently Asked Questions
                  </p>
                  <p className="title-desc">
                    Kasd sadipscing ipsum sit stet ea. Ea aliquyam kasd accusam
                    ea duo stet elitr. Lorem accusam et kasd duo gubergren..
                  </p>
                </div>
                <div>
                  <Row>
                    <div className="col-xl-6">
                      <div className="general-faq-container">
                        <div className="d-flex align-items-center mb-3">
                          <i className="fe fe-help-circle tx-muted tx-18 me-1"></i>
                          <h5 className="section-title-1 mb-0">
                            General Questions
                          </h5>
                        </div>
                        <Accordion
                          className="accordion-style2"
                          defaultActiveKey="0"
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <a
                                className="tx-15"
                                role="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#accordion1"
                                aria-expanded="true"
                                aria-controls="accordion1"
                              >
                                How To Insert All The Plugins?
                              </a>
                            </Accordion.Header>
                            <Accordion.Body>
                              I must explain to you how all this mistaken idea
                              of denouncing pleasure and praising pain was born
                              and I will give you a complete account of the
                              system.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              How Can I contact?
                            </Accordion.Header>
                            <Accordion.Body>
                              I must explain to you how all this mistaken idea
                              of denouncing pleasure and praising pain was born
                              and I will give you a complete account of the
                              system, and expound the actual teachings of the
                              great explorer of the truth, the master-builder of
                              human happiness. No one rejects, dislikes, or
                              avoids pleasure itself, because it is pleasure,
                              but because those who do not know how to pursue
                              pleasure rationally encounter consequences.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>
                              Can I use this Plugins in Another Template?
                            </Accordion.Header>
                            <Accordion.Body>
                              I must explain to you how all this mistaken idea
                              of denouncing pleasure and praising pain was born
                              and I will give you a complete account of the
                              system, and expound the actual teachings of the
                              great explorer of the truth, the master-builder of
                              human happiness. No one rejects, dislikes, or
                              avoids pleasure itself, because it is pleasure,
                              but because those who do not know how to pursue
                              pleasure rationally encounter consequences.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>
                              Does it Easy to Customizable?
                            </Accordion.Header>
                            <Accordion.Body>
                              I must explain to you how all this mistaken idea
                              of denouncing pleasure and praising pain was born
                              and I will give you a complete account of the
                              system, and expound the actual teachings of the
                              great explorer of the truth, the master-builder of
                              human happiness. No one rejects, dislikes, or
                              avoids pleasure itself, because it is pleasure,
                              but because those who do not know how to pursue
                              pleasure rationally encounter consequences.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="privacy-faq-container">
                        <div className="d-flex align-items-center mb-3">
                          <i className="fe fe-help-circle tx-muted tx-18 me-1"></i>
                          <h5 className="section-title-1 mb-0">
                            Terms & Privacy
                          </h5>
                        </div>
                        {/* <div className="accordion accordion-style2" id="accordionFaq1">
                          <div className="accordion-item">
                            <div className="accordion-header" id="faq8">
                              <a className="collapsed tx-15" role="button" data-bs-toggle="collapse" data-bs-target="#accordion8" aria-expanded="true" aria-controls="accordion8">
                                How To Insert All The Plugins?
                                <span className="accordion-controls">
                                  <span className="expand"><i className="fe fe-plus"></i></span>
                                  <span className="shrink"><i className="fe fe-minus"></i></span>
                                </span>
                              </a>
                            </div>
                            <div id="accordion8" className="accordion-collapse collapse" aria-labelledby="faq8" data-bs-parent="#accordionFaq1">
                              <div className="accordion-body tx-13 tx-muted">
                                I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div className="accordion-header" id="faq9">
                              <a className="collapsed tx-15" role="button" data-bs-toggle="collapse" data-bs-target="#accordion9" aria-expanded="false" aria-controls="accordion9">
                                How Can I contact?
                                <span className="accordion-controls">
                                  <span className="expand"><i className="fe fe-plus"></i></span>
                                  <span className="shrink"><i className="fe fe-minus"></i></span>
                                </span>
                              </a>
                            </div>
                            <div id="accordion9" className="accordion-collapse collapse" aria-labelledby="faq9" data-bs-parent="#accordionFaq1">
                              <div className="accordion-body tx-13 tx-muted">
                                I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div className="accordion-header" id="faq10">
                              <a className="collapsed tx-15" role="button" data-bs-toggle="collapse" data-bs-target="#accordion10" aria-expanded="false" aria-controls="accordion10">
                                Can I use this Plugins in Another Template?
                                <span className="accordion-controls">
                                  <span className="expand"><i className="fe fe-plus"></i></span>
                                  <span className="shrink"><i className="fe fe-minus"></i></span>
                                </span>
                              </a>
                            </div>
                            <div id="accordion10" className="accordion-collapse collapse" aria-labelledby="faq10" data-bs-parent="#accordionFaq1">
                              <div className="accordion-body tx-13 tx-muted">
                                I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div className="accordion-header" id="faq11">
                              <a className="collapsed tx-15" role="button" data-bs-toggle="collapse" data-bs-target="#accordion11" aria-expanded="false" aria-controls="accordion11">
                                Does it Easy to Customizable?
                                <span className="accordion-controls">
                                  <span className="expand"><i className="fe fe-plus"></i></span>
                                  <span className="shrink"><i className="fe fe-minus"></i></span>
                                </span>
                              </a>
                            </div>
                            <div id="accordion11" className="accordion-collapse collapse" aria-labelledby="faq11" data-bs-parent="#accordionFaq1">
                              <div className="accordion-body tx-13 tx-muted">
                                I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div className="accordion-header" id="faq14">
                              <a className="collapsed tx-15" role="button" data-bs-toggle="collapse" data-bs-target="#accordion14" aria-expanded="false" aria-controls="accordion14">
                                How To Add additional plugins?
                                <span className="accordion-controls">
                                  <span className="expand"><i className="fe fe-plus"></i></span>
                                  <span className="shrink"><i className="fe fe-minus"></i></span>
                                </span>
                              </a>
                            </div>
                            <div id="accordion14" className="accordion-collapse collapse" aria-labelledby="faq14" data-bs-parent="#accordionFaq1">
                              <div className="accordion-body tx-13 tx-muted">
                                I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <Accordion className="accordion-style2">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <a
                                className="tx-15"
                                role="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#accordion1"
                                aria-expanded="true"
                                aria-controls="accordion1"
                              >
                                How To Insert All The Plugins?
                                {/* <span className="accordion-controls">
                                  <span className="expand"><i className="fe fe-plus"></i></span>
                                  <span className="shrink"><i className="fe fe-minus"></i></span>
                                </span> */}
                              </a>
                            </Accordion.Header>
                            <Accordion.Body>
                              I must explain to you how all this mistaken idea
                              of denouncing pleasure and praising pain was born
                              and I will give you a complete account of the
                              system.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              How Can I contact?
                            </Accordion.Header>
                            <Accordion.Body>
                              I must explain to you how all this mistaken idea
                              of denouncing pleasure and praising pain was born
                              and I will give you a complete account of the
                              system, and expound the actual teachings of the
                              great explorer of the truth, the master-builder of
                              human happiness. No one rejects, dislikes, or
                              avoids pleasure itself, because it is pleasure,
                              but because those who do not know how to pursue
                              pleasure rationally encounter consequences.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>
                              Can I use this Plugins in Another Template?
                            </Accordion.Header>
                            <Accordion.Body>
                              I must explain to you how all this mistaken idea
                              of denouncing pleasure and praising pain was born
                              and I will give you a complete account of the
                              system, and expound the actual teachings of the
                              great explorer of the truth, the master-builder of
                              human happiness. No one rejects, dislikes, or
                              avoids pleasure itself, because it is pleasure,
                              but because those who do not know how to pursue
                              pleasure rationally encounter consequences.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>
                              Does it Easy to Customizable?
                            </Accordion.Header>
                            <Accordion.Body>
                              I must explain to you how all this mistaken idea
                              of denouncing pleasure and praising pain was born
                              and I will give you a complete account of the
                              system, and expound the actual teachings of the
                              great explorer of the truth, the master-builder of
                              human happiness. No one rejects, dislikes, or
                              avoids pleasure itself, because it is pleasure,
                              but because those who do not know how to pursue
                              pleasure rationally encounter consequences.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                            <Accordion.Header>
                              How To Add additional plugins?
                            </Accordion.Header>
                            <Accordion.Body>
                              I must explain to you how all this mistaken idea
                              of denouncing pleasure and praising pain was born
                              and I will give you a complete account of the
                              system, and expound the actual teachings of the
                              great explorer of the truth, the master-builder of
                              human happiness. No one rejects, dislikes, or
                              avoids pleasure itself, because it is pleasure,
                              but because those who do not know how to pursue
                              pleasure rationally encounter consequences.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </div>
                  </Row>
                </div>
              </Container>
            </section>

            <section className="more-faq-section bg-primary-transparent mt-3">
              <Container>
                <div className="text-center ">
                  <p className="section-title-2 mb-1">Still Have Questions ?</p>
                  <p className="title-desc mb-4">
                    If you cannot find the answer, you can always contact us.
                  </p>
                  <div className="btn-list min-btn-list-xl">
                    <a href="#;" className="btn btn-secondary m-1">
                      <i className="fe fe-mail me-2 tx-14"></i>
                      Mail us
                    </a>
                    <a href="#;" className="btn btn-secondary m-1">
                      <i className="fe fe-twitter me-2 tx-14"></i>
                      Send a tweet
                    </a>
                  </div>
                </div>
              </Container>
            </section>

            <section className="contact-us-section mt-3" id="contact">
              <Container>
                <div className="text-center mb-5">
                  <a href="#top" className="tx-primary">
                    Contact
                  </a>
                  <p className="section-title-2 mb-1">
                    Feel Free To Contact Us
                  </p>
                  <p className="title-desc mb-0">
                    No et duo kasd sed aliquyam kasd ipsum sea, at ea sed labore
                    amet at..
                  </p>
                </div>
                <form>
                  <Row>
                    <div className="col-xl-6">
                      <div className="form-group ">
                        <label htmlFor="cusName" className="form-label">
                          Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cusName"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="form-group">
                        <label htmlFor="cusEmail" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cusEmail"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </Row>
                  <div className="form-group">
                    <label htmlFor="cusSubject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cusSubject"
                      placeholder="Enter your subject"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cusMessage" className="form-label">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="cusMessage"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary">Send Message</button>
                  </div>
                </form>
                <div className="text-center mb-5">
                  <p className="section-title-1 mb-1">Our Offices</p>
                  <p className="title-desc tx-13 mb-0">
                    No et duo kasd sed aliquyam kasd ipsum sea, at ea sed labore
                    amet at..
                  </p>
                </div>
                <div className="row justify-content-between">
                  <div className="col-xl-4 col-md-auto col-sm-4 col-12">
                    <div className="text-center tx-15 branch-address">
                      <p className="mb-2 rounded-icon bg-gray flex-center mx-auto">
                        <i className="fe fe-map-pin text-muted"></i>
                      </p>
                      <p className="font-weight-semibold tx-17 mb-1">
                        Sub Branch
                      </p>
                      <p className="title-desc tx-13 mb-2">
                        Mon - Fri 9am to 6pm
                      </p>
                      <p className="title-desc mb-1">150 Burno Street</p>
                      <p className="title-desc mb-0">Consetetur, SC, 1116</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-auto col-sm-4 col-12">
                    <div className="text-center tx-15 branch-address main-branch">
                      <p className="mb-2 rounded-icon bg-primary-transparent flex-center mx-auto">
                        <i className="fe fe-map-pin text-primary"></i>
                      </p>
                      <p className="font-weight-semibold tx-17 mb-1">
                        Main Branch
                      </p>
                      <p className="title-desc tx-13 mb-2">
                        Mon - Fri 9am to 6pm
                      </p>
                      <p className="title-desc mb-1">150 Burno Street</p>
                      <p className="title-desc mb-0">Consetetur, SC, 1116</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-auto col-sm-4 col-12">
                    <div className="text-center tx-15 branch-address">
                      <p className="mb-2 rounded-icon bg-gray flex-center mx-auto">
                        <i className="fe fe-map-pin text-muted"></i>
                      </p>
                      <p className="font-weight-semibold tx-17 mb-1">
                        Sub Branch
                      </p>
                      <p className="title-desc tx-13 mb-2">
                        Mon - Fri 9am to 6pm
                      </p>
                      <p className="title-desc mb-1">150 Burno Street</p>
                      <p className="title-desc mb-0">Consetetur, SC, 1116</p>
                    </div>
                  </div>
                </div>
              </Container>
            </section>

            <section className="footer-section mt-3 tx-15">
              <Container>
                <div className="row justify-content-between">
                  <div className="col-xl-4 col-md-4 col-sm-12">
                    <div className="footer-container-1">
                      <img
                        src={logowhiteoriginal}
                        className="mobile-logo dark-logo-1"
                        alt="logo"
                      />
                      <p className="op-7 mb-2 invert">
                        Admin and Dashboard Template
                      </p>
                      <p className="op-7 mb-0 invert">
                        Use this admin template to design stunning dashboards
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-2 col-sm-4">
                    <div className="footer-container-2">
                      <h5 className="invert mb-3">Products</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2 footer-page-link">
                          <Link
                            to={`${import.meta.env.BASE_URL}pages/profilepage/`}
                            className="invert"
                          >
                            Products
                          </Link>
                        </li>
                        <li className="mb-2 footer-page-link">
                          <Link
                            to={`${
                              import.meta.env.BASE_URL
                            }pages/e-commerce/productDetails/`}
                            className="invert"
                          >
                            Product Details
                          </Link>
                        </li>
                        <li className="mb-2 footer-page-link">
                          <Link
                            to={`${
                              import.meta.env.BASE_URL
                            }pages/e-commerce/cart/`}
                            className="invert"
                          >
                            Cart
                          </Link>
                        </li>
                        <li className="mb-0 footer-page-link">
                          <Link
                            to={`${
                              import.meta.env.BASE_URL
                            }pages/e-commerce/addproduct/`}
                            className="invert"
                          >
                            Add Product
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-2 col-sm-4">
                    <div className="footer-container-3">
                      <h5 className="invert mb-3">Pages</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2 footer-page-link">
                          <Link
                            to={`${import.meta.env.BASE_URL}pages/profilepage/`}
                            className="invert"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="mb-2 footer-page-link">
                          <Link
                            to={`${import.meta.env.BASE_URL}pages/blog/blog/`}
                            className="invert"
                          >
                            Blog
                          </Link>
                        </li>
                        <li className="mb-2 footer-page-link">
                          <Link
                            to={`${import.meta.env.BASE_URL}pages/invoice/`}
                            className="invert"
                          >
                            Invoice
                          </Link>
                        </li>
                        <li className="mb-2 footer-page-link">
                          <Link
                            to={`${import.meta.env.BASE_URL}pages/aboutus/`}
                            className="invert"
                          >
                            About Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-2 col-sm-4">
                    <div className="footer-container-4">
                      <h5 className="invert mb-3">Social Media</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2 footer-page-link">
                          <a href="#;" className="invert">
                            <i className="fe fe-facebook tx-13 me-2"></i>
                            Facebook
                          </a>
                        </li>
                        <li className="mb-2 footer-page-link">
                          <a href="#;" className="invert">
                            <i className="fe fe-twitter tx-13 me-2"></i>
                            Twitter
                          </a>
                        </li>
                        <li className="mb-2 footer-page-link">
                          <a href="#;" className="invert">
                            <i className="fe fe-linkedin tx-13 me-2"></i>
                            Linkedin
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="invert text-center copyright-content op-6">
                  Copyright © 2023{" "}
                  <a href="#;" className="invert">
                    zem
                  </a>
                  . Designed with{" "}
                  <span className="fa fa-heart tx-danger"></span> by{" "}
                  <a href="https://www.spruko.com/" className="invert">
                    Spruko
                  </a>{" "}
                  All rights reserved
                </div>
              </Container>
            </section>
          </div>
        </div>
      </div>
      <div
        id="overlay"
        onClick={function () {
          document.body.classList.remove("landing-sidemenu-open");
        }}
      ></div>
    </Fragment>
  );
}

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});
export default connect(mapStateToProps, { ThemeChanger })(Landing);
