import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

import Allimages from "../../../components/common/imagesdata/imagesdata";
import {
  Card,
  Col,
  ProgressBar,
  Row,
  Tab,
  Tabs,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Hrmdashboard } from "./data/chartsdata";
import { GlobalFilter, COLUMNS1, DATATABLE1 } from "./data/tabledata";

function Hrm() {
  const tableInstance = useTable(
    {
      columns: COLUMNS1,
      data: DATATABLE1,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  }: any = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <Fragment>
      <Pageheader titles={"DASHBOARD"} active={"HRM"} Subtite={"Dashboard"} />
      <Row>
        <Col xxl={8} xl={12}>
          <Row>
            <Col xl={4} lg={4}>
              <Card>
                <Card.Body>
                  <div className="d-flex flex-wrap">
                    <div className="me-3">
                      <div className="avatar radius-4 bg-primary-transparent">
                        <i className="fa fa-users tx-primary"></i>
                      </div>
                    </div>
                    <Dropdown className="flex-1">
                      <Dropdown.Toggle
                        className="tx-inverse float-end border-0 toggle-before-none pe-0 pt-0 border-0"
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
                      <div className="mb-1">
                        <p className="mb-0">Total Employees</p>
                      </div>
                      <div className="flex-between">
                        <p className="font-weight-semibold tx-16 mb-0 numberfont">
                          2,123
                        </p>
                        <span className="tx-12 font-weight-semibold numberfont tx-primary">
                          <i className="fe fe-arrow-up-right me-1"></i>+12.86%
                        </span>
                      </div>
                    </Dropdown>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4} lg={4}>
              <Card>
                <Card.Body>
                  <div className="d-flex flex-wrap">
                    <div className="me-3">
                      <div className="avatar radius-4 bg-warning-transparent">
                        <i className="fa fa-user-minus tx-warning"></i>
                      </div>
                    </div>
                    <Dropdown className="flex-1">
                      <Dropdown.Toggle
                        className="tx-inverse float-end border-0 toggle-before-none pe-0 pt-0"
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
                      <div className="mb-1">
                        <p className="mb-0">Employees In Leave</p>
                      </div>
                      <div className="flex-between">
                        <p className="font-weight-semibold tx-16 mb-0 numberfont">
                          123
                        </p>
                        <span className="tx-12 font-weight-semibold numberfont tx-warning">
                          <i className="fe fe-arrow-down-right me-1"></i>-2.86%
                        </span>
                      </div>
                    </Dropdown>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4} lg={4}>
              <Card>
                <Card.Body>
                  <div className="d-flex flex-wrap">
                    <div className="me-3">
                      <div className="avatar radius-4 bg-success-transparent">
                        <i className="fa fa-wallet tx-success"></i>
                      </div>
                    </div>
                    <Dropdown className="flex-1">
                      <Dropdown.Toggle
                        className="tx-inverse float-end border-0 toggle-before-none pe-0 pt-0"
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
                      <div className="mb-1">
                        <p className="mb-0">Total Revenue</p>
                      </div>
                      <div className="flex-between">
                        <p className="font-weight-semibold tx-16 mb-0 numberfont">
                          $46,392.00
                        </p>
                        <span className="tx-12 font-weight-semibold numberfont tx-success">
                          <i className="fe fe-arrow-up-right me-1"></i>+5.60%
                        </span>
                      </div>
                    </Dropdown>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card>
                <Card.Header>
                  <div className="card-title">Monthly Report</div>
                </Card.Header>
                <Card.Body>
                  <div id="revenueReport">
                    <Hrmdashboard />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <div className="card-title">Team Analytics</div>
                </Card.Header>
                <Card.Body className="overflow-auto">
                  <div className="panel tabs-style6">
                    <Tabs
                      defaultActiveKey="absent"
                      id="uncontrolled-tab-example"
                      className="mb-3"
                    >
                      <Tab
                        eventKey="absent"
                        title={
                          <span>
                            <i className="fe fe-corner-right-down me-2 tx-13"></i>
                            Absent
                          </span>
                        }
                      >
                        <table className="table border-0 mb-0 text-nowrap">
                          <tbody>
                            <tr>
                              <th className="border-top-0 bg-black-03 br-bs-5 br-ts-5">
                                Member
                              </th>
                              <th className="border-top-0 bg-black-03">From</th>
                              <th className="border-top-0 bg-black-03 br-be-5 br-te-5">
                                To
                              </th>
                            </tr>
                            <tr>
                              <td className="border-top-0">
                                <div className="d-flex">
                                  <div className="me-2">
                                    <span className="avatar">
                                      <img
                                        src={Allimages("User2")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </span>
                                  </div>
                                  <div className="flex-1">
                                    <h6 className="mb-1">Albert Dom</h6>
                                    <span className="tx-muted tx-12">
                                      Sick Leave
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="border-top-0">15-04-2022</td>
                              <td className="border-top-0">17-04-2022</td>
                            </tr>
                            <tr>
                              <td className="border-top-0">
                                <div className="d-flex">
                                  <div className="me-2">
                                    <span className="avatar">
                                      <img
                                        src={Allimages("User13")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </span>
                                  </div>
                                  <div className="flex-1">
                                    <h6 className="mb-1">Vin Patrol</h6>
                                    <span className="tx-muted tx-12">
                                      Casual Leave
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="border-top-0">11-04-2022</td>
                              <td className="border-top-0">16-04-2022</td>
                            </tr>
                            <tr>
                              <td className="border-top-0">
                                <div className="d-flex">
                                  <div className="me-2">
                                    <span className="avatar">
                                      <img
                                        src={Allimages("User4")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </span>
                                  </div>
                                  <div className="flex-1">
                                    <h6 className="mb-1">Rehna Beg</h6>
                                    <span className="tx-muted tx-12">
                                      Sick Leave
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="border-top-0">15-04-2022</td>
                              <td className="border-top-0">16-04-2022</td>
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
                                    <h6 className="mb-1">Arash Uytx</h6>
                                    <span className="tx-muted tx-12">
                                      Casual Leave
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="border-top-0">13-04-2022</td>
                              <td className="border-top-0">18-04-2022</td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                      <Tab
                        eventKey="remoteWork"
                        title={
                          <span>
                            <i className="fe fe-check-square me-2 tx-13"></i>
                            Remote Work
                          </span>
                        }
                      >
                        <table className="table border-0 mb-0 text-nowrap">
                          <tbody>
                            <tr>
                              <th className="border-top-0 bg-black-03 br-bs-5 br-ts-5">
                                Member
                              </th>
                              <th className="border-top-0 bg-black-03">From</th>
                              <th className="border-top-0 bg-black-03 br-be-5 br-te-5">
                                To
                              </th>
                            </tr>
                            <tr>
                              <td className="border-top-0">
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
                                    <h6 className="mb-1">Krish Lwo</h6>
                                    <span className="tx-muted tx-12">
                                      Work From Home
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="border-top-0">10-01-2021</td>
                              <td className="border-top-0">30-11-2022</td>
                            </tr>
                            <tr>
                              <td className="border-top-0">
                                <div className="d-flex">
                                  <div className="me-2">
                                    <span className="avatar">
                                      <img
                                        src={Allimages("User11")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </span>
                                  </div>
                                  <div className="flex-1">
                                    <h6 className="mb-1">Hank Mwi</h6>
                                    <span className="tx-muted tx-12">
                                      Work From Home
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="border-top-0">11-03-2022</td>
                              <td className="border-top-0">12-08-2022</td>
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
                                    <h6 className="mb-1">Rabbu Yar</h6>
                                    <span className="tx-muted tx-12">
                                      Work From Home
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="border-top-0">11-05-2021</td>
                              <td className="border-top-0">16-04-2022</td>
                            </tr>
                            <tr>
                              <td className="border-top-0">
                                <div className="d-flex">
                                  <div className="me-2">
                                    <span className="avatar">
                                      <img
                                        src={Allimages("User12")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </span>
                                  </div>
                                  <div className="flex-1">
                                    <h6 className="mb-1">Matrix Opod</h6>
                                    <span className="tx-muted tx-12">
                                      Work From Home
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="border-top-0">17-05-2021</td>
                              <td className="border-top-0">24-04-2022</td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                    </Tabs>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <div className="card-title">Recently Connected</div>
                </Card.Header>
                <Card.Body>
                  <div className="table-responsive">
                    <table className="table border-0 mb-0">
                      <tbody>
                        <tr>
                          <th className="border-top-0 bg-black-03 br-bs-5 br-ts-5">
                            Member
                          </th>
                          <th className="border-top-0 bg-black-03">Time</th>
                          <th className="border-top-0 bg-black-03 br-be-5 br-te-5">
                            Status
                          </th>
                        </tr>
                        <tr>
                          <td className="border-top-0">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar">
                                  <img
                                    src={Allimages("User2")}
                                    alt="img"
                                    className="rounded-circle"
                                  />
                                </span>
                              </div>
                              <div className="flex-1">
                                <h6 className="mb-1">Diam Ipsum</h6>
                                <span className="tx-muted tx-12">
                                  UI Developer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-top-0">Today, 10:03</td>
                          <td className="border-top-0">
                            <span className="badge badge-success-transparent">
                              online
                            </span>
                          </td>
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
                                <h6 className="mb-1">No Eirmod</h6>
                                <span className="tx-muted tx-12">
                                  Developer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-top-0">Today, 08:38</td>
                          <td className="border-top-0">
                            <span className="badge badge-light-transparent">
                              offline
                            </span>
                          </td>
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
                                <h6 className="mb-1">Eirmod Vonsetetur</h6>
                                <span className="tx-muted tx-12">Engineer</span>
                              </div>
                            </div>
                          </td>
                          <td className="border-top-0">14-04-2022, 10:43</td>
                          <td className="border-top-0">
                            <span className="badge badge-success-transparent">
                              online
                            </span>
                          </td>
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
                                <h6 className="mb-1">Est Eos</h6>
                                <span className="tx-muted tx-12">
                                  Cloud Engineer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-top-0">13-04-2022, 15:43</td>
                          <td className="border-top-0">
                            <span className="badge badge-light-transparent">
                              offline
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-top-0">
                            <div className="d-flex">
                              <div className="me-2">
                                <span className="avatar">
                                  <img
                                    src={Allimages("User11")}
                                    alt="img"
                                    className="rounded-circle"
                                  />
                                </span>
                              </div>
                              <div className="flex-1">
                                <h6 className="mb-1">Et Duo</h6>
                                <span className="tx-muted tx-12">
                                  Cloud Engineer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-top-0">12-04-2022, 15:43</td>
                          <td className="border-top-0">
                            <span className="badge badge-success-transparent">
                              online
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
        </Col>
        <Col xxl={4} xl={12}>
          <Row>
            <Col xl={12}>
              <Card>
                <Card.Header>
                  <div className="card-title">Overall Target</div>
                </Card.Header>
                <Card.Body>
                  <div className="d-sm-flex d-block">
                    <div className="me-3">
                      <div className="avatar radius-4 bg-primary-gradient">
                        <i className="fa fa-bullseye tx-white"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex-between">
                        <p className="mb-0 tx-16 font-weight-semibold numberfont">
                          $34,234.00
                          <span className="tx-muted font-weight-normal">
                            / $121K
                          </span>
                        </p>
                        <span className="badge badge-primary-transparent">
                          60% Reached
                        </span>
                      </div>
                      <ProgressBar now={60} />
                    </div>
                  </div>
                </Card.Body>
                <div className="card-footer">
                  <div className="d-flex flex-column">
                    <div className="mb-1 flex-between">
                      <h6 className="mb-0">Target Rate</h6>
                      <p className="mb-0 tx-success numberfont font-weight-semibold tx-15">
                        <i className="fe fe-arrow-up me-1"></i>+2.3%
                      </p>
                    </div>
                    <div className="flex-between">
                      <span className="badge badge-light-transparent">
                        From Last Month
                      </span>
                      <a  className="tx-inverse tx-12">
                        show analytics
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xl={12}>
              <Card>
                <Card.Header>
                  <div className="card-title">Applicants Report</div>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <div className="col-xl-4 col-sm-4">
                      <div className="d-flex flex-wrap mb-sm-0 mb-2">
                        <span className="avatar rounded-circle bg-primary-transparent">
                          <i className="fe fe-box tx-primary"></i>
                        </span>
                        <div className="mg-s-10">
                          <p className="mb-1 font-weight-semibold">Total</p>
                          <span className="tx-muted numberfont">746</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-4">
                      <div className="d-flex flex-wrap mb-sm-0 mb-2">
                        <span className="avatar rounded-circle bg-warning-transparent">
                          <i className="fe fe-user-check tx-warning"></i>
                        </span>
                        <div className="mg-s-10">
                          <p className="mb-1 font-weight-semibold">Selected</p>
                          <span className="tx-muted numberfont">746</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-4">
                      <div className="d-flex flex-wrap mb-sm-0 mb-2">
                        <span className="avatar rounded-circle bg-orange-transparent">
                          <i className="fe fe-user-x tx-orange"></i>
                        </span>
                        <div className="mg-s-10">
                          <p className="mb-1 font-weight-semibold">Rejected</p>
                          <span className="tx-muted numberfont">746</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card>
                <Card.Header>
                  <div className="card-title flex-between">
                    Today's Events
                    <a  className="tx-inverse font-weight-normal tx-12">
                      View All
                    </a>
                  </div>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled mb-0">
                    <li className="list-item">
                      <div className="d-sm-flex">
                        <span className="avatar">
                          <img
                            src={Allimages("User14")}
                            alt="img"
                            className="radius-4"
                          />
                        </span>
                        <Dropdown className="mg-sm-s-10 mt-2 mt-sm-0 flex-1">
                          <Dropdown.Toggle
                            className="tx-inverse float-end border-0 toggle-before-none pe-0 pt-0"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item className="mb-0" >
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item className="mb-0" >
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item className="mb-0" >
                              Something else here
                            </Dropdown.Item>
                          </Dropdown.Menu>
                          <a
                            href="calendar.html"
                            className="tx-primary tx-12 mb-0"
                          >
                            Birthday
                          </a>
                          <div className="d-sm-flex justify-content-between align-items-end clear-end">
                            <div className="mb-sm-0 mb-1">
                              <p className="mb-0 tx-14 font-weight-semibold">
                                Robert Partick Jane
                              </p>
                              <span className="tx-muted tx-12">
                                Team Member
                              </span>
                            </div>
                            <div className="btn-list">
                              <a
                                
                                className="btn btn-outline-primary btn-sm"
                              >
                                <i className="fe fe-clock tx-13 me-1 d-inline-block"></i>
                                Wish Later
                              </a>
                              <a  className="btn btn-primary btn-sm">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="me-1"
                                  width="13"
                                  height="13"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 12 20 22 4 22 4 12"></polyline>
                                  <rect
                                    x="2"
                                    y="7"
                                    width="20"
                                    height="5"
                                  ></rect>
                                  <line x1="12" y1="22" x2="12" y2="7"></line>
                                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                                </svg>
                                Wish Now
                              </a>
                            </div>
                          </div>
                        </Dropdown>
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="d-sm-flex">
                        <span className="avatar">
                          <img
                            src={Allimages("User8")}
                            alt="img"
                            className="radius-4"
                          />
                        </span>
                        <Dropdown className="mg-sm-s-10 mt-2 mt-sm-0 flex-1">
                          <Dropdown.Toggle
                            className="tx-inverse float-end border-0 toggle-before-none pe-0 pt-0"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item className="mb-0" >
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item className="mb-0" >
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item className="mb-0" >
                              Something else here
                            </Dropdown.Item>
                          </Dropdown.Menu>
                          <a
                            href="calendar.html"
                            className="tx-primary tx-12 mb-0"
                          >
                            Birthday
                          </a>
                          <div className="d-sm-flex justify-content-between align-items-end clear-end">
                            <div className="mb-sm-0 mb-1">
                              <p className="mb-0 tx-14 font-weight-semibold">
                                Jessica Shah
                              </p>
                              <span className="tx-muted tx-12">
                                Team Leader
                              </span>
                            </div>
                            <div className="btn-list">
                              <a
                                
                                className="btn btn-outline-primary btn-sm"
                              >
                                <i className="fe fe-clock tx-13 me-1 d-inline-block"></i>
                                Wish Later
                              </a>
                              <a  className="btn btn-primary btn-sm">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="me-1"
                                  width="13"
                                  height="13"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 12 20 22 4 22 4 12"></polyline>
                                  <rect
                                    x="2"
                                    y="7"
                                    width="20"
                                    height="5"
                                  ></rect>
                                  <line x1="12" y1="22" x2="12" y2="7"></line>
                                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                                </svg>
                                Wish Now
                              </a>
                            </div>
                          </div>
                        </Dropdown>
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="d-sm-flex">
                        <span className="avatar">
                          <img
                            src={Allimages("User6")}
                            alt="img"
                            className="radius-4"
                          />
                        </span>
                        <Dropdown className="mg-sm-s-10 mt-2 mt-sm-0 flex-1">
                          <Dropdown.Toggle
                            className="tx-inverse float-end border-0 toggle-before-none pe-0 pt-0"
                            variant="default"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item className="mb-0" href="#;">
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item className="mb-0" href="#;">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item className="mb-0" href="#;">
                              Something else here
                            </Dropdown.Item>
                          </Dropdown.Menu>
                          <a
                            href="calendar.html"
                            className="tx-primary tx-12 mb-0"
                          >
                            Birthday
                          </a>
                          <div className="d-sm-flex justify-content-between align-items-end clear-end">
                            <div className="mb-sm-0 mb-1">
                              <p className="mb-0 tx-14 font-weight-semibold">
                                Saji Max
                              </p>
                              <span className="tx-muted tx-12">
                                Team Member
                              </span>
                            </div>
                            <div className="btn-list">
                              <a
                                href="#;"
                                className="btn btn-outline-primary btn-sm"
                              >
                                <i className="fe fe-clock tx-13 me-1 d-inline-block"></i>
                                Wish Later
                              </a>
                              <a href="#;" className="btn btn-primary btn-sm">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="me-1"
                                  width="13"
                                  height="13"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 12 20 22 4 22 4 12"></polyline>
                                  <rect
                                    x="2"
                                    y="7"
                                    width="20"
                                    height="5"
                                  ></rect>
                                  <line x1="12" y1="22" x2="12" y2="7"></line>
                                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                                </svg>
                                Wish Now
                              </a>
                            </div>
                          </div>
                        </Dropdown>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card>
                <div className="card-header flex-between">
                  <div className="card-title">Major Requirements</div>
                  <a href="#;" className="btn btn-sm btn-primary-light">
                    Post Now
                  </a>
                </div>
                <Card.Body>
                  <Row>
                    <div className="col-xl-4 col-sm-4">
                      <div className="d-flex flex-wrap mb-sm-0 mb-2">
                        <span className="avatar radius-4 bg-primary-transparent">
                          <i className="fe fe-code tx-primary"></i>
                        </span>
                        <div className="mg-s-10">
                          <p className="mb-1 font-weight-semibold">Designer</p>
                          <span className="tx-muted tx-12">12 Vacancies</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-4">
                      <div className="d-flex flex-wrap mb-sm-0 mb-2">
                        <span className="avatar radius-4 bg-warning-transparent">
                          <i className="fe fe-terminal tx-warning"></i>
                        </span>
                        <div className="mg-s-10">
                          <p className="mb-1 font-weight-semibold">Developer</p>
                          <span className="tx-muted tx-12">50 Vacancies</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-4">
                      <div className="d-flex flex-wrap mb-sm-0 mb-2">
                        <span className="avatar radius-4 bg-orange-transparent">
                          <i className="fe fe-user tx-orange"></i>
                        </span>
                        <div className="mg-s-10">
                          <p className="mb-1 font-weight-semibold">Team Lead</p>
                          <span className="tx-muted tx-12">2 Vacancies</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card>
                <Card.Header>
                  <div className="card-title">Employees Category</div>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex mb-3">
                    <div className="me-2">
                      <div className="avatar bg-primary-transparent rounded-circle">
                        <i className="icon ion-md-man tx-primary tx-26"></i>
                      </div>
                    </div>
                    <div className="flex-1">
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
                  </div>
                  <div className="d-flex">
                    <div className="me-2">
                      <div className="avatar bg-warning-transparent rounded-circle">
                        <i className="icon ion-md-woman tx-warning tx-26"></i>
                      </div>
                    </div>
                    <div className="flex-1">
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
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Payroll Report</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <>
                  <div className="d-flex">
                    <select
                      className=" mb-4 selectpage border me-1"
                      value={pageSize}
                      onChange={(e) => setPageSize(Number(e.target.value))}
                    >
                      {[10, 25, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                          Show {pageSize}
                        </option>
                      ))}
                    </select>
                    <GlobalFilter
                      filter={globalFilter}
                      setFilter={setGlobalFilter}
                    />
                  </div>
                  <table
                    {...getTableProps()}
                    className="table table-bordered text-nowrap mb-0"
                  >
                    <thead>
                      {headerGroups.map((headerGroup: any) => (
                        <tr
                          {...headerGroup.getHeaderGroupProps()}
                          key={Math.random()}
                        >
                          {headerGroup.headers.map((column: any) => (
                            <th
                              {...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )}
                              className={column.className}
                              key={Math.random()}
                            >
                              <span className="tabletitle">
                                {column.render("Header")}
                              </span>
                              <span>
                                {column.isSorted ? (
                                  column.isSortedDesc ? (
                                    <i className="fa fa-angle-down mx-1"></i>
                                  ) : (
                                    <i className="fa fa-angle-up mx-1"></i>
                                  )
                                ) : (
                                  ""
                                )}
                              </span>
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                      {page.map((row: any) => {
                        prepareRow(row);
                        return (
                          <tr
                            className="text-center"
                            {...row.getRowProps()}
                            key={Math.random()}
                          >
                            {row.cells.map((cell: any) => {
                              return (
                                <td
                                  {...cell.getCellProps()}
                                  key={Math.random()}
                                >
                                  {cell.render("Cell")}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="d-block d-sm-flex mt-4 align-items-center">
                    <span className="">
                      Page
                      <strong>
                        {pageIndex + 1} of {pageOptions.length}
                      </strong>
                    </span>
                    <span className="ms-sm-auto ">
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                      >
                        {" Previous "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-1"
                        onClick={() => {
                          previousPage();
                        }}
                        disabled={!canPreviousPage}
                      >
                        {" << "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-1"
                        onClick={() => {
                          previousPage();
                        }}
                        disabled={!canPreviousPage}
                      >
                        {" < "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-1"
                        onClick={() => {
                          nextPage();
                        }}
                        disabled={!canNextPage}
                      >
                        {" > "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-1"
                        onClick={() => {
                          nextPage();
                        }}
                        disabled={!canNextPage}
                      >
                        {" >> "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                      >
                        {" Next "}
                      </Button>
                    </span>
                  </div>
                </>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Hrm;
