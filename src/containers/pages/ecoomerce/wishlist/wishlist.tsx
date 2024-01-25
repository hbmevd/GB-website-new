import { Fragment } from 'react'
import Allimages from '../../../../components/common/imagesdata/imagesdata'
import Pageheader from '../../../../components/common/pageheader/pageheader'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Wishlist() {
  return (
    <Fragment>
      <Pageheader titles={'Wishlist'} active={'Wishlist'} Subtite={'Ecommerce'} />

      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Row className="align-items-center">
                <Col md={7} >
                  <h4 className="mb-0">Wishlist</h4>
                </Col>
                <Col md={5}>
                  <div className="input-group mb-0">
                    <input type="text" className="form-control" placeholder="search here..." />
                    <span className="input-group-append">
                      <button className="btn btn-primary" type="button">Search</button>
                    </span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={12}>
          <Row>
            <Col xl={3} md={6} sm={6} className="Wishlist-card">
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3">
                    <div className="pos-relative">
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/shop/`} className="masked-link"></Link>
                      <div className="text-center mb-2 pos-relative">
                        <img className="w-100 br-5" src={Allimages("Ecomerce4")} alt="img" />
                        <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/productDetails/`} className="masked-link"></Link>
                        <span className="badge badge-secondary badge-md pos-absolute t-15 r-15 product-badge">20% off</span>
                      </div>
                      <h5 className="mb-2 tx-capitalize lh-4">Modern 4-Stand chair</h5>
                      <div className="mb-2 flex-between">
                        <p className="mb-0 font-weight-semibold tx-primary tx-18">Price: $100</p>
                        <span className="tx-green">In Stock</span>
                      </div>
                      <div className="mb-2">
                        <span className="tx-17 ms-auto me-1">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <span className="tx-11 tx-muted">(92)</span>
                      </div>
                      <p className="mb-2 tx-muted">Eirmod dolor et takimata erat.</p>
                    </div>
                    <div className="btn-list flex-between">
                      <a  className="btn btn-outline-danger" data-bs-toggle="card-remove" onClick={(ele:any)=>{ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()}}>Remove</a>
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/checkout/`} className="btn btn-primary">Buy Now</Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6} className="Wishlist-card">
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3">
                    <div className="pos-relative">
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/shop/`} className="masked-link"></Link>
                      <div className="text-center mb-2 pos-relative">
                        <img className="w-100 br-5" src={Allimages("Ecomerce5")} alt="img" />
                        <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/productDetails/`} className="masked-link"></Link>
                      </div>
                      <h5 className="mb-2 tx-capitalize lh-4">Flower Pot for Home Decor</h5>
                      <div className="mb-2 flex-between">
                        <p className="mb-0 font-weight-semibold tx-primary tx-18">Price: $200</p>
                        <span className="tx-danger">2 Items Left</span>
                      </div>
                      <div className="mb-2">
                        <span className="tx-17 ms-auto me-1">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <span className="tx-11 tx-muted">(92)</span>
                      </div>
                      <p className="mb-2 tx-muted">Eirmod dolor et takimata erat.</p>
                    </div>
                    <div className="btn-list flex-between">
                      <a  className="btn btn-outline-danger" data-bs-toggle="card-remove" onClick={(ele:any)=>{ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()}}>Remove</a>
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/checkout/`} className="btn btn-primary">Buy Now</Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6} className="Wishlist-card">
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3">
                    <div className="pos-relative">
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/shop/`} className="masked-link"></Link>
                      <div className="text-center mb-2 pos-relative">
                        <img className="w-100 br-5" src={Allimages("Ecomerce1")} alt="img" />
                        <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/productDetails/`} className="masked-link"></Link>
                        <span className="badge badge-secondary badge-md pos-absolute t-15 r-15 product-badge">15% off</span>
                      </div>
                      <h5 className="mb-2 tx-capitalize lh-4">Black 5'G Mobile Phone</h5>
                      <div className="mb-2 flex-between">
                        <p className="mb-0 font-weight-semibold tx-primary tx-18">Price: $60</p>
                        <span className="tx-green">In Stock</span>
                      </div>
                      <div className="mb-2">
                        <span className="tx-17 ms-auto me-1">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <span className="tx-11 tx-muted">(92)</span>
                      </div>
                      <p className="mb-2 tx-muted">Eirmod dolor et takimata erat.</p>
                    </div>
                    <div className="btn-list flex-between">
                      <a  className="btn btn-outline-danger" data-bs-toggle="card-remove" onClick={(ele:any)=>{ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()}}>Remove</a>
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/checkout/`} className="btn btn-primary">Buy Now</Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6} className="Wishlist-card">
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3">
                    <div className="pos-relative">
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/shop/`} className="masked-link"></Link>
                      <div className="text-center mb-2 pos-relative">
                        <img className="w-100 br-5" src={Allimages("Ecomerce2")} alt="img" />
                        <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/productDetails/`} className="masked-link"></Link>
                        <span className="badge badge-secondary badge-md pos-absolute t-15 r-15 product-badge">30% off</span>
                      </div>
                      <h5 className="mb-2 tx-capitalize lh-4">Stylish Bluetooth Earbuds</h5>
                      <div className="mb-2 flex-between">
                        <p className="mb-0 font-weight-semibold tx-primary tx-18">Price: $75</p>
                        <span className="tx-green">In Stock</span>
                      </div>
                      <div className="mb-2">
                        <span className="tx-17 ms-auto me-1">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <span className="tx-11 tx-muted">(92)</span>
                      </div>
                      <p className="mb-2 tx-muted">Eirmod dolor et takimata erat.</p>
                    </div>
                    <div className="btn-list flex-between">
                      <a  className="btn btn-outline-danger" data-bs-toggle="card-remove" onClick={(ele:any)=>{ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()}}>Remove</a>
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/checkout/`} className="btn btn-primary">Buy Now</Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6} className="Wishlist-card">
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3">
                    <div className="pos-relative">
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/shop/`} className="masked-link"></Link>
                      <div className="text-center mb-2 pos-relative">
                        <img className="w-100 br-5" src={Allimages("Ecomerce3")} alt="img" />
                        <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/productDetails/`} className="masked-link"></Link>
                      </div>
                      <h5 className="mb-2 tx-capitalize lh-4">Laptop</h5>
                      <div className="mb-2 flex-between">
                        <p className="mb-0 font-weight-semibold tx-primary tx-18">Price: $20</p>
                        <span className="tx-danger">Out Of Stock</span>
                      </div>
                      <div className="mb-2">
                        <span className="tx-17 ms-auto me-1">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <span className="tx-11 tx-muted">(92)</span>
                      </div>
                      <p className="mb-2 tx-muted">Eirmod dolor et takimata erat.</p>
                    </div>
                    <div className="btn-list flex-between">
                      <a  className="btn btn-outline-danger" data-bs-toggle="card-remove" onClick={(ele:any)=>{ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()}}>Remove</a>
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/checkout/`} className="btn btn-primary">Buy Now</Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6} className="Wishlist-card">
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3">
                    <div className="pos-relative">
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/shop/`} className="masked-link"></Link>
                      <div className="text-center mb-2 pos-relative">
                        <img className="w-100 br-5" src={Allimages("Ecomerce6")} alt="img" />
                        <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/productDetails/`} className="masked-link"></Link>
                      </div>
                      <h5 className="mb-2 tx-capitalize lh-4">LED Bulb</h5>
                      <div className="mb-2 flex-between">
                        <p className="mb-0 font-weight-semibold tx-primary tx-18">Price: $100</p>
                        <span className="tx-green">In Stock</span>
                      </div>
                      <div className="mb-2">
                        <span className="tx-17 ms-auto me-1">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <span className="tx-11 tx-muted">(92)</span>
                      </div>
                      <p className="mb-2 tx-muted">Eirmod dolor et takimata erat.</p>
                    </div>
                    <div className="btn-list flex-between">
                      <a  className="btn btn-outline-danger" data-bs-toggle="card-remove" onClick={(ele:any)=>{ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()}}>Remove</a>
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/checkout/`} className="btn btn-primary">Buy Now</Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6} className="Wishlist-card">
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3">
                    <div className="pos-relative">
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/shop/`} className="masked-link"></Link>
                      <div className="text-center mb-2 pos-relative">
                        <img className="w-100 br-5" src={Allimages("Ecomerce7")} alt="img" />
                        <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/productDetails/`} className="masked-link"></Link>
                        <span className="badge badge-secondary badge-md pos-absolute t-15 r-15 product-badge">5% off</span>
                      </div>
                      <h5 className="mb-2 tx-capitalize lh-4">Men's White Shoes </h5>
                      <div className="mb-2 flex-between">
                        <p className="mb-0 font-weight-semibold tx-primary tx-18">Price: $10</p>
                        <span className="tx-danger">10 Items Left</span>
                      </div>
                      <div className="mb-2">
                        <span className="tx-17 ms-auto me-1">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <span className="tx-11 tx-muted">(92)</span>
                      </div>
                      <p className="mb-2 tx-muted">Eirmod dolor et takimata erat.</p>
                    </div>
                    <div className="btn-list flex-between">
                      <a  className="btn btn-outline-danger" data-bs-toggle="card-remove" onClick={(ele:any)=>{ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()}}>Remove</a>
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/checkout/`} className="btn btn-primary">Buy Now</Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6} className="Wishlist-card">
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3">
                    <div className="pos-relative">
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/shop/`} className="masked-link"></Link>
                      <div className="text-center mb-2 pos-relative">
                        <img className="w-100 br-5" src={Allimages("Ecomerce8")} alt="img" />
                        <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/productDetails/`} className="masked-link"></Link>
                      </div>
                      <h5 className="mb-2 tx-capitalize lh-4">classNamey Black Bag</h5>
                      <div className="mb-2 flex-between">
                        <p className="mb-0 font-weight-semibold tx-primary tx-18">Price: $30</p>
                        <span className="tx-green">In Stock</span>
                      </div>
                      <div className="mb-2">
                        <span className="tx-17 ms-auto me-1">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <span className="tx-11 tx-muted">(92)</span>
                      </div>
                      <p className="mb-2 tx-muted">Eirmod dolor et takimata erat.</p>
                    </div>
                    <div className="btn-list flex-between">
                      <a  className="btn btn-outline-danger" data-bs-toggle="card-remove" onClick={(ele:any)=>{ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()}}>Remove</a>
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/checkout/`} className="btn btn-primary">Buy Now</Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6} className="Wishlist-card">
              <Card>
                <Card.Body className=" p-0">
                  <div className="p-3">
                    <div className="pos-relative">
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/shop/`} className="masked-link"></Link>
                      <div className="text-center mb-2 pos-relative">
                        <img className="w-100 br-5" src={Allimages("Ecomerce9")} alt="img" />
                        <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/productDetails/`} className="masked-link"></Link>
                      </div>
                      <h5 className="mb-2 tx-capitalize lh-4"> Artificial Flower Bunch</h5>
                      <div className="mb-2 flex-between">
                        <p className="mb-0 font-weight-semibold tx-primary tx-18">Price: $5</p>
                        <span className="tx-green">In Stock</span>
                      </div>
                      <div className="mb-2">
                        <span className="tx-17 ms-auto me-1">
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star text-warning"></i>
                          <i className="ion ion-md-star-half text-warning"></i>
                          <i className="ion ion-md-star-outline text-warning"></i>
                        </span>
                        <span className="tx-11 tx-muted">(92)</span>
                      </div>
                      <p className="mb-2 tx-muted">Eirmod dolor et takimata erat.</p>
                    </div>
                    <div className="btn-list flex-between">
                      <a  className="btn btn-outline-danger" data-bs-toggle="card-remove" onClick={(ele:any)=>{ele.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()}}>Remove</a>
                      <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/checkout/`} className="btn btn-primary">Buy Now</Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Wishlist