// import React from 'react'

import { Fragment } from "react";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Productdashboard } from "./data/chartsdata";
import { Card, Col, Dropdown, OverlayTrigger, ProgressBar, Row, Tooltip } from "react-bootstrap";
import Productsummarytable from "../general/data/tabledata";
import { NavLink } from "react-router-dom";

function Project() {
  return (
    <Fragment>
      <Pageheader
        titles={"DASHBOARD"}
        active={"Project"}
        Subtite={"Dashboard"}
      />
      <Row>
        <Col xxl={8} xl={12}>
          <Row>
            <Col xl={4} lg={4}>
              <Card>
                <Card.Body>
                  <div className="d-flex">
                    <div className="me-3">
                      <div className="avatar radius-4 bg-primary-transparent">
                        <i className="fa fa-briefcase tx-primary"></i>
                      </div>
                    </div>
                    <Dropdown className="flex-1">
                      <Dropdown.Toggle
                        className="tx-inverse float-end toggle-before-none pe-0 pt-0"
                        variant="default"
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
                      <div className="mb-1">
                        <p className="mb-0">Total Projects</p>
                      </div>
                      <div className="flex-between">
                        <p className="font-weight-semibold tx-16 mb-0 numberfont">
                          2,123
                        </p>
                        <span className="badge badge-primary-transparent">
                          This Month
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
                  <div className="d-flex">
                    <div className="me-3">
                      <div className="avatar radius-4 bg-warning-transparent">
                        <i className="fa fa-play tx-warning"></i>
                      </div>
                    </div>
                    <Dropdown className="flex-1">
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
                      <div className="mb-1">
                        <p className="mb-0">On Going</p>
                      </div>
                      <div className="flex-between">
                        <p className="font-weight-semibold tx-16 mb-0 numberfont">
                          1,039
                        </p>
                        <span className="badge badge-warning-transparent">
                          This Month
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
                  <div className="d-flex">
                    <div className="me-3">
                      <div className="avatar radius-4 bg-success-transparent">
                        <i className="fa fa-cube tx-success"></i>
                      </div>
                    </div>
                    <Dropdown className="flex-1">
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
                      <div className="mb-1">
                        <p className="mb-0">Upcoming</p>
                      </div>
                      <div className="flex-between">
                        <p className="font-weight-semibold tx-16 mb-0 numberfont">
                          1,024
                        </p>
                        <span className="badge badge-success-transparent">
                          Next Month
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
                  <div className="card-title">Project Report</div>
                </Card.Header>
                <Card.Body>
                  <div className="mt-3" id="projectReport">
                    <Productdashboard />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xxl={4} xl={12}>
          <Card>
            <Card.Header>
              <div className="card-title flex-between">
                Today's Progress
                <div className="btn-list d-flex">
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Close Project</Tooltip>}>
                  <a 
                    className="btn btn-circle-sm btn-outline-danger flex-center"
                  ><i className="fe fe-power tx-12"></i>
                  </a>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">View Project</Tooltip>}>
                  <a 
                    className="btn btn-circle-sm btn-primary flex-center"
                  ><i className="fe fe-eye tx-12"></i>
                  </a>
                </OverlayTrigger>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xl={12}>
                  <div className="mb-2">
                    <span className="tx-14">65% completed</span>
                  </div>
                  <div className="progress mb-4">
                    <ProgressBar
                      now={65}
                      className="progress-bar-xs progress-bar-striped progress-bar-animated bg-primary wd-65p"
                    />
                  </div>
                </Col>
                <Col xl={6}>
                  <div className="d-flex flex-wrap mg-xl-t-0-f mt-2">
                    <span className="avatar rounded-circle bg-primary-transparent">
                      <i className="fe fe-file tx-primary"></i>
                    </span>
                    <div className="mg-s-10">
                      <p className="mb-1 font-weight-semibold">Total Tasks</p>
                      <span className="tx-muted numberfont">746</span>
                    </div>
                  </div>
                </Col>
                <Col xl={6}>
                  <div className="d-flex flex-wrap mg-xl-t-0-f mt-2">
                    <span className="avatar rounded-circle bg-secondary-transparent">
                      <i className="fe fe-check-square tx-secondary"></i>
                    </span>
                    <div className="mg-s-10">
                      <p className="mb-1 font-weight-semibold">
                        Completed Tasks
                      </p>
                      <span className="tx-muted numberfont">138</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="card-header flex-between">
              <div className="card-title">Ongoing Tasks</div>
              <NavLink
                to={`${import.meta.env.BASE_URL}pages/todotask/`}
                className="tx-inverse font-weight-normal tx-12"
              >
                View All
              </NavLink>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled mb-0">
                <li className="list-item">
                  <div className="d-flex">
                    <div className="me-2 my-auto">
                      <div className="avatar radius-7 bg-primary-transparent">
                        <i className="fe fe-monitor tx-primary"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="d-flex justify-content-between mb-1">
                        <p className="tx-14 mb-0 me-1">
                          Designing a Landing Page
                        </p>
                        <label className="ckbox mb-0 mg-t-3 me-2 min-w-fit-content">
                          <input type="checkbox" />
                          <span></span>
                        </label>
                      </div>
                      <div className="flex-between">
                        <span className="avatar-list-stacked me-1">
                          <span className="avatar avatar-xs rounded-circle">
                            <img
                              alt="avatar"
                              className="rounded-circle"
                              src={Allimages("User2")}
                            />
                          </span>
                          <span className="avatar avatar-xs rounded-circle">
                            <img
                              alt="avatar"
                              className="rounded-circle"
                              src={Allimages("User6")}
                            />
                          </span>
                          <span className="avatar avatar-xs bg-primary rounded-circle">
                            +8
                          </span>
                        </span>
                        <span className="badge badge-sm badge-danger-transparent me-1 min-w-fit-cotent">
                          14-04-22
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex">
                    <div className="me-2 my-auto">
                      <div className="avatar radius-7 bg-warning-transparent">
                        <i className="fe fe-code tx-warning"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="d-flex justify-content-between mb-1">
                        <p className="tx-14 mb-0 me-1">
                          Fixing Responsive Issues
                        </p>
                        <label className="ckbox mb-0 mg-t-3 me-2 min-w-fit-content">
                          <input type="checkbox" />
                          <span></span>
                        </label>
                      </div>
                      <div className="flex-between">
                        <span className="avatar-list-stacked me-1">
                          <span className="avatar avatar-xs rounded-circle">
                            <img
                              alt="avatar"
                              className="rounded-circle"
                              src={Allimages("User9")}
                            />
                          </span>
                          <span className="avatar avatar-xs rounded-circle">
                            <img
                              alt="avatar"
                              className="rounded-circle"
                              src={Allimages("User10")}
                            />
                          </span>
                          <span className="avatar avatar-xs rounded-circle">
                            <img
                              alt="avatar"
                              className="rounded-circle"
                              src={Allimages("User8")}
                            />
                          </span>
                        </span>
                        <span className="badge badge-sm badge-danger-transparent me-1 min-w-fit-cotent">
                          16-04-22
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex">
                    <div className="me-2 my-auto">
                      <div className="avatar radius-7 bg-orange-transparent">
                        <i className="fe fe-airplay tx-orange"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="d-flex justify-content-between mb-1">
                        <p className="tx-14 mb-0 me-1">
                          Creating Home Page For Project
                        </p>
                        <label className="ckbox mb-0 mg-t-3 me-2 min-w-fit-content">
                          <input type="checkbox" />
                          <span></span>
                        </label>
                      </div>
                      <div className="flex-between">
                        <span className="avatar-list-stacked me-1">
                          <span className="avatar avatar-xs rounded-circle">
                            <img
                              alt="avatar"
                              className="rounded-circle"
                              src={Allimages("User3")}
                            />
                          </span>
                          <span className="avatar avatar-xs rounded-circle">
                            <img
                              alt="avatar"
                              className="rounded-circle"
                              src={Allimages("User7")}
                            />
                          </span>
                        </span>
                        <span className="badge badge-sm badge-danger-transparent me-1 min-w-fit-cotent">
                          15-04-22
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex">
                    <div className="me-2 my-auto">
                      <div className="avatar radius-7 bg-green-transparent">
                        <i className="fe fe-terminal tx-green"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="d-flex justify-content-between mb-1">
                        <p className="tx-14 mb-0 me-1">
                          Fixing Bugs In At sit Project
                        </p>
                        <label className="ckbox mb-0 mg-t-3 me-2 min-w-fit-content">
                          <input type="checkbox" />
                          <span></span>
                        </label>
                      </div>
                      <div className="flex-between">
                        <span className="avatar-list-stacked me-1">
                          <span className="avatar avatar-xs rounded-circle">
                            <img
                              alt="avatar"
                              className="rounded-circle"
                              src={Allimages("User12")}
                            />
                          </span>
                          <span className="avatar avatar-xs rounded-circle">
                            <img
                              alt="avatar"
                              className="rounded-circle"
                              src={Allimages("User13")}
                            />
                          </span>
                          <span className="avatar avatar-xs rounded-circle">
                            <img
                              alt="avatar"
                              className="rounded-circle"
                              src={Allimages("User3")}
                            />
                          </span>
                        </span>
                        <span className="badge badge-sm badge-danger-transparent me-1 min-w-fit-cotent">
                          18-04-22
                        </span>
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
        <Col xxl={4} xl={6} lg={6}>
          <Card>
            <Card.Header>
              <div className="card-title">Recent Activity</div>
            </Card.Header>
            <Card.Body className="card-body py-4">
              <ul className="list-unstyled mb-0 recent-activity-1">
                <li className="list-item">
                  <div className="d-flex">
                    <div className="me-3">
                      <div className="avatar bg-primary-gradient rounded-circle">
                        <i className="fe fe-package tx-white"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="tx-14 mb-1"> New project created <a  className="tx-primary font-weight-semibold"> Demo Project. </a> 
                      </p>
                      <span className="tx-muted tx-11">13 Apr 2022</span>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex">
                    <div className="me-3">
                      <div className="avatar bg-secondary-gradient rounded-circle">
                        <i className="fe fe-file tx-white"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="tx-14 mb-1"> New Task Generated <NavLink to={`${import.meta.env.BASE_URL}pages/todotask/`} className="tx-primary font-weight-semibold"> My Task.</NavLink>
                      </p>
                      <span className="tx-muted tx-11">12 Apr 2022</span>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex">
                    <div className="me-3">
                      <div className="avatar bg-orange-gradient rounded-circle">
                        <i className="fe fe-user tx-white"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="tx-14 mb-1">
                        <a  className="tx-primary font-weight-semibold"> Adam Shah </a> commented on a project <a  className="tx-primary font-weight-semibold"> Landing Project.</a>
                      </p>
                      <span className="tx-muted tx-11">11 Apr 2022</span>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex">
                    <div className="me-3">
                      <div className="avatar bg-success-gradient rounded-circle">
                        <i className="fe fe-file tx-white"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="tx-14 mb-1">
                        New task Generated <NavLink to={`${import.meta.env.BASE_URL}pages/todotask/`} className="tx-primary font-weight-semibold"> Demo Task. </NavLink>
                      </p>
                      <span className="tx-muted tx-11">01 Apr 2022</span>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-flex">
                    <div className="me-2">
                      <div className="avatar bg-purple-gradient rounded-circle">
                        <i className="fe fe-package tx-white"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="tx-14 mb-1">
                        New project has been created by <a  className="tx-primary font-weight-semibold"> Levine Monk
                        </a>
                      </p>
                      <span className="tx-muted tx-11">11 Mar 2022</span>
                    </div>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4} xl={6} lg={6}>
          <Card>
            <Card.Header>
              <div className="card-title">Upcoming Shedules</div>
            </Card.Header>
            <Card.Body className="card-body py-4">
              <ul className="list-unstyled mb-0">
                <li className="list-item">
                  <div className="d-sm-flex align-items-center">
                    <div className="me-sm-2 mb-2 mb-sm-0">
                      <div className="avatar flex-column radius-7 tx-center bg-primary-transparent tx-primary tx-12 font-weight-semibold">
                        <span>14</span>
                        <span>Apr</span>
                      </div>
                    </div>
                    <div className="flex-1 d-sm-flex justify-content-between">
                      <div className="me-sm-1 mb-1 mb-sm-0">
                        <p className="mb-sm-1 mb-0 tx-14 font-weight-semibold">
                          Meeting with client
                        </p>
                        <span className="tx-muted">video conference</span>
                      </div>
                      <div className="min-w-fit-content font-weight-semibold">
                        <span className="tx-muted">
                          <i className="fe fe-clock mx-1 tx-13"></i>09:00
                        </span>
                        <span className="mx-2">To</span>
                        <span className="tx-muted">
                          <i className="fe fe-clock mx-1 tx-13"></i>12:00
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-sm-flex align-items-center">
                    <div className="me-sm-2 mb-2 mb-sm-0">
                      <div className="avatar flex-column radius-7 tx-center bg-secondary-transparent tx-secondary tx-12 font-weight-semibold">
                        <span>15</span>
                        <span>Apr</span>
                      </div>
                    </div>
                    <div className="flex-1 d-sm-flex justify-content-between">
                      <div className="me-sm-1 mb-1 mb-sm-0">
                        <p className="mb-sm-1 mb-0 tx-14 font-weight-semibold">
                          Jack's Birthday
                        </p>
                        <span className="tx-muted">Down Town</span>
                      </div>
                      <div className="min-w-fit-content font-weight-semibold">
                        <span className="tx-muted">
                          <i className="fe fe-clock mx-1 tx-13"></i>08:00
                        </span>
                        <span className="mx-2">To</span>
                        <span className="tx-muted">
                          <i className="fe fe-clock mx-1 tx-13"></i>13:00
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-sm-flex align-items-center">
                    <div className="me-sm-2 mb-2 mb-sm-0">
                      <div className="avatar flex-column radius-7 tx-center bg-orange-transparent tx-orange tx-12 font-weight-semibold">
                        <span>16</span>
                        <span>Mar</span>
                      </div>
                    </div>
                    <div className="flex-1 d-sm-flex justify-content-between">
                      <div className="me-sm-1 mb-1 mb-sm-0">
                        <p className="mb-sm-1 mb-0 tx-14 font-weight-semibold">
                          Lunch with team members
                        </p>
                        <span className="tx-muted">Labore nonumy eos</span>
                      </div>
                      <div className="min-w-fit-content font-weight-semibold">
                        <span className="tx-muted">
                          <i className="fe fe-clock mx-1 tx-13"></i>12:45
                        </span>
                        <span className="mx-2">To</span>
                        <span className="tx-muted">
                          <i className="fe fe-clock mx-1 tx-13"></i>13:35
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-sm-flex align-items-center">
                    <div className="me-sm-2 mb-2 mb-sm-0">
                      <div className="avatar flex-column radius-7 tx-center bg-success-transparent tx-success tx-12 font-weight-semibold">
                        <span>18</span>
                        <span>May</span>
                      </div>
                    </div>
                    <div className="flex-1 d-sm-flex justify-content-between">
                      <div className="me-sm-1 mb-1 mb-sm-0">
                        <p className="mb-sm-1 mb-0 tx-14 font-weight-semibold">
                          Meeting with client
                        </p>
                        <span className="tx-muted">video conference</span>
                      </div>
                      <div className="min-w-fit-content font-weight-semibold">
                        <span className="tx-muted">
                          <i className="fe fe-clock mx-1 tx-13"></i>09:30
                        </span>
                        <span className="mx-2">To</span>
                        <span className="tx-muted">
                          <i className="fe fe-clock mx-1 tx-13"></i>10:45
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="d-sm-flex align-items-center">
                    <div className="me-sm-2 mb-2 mb-sm-0">
                      <div className="avatar flex-column radius-7 tx-center bg-purple-transparent tx-purple tx-12 font-weight-semibold">
                        <span>24</span>
                        <span>May</span>
                      </div>
                    </div>
                    <div className="flex-1 d-sm-flex justify-content-between">
                      <div className="me-sm-1 mb-1 mb-sm-0">
                        <p className="mb-sm-1 mb-0 tx-14 font-weight-semibold">
                          Group Discussion With Agents
                        </p>
                        <span className="tx-muted">Golden Park</span>
                      </div>
                      <div className="min-w-fit-content font-weight-semibold">
                        <span className="tx-muted">
                          <i className="fe fe-clock mx-1 tx-13"></i>19:00
                        </span>
                        <span className="mx-2">To</span>
                        <span className="tx-muted">
                          <i className="fe fe-clock mx-1 tx-13"></i>19:30
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4} xl={12} lg={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Team Members</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <th className="border-top-0 bg-black-03 br-bs-5 br-ts-5">
                        Member
                      </th>
                      <th className="border-top-0 bg-black-03">Tasks</th>
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
                            <h6 className="mb-1">Albert Dom</h6>
                            <span className="tx-muted">
                              albertdom1116@demo.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">152</td>
                      <td className="border-top-0">
                        <span className="badge badge-green-transparent">
                          online
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex">
                          <div className="me-2">
                            <span className="avatar bg-primary-transparent rounded-circle">
                              <i className="fa fa-user tx-primary"></i>
                            </span>
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-1">Hannu Tax</h6>
                            <span className="tx-muted">hannu393@demo.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">138</td>
                      <td className="border-top-0">
                        <span className="badge badge-green-transparent">
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
                            <h6 className="mb-1">Asif Xat</h6>
                            <span className="tx-muted">asif394@demo.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">381</td>
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
                            <span className="avatar bg-secondary-transparent rounded-circle">
                              <i className="fa fa-user tx-secondary"></i>
                            </span>
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-1">Aisha Ray</h6>
                            <span className="tx-muted">aisha852@demo.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">831</td>
                      <td className="border-top-0">
                        <span className="badge badge-green-transparent">
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

      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Project Summary</div>
            </Card.Header>
            <Card.Body>
              <Productsummarytable />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Project;
