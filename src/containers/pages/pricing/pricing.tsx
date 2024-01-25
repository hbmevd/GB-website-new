import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Nav, Tab } from "react-bootstrap";

function Pricing() {
  return (
    <Fragment>
      <Pageheader titles={"PRICING"} active={"Pricing"} Subtite={"Pages"} />
      <div className="row">
        <div className="col-md-12">
          <div className="tx-center">
            <h3>Best Plans For You!</h3>
            <p className="tx-muted">
              We have several plans to showcase your business.
            </p>
            <div className="panel tabs-style5 w-fit-content mx-auto">
              <Tab.Container defaultActiveKey="first">
                <>
                  <Nav variant="pills" className="justify-content-center mb-4">
                    <Nav.Item className="nav-link tx-14 font-weight-semibold">
                      <Nav.Link eventKey="first">Monthly</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-link tx-14 font-weight-semibold">
                      <Nav.Link eventKey="second">Yearly</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-xl-4 col-md-12">
                            <div className="card pricing-card">
                              <div className="card-body">
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
                                    
                                    className="btn btn-primary-light btn-block"
                                  >
                                    Choose Plan
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-12">
                            <div className="card pricing-card bg-primary-transparent text-dark premium-card">
                              <div className="card-body">
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
                                    
                                    className="btn btn-primary btn-block"
                                  >
                                    Choose Plan
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-12">
                            <div className="card pricing-card">
                              <div className="card-body">
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
                                    
                                    className="btn btn-primary-light btn-block"
                                  >
                                    Choose Plan
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-xl-4 col-md-12">
                            <div className="card pricing-card">
                              <div className="card-body">
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
                                    
                                    className="btn btn-primary-light btn-block"
                                  >
                                    Choose Plan
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-12">
                            <div className="card pricing-card bg-primary-transparent text-dark premium-card">
                              <div className="card-body">
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
                                    
                                    className="btn btn-primary btn-block"
                                  >
                                    Choose Plan
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-12">
                            <div className="card pricing-card">
                              <div className="card-body">
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
                                    
                                    className="btn btn-primary-light btn-block"
                                  >
                                    Choose Plan
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Pricing;
