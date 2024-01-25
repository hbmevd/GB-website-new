import { Fragment, useState } from "react";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Primarycard from "./primarycard";
import Secondarycard from "./secondarycard";
import Successcard from "./successcard";
import Overlaywithcard from "./overlaywithcard";
import Pageheader from "../../../components/common/pageheader/pageheader";
// import Overlaywithcard from './Overlaywithcard';

function Cards() {
  const [show, setShow] = useState(true);
  const [isFirstCollapsed, setisFirstCollapsed] = useState<any>(true);
  const first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    } else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
  };

  const [remove, Setremove] = useState(true);
  const values = [true];
  const [fullscreen, setFullscreen] = useState<any>(true);
  const [shows, setShows] = useState(false);

  function handleShow(breakpoint: any) {
    setFullscreen(breakpoint);
    setShows(true);
  }
  const [isFirstCollapseds, setisFirstCollapseds] = useState<any>(true);
  const firsts = () => {
    if (isFirstCollapseds === false) {
      setisFirstCollapseds(true);
    } else if (isFirstCollapseds === true) {
      setisFirstCollapseds(false);
    }
  };
  return (
    <Fragment>
      {/* <!-- row opened --> */}
      <Pageheader titles={"CARDS"} active={"Cards"} Subtite={"Apps"} />

      <Row className="row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Header>
              <div className="card-title">Basic Card With Title</div>
            </Card.Header>
            <Card.Body>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className="card card-bg-primary">
            <Card.Header>
              <div className="card-title tx-white">Card BG Primary</div>
            </Card.Header>
            <Card.Body>
              <div className="tx-white">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className="card card-bg-secondary">
            <Card.Header>
              <div className="card-title">Card BG Secondary</div>
            </Card.Header>
            <Card.Body>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </Card.Body>
          </Card>
        </Col>
      </Row>
     
      <div className="row row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Header>
              <p className="card-title">Title In Card Header</p>
            </Card.Header>
            <Card.Body>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className="card card-bg-primary">
            <Card.Header>
              <p className="card-title tx-white">Title In Card Header</p>
            </Card.Header>
            <Card.Body>
              <div className="tx-white">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className="card card-bg-secondary">
            <Card.Header>
              <p className="card-title">Title In Card Header</p>
            </Card.Header>
            <Card.Body>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </Card.Body>
          </Card>
        </Col>
      </div>
      
      <Row>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className="card card-primary">
            <Card.Header>
              <div className="card-title">Card Primary</div>
            </Card.Header>
            <Card.Body>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className="card card-secondary">
            <Card.Header>
              <div className="card-title">Card secondary</div>
            </Card.Header>
            <Card.Body>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className="card card-success">
            <Card.Header>
              <div className="card-title">Card Success</div>
            </Card.Header>
            <Card.Body>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </Card.Body>
          </Card>
        </Col>
      </Row>
    
      <Row className="row-sm">
        <Col sm={12} md={12} lg={4} xl={3}>
          <Card>
            <Card.Header>
              <div className="card-title">Card Title</div>
            </Card.Header>
            <Card.Body>
              <p className="card-subtitle">This is the card subtitle</p>
              <p className="mb-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={3}>
          <Card>
            <Card.Header>
              <p className="card-title">Title In Card Header</p>
              <p className="card-subtitle">This is the card subtitle</p>
            </Card.Header>
            <Card.Body>
              <p className="mb-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={3}>
          <Card className="card card-bg-primary">
            <Card.Header>
              <div className="card-title">Card BG Primary</div>
            </Card.Header>
            <Card.Body>
              <p className="card-subtitle">This is the card subtitle</p>
              <p className="mb-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={3}>
          <Card className=" card-primary">
            <Card.Header>
              <div className="card-title">Card Primary</div>
            </Card.Header>
            <Card.Body>
              <p className="card-subtitle">This is the card subtitle</p>
              <p className="mb-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <div className="row row-sm">
        <Col sm={12} md={12} lg={4}>
          <Card>
            <Card.Header>
              <div className="card-title">Card Title</div>
            </Card.Header>
            <Card.Body>
              <p className="card-subtitle">This is the card subtitle</p>
              <p className="mb-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
            <div className="card-footer">
              <p className="mb-0">Basic Card Footer</p>
            </div>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <Card className="card card-bg-primary">
            <Card.Header>
              <div className="card-title">Card BG Primary</div>
            </Card.Header>
            <Card.Body>
              <p className="card-subtitle">This is the card subtitle</p>
              <p className="mb-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
            <div className="card-footer">
              <p className="mb-0">Basic Card Footer</p>
            </div>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <Card className="card card-primary">
            <Card.Header>
              <div className="card-title">Card Primary</div>
            </Card.Header>
            <Card.Body>
              <p className="card-subtitle">This is the card subtitle</p>
              <p className="mb-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
            <div className="card-footer">
              <p className="mb-0">Basic Card Footer</p>
            </div>
          </Card>
        </Col>
      </div>

      <Row className=" row-sm">
        <Col sm={12} md={12} lg={12}>
          <div className="card-group">
            <Card>
              <Card.Header>
                <div className="card-title">Card Title</div>
              </Card.Header>
              <Card.Body>
                <p className="card-subtitle">This is the card subtitle</p>
                <p className="mb-0">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Card.Body>
              <div className="card-footer">
                <p className="mb-0">Basic Card Footer</p>
              </div>
            </Card>
            <Card>
              <Card.Header>
                <div className="card-title">Card Title</div>
              </Card.Header>
              <Card.Body>
                <p className="card-subtitle">This is the card subtitle</p>
                <p className="mb-0">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Card.Body>
              <div className="card-footer">
                <p className="mb-0">Basic Card Footer</p>
              </div>
            </Card>
            <Card>
              <Card.Header>
                <div className="card-title">Card Title</div>
              </Card.Header>
              <Card.Body>
                <p className="card-subtitle">This is the card subtitle</p>
                <p className="mb-0">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Card.Body>
              <div className="card-footer">
                <p className="mb-0">Basic Card Footer</p>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
   
      <Row className="row-sm">
        <Col sm={12} md={12} lg={4}>
          <>
            {show ? (
              <Card className=" custom-card">
                <Card.Header className="  d-flex custom-card-header border-bottom-0 ">
                  <h5 className="card-title">Basic Card</h5>
                  <div className="card-options">
                    <Link
                      to="#"
                      className="card-options-collapse"
                      data-bs-toggle="card-collapse"
                      onClick={() => {
                        first();
                      }}
                    >
                      <i className="fe fe-chevron-up"></i>
                    </Link>
                    <span
                      className="card-options-remove text-dark"
                      data-bs-toggle="card-remove"
                      onClick={() => setShow(false)}
                    >
                      <i className="fe fe-x"></i>
                    </span>
                  </div>
                </Card.Header>
                {isFirstCollapsed ? (
                  <>
                    <Card.Body>
                      Et harum quidem rerum facilis est et expedita distinctio.
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                      facere
                    </Card.Body>
                    <Card.Footer className="">
                      This is Basic card footer
                    </Card.Footer>
                  </>
                ) : null}
              </Card>
            ) : null}
          </>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <>
            {remove ? (
              <Card className="custom-card">
                <Card.Header className="d-flex custom-card-header border-bottom-0 ">
                  <h5 className="card-title"> Card</h5>
                  <div className="card-options">
                    <Link
                      to="#"
                      className="card-options-collapse"
                      data-bs-toggle="card-collapse"
                      onClick={() => {
                        firsts();
                      }}
                    >
                      <i className="fe fe-chevron-up"></i>
                    </Link>
                    {values.map((v, idx) => (
                      <Link
                        key={idx}
                        to="#"
                        className="card-options-fullscreen"
                        data-bs-toggle="card-fullscreen"
                        onClick={() => handleShow(v)}
                      >
                        <i className="fe fe-maximize"></i>
                        <Modal show={shows} fullscreen={fullscreen}>
                          <Modal.Header>
                            <div className="modal-title">Card Title</div>
                            <Button
                              variant="secondary"
                              onClick={() => setShows(false)}
                            >
                              x
                            </Button>
                          </Modal.Header>
                          <Modal.Body>Modal body content</Modal.Body>
                        </Modal>
                      </Link>
                    ))}
                    <Link
                      to="#"
                      className="card-options-remove"
                      data-bs-toggle="card-remove"
                      onClick={() => Setremove(false)}
                    >
                      <i className="fe fe-x"></i>
                    </Link>
                  </div>
                </Card.Header>
                {isFirstCollapseds ? (
                  <>
                    <Card.Body>
                      Et harum quidem rerum facilis est et expedita distinctio.
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                      facere
                    </Card.Body>
                    <Card.Footer className="">
                      This is Basic card footer
                    </Card.Footer>
                  </>
                ) : null}
              </Card>
            ) : null}
            <Modal show={shows} fullscreen={fullscreen}>
              <Modal.Header>
                <div className="modal-title">Card Title</div>
                <Button variant="" onClick={() => setShows(false)}>
                  x
                </Button>
              </Modal.Header>
              <Modal.Body>Modal body content</Modal.Body>
            </Modal>
          </>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <Card>
            <Card.Header>
              <div className="card-title d-flex justify-content-between align-items-start flex-wrap">
                Basic Card
                <div className="card-options">
                  <a  className="btn btn-primary btn-sm">
                    Action 1
                  </a>
                  <a  className="btn btn-secondary btn-sm ms-2">
                    Action 2
                  </a>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere
            </Card.Body>
            <div className="card-footer">This is Basic card footer</div>
          </Card>
        </Col>
      </Row>
     
      <Row className="row-sm">
        <Col sm={12} md={12} lg={6}>
          <Card>
            <Row >
              <Col md={4}>
                <img
                  src={Allimages("Photos12")}
                  className="img-fluid card-img-start"
                  alt="img"
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <p className="card-title">Card Image On Left</p>
                  <p className="mb-0">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="mb-0">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <Card>
            <Row>
              <Col md={8}>
                <Card.Body>
                  <p className="card-title">Card Image On Right</p>
                  <p className="mb-0">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="mb-0">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </Card.Body>
              </Col>
              <Col md={4}>
                <img
                  src={Allimages("Photos12")}
                  className="img-fluid card-img-end"
                  alt="img"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    
      <div className="row-sm row">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <img
              alt="Image"
              className="img-fluid card-img-top"
              src={Allimages("Photos16")}
            />
            <Card.Body>
              <p className="card-title">Card Image On Top</p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere.
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Header>
              <div className="card-title">Card Image On Bottom</div>
            </Card.Header>
            <Card.Body>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere
            </Card.Body>
            <img
              alt="Image"
              className="img-fluid card-img-bottom"
              src={Allimages("Photos12")}
            />
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Header>
              <div className="card-title">Card Image</div>
            </Card.Header>
            <Card.Body>
              <img
                alt="Image"
                className="img-fluid card-img"
                src={Allimages("Photos13")}
              />
            </Card.Body>
          </Card>
        </Col>
       
      </div>
     
      <Row>
        <Col sm={12} md={12} lg={6} xl={3}>
          <Card>
            <div className="card-header bg-white">
              <p className="card-title">Overlay With Card Header</p>
            </div>
            <Card.Body>
              <div className="pos-relative">
                <img
                  alt="Image"
                  className="img-fluid card-img"
                  src={Allimages("Photos3")}
                />
                <div className="card-img-overlay bg-black op-5">
                  <p className="tx-white op-8">
                   
                    Lorem Ipsum Diam et consetetur nonumy dolor justo dolor et
                    amet. Ea. Diam gubergren et nonumy. Sed diam est et no at
                    rebum, et diam ea sanctus.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={3}>
          <Overlaywithcard />
        </Col>
        <Col sm={12} md={12} lg={6} xl={3}>
          <Card>
            <img
              alt="Image"
              className="img-fluid card-img-top"
              src={Allimages("Photos3")}
            />
            <Card.Body className="card-body p-0">
              <div className="card-img-overlay bg-black op-5">
                <p className="card-title tx-white">
                  Footer With Separated Links
                </p>
                <p className="tx-white op-8">
                 
                  Lorem Ipsum Diam et consetetur nonumy dolor justo dolor et
                  amet. Ea. Diam gubergren et nonumy. Sed diam est et no at
                  rebum, et diam ea sanctus.
                </p>
              </div>
            </Card.Body>
            <Card.Footer className="card-footer bg-white">
              <a  className="tx-inverse">
                Demo Link - 1
              </a>
              <a  className="tx-inverse float-end">
                Demo Link - 2
              </a>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={3}>
          <Card>
            <img
              alt="Image"
              className="img-fluid card-img"
              src={Allimages("Photos3")}
            />
            <div className="card-body p-0">
              <div className="card-img-overlay bg-black op-5">
                <p className="card-title tx-white">
                  Card Title On Image Overlay
                </p>
                <p className="tx-white op-8">
                 
                  Lorem Ipsum Diam et consetetur nonumy dolor justo dolor et
                  amet. Ea. Diam gubergren et nonumy. Sed diam est et no at
                  rebum, et diam ea sanctus.
                </p>
                <a  className="tx-white">
                  Read More
                </a>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row className="row row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Primarycard />
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Secondarycard />
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Successcard />
        </Col>
      </Row>

     
    </Fragment>
  );
}

export default Cards;
