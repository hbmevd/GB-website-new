import { Fragment, useRef, useState } from "react";
import Allimages from "../../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../../components/common/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import {
  groupedOptions,
  groupedOptions1,
  groupedOptions2,
  groupedOptions3,
  groupedOptions4,
} from "./data/selectdata";
import Creatable from "react-select/creatable";
import Woodenchair from "./data/woodenchair";
import Loptopoperation from "./data/laptop";


function Cart() {
  const [selected1, setSelected1] = useState<any>([]);
  const [selected2, setSelected2] = useState<any>([]);
  const [selected3, setSelected3] = useState<any>([]);
  const [selected4, setSelected4] = useState<any>([]);
  const [selected5, setSelected5] = useState<any>([]);

  const [count, setCount] = useState(0);

  // Function to handle input changes
  const handleInputChange = (event: { target: { value: string } }) => {
    const newValue = parseInt(event.target.value, 10) || 0;
    setCount(newValue);
  };

  // Function to increment the count
  const increaseCount = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const element1 :any = useRef(null)
  const element2 :any = useRef(null)
  const element3 :any = useRef(null)

  return (
    <Fragment>
      <Pageheader titles={"CART"} active={"Cart"} Subtite={"Ecommerce"} />

      <Row>
        <Col lg={12} xl={8} md={12}>
          <Card ref={element1}>
            <Card.Body>
              <Row className=" align-items-center">
                <div className="col-xl-auto col-sm-auto">
                  <div className="avatar avatar-xl">
                    <img
                      src={Allimages("Ecomerce2")}
                      alt="img"
                      className="br-5"
                    />
                  </div>
                </div>
                <div className="col-xl col-sm">
                  <h6 className="mb-3 tx-capitalize mg-sm-t-0-f mg-t-20">
                    Bluetooth Earbuds
                  </h6>
                  <div className="d-sm-flex d-block align-items-center">
                    <div className="form-group mb-0">
                      <Creatable
                        classNamePrefix="Select2"
                        options={groupedOptions}
                        value={selected1}
                        onChange={setSelected1}
                      />
                    </div>
                    <div className="handle-counter justify-content-start my-2 my-sm-0 mb-0 ms-0 ms-sm-2">
                      <button
                        className="counter-minus btn btn-white lh-2 shadow-none"
                        onClick={decrementCount}
                      >
                        <i className="fe fe-minus"></i>
                      </button>
                      <input
                        // type="number"
                        value={count}
                        onChange={handleInputChange}
                      />
                      <button
                        className="counter-plus btn btn-white lh-2 shadow-none"
                        onClick={increaseCount}
                      >
                        <i className="fe fe-plus"></i>
                      </button>
                      {/* <Counter /> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-auto col-sm-auto">
                  <div className="text-sm-end  mg-sm-t-0-f mg-t-20">
                    <p className="mb-2 tx-muted">Price:</p>
                    <p className="font-weight-semibold tx-20 mb-0">$172</p>
                  </div>
                </div>
              </Row>
            </Card.Body>
            <Card.Footer className=" br-be-10 br-bs-10">
              <div className="text-end">
                <a onClick={()=>{element1.current.remove()}}
                  
                  className="tx-danger tx-14"
                  data-bs-toggle="card-remove"
                >
                  <i className="fe fe-trash tx-13 mx-1"></i>Remove
                </a>
                <Link
                  to={`${import.meta.env.BASE_URL}pages/e-commerce/wishlist/`}
                  className="tx-primary tx-14 ms-3 me-3"
                >
                  <i className="fe fe-heart tx-13 mx-1"></i>Add to Wishlist
                </Link>
              </div>
            </Card.Footer>
          </Card>
          <Card  ref={element2}>
            <Card.Body>
              <Row className="align-items-center">
                <div className="col-xl-auto col-sm-auto">
                  <div className="avatar avatar-xl">
                    <img
                      src={Allimages("Ecomerce4")}
                      alt="img"
                      className="br-5"
                    />
                  </div>
                </div>
                <div className="col-xl col-sm">
                  <h6 className="mb-3 tx-capitalize mg-sm-t-0-f mg-t-20">
                    Beautiful Wooden Chair
                  </h6>
                  <div className="d-sm-flex d-block align-items-center">
                    <div className="form-group mb-0">
                      <Creatable
                        classNamePrefix="Select2"
                        options={groupedOptions2}
                        value={selected2}
                        onChange={setSelected2}
                      />
                    </div>
                    <div className="form-group mb-0 my-2 my-sm-0 mb-0 ms-0 ms-sm-2">
                      <Creatable
                        classNamePrefix="Select2"
                        options={groupedOptions1}
                        value={selected3}
                        onChange={setSelected3}
                      />
                    </div>
                    <div className="handle-counter justify-content-start my-2 my-sm-0 mb-0 ms-0 ms-sm-2">
                      <Woodenchair />
                    </div>
                  </div>
                </div>
                <div className="col-xl-auto col-sm-auto">
                  <div className="text-sm-end  mg-sm-t-0-f mg-t-20">
                    <p className="mb-2 tx-muted">Price:</p>
                    <p className="font-weight-semibold tx-20 mb-0">$50</p>
                  </div>
                </div>
              </Row>
            </Card.Body>
            <Card.Footer className=" br-be-10 br-bs-10">
              <div className="text-end">
                <a onClick={()=>{element2.current.remove()}}
                  
                  className="tx-danger tx-14"
                  data-bs-toggle="card-remove"
                >
                  <i className="fe fe-trash tx-13 mx-1"></i>Remove
                </a>
                <Link
                  to={`${import.meta.env.BASE_URL}pages/e-commerce/wishlist/`}
                  className="tx-primary tx-14 ms-3 me-3"
                >
                  <i className="fe fe-heart tx-13 mx-1"></i>Add to Wishlist
                </Link>
              </div>
            </Card.Footer>
          </Card>
          <Card ref={element3}>
            <Card.Body>
              <Row className="align-items-center">
                <div className="col-xl-auto col-sm-auto">
                  <div className="avatar avatar-xl">
                    <img
                      src={Allimages("Ecomerce3")}
                      alt="img"
                      className="br-5"
                    />
                  </div>
                </div>
                <div className="col-xl col-sm">
                  <h6 className="mb-3 tx-capitalize mg-sm-t-0-f mg-t-20">
                    high performance laptop
                  </h6>
                  <div className="d-sm-flex d-block align-items-center">
                    <div className="form-group mb-0">
                      <Creatable
                        classNamePrefix="Select2"
                        options={groupedOptions3}
                        value={selected4}
                        onChange={setSelected4}
                      />
                    </div>
                    <div className="form-group mb-0 my-2 my-sm-0 mb-0 ms-0 ms-sm-2">
                      <Creatable
                        classNamePrefix="Select2"
                        options={groupedOptions4}
                        value={selected5}
                        onChange={setSelected5}
                      />
                    </div>
                    <div className="handle-counter justify-content-start my-2 my-sm-0 mb-0 ms-0 ms-sm-2">
                      <Loptopoperation />
                    </div>
                  </div>
                </div>
                <div className="col-xl-auto col-sm-auto">
                  <div className="text-sm-end  mg-sm-t-0-f mg-t-20">
                    <p className="mb-2 tx-muted">Price:</p>
                    <p className="font-weight-semibold tx-20 mb-0">$72</p>
                  </div>
                </div>
              </Row>
            </Card.Body>
            <Card.Footer className=" br-be-10 br-bs-10">
              <div className="text-end">
                <a onClick={()=>{element3.current.remove()}}
                  
                  className="tx-danger tx-14"
                  data-bs-toggle="card-remove"
                >
                  <i className="fe fe-trash tx-13 mx-1"></i>Remove
                </a>
                <Link
                  to={`${import.meta.env.BASE_URL}pages/e-commerce/wishlist/`}
                  className="tx-primary tx-14 ms-3 me-3"
                >
                  <i className="fe fe-heart tx-13 mx-1"></i>Add to Wishlist
                </Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg={12} xl={4} md={12}>
          <Card>
            <Card.Body>
              <div className="pb-3 mb-3 border-bottom-dashed">
                <p className="font-weight-semibold tx-16 mb-2">Delivery</p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="item-group">
                      <label className="item-box mb-0 w-100">
                        <input
                          type="radio"
                          name="item"
                          defaultValue="design"
                          className="selectgroup-input"
                          defaultChecked
                        />
                        <span className="item d-flex flex-column br-5 p-2 mb-3 mb-md-0 border">
                          <span className="mb-1">Free Delivery</span>
                          <span className="mb-0">
                            Expected Date: 26-03-2022
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item-group">
                      <label className="item-box mb-0 w-100">
                        <input
                          type="radio"
                          name="item"
                          defaultValue="design"
                          className="selectgroup-input"
                        />
                        <span className="item d-flex flex-column br-5 p-2 border">
                          <span className="mb-1">Express Delivery</span>
                          <span className="mb-0">
                            Expected Date: 20-03-2022
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-3 mb-3 border-bottom-dashed">
                <p className="font-weight-semibold tx-16 mb-2">
                  Have Promo Code?
                </p>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo Code"
                  />
                  <button className="btn btn-primary"> Apply</button>
                </div>
                <div className="text-end mt-2">
                  <a  className="tx-primary tx-12">
                    View Coupons
                  </a>
                </div>
              </div>
              <div className="pb-3 mb-3 border-bottom-dashed">
                <div className="flex-between mb-1">
                  <span className="tx-16">Sub Total:</span>
                  <span className="tx-16 text-end">$78.56</span>
                </div>
                <div className="flex-between mb-1">
                  <span className="tx-14 tx-muted">Discount:</span>
                  <span className="tx-14 tx-muted text-end">-$8.00</span>
                </div>
                <div className="flex-between mb-1">
                  <span className="tx-14 tx-muted">Delivery:</span>
                  <span className="tx-14 tx-muted text-end">$0.00</span>
                </div>
                <div className="flex-between mb-0">
                  <span className="tx-14 tx-muted">Tax:</span>
                  <span className="tx-14 tx-muted text-end">+$10.00</span>
                </div>
              </div>
              <div className="pb-3 mb-3 border-bottom-dashed">
                <div className="flex-between mb-0">
                  <span className="tx-16 font-weight-semibold">Total:</span>
                  <span className="tx-16 font-weight-semibold text-end">
                    $80.56
                  </span>
                </div>
              </div>
              <div className="mb-0 pb-0">
                <div className="btn-list text-end product-btn">
                  <NavLink
                    to={`${import.meta.env.BASE_URL}pages/e-commerce/shop/`}
                    className="btn btn-outline-primary"
                  >
                    Continue Shopping
                  </NavLink>
                  <NavLink
                    to={`${import.meta.env.BASE_URL}pages/e-commerce/checkout/`}
                    className="btn btn-primary"
                  >
                    Proceed to Checkout
                  </NavLink>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Cart;
