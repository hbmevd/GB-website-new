import { Fragment, useEffect } from "react"

import logowhite from '../../../../assets/img/brand/logo-white.png';
import logowhite1 from '../../../../assets/img/brand/logo-white-1.png';
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

function Restpassword() {
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
        <div className="page" >
          <div className="z-index-10">
            <Container className="container">
              <Row className="row">
                <Col xl={5} lg={6} md={8} sm={8} xs={10} className=" py-4 justify-content-center mx-auto">
                  <div className="card-sigin">
                    {/* <!-- Demo content--> */}
                    <div className="main-card-signin d-md-flex">
                      <div className="wd-100p">
                        <div className="d-flex">
                          <Link to={`${import.meta.env.BASE_URL}dashboard/index/`}>
                            <img src={logowhite} className="sign-favicon ht-40 logo-dark" alt="logo" />
                            <img src={logowhite1} className="sign-favicon ht-40 logo-light-theme" alt="logo" />
                          </Link>
                        </div>
                        <div className="mt-3">
                          <h2 className="tx-medium tx-primary">Reset Password!</h2>
                          <h6 className="font-weight-semibold mb-4 text-dark">Enter your mail and reset your password</h6>
                          <form action="#">
                            <div className="form-group text-start">
                              <input className="form-control" placeholder="Enter your email" type="text" />
                            </div>
                            <div className="form-group text-start">
                              <input className="form-control" placeholder="Enter your password" type="password" />
                            </div>
                            <div className="form-group text-start">
                              <input className="form-control" placeholder="Enter your password" type="password" />
                            </div>
                            <Link to={`${import.meta.env.BASE_URL}dashboard/index/`} className="btn btn-primary btn-block">Reset Password</Link>
                          </form>
                        </div>
                        <div className="mg-t-20 text-center">
                          <p className="tx-muted mb-0">Take me back to <Link to={`${import.meta.env.BASE_URL}pages/authentication/signin/`} className="font-weight-semibold tx-primary tx-15">Sign In</Link></p>
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

export default Restpassword