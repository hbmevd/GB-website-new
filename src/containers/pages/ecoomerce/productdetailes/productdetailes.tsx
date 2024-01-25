import { Fragment, useState } from "react";
import watch2 from "../../../../assets/img/ecommerce/38.png";
import watch3 from "../../../../assets/img/ecommerce/39.png";
import watch4 from "../../../../assets/img/ecommerce/40.png";
import watch5 from "../../../../assets/img/ecommerce/41.png";
import Allimages from "../../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../../components/common/pageheader/pageheader";
import { Accordion, Card, Col, Row, } from "react-bootstrap";
import { Link } from "react-router-dom";
import Quantity from "./data/quantity";

function Productdetailes() {
  let [img, setimg] = useState(watch4);

  let click = (id: string) => {
    if (id === "watch3") {
      setimg(watch3);

    } else if (id === "watch2") {
      setimg(watch2);
    } else if (id === "watch4") {
      setimg(watch4);
    } else if (id === "watch5") {
      setimg(watch5);
    }
  };
  return (
    <Fragment>
      <Pageheader
        titles={"PRODUCT DETAILS"}
        active={"Product details"}
        Subtite={"Ecommerce"}
      />

      <Row className=" row-sm">
        <Col xl={12}>
          <Card>
            <Card.Body>
              <Row className="row-sm ">
                <Col xl={6} lg={12} md={12}>
                  <Row>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-12 order-md-1 order-2">
                      <div className="clearfix carousel-slider">
                        <div className="carousel slide">
                          <div className="carousel-inner">
                            <ul className="list-unstyled carousel-item active d-md-block d-flex">
                              <li className="thumb m-2 border rounded-2">
                                <img
                                  src={Allimages("Ecomerce38")}
                                  onClick={() => {
                                    click("watch2");
                                  }}
                                />
                              </li>
                              <li
                                data-bs-slide-to="1"
                                className="thumb m-2 border rounded-2"
                              >
                                <img
                                  src={Allimages("Ecomerce39")}
                                  alt="img"
                                  onClick={() => {
                                    click("watch3");
                                  }}
                                />
                              </li>
                              <li
                                data-bs-slide-to="2"
                                className="thumb m-2 border rounded-2"
                              >
                                <img
                                  src={Allimages("Ecomerce40")}
                                  alt="img"
                                  onClick={() => {
                                    click("watch4");
                                  }}
                                />
                              </li>
                              <li
                                data-bs-slide-to="3"
                                className="thumb m-2 border rounded-2"
                              >
                                <img
                                  src={Allimages("Ecomerce41")}
                                  alt="img"
                                  onClick={() => {
                                    click("watch5");
                                  }}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Col xl={10} lg={9} md={9} sm={12} className="order-md-2 order-1">
                      <div className="product-carousel">
                        <div
                          id="carousel"
                          className="carousel slide"
                          data-bs-ride="false"
                        >
                          <div className="carousel-inner border">
                            <div>
                              <img
                                src={img}
                                alt="imgdddd"
                                className="img-fluid mx-auto d-block"
                              />
                            </div>
                          </div>
                          <div className="text-center mt-4 mb-4 btn-list">
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/cart/`}
                              className="btn ripple btn-primary"
                            >
                              <i className="fe fe-shopping-cart"> </i> Add to
                              cart
                            </Link>
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/checkout/`}
                              className="btn ripple btn-secondary"
                            >
                              <i className="fe fe-credit-card"> </i> Buy Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xl={6} lg={12} md={12}>
                  <div className="mt-4 mt-xl-0">
                    <h3 className="mb-1 tx-capitalize">
                      Women's Party Wear Frock
                    </h3>

                    <p className="tx-muted tx-12">Tempor</p>

                    <div className="mb-3">
                      <p className="h3 tx-26 mb-0">$253</p>
                      <span className="tx-13 tx-muted">
                        No cost EMI available.
                        <a  className="tx-primary tx-13">
                          see all EMI options
                        </a>
                      </span>
                    </div>

                    <div className="d-sm-flex align-items-center mb-3">
                      <span className="h6 mb-0 me-2">Size:</span>
                      <div className="me-4 d-sm-flex align-items-center mg-sm-t-0 mg-t-3 mg-sm-b-0-f mg-b-5">
                        <span className="d-flex mb-3 mb-sm-0 tx-15">
                          <label className="rdiobox mb-0">
                            <input name="rdio" type="radio" defaultChecked />
                            <span>S</span>
                          </label>
                        </span>
                        <span className="d-flex ms-sm-3 m-0 mb-3 mb-sm-0 tx-15">
                          <label className="rdiobox mb-0">
                            <input name="rdio" type="radio" /> <span>M</span>
                          </label>
                        </span>
                        <span className="d-flex ms-sm-3 m-0 mb-3 mb-sm-0 tx-15">
                          <label className="rdiobox mb-0">
                            <input name="rdio" type="radio" /> <span>L</span>
                          </label>
                        </span>
                        <span className="d-flex ms-sm-3 m-0 mb-3 mb-sm-0 tx-15">
                          <label className="rdiobox mb-0">
                            <input name="rdio" type="radio" /> <span>XL</span>
                          </label>
                        </span>
                        <span className="d-flex ms-sm-3 m-0 mb-3 mb-sm-0 tx-15">
                          <label className="rdiobox mb-0">
                            <input name="rdio" type="radio" /> <span>XXL</span>
                          </label>
                        </span>
                      </div>
                      <a  className="tx-primary tx-13">
                        view chart
                      </a>
                    </div>

                    <div className="d-sm-flex align-items-center mb-3">
                      <span className="h6 mb-0 me-2">Quantity:</span>
                      <div
                        className="handle-counter justify-content-start mg-sm-t-0 mg-t-3"
                        id="handleCounter4"
                      >
                       
                        <Quantity />
                      </div>
                    </div>

                    <div className="mb-3">
                      <Link
                        to={`${import.meta.env.BASE_URL}pages/e-commerce/cart/`}
                        className="btn btn-primary tx-16"
                      >
                        <i className="fe fe-shopping-cart me-2 tx-14 d-inline-block"></i>
                        Add to cart
                      </Link>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex flex-wrap align-items-center mb-2">
                        <div className="me-2">
                          <span className="avatar-sm br-5 bg-primary-transparent">
                            <i className="fe fe-box tx-primary"></i>
                          </span>
                        </div>
                        <span className="me-4">
                          Free delivery available to this product.
                        </span>
                        <span>
                          <a  className="tx-primary tx-13">
                            <i className="fe fe-edit-2 me-1 tx-12 d-inline-block"></i>
                            change address
                          </a>
                        </span>
                      </div>
                      <div className="d-flex flex-wrap align-items-center mb-2">
                        <div className="me-2">
                          <span className="avatar-sm br-5 bg-warning-transparent">
                            <i className="fe fe-rotate-ccw tx-warning"></i>
                          </span>
                        </div>
                        <span className="me-4">10 Days return policy.</span>
                        <span>
                          <a  className="tx-primary tx-13">
                            know more
                          </a>
                        </span>
                      </div>
                      <div className="d-flex flex-wrap align-items-center">
                        <div className="me-2">
                          <span className="avatar-sm br-5 bg-teal-transparent">
                            <i className="fe fe-check-circle tx-teal"></i>
                          </span>
                        </div>
                        <span className="me-4">1 year warranty available.</span>
                        <span>
                          <a  className="tx-primary tx-13">
                            terms & conditions
                          </a>
                        </span>
                      </div>
                    </div>

                    <div className="colors d-flex me-2">
                      <span className="mt-2">colors:</span>
                      <div className="d-flex flex-wrap ms-4">
                        <div className="me-2">
                          <label className="colorinput">
                            <input
                              name="color"
                              type="radio"
                              className="colorinput-input"
                            />
                            <span className="colorinput-color bg-dark"></span>
                          </label>
                        </div>
                        <div className="me-2">
                          <label className="colorinput">
                            <input
                              name="color"
                              type="radio"
                              className="colorinput-input"
                            />
                            <span className="colorinput-color bg-secondary"></span>
                          </label>
                        </div>
                        <div className="me-2">
                          <label className="colorinput">
                            <input
                              name="color"
                              type="radio"
                              className="colorinput-input"
                            />
                            <span className="colorinput-color bg-danger"></span>
                          </label>
                        </div>
                        <div className="me-2">
                          <label className="colorinput">
                            <input
                              name="color"
                              type="radio"
                              className="colorinput-input"
                            />
                            <span className="colorinput-color bg-pink"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card>
            <Card.Body>
              <div className="mb-4">
                <h5>Description:</h5>
                <p className="mb-2 tx-muted">
                  Invidunt tempor stet no ipsum et, aliquyam at takimata tempor
                  kasd at sed sed magna justo, sanctus tempor amet ipsum elitr
                  sed takimata et. Voluptua vero invidunt sed. Eirmod lorem et
                  dolores dolor takimata, ut invidunt amet eos et amet. Ut
                  dolore clita erat consetetur et dolore ut.. Diam sadipscing
                  kasd stet dolores takimata. Eos takimata et gubergren aliquyam
                  et est. Ea kasd dolor et sea et eirmod. Ipsum ea clita at
                  labore sadipscing no amet magna magna, dolor lorem accusam
                  dolor gubergren eos at tempor lorem. Consetetur et accusam et
                  nonumy sit, clita ipsum magna eos vero.
                </p>
                <p className="mb-0 tx-muted">
                  Dolore dolores et rebum diam tempor eirmod takimata accusam
                  elitr et. Clita et nonumy sadipscing est eirmod lorem kasd
                  sadipscing,.
                </p>
              </div>
              <div className="mb-4">
                <h5>Features:</h5>
                <Row>
                  <Col md={6} lg={4}>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2 tx-muted d-flex">
                        <span>
                          <i className="fa fa-check me-2 tx-12 tx-primary"></i>
                        </span>
                        <span>
                          Sed lorem et ipsum sed no rebum, eos voluptua clita
                          eos lorem justo et consetetur..
                        </span>
                      </li>
                      <li className="mb-2 tx-muted d-flex">
                        <span>
                          <i className="fa fa-check me-2 tx-12 tx-primary"></i>
                        </span>
                        <span>Kasd at ipsum et sed duo elitr at et et,.</span>
                      </li>
                      <li className="mb-2 tx-muted d-flex">
                        <span>
                          <i className="fa fa-check me-2 tx-12 tx-primary"></i>
                        </span>
                        <span>
                          Ea sadipscing takimata elitr ipsum dolor ea at tempor
                          amet, erat sanctus sed gubergren sed,.
                        </span>
                      </li>
                    </ul>
                  </Col>
                  <Col md={6} lg={4}>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2 tx-muted d-flex">
                        <span>
                          <i className="fa fa-check me-2 tx-12 tx-primary"></i>
                        </span>
                        <span>
                          Accusam tempor tempor erat dolor sit lorem elitr
                          elitr. Sadipscing amet lorem sit ipsum, ipsum ipsum
                          dolor stet amet stet diam consetetur..
                        </span>
                      </li>
                      <li className="mb-2 tx-muted d-flex">
                        <span>
                          <i className="fa fa-check me-2 tx-12 tx-primary"></i>
                        </span>
                        <span>Diam sea amet sit dolor diam. Diam et eos.</span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="mb-0">
                <h5>Specifications:</h5>
                <Row>
                  <div className="col-lg-8 col-md-12">
                    <div className="table-responsive border radius-4">
                      <div className="table-responsive border radius-4">
                        <table className="table border-0 mb-0">
                          <tbody>
                            <tr>
                              <td className="fw-semibold border-top-0">
                                Dimensions
                              </td>
                              <td className="border-top-0"> 33 x 22 x 3 cm</td>
                            </tr>
                            <tr>
                              <td className="fw-semibold">Manufacturer</td>
                              <td>Abidas Company</td>
                            </tr>
                            <tr>
                              <td className="fw-semibold">Item Number</td>
                              <td>11003979FAB</td>
                            </tr>
                            <tr>
                              <td className="fw-semibold">Water Resistant</td>
                              <td>No</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <div className="card-title">
              Ratings and Reviews
              </div>
            </Card.Header>
            <Card.Body>
              <div className="d-block d-sm-flex pb-2 border-bottom-dashed">
                <img
                  alt="avatar"
                  className="avatar mg-b-10 mg-sm-b-0 rounded-circle"
                  src={Allimages("User4")}
                />
                <div className="mg-sm-s-10 flex-1">
                  <h6 className="mg-b-5 font-weight-semibold">Joanne Scott</h6>
                  <p className="mb-0 tx-12 tx-muted mx-wd-md-65p">
                    Amet sadipscing et et gubergren sit, at diam ipsum at duo
                    sanctus.
                  </p>
                  <div className="mt-1">
                    <div className="d-flex align-items-center">
                      <div className="tx-warning">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                      <div className="btn-list d-flex align-items-center ms-4">
                        <div className="p-2">
                          <a
                            
                            className="tx-inverse"
                            data-bs-toggle="tooltip"
                            title="helpful"
                            aria-label="helpful"
                          >
                            <i className="fe fe-thumbs-up me-1"></i>
                          </a>
                          <span className="tx-muted tx-12">128</span>
                        </div>
                        <div className="p-2">
                          <a
                            
                            className="tx-inverse"
                            data-bs-toggle="tooltip"
                            title="not helpful"
                            aria-label="not helpful"
                          >
                            <i className="fe fe-thumbs-down me-1"></i>
                          </a>
                          <span className="tx-muted tx-12">25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block d-sm-flex pb-2 mt-3 border-bottom-dashed">
                <img
                  alt="avatar"
                  className="avatar mg-b-10 mg-sm-b-0 rounded-circle"
                  src={Allimages("User7")}
                />
                <div className="mg-sm-s-10 flex-1">
                  <h6 className="mg-b-5 font-weight-semibold">Elena Gell</h6>
                  <p className="mb-0 tx-12 tx-muted mx-wd-md-65p">
                    Invidunt ipsum amet sit takimata justo. Ipsum dolore ut
                    dolor invidunt dolor, gubergren invidunt labore ipsum dolor
                    justo ipsum justo accusam. Labore voluptua labore invidunt
                    kasd duo ipsum stet. No.
                  </p>
                  <div className="mt-1">
                    <div className="d-flex align-items-center">
                      <div className="tx-warning">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star tx-gray-400"></i>
                        <i className="bx bxs-star tx-gray-400"></i>
                      </div>
                      <div className="btn-list d-flex align-items-center ms-4">
                        <div className="p-2">
                          <a
                            
                            className="tx-inverse"
                            data-bs-toggle="tooltip"
                            title="helpful"
                            aria-label="helpful"
                          >
                            <i className="fe fe-thumbs-up me-1"></i>
                          </a>
                          <span className="tx-muted tx-12">52</span>
                        </div>
                        <div className="p-2">
                          <a
                            
                            className="tx-inverse"
                            data-bs-toggle="tooltip"
                            title="not helpful"
                            aria-label="not helpful"
                          >
                            <i className="fe fe-thumbs-down me-1"></i>
                          </a>
                          <span className="tx-muted tx-12">13</span>
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
                  src={Allimages("User12")}
                />
                <div className="mg-sm-s-10 flex-1">
                  <h6 className="mg-b-5 font-weight-semibold">Albert Ion</h6>
                  <p className="mb-0 tx-12 tx-muted mx-wd-md-65p">
                    Eirmod sadipscing invidunt sadipscing at labore voluptua
                    amet consetetur sed eos. Amet stet ipsum ut sed kasd erat
                    aliquyam et. Duo.
                  </p>
                  <div className="mt-1">
                    <div className="d-flex align-items-center">
                      <div className="tx-warning">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star tx-gray-400"></i>
                      </div>
                      <div className="btn-list d-flex align-items-center ms-4">
                        <div className="p-2">
                          <a
                            
                            className="tx-inverse"
                            data-bs-toggle="tooltip"
                            title="helpful"
                            aria-label="helpful"
                          >
                            <i className="fe fe-thumbs-up me-1"></i>
                          </a>
                          <span className="tx-muted tx-12">12</span>
                        </div>
                        <div className="p-2">
                          <a
                            
                            className="tx-inverse"
                            data-bs-toggle="tooltip"
                            title="not helpful"
                            aria-label="not helpful"
                          >
                            <i className="fe fe-thumbs-down me-1"></i>
                          </a>
                          <span className="tx-muted tx-12">35</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
            <div className="card-title">
           FAQ's
              </div>
            </Card.Header>
            <Card.Body>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Does this have a warranty?
                  </Accordion.Header>
                  <Accordion.Body className=" tx-13 tx-muted">
                    Yes, Dolore sed lorem at eirmod gubergren dolor lorem diam
                    ipsum sed, amet gubergren rebum dolor sanctus amet sit est
                    dolore,.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Is this returnable?</Accordion.Header>
                  <Accordion.Body className=" tx-13 tx-muted">
                    Yes, Lorem kasd at clita diam amet tempor sadipscing, diam
                    takimata ut dolor justo, at sed consetetur labore dolore et
                    at invidunt, stet at at sed eirmod, ea vero et ipsum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How to use my warranty card?
                  </Accordion.Header>
                  <Accordion.Body className=" tx-13 tx-muted">
                    Erat ipsum et ut justo aliquyam lorem lorem sed, vero magna
                    dolores et voluptua lorem dolore, sed erat at clita stet
                    sed, et sit lorem voluptua ipsum labore elitr diam vero
                    justo. Amet et diam.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What happens if i ordered this product mistakenly
                  </Accordion.Header>
                  <Accordion.Body className=" tx-13 tx-muted">
                    Takimata voluptua ut dolor amet gubergren et. Erat rebum ea
                    rebum est est lorem amet aliquyam, eos amet consetetur
                    dolor.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={12} lg={12} md={12} sm={12}>
          <Card>
            <Card.Header>
              <div className="card-title">
               Write a Review
              </div>
            </Card.Header>
            <Card.Body>
              <form>
                <div className="mb-3">
                  <Row>
                    <div className="form-group mb-0 col-md-6">
                      <label htmlFor="name" className="form-label">
                        Your Name
                      </label>
                      <input
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        type="text"
                      />
                    </div>
                    <div className="form-group mb-0 col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                        type="text"
                      />
                    </div>
                  </Row>
                </div>
                <span className="star-rating">
                  <a >
                    <i className="icofont-ui-rating icofont-2x"></i>
                  </a>
                  <a >
                    <i className="icofont-ui-rating icofont-2x"></i>
                  </a>
                  <a >
                    <i className="icofont-ui-rating icofont-2x"></i>
                  </a>
                  <a >
                    <i className="icofont-ui-rating icofont-2x"></i>
                  </a>
                  <a >
                    <i className="icofont-ui-rating icofont-2x"></i>
                  </a>
                </span>
                <div className="form-group">
                  <label htmlFor="comment" className="form-label">
                    Comment
                  </label>
                  <textarea className="form-control" id="comment"></textarea>
                </div>
                <div className="form-group mb-0">
                  <button className="btn btn-primary" type="button">
                    Submit
                  </button>
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={12}>
          <h5 className="tx-muted mb-3">Related Products</h5>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="card overflow-hidden product-card">
            <Card.Body className="card-body p-0">
              <div className="mask-container">
                <img
                  src={Allimages("Ecomerce1")}
                  alt="img"
                  className="img-fluid w-100"
                />
                <div className="product-options pos-absolute a-center">
                  <div className="btn-list d-flex align-items-center">
                    <Link
                      to={`${import.meta.env.BASE_URL
                        }pages/e-commerce/wishlist`}
                      className="btn btn-icon bg-danger"
                      data-bs-toggle="tooltip"
                      title="Add to wishlist"
                    >
                      <span className="tx-white">
                        <i className="fa fa-heart"></i>
                      </span>
                    </Link>
                    <Link
                      to={`${import.meta.env.BASE_URL}pages/e-commerce/cart/`}
                      className="btn btn-icon bg-success"
                      data-bs-toggle="tooltip"
                      title="Add to cart"
                    >
                      <span className="tx-white">
                        <i className="fa fa-shopping-cart"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <span className="badge badge-primary badge-md pos-absolute t-15 r-15 product-badge">
                  20% off
                </span>
              </div>
              <div className="p-4 tx-center pos-relative">
                <a  className="masked-link"></a>
                <h5 className="mb-2 tx-capitalize">Black 5'G Mobile Phone</h5>
                <span className="tx-15 ms-auto mb-2">
                  <i className="ion ion-md-star text-warning"></i>
                  <i className="ion ion-md-star text-warning mx-1"></i>
                  <i className="ion ion-md-star text-warning"></i>
                  <i className="ion ion-md-star-half text-warning mx-1"></i>
                  <i className="ion ion-md-star-outline text-warning"></i>
                </span>
                <p className="mb-0 text-center	 font-weight-semibold tx-22">
                  $55
                  <span className="tx-muted font-weight-normal tx-16 ms-1">
                    <del>$59</del>
                  </span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="card overflow-hidden product-card">
            <Card.Body className="card-body p-0">
              <div className="mask-container">
                <img
                  src={Allimages("Ecomerce2")}
                  alt="img"
                  className="img-fluid w-100"
                />
                <div className="product-options pos-absolute a-center">
                  <div className="btn-list d-flex align-items-center">
                    <Link
                      to={`${import.meta.env.BASE_URL
                        }pages/e-commerce/wishlist`}
                      className="btn btn-icon bg-danger"
                      data-bs-toggle="tooltip"
                      title="Add to wishlist"
                    >
                      <span className="tx-white">
                        <i className="fa fa-heart"></i>
                      </span>
                    </Link>
                    <Link
                      to={`${import.meta.env.BASE_URL}pages/e-commerce/cart/`}
                      className="btn btn-icon bg-success"
                      data-bs-toggle="tooltip"
                      title="Add to cart"
                    >
                      <span className="tx-white">
                        <i className="fa fa-shopping-cart"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-4 tx-center pos-relative">
                <a  className="masked-link"></a>
                <h5 className="mb-2 tx-capitalize">
                  Stylish Bluetooth Earbuds
                </h5>
                <span className="tx-15 ms-auto mb-2">
                  <i className="ion ion-md-star text-warning"></i>
                  <i className="ion ion-md-star text-warning mx-1"></i>
                  <i className="ion ion-md-star text-warning"></i>
                  <i className="ion ion-md-star-outline text-warning mx-1"></i>
                  <i className="ion ion-md-star-outline text-warning"></i>
                </span>
                <p className="mb-0 text-center	 font-weight-semibold tx-22">
                  $155
                  <span className="tx-muted font-weight-normal tx-16 ms-1">
                    <del>$95</del>
                  </span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="card overflow-hidden product-card">
            <Card.Body className="card-body p-0">
              <div className="mask-container">
                <img
                  src={Allimages("Ecomerce3")}
                  alt="img"
                  className="img-fluid w-100"
                />
                <div className="product-options pos-absolute a-center">
                  <div className="btn-list d-flex align-items-center">
                    <Link
                      to={`${import.meta.env.BASE_URL
                        }pages/e-commerce/wishlist`}
                      className="btn btn-icon bg-danger"
                      data-bs-toggle="tooltip"
                      title="Add to wishlist"
                    >
                      <span className="tx-white">
                        <i className="fa fa-heart"></i>
                      </span>
                    </Link>
                    <Link
                      to={`${import.meta.env.BASE_URL}pages/e-commerce/cart/`}
                      className="btn btn-icon bg-success"
                      data-bs-toggle="tooltip"
                      title="Add to cart"
                    >
                      <span className="tx-white">
                        <i className="fa fa-shopping-cart"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-4 tx-center pos-relative">
                <a  className="masked-link"></a>
                <h5 className="mb-2 tx-capitalize">Laptop</h5>
                <span className="tx-15 ms-auto mb-2">
                  <i className="ion ion-md-star text-warning"></i>
                  <i className="ion ion-md-star text-warning mx-1"></i>
                  <i className="ion ion-md-star-half text-warning"></i>
                  <i className="ion ion-md-star-outline text-warning mx-1"></i>
                  <i className="ion ion-md-star-outline text-warning"></i>
                </span>
                <p className="mb-0 text-center	 font-weight-semibold tx-22">
                  $71
                  <span className="tx-muted font-weight-normal tx-16 ms-1">
                    <del>$69</del>
                  </span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="card overflow-hidden product-card">
            <Card.Body className="card-body p-0">
              <div className="mask-container">
                <img
                  src={Allimages("Ecomerce4")}
                  alt="img"
                  className="img-fluid w-100"
                />
                <div className="product-options pos-absolute a-center">
                  <div className="btn-list d-flex align-items-center">
                    <Link
                      to={`${import.meta.env.BASE_URL
                        }pages/e-commerce/wishlist`}
                      className="btn btn-icon bg-danger"
                      data-bs-toggle="tooltip"
                      title="Add to wishlist"
                    >
                      <span className="tx-white">
                        <i className="fa fa-heart"></i>
                      </span>
                    </Link>
                    <Link
                      to={`${import.meta.env.BASE_URL}pages/e-commerce/cart/`}
                      className="btn btn-icon bg-success"
                      data-bs-toggle="tooltip"
                      title="Add to cart"
                    >
                      <span className="tx-white">
                        <i className="fa fa-shopping-cart"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-4 tx-center pos-relative">
                <a  className="masked-link"></a>
                <h5 className="mb-2 tx-capitalize">Modern 4-Stand chair</h5>
                <span className="tx-15 ms-auto mb-2">
                  <i className="ion ion-md-star text-warning"></i>
                  <i className="ion ion-md-star text-warning mx-1"></i>
                  <i className="ion ion-md-star text-warning"></i>
                  <i className="ion ion-md-star-half text-warning mx-1"></i>
                  <i className="ion ion-md-star-outline text-warning"></i>
                </span>
                <p className="mb-0 text-center font-weight-semibold tx-22">
                  $215
                  <span className="tx-muted font-weight-normal tx-16 ms-1">
                    <del>$259</del>
                  </span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Productdetailes;
