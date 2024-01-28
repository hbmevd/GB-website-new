// import React from 'react'
import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import pageStyles from "../../../assets/css/pageStyles.module.css";

function MainDashboard() {
  return (
    <Fragment>
      <div className={pageStyles.newContainer}>bish</div>
      <Row>
        <Col xl={12} xxl={12}>
          <Row>
            <Col xl={12} lg={12} md={12}>
              <Card>
                <Card.Body className=" py-0 px-3">
                  <Row>
                    <Col
                      xxl={3}
                      xl={6}
                      md={6}
                      sm={12}
                      className="d-flex align-items-center justify-content-between flex-wrap border-primary-end p-4"
                    >
                      <div>
                        <p className="tx-primary tx-12 mb-1">Holders </p>
                        <h4 className="tx-22 numberfont font-weight-semibold mb-1">
                          0
                        </h4>
                        <p className="tx-11 tx-muted mb-0">Evolution 1 NFT</p>
                      </div>
                      <div className="flex-center"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        className="svg-warning total-sales-svg main-dashboard-cards-svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#175787"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"></path>
                      </svg>
                    </Col>
                    <Col
                      xxl={3}
                      xl={6}
                      md={6}
                      sm={12}
                      className="d-flex align-items-center justify-content-between flex-wrap border-primary-end p-4"
                    >
                      <div>
                        <p className="tx-primary tx-12 mb-1">Current Supply</p>
                        <h4 className="tx-22 numberfont font-weight-semibold mb-1">
                          1,000
                        </h4>
                        <p className="tx-11 tx-muted mb-0">NFTs</p>
                      </div>
                      <div className="flex-center"></div>
                    </Col>
                    <Col
                      xxl={3}
                      xl={6}
                      md={6}
                      sm={12}
                      className="d-flex align-items-center justify-content-between flex-wrap border-primary-end p-4"
                    >
                      <div>
                        <p className="tx-primary tx-12 mb-1">Price</p>
                        <h4 className="tx-22 numberfont font-weight-semibold mb-1">
                          FREE
                        </h4>
                        <p className="tx-11 tx-muted mb-0">ETH</p>
                      </div>
                      <div className="flex-center"></div>
                    </Col>
                    <Col
                      xxl={3}
                      xl={6}
                      md={6}
                      sm={12}
                      className="d-flex align-items-center justify-content-between flex-wrap ps-4 py-4 pe-2"
                    >
                      <div className="flex-grow-1">
                        <p className="tx-primary tx-12 mb-1"></p>
                        <h4 className="tx-22 numberfont font-weight-semibold mb-1">
                          $34K
                          <span className="badge badge-success-transparent tx-success tx-11 ms-2">
                            56<i className="fe fe-arrow-up tx-11"></i>
                          </span>
                        </h4>
                        <p className="tx-11 tx-muted mb-0">Current Month</p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              {/* <NavLink
                to={`${import.meta.env.BASE_URL}pages/invoice/`}
                className="tx-muted tx-11"
              >
                NAVIGATION LINK
              </NavLink> */}
            </Col>
          </Row>
        </Col>

        <div className="col-xl-12 col-xxl-3"></div>
      </Row>
      {/* <!-- row closed --> */}

      {/* <!-- row  --> */}

      {/* <!-- /row closed --> */}
    </Fragment>
  );
}

export default MainDashboard;
