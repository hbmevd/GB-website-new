// import React from 'react'
import { Fragment, useEffect } from "react";
import { Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import pageStyles from "../../../assets/css/pageStyles.module.css";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import { useAddress, useConnectionStatus } from "@thirdweb-dev/react";
import RSC from "react-scrollbars-custom";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Accordion, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Landing from "./landing";

function MainDashboard() {
  const connectionStatus = useConnectionStatus();
  const isConnected = connectionStatus === "connected";

  // Log a message when the user is connected
  useEffect(() => {
    if (isConnected) {
      console.log(
        "User is connected to GorillaBully Web3 Auth. You're encrypted using GB+ThirdWeb SDK."
      );
    }
  }, [isConnected]);

  return (
    <Fragment>
      {/* Conditional rendering based on connection status */}
      {isConnected ? (
        <Col xl={12} lg={12}>
          <div></div>
          <Card>
            <Card.Body className="p-0">
              <div className="browser-stats">
                <div className="d-flex align-items-center item border-bottom">
                  <div className="d-flex">
                    <div>
                      <h6
                        className="numberfont"
                        style={{
                          fontSize: "23px",
                          margin: "0 20px",
                        }}
                      >
                        <b>STATUS</b>
                      </h6>
                      <h5
                        className="numberfont"
                        style={{ fontSize: "18px", margin: "0 20px" }}
                      >
                        Congratulations <b>Bully</b>
                        <br></br>Welcome to the jungle...
                      </h5>
                      <h5 style={{ fontSize: "25px", margin: "20px 20px" }}>
                        YOU ARE ELIGIBLE TO MINT:
                      </h5>
                    </div>
                  </div>
                  <div className="ms-auto my-auto">
                    <div className="d-flex">
                      {" "}
                      <h4 className="numberfont" style={{ fontSize: "75px" }}>
                        36
                      </h4>
                    </div>
                  </div>
                  <h4
                    className="numberfont"
                    style={{ fontSize: "25px", margin: "0 20px" }}
                  >
                    Evolution 1 <b>NFTs</b>
                  </h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        <div>
          <section
            className="pricing-section bg-primary-transparent pt-5"
            id="pricing"
          >
            <div className="panel tabs-style5 w-fit-content mx-5">
              <div className="panel-head text-left">
                <Tabs
                  defaultActiveKey="comingsoon"
                  id="uncontrolled-tab-example"
                  className="mb-3 d-inline-flex"
                >
                  <Tab eventKey="comingsoon" title="Coming Soon">
                    <div className="row align-items-center">
                      <Col xl={12} md={12}>
                        <Card className="card pricing-card mb-5">
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
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </section>
          <div
            className="numberfont justify-content-center card d-flex align-items-center"
            style={{ padding: "20px" }}
          >
            <a href="" style={{ fontSize: "23px" }}>
              <b>JOIN DISCORD TO WHITELIST</b>
            </a>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default MainDashboard;
