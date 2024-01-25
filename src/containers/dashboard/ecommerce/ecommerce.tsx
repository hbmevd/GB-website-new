import { Fragment, useState } from "react";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Ecommercedashboard } from "./data/chartsdata";
import { WorldMap } from "../../../components/common/mapsdata/mapsdata";

import { Card, Col, Dropdown, ProgressBar, Row } from "react-bootstrap";
import Ecommercetable from "./data/tabledata";

function Ecommerce() {
  const [content, setContent] = useState("");

  return (
    <Fragment>
      <Pageheader
        titles={"DASHBOARD"}
        active={"Ecommerce"}
        Subtite={"Dashboard"}
      />
      <Row>
        <Col xxl={5} xl={12}>
          <Row>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Body>
                  <div className="d-flex flex-column mb-0 removedropdownOutline">
                    <Dropdown className="mb-3">
                      <Dropdown.Toggle
                        className="tx-inverse float-end toggle-before-none pe-0 pt-0"
                        variant="default"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item >View Report</Dropdown.Item>
                        <Dropdown.Item >View All Orders</Dropdown.Item>
                      </Dropdown.Menu>
                      <div className="avatar radius-4 bg-primary-transparent">
                        <i className="fa fa-store tx-primary"></i>
                      </div>
                    </Dropdown>
                    <div className="flex-1">
                      <div className="mb-2">
                        <h5 className="mb-0 numberfont">$43,038.00</h5>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="mb-0">Total Orders</p>
                        <span className="tx-12 font-weight-semibold numberfont tx-primary">
                          <i className="fe fe-arrow-up-right me-1"></i>+12.86%
                        </span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Body>
                  <div className="d-flex flex-column mb-0 removedropdownOutline">
                    <Dropdown className="mb-3">
                      <Dropdown.Toggle
                        className="tx-inverse float-end toggle-before-none pe-0 pt-0"
                        variant="default"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item >View Report</Dropdown.Item>
                        <Dropdown.Item >
                          View All Customers
                        </Dropdown.Item>
                      </Dropdown.Menu>
                      <div className="avatar radius-4 bg-orange-transparent">
                        <i className="fa fa-users tx-orange"></i>
                      </div>
                    </Dropdown>
                    <div className="flex-1">
                      <div className="mb-2">
                        <h5 className="mb-0 numberfont">93,238</h5>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="mb-0">Total Customers</p>
                        <span className="tx-12 font-weight-semibold numberfont tx-orange">
                          <i className="fe fe-arrow-up-right me-1"></i>+5.64%
                        </span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Body>
                  <div className="d-flex flex-column mb-0 removedropdownOutline">
                    <Dropdown className="mb-3">
                      <Dropdown.Toggle
                        className="tx-inverse float-end toggle-before-none pe-0 pt-0"
                        variant="default"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item >View Report</Dropdown.Item>
                        <Dropdown.Item >View All Sales</Dropdown.Item>
                      </Dropdown.Menu>
                      <div className="avatar radius-4 bg-warning-transparent">
                        <i className="fa fa-rocket tx-warning"></i>
                      </div>
                    </Dropdown>
                    <div className="flex-1">
                      <div className="mb-1">
                        <h5 className="mb-0 numberfont">1,13,038</h5>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0">Total Sales</p>
                        <span className="tx-12 font-weight-semibold numberfont tx-warning">
                          <i className="fe fe-arrow-up-right me-1"></i>+2.61%
                        </span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Body>
                  <div className="d-flex flex-column mb-0 removedropdownOutline">
                    <Dropdown className="mb-3">
                      <Dropdown.Toggle
                        className="tx-inverse float-end toggle-before-none pe-0 pt-0"
                        variant="default"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item >Action</Dropdown.Item>
                        <Dropdown.Item >Another Action</Dropdown.Item>
                        <Dropdown.Item >
                          Something Else Here
                        </Dropdown.Item>
                      </Dropdown.Menu>
                      <div className="avatar radius-4 bg-green-transparent">
                        <i className="fa fa-wallet tx-green"></i>
                      </div>
                    </Dropdown>
                    <div className="flex-1">
                      <div className="mb-1">
                        <h5 className="mb-0 numberfont">$83,438.00</h5>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0">Total Conversion</p>
                        <span className="tx-12 font-weight-semibold numberfont tx-green">
                          <i className="fe fe-arrow-up-right me-1"></i>+12.86%
                        </span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card>
                <Card.Header>
                  <div className="card-title">Customers By Category</div>
                </Card.Header>
                <Card.Body>
                  <div className="mb-4">
                    <div className="flex-between mb-2">
                      <p className="mb-0 tx-14 text-start">Men</p>
                      <span>60%</span>
                    </div>
                    <div className="progress">
                      <ProgressBar
                        now={60}
                        className="progress-bar-xs progress-bar-striped progress-bar-animated bg-primary wd-60p"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex-between mb-2">
                      <p className="mb-0 tx-14 text-start">Women</p>
                      <span>40%</span>
                    </div>
                    <div className="progress">
                      <ProgressBar
                        now={40}
                        className="progress-bar-xs progress-bar-striped progress-bar-animated bg-primary wd-40p"
                      />
                    </div>
                  </div>
                  <div className="mb-0">
                    <div className="flex-between mb-2">
                      <p className="mb-0 tx-14 text-start">Visits Per Day</p>
                      <span>45%</span>
                    </div>
                    <div className="progress">
                      <ProgressBar
                        now={45}
                        className="progress-bar-xs progress-bar-striped progress-bar-animated bg-secondary wd-45p"
                        variant="secondary"
                      />
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex">
                    <div className="me-3">
                      <div className="avatar bg-primary-transparent rounded-circle">
                        <i className="fe fe-user tx-primary"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex-between">
                        <h6 className="mb-0">Total Customers Rate</h6>
                        <p className="mb-0 tx-success font-weight-semibold tx-15">
                          <i className="fe fe-arrow-up me-1"></i>+2.3%
                        </p>
                      </div>
                      <div className="flex-between">
                        <span className="badge badge-light-transparent">
                          This Month
                        </span>
                        <a href="#;" className="tx-inverse tx-12">
                          show analytics
                        </a>
                      </div>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xxl={7} xl={12}>
          <Row>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <h6>Available Balance</h6>
                    <div className="align-self-start">
                      <span className="badge badge-sm badge-primary-transparent">
                        Primary Account
                      </span>
                    </div>
                  </div>
                  <div className="mb-3 mt-2">
                    <h3 className="numberfont">$3,87,275.00</h3>
                    <span className="tx-muted tx-12">
                      01-08-2021 to 11-04-2022
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="tx-muted">Debit Card | Visa</span>
                    <div className="btn-list">
                      <a href="#;" className="btn btn-sm btn-primary">
                        Withdraw
                      </a>
                      <a href="#;" className="btn btn-sm btn-outline-primary">
                        Link Account
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="me-1 mb-1">
                      <h6 className="mb-1">Primary Card</h6>
                      <a href="#;" className="tx-12 op-7">
                        view all cards
                      </a>
                    </div>
                    <div className="min-w-fit-content">
                      <div className="avatar bg-primary radius-4">
                        <i className="fab fa-paypal"></i>
                      </div>
                    </div>
                  </div>
                  <p className="tx-20 mb-4 numberfont">XXXX XXXX XXXX 1116</p>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0 tx-18">Isa Bella</p>
                    <span className="tx-15">12/24</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card>
                <Card.Header>
                  <div className="card-title">Sales Chart</div>
                </Card.Header>
                <Card.Body>
                  <Ecommercedashboard />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col xl={4} lg={6}>
          <Card>
            <Card.Header>
              <div className="card-title">Visitors From Location</div>
            </Card.Header>
            <Card.Body className="overflow-hidden pt-2">
              <div className="ht-270 world-map world-map-1" id="vmap">
                <WorldMap setTooltipContent={setContent} />
                {content}
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="table-responsive">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="border-top-0 px-0 pt-0 pb-2">
                        <div className="d-flex align-items-center">
                          <div className="me-3">
                            <div className="avatar">
                              <img
                                src={Allimages("Russia")}
                                alt="flag"
                                className="br-5 shadow"
                              />
                            </div>
                          </div>
                          <span>Russia</span>
                        </div>
                      </td>
                      <td className="border-top-0 px-0 pt-0 pb-2 text-end">
                        <span className="tx-muted numberfont">10,341</span>
                      </td>
                      <td className="border-top-0 px-0 pt-0 pb-2 text-end">
                        <span className="tx-success">
                          <i className="fe fe-arrow-up me-1 numberfont"></i>
                          +0.61%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0 px-0 pt-0 pb-2">
                        <div className="d-flex align-items-center">
                          <div className="me-3">
                            <div className="avatar">
                              <img
                                src={Allimages("Austria")}
                                alt="flag"
                                className="br-5 shadow"
                              />
                            </div>
                          </div>
                          <span>Australia</span>
                        </div>
                      </td>
                      <td className="border-top-0 px-0 pt-0 pb-2 text-end">
                        <span className="tx-muted numberfont">3,837</span>
                      </td>
                      <td className="border-top-0 px-0 pt-0 pb-2 text-end">
                        <span className="tx-success">
                          <i className="fe fe-arrow-up me-1 numberfont"></i>
                          +0.11%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0 p-0">
                        <div className="d-flex align-items-center">
                          <div className="me-3">
                            <div className="avatar">
                              <img
                                src={Allimages("Brazil")}
                                alt="flag"
                                className="br-5"
                              />
                            </div>
                          </div>
                          <span>Brazil</span>
                        </div>
                      </td>
                      <td className="border-top-0 p-0 text-end">
                        <span className="tx-muted numberfont">2,893</span>
                      </td>
                      <td className="border-top-0 p-0 text-end">
                        <span className="tx-danger">
                          <i className="fe fe-arrow-down me-1 numberfont"></i>
                          -0.28%
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={4} lg={6}>
          <Card>
            <Card.Header>
              <div className="card-title">Top Selling Products</div>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled custom-list-group mb-0">
                <li className="list-group-item border-0 px-0 pt-0">
                  <div className="d-sm-flex">
                    <div className="me-sm-2 mb-2 mb-sm-0">
                      <div className="avatar">
                        <img
                          src={Allimages("Ecomerce2")}
                          alt="img"
                          className="radius-4"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="d-flex">
                        <h6 className="mb-0 me-1">
                          Positive White Color Wireless Earbuds
                        </h6>
                        <p className="mb-0 tx-15 font-weight-semibold min-w-fit-content ms-auto numberfont">
                          $53.25
                        </p>
                      </div>
                      <div className="d-sm-flex">
                        <div className="me-sm-1 mb-1 mb-sm-0">
                          <span className="pe-2 border-end tx-muted">
                            12-04-2022
                          </span>
                          <span className="ps-2 tx-danger">
                            only 8 items left
                          </span>
                        </div>
                        <div className="ms-auto min-w-fit-content">
                          <span className="tx-muted numberfont">
                            1.1K sales
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item border-0 px-0 pt-0">
                  <div className="d-sm-flex">
                    <div className="me-sm-2 mb-2 mb-sm-0">
                      <div className="avatar">
                        <img
                          src={Allimages("Ecomerce4")}
                          alt="img"
                          className="radius-4"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="d-flex">
                        <h6 className="mb-0 me-1">Beautiful Wooden Chair</h6>
                        <p className="mb-0 tx-15 font-weight-semibold min-w-fit-content ms-auto numberfont">
                          $30.56
                        </p>
                      </div>
                      <div className="d-sm-flex">
                        <div className="me-sm-1 mb-1 mb-sm-0">
                          <span className="pe-2 border-end tx-muted">
                            14-04-2022
                          </span>
                          <span className="ps-2 tx-green">in stock</span>
                        </div>
                        <div className="ms-auto min-w-fit-content">
                          <span className="tx-muted numberfont">531 sales</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item border-0 px-0 pt-0">
                  <div className="d-sm-flex">
                    <div className="me-sm-2 mb-2 mb-sm-0">
                      <div className="avatar">
                        <img
                          src={Allimages("Ecomerce8")}
                          alt="img"
                          className="radius-4"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="d-flex">
                        <h6 className="mb-0 me-1">
                          Stylish Backpack Black Colour
                        </h6>
                        <p className="mb-0 tx-15 font-weight-semibold min-w-fit-content ms-auto numberfont">
                          $25
                        </p>
                      </div>
                      <div className="d-sm-flex">
                        <div className="me-sm-1 mb-1 mb-sm-0">
                          <span className="pe-2 border-end tx-muted">
                            24-04-2022
                          </span>
                          <span className="ps-2 tx-danger">3 items left</span>
                        </div>
                        <div className="ms-auto min-w-fit-content">
                          <span className="tx-muted numberfont">
                            1.5K sales
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item border-0 px-0 pt-0">
                  <div className="d-sm-flex">
                    <div className="me-sm-2 mb-2 mb-sm-0">
                      <div className="avatar">
                        <img
                          src={Allimages("Ecomerce1")}
                          alt="img"
                          className="radius-4"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="d-flex">
                        <h6 className="mb-0 me-1">Lastest Smart Phone 5G</h6>
                        <p className="mb-0 tx-15 font-weight-semibold min-w-fit-content ms-auto numberfont">
                          $223.98
                        </p>
                      </div>
                      <div className="d-sm-flex">
                        <div className="me-sm-1 mb-1 mb-sm-0">
                          <span className="pe-2 border-end tx-muted">
                            11-04-2022
                          </span>
                          <span className="ps-2 tx-green">in stock</span>
                        </div>
                        <div className="ms-auto min-w-fit-content">
                          <span className="tx-muted numberfont">773 sales</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item border-0 px-0 pt-0">
                  <div className="d-sm-flex">
                    <div className="me-sm-2 mb-2 mb-sm-0">
                      <div className="avatar">
                        <img
                          src={Allimages("Ecomerce7")}
                          alt="img"
                          className="radius-4"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="d-flex">
                        <h6 className="mb-0 me-1">
                          Sports Shoes For Men (Pair of 1)
                        </h6>
                        <p className="mb-0 tx-15 font-weight-semibold min-w-fit-content ms-auto numberfont">
                          $323.98
                        </p>
                      </div>
                      <div className="d-sm-flex">
                        <div className="me-sm-1 mb-1 mb-sm-0">
                          <span className="pe-2 border-end tx-muted">
                            18-04-2022
                          </span>
                          <span className="ps-2 tx-green">in stock</span>
                        </div>
                        <div className="ms-auto min-w-fit-content">
                          <span className="tx-muted numberfont">
                            2773 sales
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item border-0 px-0 pt-0">
                  <div className="d-sm-flex">
                    <div className="me-sm-2 mb-2 mb-sm-0">
                      <div className="avatar">
                        <img
                          src={Allimages("Ecomerce5")}
                          alt="img"
                          className="radius-4"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="d-flex">
                        <h6 className="mb-0 me-1">
                          Beautiful White Colour Flower Pot
                        </h6>
                        <p className="mb-0 tx-15 font-weight-semibold min-w-fit-content ms-auto numberfont">
                          $320.05
                        </p>
                      </div>
                      <div className="d-sm-flex">
                        <div className="me-sm-1 mb-1 mb-sm-0">
                          <span className="pe-2 border-end tx-muted">
                            16-04-2022
                          </span>
                          <span className="ps-2 tx-danger">few items left</span>
                        </div>
                        <div className="ms-auto min-w-fit-content">
                          <span className="tx-muted numberfont">
                            1.61K sales
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xl ={4} lg={12} >
          <Card>
            <Card.Header>
              <div className="card-title">Top Customers</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <th className="border-top-0 bg-black-03 br-bs-5 br-ts-5">
                        Customer
                      </th>
                      <th className="border-top-0 bg-black-03">Orders</th>
                      <th className="border-top-0 bg-black-03 br-be-5 br-te-5">
                        Total
                      </th>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex">
                          <div className="me-2">
                            <span className="avatar">
                              <img
                                src={Allimages("User5")}
                                alt="img"
                                className="rounded-circle"
                              />
                            </span>
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-1">Rounnath Roshna</h6>
                            <span className="tx-muted">
                              rounnath1116@demo.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">10,234</td>
                      <td className="border-top-0 numberfont">$121K</td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex">
                          <div className="me-2">
                            <span className="avatar">
                              <img
                                src={Allimages("User6")}
                                alt="img"
                                className="rounded-circle"
                              />
                            </span>
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-1">Hasina Yae</h6>
                            <span className="tx-muted">hasina393@demo.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">10,134</td>
                      <td className="border-top-0 numberfont">$325K</td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex">
                          <div className="me-2">
                            <span className="avatar">
                              <img
                                src={Allimages("User8")}
                                alt="img"
                                className="rounded-circle"
                              />
                            </span>
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-1">Nasiha May</h6>
                            <span className="tx-muted">nasiha458@demo.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">9,394</td>
                      <td className="border-top-0 numberfont">$301K</td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex">
                          <div className="me-2">
                            <span className="avatar">
                              <img
                                src={Allimages("User7")}
                                alt="img"
                                className="rounded-circle"
                              />
                            </span>
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-1">Manisha Tex</h6>
                            <span className="tx-muted">mansiha@demo.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">12,038</td>
                      <td className="border-top-0 numberfont">$431K</td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex">
                          <div className="me-2">
                            <span className="avatar">
                              <img
                                src={Allimages("User9")}
                                alt="img"
                                className="rounded-circle"
                              />
                            </span>
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-1">Rehna Klaw</h6>
                            <span className="tx-muted">rehna394@demo.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">8,234</td>
                      <td className="border-top-0 numberfont">$95K</td>
                    </tr>
                    <tr>
                      <td className="border-top-0 pb-1">
                        <div className="d-flex">
                          <div className="me-2">
                            <span className="avatar">
                              <img
                                src={Allimages("User3")}
                                alt="img"
                                className="rounded-circle"
                              />
                            </span>
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-1">Rihana Ray</h6>
                            <span className="tx-muted">rihana852@demo.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0 pb-1 numberfont">7,234</td>
                      <td className="border-top-0 pb-1 numberfont">$71K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Product Summary</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Ecommercetable />

              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Ecommerce;
