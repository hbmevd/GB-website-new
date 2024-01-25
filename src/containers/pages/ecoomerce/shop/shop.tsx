import { Fragment } from "react";
import Allimages from "../../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../../components/common/pageheader/pageheader";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <Fragment>
      <Pageheader titles={"SHOP"} active={"Shop"} Subtite={"Ecommerce"} />

      <Row className="row-sm">
        <Col md={12}>
          <div className="d-md-flex d-block align-items-center mb-3">
            <Dropdown className="btn-group">
              <Dropdown.Toggle
                type="button"
                className="btn btn-outline-primary dropdown-toggle "
                variant="default"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Featured
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                <Dropdown.Item >Featured</Dropdown.Item>
                <Dropdown.Item >Newly Added</Dropdown.Item>
                <Dropdown.Item >Low to High</Dropdown.Item>
                <Dropdown.Item >High to Low</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div
              className="btn-group ms-4"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="shopLayout"
                id="shopGrid"
              />
              <label
                className="btn btn-outline-primary mb-0"
                htmlFor="shopGrid"
              >
                <i className="fe fe-grid"></i>
              </label>

              <input
                type="radio"
                className="btn-check"
                name="shopLayout"
                id="shopList"
              />
              <label
                className="btn btn-outline-primary mb-0"
                htmlFor="shopList"
              >
                <i className="fe fe-list"></i>
              </label>
            </div>
            <div
              className="btn-group ms-2 ms-xs-4 my-2 my-sm-0"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="layout"
                id="layout1"
              />
              <label className="btn btn-outline-primary mb-0" htmlFor="layout1">
                |
              </label>

              <input
                type="radio"
                className="btn-check"
                name="layout"
                id="layout2"
              />
              <label className="btn btn-outline-primary mb-0" htmlFor="layout2">
                ||
              </label>

              <input
                type="radio"
                className="btn-check"
                name="layout"
                id="layout3"
              />
              <label className="btn btn-outline-primary mb-0" htmlFor="layout3">
                |||
              </label>

              <input
                type="radio"
                className="btn-check"
                name="layout"
                id="layout4"
              />
              <label className="btn btn-outline-primary mb-0" htmlFor="layout4">
                ||||
              </label>
            </div>
            <div className="ms-auto">
              <p className="my-1 tx-14 font-weight-semibold">
                Showing 1-130 of 2,300 Results
              </p>
            </div>
          </div>
        </Col>
        <Col xl={12}>
          <Row>
            <Col xl={3}>
              <Card className="card stickyBar">
                <Card.Body>
                  <div className="mb-1 text-end">
                    <a
                      
                      className="btn btn-sm rounded-pill btn-outline-primary"
                    >
                      Clear all
                    </a>
                  </div>
                  <div className="pb-3 border-bottom-dashed">
                    <p className="h5 mb-2">Category:</p>
                    <ul className="list-unstyled mb-0">
                      <li className=" mb-1">
                        <a  className="tx-14 d-flex tx-inverse">
                          Clothing
                          <span className="ms-auto tx-11">(1,937)</span>
                        </a>
                      </li>
                      <li className=" mb-1">
                        <a  className="tx-14 d-flex tx-inverse">
                          Bags <span className="ms-auto tx-11">(372)</span>
                        </a>
                      </li>
                      <li className=" mb-1">
                        <a  className="tx-14 d-flex tx-inverse">
                          Accessories
                          <span className="ms-auto tx-11">(2,898)</span>
                        </a>
                      </li>
                      <li className=" mb-1">
                        <a  className="tx-14 d-flex tx-inverse">
                          Beauty <span className="ms-auto tx-11">(12,537)</span>
                        </a>
                      </li>
                      <li className=" mb-1">
                        <a  className="tx-14 d-flex tx-inverse">
                          T-Shirts
                          <span className="ms-auto tx-11">(2,537)</span>
                        </a>
                      </li>
                      <li className="mb-0">
                        <a  className="tx-14 d-flex tx-inverse">
                          Clothing
                          <span className="ms-auto tx-11">(1,937)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3 pb-3 border-bottom-dashed">
                    <p className="h5 mb-3 flex-between">
                      Brand
                      <a
                        
                        className="tx-primary font-weight-normal tx-12"
                      >
                        Clear
                      </a>
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li className=" mb-3">
                        <label className="ckbox">
                          <input type="checkbox" defaultChecked />
                          <span>Diam</span>
                        </label>
                      </li>
                      <li className=" mb-3">
                        <label className="ckbox">
                          <input type="checkbox" />
                          <span>Et EosInvidunt</span>
                        </label>
                      </li>
                      <li className=" mb-3">
                        <label className="ckbox">
                          <input type="checkbox" defaultChecked />
                          <span>Sit Dolor</span>
                        </label>
                      </li>
                      <li className=" mb-3">
                        <label className="ckbox">
                          <input type="checkbox" defaultChecked />
                          <span>Dolore Eos</span>
                        </label>
                      </li>
                      <li className=" mb-3">
                        <label className="ckbox">
                          <input type="checkbox" />
                          <span>Eos Labore</span>
                        </label>
                      </li>
                      <li className=" mb-3">
                        <label className="ckbox">
                          <input type="checkbox" />
                          <span>Duo Rebum</span>
                        </label>
                      </li>
                      <li className=" mb-0">
                        <label className="ckbox">
                          <input type="checkbox" defaultChecked />
                          <span>Dolor</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="h5 mb-3 flex-between">
                      Colors
                      <a
                        
                        className="tx-primary font-weight-normal tx-12"
                      >
                        Clear
                      </a>
                    </p>
                    <div className="d-flex flex-wrap">
                      <div className="me-2">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="primary"
                            className="colorinput-input"
                            defaultChecked
                          />
                          <span className="colorinput-color bg-primary"></span>
                        </label>
                      </div>
                      <div className="me-2">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="secondary"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-secondary"></span>
                        </label>
                      </div>
                      <div className="me-2">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="success"
                            className="colorinput-input"
                            defaultChecked
                          />
                          <span className="colorinput-color bg-success"></span>
                        </label>
                      </div>
                      <div className="me-2">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="teal"
                            className="colorinput-input"
                            defaultChecked
                          />
                          <span className="colorinput-color bg-teal"></span>
                        </label>
                      </div>
                      <div className="me-2">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="orange"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-orange"></span>
                        </label>
                      </div>
                      <div className="me-2">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="purple"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-purple"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={9}>
              <Card>
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={7}>
                      <h4 className="my-2">Clothing</h4>
                    </Col>
                    <Col md={5}>
                      <div className="input-group mb-0">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="clothing"
                          placeholder="search by brand name, product name, category..."
                        />
                        <span className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            Search
                          </button>
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Row>
                <Col xl={3} lg={4} md={6} sm={6}>
                  <Card className="overflow-hidden product-card">
                    <Card.Body className="p-0">
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
                                }pages/e-commerce/wishlist/`}
                              className="btn btn-icon bg-danger"
                              data-bs-toggle="tooltip"
                              title="Add to wishlist"
                            >
                              <span className="tx-white">
                                <i className="fa fa-heart"></i>
                              </span>
                            </Link>
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/cart/`}
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
                        <Link
                          to={`${import.meta.env.BASE_URL
                            }pages/e-commerce/productDetails/`}
                          className="masked-link"
                        ></Link>
                        <h5 className="mb-2 tx-capitalize">
                          Black 5'G Mobile Phone
                        </h5>
                        <span className="tx-15 ms-auto mb-2">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <p className="mb-0 text-center	 font-weight-semibold tx-22">
                          $55
                          <span className="tx-muted font-weight-normal tx-16 ms-1 d-inline-flex">
                            <del>$59</del>
                          </span>
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3} lg={4} md={6} sm={6}>
                  <Card className="overflow-hidden product-card">
                    <Card.Body className="p-0">
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
                                }pages/e-commerce/wishlist/`}
                              className="btn btn-icon bg-danger"
                              data-bs-toggle="tooltip"
                              title="Add to wishlist"
                            >
                              <span className="tx-white">
                                <i className="fa fa-heart"></i>
                              </span>
                            </Link>
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/cart/`}
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
                        <Link
                          to={`${import.meta.env.BASE_URL
                            }pages/e-commerce/productDetails/`}
                          className="masked-link"
                        ></Link>
                        <h5 className="mb-2 tx-capitalize">
                          Stylish Bluetooth Earbuds
                        </h5>
                        <span className="tx-15 ms-auto mb-2">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <p className="mb-0 text-center	 font-weight-semibold tx-22">
                          $155
                          <span className="tx-muted font-weight-normal tx-16 ms-1 d-inline-flex">
                            <del>$95</del>
                          </span>
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3} lg={4} md={6} sm={6}>
                  <Card className="overflow-hidden product-card">
                    <Card.Body className="p-0">
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
                                }pages/e-commerce/wishlist/`}
                              className="btn btn-icon bg-danger"
                              data-bs-toggle="tooltip"
                              title="Add to wishlist"
                            >
                              <span className="tx-white">
                                <i className="fa fa-heart"></i>
                              </span>
                            </Link>
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/cart/`}
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
                        <Link
                          to={`${import.meta.env.BASE_URL
                            }pages/e-commerce/productDetails/`}
                          className="masked-link"
                        ></Link>
                        <h5 className="mb-2 tx-capitalize">Laptop</h5>
                        <span className="tx-15 ms-auto mb-2">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <p className="mb-0 text-center	 font-weight-semibold tx-22">
                          $71
                          <span className="tx-muted font-weight-normal tx-16 ms-1 d-inline-flex">
                            <del>$69</del>
                          </span>
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3} lg={4} md={6} sm={6}>
                  <Card className="overflow-hidden product-card">
                    <Card.Body>
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
                                }pages/e-commerce/wishlist/`}
                              className="btn btn-icon bg-danger"
                              data-bs-toggle="tooltip"
                              title="Add to wishlist"
                            >
                              <span className="tx-white">
                                <i className="fa fa-heart"></i>
                              </span>
                            </Link>
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/cart/`}
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
                        <Link
                          to={`${import.meta.env.BASE_URL
                            }pages/e-commerce/productDetails/`}
                          className="masked-link"
                        ></Link>
                        <h5 className="mb-2 tx-capitalize">
                          Modern 4-Stand chair
                        </h5>
                        <span className="tx-15 ms-auto mb-2">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <p className="mb-0 text-center font-weight-semibold tx-22">
                          $215
                          <span className="tx-muted font-weight-normal tx-16 ms-1 d-inline-flex">
                            <del>$259</del>
                          </span>
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3} lg={4} md={6} sm={6}>
                  <Card className="overflow-hidden product-card">
                    <Card.Body className="p-0">
                      <div className="mask-container">
                        <img
                          src={Allimages("Ecomerce5")}
                          alt="img"
                          className="img-fluid w-100"
                        />
                        <div className="product-options pos-absolute a-center">
                          <div className="btn-list d-flex align-items-center">
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/wishlist/`}
                              className="btn btn-icon bg-danger"
                              data-bs-toggle="tooltip"
                              title="Add to wishlist"
                            >
                              <span className="tx-white">
                                <i className="fa fa-heart"></i>
                              </span>
                            </Link>
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/cart/`}
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
                          25% off
                        </span>
                      </div>
                      <div className="p-4 tx-center pos-relative">
                        <Link
                          to={`${import.meta.env.BASE_URL
                            }pages/e-commerce/productDetails/`}
                          className="masked-link"
                        ></Link>
                        <h5 className="mb-2 tx-capitalize">
                          
                          Flower Pot for Home Decor
                        </h5>
                        <span className="tx-15 ms-auto mb-2">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <p className="mb-0 text-center font-weight-semibold tx-22">
                          $505
                          <span className="tx-muted font-weight-normal tx-16 ms-1 d-inline-flex">
                            <del>$650</del>
                          </span>
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3} lg={4} md={6} sm={6}>
                  <Card className="overflow-hidden product-card">
                    <Card.Body className="p-0">
                      <div className="mask-container">
                        <img
                          src={Allimages("Ecomerce6")}
                          alt="img"
                          className="img-fluid w-100"
                        />
                        <div className="product-options pos-absolute a-center">
                          <div className="btn-list d-flex align-items-center">
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/wishlist/`}
                              className="btn btn-icon bg-danger"
                              data-bs-toggle="tooltip"
                              title="Add to wishlist"
                            >
                              <span className="tx-white">
                                <i className="fa fa-heart"></i>
                              </span>
                            </Link>
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/cart/`}
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
                        <Link
                          to={`${import.meta.env.BASE_URL
                            }pages/e-commerce/productDetails/`}
                          className="masked-link"
                        ></Link>
                        <h5 className="mb-2 tx-capitalize">LED Bulb</h5>
                        <span className="tx-15 ms-auto mb-2">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <p className="mb-0 text-center font-weight-semibold tx-22">
                          $20
                          <span className="tx-muted font-weight-normal tx-16 ms-1 d-inline-flex">
                            <del>$39</del>
                          </span>
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3} lg={4} md={6} sm={6}>
                  <Card className="overflow-hidden product-card">
                    <Card.Body className="p-0">
                      <div className="mask-container">
                        <img
                          src={Allimages("Ecomerce7")}
                          alt="img"
                          className="img-fluid w-100"
                        />
                        <div className="product-options pos-absolute a-center">
                          <div className="btn-list d-flex align-items-center">
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/wishlist/`}
                              className="btn btn-icon bg-danger"
                              data-bs-toggle="tooltip"
                              title="Add to wishlist"
                            >
                              <span className="tx-white">
                                <i className="fa fa-heart"></i>
                              </span>
                            </Link>
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/cart/`}
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
                          10% off
                        </span>
                      </div>
                      <div className="p-4 tx-center pos-relative">
                        <Link
                          to={`${import.meta.env.BASE_URL
                            }pages/e-commerce/productDetails/`}
                          className="masked-link"
                        ></Link>
                        <h5 className="mb-2 tx-capitalize">
                          Men's White Shoes
                        </h5>
                        <span className="tx-15 ms-auto mb-2">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <p className="mb-0 text-center	 font-weight-semibold tx-22">
                          $25
                          <span className="tx-muted font-weight-normal tx-16 ms-1 d-inline-flex">
                            <del>$59</del>
                          </span>
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3} lg={4} md={6} sm={6}>
                  <Card className="overflow-hidden product-card">
                    <Card.Body className="p-0">
                      <div className="mask-container">
                        <img
                          src={Allimages("Ecomerce8")}
                          alt="img"
                          className="img-fluid w-100"
                        />
                        <div className="product-options pos-absolute a-center">
                          <div className="btn-list d-flex align-items-center">
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/wishlist/`}
                              className="btn btn-icon bg-danger"
                              data-bs-toggle="tooltip"
                              title="Add to wishlist"
                            >
                              <span className="tx-white">
                                <i className="fa fa-heart"></i>
                              </span>
                            </Link>
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/cart/`}
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
                        <Link
                          to={`${import.meta.env.BASE_URL
                            }pages/e-commerce/productDetails/`}
                          className="masked-link"
                        ></Link>
                        <h5 className="mb-2 tx-capitalize">
                          classNamey Black Bag
                        </h5>
                        <span className="tx-15 ms-auto mb-2">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <p className="mb-0 text-center	 font-weight-semibold tx-22">
                          $55
                          <span className="tx-muted font-weight-normal tx-16 ms-1 d-inline-flex">
                            <del>$59</del>
                          </span>
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3} lg={4} md={6} sm={6}>
                  <Card className="overflow-hidden product-card">
                    <Card.Body className="p-0">
                      <div className="mask-container">
                        <img
                          src={Allimages("Ecomerce19")}
                          alt="img"
                          className="img-fluid w-100"
                        />
                        <div className="product-options pos-absolute a-center">
                          <div className="btn-list d-flex align-items-center">
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/wishlist/`}
                              className="btn btn-icon bg-danger"
                              data-bs-toggle="tooltip"
                              title="Add to wishlist"
                            >
                              <span className="tx-white">
                                <i className="fa fa-heart"></i>
                              </span>
                            </Link>
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/cart/`}
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
                        <Link
                          to={`${import.meta.env.BASE_URL
                            }pages/e-commerce/productDetails/`}
                          className="masked-link"
                        ></Link>
                        <h5 className="mb-2 tx-capitalize">
                          
                          Artificial Zing Camera
                        </h5>
                        <span className="tx-15 ms-auto mb-2">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <p className="mb-0 text-center	 font-weight-semibold tx-22">
                          $30
                          <span className="tx-muted font-weight-normal tx-16 ms-1 d-inline-flex">
                            <del>$50</del>
                          </span>
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Shop;
