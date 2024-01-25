
import { Card, Col, Row, Table } from 'react-bootstrap'
import Allimages from '../../../../components/common/imagesdata/imagesdata'
import Pageheader from '../../../../components/common/pageheader/pageheader'

function Orderdetails() {
    return (
        <div>
            <Pageheader titles={'ORDER DETAILS'} active={'Orderdetails'} Subtite={'Ecommerce'} />

            <Row className="row-sm">
                <Col xl={8}>
                    <Card>
                        <div className="card-header">
                            <div className="card-title">Order Details</div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive border radius-7">
                                <Table className="table mb-0 border-0">
                                    <thead>
                                        <tr>
                                            <th className="tx-uppercase bg-custom" colSpan={4}>order number #1116773</th>
                                            <th className="bg-custom tx-right">
                                                <a  className="btn btn-sm btn-primary"><i className="fe fe-download me-1 tx-12 d-inline-block"></i>Save</a>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="border-top">Product Description</th>
                                            <th className="border-top">Brand</th>
                                            <th className="tx-center border-top">Quantity</th>
                                            <th className="tx-right border-top">Unit Price</th>
                                            <th className="tx-right border-top">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="me-2">
                                                        <div className="avatar-xl">
                                                            <img src={Allimages("Ecomerce38")} alt="img" className="br-5" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h6 className="mb-2 tx-capitalize">Latest Dress for women</h6>
                                                        <p className="mb-1 tx-muted font-weight-semibold">Color: <span>purple</span></p>
                                                        <p className="mb-0 tx-muted font-weight-semibold">Size: <span>XL</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Beerok</td>
                                            <td className="tx-center">2</td>
                                            <td className="tx-right">$24.23</td>
                                            <td className="tx-right">$48.46</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="me-2">
                                                        <div className="avatar-xl">
                                                            <img src={Allimages("Ecomerce2")} alt="img" className="br-5" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h6 className="mb-2 tx-capitalize">Bluetooth Earbuds</h6>
                                                        <p className="mb-1 tx-muted font-weight-semibold">Color: <span>White</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Hydra</td>
                                            <td className="tx-center">1</td>
                                            <td className="tx-right">$53.00</td>
                                            <td className="tx-right">$53.00</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="me-2">
                                                        <div className="avatar-xl">
                                                            <img src={Allimages("Ecomerce4")} alt="img" className="br-5" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h6 className="mb-2 tx-capitalize">Wooden Chair</h6>
                                                        <p className="mb-1 tx-muted font-weight-semibold">Color: <span>Gold</span></p>
                                                        <p className="mb-0 tx-muted font-weight-semibold">Size: <span>small</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Ultron</td>
                                            <td className="tx-center">2</td>
                                            <td className="tx-right">$36.35</td>
                                            <td className="tx-right">$72.70</td>
                                        </tr>
                                        <tr>
                                            <td className="border-end tx-14" colSpan={3} rowSpan={5} >
                                                <span className="me-1"> Order Note:</span> <span className="tx-muted">Ship all the ordered items together.</span>
                                            </td>
                                            <td className="font-weight-semibold">Subtotal</td>
                                            <td className="tx-right font-weight-semibold">$173.30</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-semibold tx-muted border-top-0">Discount <a  className="ms-1 tx-inverse" data-bs-toggle="tooltip" data-bs-placement="top" title="help me"><i className="fe fe-help-circle tx-13"></i></a></td>
                                            <td className="tx-right font-weight-semibold tx-muted border-top-0">-$10.00</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-semibold tx-muted border-top-0">Tax <a  className="ms-1 tx-inverse" data-bs-toggle="tooltip" data-bs-placement="top" title="help me"><i className="fe fe-help-circle tx-13"></i></a></td>
                                            <td className="tx-right font-weight-semibold tx-muted border-top-0">+$5.19</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-semibold tx-muted border-top-0">Delivery <a  className="ms-1 tx-inverse" data-bs-toggle="tooltip" data-bs-placement="top" title="help me"><i className="fe fe-help-circle tx-13"></i></a></td>
                                            <td className="tx-right font-weight-semibold tx-muted border-top-0">+$1.12</td>
                                        </tr>
                                        <tr>
                                            <td className="font-weight-semibold border-top-dashed tx-15">Total</td>
                                            <td className="tx-right font-weight-semibold border-top-dashed tx-15">$169.61</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <div className="card-header">
                            <div className="card-title">Track Order</div>
                        </div>
                        <Card.Body>
                            <div className="order-track">
                                <div className="accordion" id="basicAccordion">
                                    <div className="accordion-item border-0 bg-transparent">
                                        <div className="accordion-header" id="headingOne">
                                            <a className="px-0 pt-0" role="button" data-bs-toggle="collapse" data-bs-target="#basicOne" aria-expanded="true" aria-controls="basicOne">
                                                <div className="d-flex">
                                                    <div className="me-2">
                                                        <span className="avatar-sm rounded-circle bg-primary-transparent tx-primary border border-primary"><i className="fe fe-package tx-12"></i></span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-weight-semibold mb-0 tx-15">Order Placed</p>
                                                        <span className="tx-12">Mar 03, 2022</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div id="basicOne" className="accordion-collapse collapse show border-top-0" aria-labelledby="headingOne" data-bs-parent="#basicAccordion">
                                            <div className="accordion-body pt-0 pd-s-40">
                                                <div className="sub-track">
                                                    <p className="mb-0">Order placed successfully by <a  className="font-weight-semibold tx-primary">Sansa Taylor</a></p>
                                                    <span className="tx-muted">Mar 03, 2022, 15:36</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion" id="basicAccordion1">
                                    <div className="accordion-item border-0 bg-transparent">
                                        <div className="accordion-header" id="headingTwo">
                                            <a className="px-0 pt-0" role="button" data-bs-toggle="collapse" data-bs-target="#basicTwo" aria-expanded="true" aria-controls="basicTwo">
                                                <div className="d-flex">
                                                    <div className="me-2">
                                                        <span className="avatar-sm rounded-circle bg-primary-transparent tx-primary border border-primary"><i className="fe fe-check-circle tx-12"></i></span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-weight-semibold mb-0 tx-15">Picked</p>
                                                        <span className="tx-12">Mar 03, 15:10</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div id="basicTwo" className="accordion-collapse show collapse border-top-0" aria-labelledby="headingTwo" data-bs-parent="#basicAccordion1">
                                            <div className="accordion-body pt-0 pd-s-40">
                                                <div className="sub-track">
                                                    <p className="mb-0">Your order has been picked up by <span className="font-weight-semibold">Smart Good Services</span></p>
                                                    <span className="tx-muted">Mar 03, 2022, 15:36</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion" id="basicAccordion2">
                                    <div className="accordion-item border-0 bg-transparent">
                                        <div className="accordion-header" id="headingThree">
                                            <a className="px-0 pt-0" role="button" data-bs-toggle="collapse" data-bs-target="#basicThree" aria-expanded="true" aria-controls="basicThree">
                                                <div className="d-flex">
                                                    <div className="me-2">
                                                        <span className="avatar-sm rounded-circle bg-primary-transparent tx-primary border border-primary"><i className="fe fe-truck tx-12"></i></span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-weight-semibold mb-0 tx-15">Shipping</p>
                                                        <span className="tx-12">Mar 03, 15:10</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div id="basicThree" className="accordion-collapse show collapse border-top-0" aria-labelledby="headingThree" data-bs-parent="#basicAccordion2">
                                            <div className="accordion-body pt-0 pd-s-40">
                                                <div className="sub-track">
                                                    <p className="mb-0">Your order has arrived USA <span className="font-weight-semibold">SGS Warehouse</span></p>
                                                    <span className="tx-muted">Mar 03, 2022, 15:36</span>
                                                </div>
                                                <div className="sub-track">
                                                    <p className="mb-0">Your order has been picked up by <span className="font-weight-semibold">SGS Agent</span> and on the way to Hyderabad</p>
                                                    <span className="tx-muted">Mar 03, 2022, 15:36</span>
                                                </div>
                                                <div className="sub-track">
                                                    <p className="mb-0">Your order has arrived in Hyderabad and expected Delivery is <span className="font-weight-semibold">Apr 16, 2022</span> </p>
                                                    <span className="tx-muted">Mar 03, 2022, 15:36</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion" id="basicAccordion3">
                                    <div className="accordion-item border-0 bg-transparent next-step">
                                        <div className="accordion-header" id="headingFour">
                                            <a className="collapsed px-0 pt-0" role="button" data-bs-toggle="collapse" data-bs-target="#basicFour" aria-expanded="true" aria-controls="basicFour">
                                                <div className="d-flex">
                                                    <div className="me-2">
                                                        <span className="avatar-sm rounded-circle bg-custom tx-muted border"><i className="fe fe-package tx-12"></i></span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-weight-semibold mb-0 tx-15">Out For Delivery</p>
                                                        <span className="tx-muted tx-12">Mar 03, 15:10 (expected)</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div id="basicFour" className="accordion-collapse collapse border-top-0" aria-labelledby="headingFour" data-bs-parent="#basicAccordion3">
                                            <div className="accordion-body pt-0 pd-s-40">
                                                <div className="sub-track">
                                                    <p className="mb-0">Your order is out for devlivery</p>
                                                    <span className="tx-muted tx-11">Mar 03, 2022, 15:36 (expected)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion" id="basicAccordion4">
                                    <div className="accordion-item border-0 bg-transparent next-step">
                                        <div className="accordion-header" id="headingFive">
                                            <a className="collapsed px-0 pt-0" role="button" data-bs-toggle="collapse" aria-expanded="true" >
                                                <div className="d-flex">
                                                    <div className="me-2">
                                                        <span className="avatar-sm rounded-circle bg-custom tx-muted border"><i className="fe fe-package tx-12"></i></span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-weight-semibold mb-0 tx-15">Delivered</p>
                                                        <span className="tx-12">Mar 03, 15:10</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card>
                        <div className="card-header">
                            <div className="card-title">Customer Details</div>
                        </div>
                        <Card.Body>
                            <Row>
                                <Col xl={4}>
                                    <p className="mb-3 tx-muted tx-14">Name</p>
                                </Col>
                                <Col xl={8}>
                                    <p className="mb-3 tx-14">Elisa Jones</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={4}>
                                    <p className="mb-3 tx-muted tx-14">Mail</p>
                                </Col>
                                <Col xl={8}>
                                    <p className="mb-3 tx-14">elisaparker1116@demo.com</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={4}>
                                    <p className="mb-3 tx-muted tx-14">Mobile Number</p>
                                </Col>
                                <Col xl={8}>
                                    <p className="mb-3 tx-14">+(773)-1614311</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={4}>
                                    <p className="mb-3 tx-muted tx-14">Billing Address</p>
                                </Col>
                                <Col xl={8}>
                                    <p className="mb-3 tx-14">
                                        Sed rebum., RD. 12,<br />
                                        NW, Dolor et.,
                                        Gubergren
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={4}>
                                    <p className="mb-0 tx-muted tx-14">Shipping Address</p>
                                </Col>
                                <Col xl={8}>
                                    <p className="mb-0 tx-14">
                                        Sed rebum., RD. 12,<br />
                                        NW, Dolor et.,
                                        Gubergren
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <div className="card-header">
                            <div className="card-title">Payment Details</div>
                        </div>
                        <Card.Body>
                            <Row>
                                <Col xl={4}>
                                    <p className="mb-3 tx-muted tx-14">Transaction ID</p>
                                </Col>
                                <Col xl={8}>
                                    <p className="mb-3 tx-14">#7731614311</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={4}>
                                    <p className="mb-3 tx-muted tx-14">Mode Of Payment</p>
                                </Col>
                                <Col xl={8}>
                                    <p className="mb-3 tx-14">Debit Card</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={4}>
                                    <p className="mb-3 tx-muted tx-14">Card Holder Name</p>
                                </Col>
                                <Col xl={8}>
                                    <p className="mb-3 tx-14">Elisa Jones</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={4}>
                                    <p className="mb-0 tx-muted tx-14">Card Number</p>
                                </Col>
                                <Col xl={8}>
                                    <p className="mb-0 tx-14">XXXX XXXX XXXX 1116</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <div className="card-header">
                            <div className="card-title">Shipping Details</div>
                        </div>
                        <Card.Body>
                            <Row>
                                <Col xl={4}>
                                    <p className="mb-3 tx-muted tx-14">Shipping</p>
                                </Col>
                                <Col xl={8}>
                                    <p className="mb-3 tx-14">SafeX Delivery</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={4}>
                                    <p className="mb-0 tx-muted tx-14">Type Of Delivery</p>
                                </Col>
                                <Col xl={8}>
                                    <p className="mb-0 tx-14">International Shipping</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Orderdetails