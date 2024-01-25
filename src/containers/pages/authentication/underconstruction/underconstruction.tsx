// import React from 'react'

import { Fragment, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Underconstructions } from "./data/countdown";
import { ThemeChanger } from "../../../../redux/action";
import * as SwitcherData from "../../../../components/common/switcher/switcherdata";
import { Helmet } from "react-helmet";
import store from "../../../../redux/store";
function Underconstruction() {
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
      <div className="bg-svg svg-4">
        <div className="page">
          <div className="z-index-10">
            <Container className=" p-5 p-sm-0">
              <Row className=" justify-content-center">
                <Col xl={5} lg={8} className="col-sm">
                  <div className="card-sigin">
                    <h2 className="tx-26 text-center text-dark">
                      Under Maintenance
                    </h2>
                    <p className="tx-12 text-muted text-center">
                      Our website is currently undergoing scheduled maintenance.
                      We Should be back shortly. Thank you for your patience!
                    </p>
                    <Underconstructions />
                    <div className="input-group text-center sub-input mt-sm-5 ms-auto me-auto mt-6">
                      <input
                        type="text"
                        className="form-control input-lg "
                        placeholder="Enter your Email"
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn Sub  btn-primary btn-lg bd-te-3  bd-be-3"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                    <div className="mg-t-20 text-center">
                      <Link
                        to={`${import.meta.env.BASE_URL}dashboard/index/`}
                        className="font-weight-semibold tx-primary tx-15"
                      >
                        Back to Home
                      </Link>
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

export default Underconstruction;
