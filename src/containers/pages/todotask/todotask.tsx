import { Fragment, useState } from "react";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Col, Dropdown, InputGroup, ProgressBar, Tab, Tabs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as chartdata from './data/chartdata'
import { Bar } from "react-chartjs-2";
import DatePicker from "react-datepicker";


function Todotask() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Fragment>
      <Pageheader titles={"TODOTASK"} active={"Todotask"} Subtite={"Pages"} />

      <div className="row">
        <div className="col-xl-12">
          <div className="">
            <div className=" todo-task-tabs">
              <Tabs
                defaultActiveKey="Tab 01"
                className=" panel-tabs bd-b-0 mb-3x"
              >
                <Tab eventKey="Tab 01" title="Overview">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="card">
                            <div className="card-header">
                              <div className="card-title">Tasks Progress</div>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <Col xl={6} lg={12} md={12}>
                                  <div className="mb-2">
                                    <span>65% completed</span>
                                    <span className="tx-muted float-end tx-11">
                                      463 / 773
                                    </span>
                                  </div>
                                  <ProgressBar now={60} />
                                </Col>
                                <Col xl={3} lg={6} md={6} sm={12}>
                                  <div className="d-flex flex-wrap mg-xl-t-0-f mt-2">
                                    <span className="avatar rounded-circle bg-primary-transparent">
                                      <i className="fe fe-briefcase tx-primary"></i>
                                    </span>
                                    <div className="mg-s-10">
                                      <p className="mb-1 font-weight-semibold">
                                        Total Projects
                                      </p>
                                      <span className="tx-muted">746</span>
                                    </div>
                                  </div>
                                </Col>
                                <Col xl={3} lg={6} md={6} sm={12}>
                                  <div className="d-flex flex-wrap mg-xl-t-0-f mt-2">
                                    <span className="avatar rounded-circle bg-secondary-transparent">
                                      <i className="fe fe-users tx-secondary"></i>
                                    </span>
                                    <div className="mg-s-10">
                                      <p className="mb-1 font-weight-semibold">
                                        Total Clients
                                      </p>
                                      <span className="tx-muted">138</span>
                                    </div>
                                  </div>
                                </Col>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3">
                          <div className="card">
                            <div className="card-header">
                              <div className="card-title d-flex justify-content-between">
                                Designer Team
                                <Dropdown>
                                  <Dropdown.Toggle
                                    className="tx-inverse toggle-before-none p-0 border-0"
                                    variant="default"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="fe fe-more-vertical align-middle"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className="dropdown-menu tx-13">
                                    <Dropdown.Item
                                      className="dropdown-item"
                                      
                                    >
                                      Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      className="dropdown-item"
                                      
                                    >
                                      Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      className="dropdown-item"
                                      
                                    >
                                      Something else here
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="d-sm-flex align-items-center flex-wrap">
                                <div className="avatar-list-stacked">
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User2")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User6")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User8")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User12")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm bg-primary rounded-circle">
                                    +18
                                  </div>
                                </div>
                                <div className="ms-sm-auto mg-sm-t-0-f mt-2">
                                  <span>Total : 25</span>
                                  <span className="ms-2">Active : 24</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3">
                          <div className="card">
                            <div className="card-header">
                              <div className="card-title d-flex justify-content-between">
                                Developer Team
                                <Dropdown>
                                  <Dropdown.Toggle
                                    className="tx-inverse toggle-before-none p-0 border-0"
                                    variant="default"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="fe fe-more-vertical align-middle"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className="dropdown-menu tx-13">
                                    <Dropdown.Item
                                      className="dropdown-item"
                                      
                                    >
                                      Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      className="dropdown-item"
                                      
                                    >
                                      Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      className="dropdown-item"
                                      
                                    >
                                      Something else here
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="d-sm-flex align-items-center flex-wrap">
                                <div className="avatar-list-stacked">
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User2")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User6")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User8")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User12")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm bg-primary rounded-circle">
                                    +5
                                  </div>
                                </div>
                                <div className="ms-sm-auto mg-sm-t-0-f mt-2">
                                  <span>Total : 15</span>
                                  <span className="ms-2">Active : 9</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-xl-4 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <div className="mb-3 d-flex">
                                <div className="flex-1">
                                  <span className="tx-muted me-3 d-inline-block">
                                    <i className="fe fe-tag me-1 tx-12 d-inline-block"></i>
                                    Development
                                  </span>
                                  <span className="tx-muted me-3 d-inline-block">
                                    <i className="fe fe-calendar me-1 tx-12 d-inline-block"></i>
                                    20-02-2022
                                  </span>
                                  <span className="badge  badge-teal rounded-pill me-3">
                                    High Priority
                                  </span>
                                </div>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    className="tx-inverse ms-3 toggle-before-none p-0 border-0"
                                    variant="default"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="fe fe-more-vertical align-middle"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className="dropdown-menu">
                                    <Dropdown.Item
                                      
                                      className="dropdown-item"
                                    >
                                      Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      
                                      className="dropdown-item"
                                    >
                                      Another Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      
                                      className="dropdown-item"
                                    >
                                      Something else here
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <div className="mb-4">
                                <h5>Server side validation</h5>
                                <p className="tx-muted">
                                  Justo kasd duo sanctus et elitr et, sed diam
                                  clita lorem sed eirmod, clita labore tempor et
                                  sanctus et ipsum stet, eos.
                                </p>
                                <div className="mb-2">
                                  <span>20% Completed</span>
                                  <span className="tx-muted tx-11 float-end">
                                    25 / 110
                                  </span>
                                </div>
                                <div className="progress">
                              </div>
                              </div>
                              <div className="d-flex">
                                <div className="avatar-list-stacked">
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User2")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User6")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User12")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm bg-primary rounded-circle">
                                    +1
                                  </div>
                                </div>
                                <div className="ms-auto">
                                  <span className="badge badge-sm badge-danger-transparent">
                                    <span className="d-sm-inline d-none">
                                      Due date:
                                    </span>
                                    08-03-2022
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <div className="d-flex align-items-center">
                                <span className="badge  badge-primary-transparent rounded-pill">
                                  In progress
                                </span>
                                <div className="ms-auto">
                                  <a  className="tx-muted">
                                    <i className="fe fe-message-circle mx-1 tx-13"></i>
                                    3
                                    <span className="d-sm-inline d-none">
                                      comments
                                    </span>
                                  </a>
                                  <a  className="tx-muted ms-3 d-inline-flex">
                                    <i className="fe fe-paperclip mx-1 tx-13"></i>
                                    2
                                    <span className="d-sm-inline d-none">
                                      files
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-body">
                              <div className="mb-3 d-flex">
                                <div className="flex-1">
                                  <span className="tx-muted me-3 d-inline-block">
                                    <i className="fe fe-tag me-1 tx-12 d-inline-block"></i>
                                    Development
                                  </span>
                                  <span className="tx-muted me-3 d-inline-block">
                                    <i className="fe fe-calendar me-1 tx-12 d-inline-block"></i>
                                    20-02-2022
                                  </span>
                                  <span className="badge  badge-teal rounded-pill me-3">
                                    High Priority
                                  </span>
                                </div>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    className="tx-inverse ms-3 toggle-before-none p-0 border-0"
                                    variant="default"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="fe fe-more-vertical align-middle"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className="dropdown-menu">
                                    <Dropdown.Item
                                      
                                      className="dropdown-item"
                                    >
                                      Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      
                                      className="dropdown-item"
                                    >
                                      Another Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      
                                      className="dropdown-item"
                                    >
                                      Something else here
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <div className="mb-4">
                                <h5>Server side validation</h5>
                                <p className="tx-muted">
                                  Justo kasd duo sanctus et elitr et, sed diam
                                  clita lorem sed eirmod, clita labore tempor et
                                  sanctus et ipsum stet, eos.
                                </p>
                                <div className="mb-2">
                                  <span className="tx-green">
                                    100% Completed
                                  </span>
                                  <span className="tx-muted tx-11 float-end">
                                    120 / 120
                                  </span>
                                </div>
                                <div className="progress">
                                  {/* <div className="progress-bar bg-green wd-100p ht-5" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">

                                </div> */}
                                </div>
                              </div>
                              <div className="d-flex">
                                <div className="avatar-list-stacked">
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User2")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User6")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User12")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm bg-primary rounded-circle">
                                    +1
                                  </div>
                                </div>
                                <div className="ms-auto">
                                  <span className="badge badge-sm badge-danger-transparent">
                                    <span className="d-sm-inline d-none">
                                      Due date:
                                    </span>
                                    08-03-2022
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <div className="d-flex align-items-center">
                                <span className="badge  badge-green-transparent rounded-pill">
                                  Completed
                                </span>
                                <div className="ms-auto">
                                  <a  className="tx-muted">
                                    <i className="fe fe-message-circle mx-1 tx-13"></i>
                                    3
                                    <span className="d-sm-inline d-none">
                                      comments
                                    </span>
                                  </a>
                                  <a  className="tx-muted ms-3 d-inline-flex">
                                    <i className="fe fe-paperclip mx-1 tx-13"></i>
                                    2
                                    <span className="d-sm-inline d-none">
                                      files
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-body">
                              <div className="mb-3 d-flex">
                                <div className="flex-1">
                                  <span className="tx-muted me-3 d-inline-block">
                                    <i className="fe fe-tag me-1 tx-12 d-inline-block"></i>
                                    UI/UX
                                  </span>
                                  <span className="tx-muted me-3 d-inline-block">
                                    <i className="fe fe-calendar me-1 tx-12 d-inline-block"></i>
                                    12-02-2022
                                  </span>
                                  <span className="badge  badge-orange rounded-pill me-3">
                                    New
                                  </span>
                                  <span className="badge  badge-purple rounded-pill me-3">
                                    Medium Priority
                                  </span>
                                </div>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    className="tx-inverse ms-3 toggle-before-none p-0 border-0"
                                    variant="default"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="fe fe-more-vertical align-middle"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className="dropdown-menu">
                                    <Dropdown.Item
                                      
                                      className="dropdown-item"
                                    >
                                      Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      
                                      className="dropdown-item"
                                    >
                                      Another Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      
                                      className="dropdown-item"
                                    >
                                      Something else here
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <div className="mb-4">
                                <h5>Designing Landing Page</h5>
                                <p className="tx-muted">
                                  Et erat kasd dolor takimata magna. Labore sed
                                  aliquyam dolor at gubergren no takimata, amet
                                  eos et sed est.
                                </p>
                                <div className="mb-2">
                                  <span className="tx-warning">
                                    This task hasn't started yet
                                  </span>
                                  <span className="tx-muted tx-11 float-end">
                                    0 / 235
                                  </span>
                                </div>
                                {/* <div className="progress">
                              </div> */}
                              </div>
                              <div className="d-flex">
                                <div className="avatar-list-stacked">
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User2")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User6")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      className="rounded-circle"
                                      src={Allimages("User12")}
                                    />
                                  </div>
                                  <div className="avatar avatar-sm bg-primary rounded-circle">
                                    +3
                                  </div>
                                </div>
                                <div className="ms-auto">
                                  <span className="badge badge-sm badge-danger-transparent">
                                    <span className="d-sm-inline d-none">
                                      Due date:
                                    </span>
                                    28-04-2022
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <div className="d-flex align-items-center">
                                <span className="badge  badge-light-transparent rounded-pill">
                                  Pending
                                </span>
                                <div className="ms-auto">
                                  <a  className="tx-muted">
                                    <i className="fe fe-message-circle mx-1 tx-13"></i>
                                    3
                                    <span className="d-sm-inline d-none">
                                      comments
                                    </span>
                                  </a>
                                  <a  className="tx-muted ms-3 d-inline-flex">
                                    <i className="fe fe-paperclip mx-1 tx-13"></i>
                                    2
                                    <span className="d-sm-inline d-none">
                                      files
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                          <div className="card">
                            <div className="card-header">
                              <div className="card-title mb-0">Other Tasks</div>
                            </div>
                            <div className="card-body">
                              <ul className="list-unstyled mb-0">
                                <li>
                                  <div className="d-flex flex-wrap">
                                    <div className="align-self-start">
                                      <label className="ckbox mb-0 mg-t-3 me-2">
                                        <input type="checkbox" defaultChecked />
                                        <span></span>
                                      </label>
                                    </div>
                                    <div className="flex-1 d-flex">
                                      <div className="flex-1">
                                        <div className="mb-2 d-sm-flex flex-wrap">
                                          <div className="flex-1">
                                            <p className="tx-14 font-weight-semibold mb-0">
                                              <a >
                                                Designing Landing Page
                                              </a>
                                            </p>
                                            <p className="tx-12 mb-0 tx-muted">
                                              Sit diam nonumy et amet ipsum.
                                            </p>
                                          </div>
                                          <div className="align-self-start">
                                            <span className="badge badge-purple badge-xs rounded-pill">
                                              Medium Priority
                                            </span>
                                          </div>
                                        </div>
                                        <div className="d-flex align-items-start flex-wrap">
                                          <p className="mb-0 tx-muted tx-12">
                                            <i className="fe fe-tag me-1 tx-11"></i>
                                            UI/UX
                                          </p>
                                          <p className="mb-0 ms-2 badge badge-xs badge-primary-transparent">
                                            In progress
                                          </p>
                                          <p className="mb-0 ms-2 badge badge-xs badge-danger-transparent">
                                            22-05-22
                                          </p>
                                          <p className="mb-0 ms-2">
                                            <a
                                              
                                              className="tx-inverse tx-12"
                                            >
                                              <i className="fe fe-message-circle me-1 tx-11 d-inline-flex"></i>
                                              3
                                            </a>
                                          </p>
                                          <p className="mb-0 ms-2">
                                            <a
                                              
                                              className="tx-inverse tx-12"
                                            >
                                              <i className="fe fe-paperclip me-1 tx-11 d-inline-flex"></i>
                                              2
                                            </a>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="align-self-start ms-3">
                                        <Dropdown>
                                          <Dropdown.Toggle
                                            className="tx-inverse align-self-start toggle-before-none p-0 border-0"
                                            variant="default"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="fe fe-more-vertical align-middle"></i>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className="dropdown-menu">
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Action
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Another action
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Something else here
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="d-flex flex-wrap">
                                    <div className="align-self-start">
                                      <label className="ckbox mb-0 mg-t-3 me-2">
                                        <input type="checkbox" />
                                        <span></span>
                                      </label>
                                    </div>
                                    <div className="flex-1 d-flex">
                                      <div className="flex-1">
                                        <div className="mb-2 d-sm-flex flex-wrap">
                                          <div className="flex-1">
                                            <p className="tx-14 font-weight-semibold mb-0">
                                              <a >
                                                Designing Landing Page
                                              </a>
                                            </p>
                                            <p className="tx-12 mb-0 tx-muted">
                                              Sit diam nonumy et amet ipsum.
                                            </p>
                                          </div>
                                          <div className="align-self-start">
                                            <span className="badge badge-teal badge-xs rounded-pill">
                                              High Priority
                                            </span>
                                          </div>
                                        </div>
                                        <div className="d-flex align-items-start flex-wrap">
                                          <p className="mb-0 tx-muted tx-12">
                                            <i className="fe fe-tag me-1 tx-11"></i>
                                            UI/UX
                                          </p>
                                          <p className="mb-0 ms-2 badge badge-xs badge-green-transparent">
                                            Completed
                                          </p>
                                          <p className="mb-0 ms-2 badge badge-xs badge-danger-transparent">
                                            09-03-22
                                          </p>
                                          <p className="mb-0 ms-2">
                                            <a
                                              
                                              className="tx-inverse tx-12"
                                            >
                                              <i className="fe fe-message-circle me-1 tx-11 d-inline-flex"></i>
                                              38
                                            </a>
                                          </p>
                                          <p className="mb-0 ms-2">
                                            <a
                                              
                                              className="tx-inverse tx-12"
                                            >
                                              <i className="fe fe-paperclip me-1 tx-11 d-inline-flex"></i>
                                              1
                                            </a>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="align-self-start ms-3">
                                        <Dropdown>
                                          <Dropdown.Toggle
                                            className="tx-inverse align-self-start   toggle-before-none p-0 border-0"
                                            variant="default"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="fe fe-more-vertical align-middle"></i>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className="dropdown-menu">
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Action
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Another action
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Something else here
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="d-flex flex-wrap">
                                    <div className="align-self-start">
                                      <label className="ckbox mb-0 mg-t-3 me-2">
                                        <input type="checkbox" defaultChecked />
                                        <span></span>
                                      </label>
                                    </div>
                                    <div className="flex-1 d-flex">
                                      <div className="flex-1">
                                        <div className="mb-2 d-sm-flex flex-wrap">
                                          <div className="flex-1">
                                            <p className="tx-14 font-weight-semibold mb-0">
                                              <a >
                                                Designing Landing Page
                                              </a>
                                            </p>
                                            <p className="tx-12 mb-0 tx-muted">
                                              Sit diam nonumy et amet ipsum.
                                            </p>
                                          </div>
                                          <div className="align-self-start">
                                            <span className="badge badge-purple badge-xs rounded-pill">
                                              Medium Priority
                                            </span>
                                          </div>
                                        </div>
                                        <div className="d-flex align-items-start flex-wrap">
                                          <p className="mb-0 tx-muted tx-12">
                                            <i className="fe fe-tag me-1 tx-11"></i>
                                            UI/UX
                                          </p>
                                          <p className="mb-0 ms-2 badge badge-xs badge-primary-transparent">
                                            In progress
                                          </p>
                                          <p className="mb-0 ms-2 badge badge-xs badge-danger-transparent">
                                            22-05-22
                                          </p>
                                          <p className="mb-0 ms-2">
                                            <a
                                              
                                              className="tx-inverse tx-12"
                                            >
                                              <i className="fe fe-message-circle me-1 tx-11 d-inline-flex"></i>
                                              8
                                            </a>
                                          </p>
                                          <p className="mb-0 ms-2">
                                            <a
                                              
                                              className="tx-inverse tx-12"
                                            >
                                              <i className="fe fe-paperclip me-1 tx-11 d-inline-flex"></i>
                                              13
                                            </a>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="align-self-start ms-3">
                                        <Dropdown>
                                          <Dropdown.Toggle
                                            className="tx-inverse align-self-start  toggle-before-none p-0 border-0"
                                            variant="default"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="fe fe-more-vertical align-middle"></i>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className="dropdown-menu">
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Action
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Another action
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Something else here
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="d-flex flex-wrap">
                                    <div className="align-self-start">
                                      <label className="ckbox mb-0 mg-t-3 me-2">
                                        <input type="checkbox" defaultChecked />
                                        <span></span>
                                      </label>
                                    </div>
                                    <div className="flex-1 d-flex">
                                      <div className="flex-1">
                                        <div className="mb-2 d-sm-flex flex-wrap">
                                          <div className="flex-1">
                                            <p className="tx-14 font-weight-semibold mb-0">
                                              <a >
                                                Designing Landing Page
                                              </a>
                                            </p>
                                            <p className="tx-12 mb-0 tx-muted">
                                              Sit diam nonumy et amet ipsum.
                                            </p>
                                          </div>
                                          <div className="align-self-start">
                                            <span className="badge badge-purple badge-xs rounded-pill">
                                              Medium Priority
                                            </span>
                                          </div>
                                        </div>
                                        <div className="d-flex align-items-start flex-wrap">
                                          <p className="mb-0 tx-muted tx-12">
                                            <i className="fe fe-tag me-1 tx-11"></i>
                                            UI/UX
                                          </p>
                                          <p className="mb-0 ms-2 badge badge-xs badge-primary-transparent">
                                            In progress
                                          </p>
                                          <p className="mb-0 ms-2 badge badge-xs badge-danger-transparent">
                                            28-05-22
                                          </p>
                                          <p className="mb-0 ms-2">
                                            <a
                                              
                                              className="tx-inverse tx-12"
                                            >
                                              <i className="fe fe-message-circle me-1 tx-11 d-inline-flex"></i>
                                              18
                                            </a>
                                          </p>
                                          <p className="mb-0 ms-2">
                                            <a
                                              
                                              className="tx-inverse tx-12"
                                            >
                                              <i className="fe fe-paperclip me-1 tx-11 d-inline-flex"></i>
                                              3
                                            </a>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="align-self-start ms-3">
                                        <Dropdown>
                                          <Dropdown.Toggle
                                            className="tx-inverse align-self-start  toggle-before-none p-0 border-0"
                                            variant="default"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="fe fe-more-vertical align-middle"></i>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className="dropdown-menu">
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Action
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Another action
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Something else here
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="d-flex flex-wrap">
                                    <div className="align-self-start">
                                      <label className="ckbox mb-0 mg-t-3 me-2">
                                        <input type="checkbox" />
                                        <span></span>
                                      </label>
                                    </div>
                                    <div className="flex-1 d-flex">
                                      <div className="flex-1">
                                        <div className="mb-2 d-sm-flex flex-wrap">
                                          <div className="flex-1">
                                            <p className="tx-14 font-weight-semibold mb-0">
                                              <a >
                                                Designing Landing Page
                                              </a>
                                            </p>
                                            <p className="tx-12 mb-0 tx-muted">
                                              Sit diam nonumy et amet ipsum.
                                            </p>
                                          </div>
                                          <div className="align-self-start">
                                            <span className="badge badge-purple badge-xs rounded-pill">
                                              Medium Priority
                                            </span>
                                          </div>
                                        </div>
                                        <div className="d-flex align-items-start flex-wrap">
                                          <p className="mb-0 tx-muted tx-12">
                                            <i className="fe fe-tag me-1 tx-11"></i>
                                            UI/UX
                                          </p>
                                          <p className="mb-0 ms-2 badge badge-xs badge-primary-transparent">
                                            In progress
                                          </p>
                                          <p className="mb-0 ms-2 badge badge-xs badge-danger-transparent">
                                            28-05-22
                                          </p>
                                          <p className="mb-0 ms-2">
                                            <a
                                              
                                              className="tx-inverse tx-12"
                                            >
                                              <i className="fe fe-message-circle me-1 tx-11 d-inline-flex"></i>
                                              18
                                            </a>
                                          </p>
                                          <p className="mb-0 ms-2">
                                            <a
                                              
                                              className="tx-inverse tx-12"
                                            >
                                              <i className="fe fe-paperclip me-1 tx-11 d-inline-flex"></i>
                                              3
                                            </a>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="align-self-start ms-3">
                                        <Dropdown>
                                          <Dropdown.Toggle
                                            className="tx-inverse align-self-start  toggle-before-none p-0 border-0"
                                            variant="default"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="fe fe-more-vertical align-middle"></i>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className="dropdown-menu">
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Action
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Another action
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              
                                              className="dropdown-item"
                                            >
                                              Something else here
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header">
                              <div className="card-title">Messages</div>
                            </div>
                            <div className="card-body">
                              <ul className="list-unstyled mb-0 message-list">
                                <li>
                                  <div className="d-flex pos-relative">
                                    <NavLink
                                      to={`${import.meta.env.BASE_URL
                                        }app/mail/chat/`}
                                      className="masked-link"
                                    ></NavLink>
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User12")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="ms-2 flex-1">
                                      <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">Dulcie Ssli</h6>
                                        <span className="ms-auto tx-11 tx-green">
                                          Now
                                        </span>
                                      </div>
                                      <p className="tx-muted tx-12">
                                        Et lorem at Kasd. Nonumy voluptua ea
                                        labore ut.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="d-flex pos-relative">
                                    <NavLink
                                      to={`${import.meta.env.BASE_URL
                                        }app/mail/chat/`}
                                      className="masked-link"
                                    ></NavLink>
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User13")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="ms-2 flex-1">
                                      <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">Ray Sin</h6>
                                        <span className="ms-auto tx-11 tx-muted">
                                          13:23
                                        </span>
                                      </div>
                                      <p className="tx-muted tx-12">
                                        Lorem dolor stet, invidunt erat stet sit
                                        dolores et et.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="d-flex pos-relative">
                                    <NavLink
                                      to={`${import.meta.env.BASE_URL
                                        }app/mail/chat/`}
                                      className="masked-link"
                                    ></NavLink>
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User14")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="ms-2 flex-1">
                                      <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">Fay Daway</h6>
                                        <span className="ms-auto tx-11 tx-muted">
                                          07-03-2022
                                        </span>
                                      </div>
                                      <p className="tx-muted tx-12">
                                        Vero kasd vero amet sed ipsum. Ipsum
                                        eos.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="d-flex pos-relative">
                                    <NavLink
                                      to={`${import.meta.env.BASE_URL
                                        }app/mail/chat/`}
                                      className="masked-link"
                                    ></NavLink>
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User5")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="ms-2 flex-1">
                                      <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">Greg Arias</h6>
                                        <span className="ms-auto tx-11 tx-muted">
                                          07-01-2022
                                        </span>
                                      </div>
                                      <p className="tx-muted tx-12">
                                        Sadipscing dolor dolores takimata erat
                                        et.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="d-flex pos-relative">
                                    <NavLink
                                      to={`${import.meta.env.BASE_URL
                                        }app/mail/chat/`}
                                      className="masked-link"
                                    ></NavLink>
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User12")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="ms-2 flex-1">
                                      <div className="d-flex align-items-center mb-1">
                                        <h6 className="mb-0">Sidl Dls</h6>
                                        <span className="ms-auto tx-11 tx-muted">
                                          01-01-2022
                                        </span>
                                      </div>
                                      <p className="tx-muted tx-12">
                                        Et rebum ut eos stet. Erat nonumy et.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                          <div className="card">
                            <div className="card-header">
                              <div className="card-title">
                                Daily Tasks Report
                              </div>
                            </div>
                            <div className="card-body">

                              <Bar
                                options={chartdata.Areachart}
                                data={chartdata.areachart}
                                height={130}
                                className="barchart"

                              />

                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header">
                              <div className="card-title">Active Members</div>
                            </div>
                            <div className="card-body">
                              <div className="table-responsive">
                                <table
                                  className="table border-start-0 border-end-0"
                                  id="activeMembers"
                                >
                                  <thead>
                                    <tr>
                                      <th>Member</th>
                                      <th>Duration</th>
                                      <th>Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <img
                                            src={Allimages("User2")}
                                            className="avatar-sm rounded-circle"
                                          />
                                          <span className="ms-2">
                                            Ajitho Cin
                                          </span>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <span className="tx-muted">
                                          3 hours
                                        </span>
                                      </td>
                                      <td>
                                        <span className="badge badge-sm badge-green-transparent">
                                          Online
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <img
                                            src={Allimages("User4")}
                                            className="avatar-sm rounded-circle"
                                          />
                                          <span className="ms-2">
                                            Jack Aranda
                                          </span>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <span className="tx-muted">
                                          10 hours
                                        </span>
                                      </td>
                                      <td>
                                        <span className="badge badge-sm badge-green-transparent">
                                          Online
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <img
                                            src={Allimages("User6")}
                                            className="avatar-sm rounded-circle"
                                          />
                                          <span className="ms-2">
                                            Perry Scop
                                          </span>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <span className="tx-muted">
                                          5 hours
                                        </span>
                                      </td>
                                      <td>
                                        <span className="badge badge-sm badge-light-transparent">
                                          Offline
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <img
                                            src={Allimages("User8")}
                                            className="avatar-sm rounded-circle"
                                          />
                                          <span className="ms-2">
                                            Karen Onnabit
                                          </span>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <span className="tx-muted">
                                          5 hours
                                        </span>
                                      </td>
                                      <td>
                                        <span className="badge badge-sm badge-green-transparent">
                                          Online
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <img
                                            src={Allimages("User10")}
                                            className="avatar-sm rounded-circle"
                                          />
                                          <span className="ms-2">
                                            Rita Book
                                          </span>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <span className="tx-muted">
                                          20 hours
                                        </span>
                                      </td>
                                      <td>
                                        <span className="badge badge-sm badge-light-transparent">
                                          Offline
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <img
                                            src={Allimages("User8")}
                                            className="avatar-sm rounded-circle"
                                          />
                                          <span className="ms-2">
                                            Karen Onnabit
                                          </span>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <span className="tx-muted">
                                          5 hours
                                        </span>
                                      </td>
                                      <td>
                                        <span className="badge badge-sm badge-green-transparent">
                                          Online
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <img
                                            src={Allimages("User1")}
                                            className="avatar-sm rounded-circle"
                                          />
                                          <span className="ms-2">
                                            Karen Onnabit
                                          </span>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <span className="tx-muted">
                                          5 hours
                                        </span>
                                      </td>
                                      <td>
                                        <span className="badge badge-sm badge-green-transparent">
                                          Online
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <img
                                            src={Allimages("User8")}
                                            className="avatar-sm rounded-circle"
                                          />
                                          <span className="ms-2">
                                            Karen Onnabit
                                          </span>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <span className="tx-muted">
                                          5 hours
                                        </span>
                                      </td>
                                      <td>
                                        <span className="badge badge-sm badge-green-transparent">
                                          Online
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Tab 02" title="Tasks">
                  <div className="row">
                    <div className="col-xl-4">
                      <h5>New Tasks</h5>
                      <div className="card">
                        <div className="card-body">
                          <div className="mb-3 d-flex">
                            <div className="flex-1">
                              <span className="tx-muted me-3 d-inline-block">
                                <i className="fe fe-tag me-1 tx-12 d-inline-block"></i>
                                UI/UX
                              </span>
                              <span className="tx-muted me-3 d-inline-block">
                                <i className="fe fe-calendar me-1 tx-12 d-inline-block"></i>
                                12-02-2022
                              </span>
                              <span className="badge  badge-orange rounded-pill me-3">
                                New
                              </span>
                              <span className="badge  badge-purple rounded-pill me-3">
                                Medium Priority
                              </span>
                            </div>
                            <Dropdown>
                              <Dropdown.Toggle
                                className="tx-inverse ms-3  toggle-before-none p-0 border-0"
                                variant="default"
                                data-bs-toggle="dropdown"
                              >
                                <i className="fe fe-more-vertical align-middle"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu">
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Another Action
                                </Dropdown.Item>
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Something else here
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <div className="mb-4">
                            <h5>Designing Landing Page</h5>
                            <p className="tx-muted">
                              Et erat kasd dolor takimata magna. Labore sed
                              aliquyam dolor at gubergren no takimata, amet eos
                              et sed est.
                            </p>
                            <div className="mb-2">
                              <span className="tx-warning">
                                This task hasn't started yet
                              </span>
                              <span className="tx-muted tx-11 float-end">
                                0 / 235
                              </span>
                            </div>
                            {/* <div className="progress">
                          </div> */}
                          </div>
                          <div className="d-flex">
                            <div className="avatar-list-stacked">
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User2")}
                                />
                              </div>
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User6")}
                                />
                              </div>
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User12")}
                                />
                              </div>
                              <div className="avatar avatar-sm bg-primary rounded-circle">
                                +3
                              </div>
                            </div>
                            <div className="ms-auto">
                              <span className="badge badge-sm badge-danger-transparent">
                                <span className="d-sm-inline d-none">
                                  Due date:
                                </span>
                                28-04-2022
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="d-flex align-items-center">
                            <span className="badge  badge-light-transparent rounded-pill">
                              Pending
                            </span>
                            <div className="ms-auto">
                              <a  className="tx-muted">
                                <i className="fe fe-message-circle mx-1 tx-13"></i>
                                3
                                <span className="d-sm-inline d-none">
                                  comments
                                </span>
                              </a>
                              <a  className="tx-muted ms-3 d-inline-flex">
                                <i className="fe fe-paperclip mx-1 tx-13"></i>2
                                <span className="d-sm-inline d-none">
                                  files
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <div className="mb-3 d-flex">
                            <div className="flex-1">
                              <span className="tx-muted me-3 d-inline-block">
                                <i className="fe fe-tag me-1 tx-12 d-inline-block"></i>
                                UI/UX
                              </span>
                              <span className="tx-muted me-3 d-inline-block">
                                <i className="fe fe-calendar me-1 tx-12 d-inline-block"></i>
                                12-02-2022
                              </span>
                              <span className="badge  badge-orange rounded-pill me-3">
                                New
                              </span>
                              <span className="badge  badge-warning rounded-pill me-3">
                                Low Priority
                              </span>
                            </div>
                            <Dropdown>
                              <Dropdown.Toggle
                                className="tx-inverse ms-3  toggle-before-none p-0 border-0"
                                variant="default"
                                data-bs-toggle="dropdown"
                              >
                                <i className="fe fe-more-vertical align-middle"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu">
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Another Action
                                </Dropdown.Item>
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Something else here
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <div className="mb-4">
                            <h5>Designing Landing Page</h5>
                            <p className="tx-muted">
                              Et erat kasd dolor takimata magna. Labore sed
                              aliquyam dolor at gubergren no takimata, amet eos
                              et sed est.
                            </p>
                            <div className="mb-2">
                              <span className="tx-warning">
                                This task hasn't started yet
                              </span>
                              <span className="tx-muted tx-11 float-end">
                                0 / 235
                              </span>
                            </div>
                            <div className="progress"></div>
                          </div>
                          <div className="d-flex">
                            <div className="avatar-list-stacked">
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User2")}
                                />
                              </div>
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User6")}
                                />
                              </div>
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User12")}
                                />
                              </div>
                              <div className="avatar avatar-sm bg-primary rounded-circle">
                                +3
                              </div>
                            </div>
                            <div className="ms-auto">
                              <span className="badge badge-sm badge-danger-transparent">
                                <span className="d-sm-inline d-none">
                                  Due date:
                                </span>
                                28-04-2022
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="d-flex align-items-center">
                            <span className="badge  badge-light-transparent rounded-pill">
                              Pending
                            </span>
                            <div className="ms-auto">
                              <a  className="tx-muted">
                                <i className="fe fe-message-circle mx-1 tx-13"></i>
                                3
                                <span className="d-sm-inline d-none">
                                  comments
                                </span>
                              </a>
                              <a  className="tx-muted ms-3 d-inline-flex">
                                <i className="fe fe-paperclip mx-1 tx-13"></i>2
                                <span className="d-sm-inline d-none">
                                  files
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <h5>Priority Tasks</h5>
                      <div className="card">
                        <div className="card-body">
                          <div className="mb-3 d-flex">
                            <div className="flex-1">
                              <span className="tx-muted me-3 d-inline-block">
                                <i className="fe fe-tag me-1 tx-12 d-inline-block"></i>
                                Development
                              </span>
                              <span className="tx-muted me-3 d-inline-block">
                                <i className="fe fe-calendar me-1 tx-12 d-inline-block"></i>
                                20-02-2022
                              </span>
                              <span className="badge  badge-teal rounded-pill me-3">
                                High Priority
                              </span>
                            </div>
                            <Dropdown>
                              <Dropdown.Toggle
                                className="tx-inverse ms-3  toggle-before-none p-0 border-0"
                                variant="default"
                                data-bs-toggle="dropdown"
                              >
                                <i className="fe fe-more-vertical align-middle"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu">
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Another Action
                                </Dropdown.Item>
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Something else here
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <div className="mb-4">
                            <h5>Server side validation</h5>
                            <p className="tx-muted">
                              Justo kasd duo sanctus et elitr et, sed diam clita
                              lorem sed eirmod, clita labore tempor et sanctus
                              et ipsum stet, eos.
                            </p>
                            <div className="mb-2">
                              <span>20% Completed</span>
                              <span className="tx-muted tx-11 float-end">
                                25 / 110
                              </span>
                            </div>
                            <div className="progress"></div>
                          </div>
                          <div className="d-flex">
                            <div className="avatar-list-stacked">
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User2")}
                                />
                              </div>
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User6")}
                                />
                              </div>
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User12")}
                                />
                              </div>
                              <div className="avatar avatar-sm bg-primary rounded-circle">
                                +1
                              </div>
                            </div>
                            <div className="ms-auto">
                              <span className="badge badge-sm badge-danger-transparent">
                                <span className="d-sm-inline d-none">
                                  Due date:
                                </span>
                                08-03-2022
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="d-flex align-items-center">
                            <span className="badge  badge-primary-transparent rounded-pill">
                              In progress
                            </span>
                            <div className="ms-auto">
                              <a  className="tx-muted">
                                <i className="fe fe-message-circle mx-1 tx-13"></i>
                                3
                                <span className="d-sm-inline d-none">
                                  comments
                                </span>
                              </a>
                              <a  className="tx-muted ms-3 d-inline-flex">
                                <i className="fe fe-paperclip mx-1 tx-13"></i>2
                                <span className="d-sm-inline d-none">
                                  files
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <div className="mb-3 d-flex">
                            <div className="flex-1">
                              <span className="tx-muted me-3 d-inline-block">
                                <i className="fe fe-tag me-1 tx-12 d-inline-block"></i>
                                Development
                              </span>
                              <span className="tx-muted me-3 d-inline-block">
                                <i className="fe fe-calendar me-1 tx-12 d-inline-block"></i>
                                20-02-2022
                              </span>
                              <span className="badge  badge-teal rounded-pill me-3">
                                High Priority
                              </span>
                            </div>
                            <Dropdown>
                              <Dropdown.Toggle
                                className="tx-inverse ms-3  toggle-before-none p-0 border-0"
                                variant="default"
                                data-bs-toggle="dropdown"
                              >
                                <i className="fe fe-more-vertical align-middle"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu">
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Another Action
                                </Dropdown.Item>
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Something else here
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <div className="mb-4">
                            <h5>Server side validation</h5>
                            <p className="tx-muted">
                              Justo kasd duo sanctus et elitr et, sed diam clita
                              lorem sed eirmod, clita labore tempor et sanctus
                              et ipsum stet, eos.
                            </p>
                            <div className="mb-2">
                              <span>50% Completed</span>
                              <span className="tx-muted tx-11 float-end">
                                55 / 110
                              </span>
                            </div>
                            <div className="progress"></div>
                          </div>
                          <div className="d-flex">
                            <div className="avatar-list-stacked">
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User2")}
                                />
                              </div>
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User6")}
                                />
                              </div>
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User12")}
                                />
                              </div>
                              <div className="avatar avatar-sm bg-primary rounded-circle">
                                +1
                              </div>
                            </div>
                            <div className="ms-auto">
                              <span className="badge badge-sm badge-danger-transparent">
                                <span className="d-sm-inline d-none">
                                  Due date:
                                </span>
                                08-03-2022
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="d-flex align-items-center">
                            <span className="badge  badge-primary-transparent rounded-pill">
                              In progress
                            </span>
                            <div className="ms-auto">
                              <a  className="tx-muted">
                                <i className="fe fe-message-circle mx-1 tx-13"></i>
                                3
                                <span className="d-sm-inline d-none">
                                  comments
                                </span>
                              </a>
                              <a  className="tx-muted ms-3 d-inline-flex">
                                <i className="fe fe-paperclip mx-1 tx-13"></i>2
                                <span className="d-sm-inline d-none">
                                  files
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <h5>In Progress</h5>
                      <div className="card">
                        <div className="card-body">
                          <div className="mb-3 d-flex">
                            <div className="flex-1">
                              <span className="tx-muted me-3 d-inline-block">
                                <i className="fe fe-tag me-1 tx-12 d-inline-block"></i>
                                Development
                              </span>
                              <span className="tx-muted me-3 d-inline-block">
                                <i className="fe fe-calendar me-1 tx-12 d-inline-block"></i>
                                20-02-2022
                              </span>
                              <span className="badge  badge-warning rounded-pill me-3">
                                Low Priority
                              </span>
                            </div>
                            <Dropdown>
                              <Dropdown.Toggle
                                className="tx-inverse ms-3  toggle-before-none p-0 border-0"
                                variant="default"
                                data-bs-toggle="dropdown"
                              >
                                <i className="fe fe-more-vertical align-middle"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu">
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Another Action
                                </Dropdown.Item>
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Something else here
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <div className="mb-4">
                            <h5>Server side validation</h5>
                            <p className="tx-muted">
                              Justo kasd duo sanctus et elitr et, sed diam clita
                              lorem sed eirmod, clita labore tempor et sanctus
                              et ipsum stet, eos.
                            </p>
                            <div className="mb-2">
                              <span>50% Completed</span>
                              <span className="tx-muted tx-11 float-end">
                                55 / 110
                              </span>
                            </div>
                            {/* <div className="progress">
                            <div className="progress-bar bg-primary wd-50p ht-5" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div> */}
                          </div>
                          <div className="d-flex">
                            <div className="avatar-list-stacked">
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User2")}
                                />
                              </div>
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User6")}
                                />
                              </div>
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User12")}
                                />
                              </div>
                              <div className="avatar avatar-sm bg-primary rounded-circle">
                                +1
                              </div>
                            </div>
                            <div className="ms-auto">
                              <span className="badge badge-sm badge-danger-transparent">
                                <span className="d-sm-inline d-none">
                                  Due date:
                                </span>
                                08-03-2022
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="d-flex align-items-center">
                            <span className="badge  badge-primary-transparent rounded-pill">
                              In progress
                            </span>
                            <div className="ms-auto">
                              <a  className="tx-muted">
                                <i className="fe fe-message-circle mx-1 tx-13"></i>
                                3
                                <span className="d-sm-inline d-none">
                                  comments
                                </span>
                              </a>
                              <a  className="tx-muted ms-3 d-inline-flex">
                                <i className="fe fe-paperclip mx-1 tx-13"></i>2
                                <span className="d-sm-inline d-none">
                                  files
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <div className="mb-3 d-flex">
                            <div className="flex-1">
                              <span className="tx-muted me-3 d-inline-block">
                                <i className="fe fe-tag me-1 tx-12 d-inline-block"></i>
                                Development
                              </span>
                              <span className="tx-muted me-3 d-inline-block">
                                <i className="fe fe-calendar me-1 tx-12 d-inline-block"></i>
                                20-02-2022
                              </span>
                              <span className="badge  badge-purple rounded-pill me-3">
                                Medium Priority
                              </span>
                            </div>
                            <Dropdown>
                              <Dropdown.Toggle
                                className="tx-inverse ms-3  toggle-before-none p-0 border-0"
                                variant="default"
                                data-bs-toggle="dropdown"
                              >
                                <i className="fe fe-more-vertical align-middle"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu">
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Another Action
                                </Dropdown.Item>
                                <Dropdown.Item
                                  
                                  className="dropdown-item"
                                >
                                  Something else here
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <div className="mb-4">
                            <h5>Server side validation</h5>
                            <p className="tx-muted">
                              Justo kasd duo sanctus et elitr et, sed diam clita
                              lorem sed eirmod, clita labore tempor et sanctus
                              et ipsum stet, eos.
                            </p>
                            <div className="mb-2">
                              <span>30% Completed</span>
                              <span className="tx-muted tx-11 float-end">
                                35 / 110
                              </span>
                            </div>
                            {/* <div className="progress">
                            <div className="progress-bar bg-warning wd-30p ht-5" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div> */}
                          </div>
                          <div className="d-flex">
                            <div className="avatar-list-stacked">
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User2")}
                                />
                              </div>
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User6")}
                                />
                              </div>
                              <div className="avatar avatar-sm rounded-circle">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src={Allimages("User12")}
                                />
                              </div>
                              <div className="avatar avatar-sm bg-primary rounded-circle">
                                +1
                              </div>
                            </div>
                            <div className="ms-auto">
                              <span className="badge badge-sm badge-danger-transparent">
                                <span className="d-sm-inline d-none">
                                  Due date:
                                </span>
                                08-03-2022
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="d-flex align-items-center">
                            <span className="badge  badge-primary-transparent rounded-pill">
                              In progress
                            </span>
                            <div className="ms-auto">
                              <a  className="tx-muted">
                                <i className="fe fe-message-circle mx-1 tx-13"></i>
                                3
                                <span className="d-sm-inline d-none">
                                  comments
                                </span>
                              </a>
                              <a  className="tx-muted ms-3 d-inline-flex">
                                <i className="fe fe-paperclip mx-1 tx-13"></i>2
                                <span className="d-sm-inline d-none">
                                  files
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Tab 03" title="Mailstones">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                          <div className="form-group mb-4">
                            <label
                              htmlFor="fromDate"
                              className="form-label mt-0"
                            >
                              From
                            </label>
                            <div className="input-group">
                                <InputGroup className="input-group reactdate-pic">
                    <InputGroup.Text className="input-group-text">
                      <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                    </InputGroup.Text>

                    <DatePicker
                      className="form-control rounded-start-0 h-34px"
                      selected={startDate}
                      onChange={(date: any) => setStartDate(date)}
                    />
                  </InputGroup>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                          <div className="form-group mb-4">
                            <label htmlFor="toDate" className="form-label mt-0">
                              To
                            </label>
                            <div className="input-group">
                                <InputGroup className="input-group reactdate-pic">
                    <InputGroup.Text className="input-group-text">
                      <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                    </InputGroup.Text>

                    <DatePicker
                      className="form-control rounded-start-0 h-34px"
                      selected={startDate}
                      onChange={(date: any) => setStartDate(date)}
                    />
                  </InputGroup>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                          <a  className="btn btn-primary">
                            Apply
                          </a>
                        </div>
                        <Col
                          xl={6}
                          lg={12}
                          md={12}
                          className="col-xl-6 col-lg-12 col-md-12 col-sm-12 text-lg-end"
                        >
                          <div
                            className="btn-group mg-y-sm-0-f mg-y-10"
                            role="group"
                            aria-label="Basic radio toggle button group"
                          >
                            <input
                              type="radio"
                              className="btn-check"
                              name="milestoneLayout"
                              id="milestoneGrid"
                              defaultChecked
                            />
                            <label
                              className="btn btn-outline-primary mb-0"
                              htmlFor="milestoneGrid"
                            >
                              <i className="fe fe-grid"></i>
                            </label>

                            <input
                              type="radio"
                              className="btn-check"
                              name="milestoneLayout"
                              id="milestoneList1"
                            />
                            <label className="btn btn-outline-primary mb-0">
                              <i className="fe fe-list"></i>
                            </label>
                          </div>
                          <Dropdown drop="start"  key="start" className="btn-group ms-2 mg-y-sm-0-f mg-y-10">
                            <Dropdown.Toggle
                              type="button"
                              className="btn no-caret-before btn-outline-primary dropdown-toggle  toggle-before-none p-0 border-0"
                              variant="default"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fe fe-clock"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu">
                              <Dropdown.Item
                                className="dropdown-item active"
                                
                              >
                                Date
                              </Dropdown.Item>
                              <Dropdown.Item className="dropdown-item" >
                                Name
                              </Dropdown.Item>
                              <Dropdown.Item className="dropdown-item" >
                                Progress
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Col>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-body p-0">
                          <div className="d-flex">
                            <div className="p-4 bg-primary text-black tx-center d-flex rounded-start">
                              <div className="my-auto">
                                <span className="mb-1 op-7">Mar</span>
                                <p className="mb-0 tx-28">09</p>
                              </div>
                            </div>
                            <div className="p-4 flex-1">
                              <Dropdown>
                                <Dropdown.Toggle
                                  className="float-end tx-muted  toggle-before-none p-0 border-0"
                                  variant="default"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fe fe-more-vertical align-middle"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Another Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Something else here
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <div className="mb-2">
                                <h5 className="mb-1">Designing Applee Logo</h5>
                                <span className="tx-muted tx-12">
                                  <i className="fe fe-tag mx-1 tx-11"></i>UI/UX
                                </span>
                                dD
                              </div>
                              <div className="mb-1">
                                <span className="tx-muted font-weight-semibold">
                                  50% Completed
                                </span>
                              </div>
                              <ProgressBar now={50} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-body p-0">
                          <div className="d-flex">
                            <div className="p-4 bg-warning text-black tx-center d-flex rounded-start">
                              <div className="my-auto">
                                <span className="mb-1 op-7">Mar</span>
                                <p className="mb-0 tx-28">10</p>
                              </div>
                            </div>
                            <div className="p-4 flex-1">
                              <Dropdown>
                                <Dropdown.Toggle
                                  className="float-end tx-muted  toggle-before-none p-0 border-0"
                                  variant="default"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fe fe-more-vertical align-middle"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Another Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Something else here
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <div className="mb-2">
                                <h5 className="mb-1">Fixing Bug in Demo</h5>
                                <span className="tx-muted tx-12">
                                  <i className="fe fe-tag mx-1 tx-11"></i>
                                  Development
                                </span>
                                D
                              </div>
                              <div className="mb-1">
                                <span className="tx-muted font-weight-semibold">
                                  25% Completed
                                </span>
                              </div>
                              <ProgressBar variant="warning" now={25} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-body p-0">
                          <div className="d-flex">
                            <div className="p-4 bg-primary text-black tx-center d-flex rounded-start">
                              <div className="my-auto">
                                <span className="mb-1 op-7">Mar</span>
                                <p className="mb-0 tx-28">11</p>
                              </div>
                            </div>
                            <div className="p-4 flex-1">
                              <Dropdown>
                                <Dropdown.Toggle
                                  className="float-end tx-muted  toggle-before-none p-0 border-0"
                                  variant="default"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fe fe-more-vertical align-middle"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Another Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Something else here
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <div className="mb-2">
                                <h5 className="mb-1">Server Side Validation</h5>
                                <span className="tx-muted tx-12">
                                  <i className="fe fe-tag mx-1 tx-11"></i>
                                  Development
                                </span>
                                D
                              </div>
                              <div className="mb-1">
                                <span className="tx-muted font-weight-semibold">
                                  65% Completed
                                </span>
                              </div>
                              <ProgressBar now={65} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-body p-0">
                          <div className="d-flex">
                            <div className="p-4 bg-warning text-black tx-center d-flex rounded-start">
                              <div className="my-auto">
                                <span className="mb-1 op-7">Mar</span>
                                <p className="mb-0 tx-28">17</p>
                              </div>
                            </div>
                            <div className="p-4 flex-1">
                              <Dropdown>
                                <Dropdown.Toggle
                                  className="float-end tx-muted  toggle-before-none p-0 border-0"
                                  variant="default"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fe fe-more-vertical align-middle"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Another Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Something else here
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <div className="mb-2">
                                <h5 className="mb-1">Elitr Ipsum Vero Et</h5>
                                <span className="tx-muted tx-12">
                                  <i className="fe fe-tag mx-1 tx-11"></i>
                                  Est/Sit, Dolor
                                </span>
                                D
                              </div>
                              <div className="mb-1">
                                <span className="tx-muted font-weight-semibold">
                                  20% Completed
                                </span>
                              </div>
                              <ProgressBar variant="warning" now={20} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-body p-0">
                          <div className="d-flex">
                            <div className="p-4 bg-green tx-white tx-center d-flex rounded-start">
                              <div className="my-auto">
                                <span className="mb-1 op-7">Mar</span>
                                <p className="mb-0 tx-28">12</p>
                              </div>
                            </div>
                            <div className="p-4 flex-1">
                              <Dropdown>
                                <Dropdown.Toggle
                                  className="float-end tx-muted  toggle-before-none p-0 border-0"
                                  variant="default"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fe fe-more-vertical align-middle"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Another Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Something else here
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <div className="mb-2">
                                <h5 className="mb-1">Designing Wireframe</h5>
                                <span className="tx-muted tx-12">
                                  <i className="fe fe-tag mx-1 tx-11"></i>UI/UX
                                </span>
                                D
                              </div>
                              <div className="mb-1">
                                <span className="tx-muted font-weight-semibold">
                                  100% Completed
                                </span>
                              </div>
                              <ProgressBar variant="success" now={25} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-body p-0">
                          <div className="d-flex">
                            <div className="p-4 bg-primary text-black tx-center d-flex rounded-start">
                              <div className="my-auto">
                                <span className="mb-1 op-7">Mar</span>
                                <p className="mb-0 tx-28">14</p>
                              </div>
                            </div>
                            <div className="p-4 flex-1">
                              <Dropdown>
                                <Dropdown.Toggle
                                  className="float-end tx-muted  toggle-before-none p-0 border-0"
                                  variant="default"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fe fe-more-vertical align-middle"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Another Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Something else here
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <div className="mb-2">
                                <h5 className="mb-1">Accusam Diam Stet</h5>
                                <span className="tx-muted tx-12">
                                  <i className="fe fe-tag mx-1 tx-11"></i>Rebum
                                </span>
                                D
                              </div>
                              <div className="mb-1">
                                <span className="tx-muted font-weight-semibold">
                                  75% Completed
                                </span>
                              </div>
                              <ProgressBar now={25} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-body p-0">
                          <div className="d-flex">
                            <div className="p-4 bg-green tx-white tx-center d-flex rounded-start">
                              <div className="my-auto">
                                <span className="mb-1 op-7">Mar</span>
                                <p className="mb-0 tx-28">15</p>
                              </div>
                            </div>
                            <div className="p-4 flex-1">
                              <Dropdown>
                                <Dropdown.Toggle
                                  className="float-end tx-muted  toggle-before-none p-0 border-0"
                                  variant="default"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fe fe-more-vertical align-middle"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Another Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Something else here
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <div className="mb-2">
                                <h5 className="mb-1">
                                  Takimata Voluptua Lorem
                                </h5>
                                <span className="tx-muted tx-12">
                                  <i className="fe fe-tag mx-1 tx-11"></i>Diam
                                </span>
                                D
                              </div>
                              <div className="mb-1">
                                <span className="tx-muted font-weight-semibold">
                                  100% Completed
                                </span>
                              </div>
                              <ProgressBar variant="success" now={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-body p-0">
                          <div className="d-flex">
                            <div className="p-4 bg-primary text-black tx-center d-flex rounded-start">
                              <div className="my-auto">
                                <span className="mb-1 op-7">Mar</span>
                                <p className="mb-0 tx-28">16</p>
                              </div>
                            </div>
                            <div className="p-4 flex-1">
                              <Dropdown>
                                <Dropdown.Toggle
                                  className="float-end tx-muted    toggle-before-none p-0 border-0"
                                  variant="default"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fe fe-more-vertical align-middle"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Another Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Something else here
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <div className="mb-2">
                                <h5 className="mb-1">Et Ut Vero Sea</h5>
                                <span className="tx-muted tx-12">
                                  <i className="fe fe-tag mx-1 tx-11"></i>Sit
                                </span>
                                D
                              </div>
                              <div className="mb-1">
                                <span className="tx-muted font-weight-semibold">
                                  55% Completed
                                </span>
                              </div>
                              <ProgressBar now={55} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-body p-0">
                          <div className="d-flex">
                            <div className="p-4 bg-primary text-black tx-center d-flex rounded-start">
                              <div className="my-auto">
                                <span className="mb-1 op-7">Mar</span>
                                <p className="mb-0 tx-28">13</p>
                              </div>
                            </div>
                            <div className="p-4 flex-1">
                              <Dropdown>
                                <Dropdown.Toggle
                                  className="float-end tx-muted  toggle-before-none p-0 border-0"
                                  variant="default"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fe fe-more-vertical align-middle"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Another Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    
                                    className="dropdown-item"
                                  >
                                    Something else here
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <div className="mb-2">
                                <h5 className="mb-1">No Sit Accusam</h5>
                                <span className="tx-muted tx-12">
                                  <i className="fe fe-tag mx-1 tx-11"></i>
                                  Invidunt
                                </span>
                                D
                              </div>
                              <div className="mb-1">
                                <span className="tx-muted font-weight-semibold">
                                  60% Completed
                                </span>
                              </div>
                              <ProgressBar now={60} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Tab 04" title="Files">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table
                              className="table border-start-0 border-end-0 text-nowrap"
                              id="todoFiles"
                            >
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Files</th>
                                  <th>Task</th>
                                  <th>Modified</th>
                                  <th>Type</th>
                                  <th>Size</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a
                                      href="file-manager1.html"
                                      className="d-flex align-items-center"
                                    >
                                      <img
                                        src={Allimages("File4")}
                                        alt="img"
                                        className="wd-40 me-2"
                                      />
                                      <span>Sit Ea Aliquyaam</span>
                                    </a>
                                  </td>
                                  <td>
                                    <span className="tx-muted">108 files</span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">
                                      Designing Logo
                                    </span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">
                                      21-12-2021, 13:20
                                    </span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">Folder</span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">28 gb</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="file-manager1.html"
                                      className="d-flex align-items-center"
                                    >
                                      <img
                                        src={Allimages("File4")}
                                        alt="img"
                                        className="wd-40 me-2"
                                      />
                                      <span>Est Et Stet</span>
                                    </a>
                                  </td>
                                  <td>
                                    <span className="tx-muted">82 files</span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">
                                      Server Side Validation
                                    </span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">
                                      29-12-2021, 15:20
                                    </span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">Folder</span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">281 gb</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="file-manager1.html"
                                      className="d-flex align-items-center"
                                    >
                                      <img
                                        src={Allimages("File4")}
                                        alt="img"
                                        className="wd-40 me-2"
                                      />
                                      <span>Et Nonumy</span>
                                    </a>
                                  </td>
                                  <td>
                                    <span className="tx-muted">7 files</span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">
                                      Designing Wireframe
                                    </span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">
                                      30-12-2021, 01:20
                                    </span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">Folder</span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">6.5 gb</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="file-manager1.html"
                                      className="d-flex align-items-center"
                                    >
                                      <img
                                        src={Allimages("File7")}
                                        alt="img"
                                        className="wd-40 me-2"
                                      />
                                      <span>Lorem</span>
                                    </a>
                                  </td>
                                  <td>
                                    <span className="tx-muted">1 file</span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">
                                      Amet Sed Et Sed
                                    </span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">
                                      31-01-2022, 10:25
                                    </span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">
                                      Word Document
                                    </span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">150 mb</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a
                                      href="file-manager1.html"
                                      className="d-flex align-items-center"
                                    >
                                      <img
                                        src={Allimages("File2")}
                                        alt="img"
                                        className="wd-40 me-2"
                                      />
                                      <span>Sed Amet</span>
                                    </a>
                                  </td>
                                  <td>
                                    <span className="tx-muted">1 file</span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">
                                      Labore Vero Dolor
                                    </span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">
                                      021-01-2022, 08:38
                                    </span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">Pdf</span>
                                  </td>
                                  <td>
                                    <span className="tx-muted">350 kb</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Todotask;
