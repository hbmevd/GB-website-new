import { Fragment } from "react";
import Allimages from "../../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../../components/common/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";
import { Gallerylist } from "./data/gallerydata";

function Blogdetails() {
  return (
    <Fragment>
      <Pageheader
        titles={"BLOGDETAILS"}
        active={"Blogdetails"}
        Subtite={"Ecommerce"}
      />

      <Row>
        <Col xxl={9} xl={12} lg={12} md={12}>
          <Card className="card overflow-hidden">
            <Card.Body>
              <div className="pd-x-0 pd-sm-x-80">
                <h2 className="mb-1">Inside Nature</h2>
                <p className="tx-muted mb-0">
                  Accusam diam ut no labore est sed invidunt kasd tempor
                  accusam. Eos amet takimata dolores no, sit stet ipsum vero.
                  Dolore tempor dolor vero invidunt lorem stet. Ipsum at duo
                  erat aliquyam sadipscing, elitr lorem sed voluptua vero dolore
                  sit.
                </p>
              </div>
              <div className="my-4">
                <img
                  src={Allimages("Photos28")}
                  alt="img"
                  className="cover-image radius-4 w-100"
                />
              </div>
              <div className="pd-x-0 pd-sm-x-80">
                <div className="d-sm-flex d-block align-items-center tx-muted mb-3">
                  <div className="d-flex align-items-center me-4 mb-3 mb-sm-0">
                    <span className="avatar-sm">
                      <img
                        src={Allimages("User6")}
                        alt="avatar"
                        className="rounded-circle"
                      />
                    </span>
                    <span className="ms-2 tx-14">
                      by
                      <a  className="tx-inverse tx-italic">
                        Kristie Morgan
                      </a>
                    </span>
                  </div>
                  <span>
                    <i className="fe fe-calendar me-2 tx-14 d-inline-block"></i>
                    17-03-2022
                  </span>
                </div>
                <div className="mb-4">
                  <h5 className="font-weight-semibold mb-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Elitr vero et at eirmod labore et clita invidunt
                    lorem.Dolores magna rebum gubergren justo.
                  </h5>
                  <p className=" tx-muted">
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure.
                  </p>
                  <p className="mb-0 tx-muted">
                    but because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is there anyone who loves or pursues or
                    desires to obtain pain of itself, because it is pain, but
                    because occasionally circumstances occur in which toil and
                    pain can procure him some great pleasure. To take a trivial
                    example.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <div className="card-header">
              <div className="card-title">Comments</div>
            </div>
            <Card.Body>
              <div className="d-block d-sm-flex pb-2 border-bottom-dashed">
                <img
                  alt="avatar"
                  className="avatar mg-b-10 mg-sm-b-0 rounded-circle"
                  src={Allimages("User4")}
                />
                <div className="mg-sm-s-10 flex-1">
                  <h6 className="mg-b-5 font-weight-semibold">Joanne Scott</h6>
                  <p className="mb-0 tx-12 tx-muted">
                    Amet sadipscing et et gubergren sit, at diam ipsum at duo
                    sanctus.
                  </p>
                  <div className="mt-1">
                    <div className="flex-between">
                      <div className="btn-list">
                        <a
                          
                          className="btn btn-sm btn-primary-light btn-rounded"
                        >
                          <i className="fe fe-corner-up-left me-1 tx-13 d-inline-block"></i>
                          Reply
                        </a>
                        <a
                          
                          className="btn btn-sm btn-warning-light tx-warning btn-rounded"
                        >
                          <i className="fe fe-alert-triangle me-1 tx-13 d-inline-block"></i>
                          Report
                        </a>
                      </div>
                      <div className="btn-list d-flex align-items-center">
                        <a
                          
                          className="p-2 tx-inverse"
                          data-bs-toggle="tooltip"
                          title="helpful"
                        >
                          <i className="fe fe-thumbs-up"></i>
                        </a>
                        <a
                          
                          className="p-2 tx-inverse"
                          data-bs-toggle="tooltip"
                          title="not helpful"
                        >
                          <i className="fe fe-thumbs-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block d-sm-flex pb-2 border-bottom-dashed mt-3">
                <img
                  alt="avatar"
                  className="avatar mg-b-10 mg-sm-b-0 rounded-circle"
                  src={Allimages("User6")}
                />
                <div className="mg-sm-s-10 flex-1">
                  <h6 className="mg-b-5 font-weight-semibold">Julia Max</h6>
                  <p className="mb-0 tx-12 tx-muted">
                    Labore sit no tempor rebum sanctus sea aliquyam. Amet
                    sadipscing et et gubergren sit, at diam ipsum at duo
                    sanctus.
                  </p>
                  <div className="mt-1">
                    <div className="flex-between">
                      <div className="btn-list">
                        <a
                          
                          className="btn btn-sm btn-primary-light btn-rounded"
                        >
                          <i className="fe fe-corner-up-left me-1 tx-13 d-inline-block"></i>
                          Reply
                        </a>
                        <a
                          
                          className="btn btn-sm btn-warning-light tx-warning btn-rounded"
                        >
                          <i className="fe fe-alert-triangle me-1 tx-13 d-inline-block"></i>
                          Report
                        </a>
                      </div>
                      <div className="btn-list d-flex align-items-center">
                        <a
                          
                          className="p-2 tx-inverse"
                          data-bs-toggle="tooltip"
                          title="helpful"
                        >
                          <i className="fe fe-thumbs-up"></i>
                        </a>
                        <a
                          
                          className="p-2 tx-inverse"
                          data-bs-toggle="tooltip"
                          title="not helpful"
                        >
                          <i className="fe fe-thumbs-down"></i>
                        </a>
                      </div>
                    </div>
                    <div className="d-block d-sm-flex mg-t-10">
                      <img
                        alt="avatar"
                        className="avatar mg-b-10 mg-sm-b-0 rounded-circle"
                        src={Allimages("User11")}
                      />
                      <div className="mg-sm-s-10 flex-1">
                        <h6 className="mg-b-5 font-weight-semibold">
                          Socret Mals
                          <span
                            className="tx-14 ms-0"
                            data-bs-toggle="tooltip"
                            title="verified"
                          >
                            <i className="fe fe-check-circle tx-success tx-12 mx-1"></i>
                          </span>
                        </h6>
                        <p className="mb-0 tx-12 tx-muted">
                          Et lorem sit vero sit. Vero magna dolores dolor duo.
                          Eirmod sea diam.
                        </p>
                        <div className="mt-1">
                          <div className="flex-between">
                            <div className="btn-list">
                              <a
                                
                                className="btn btn-sm btn-primary-light btn-rounded"
                              >
                                <i className="fe fe-corner-up-left me-1 tx-13 d-inline-block"></i>
                                Reply
                              </a>
                              <a
                                
                                className="btn btn-sm btn-warning-light tx-warning btn-rounded"
                              >
                                <i className="fe fe-alert-triangle me-1 tx-13 d-inline-block"></i>
                                Report
                              </a>
                            </div>
                            <div className="btn-list d-flex align-items-center">
                              <a
                                
                                className="p-2 tx-inverse"
                                data-bs-toggle="tooltip"
                                title="helpful"
                              >
                                <i className="fe fe-thumbs-up"></i>
                              </a>
                              <a
                                
                                className="p-2 tx-inverse"
                                data-bs-toggle="tooltip"
                                title="not helpful"
                              >
                                <i className="fe fe-thumbs-down"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block d-sm-flex mt-3">
                <img
                  alt="avatar"
                  className="avatar mg-b-10 mg-sm-b-0 rounded-circle"
                  src={Allimages("User8")}
                />
                <div className="mg-sm-s-10 flex-1">
                  <h6 className="mg-b-5 font-weight-semibold">Samatha Fae</h6>
                  <p className="mb-0 tx-12 tx-muted">
                    Dolor sadipscing ut rebum dolores labore voluptua. Et erat
                    dolor.
                  </p>
                  <div className="mt-1">
                    <div className="flex-between">
                      <div className="btn-list">
                        <a
                          
                          className="btn btn-sm btn-primary-light btn-rounded"
                        >
                          <i className="fe fe-corner-up-left me-1 tx-13 d-inline-block"></i>
                          Reply
                        </a>
                        <a
                          
                          className="btn btn-sm btn-warning-light tx-warning btn-rounded"
                        >
                          <i className="fe fe-alert-triangle me-1 tx-13 d-inline-block"></i>
                          Report
                        </a>
                      </div>
                      <div className="btn-list d-flex align-items-center">
                        <a
                          
                          className="p-2 tx-inverse"
                          data-bs-toggle="tooltip"
                          title="helpful"
                        >
                          <i className="fe fe-thumbs-up"></i>
                        </a>
                        <a
                          
                          className="p-2 tx-inverse"
                          data-bs-toggle="tooltip"
                          title="not helpful"
                        >
                          <i className="fe fe-thumbs-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <div className="card-header">
              <div className="card-title">Add a Comment</div>
            </div>
            <Card.Body>
              <form action="#">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="example-textarea-input"
                    placeholder="Write Review"
                  ></textarea>
                </div>
                <a  className="btn btn-primary">
                  Send Reply
                </a>
              </form>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={12} lg={12} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Gallery</div>
            </div>
            <Card.Body>
              <div className="text-center demo-gallery">
                <Gallerylist />
              </div>
            </Card.Body>
          </Card>
          <Card>
            <div className="card-header">
              <div className="card-title">About Author</div>
            </div>
            <Card.Body>
              <div className="d-flex flex-wrap">
                <div className="me-2">
                  <span className="avatar-xxl">
                    <img
                      src={Allimages("User6")}
                      alt="avatar"
                      className="radius-4"
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <a
                    
                    className="btn btn-def btn-sm tx-primary float-end"
                    data-bs-toggle="tooltip"
                    title="unfollow"
                  >
                    <i className="fe fe-cast"></i>
                  </a>
                  <h5 className="font-weight-semibold mb-0">Kristie Morgan</h5>
                  <span className="tx-muted tx-12">Novelist</span>
                  <div className="mt-2 d-flex align-items-center">
                    <div className="me-3">
                      <p className="mb-1 tx-muted font-weight-semibold">
                        Articles
                      </p>
                      <span className="mb-1 font-weight-semibold">500</span>
                    </div>
                    <div>
                      <p className="mb-1 tx-muted font-weight-semibold">
                        Followers
                      </p>
                      <span className="mb-1 font-weight-semibold">39.3K</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="mb-1 tx-muted">
                  Et nonumy aliquyam stet clita sanctus lorem, consetetur rebum
                  rebum vero sit eirmod duo magna, invidunt duo dolor ea at
                  takimata ut.
                </p>
                <p className="tx-muted mb-0">
                  Sed eirmod accusam et sed ea sit est, lorem ipsum eos,. Elitr
                  labore erat elitr dolor.
                </p>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <div className="card-header">
              <div className="card-title">Related Articles</div>
            </div>
            <Card.Body>
              <ul className="list-unstyled mb-0">
                <li className="mb-4">
                  <h5 className="font-weight-semibold">
                    10 Ways to Immediately Start Selling Products!
                  </h5>
                  <p className="mb-0 tx-muted">
                    Eos lorem eos erat clita diam sea sed et nonumy, et ut sit
                    vero dolor gubergren ipsum magna at. Amet.
                  </p>
                  <a  className="btn btn-outline-primary btn-sm mt-2">
                    Read Article
                  </a>
                </li>
                <li className="mb-4">
                  <h5 className="font-weight-semibold">
                    7 Interesting Facts Everyone Must Know about Healty Diet
                    Plans.
                  </h5>
                  <p className="mb-0 tx-muted">
                    Eos lorem eos erat clita diam sea sed et nonumy, et ut sit
                    vero dolor gubergren ipsum magna at. Amet.
                  </p>
                  <a  className="btn btn-outline-primary btn-sm mt-2">
                    Read Article
                  </a>
                </li>
                <li className="mb-0">
                  <h5 className="font-weight-semibold">
                    10 Ways to Immediately Start Selling Products!
                  </h5>
                  <p className="mb-0 tx-muted">
                    Eos lorem eos erat clita diam sea sed et nonumy, et ut sit
                    vero dolor gubergren ipsum magna at. Amet.
                  </p>
                  <a  className="btn btn-outline-primary btn-sm mt-2">
                    Read Article
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
          <Card>
            <div className="card-header">
              <div className="card-title">Categories</div>
            </div>
            <Card.Body>
              <div className="tags">
                <a  className="tag rounded-pill">
                  Life style
                </a>
                <a  className="tag rounded-pill">
                  Health
                </a>
                <a  className="tag rounded-pill">
                  Tourism
                </a>
                <a  className="tag rounded-pill">
                  Web designing
                </a>
                <a  className="tag rounded-pill">
                  Medical
                </a>
                <a  className="tag rounded-pill">
                  Hotels
                </a>
                <a  className="tag rounded-pill">
                  Real estate
                </a>
                <a  className="tag rounded-pill">
                  Business
                </a>
                <a  className="tag rounded-pill">
                  Shopping
                </a>
                <a  className="tag rounded-pill">
                  Marketing
                </a>
                <a  className="tag rounded-pill">
                  Housing
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Blogdetails;
