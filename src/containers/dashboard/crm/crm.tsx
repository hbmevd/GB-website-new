import { Fragment } from "react";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col, Dropdown, Row, Table } from "react-bootstrap";
import { Cmrdashboard } from "./data/chartsdata";
import { Cmrdvisitorreport } from "./data/chartsdata2";
import Crmtable from "./data/tabledata";

function Crm() {
  return (
    <Fragment>
      <Pageheader titles={"DASHBOARD"} active={"CRM"} Subtite={"Dashboard"} />

      <Row>
        <Col className="col-xl" lg={6}>
          <Card>
            <Card.Body>
              <div className="d-flex flex-column mb-0">
                <Dropdown className="mb-3">
                  <Dropdown.Toggle

                    className="tx-inverse float-end toggle-before-none"
                    variant="default"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    dir="start"
                  >
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another Action</Dropdown.Item>
                    <Dropdown.Item>Something Else Here</Dropdown.Item>
                  </Dropdown.Menu>
                  <div className="avatar radius-4 bg-primary-transparent">
                    <i className="fa fa-fire tx-primary"></i>
                  </div>
                </Dropdown>
                <div>
                  <div className="mb-1">
                    <h4 className="tx-20 mb-0 numberfont">435</h4>
                  </div>
                  <div className="flex-between">
                    <p className="mb-0">Total Campaign</p>
                    <span className="badge badge-success-transparent badge-sm rounded-pill">
                      +12.86%
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-xl" lg={6}>
          <Card>
            <Card.Body>
              <div className="d-flex flex-column mb-0">
                <Dropdown className="mb-3">
                  <Dropdown.Toggle
                    className="tx-inverse float-end toggle-before-none"
                    variant="default"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another Action</Dropdown.Item>
                    <Dropdown.Item>Something Else Here</Dropdown.Item>
                  </Dropdown.Menu>
                  <div className="avatar radius-4 bg-secondary-transparent">
                    <i className="fa fa-envelope tx-secondary"></i>
                  </div>
                </Dropdown>
                <div>
                  <div className="mb-1">
                    <h4 className="tx-20 mb-0 numberfont">2,348</h4>
                  </div>
                  <div className="flex-between">
                    <p className="mb-0">Mails Sent</p>
                    <span className="badge badge-danger-transparent badge-sm rounded-pill">
                      -1.5%
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-xl" lg={6}>
          <Card>
            <Card.Body>
              <div className="d-flex flex-column mb-0">
                <Dropdown className="mb-3">
                  <Dropdown.Toggle
                    className="tx-inverse float-end toggle-before-none"
                    variant="default"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another Action</Dropdown.Item>
                    <Dropdown.Item>Something Else Here</Dropdown.Item>
                  </Dropdown.Menu>
                  <div className="avatar radius-4 bg-warning-transparent">
                    <i className="fa fa-handshake tx-warning"></i>
                  </div>
                </Dropdown>
                <div>
                  <div className="mb-1">
                    <h4 className="tx-20 mb-0 numberfont">5,417</h4>
                  </div>
                  <div className="flex-between">
                    <p className="mb-0">Total Deals</p>
                    <span className="badge badge-danger-transparent badge-sm rounded-pill">
                      -1.5%
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-xl" lg={6}>
          <Card>
            <Card.Body>
              <div className="d-flex flex-column mb-0">
                <Dropdown className="mb-3">
                  <Dropdown.Toggle
                    className="tx-inverse float-end toggle-before-none"
                    variant="default"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another Action</Dropdown.Item>
                    <Dropdown.Item>Something Else Here</Dropdown.Item>
                  </Dropdown.Menu>
                  <div className="avatar radius-4 bg-success-transparent">
                    <i className="fa fa-users tx-success"></i>
                  </div>
                </Dropdown>
                <div>
                  <div className="mb-1">
                    <h4 className="tx-20 mb-0 numberfont">43,294</h4>
                  </div>
                  <div className="flex-between">
                    <p className="mb-0">Total Clients</p>
                    <span className="badge badge-success-transparent badge-sm rounded-pill">
                      +2.86%
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} className="col-xl">
          <Card>
            <Card.Body>
              <div className="d-flex flex-column mb-0">
                <Dropdown className="mb-3">
                  <Dropdown.Toggle
                    className="tx-inverse float-end toggle-before-none"
                    variant="default"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another Action</Dropdown.Item>
                    <Dropdown.Item>Something Else Here</Dropdown.Item>
                  </Dropdown.Menu>
                  <div className="avatar radius-4 bg-purple-transparent">
                    <i className="fa fa-coins tx-purple"></i>
                  </div>
                </Dropdown>
                <div>
                  <div className="mb-1">
                    <h4 className="tx-20 mb-0 numberfont">$43,038.00</h4>
                  </div>
                  <div className="flex-between">
                    <p className="mb-0">Total Revenue</p>
                    <span className="badge badge-success-transparent badge-sm rounded-pill">
                      +5.1%
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-deck">
        <Col xl={7} >
          <Card>
            <Card.Header>
              <div className="card-title">Total Revenue</div>
            </Card.Header>
            <Card.Body>
              <div id="totalRevenue">
                <Cmrdashboard />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={5}>
          <Card>
            <Card.Header>
              <div className="card-title">Deals Report</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <th className="border-top-0 bg-black-03 br-bs-5 br-ts-5">
                        Deal
                      </th>
                      <th className="border-top-0 bg-black-03">Value</th>
                      <th className="border-top-0 bg-black-03 tx-center">
                        Probability
                      </th>
                      <th className="border-top-0 bg-black-03">Status</th>
                      <th className="border-top-0 bg-black-03 br-be-5 br-te-5">
                        Closing Date
                      </th>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <span className="avatar-sm radius-4 bg-primary-gradient">
                              <i className="fe fe-terminal tx-white"></i>
                            </span>
                          </div>
                          <h6 className="mb-0 flex-1">Et Management</h6>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">$121K</td>
                      <td className="border-top-0 tx-center numberfont">50%</td>
                      <td className="border-top-0">
                        <span className="badge badge-sm badge-primary-transparent rounded-pill">
                          Contract Sent
                        </span>
                      </td>
                      <td className="border-top-0 numberfont">21-04-2022</td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <span className="avatar-sm radius-4 bg-secondary-gradient tx-white">
                              RA
                            </span>
                          </div>
                          <h6 className="mb-0 flex-1">Raslk Assoc</h6>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">$68K</td>
                      <td className="border-top-0 tx-center numberfont">70%</td>
                      <td className="border-top-0">
                        <span className="badge badge-sm badge-warning-transparent rounded-pill">
                          On Hold
                        </span>
                      </td>
                      <td className="border-top-0 numberfont">28-04-2022</td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <span className="avatar-sm radius-4 bg-warning-gradient">
                              <i className="fe fe-monitor tx-white"></i>
                            </span>
                          </div>
                          <h6 className="mb-0 flex-1">Sed Systems</h6>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">$221K</td>
                      <td className="border-top-0 tx-center numberfont">10%</td>
                      <td className="border-top-0">
                        <span className="badge badge-sm badge-danger-transparent rounded-pill">
                          Contract Failed
                        </span>
                      </td>
                      <td className="border-top-0 numberfont">22-04-2022</td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <span className="avatar-sm radius-4 bg-success-gradient tx-white">
                              JM
                            </span>
                          </div>
                          <h6 className="mb-0 flex-1">Justo Manufacturers</h6>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">$521K</td>
                      <td className="border-top-0 tx-center numberfont">70%</td>
                      <td className="border-top-0">
                        <span className="badge badge-sm badge-success-transparent rounded-pill">
                          Won
                        </span>
                      </td>
                      <td className="border-top-0 numberfont">20-04-2022</td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <span className="avatar-sm radius-4 bg-purple-gradient tx-white">
                              AD
                            </span>
                          </div>
                          <h6 className="mb-0 flex-1">At Developers</h6>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">$51K</td>
                      <td className="border-top-0 tx-center numberfont">90%</td>
                      <td className="border-top-0">
                        <span className="badge badge-sm badge-primary-transparent rounded-pill">
                          Contract Sent
                        </span>
                      </td>
                      <td className="border-top-0 numberfont">28-04-2022</td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <span className="avatar-sm radius-4 bg-secondary-gradient tx-white">
                              RA
                            </span>
                          </div>
                          <h6 className="mb-0 flex-1">Raslk Assoc</h6>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">$68K</td>
                      <td className="border-top-0 tx-center numberfont">70%</td>
                      <td className="border-top-0">
                        <span className="badge badge-sm badge-warning-transparent rounded-pill">
                          On Hold
                        </span>
                      </td>
                      <td className="border-top-0 numberfont">28-04-2022</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-deck">
        <Col xxl={3} xl={6}>
          <Card>
            <Card.Header>
              <div className="card-title">Recent Projects</div>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled mb-0">
                <li className="list-item">
                  <div className="d-flex align-items-start">
                    <div className="me-2">
                      <div className="avatar bg-primary-gradient rounded-circle">
                        <i className="fe fe-monitor tx-white"></i>
                      </div>
                    </div>
                    <div className="flex-1 d-flex align-items-start justify-content-between">
                      <div className="me-1 flex-1">
                        <p className="mb-0 tx-14 font-weight-semibold">
                          Landing Design
                        </p>
                        <span className="tx-muted tx-12">121 tasks</span>
                      </div>
                      <div className="btn-list min-w-fit-content">
                        <Dropdown>
                          <Dropdown.Toggle
                            className="tx-inverse toggle-before-none"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex align-items-start">
                    <div className="me-2">
                      <div className="avatar bg-secondary-gradient rounded-circle">
                        <i className="fe fe-code tx-white"></i>
                      </div>
                    </div>
                    <div className="flex-1 d-flex align-items-start justify-content-between">
                      <div className="me-1 flex-1">
                        <p className="mb-1 font-weight-semibold tx-14">
                          Multipurpose Admin Dashboard
                        </p>
                        <span className="tx-muted tx-12">92 tasks</span>
                      </div>
                      <div className="btn-list min-w-fit-content">
                        <Dropdown>
                          <Dropdown.Toggle
                            className="tx-inverse toggle-before-none"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex align-items-start">
                    <div className="me-2">
                      <div className="avatar bg-warning-gradient rounded-circle">
                        <i className="fe fe-terminal tx-white"></i>
                      </div>
                    </div>
                    <div className="flex-1 d-flex align-items-start justify-content-between">
                      <div className="me-1 flex-1">
                        <p className="mb-1 font-weight-semibold tx-14">
                          Server Side Validation
                        </p>
                        <span className="tx-muted tx-12">21 tasks</span>
                      </div>
                      <div className="btn-list min-w-fit-content">
                        <Dropdown>
                          <Dropdown.Toggle
                            className="tx-inverse toggle-before-none"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex align-items-start">
                    <div className="me-2">
                      <div className="avatar bg-success-gradient rounded-circle">
                        <i className="fe fe-file tx-white"></i>
                      </div>
                    </div>
                    <div className="flex-1 d-flex align-items-start justify-content-between">
                      <div className="me-1 flex-1">
                        <p className="mb-1 font-weight-semibold tx-14">
                          Index Page
                        </p>
                        <span className="tx-muted tx-12">69 tasks</span>
                      </div>
                      <div className="btn-list min-w-fit-content">
                        <Dropdown>
                          <Dropdown.Toggle
                            className="tx-inverse toggle-before-none"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex align-items-start">
                    <div className="me-2">
                      <div className="avatar bg-purple-gradient rounded-circle">
                        <i className="fe fe-aperture tx-white"></i>
                      </div>
                    </div>
                    <div className="flex-1 d-flex align-items-start justify-content-between">
                      <div className="me-1 flex-1">
                        <p className="mb-1 font-weight-semibold tx-14">
                          Designing Logo
                        </p>
                        <span className="tx-muted tx-12">21 tasks</span>
                      </div>
                      <div className="btn-list min-w-fit-content">
                        <Dropdown>
                          <Dropdown.Toggle
                            className="tx-inverse toggle-before-none"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex align-items-start">
                    <div className="me-2">
                      <div className="avatar bg-danger-gradient rounded-circle">
                        <i className="fe fe-toggle-left tx-white"></i>
                      </div>
                    </div>
                    <div className="flex-1 d-flex align-items-start justify-content-between">
                      <div className="me-1 flex-1">
                        <p className="mb-1 font-weight-semibold tx-14">
                          Designing Landing page
                        </p>
                        <span className="tx-muted tx-12">5 tasks</span>
                      </div>
                      <div className="btn-list min-w-fit-content">
                        <Dropdown>
                          <Dropdown.Toggle
                            className="tx-inverse toggle-before-none"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex align-items-start">
                    <div className="me-2">
                      <div className="avatar bg-secondary-gradient rounded-circle">
                        <i className="fe fe-code tx-white"></i>
                      </div>
                    </div>
                    <div className="flex-1 d-flex align-items-start justify-content-between">
                      <div className="me-1 flex-1">
                        <p className="mb-1 font-weight-semibold tx-14">
                          Multipurpose Admin Dashboard
                        </p>
                        <span className="tx-muted tx-12">92 tasks</span>
                      </div>
                      <div className="btn-list min-w-fit-content">
                        <Dropdown>
                          <Dropdown.Toggle
                            className="tx-inverse toggle-before-none"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={6} xl={6}>
          <Card>
            <Card.Header>
              <div className="card-title">Visitors Report</div>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xl={3} md={3} sm={3} className="col-12 p-0">
                  <div className="tx-center pd-b-7 pd-sm-b-0-f bd-sm-e bd-e-0 bd-b bd-sm-b-0 bd-b-dashed bd-e-dashed">
                    <p className="mb-0 tx-muted font-weight-semibold">
                      Total Visitors :
                    </p>
                    <div className="mt-2">
                      <span className="tx-15 font-weight-semibold numberfont">
                        2,258
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xl={3} md={3} sm={3} className="col-12 p-0">
                  <div className="tx-center pd-y-7 pd-sm-y-0-f bd-sm-e bd-e-0 bd-b bd-sm-b-0 bd-b-dashed bd-e-dashed">
                    <p className="mb-0 tx-muted font-weight-semibold">
                      New Visitors :
                    </p>
                    <div className="mt-2">
                      <span className="tx-15 font-weight-semibold numberfont">
                        1,548
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xl={3} md={3} sm={3} className="col-12 p-0">
                  <div className="tx-center pd-y-7 pd-sm-y-0-f bd-sm-e bd-e-0 bd-b bd-sm-b-0 bd-b-dashed bd-e-dashed">
                    <p className="mb-0 tx-muted font-weight-semibold">
                      Repeated Visitors :
                    </p>
                    <div className="mt-2">
                      <span className="tx-15 font-weight-semibold numberfont">
                        859
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xl={3} md={3} sm={3} className="col-12 p-0">
                  <div className="tx-center pd-t-7 pd-sm-t-0-f">
                    <p className="mb-0 tx-muted font-weight-semibold">
                      Visitors Rate :
                    </p>
                    <div className="mt-2">
                      <span className="badge badge-sm badge-success-transparent numberfont">
                        +5.28%
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="chart-wrapper">
                <div id="visitorsGrowth">
                  <Cmrdvisitorreport />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={12}>
          <Card>
            <Card.Header className="card-header flex-between">
              <div className="card-title">Tasks</div>
              <a href="#;" className="tx-inverse font-weight-normal tx-12">
                View All
              </a>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled mb-0">
                <li className="list-item">
                  <div className="d-flex align-items-start">
                    <label className="ckbox me-2">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <div className="flex-1 d-flex align-items-start justify-content-between">
                      <div className="me-1 flex-1">
                        <p className="mb-0 tx-14 font-weight-semibold">
                          Dolor est erat rebum lorem.
                        </p>
                        <div className="mt-1 d-flex align-items-center">
                          <div className="avatar-list-stacked">
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User2")}
                              />
                            </div>
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User6")}
                              />
                            </div>
                          </div>
                          <span className="badge badge-danger-transparent ms-2">
                            24-04-2022
                          </span>
                        </div>
                      </div>
                      <div className="btn-list min-w-fit-content">
                        <Dropdown>
                          <i className="fe fe-trash-2 tx-danger"></i>
                          <Dropdown.Toggle
                            className="tx-inverse toggle-before-none"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex align-items-start">
                    <label className="ckbox me-2">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <div className="flex-1 d-flex align-items-start justify-content-between">
                      <div className="me-1 flex-1">
                        <p className="mb-0 tx-14 font-weight-semibold">
                          Et eirmod nonumy rebum amet lorem.
                        </p>
                        <div className="mt-1 d-flex align-items-center">
                          <div className="avatar-list-stacked">
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User4")}
                              />
                            </div>
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User5")}
                              />
                            </div>
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User8")}
                              />
                            </div>
                            <a
                              href="#;"
                              className="avatar avatar-xs bg-primary rounded-circle"
                            >
                              +2
                            </a>
                          </div>
                          <span className="badge badge-danger-transparent ms-2">
                            21-04-2022
                          </span>
                        </div>
                      </div>
                      <div className="btn-list min-w-fit-content">
                        <Dropdown>
                          <i className="fe fe-trash-2 tx-danger"></i>

                          <Dropdown.Toggle
                            className="tx-inverse toggle-before-none"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex align-items-start">
                    <label className="ckbox me-2">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <div className="flex-1 d-flex align-items-start justify-content-between">
                      <div className="me-1 flex-1">
                        <p className="mb-0 tx-14 font-weight-semibold">
                          Nonumy labore dolor ea accusam.
                        </p>
                        <div className="mt-1 d-flex align-items-center">
                          <div className="avatar-list-stacked">
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User9")}
                              />
                            </div>
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User7")}
                              />
                            </div>
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User3")}
                              />
                            </div>
                          </div>
                          <span className="badge badge-danger-transparent ms-2">
                            28-04-2022
                          </span>
                        </div>
                      </div>
                      <div className="btn-list min-w-fit-content">
                        <Dropdown>
                          <i className="fe fe-trash-2 tx-danger"></i>

                          <Dropdown.Toggle
                            className="tx-inverse toggle-before-none"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex align-items-start">
                    <label className="ckbox me-2">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <div className="flex-1 d-flex align-items-start justify-content-between">
                      <div className="me-1 flex-1">
                        <p className="mb-0 tx-14 font-weight-semibold">
                          Justo voluptua ipsum takimata amet.
                        </p>
                        <div className="mt-1 d-flex align-items-center">
                          <div className="avatar-list-stacked">
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User2")}
                              />
                            </div>
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User6")}
                              />
                            </div>
                          </div>
                          <span className="badge badge-danger-transparent ms-2">
                            01-05-2022
                          </span>
                        </div>
                      </div>
                      <div className="btn-list min-w-fit-content">
                        <Dropdown>
                          <i className="fe fe-trash-2 tx-danger"></i>

                          <Dropdown.Toggle
                            className="tx-inverse toggle-before-none"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex align-items-start">
                    <label className="ckbox me-2">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <div className="flex-1 d-flex align-items-start justify-content-between">
                      <div className="me-1 flex-1">
                        <p className="mb-0 tx-14 font-weight-semibold">
                          Rebum sadip aliquyam nonumy duo.
                        </p>
                        <div className="mt-1 d-flex align-items-center">
                          <div className="avatar-list-stacked">
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User11")}
                              />
                            </div>
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User12")}
                              />
                            </div>
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User5")}
                              />
                            </div>
                            <a
                              href="#;"
                              className="avatar avatar-xs bg-primary rounded-circle"
                            >
                              +1
                            </a>
                          </div>
                          <span className="badge badge-danger-transparent ms-2">
                            07-05-2022
                          </span>
                        </div>
                      </div>
                      <div className="btn-list min-w-fit-content">
                        <Dropdown>
                          <i className="fe fe-trash-2 tx-danger"></i>

                          <Dropdown.Toggle
                            className="tx-inverse toggle-before-none"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex align-items-start">
                    <label className="ckbox me-2">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <div className="flex-1 d-flex align-items-start justify-content-between">
                      <div className="me-1 flex-1">
                        <p className="mb-0 tx-14 font-weight-semibold">
                          Consectetur adipisicing elit. Ex .
                        </p>
                        <div className="mt-1 d-flex align-items-center">
                          <div className="avatar-list-stacked">
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User11")}
                              />
                            </div>
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User12")}
                              />
                            </div>
                            <div className="avatar avatar-xs rounded-circle">
                              <img
                                alt="avatar"
                                className="rounded-circle"
                                src={Allimages("User5")}
                              />
                            </div>
                            <a
                              href="#;"
                              className="avatar avatar-xs bg-primary rounded-circle"
                            >
                              +3
                            </a>
                          </div>
                          <span className="badge badge-danger-transparent ms-2">
                            07-05-2022
                          </span>
                        </div>
                      </div>
                      <div className="btn-list min-w-fit-content">
                        <Dropdown>
                          <i className="fe fe-trash-2 tx-danger"></i>

                          <Dropdown.Toggle
                            className="tx-inverse toggle-before-none"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={12} className="col-xl-12">
          <Card>
            <Card.Header>
              <div className="card-title">Recent Invoices</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Crmtable />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Crm;
