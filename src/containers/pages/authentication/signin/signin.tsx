import { Fragment, useEffect } from "react"

import logowhite from '../../../../assets/img/brand/logo-white.png';
import logowhite1 from '../../../../assets/img/brand/logo-white-1.png';
import { Button,Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeChanger } from "../../../../redux/action";
import * as SwitcherData from "../../../../components/common/switcher/switcherdata";
import { Helmet } from "react-helmet";
import store from "../../../../redux/store";
import "../../../../assets/css/style.css";
import "../../../../assets/css/plugins.css";
import "../../../../assets/switcher/css/switcher.css";
import "../../../../assets/switcher/styles.css";
function Signin() {
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
      <div className="bg svg">
        <div className="page" >
          <div className="z-index-10">
            <Container>
              <Row>
                <Col xl={5} lg={6} md={8} sm={8} className=" mx-auto my-auto py-4 justify-content-center">
                  <div className="card-sigin">

                    <div className="main-card-signin d-md-flex">
                      <div className="wd-100p">
                        <div className="d-flex">
                          <Link to={`${import.meta.env.BASE_URL}dashboard/index/`}>
                            <img src={logowhite} className="sign-favicon ht-40 logo-dark" alt="logo" />
                            <img src={logowhite1} className="sign-favicon ht-40 logo-light-theme" alt="logo" />
                          </Link>
                        </div>
                        <div className="mt-3">
                          <h2 className="tx-medium tx-primary">Welcome back!</h2>
                          <h6 className="font-weight-semibold mb-4 text-dark">Please sign in to continue.</h6>
                          <div className="panel tabs-style7 scaleX mt-2">
                            <div className="panel-head singinTabs">
                              <Tabs
                                defaultActiveKey="email"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                              >
                                <Tab eventKey="email" title="Email">
                                  <form action="#">
                                    <div className="form-group">
                                      <input className="form-control" placeholder="Email" type="email" />
                                    </div>
                                    <div className="form-group">
                                      <input className="form-control" placeholder="Password" type="password" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <p className="mb-0"><Link to={`${import.meta.env.BASE_URL}pages/authentication/forgotpassword/`} className="tx-primary">Forgot password?</Link></p>
                                      <Link to={`${import.meta.env.BASE_URL}dashboard/index/`} className="btn "><Button>Log In</Button></Link>
                                    </div>
                                  </form>
                                  <div className="divider my-4 or tx-muted"></div>
                                  <a  className="btn btn-block btn-outline-primary tx-center flex-center"><i className="bx bxl-google tx-22 me-2"></i>Signin With Google</a>
                                  <div className="d-flex">
                                    <a  className="btn btn-block btn-outline-primary tx-center mt-1 flex-1 flex-center"><i className="bx bxl-facebook tx-22 me-2"></i>Facebook</a>
                                    <a  className="btn btn-block btn-outline-primary tx-center mt-1 ms-1 flex-1 flex-center"><i className="bx bxl-twitter tx-22 me-2"></i>Twitter</a>
                                  </div>
                                </Tab>
                                <Tab eventKey="mobilenumber" title="Mobile Number">
                                  <div id="mobile-num" className="input-group mb-2">
                                    <a  className="input-group-text bg-white text-muted">
                                      <span>+91</span>
                                    </a>
                                    <input className="form-control" type="number" placeholder="Mobile Number" />
                                  </div>
                                  <div id="login-otp" className="justify-content-around mb-4">
                                    <input className="form-control  text-center me-2" id="txt1" />
                                    <input className="form-control  text-center me-2" id="txt2" />
                                    <input className="form-control  text-center me-2" id="txt3" />
                                    <input className="form-control  text-center" id="txt4" />
                                  </div>
                                  <span className="tx-muted">Note : Login with registered mobile number to generate OTP.</span>
                                  <div className="container-login100-form-btn mt-3">
                                    <a  className="btn login100-form-btn btn-primary" id="generate-otp">
                                      Proceed
                                    </a>
                                  </div>
                                </Tab>

                              </Tabs>
                            </div>

                          </div>
                          <div className="tx-center mt-3">
                            <p className="mb-0 tx-muted">Don't have an account? <Link to={`${import.meta.env.BASE_URL}pages/authentication/signup/`} className="tx-primary font-weight-semibold tx-15">Create an Account</Link></p>
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
  )
}

export default Signin