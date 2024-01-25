import { Fragment, useState } from 'react'
import Pageheader from '../../../../components/common/pageheader/pageheader'
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Row } from 'react-bootstrap'
import Allimages from '../../../../components/common/imagesdata/imagesdata';
import Creatable from "react-select/creatable";
import { monthOptions, yearOptions } from './data/selectdata';

function Formlayout() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selected1, setSelected1] = useState<any>([]);
  const [selected2, setSelected2] = useState<any>([]);

  return (
    <Fragment>

      <Pageheader titles={'FORM LAYOUTS'} active={'Form layout'} Subtite={'Forms'} />

      <Row>
        <Col lg={12} md={12}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>
                Horizontal Alignment
              </div>
            </div>
            <Card.Body>
              <Form action="#">
                <Row>
                  <Col md={5}>
                    <Form.Control placeholder="Enter your username" type="text" />
                  </Col>
                  <Col md={5} className="mg-md-t-0 mt-2">
                    <Form.Control placeholder="Enter your password" />
                  </Col>
                  <div className="col-md  mg-md-t-0 mt-3">
                    <button className="btn btn-primary btn-block">Sign In</button>
                  </div>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>
                Vertical Alignment
              </div>
            </div>
            <Card.Body>
              <Form action="#">
                <Row>
                  <Col lg={12}>
                    <Form.Group className="form-group">
                      <Form.Control className="form-control" placeholder="Enter your username" type="text" />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Control className="form-control" placeholder="Enter your password" />
                    </Form.Group>
                    <Button className="btn btn-primary pd-x-20">Sign In</Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col xl={6} lg={12}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>
                Basic Example
              </div>
            </div>
            <Card.Body>
              <Form action="#">
                <Form.Group className="form-group">
                  <Form.Control className="form-control" placeholder="Enter your username" type="text" />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Control className="form-control" placeholder="Enter Your Email" type="email" />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Control className="form-control" placeholder="Enter Your Password" />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label className="ckbox">
                    <Form.Control type="checkbox" /><span className="tx-13 ms-2">I agree terms and conditions</span>
                  </Form.Label>
                </Form.Group>
                <Button className="btn btn-primary">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={12}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>
                Left Label Alignment
              </div>
            </div>
            <Card.Body>
              <Form action="#">
                <div className="row align-items-center">
                  <Col md={4}>
                    <Form.Label className="form-label">Firstname</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Group className="form-group">
                      <Form.Control className="form-control" placeholder="Enter your firstname" type="text" />
                    </Form.Group>
                  </Col>
                </div>
                <div className="row align-items-center">
                  <Col md={4}>
                    <label className="form-label">Lastnane</label>
                  </Col>
                  <Col md={8}>
                    <Form.Group className="form-group">
                      <Form.Control className="form-control" placeholder="Enter your lastname" type="text" />
                    </Form.Group>
                  </Col>
                </div>
                <div className="row align-items-center">
                  <Col md={4}>
                    <Form.Label className="form-label">Email</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Group className="form-group">
                      <Form.Control className="form-control" placeholder="Enter your email" type="email" />
                    </Form.Group>
                  </Col>
                </div>
                <Form.Group className="form-group">
                  <Form.Label className="ckbox">
                    <Form.Control type="checkbox" /><span className="tx-13 ms-2">I agree terms and conditions</span>
                  </Form.Label>
                </Form.Group>
                <div className="btn-list">
                  <Button className="btn btn-primary">Register</Button>
                  <Button className="btn btn-secondary">Cancel</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col lg={12} md={12}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>
                Form Group Wrapper
              </div>
            </div>
            <Card.Body>
              <Form action="#">
                <Row>
                  <Col md={6}>
                    <Form.Group className="form-group form-floating mg-md-b-0-f">
                      <Form.Control type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                      <Form.Label className="mr-2" htmlFor="floatingInput">Email address</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="form-group form-floating mg-md-b-0-f">
                      <Form.Control className="form-control" id="floatingPassword" placeholder="Password" />
                      <Form.Label className="mr-2" htmlFor="floatingPassword">Password</Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col md={6} lg={6}>
          <Card>
            <div className='card-header'>
              <div className="card-title"> Form in Modal</div>
            </div>
            <Card.Body>
              <div className="tx-center">
                <Button className="btn btn-primary" onClick={handleShow} data-bs-target="#modaldemo1" data-bs-toggle="modal">View Live Demo</Button>
              </div>
              <Modal show={show} onHide={handleClose} className="form-modal">
                <Modal.Header closeButton className="d-block" role="document">
                      <Modal.Title className="modal-title mg-b-5">Create New Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {/* <button aria-label="Close" className="close pos-absolute t-15 r-20 tx-26" data-bs-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button> */}
                  <p className="mg-b-20">Let's get you all setup so you can begin using our app.</p>
                  <div className="form-group">
                    <input className="form-control" placeholder="Firstname" type="text" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" placeholder="Lastname" type="text" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" placeholder="Phone" type="text" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" placeholder="Email" type="text" />
                  </div>
                  <div className="form-group mg-b-25">
                    <label className="ckbox mg-b-5"><input type="checkbox" /><span className="tx-13">I agree to <a href="">Terms</a> and <a href="">Privacy Policy</a></span></label> <label className="ckbox">
                      <input defaultChecked type="checkbox" /><span className="tx-13">Yes, I want to recclas email from your newsletter.</span></label>
                  </div><button className="btn btn-primary btn-block">Continue</button>
                </Modal.Body>
              </Modal>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={6}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>Form in Dropdown</div>
            </div>
            <Card.Body>
              <Dropdown className="main-dropdown-form-demo">
                <Dropdown.Toggle className="btn btn-primary pd-x-20 toggle-before-none" data-bs-toggle="dropdown">Live Example <i className="icon ion-ios-arrow-down mg-s-5 tx-12"></i></Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                  <h6 className="dropdown-title">Subscribe</h6>
                  <p className="mg-b-20">Don't miss any update from us.</p>
                  <Form.Group className="form-group">
                    <Form.Control className="form-control" placeholder="Enter your fullname" type="text" />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Control className="form-control" placeholder="Enter your email" type="email" />
                  </Form.Group><Button className="btn btn-primary btn-block">Subscribe</Button>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col lg={12} md={12}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>
                Payment Details
              </div>
            </div>
            <Card.Body>
              <Row>
                <Col md={10} lg={8} xl={6} className=" mx-auto d-block">
                  <div className="card card-body border shadow-none">
                    <h5 className="card-title mg-b-20">Your Payment Details</h5>
                    <Form.Group className="form-group">
                      <Form.Label className="form-label">Name on Card</Form.Label> <input className="form-control" required type="text" />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Label className="form-label">Card Number</Form.Label>
                      <InputGroup className="input-group">
                        <Form.Control className="form-control pd-r-80" required type="text" />
                        <InputGroup.Text className="input-group-text">
                          <img alt="photo37" className="wd-30 mg-e-5" src={Allimages('Photos37')} />
                          <img alt="photo36" className="wd-30" src={Allimages('Photos36')} />
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Row className="row row-sm">
                        <Col sm={9} className="col-sm-9">
                          <label className="form-label">Expiration Date</label>
                          <Row className="row row-sm">
                            <Col sm={7} className="col-sm-7">
                              <Form.Group className="form-group">

                                <Creatable
                                  classNamePrefix="Select2"
                                  options={monthOptions}
                                  value={selected1}
                                  onChange={setSelected1}
                                />
                              </Form.Group>
                            </Col>
                            <div className="col-sm-5">
                              <div className="form-group mb-0">
                                <Creatable
                                  classNamePrefix="Select2"
                                  options={yearOptions}
                                  value={selected2}
                                  onChange={setSelected2}
                                />
                              </div>
                            </div>
                          </Row>
                        </Col>
                        <Col sm={3} className="col-sm-3">
                          <Form.Label className="form-label">CVC</Form.Label>
                          <Form.Group className="form-group">
                            <Form.Control className="form-control" required type="text" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Label className="ckbox">
                        <input defaultChecked type="checkbox" />
                        <span className="tx-13">Save my card for future purchases</span>
                      </Form.Label>
                    </Form.Group>
                    <Button className="btn btn-primary btn-block mt-3">Complete Payment</Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Formlayout