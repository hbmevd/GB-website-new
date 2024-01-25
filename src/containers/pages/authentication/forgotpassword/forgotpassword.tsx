import { Fragment, useEffect } from "react";

import logowhite from "../../../../assets/img/brand/logo-white.png";
import logowhite1 from "../../../../assets/img/brand/logo-white-1.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeChanger } from "../../../../redux/action";
import * as SwitcherData from "../../../../components/common/switcher/switcherdata";
import { Helmet } from "react-helmet";
import store from "../../../../redux/store";

import "../../../../assets/css/style.css";
import "../../../../assets/css/plugins.css";
import "../../../../assets/switcher/css/switcher.css";
import "../../../../assets/switcher/styles.css";

function Forgotpassword() {
  const theme = store.getState();
  useEffect(() => {
    SwitcherData.LocalStorageBackup(ThemeChanger);
  }, []);
  return (
    <Fragment>
      <Helmet>
        <body className="ltr error-page1 bg-primary"></body>
        <html
          dir={theme.dir}
          data-theme-color={localStorage.ZemThemestyles}
        ></html>
      </Helmet>
      <div className="bg-svg svg-2">
        <div className="page">
          <div className="z-index-10">
            <Container>
              <Row>
                <Col
                  xl={5}
                  lg={6}
                  md={8}
                  sm={8}
                  className=" py-4 justify-content-center mx-auto my-auto"
                >
                  <div className="card-sigin">
                    {/* <!-- Demo content--> */}
                    <div className="main-card-signin d-md-flex">
                      <div className="wd-100p">
                        <div className="d-flex">
                          <Link
                            to={`${import.meta.env.BASE_URL}dashboard/index/`}
                          >
                            <img
                              src={logowhite}
                              className="sign-favicon ht-40 logo-dark"
                              alt="logo"
                            />
                            <img
                              src={logowhite1}
                              className="sign-favicon ht-40 logo-light-theme"
                              alt="logo"
                            />
                          </Link>
                        </div>
                        <div className="wd-100p">
                          <div className="mt-3">
                            <h2 className="tx-medium tx-primary">
                              Forgot Password!
                            </h2>
                            <h6 className="font-weight-semibold mb-4 text-dark">
                              Please enter your mail
                            </h6>
                            <h4>Please Enter Your Email</h4>
                            <form action="#">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  placeholder="Enter your email"
                                  type="email"
                                />
                              </div>
                              <Link
                                to={`${import.meta.env.BASE_URL
                                  }dashboard/index/`}
                                className="btn btn-primary btn-block"
                              >
                                Proceed
                              </Link>
                            </form>
                          </div>
                          <div className="mg-t-20 text-center">
                            <p className="mb-0 tx-muted">
                              Take me back to
                              <Link
                                to={`${import.meta.env.BASE_URL
                                  }pages/authentication/signin/`}
                                className="tx-primary font-weight-semibold tx-15 ms-2"
                              >
                                Sign In
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Forgotpassword;
