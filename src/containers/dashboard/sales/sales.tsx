// import React from 'react'

import { Fragment } from "react";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Salestodashboard } from "./data/chartsdata";
import { Card, Col, Dropdown, ProgressBar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Salestotable from "./data/tabledata";

function Sales() {
  return (
    <Fragment>
      <Pageheader titles={"DASHBOARD"} active={"Sales"} Subtite={"Dashboard"} />
      <Row>
        <Col xxl={7} xl={12}>
          <Card>
            <Card.Header className=" flex-between">
              <div className="card-title">Sales Analytics</div>
              <div className="btn-group">
                <a  className="btn btn-sm btn-primary-light">
                  1D
                </a>
                <a  className="btn btn-sm btn-primary-light">
                  1W
                </a>
                <a  className="btn btn-sm btn-primary-light">
                  1M
                </a>
                <a  className="btn btn-sm btn-primary">
                  1Y
                </a>
              </div>
            </Card.Header>
            <Card.Body>
              <div id="salesReport">
                <Salestodashboard />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={5} xl={12}>
          <Row>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Body>
                  <div className="d-flex">
                    <div className="me-3">
                      <div className="avatar radius-4 bg-primary-transparent">
                        <i className="fa fa-cubes-stacked tx-primary"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="mb-2">Total Sales</p>
                      <h5 className="font-weight-semibold mb-1 numberfont">
                        52,283
                      </h5>
                      <div className="flex-between tx-12">
                        <span className="tx-muted me-1">since last month</span>
                        <span className="numberfont tx-success min-w-fit-content">
                          <i className="fe fe-arrow-up-right me-1 tx-14 d-inline-block"></i>
                          +1.25%
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
                  <div className="d-flex">
                    <div className="me-3">
                      <div className="avatar radius-4 bg-secondary-transparent">
                        <i className="fa fa-credit-card tx-secondary"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="mb-2">Total Purchase</p>
                      <h5 className="font-weight-semibold mb-1 numberfont">
                        $52,283
                      </h5>
                      <div className="flex-between tx-12">
                        <span className="tx-muted me-1">since last month</span>
                        <span className="numberfont tx-success min-w-fit-content">
                          <i className="fe fe-arrow-up-right me-1 tx-14 d-inline-block"></i>
                          8.34%
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
                  <div className="d-flex">
                    <div className="me-3">
                      <div className="avatar radius-4 bg-warning-transparent">
                        <i className="fa fa-arrow-rotate-left tx-warning"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="mb-2">Total Returns</p>
                      <h5 className="font-weight-semibold mb-1 numberfont">
                        $52,283
                      </h5>
                      <div className="flex-between tx-12">
                        <span className="tx-muted me-1">since last month</span>
                        <span className="tx-danger min-w-fit-content">
                          <i className="fe fe-arrow-down-right me-1 tx-14 d-inline-block"></i>
                          -0.56%
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
                  <div className="d-flex">
                    <div className="me-3">
                      <div className="avatar radius-4 bg-success-transparent">
                        <i className="fa fa-chart-line tx-success"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="mb-2">Marketing</p>
                      <h5 className="font-weight-semibold mb-1 numberfont">
                        52,283
                      </h5>
                      <div className="flex-between tx-12">
                        <span className="tx-muted me-1">since last month</span>
                        <span className="numberfont tx-success min-w-fit-content">
                          <i className="fe fe-arrow-up-right me-1 tx-14 d-inline-block"></i>
                          +2.31%
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
                  <div className="card-title">Sales By Category</div>
                </Card.Header>
                <Card.Body>
                  <div className="d-sm-flex mb-3">
                    <div className="me-sm-2 mb-2 mb-sm-0">
                      <div className="avatar bg-primary-transparent tx-primary br-5">
                        <i className="fa fa-cubes-stacked"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex-between mb-1">
                        <p className="mb-0">Total Sales</p>
                        <span className="badge badge-primary-transparent">
                          40% Target Reached
                        </span>
                      </div>
                      <h5 className="mb-0 numberfont">
                        55,283 <span className="tx-muted tx-13"> / 120K</span>
                      </h5>
                    </div>
                  </div>
                  <div className="progress-bar bg-gray-300 ht-25 radius-7 justify-content-start d-flex flex-row mg-b-10">
                    <div className="bg-primary text-black wd-50p flex-center tx-11">
                      50%
                    </div>
                    <div className="bg-secondary text-black wd-30p flex-center tx-11">
                      30%
                    </div>
                    <div className="bg-success wd-10p flex-center tx-11">
                      10%
                    </div>
                  </div>
                  <span className="tx-13 d-block d-sm-inline-block">
                    <i className="fa fa-circle tx-primary tx-8 mg-e-10"></i>
                    Electronics
                  </span>
                  <span className="tx-13 d-block d-sm-inline-block mx-sm-3">
                    <i className="fa fa-circle tx-secondary tx-8 mg-e-10"></i>
                    Medical
                  </span>
                  <span className="tx-13 d-block d-sm-inline-block">
                    <i className="fa fa-circle tx-success tx-8 mg-e-10"></i>Home
                    Appliances
                  </span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className=" row-deck">
        <Col xxl={4} xl={6}>
          <Card>
            <div className="card-header flex-between">
              <div className="card-title">Stores By Country</div>

              <Link to="#" className="tx-inverse font-weight-normal tx-12">
                View All
              </Link>
            </div>
            <Card.Body>
              <div className="table-responsive">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <th className="border-top-0 bg-black-03 br-bs-5 br-ts-5">
                        Country
                      </th>
                      <th className="border-top-0 bg-black-03">Stores</th>
                      <th className="border-top-0 bg-black-03 br-be-5 br-te-5">
                        Growth
                      </th>
                    </tr>
                    <tr>
                      <td className="border-top-0 pb-2">
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
                      <td className="numberfont border-top-0 pb-2">152</td>
                      <td className="border-top-0 pb-2">
                        <span className="badge badge-success-transparent">
                          +2.58%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0 pb-2">
                        <div className="d-flex align-items-center">
                          <div className="me-3">
                            <div className="avatar">
                              <img
                                src={Allimages("Usflag")}
                                alt="flag"
                                className="br-5 shadow"
                              />
                            </div>
                          </div>
                          <span>USA</span>
                        </div>
                      </td>
                      <td className="numberfont border-top-0 pb-2">226</td>
                      <td className="border-top-0 pb-2">
                        <span className="badge badge-success-transparent">
                          +1.58%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0 pb-2">
                        <div className="d-flex align-items-center">
                          <div className="me-3">
                            <div className="avatar">
                              <img
                                src={Allimages("Argentina")}
                                alt="flag"
                                className="br-5 shadow"
                              />
                            </div>
                          </div>
                          <span>Argentina</span>
                        </div>
                      </td>
                      <td className="numberfont border-top-0 pb-2">468</td>
                      <td className="border-top-0 pb-2">
                        <span className="badge badge-danger-transparent">
                          -1.88%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0 pb-2">
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
                      <td className="numberfont border-top-0 pb-2">468</td>
                      <td className="border-top-0 pb-2">
                        <span className="badge badge-success-transparent">
                          +9.61%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0 pb-0">
                        <div className="d-flex align-items-center">
                          <div className="me-3">
                            <div className="avatar">
                              <img
                                src={Allimages("Brazil")}
                                alt="flag"
                                className="br-5 shadow"
                              />
                            </div>
                          </div>
                          <span>Brazil</span>
                        </div>
                      </td>
                      <td className="numberfont border-top-0 pb-0">3,183</td>
                      <td className="border-top-0 pb-0">
                        <span className="badge badge-danger-transparent">
                          -0.13%
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4} xl={6}>
          <Card>
            <div className="card-header flex-between">
              <div className="card-title">Upcoming Products</div>

              <Link to="#" className="tx-inverse font-weight-normal tx-12">
                View All
              </Link>
            </div>
            <Card.Body>
              <ul className="list-unstyled mb-0 removedropdownOutline">
                <li className="list-item">
                  <div className="d-flex">
                    <div className="me-2">
                      <div className="avatar">
                        <img
                          src={Allimages("Ecomerce2")}
                          alt="img"
                          className="radius-4"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <Dropdown>
                        <Dropdown.Toggle
                          className="tx-inverse float-end toggle-before-none "
                          variant="default"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fe fe-more-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another Action</Dropdown.Item>
                          <Dropdown.Item >
                            Something Else Here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <p className="mb-1 tx-primary font-weight-semibold">
                        <i className="fe fe-clock me-1 tx-11"></i>26-04-2022
                      </p>
                      <h6 className="mb-1">
                        Positive White Color Bluetooth Earbuds
                      </h6>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 pe-2 border-end">
                          <span className="me-1 tx-muted">Qty:</span>
                          <span className="numberfont">225</span>
                        </p>
                        <p className="mb-0 ps-2">
                          <span className="me-1 tx-muted">Color: </span>
                          <span>White</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex">
                    <div className="me-2">
                      <div className="avatar">
                        <img
                          src={Allimages("Ecomerce8")}
                          alt="img"
                          className="radius-4"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <Dropdown>
                        <Dropdown.Toggle
                          className="tx-inverse float-end toggle-before-none "
                          variant="default"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fe fe-more-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another Action</Dropdown.Item>
                          <Dropdown.Item >
                            Something Else Here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <p className="mb-1 tx-primary font-weight-semibold">
                        <i className="fe fe-clock me-1 tx-11"></i>29-04-2022
                      </p>
                      <h6 className="mb-1">Stylish Backpack Black Colour</h6>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 pe-2 border-end">
                          <span className="me-1 tx-muted">Qty:</span>
                          <span className="numberfont">1,289</span>
                        </p>
                        <p className="mb-0 ps-2">
                          <span className="me-1 tx-muted">Color: </span>
                          <span>White, Blue, Red</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex">
                    <div className="me-2">
                      <div className="avatar">
                        <img
                          src={Allimages("Ecomerce1")}
                          alt="img"
                          className="radius-4"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <Dropdown>
                        <Dropdown.Toggle
                          className="tx-inverse float-end toggle-before-none "
                          variant="default"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fe fe-more-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another Action</Dropdown.Item>
                          <Dropdown.Item >
                            Something Else Here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <p className="mb-1 tx-primary font-weight-semibold">
                        <i className="fe fe-clock me-1 tx-11"></i>30-04-2022
                      </p>
                      <h6 className="mb-1">Lastest Smart Phone 5G</h6>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 pe-2 border-end">
                          <span className="me-1 tx-muted">Qty:</span>
                          <span className="numberfont">121K</span>
                        </p>
                        <p className="mb-0 ps-2">
                          <span className="me-1 tx-muted">Color: </span>
                          <span>Black, Red</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex">
                    <div className="me-2">
                      <div className="avatar">
                        <img
                          src={Allimages("Ecomerce7")}
                          alt="img"
                          className="radius-4"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <Dropdown>
                        <Dropdown.Toggle
                          className="tx-inverse float-end  toggle-before-none "
                          variant="default"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fe fe-more-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another Action</Dropdown.Item>
                          <Dropdown.Item >
                            Something Else Here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <p className="mb-1 tx-primary font-weight-semibold">
                        <i className="fe fe-clock me-1 tx-11"></i>26-04-2022
                      </p>
                      <h6 className="mb-1">Sports Shoes For Men (Pair of 1)</h6>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 pe-2 border-end">
                          <span className="me-1 tx-muted">Qty:</span>
                          <span className="numberfont">225</span>
                        </p>
                        <p className="mb-0 ps-2">
                          <span className="me-1 tx-muted">Color: </span>
                          <span>White</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4} xl={12}>
          <Card>
            <Card.Header className=" flex-between">
              <div className="card-title">Team Members</div>

              <Link to="#" className="tx-inverse font-weight-normal tx-12">
                View All
              </Link>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <th className="border-top-0 bg-black-03 br-bs-5 br-ts-5">
                        Name
                      </th>
                      <th className="border-top-0 bg-black-03">Position</th>
                      <th className="border-top-0 bg-black-03">Target</th>
                      <th className="border-top-0 bg-black-03 br-be-5 br-te-5">
                        Status
                      </th>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex">
                          <div className="me-2">
                            <div className="avatar-sm">
                              <img
                                src={Allimages("User2")}
                                alt="img"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="mb-0 font-weight-semibold">
                              Texi Wan
                            </p>
                            <span className="tx-muted tx-12">
                              text.123@demo.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0">Admin</td>
                      <td className="border-top-0">
                        <div className="progress mb-0">
                          <ProgressBar
                            now={25}
                            className="progress-bar progress-bar-striped progress-bar-animated wd-25p ht-7"
                            variant="primary"
                          />
                        </div>
                      </td>
                      <td className="border-top-0">
                        <span className="badge badge-sm rounded-pill badge-success-transparent">
                          Online
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex">
                          <div className="me-2">
                            <div className="avatar-sm">
                              <img
                                src={Allimages("User17")}
                                alt="img"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="mb-0 font-weight-semibold">
                              Vin Patrol
                            </p>
                            <span className="tx-muted tx-12">
                              vinmi.753@demo.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0">Sales Exc.</td>
                      <td className="border-top-0">
                        <div className="progress mb-0">
                          <ProgressBar
                            now={45}
                            className="progress-bar progress-bar-striped progress-bar-animated wd-45p ht-7"
                            variant="primary"
                          />
                        </div>
                      </td>
                      <td className="border-top-0">
                        <span className="badge badge-sm rounded-pill badge-danger-transparent">
                          Offline
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex">
                          <div className="me-2">
                            <div className="avatar-sm">
                              <img
                                src={Allimages("User5")}
                                alt="img"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="mb-0 font-weight-semibold">
                              Inv Xenon
                            </p>
                            <span className="tx-muted tx-12">
                              xenon856@demo.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0">Member</td>
                      <td className="border-top-0">
                        <div className="progress mb-0">
                          <ProgressBar
                            now={75}
                            className="progress-bar progress-bar-striped progress-bar-animated wd-75p ht-7"
                            variant="primary"
                          />
                        </div>
                      </td>
                      <td className="border-top-0">
                        <span className="badge badge-sm rounded-pill badge-success-transparent">
                          Online
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex">
                          <div className="me-2">
                            <div className="avatar-sm">
                              <img
                                src={Allimages("User13")}
                                alt="img"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="mb-0 font-weight-semibold">
                              Salman Ixo
                            </p>
                            <span className="tx-muted tx-12">
                              salmo.111@demo.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0">Marketing</td>
                      <td className="border-top-0">
                        <div className="progress mb-0">
                          <ProgressBar
                            now={65}
                            className="progress-bar progress-bar-striped progress-bar-animated wd-75p ht-7"
                            variant="primary"
                          />
                        </div>
                      </td>
                      <td className="border-top-0">
                        <span className="badge badge-sm rounded-pill badge-success-transparent">
                          Online
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex">
                          <div className="me-2">
                            <div className="avatar-sm">
                              <img
                                src={Allimages("User8")}
                                alt="img"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="mb-0 font-weight-semibold">
                              Ian Soher
                            </p>
                            <span className="tx-muted tx-12">
                              ian12.22@demo.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0">Sales</td>
                      <td className="border-top-0">
                        <div className="progress mb-0">
                          <ProgressBar
                            now={75}
                            className="progress-bar progress-bar-striped progress-bar-animated wd-50p ht-7"
                            variant="primary"
                          />
                        </div>
                      </td>
                      <td className="border-top-0">
                        <span className="badge badge-sm rounded-pill badge-success-transparent">
                          Online
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={12} className="col-xl-12">
          <Card>
            <Card.Header>
              <div className="card-title">Products List</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Salestotable />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Sales;
