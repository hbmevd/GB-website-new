import { Fragment } from "react";
import Allimages from "../../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../../components/common/pageheader/pageheader";
import { Link, NavLink } from "react-router-dom";
import { Card, Col, Dropdown, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

function Readmail() {
  return (
    <Fragment>
      <Pageheader titles={"READ MAIL"} active={"Read Mail"} Subtite={"Apps"} />
      <Row className="row-sm">
        {/* <!-- Col --> */}
        <Col lg={4} xl={3} md={12} sm={12} >
          <Card >
            <Card.Body className=" p-0">
              <div className="p-3 border-bottom">
                <Link
                  to={`${import.meta.env.BASE_URL}app/mail/newmail/`}
                  className="btn btn-primary btn-block"
                  id="btnCompose"
                >
                  Compose
                </Link>
              </div>
              <div className="p-3 border-bottom">
                <ul className="nav nav-pills main-nav-column">
                  <li className="nav-item">
                    <NavLink
                      to={`${import.meta.env.BASE_URL}app/mail/inbox/`}
                      className="nav-link thumb"
                    >
                      <i className="fe fe-mail"></i> Inbox
                      <span className="ms-auto">10</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link thumb" >
                      <i className="fe fe-star"></i> Starred
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link thumb" >
                      <i className="fe fe-send"></i> Sent
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link thumb" >
                      <i className="fe fe-file"></i> Drafts
                      <span className="ms-auto">3</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link thumb" >
                      <i className="fe fe-alert-triangle"></i> Spam
                      <span className="ms-auto">15</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link thumb" >
                      <i className="fe fe-users"></i> Contacts
                      <span className="ms-auto">2</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link thumb" >
                      <i className="fe fe-trash-2"></i> Deleted
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link thumb" >
                      <i className="ti ti-archive tx-15-f"></i> Archive
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-3">
                <ul className="nav nav-pills main-nav-column">
                  <li className="nav-item">
                    <a className="nav-link thumb" >
                      <i className="fe fe-help-circle"></i> Help
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link
                      to={`${import.meta.env.BASE_URL}app/mail/mailsetting/`}
                      className="nav-link thumb"
                    >
                      <i className="fe fe-settings"></i> Settings
                    </Link>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- /Col --> */}
        <Col xl={9} lg={8} md={12} sm={12}>
          <Card >
            <div className="card-header">
              <div className="card-title">Clita vero tempor lorem sea</div>
            </div>
            <Card.Body>
              <div className="d-flex">
                <img
                  alt="avatar"
                  className="avatar rounded-circle mg-b-10 mg-sm-b-0"
                  src={Allimages("User4")}
                />
                <div className="flex-1 d-flex align-items-center flex-wrap flex-md-nowrap">
                  <div className="ms-2 mb-1 mb-sm-0">
                    <h5 className="mg-b-5">
                      Alica Nestle
                      <span className="tx-13 font-weight-normal">
                        <NavLink to={`${import.meta.env.BASE_URL}app/mail/newmail/`} className="tx-primary"> nsdlai.rer@gmail.com </NavLink>
                      </span>
                    </h5>
                    <p className="mb-0">
                      To:
                      <span>
                        <NavLink to={`${import.meta.env.BASE_URL}app/mail/newmail/`} className="tx-primary"> asdedlai.rer@gmail.com </NavLink>
                      </span>
                    </p>
                  </div>
                  <div className="ms-sm-auto ms-2 d-flex align-items-center profile-section-icons">
                    <div className="me-md-3">
                      <span className="tx-muted">07 Mar 2022, 05:34 PM</span>
                    </div>
                    <div className="btn-list d-none d-md-flex tx-8">
                      <OverlayTrigger overlay={<Tooltip>Rated</Tooltip>}>
                        <span className="btn btn-def btn-sm tx-muted my-auto">
                          <i className="fe fe-star"></i>
                        </span>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={<Tooltip>Reply</Tooltip>}>
                        <span className="btn btn-def btn-sm tx-muted my-auto">
                          <i className="fe fe-corner-up-left"></i>
                        </span>
                      </OverlayTrigger>
                      <div className="btn btn-def btn-sm tx-muted my-auto removedropdownOutline">
                        <Dropdown>
                          <Dropdown.Toggle
                            className="float-end tx-white toggle-before-none p-0"
                            variant="default"
                            data-bs-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i
                              className="fe fe-more-vertical  tx-gray-600  tx-18"
                              data-bs-toggle="tooltip"
                              title=""
                              data-bs-original-title="View more"
                            ></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu">
                            <Dropdown.Item className="dropdown-item" >
                              Reply
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" >
                              Report Spam
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" >
                              Delete
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" >
                              Print
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h6 className="mb-3">Hi Sir/Madam</h6>
                <p>
                  Clita est et no tempor tempor aliquyam, et aliquyam voluptua
                  duo labore. Sanctus sed magna et amet. Ipsum ipsum consetetur
                  consetetur labore est sadipscing et ea eirmod. Rebum amet
                  consetetur duo no gubergren sanctus. Erat.
                </p>
                <p>
                  Erat takimata no sea ut diam voluptua et, lorem ut consetetur
                  eirmod sadipscing et dolore vero accusam, labore nonumy no
                  takimata clita at magna et. Dolores aliquyam ipsum est elitr.
                  Et ipsum voluptua ut sea diam sanctus no elitr ipsum aliquyam,
                  dolor et amet sit eirmod labore stet, sed sit.
                </p>
                <p>
                  Voluptua erat et duo consetetur et et tempor. Lorem sed sed et
                  labore duo, amet aliquyam rebum aliquyam sed kasd. Ea ut
                  invidunt vero et.
                </p>
                <p className="mb-0">Thanking you Sir/Madam</p>
                <hr />
                <div className="float-end">
                  <a  className="btn btn-sm btn-light">
                    <i className="fe fe-download"></i>
                  </a>
                </div>
                <p>
                  3 Attachments<a > View All Images</a>
                </p>
                <div className="d-flex flex-wrap">
                  <div className="m-2">
                    <a >
                      <img
                        className="wd-150 br-5 mb-2"
                        src={Allimages("Photos1")}
                        alt="placeholder image"
                      />
                    </a>
                    <div className="mb-3 mb-lg-0">
                      <span>1.jpg</span>
                      <small className="float-end tx-11">120 Kb</small>
                    </div>
                  </div>
                  <div className="m-2">
                    <a >
                      <img
                        className="wd-150 br-5 mb-2"
                        src={Allimages("Photos2")}
                        alt="placeholder image"
                      />
                    </a>
                    <div className="mb-3 mb-lg-0">
                      <span>2.jpg</span>
                      <small className="float-end tx-11">164 Kb</small>
                    </div>
                  </div>
                  <div className="m-2">
                    <a >
                      <img
                        className="wd-150 br-5 mb-2"
                        src={Allimages("Photos3")}
                        alt="placeholder image"
                      />
                    </a>
                    <div className="mb-3 mb-lg-0">
                      <span>3.jpg</span>
                      <small className="float-end tx-11">69 Kb</small>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer className=" btn-list">
              <a className="btn btn-primary mt-1 mb-1" >
                <i className="fa fa-reply"></i> Reply
              </a>
              <a className="btn btn-info mt-1 mb-1" >
                <i className="fa fa-share"></i> Forward
              </a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Readmail;
