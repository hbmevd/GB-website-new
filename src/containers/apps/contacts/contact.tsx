import { Fragment } from "react";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col, Dropdown, OverlayTrigger, Row, Tab, Tabs, Tooltip } from "react-bootstrap";
import RSC from "react-scrollbars-custom";

function Contactus() {
  const tooltip = (message: any) => {
    return (
      <Tooltip id="tooltip">
        {message}
      </Tooltip>
    )
  }
  return (
    <Fragment>
      <Pageheader titles={"CONTACTS"} active={"Contacts"} Subtite={"Apps"} />
      <Row className=" row-sm">
        <Col xl={12} xxl={4} className="overflow-hidden">
          <Card>
            <Card.Body className=" p-0">
              <div className="p-3 border-bottom">
                <div className="d-flex align-items-center mb-3">
                  <h5 className="mb-0">Contacts </h5>
                  <div className="ms-auto d-flex align-items-center">
                    <a  className="btn btn-sm btn-def tx-muted">
                      <i className="fe fe-user-plus"></i>
                    </a>
                    <a  className="btn btn-sm btn-def tx-muted ms-1">
                      <i className="fe fe-settings"></i>
                    </a>
                  </div>
                </div>
                <div className="input-group mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name, Mobile Number..."
                  />
                  <span className="input-group-append">
                    <button className="btn ripple btn-primary" type="button">
                      Search
                    </button>
                  </span>
                </div>
              </div>
              <div className="panel tabs-style2 p-3">
                <Tabs
                  defaultActiveKey="profile"
                  id="justify-tab-example"
                  className="mb-3"
                  justify
                >
                  <Tab eventKey="profile" title="Profile" className="contact-tabs">
                    <div className="tab-pane active" id="contactsTab1">
                      <RSC style={{ width: "100%", height: "100vh" }} className="contact-scroll">
                        <div>
                          <div className="mb-3">
                            <p className="tx-24 tx-muted">A</p>
                            <ul className="nav flex-column">
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_1"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User10")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Annie Bella
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +130-472027
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_2"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User5")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Anso Keta
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +131-442427
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_3"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User2")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Alice Tuece
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +130-472027
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="mb-3">
                            <p className="tx-24 tx-muted">C</p>
                            <ul className="nav flex-column">
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_4"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User4")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Conce Noring
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +120-676027
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_5"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User8")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Chris Anthem
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +180-728468
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_6"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User10")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Col Fays
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +190-928578
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_7"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User12")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Carmen Goah
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +210-837612
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_8"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User14")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Clyde Stale
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +310-155830
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="mb-3">
                            <p className="tx-24 tx-muted">D</p>
                            <ul className="nav flex-column">
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_10"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User18")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Del Phineum
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +320-585136
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_11"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User20")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Dee End
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +310-651186
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_12"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User1")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Des Ignayshun
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +310-817559
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_13"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User3")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Dave Allippa
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +310-837687
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_14"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User5")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Dee Zynah
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +310-928653
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_15"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User7")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Dulcie Veeta
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +310-186170
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="mb-3">
                            <p className="tx-24 tx-muted">E</p>
                            <ul className="nav flex-column">
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_16"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User18")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">En Tra</h6>
                                      <span className="tx-muted tx-12">
                                        +130-452822
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_17"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User5")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Emma Watt
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +210-771037
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="mb-3">
                            <p className="tx-24 tx-muted">F</p>
                            <ul className="nav flex-column">
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_18"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User9")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Fos Ill
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +170-795299
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="mb-3">
                            <p className="tx-24 tx-muted">K</p>
                            <ul className="nav flex-column">
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_19"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User15")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Koen Low
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +570-897259
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_20"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User17")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Kalp Eosn
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +310-849587
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_21"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User18")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Kasse Osn
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +510-426557
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_22"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User1")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Kasp Nale
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +210-257825
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_23"
                                  className="nav-link active show p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User2")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Kristie Protens
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +110-486158
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="mb-3">
                            <p className="tx-24 tx-muted">M</p>
                            <ul className="nav flex-column">
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_24"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User10")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Mon Saow
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +160-601175
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_25"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User15")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">Man Go</h6>
                                      <span className="tx-muted tx-12">
                                        +110-751591
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_26"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User20")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Maso Ole
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +570-195269
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_27"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User2")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Mole Lee
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +410-142583
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_28"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User6")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Min Gyl
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +420-126397
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_29"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User11")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Marvo Chari
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +210-217223
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_30"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User16")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Mava Aldu
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +450-586188
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="mb-3">
                            <p className="tx-24 tx-muted">N</p>
                            <ul className="nav flex-column">
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_31"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User3")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Ne Inte
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +120-611273
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_32"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User7")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Natu Natu
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +111-556573
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_33"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User12")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Noori Laow
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +510-297284
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_34"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User17")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Nam Itha
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +710-172981
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="mb-3">
                            <p className="tx-24 tx-muted">O</p>
                            <ul className="nav flex-column">
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_35"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User4")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">Or Ieo</h6>
                                      <span className="tx-muted tx-12">
                                        +730-174077
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_36"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User8")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Oraio Naiah
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +150-442528
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_37"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User13")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Ol Ammo
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +430-775037
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="mb-3">
                            <p className="tx-24 tx-muted">P</p>
                            <ul className="nav flex-column">
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_37"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User1")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Poo Lachi
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +130-144779
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_38"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User3")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Pars Cel
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +110-472126
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_39"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User6")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">Pep Si</h6>
                                      <span className="tx-muted tx-12">
                                        +100-175097
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_40"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User9")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Pati Dar
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +110-145993
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="mb-0">
                            <p className="tx-24 tx-muted">R</p>
                            <ul className="nav flex-column">
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_41"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User12")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Ram Esh
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +410-579116
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_42"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User15")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Rakool Prit
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +121-275087
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item contact-item flex-1 mb-3">
                                <a
                                  href="#contact_43"
                                  className="nav-link p-0"
                                  data-bs-toggle="tab"
                                >
                                  <div className="d-flex">
                                    <div className="avatar">
                                      <img
                                        src={Allimages("User18")}
                                        alt="img"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-2">
                                      <h6 className="mb-1 text-body">
                                        Remo Mane
                                      </h6>
                                      <span className="tx-muted tx-12">
                                        +111-348913
                                      </span>
                                    </div>
                                  </div>
                                </a>
                                <div className="contact_links d-none d-sm-block">
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-message-square tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-phone tx-15"></i>
                                  </a>
                                  <a
                                    
                                    className="btn btn-def btn-sm tx-muted"
                                  >
                                    <i className="fe fe-video tx-15"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </RSC>
                    </div>
                  </Tab>
                  <Tab eventKey="Group" title="Group">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga.
                  </Tab>
                </Tabs>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={12} xxl={8}>
          <div className="tab-content">
            <div className="tab-pane active" id="contact_23">
              <Card>
                <Card.Body>
                  <div className="d-sm-flex d-block align-items-center mb-3">
                    <div className="avatar-status avatar-lg">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User2")}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="d-sm-flex d-block mt-3 mt-sm-0">
                        <div className="mg-sm-s-20">
                          <h5 className="mg-b-5">Kristie Protens</h5>
                          <p className="mb-0 tx-muted tx-12">Web Designer</p>
                        </div>
                        <div className="ms-auto btn-list d-flex mt-3 mt-sm-0">
                          <OverlayTrigger placement="top" overlay={tooltip('Attachment')}>
                            <a
                              
                              className="btn btn-primary-light btn-icon"
                              data-placement="top"
                              data-bs-toggle="tooltip"
                              title="Edit Profile"
                            >
                              <i className="fe fe-edit"></i>
                            </a>
                          </OverlayTrigger>
                          <OverlayTrigger placement="top" overlay={tooltip('Attachment')}>
                            <a
                              
                              className="btn btn-success-light btn-icon"
                              data-placement="top"
                              data-bs-toggle="tooltip"
                              title="Delete Profile"
                            >
                              <i className="fe fe-trash-2"></i>
                            </a>
                          </OverlayTrigger>
                          <OverlayTrigger placement="top" overlay={tooltip('Attachment')}>
                            <a
                              
                              className="btn btn-danger-light btn-icon"
                              data-placement="top"
                              data-bs-toggle="tooltip"
                              title="Add Favorite"
                            >
                              <i className="fe fe-star"></i>
                            </a>
                          </OverlayTrigger>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-list d-flex contact-btn-list mb-3">
                    <OverlayTrigger placement="top" overlay={tooltip('Attachment')}>
                      <a
                        
                        className="btn btn-sm border rounded-circle btn-icon tx-inverse"
                        data-bs-toggle="tooltip"
                        title="Call"
                      >
                        <i className="fe fe-phone tx-14-f"></i>
                      </a>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={tooltip('Attachment')}>
                      <a
                        
                        className="btn btn-sm border rounded-circle btn-icon tx-inverse"
                        data-bs-toggle="tooltip"
                        title="Video"
                      >
                        <i className="fe fe-video tx-14-f"></i>
                      </a>
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={tooltip('Attachment')}><a
                      
                      className="btn btn-sm border rounded-circle btn-icon tx-inverse"
                      data-bs-toggle="tooltip"
                      title="message"
                    >
                      <i className="fe fe-message-square tx-14-f"></i>
                    </a>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={tooltip('Attachment')}>
                      <a
                        
                        className="btn btn-sm border rounded-circle btn-icon tx-inverse"
                        data-bs-toggle="tooltip"
                        title="Add to Group"
                      >
                        <i className="fe fe-user-plus tx-14-f"></i>
                      </a></OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={tooltip('Attachment')}>
                      <a
                        
                        className="btn btn-sm border rounded-circle btn-icon tx-inverse"
                        data-bs-toggle="tooltip"
                        title="Block"
                      >
                        <i className="fe fe-slash tx-14-f"></i>
                      </a>
                    </OverlayTrigger>
                  </div>
                  <div className="pb-2 mb-3 border-bottom-dashed">
                    <div className="form-group">
                      <Row>
                        <Col xl={2}>
                          <label className="tx-muted tx-14">Status </label>
                        </Col>
                        <Col xl={10}>
                          <p className="mb-0 tx-14">Online</p>
                        </Col>
                      </Row>
                    </div>
                    <div className="form-group mb-0">
                      <Row>
                        <Col xl={2}>
                          <label className="tx-muted tx-14">About </label>
                        </Col>
                        <Col xl={10}>
                          <p className="mb-0 tx-14">
                            Amet sea amet rebum at kasd. Ea dolor eirmod
                            consetetur sit duo gubergren justo, sadipscing lorem
                            sit et elitr. Rebum.
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="pb-2 mb-3 border-bottom-dashed">
                    <div className="form-group">
                      <Row>
                        <Col xl={2}>
                          <label className="tx-muted tx-14">Full Name </label>
                        </Col>
                        <Col xl={10}>
                          <p className="mb-0 tx-14">Karolina Kristie Protens</p>
                        </Col>
                      </Row>
                    </div>
                    <div className="form-group">
                      <Row>
                        <Col xl={2}>
                          <label className="tx-muted tx-14">Email </label>
                        </Col>
                        <Col xl={10}>
                          <p className="mb-1 tx-14">
                            kristie@email.com
                            <span className="badge badge-sm bg-custom tx-muted rounded-pill ms-3">
                              Primary
                            </span>
                          </p>
                          <p className="mb-0 tx-14">kri.stie@gmail.com</p>
                        </Col>
                      </Row>
                    </div>
                    <div className="form-group">
                      <Row>
                        <Col xl={2}>
                          <label className="tx-muted tx-14">Contact </label>
                        </Col>
                        <Col xl={10}>
                          <p className="mb-1 tx-14">+110-15975375</p>
                          <p className="mb-0 tx-14">
                            +110-45379314
                            <span className="badge badge-sm bg-custom tx-muted rounded-pill ms-3">
                              Primary
                            </span>
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <div className="form-group mb-0">
                      <Row>
                        <Col xl={2}>
                          <label className="tx-muted tx-14">Work</label>
                        </Col>
                        <Col xl={10}>
                          <p className="mb-1 tx-14">+(210)-11965772</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="pb-0">
                    <div className="form-group mb-0">
                      <Row>
                        <Col xl={2}>
                          <label className="tx-muted tx-14">
                            Total Call Duration
                          </label>
                        </Col>
                        <Col xl={10}>
                          <p className="mb-1 tx-14">20 hrs : 43 mins : 23s</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>

          <Row id="contact-row">
            <Col xl={12}>
              <h5 className="mb-3 tx-muted">Recent Contacts</h5>
            </Col>
            <Col xxl={4} md={6} sm={12}>
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3 border-bottom">
                    <div className="d-flex">
                      <div className="flex-1 d-flex align-items-center">
                        <div className="me-2">
                          <img
                            src={Allimages("User12")}
                            alt="img"
                            className="avatar rounded-circle"
                          />
                        </div>
                        <div className="flex-1">
                          <h6 className="mg-b-5">Alphen Libbe</h6>
                          <p className="mb-0 tx-muted tx-11">Web Designer</p>
                        </div>
                      </div>
                      <Dropdown className="ms-auto">
                        <Dropdown.Toggle
                          className="tx-inverse toggle-before-none"
                          variant="default"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fe fe-more-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu tx-13">
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="d-flex align-items-center">
                      <p className="mb-0">+110-3893679</p>
                      <div className="ms-auto">
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-message-square tx-15"></i>
                        </a>
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-phone tx-15"></i>
                        </a>
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-video tx-15"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={4} md={6} sm={12}>
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3 border-bottom">
                    <div className="d-flex">
                      <div className="flex-1 d-flex align-items-center">
                        <div className="me-2">
                          <img
                            src={Allimages("User2")}
                            alt="img"
                            className="avatar rounded-circle"
                          />
                        </div>
                        <div className="flex-1">
                          <h6 className="mg-b-5">Barboosa Barsi</h6>
                          <p className="mb-0 tx-muted tx-11">Excecutive</p>
                        </div>
                      </div>
                      <Dropdown className="ms-auto">
                        <Dropdown.Toggle
                          className="tx-inverse toggle-before-none"
                          variant="default"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fe fe-more-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu tx-13">
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="d-flex align-items-center">
                      <p className="mb-0">+110-7853379</p>
                      <div className="ms-auto">
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-message-square tx-15"></i>
                        </a>
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-phone tx-15"></i>
                        </a>
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-video tx-15"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={4} md={6} sm={12}>
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3 border-bottom">
                    <div className="d-flex">
                      <div className="flex-1 d-flex align-items-center">
                        <div className="me-2">
                          <img
                            src={Allimages("User16")}
                            alt="img"
                            className="avatar rounded-circle"
                          />
                        </div>
                        <div className="flex-1">
                          <h6 className="mg-b-5">Cuk Kumbar</h6>
                          <p className="mb-0 tx-muted tx-11">Consultant</p>
                        </div>
                      </div>
                      <Dropdown className="ms-auto">
                        <Dropdown.Toggle
                          className="tx-inverse toggle-before-none"
                          variant="default"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fe fe-more-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="d-flex align-items-center">
                      <p className="mb-0">+110-4853672</p>
                      <div className="ms-auto">
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-message-square tx-15"></i>
                        </a>
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-phone tx-15"></i>
                        </a>
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-video tx-15"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={4} md={6} sm={12}>
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3 border-bottom">
                    <div className="d-flex">
                      <div className="flex-1 d-flex align-items-center">
                        <div className="me-2">
                          <img
                            src={Allimages("User4")}
                            alt="img"
                            className="avatar rounded-circle"
                          />
                        </div>
                        <div className="flex-1">
                          <h6 className="mg-b-5">Sodi Yum</h6>
                          <p className="mb-0 tx-muted tx-11">Designer</p>
                        </div>
                      </div>
                      <Dropdown className="ms-auto">
                        <Dropdown.Toggle
                          className="tx-inverse toggle-before-none"
                          variant="default"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fe fe-more-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu tx-13">
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="d-flex align-items-center">
                      <p className="mb-0">+110-3893679</p>
                      <div className="ms-auto">
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-message-square tx-15"></i>
                        </a>
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-phone tx-15"></i>
                        </a>
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-video tx-15"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={4} md={6} sm={12}>
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3 border-bottom">
                    <div className="d-flex">
                      <div className="flex-1 d-flex align-items-center">
                        <div className="me-2">
                          <img
                            src={Allimages("User16")}
                            alt="img"
                            className="avatar rounded-circle"
                          />
                        </div>
                        <div className="flex-1">
                          <h6 className="mg-b-5">Tort Oise</h6>
                          <p className="mb-0 tx-muted tx-11">Developer</p>
                        </div>
                      </div>
                      <Dropdown className="ms-auto">
                        <Dropdown.Toggle
                          className="tx-inverse toggle-before-none"
                          variant="default"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fe fe-more-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu tx-13">
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="d-flex align-items-center">
                      <p className="mb-0">+110-7893473</p>
                      <div className="ms-auto">
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-message-square tx-15"></i>
                        </a>
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-phone tx-15"></i>
                        </a>
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-video tx-15"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={4} md={6} sm={12}>
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3 border-bottom">
                    <div className="d-flex">
                      <div className="flex-1 d-flex align-items-center">
                        <div className="me-2">
                          <img
                            src={Allimages("User6")}
                            alt="img"
                            className="avatar rounded-circle"
                          />
                        </div>
                        <div className="flex-1">
                          <h6 className="mg-b-5">Vamp Aire</h6>
                          <p className="mb-0 tx-muted tx-11">Analyst</p>
                        </div>
                      </div>
                      <Dropdown className="ms-auto">
                        <Dropdown.Toggle
                          className="tx-inverse toggle-before-none"
                          variant="default"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fe fe-more-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu tx-13">
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="d-flex align-items-center">
                      <p className="mb-0">+110-4268713</p>
                      <div className="ms-auto">
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-message-square tx-15"></i>
                        </a>
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-phone tx-15"></i>
                        </a>
                        <a  className="btn btn-def btn-sm tx-muted">
                          <i className="fe fe-video tx-15"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Contactus;
