// import React from 'react'

import { Fragment } from "react";

import Allimages from "../../../components/common/imagesdata/imagesdata";
import { Card, Col, Dropdown, Row, Tab, Tabs } from "react-bootstrap";
import { Generaldashboard, Totalinvestment } from "./data/charts";
import Generaltable from "./data/tabledata";
import { NavLink } from "react-router-dom";

function General() {
  return (
    <Fragment>
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title tx-primary mg-b-0 mg-b-lg-1">
            DASHBOARD
          </span>
        </div>
        <div className="justify-content-center mt-2">
          <ol className="breadcrumb breadcrumb-style3">
            <li className="breadcrumb-item tx-15">
              <a >Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Main
            </li>
          </ol>
        </div>
      </div>

      <Row>
        <Col xl={12} xxl={9}>
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
                        <p className="tx-primary tx-12 mb-1">Total Profit </p>
                        <h4 className="tx-22 numberfont font-weight-semibold mb-1">
                          $8,943.00
                        </h4>
                        <p className="tx-11 tx-muted mb-0">Current Month</p>
                      </div>
                      <div className="flex-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          className="svg-primary total-profit-svg main-dashboard-cards-svg"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#175787"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"></path>
                          <circle cx="16" cy="12" r="1.5"></circle>
                        </svg>
                      </div>
                    </Col>
                    <Col
                      xxl={3}
                      xl={6}
                      md={6}
                      sm={12}
                      className="d-flex align-items-center justify-content-between flex-wrap border-primary-end p-4"
                    >
                      <div>
                        <p className="tx-primary tx-12 mb-1">Total Orders</p>
                        <h4 className="tx-22 numberfont font-weight-semibold mb-1">
                          5,472.00
                        </h4>
                        <p className="tx-11 tx-muted mb-0">Current Month</p>
                      </div>
                      <div className="flex-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="svg-secondary total-order-svg main-dashboard-cards-svg"
                          enableBackground="new 0 0 24 24"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#175787"
                        >
                          <g>
                            <rect fill="none" height="24" width="24"></rect>
                            <path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z"></path>
                          </g>
                        </svg>
                      </div>
                    </Col>
                    <Col
                      xxl={3}
                      xl={6}
                      md={6}
                      sm={12}
                      className="d-flex align-items-center justify-content-between flex-wrap border-primary-end p-4"
                    >
                      <div>
                        <p className="tx-primary tx-12 mb-1">Total Sales</p>
                        <h4 className="tx-22 numberfont font-weight-semibold mb-1">
                          4,406.00
                        </h4>
                        <p className="tx-11 tx-muted mb-0">Current Month</p>
                      </div>
                      <div className="flex-center">
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
                      </div>
                    </Col>
                    <Col
                      xxl={3}
                      xl={6}
                      md={6}
                      sm={12}
                      className="d-flex align-items-center justify-content-between flex-wrap ps-4 py-4 pe-2"
                    >
                      <div className="flex-grow-1">
                        <p className="tx-primary tx-12 mb-1">
                          Total Investment
                        </p>
                        <h4 className="tx-22 numberfont font-weight-semibold mb-1">
                          $34K
                          <span className="badge badge-success-transparent tx-success tx-11 ms-2">
                            56<i className="fe fe-arrow-up tx-11"></i>
                          </span>
                        </h4>
                        <p className="tx-11 tx-muted mb-0">Current Month</p>
                      </div>
                      <div id="total-investment" className="mx-1">
                        <Totalinvestment />
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <div className="col-xxl-4 col-xl-12">
              <div className="card ">
                <div className="card-header">
                  <div className="card-title d-flex justify-content-between">
                    Activity Log
                    <div className="ms-auto">
                      <a
                        
                        className="tx-muted tx-11 font-weight-semibold"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <Card.Body>
                  <ul className="ps-0 list-unstyled mb-0">
                    <li className="mb-4">
                      <div className="d-flex justify-content-between align-items-center ms-4 activity-content1">
                        <p className="mb-1">
                          <span className="text-primary">Katy Perri </span>
                          <span className="tx-11 font-weight-normal">
                            commented.
                          </span>
                        </p>
                        <span className="tx-11 tx-muted">1h</span>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="d-flex justify-content-between ms-4 activity-content2">
                        <p className="mb-1 wd-250">
                          Neon Tarly
                          <span className="tx-11 font-weight-normal">
                            added
                          </span>
                          <span className="text-secondary"> Robin Bright</span>
                          <span className="tx-11 font-weight-normal ms-1">
                            to the
                          </span>
                          Summit AI
                          <span className="tx-11 font-weight-normal">
                            Project.
                          </span>
                        </p>
                        <span className="tx-11 tx-muted">6h</span>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="d-flex justify-content-between align-items-center ms-4 activity-content4">
                        <p className="mb-1 wd-250 d-flex align-items-center">
                          Wanda Rag
                          <span className="tx-11 font-weight-normal mx-1">
                            replied your comment
                          </span>
                          <span className="mx-1 text-danger font-weight-bold mt-1 tx-15">
                            <i className="fe fe-check"></i>
                          </span>
                        </p>
                        <span className="tx-11 tx-muted">1d</span>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="d-flex justify-content-between align-items-center ms-4 activity-content3">
                        <p className="mb-1 wd-250">
                          You
                          <span className="tx-11 font-weight-normal me-1">
                            deleted
                            <span className="badge badge-sm badge-warning-transparent mx-1">
                              20 files
                            </span>
                            from the
                          </span>
                          Summit AI
                          <span className="tx-11 font-weight-normal">
                            project.
                          </span>
                        </p>
                        <span className="tx-11 tx-muted">4h</span>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="d-flex justify-content-between align-items-center ms-4 activity-content5">
                        <p className="mb-1 wd-250 d-flex align-items-center">
                          Created
                          <span className="tx-11 font-weight-normal tx-success mx-1">
                            a New Task
                          </span>
                          Today
                          <span className="mx-1 text-success font-weight-bold mt-1">
                            <i className="fe fe-plus p-1 tx-10 bg-success-transparent rounded-circle"></i>
                          </span>
                        </p>
                        <span className="tx-11 tx-muted">2h</span>
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="d-flex justify-content-between align-items-center ms-4 activity-content6">
                        <p className="mb-1 wd-250">
                          New Member
                          <span className="tx-11 font-weight-normal badge badge-info-transparent mx-1">
                            @andras.betson
                          </span>
                          added Yesterday.
                        </p>
                        <span className="tx-11 tx-muted">1d</span>
                      </div>
                    </li>
                    <li className="mb-0">
                      <div className="d-flex justify-content-between ms-4 activity-content7">
                        <p className="mb-1 wd-250">
                          Neon Tarly
                          <span className="tx-11 font-weight-normal">
                            added
                          </span>
                          <span className="tx-orange"> Robin Bright</span>
                          <span className="tx-11 font-weight-normal ms-1">
                            to the
                          </span>
                          Summit AI
                          <span className="tx-11 font-weight-normal">
                            Project.
                          </span>
                        </p>
                        <span className="tx-11 tx-muted">6h</span>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </div>
            </div>
            {/* !-- col-end --> */}
            <div className="col-xxl-8 col-xl-12">
              <div className="card ">
                <div className="card-header flex-between">
                  <div className="card-title d-flex justify-content-between">
                    Sales Report
                  </div>
                  <Dropdown className="dropdown ms-auto">
                    <Dropdown.Toggle
                      className="btn border tx-muted tx-11 toggle-before-none font-weight-semibold btn-sm dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      variant="default"
                      aria-expanded="false"
                    >
                      Monthly
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <Dropdown.Item>
                        <a className="tx-muted" >
                          Day
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <a className="tx-muted" >
                          Yearly
                        </a>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Card.Body>
                  <div className="sales-stats d-flex mb-4">
                    <Row className=" project-stats">
                      <Col xl={4} lg={4} md={4} sm={4}>
                        <p className="mb-1">Active Orders</p>
                        <div>
                          <span className="mt-1 tx-16 numberfont font-weight-normal tx-primary">
                            106
                          </span>
                          <span className="tx-success">
                            <i className="fa fa-caret-up mx-1"></i>
                            <span className="badge bg-success-transparent numberfont tx-success tx-11">
                              +0.12%
                            </span>
                          </span>
                        </div>
                      </Col>
                      <Col xl={4} lg={4} md={4} sm={4}>
                        <p className="mb-1">Completed Orders</p>
                        <div className="mb-1 font-weight-semibold">
                          <span className="mt-1 tx-16 numberfont font-weight-normal tx-primary">
                            420
                          </span>
                          <span className="tx-success">
                            <i className="fa fa-caret-up mx-1"></i>
                            <span className="badge bg-success-transparent numberfont tx-success tx-11">
                              +0.24%
                            </span>
                          </span>
                        </div>
                      </Col>
                      <Col xl={4} lg={4} md={4} sm={4}>
                        <p className="mb-1">Sales Revenue</p>
                        <div className="mb-0">
                          <span className="mt-1 tx-16 font-weight-normal numberfont tx-secondary">
                            $32,124.00
                          </span>
                          <span className="tx-danger">
                            <i className="fa fa-caret-up mx-1"></i>
                            <span className="badge bg-danger-transparent numberfont tx-danger tx-11">
                              -0.24%
                            </span>
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div id="salesChart">
                    <Generaldashboard />
                  </div>
                </Card.Body>
              </div>
            </div>
          </Row>
          <Row>
            <Col sm={12} lg={12} xl={6} xxl={7}>
              <div className="card ">
                <div className="card-header custom-header d-flex justify-content-between align-items-center">
                  <div className="card-title d-flex justify-content-between">
                    Best Selling Products
                  </div>
                </div>
                <div className="ms-auto w-100">
                  <Tabs
                    defaultActiveKey="Pending"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="Pending" title="Pending" className="table-responsive">
                      <table className="table border-0 mb-0">
                        <thead>
                          <tr>
                            <th className="border-top-0 tx-muted font-weight-normal ps-4">
                              ProductName
                            </th>
                            <th className="border-top-0 tx-muted font-weight-normal">
                              TotalOrders
                            </th>
                            <th className="border-top-0 tx-muted font-weight-normal">
                              Status
                            </th>
                            <th className="border-top-0 tx-muted font-weight-normal pe-4 text-end">
                              Price
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="ps-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src={Allimages("Ecomerce32")}
                                  alt="img"
                                  className="radius-4 avatar p-2 bg-warning-transparent"
                                />
                                <div className="d-flex flex-column ms-2">
                                  <p className="mb-1 font-weight-semibold">
                                    SPECTS YELLOW
                                  </p>
                                  <span className="tx-muted tx-11">
                                    #4002364Edb
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex flex-column ms-2">
                                <p className="mb-1 font-weight-semibold numberfont tx-14">
                                  520
                                </p>
                                <span className="tx-muted tx-11">
                                  july 24, 2020
                                </span>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span className="tx-primary">stock Ready</span>
                              </div>
                            </td>
                            <td className="pe-4">
                              <div className="float-end">
                                <span className="font-weight-semibold numberfont tx-14">
                                  $40.00
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src={Allimages("Ecomerce34")}
                                  alt="img"
                                  className="radius-4 avatar p-2 bg-primary-transparent"
                                />
                                <div className="d-flex flex-column ms-2">
                                  <p className="mb-1">HEADPHONES Blue</p>
                                  <span className="tx-muted tx-11">
                                    #2002484Edb
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex flex-column ms-2">
                                <p className="mb-1 font-weight-semibold numberfont tx-14">
                                  240
                                </p>
                                <span className="tx-muted tx-11">
                                  Nov 18, 2021
                                </span>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span className="tx-secondary">
                                  out of stock
                                </span>
                              </div>
                            </td>
                            <td className="pe-4">
                              <div className="float-end">
                                <span className="font-weight-semibold numberfont tx-14">
                                  $39.89
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src={Allimages("Ecomerce33")}
                                  alt="img"
                                  className="radius-4 avatar p-2 bg-pink-transparent"
                                />
                                <div className="d-flex flex-column ms-2">
                                  <p className="mb-1">BAG Pink</p>
                                  <span className="tx-muted tx-11">
                                    #30023784Edb
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex flex-column ms-2">
                                <p className="mb-1 font-weight-semibold numberfont tx-14">
                                  400
                                </p>
                                <span className="tx-muted tx-11">
                                  April 16, 2020
                                </span>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span className="tx-primary">stock Ready</span>
                              </div>
                            </td>
                            <td className="pe-4">
                              <div className="float-end">
                                <span className="font-weight-semibold numberfont tx-14">
                                  $22.60
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src={Allimages("Ecomerce32")}
                                  alt="img"
                                  className="radius-4 avatar p-2 bg-success-transparent"
                                />
                                <div className="d-flex flex-column ms-2">
                                  <p className="mb-1">SHOES Green</p>
                                  <span className="tx-muted tx-11">
                                    #4002364Edb
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex flex-column ms-2">
                                <p className="mb-1 font-weight-semibold numberfont tx-14">
                                  89
                                </p>
                                <span className="tx-muted tx-11">
                                  Feb 06, 2021
                                </span>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span className="tx-secondary">
                                  out of stock
                                </span>
                              </div>
                            </td>
                            <td className="pe-4">
                              <div className="float-end">
                                <span className="font-weight-semibold numberfont tx-14">
                                  $38.04
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src={Allimages("Ecomerce35")}
                                  alt="img"
                                  className="radius-4 avatar p-2 bg-primary-transparent"
                                />
                                <div className="d-flex flex-column ms-2">
                                  <p className="mb-1">WATCH Blue</p>
                                  <span className="tx-muted tx-11">
                                    #2402429Edb
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex flex-column ms-2">
                                <p className="mb-1 font-weight-semibold numberfont tx-14">
                                  106
                                </p>
                                <span className="tx-muted tx-11">
                                  Sep 24, 2020
                                </span>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span className="tx-primary">stock Ready</span>
                              </div>
                            </td>
                            <td className="pe-4">
                              <div className="float-end">
                                <span className="font-weight-semibold numberfont tx-14">
                                  $25.64
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Tab>
                    <Tab eventKey="conformed" title="Conformed" className="table-responsive">
                      <table className="table border-0 mb-0">
                        <thead>
                          <tr>
                            <th className="border-top-0 tx-muted font-weight-normal ps-4">
                              ProductName
                            </th>
                            <th className="border-top-0 tx-muted font-weight-normal">
                              TotalOrders
                            </th>
                            <th className="border-top-0 tx-muted font-weight-normal">
                              Status
                            </th>
                            <th className="border-top-0 tx-muted font-weight-normal pe-4 text-end">
                              Price
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="ps-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src={Allimages("Ecomerce7")}
                                  alt="img"
                                  className="radius-4 avatar"
                                />
                                <div className="d-flex flex-column ms-2">
                                  <p className="mb-1">White Shoes</p>
                                  <span className="tx-muted tx-12">
                                    #4002364Edb
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex flex-column ms-2">
                                <p className="mb-1 font-weight-semibold numberfont tx-14">
                                  89
                                </p>
                                <span className="tx-muted tx-12">
                                  Feb 06, 2021
                                </span>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span className="tx-warning">out of stock</span>
                              </div>
                            </td>
                            <td className="pe-4">
                              <div className="float-end">
                                <span className="font-weight-semibold numberfont tx-14">
                                  $38.04
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src={Allimages("Ecomerce18")}
                                  alt="img"
                                  className="radius-4 avatar"
                                />
                                <div className="d-flex flex-column ms-2">
                                  <p className="mb-1">WATCH Blue</p>
                                  <span className="tx-muted tx-12">
                                    #2402429Edb
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex flex-column ms-2">
                                <p className="mb-1 font-weight-semibold numberfont tx-14">
                                  106
                                </p>
                                <span className="tx-muted tx-12">
                                  Sep 24, 2020
                                </span>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span className="tx-primary">stock Ready</span>
                              </div>
                            </td>
                            <td className="pe-4">
                              <div className="float-end">
                                <span className="font-weight-semibold numberfont tx-14">
                                  $25.64
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src={Allimages("Ecomerce19")}
                                  alt="img"
                                  className="radius-4 avatar"
                                />
                                <div className="d-flex flex-column ms-2">
                                  <p className="mb-1">DIGITAL CAMERA</p>
                                  <span className="tx-muted tx-12">
                                    #24024345df
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex flex-column ms-2">
                                <p className="mb-1 font-weight-semibold numberfont tx-14">
                                  34
                                </p>
                                <span className="tx-muted tx-12">
                                  Sep 29, 2020
                                </span>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span className="tx-primary">stock Ready</span>
                              </div>
                            </td>
                            <td className="pe-4">
                              <div className="float-end">
                                <span className="font-weight-semibold numberfont tx-14">
                                  $1,299.00
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src={Allimages("Ecomerce20")}
                                  alt="img"
                                  className="radius-4 avatar"
                                />
                                <div className="d-flex flex-column ms-2">
                                  <p className="mb-1">PHOTO FRAME</p>
                                  <span className="tx-muted tx-12">
                                    #2402429Der
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex flex-column ms-2">
                                <p className="mb-1 font-weight-semibold numberfont tx-14">
                                  124
                                </p>
                                <span className="tx-muted tx-12">
                                  Sep 28, 2020
                                </span>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span className="tx-secondary">
                                  out of stock
                                </span>
                              </div>
                            </td>
                            <td className="pe-4">
                              <div className="float-end">
                                <span className="font-weight-semibold numberfont tx-14">
                                  $12.00
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src={Allimages("Ecomerce6")}
                                  alt="img"
                                  className="radius-4 avatar"
                                />
                                <div className="d-flex flex-column ms-2">
                                  <p className="mb-1">FLOWER POT</p>
                                  <span className="tx-muted tx-12">
                                    #2402429Eff
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex flex-column ms-2">
                                <p className="mb-1 font-weight-semibold numberfont tx-14">
                                  236
                                </p>
                                <span className="tx-muted tx-12">
                                  Sep 22, 2020
                                </span>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span className="tx-primary">stock Ready</span>
                              </div>
                            </td>
                            <td className="pe-4">
                              <div className="float-end">
                                <span className="font-weight-semibold numberfont tx-14">
                                  $20.99
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Col>
            <Col sm={12} lg={12} xl={6} xxl={5}>
              <div className="card transactions-history">
                <div className="card-header">
                  <div className="card-title d-flex justify-content-between">
                    transactions history
                    <div className="ms-auto">
                      <a
                        
                        className="tx-muted tx-11 font-weight-semibold"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <Card.Body>
                  <div className="transactions-history-item">
                    <div className="d-flex">
                      <a >
                        <span className="avatar avatar-md br-5 bg-primary-transparent text-primary me-3">
                          <i className="fe fe-credit-card"></i>
                        </span>
                      </a>
                      <div className="w-100">
                        <a >
                          <span className="mb-1 text-default me-3">
                            Visa Card
                          </span>
                          <span className="badge border-primary border text-primary fs-11 my-auto">
                            Processing
                          </span>
                        </a>
                        <p className="tx-11 text-muted me-3">Just now</p>
                      </div>
                      <div className="ms-auto my-auto">
                        <p className="numberfont font-weight-semibold tx-14">
                          <span className="tx-primary me-1">-</span>$2,45,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-history-item">
                    <div className="d-flex">
                      <a >
                        <span className="avatar avatar-md br-5 bg-warning-transparent text-warning me-3">
                          <i className="fe fe-smartphone"></i>
                        </span>
                      </a>
                      <div className="w-100">
                        <a >
                          <span className="mb-1 text-default me-3">
                            Through UPI
                          </span>
                        </a>
                        <p className="tx-11 text-muted me-3">Yesterday</p>
                      </div>
                      <div className="ms-auto my-auto">
                        <p className="numberfont font-weight-semibold tx-14">
                          <span className="tx-warning me-1">+</span>$100.
                          <span className="tx-10">00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-history-item">
                    <div className="d-flex">
                      <a >
                        <span className="avatar avatar-md br-5 bg-orange-transparent text-orange me-3">
                          <i className="fe fe-arrow-down"></i>
                        </span>
                      </a>
                      <div className="w-100">
                        <a >
                          <span className="mb-1 text-default me-3">
                            Bank Of Baroda Credit Card
                          </span>
                          <span className="badge border-orange border tx-orange fs-11 my-auto">
                            Completed
                          </span>
                        </a>
                        <p className="tx-11 text-muted me-3">17-04-2022</p>
                      </div>
                      <div className="ms-auto my-auto">
                        <p className="numberfont font-weight-semibold tx-14">
                          $1,50,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-history-item">
                    <div className="d-flex">
                      <a >
                        <span className="avatar avatar-md br-5 bg-success-transparent text-success me-3">
                          <i className="fe fe-arrow-up"></i>
                        </span>
                      </a>
                      <div className="w-100">
                        <a >
                          <span className="mb-1 text-default me-3">
                            Paid By PayPal
                          </span>
                        </a>
                        <p className="tx-11 text-muted me-3">21-04-2022</p>
                      </div>
                      <div className="ms-auto my-auto">
                        <p className="numberfont font-weight-semibold tx-14">
                          <span className="tx-success me-1">-</span>$500.
                          <span className="tx-10">00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-history-item">
                    <div className="d-flex">
                      <a >
                        <span className="avatar avatar-md br-5 bg-secondary-transparent tx-secondary me-3">
                          <i className="fe fe-more-horizontal"></i>
                        </span>
                      </a>
                      <div className="w-100">
                        <a >
                          <span className="mb-1 text-default me-3">
                            Credit Card
                          </span>
                          <span className="badge border-secondary border text-secondary fs-11 my-auto">
                            Processing
                          </span>
                        </a>
                        <p className="tx-11 text-muted me-3">25-04-2022</p>
                      </div>
                      <div className="ms-auto my-auto">
                        <p className="numberfont font-weight-semibold tx-14">
                          <span className="tx-secondary me-1">+</span>$3,000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="transactions-history-item">
                    <div className="d-flex">
                      <a >
                        <span className="avatar avatar-md br-5 bg-success-transparent text-success me-3">
                          <i className="fe fe-arrow-up"></i>
                        </span>
                      </a>
                      <div className="w-100">
                        <a >
                          <span className="mb-1 text-default me-3">
                            Paid By Paytm
                          </span>
                        </a>
                        <p className="tx-11 text-muted me-3">22-04-2022</p>
                      </div>
                      <div className="ms-auto my-auto">
                        <p className="numberfont font-weight-semibold tx-14">
                          <span className="tx-success me-1">-</span>$500.
                          <span className="tx-10">00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </Col>

        <div className="col-xl-12 col-xxl-3">
          <Row>
            <div className="col-md-12">
              <div className="card ">
                <div className="card-header">
                  <div className="card-title d-flex justify-content-between">
                    Tasks
                    <div className="ms-auto">
                      <a  className="tx-muted tx-12 font-weight-normal">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <Card.Body className="card-body pt-3">
                  <ul className="tasks-all mb-0">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="avatar-sm bg-primary-transparent rounded-circle d-flex align-items-center justify-content-center shadow">
                          <a
                            
                            className="text-primary d-flex align-items-center justify-content-center"
                          >
                            <i className="fe fe-activity"></i>
                          </a>
                        </div>
                        <div className="ms-3 flex-1">
                          <div className="d-flex align-items-center justify-content-between">
                            <p className="mb-0">To Do</p>
                            <span className="badge badge-primary-transparent">
                              <i className="fe fe-arrow-right tx-10 mx-2"></i>
                              10.06.2020
                            </span>
                          </div>
                          <p className="tx-muted mb-0 tx-11 d-flex align-items-center">
                            2m ago
                            <span className="ms-2 d-flex align-items-center">
                              
                              <span className="rounded-circle ht-5 wd-5 bg-primary me-1"></span>
                              in progress
                            </span>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="avatar-sm bg-secondary-transparent rounded-circle d-flex align-items-center justify-content-center shadow">
                          <a
                            
                            className="text-secondary d-flex align-items-center justify-content-center"
                          >
                            <i className="fe fe-command"></i>
                          </a>
                        </div>
                        <div className="ms-3 flex-1">
                          <div className="d-flex align-items-center justify-content-between">
                            <p className="mb-0">Task In Progress</p>
                            <span className="badge badge-secondary-transparent">
                              <i className="fe fe-arrow-right tx-10 mx-2"></i>
                              02.06.2022
                            </span>
                          </div>
                          <p className="tx-muted mb-0 tx-11 d-flex align-items-center">
                            2m ago
                            <span className="ms-2 d-flex align-items-center">
                              
                              <span className="rounded-circle ht-5 wd-5 bg-secondary me-1"></span>
                              started
                            </span>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="avatar-sm bg-orange-transparent rounded-circle d-flex align-items-center justify-content-center shadow">
                          <a
                            
                            className="text-orange d-flex align-items-center justify-content-center"
                          >
                            <i className="fe fe-globe"></i>
                          </a>
                        </div>
                        <div className="ms-3 flex-1">
                          <div className="d-flex align-items-center justify-content-between">
                            <p className="mb-0">Completed Task</p>
                            <span className="badge badge-warning-transparent">
                              <i className="fe fe-arrow-right tx-10 mx-2"></i>
                              06.12.2022
                            </span>
                          </div>
                          <p className="tx-muted mb-0 tx-11 d-flex align-items-center">
                            2m ago
                            <span className="ms-2 d-flex align-items-center">
                              
                              <span className="rounded-circle ht-5 wd-5 bg-warning me-1"></span>
                              completed
                            </span>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="avatar-sm bg-success-transparent rounded-circle d-flex align-items-center justify-content-center shadow">
                          <a
                            
                            className="text-success d-flex align-items-center justify-content-center"
                          >
                            <i className="fe fe-activity"></i>
                          </a>
                        </div>
                        <div className="ms-3 flex-1">
                          <div className="d-flex align-items-center justify-content-between">
                            <p className="mb-0">To Do</p>
                            <span className="badge badge-success-transparent">
                              <i className="fe fe-arrow-right tx-10 mx-2"></i>
                              12.06.2021
                            </span>
                          </div>
                          <p className="tx-muted mb-0 tx-11 d-flex align-items-center">
                            2m ago
                            <span className="ms-2 d-flex align-items-center">
                              
                              <span className="rounded-circle ht-5 wd-5 bg-success me-1"></span>
                              in progress
                            </span>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </div>
            </div>
            <div className="col-md-12">
              <Card>
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div className="card-title">Profits By Country</div>
                </div>
                <Card.Body>
                  <div className="mb-4">
                    <div className="mb-1">
                      India
                      <span className="float-end tx-primary">
                        <i className="fa fa-long-arrow-up mx-1"></i>
                        <span className="text-primary">$21,234.90</span>
                      </span>
                    </div>
                    <div className="progress-bar-custom progress-bar-custom-primary">
                      <div className="progress-custom fill-1 progress-primary wd-95">
                        <div className="glow glow-primary"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="mb-1">
                      Usa
                      <span className="text-primary float-end">
                        Increased
                        <span className="badge badge-secondary-transparent ms-2">
                          42%
                        </span>
                      </span>
                    </div>
                    <div className="progress-bar-custom progress-bar-custom-secondary mb-3">
                      <div className="progress-custom fill-1 progress-secondary wd-200">
                        <div className="glow glow-secondary"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="mb-1">
                      Russia
                      <span className="float-end tx-success">
                        <i className="fa fa-long-arrow-up mx-1"></i>
                        <span className="text-success">+$14,256</span>
                      </span>
                    </div>
                    <div className="progress-bar-custom progress-bar-custom-success mb-3">
                      <div className="progress-custom fill-1 progress-success wd-55">
                        <div className="glow glow-success"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="mb-1">
                      Uae
                      <span className="float-end tx-orange">
                        <i className="fa fa-long-arrow-down mx-1"></i>
                        <span className="text-orange">-$4,345.69</span>
                      </span>
                    </div>
                    <div className="progress-bar-custom progress-bar-custom-orange mb-3">
                      <div className="progress-custom fill-1 progress-orange wd-150">
                        <div className="glow glow-orange"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-0">
                    <div className="mb-1">
                      China
                      <span className="float-end tx-purple">
                        <i className="fa fa-long-arrow-up mx-1"></i>
                        <span className="text-purple">+$72,234.50</span>
                      </span>
                    </div>
                    <div className="progress-bar-custom progress-bar-custom-purple mb-1">
                      <div className="progress-custom fill-1 progress-purple wd-200">
                        <div className="glow glow-purple"></div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-12">
              <div className="card ">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div className="card-title d-flex justify-content-between">
                    Billings
                  </div>
                </div>
                <div className="card-body p-3">
                  <div className="panel">
                    <div className="panel tabs-style6">
                      <div className="panel-head ms-auto">
                        <Tabs
                          defaultActiveKey="received"
                          id="uncontrolled-tab-example"
                          className="mb-3"
                        >
                          <Tab
                            eventKey="received"
                            title={
                              <span>
                                <i className="fe fe-user  rounded-circle tx-11 me-1"></i>
                                Received
                              </span>
                            }
                          >
                            <ul className="list-unstyled mb-0">
                              <li>
                                <div className="d-flex align-items-center">
                                  <div><i className="fe fe-user p-2 bg-primary-transparent tx-primary rounded-circle"></i></div>
                                  <div className="flex-1 ms-3">
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      Joseph Arimathea
                                      <span className="tx-primary numberfont font-weight-semibold tx-14">
                                        +$5,000
                                      </span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink
                                        to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-muted tx-11"
                                      >
                                        15 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        Today
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex align-items-center">
                                  <div className="avatar rounded-circle bg-secondary-transparent avatar-sm">
                                    <span className="tx-muted font-weight-normal mt-1">
                                      PS
                                    </span>
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      Penelope Smallbone
                                      <span className="tx-primary numberfont font-weight-semibold tx-14">
                                        +$20,400
                                      </span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-muted tx-11"
                                      >
                                        2 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        20 Jan 22
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex align-items-center">
                                  <div>
                                    <i className="fe fe-user p-2 bg-primary-transparent tx-primary rounded-circle"></i>
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      Ruby Bartlett
                                      <span className="tx-primary numberfont font-weight-semibold tx-14">
                                        +$49,250
                                      </span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink
                                        to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-muted tx-11"
                                      >
                                        37 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        17 Jan 22
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex align-items-center">
                                  <div>
                                    <i className="fe fe-user p-2 bg-primary-transparent tx-primary rounded-circle"></i>
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      Sylvia Trench
                                      <span className="tx-primary numberfont font-weight-semibold tx-14">
                                        +$9,260
                                      </span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink
                                        to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-muted tx-11"
                                      >
                                        4 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        10 Jan 22
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex align-items-center">
                                  <div className="avatar rounded-circle bg-secondary-transparent avatar-sm">
                                    <span className="tx-muted font-weight-normal mt-1">
                                      PS
                                    </span>
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      Penelope Smallbone
                                      <span className="tx-primary numberfont font-weight-semibold tx-14">
                                        +$20,400
                                      </span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink
                                        to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-muted tx-11"
                                      >
                                        2 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        20 Jan 22
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li className="mb-0">
                                <div className="d-flex align-items-center">
                                  <div>
                                    <i className="fe fe-user p-2 bg-primary-transparent tx-primary rounded-circle"></i>
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      Simon Cyrene
                                      <span className="tx-primary numberfont font-weight-semibold tx-14">
                                        +$89,400
                                      </span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink
                                        to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-muted tx-11"
                                      >
                                        37 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        20 Jan 22
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </Tab>
                          <Tab
                            eventKey="paid"
                            title={
                              <span>
                                <i className="fe fe-check-square me-1 tx-11"></i>
                                Paid
                              </span>
                            }
                          >
                            <ul className="list-unstyled mb-0">
                              <li>
                                <div className="d-flex align-items-center">
                                  <div className="avatar rounded-circle bg-secondary-transparent avatar-sm">
                                    <span className="tx-muted font-weight-normal mt-1">
                                      LE
                                    </span>
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      Lisbon Es
                                      <span className="tx-secondary font-weight-semibold numberfont tx-14">
                                        -$20,000
                                      </span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink
                                        to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-muted tx-11"
                                      >
                                        2 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        Today
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex align-items-center">
                                  <div>
                                    <i className="fe fe-user p-2 bg-primary-transparent tx-primary rounded-circle"></i>
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      Liza Doolittle
                                      <span className="tx-secondary numberfont font-weight-semibold tx-14">
                                        -$65,000
                                      </span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink
                                        to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-muted tx-11"
                                      >
                                        7 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        15 Jan 22
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex align-items-center">
                                  <div>
                                    <i className="fe fe-user p-2 bg-primary-transparent tx-primary rounded-circle"></i>
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      Tiffany Case
                                      <span className="tx-secondary numberfont font-weight-semibold tx-14">
                                        -$6,030
                                      </span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink
                                        to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-muted tx-11"
                                      >
                                        2 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        15 Jan 22
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex align-items-center">
                                  <div className="avatar rounded-circle bg-secondary-transparent avatar-sm">
                                    <span className="tx-muted font-weight-normal mt-1">
                                      LE
                                    </span>
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      Lisbon Es
                                      <span className="tx-secondary font-weight-semibold numberfont tx-14">
                                        -$20,000
                                      </span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink
                                        to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-muted tx-11"
                                      >
                                        2 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        Today
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex align-items-center">
                                  <div>
                                    <i className="fe fe-user p-2 bg-primary-transparent tx-primary rounded-circle"></i>
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      Henry Flex
                                      <span className="tx-secondary numberfont font-weight-semibold tx-14">
                                        -$68,100
                                      </span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink
                                        to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-muted tx-11"
                                      >
                                        7 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        11 Jan 22
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li className="mb-0">
                                <div className="d-flex align-items-center">
                                  <div>
                                    <i className="fe fe-user p-2 bg-primary-transparent tx-primary rounded-circle"></i>
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      Shady Tree
                                      <span className="tx-secondary font-weight-semibold numberfont tx-14">
                                        -$5,800
                                      </span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink
                                        to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-muted tx-11"
                                      >
                                        7 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        14 Jan 22
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </Tab>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Row>
      {/* <!-- row closed --> */}

      {/* <!-- row  --> */}
      <Row>
        <div className="col-12 col-sm-12">
          <div className="card ">
            <div className="card-header">
              <div className="card-title">Product Summary</div>
            </div>
            <Card.Body className="card-body example1-table">
              <div className="table-responsive">
                <Generaltable />
              </div>
            </Card.Body>
          </div>
        </div>
      </Row>
      {/* <!-- /row closed --> */}
    </Fragment>
  );
}

export default General;
