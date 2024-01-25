// import React from 'react'

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

function Signup() {
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
            <div className="bg-svg">
                <div className="page" >
                    <div className="z-index-10">
                        <Container>
                            <Row>
                                <Col xl={5} lg={6} md={8} sm={8} xs={10} className="justify-content-center py-4 mx-auto my-auto">
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
                                                    <h2 className="tx-medium tx-primary">Get Started</h2>
                                                    <h6 className="font-weight-semibold mb-4 text-dark">It's free to signup and only takes a minute.</h6>
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-xl-6">
                                                                <div className="form-group">
                                                                    <input className="form-control" placeholder="First Name" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6">
                                                                <div className="form-group">
                                                                    <input className="form-control" placeholder="Last Name" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12">
                                                                <div className="form-group">
                                                                    <input className="form-control" placeholder="Email" type="email" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12">
                                                                <div className="form-group">
                                                                    <input className="form-control" placeholder="Mobile Number" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12">
                                                                <div className="form-group">
                                                                    <input className="form-control" placeholder="Password" type="password" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <Link to={`${import.meta.env.BASE_URL}dashboard/index/`} className="btn btn-primary btn-block">Create Account</Link>
                                                    </form>
                                                    <div className="divider my-4 or tx-muted"></div>
                                                    <a  className="btn btn-block btn-outline-primary tx-center flex-center"><i className="bx bxl-google tx-22 me-2"></i>Signin With Google</a>
                                                    <div className="d-flex">
                                                        <a  className="btn btn-block btn-outline-primary tx-center mt-1 flex-1 flex-center"><i className="bx bxl-facebook tx-22 me-2"></i>Facebook</a>
                                                        <a  className="btn btn-block btn-outline-primary tx-center mt-1 ms-1 flex-1 flex-center"><i className="bx bxl-twitter tx-22 me-2"></i>Twitter</a>
                                                    </div>
                                                    <div className="tx-center mt-3">
                                                        <p className="mb-0 tx-muted">Already have an account? <Link to={`${import.meta.env.BASE_URL}pages/authentication/signin/`} className="tx-primary font-weight-semibold tx-15">Sign In</Link></p>
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

        </Fragment >
    )
}

export default Signup