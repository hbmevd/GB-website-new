import { Fragment } from "react";
import Allimages from "../../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../../components/common/pageheader/pageheader";
import { Link, NavLink } from "react-router-dom";
import { Card, Col, Pagination, Row } from "react-bootstrap";

function Inbox() {
  return (
    <Fragment>
      <Pageheader titles={"Inbox"} active={"Inbox"} Subtite={"Apps"} />
      <Row className="row-sm main-content-mail">
        <Col lg={4} xl={3} md={12}>
          <Card>
            <Card.Body className=" p-0">
              <div className="p-3 border-bottom">
                <Link
                  to={`${import.meta.env.BASE_URL}app/mail/newmail/`}
                  className="btn btn-primary btn-block"
                  id="btnCompose"
                >
                  <i className="fe fe-mail align-text-top"></i> Compose
                </Link>
              </div>
              <div className="p-3 border-bottom">
                <ul className="nav nav-pills main-nav-column">
                  <li className="nav-item">
                    <a className="nav-link thumb active" >
                      <i className="fe fe-mail"></i> Inbox
                      <span className="ms-auto">10</span>
                    </a>
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
        <div className="col-lg-8 col-xl-9 col-md-12">
          <div className="row">
            <div className="col-xl-12">
              <div className="card overflow-hidden">
                <div className="card-header border-bottom">
                  <div className="d-sm-flex align-items-center">
                    <div className="form-group mb-0">
                      <div className=" main-mail-options d-flex align-items-center">
                        <div className="me-3">
                          <label className="ckbox mt-0 mb-0">
                            <input type="checkbox" id="checkAll" />
                            <span></span>
                          </label>
                        </div>
                        <div className="me-2">
                          <a
                            
                            className="btn btn-sm btn-def tx-muted disabled"
                            data-bs-toggle="tooltip"
                            title="Archive"
                          >
                            <i className="ti ti-archive tx-15-f"></i>
                          </a>
                        </div>
                        <div className="me-2">
                          <a
                            
                            className="btn btn-sm btn-def tx-muted disabled"
                            data-bs-toggle="tooltip"
                            title="Label"
                          >
                            <i className="fe fe-tag"></i>
                          </a>
                        </div>
                        <div className="me-2">
                          <a
                            
                            className="btn btn-sm btn-def tx-muted disabled"
                            data-bs-toggle="tooltip"
                            title="Delete"
                          >
                            <i className="fe fe-trash-2"></i>
                          </a>
                        </div>
                        <div className="me-2">
                          <a
                            
                            className="btn btn-sm btn-def tx-muted disabled"
                            data-bs-toggle="tooltip"
                            title="Spam"
                          >
                            <i className="fe fe-alert-circle"></i>
                          </a>
                        </div>
                        <div className="me-2">
                          <a
                            
                            className="btn btn-sm btn-def tx-muted"
                            data-bs-toggle="tooltip"
                            title="Refresh"
                          >
                            <i className="fe fe-repeat"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <p className="tx-muted mb-0">
                        <span className="current-page tx-18">1</span>
                        <span className="mx-1">Of</span>
                        <span className="total tx-18">10</span>
                      </p>
                    </div>
                  </div>
                </div>
                <Card.Body className=" p-0">
                  <ul className="list-group main-mail-group">
                    <li className="list-group-item">
                      <div className="d-sm-flex align-items-start pos-relative">
                        <div className="me-3 d-flex align-items-start">
                          <div className="me-3">
                            <label className="ckbox m-0">
                              <input type="checkbox" /> <span></span>
                            </label>
                          </div>
                          <div className="main-mail-star">
                            <i className="typcn typcn-star"></i>
                          </div>
                        </div>
                        <div className="flex-1 d-flex overflow-hidden position-relative">
                          <NavLink
                            to={`${import.meta.env.BASE_URL}app/mail/readmail/`}
                            className="stretched-link"
                          ></NavLink>
                          <div className="mg-e-10">
                            <span className="avatar-sm">
                              <img
                                alt=""
                                src={Allimages("User5")}
                                className="rounded-circle"
                              />
                            </span>
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <h6 className="mb-1 tx-16 tx-primary text-truncate">
                              Socrates Itumay
                            </h6>
                            <p className="mb-0 tx-13 tx-muted text-truncate">
                              Consetetur sanctus consetetur amet amet stet,.
                              Clita nonumy rebum et ipsum labore sed vero et
                              vero dolore. Ut kasd et accusam. Consetetur
                              sanctus consetetur amet amet stet,. Clita nonumy
                              rebum et ipsum labore sed vero et vero dolore. Ut
                              kasd et accusam.
                            </p>
                          </div>
                        </div>
                        <span className="tx-muted tx-12 min-w-fit-content ms-3 float-end mt-sm-0 mt-2">
                          Mar 28
                        </span>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-sm-flex align-items-start pos-relative">
                        <div className="me-3 d-flex align-items-start">
                          <div className="me-3">
                            <label className="ckbox m-0">
                              <input type="checkbox" /> <span></span>
                            </label>
                          </div>
                          <div className="main-mail-star active">
                            <i className="typcn typcn-star"></i>
                          </div>
                        </div>
                        <div className="flex-1 d-flex overflow-hidden position-relative">
                          <NavLink
                            to={`${import.meta.env.BASE_URL}app/mail/readmail/`}
                            className="stretched-link"
                          ></NavLink>
                          <div className="mg-e-10">
                            <span className="avatar-sm">
                              <img
                                alt=""
                                src={Allimages("User1")}
                                className="rounded-circle"
                              />
                            </span>
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <h6 className="mb-1 tx-16 tx-primary text-truncate">
                              Wiley Waites
                            </h6>
                            <p className="mb-0 tx-13 tx-muted text-truncate">
                              Lorem consetetur nonumy sed dolores eos dolores
                              dolores, eos dolores amet rebum et elitr est
                              elitr, sit et labore aliquyam.
                            </p>
                            <span className="tag tag-attachments-sm rounded-pill tag-outline-light mt-1 me-1">
                              <span className="me-1">
                                <i className="mdi mdi-file-image tx-16"></i>
                              </span>
                              Image01..._jpg
                            </span>
                            <span className="tag tag-attachments-sm rounded-pill tag-outline-light mt-1">
                              <span className="me-1">
                                <i className="mdi mdi-file-excel tx-16"></i>
                              </span>
                              Document.docx
                            </span>
                          </div>
                        </div>
                        <span className="tx-muted tx-12 min-w-fit-content ms-3 float-end mt-sm-0 mt-2">
                          Mar 27
                        </span>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-sm-flex align-items-start pos-relative">
                        <div className="me-3 d-flex align-items-start">
                          <div className="me-3">
                            <label className="ckbox m-0">
                              <input type="checkbox" /> <span></span>
                            </label>
                          </div>
                          <div className="main-mail-star">
                            <i className="typcn typcn-star"></i>
                          </div>
                        </div>
                        <div className="flex-1 d-flex overflow-hidden position-relative">
                          <NavLink
                            to={`${import.meta.env.BASE_URL}app/mail/readmail/`}
                            className="stretched-link"
                          ></NavLink>
                          <div className="mg-e-10">
                            <span className="avatar-sm rounded-circle bg-teal tx-15">
                              E
                            </span>
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <h6 className="mb-1 tx-16 tx-primary text-truncate">
                              Edgardo Huel
                            </h6>
                            <p className="mb-0 tx-13 tx-muted text-truncate">
                              Kasd voluptua labore et justo ea clita sit justo,
                              rebum eos elitr duo sit et.
                            </p>
                          </div>
                        </div>
                        <span className="tx-muted tx-12 min-w-fit-content ms-3 float-end mt-sm-0 mt-2">
                          Mar 20
                        </span>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-sm-flex align-items-start pos-relative">
                        <div className="me-3 d-flex align-items-start">
                          <div className="me-3">
                            <label className="ckbox m-0">
                              <input type="checkbox" /> <span></span>
                            </label>
                          </div>
                          <div className="main-mail-star">
                            <i className="typcn typcn-star"></i>
                          </div>
                        </div>
                        <div className="flex-1 d-flex overflow-hidden position-relative">
                          <NavLink
                            to={`${import.meta.env.BASE_URL}app/mail/readmail/`}
                            className="stretched-link"
                          ></NavLink>
                          <div className="mg-e-10">
                            <span className="avatar-sm">
                              <img
                                alt=""
                                src={Allimages("User4")}
                                className="rounded-circle"
                              />
                            </span>
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <h6 className="mb-1 tx-16 tx-primary text-truncate">
                              Willie Makit
                            </h6>
                            <p className="mb-0 tx-13 tx-muted text-truncate">
                              At clita no sed ea et et amet, sadipscing
                              consetetur sit et stet amet sit,. Lorem ipsum. Est
                              dolor eos voluptua kasd eos.
                            </p>
                            <span className="tag tag-attachments-sm rounded-pill tag-outline-light mt-1 me-1">
                              <span className="me-1">
                                <i className="mdi mdi-file-image tx-16"></i>
                              </span>
                              Image02..._jpg
                            </span>
                          </div>
                        </div>
                        <span className="tx-muted tx-12 min-w-fit-content ms-3 float-end mt-sm-0 mt-2">
                          Mar 12
                        </span>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-sm-flex align-items-start pos-relative">
                        <div className="me-3 d-flex align-items-start">
                          <div className="me-3">
                            <label className="ckbox m-0">
                              <input type="checkbox" /> <span></span>
                            </label>
                          </div>
                          <div className="main-mail-star active">
                            <i className="typcn typcn-star"></i>
                          </div>
                        </div>
                        <div className="flex-1 d-flex overflow-hidden position-relative">
                          <NavLink
                            to={`${import.meta.env.BASE_URL}app/mail/readmail/`}
                            className="stretched-link"
                          ></NavLink>
                          <div className="mg-e-10">
                            <span className="avatar-sm rounded-circle bg-secondary tx-15">
                              B
                            </span>
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <h6 className="mb-1 tx-16 tx-primary text-truncate">
                              Ben Dover
                            </h6>
                            <p className="mb-0 tx-13 tx-muted text-truncate">
                              Voluptua sed et eirmod at sea. At ea clita duo ut
                              diam erat voluptua amet et, takimata dolor
                              invidunt lorem justo.
                            </p>
                          </div>
                        </div>
                        <span className="tx-muted tx-12 min-w-fit-content ms-3 float-end mt-sm-0 mt-2">
                          Mar 01
                        </span>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-sm-flex align-items-start pos-relative">
                        <div className="me-3 d-flex align-items-start">
                          <div className="me-3">
                            <label className="ckbox m-0">
                              <input type="checkbox" /> <span></span>
                            </label>
                          </div>
                          <div className="main-mail-star active">
                            <i className="typcn typcn-star"></i>
                          </div>
                        </div>
                        <div className="flex-1 d-flex overflow-hidden position-relative">
                          <NavLink
                            to={`${import.meta.env.BASE_URL}app/mail/readmail/`}
                            className="stretched-link"
                          ></NavLink>
                          <div className="mg-e-10">
                            <span className="avatar-sm">
                              <img
                                alt=""
                                src={Allimages("User7")}
                                className="rounded-circle"
                              />
                            </span>
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <h6 className="mb-1 tx-16 tx-primary text-truncate">
                              Katherina Kat
                            </h6>
                            <p className="mb-0 tx-13 tx-muted text-truncate">
                              Sit justo ipsum accusam justo amet ut kasd justo
                              elitr, stet dolor no.
                            </p>
                            <span className="tag tag-attachments-sm rounded-pill tag-outline-light mt-1 me-1">
                              <span className="me-1">
                                <i className="mdi mdi-file-image tx-16"></i>
                              </span>
                              Image01..._jpg
                            </span>
                            <span className="tag tag-attachments-sm rounded-pill tag-outline-light mt-1 me-1">
                              <span className="me-1">
                                <i className="mdi mdi-file-excel tx-16"></i>
                              </span>
                              Document2.docx
                            </span>
                            <span className="tag tag-attachments-sm rounded-pill tag-outline-light mt-1">
                              <span className="me-1">
                                <i className="mdi mdi-file-excel tx-16"></i>
                              </span>
                              Document4.docx
                            </span>
                          </div>
                        </div>
                        <span className="tx-muted tx-12 min-w-fit-content ms-3 float-end mt-sm-0 mt-2">
                          Feb 14
                        </span>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-sm-flex align-items-start pos-relative">
                        <div className="me-3 d-flex align-items-start">
                          <div className="me-3">
                            <label className="ckbox m-0">
                              <input type="checkbox" /> <span></span>
                            </label>
                          </div>
                          <div className="main-mail-star">
                            <i className="typcn typcn-star"></i>
                          </div>
                        </div>
                        <div className="flex-1 d-flex overflow-hidden position-relative">
                          <NavLink
                            to={`${import.meta.env.BASE_URL}app/mail/readmail/`}
                            className="stretched-link"
                          ></NavLink>
                          <div className="mg-e-10">
                            <span className="avatar-sm">
                              <img
                                alt=""
                                src={Allimages("User8")}
                                className="rounded-circle"
                              />
                            </span>
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <h6 className="mb-1 tx-16 tx-primary text-truncate">
                              Jessie Jane
                            </h6>
                            <p className="mb-0 tx-13 tx-muted text-truncate">
                              Diam et eirmod diam accusam ipsum gubergren
                              gubergren, ipsum ea sed magna magna vero sea.
                            </p>
                          </div>
                        </div>
                        <span className="tx-muted tx-12 min-w-fit-content ms-3 float-end mt-sm-0 mt-2">
                          Feb 11
                        </span>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-sm-flex align-items-start pos-relative">
                        <div className="me-3 d-flex align-items-start">
                          <div className="me-3">
                            <label className="ckbox m-0">
                              <input type="checkbox" /> <span></span>
                            </label>
                          </div>
                          <div className="main-mail-star active">
                            <i className="typcn typcn-star"></i>
                          </div>
                        </div>
                        <div className="flex-1 d-flex overflow-hidden position-relative">
                          <NavLink
                            to={`${import.meta.env.BASE_URL}app/mail/readmail/`}
                            className="stretched-link"
                          ></NavLink>
                          <div className="mg-e-10">
                            <span className="avatar-sm rounded-circle bg-green tx-15">
                              L
                            </span>
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <h6 className="mb-1 tx-16 tx-primary text-truncate">
                              Lupe Lamora
                            </h6>
                            <p className="mb-0 tx-13 tx-muted text-truncate">
                              Sed no kasd dolor rebum sed sed eirmod sit et
                              vero, stet ea amet labore dolores erat dolores.
                            </p>
                            <span className="tag tag-attachments-sm rounded-pill tag-outline-light mt-1 me-1">
                              <span className="me-1">
                                <i className="mdi mdi-file-image tx-16"></i>
                              </span>
                              Image02..._jpg
                            </span>
                          </div>
                        </div>
                        <span className="tx-muted tx-12 min-w-fit-content ms-3 float-end mt-sm-0 mt-2">
                          Feb 01
                        </span>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-sm-flex align-items-start pos-relative">
                        <div className="me-3 d-flex align-items-start">
                          <div className="me-3">
                            <label className="ckbox m-0">
                              <input type="checkbox" /> <span></span>
                            </label>
                          </div>
                          <div className="main-mail-star">
                            <i className="typcn typcn-star"></i>
                          </div>
                        </div>
                        <div className="flex-1 d-flex overflow-hidden position-relative">
                          <NavLink
                            to={`${import.meta.env.BASE_URL}app/mail/readmail/`}
                            className="stretched-link"
                          ></NavLink>
                          <div className="mg-e-10">
                            <span className="avatar-sm">
                              <img
                                alt=""
                                src={Allimages("User12")}
                                className="rounded-circle"
                              />
                            </span>
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <h6 className="mb-1 tx-16 tx-primary text-truncate">
                              Michael Sourya
                            </h6>
                            <p className="mb-0 tx-13 tx-muted text-truncate">
                              Sit gubergren ipsum vero sit ut consetetur ea
                              accusam sit lorem. Labore elitr stet sanctus no
                              elitr amet. Vero ipsum.
                            </p>
                          </div>
                        </div>
                        <span className="tx-muted tx-12 min-w-fit-content ms-3 float-end mt-sm-0 mt-2">
                          Jan 31
                        </span>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </div>

              <Pagination className="pagination justify-content-end">
                <Pagination.First />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Last />
              </Pagination>
            </div>
          </div>
        </div>
      </Row>
    </Fragment>
  );
}

export default Inbox;
