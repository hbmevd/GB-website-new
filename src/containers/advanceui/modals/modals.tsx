import { Fragment, useState } from 'react'
import Pageheader from '../../../components/common/pageheader/pageheader'
import { Button, Card, Col, Form, Modal, OverlayTrigger, Popover, Row, Tooltip } from 'react-bootstrap'
import { VCenteredModalscroll, VerticallyCenteredModal } from './modaldata/modaldata';
// import { Link } from 'react-router-dom';
import { Gridmodal } from './modaldata/gridmodal';
import { Togglemodal } from './modaldata/togglemodal';
import Select from "react-select";

function Modals() {
  const [basic, setbasic] = useState(false);
  const [staticmodal, setstaticmodal] = useState(false);
  const [scrollingcontent, setscrollingcontent] = useState(false);
  const [scrollingmodal, setscrollingmodal] = useState(false);
  const [popovermodal, setpopovermodal] = useState(false);
  const [error, setError] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [success, setSuccess] = useState(false);
  const [sizesm, setsizesm] = useState(false);
  const [sizelg, setsizelg] = useState(false);
  const [sizexl, setsizexl] = useState(false);
  const [select, setSelect] = useState(false);


  //selectoptions
  const options = [
    { value: "Firefox", label: "Firefox" },
    { value: "Chrome", label: "Chrome" },
    { value: "Safari", label: "Safari" },
    { value: "Opera", label: "Opera " },
    { value: "Internet Explorer", label: "Internet Explorer" },
  ];
  //selectoptions

  const handleClose: any = () => {
    // setOpen(false);
  };
  const handleCloseb = () => setError(false);

  //1
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  //2
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  //3
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  //popovers:
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover </Popover.Header>
      <Popover.Body>
        <p> Vivamus sagittis lacus vel</p>
      </Popover.Body>
    </Popover>
  );

  // popovercontent-end:
  // Tooltip:
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Tooltip
    </Tooltip>
    // Tooltip-end
  );
  const viewDemoShow = (modal: any) => {
    switch (modal) {
      case "Basic":
        setbasic(true);
        break;
      case "Staticmodal":
        setstaticmodal(true);
        break;
      case "Scrollingcontent":
        setscrollingcontent(true);
        break;

      case "Scrollingmodal":
        setscrollingmodal(true);
        break;
      case "Popovermodal":
        setpopovermodal(true);
        break;

      case "success":
        setSuccess(true);
        break;
      case "Sizesm":
        setsizesm(true);
        break;
      case "Sizelg":
        setsizelg(true);
        break;
      case "Sizexl":
        setsizexl(true);
        break;
      case "Error":
        setError(true);
        break;
      case "select":
        setSelect(true);
        break;

    }
  };

  const viewDemoClose = (modal: any) => {
    switch (modal) {
      case "Basic":
        setbasic(false);
        break;
      case "Staticmodal":
        setstaticmodal(false);
        break;
      case "Scrollingcontent":
        setscrollingcontent(false);
        break;
      case "Scrollingmodal":
        setscrollingmodal(false)
        break;
      case "Popovermodal":
        setpopovermodal(false);
        break;
      case "success":
        setSuccess(false);
        break;
      case "Sizesm":
        setsizesm(false);
        break;
      case "Sizelg":
        setsizelg(false);
        break;
      case "Sizexl":
        setsizexl(false);
        break;
      case "Error":
        setError(false);
        break;
      case "select":
        setSelect(false);
        break;

    }
  };
  return (
    <Fragment>
      <Pageheader titles={'MODALS'} active={'Modals'} Subtite={'Advanced UI'} />
      <Row>
        <Col lg={12} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Modal Component</div>
            </div>
            <Card.Body>
              <div className="modal d-block pos-static">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h6 className="modal-title">Modal Title</h6>
                      <button type="button" className="btn btn-close py-0 ps-0 btn btn-default"></button>
                    </div>
                    <div className="modal-body">
                      <h6>Modal Body</h6>
                      <p>Ipsum sed invidunt amet clita gubergren, ea erat dolores lorem sed gubergren sadipscing. Dolores clita ea justo at vero, magna voluptua ipsum sadipscing et sea sea sanctus..</p>
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-sm btn-primary" type="button">Save changes</button>
                      <button className="btn btn-sm btn-secondary" type="button">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col sm={12} lg={6} xl={4} xxl={3}>
          <Card>
            <div className="card-header">
              <div className="card-title">Basic Modal</div>
            </div>
            <Card.Body>
              <Button
                className="btn ripple btn-primary"

                onClick={() => viewDemoShow("Basic")}
              >
                View demo
              </Button>
              <Modal show={basic} >
                <Modal.Header>
                  <Modal.Title className='mb-0'>Basic Modal</Modal.Title>
                  <Button className="btn btn-close py-0 ps-0" variant='' onClick={() => { viewDemoClose("Basic"); }}>
                    
                  </Button>
                </Modal.Header>
                <Modal.Body>
                  <h6>Modal Body</h6>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={() => { viewDemoClose("Basic"); }}>
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={() => { viewDemoClose("Basic"); }}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4} xxl={3}>
          <Card>
            <div className="card-header">
              <div className="card-title">Static Modal</div>
            </div>
            <Card.Body>
              <Button
                className="btn ripple btn-primary"

                onClick={() => viewDemoShow("Staticmodal")}
              >
                View demo
              </Button>
              <Modal show={staticmodal} >
                <Modal.Header>
                  <Modal.Title className='mb-0'>STATIC MODAL</Modal.Title>
                  <Button className="btn btn-close py-0 ps-0" variant='default' onClick={() => { viewDemoClose("Staticmodal"); }}>
                    
                  </Button>
                </Modal.Header>
                <Modal.Body>
                  <h6>Modal Body</h6>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={() => { viewDemoClose("Staticmodal"); }}>
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={() => { viewDemoClose("Staticmodal"); }}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4} xxl={3}>
          <Card>
            <div className="card-header">
              <div className="card-title">Scrolling Long Content</div>
            </div>
            <Card.Body>
              <Button
                variant="btn ripple btn-primary"
                onClick={() => viewDemoShow("Scrollingcontent")}

              >
                View Demo
              </Button>

              <Modal show={scrollingcontent} >
                <Modal.Header>
                  <Modal.Title className='mb-0'>STATIC MODAL</Modal.Title>
                  <Button className="btn btn-close py-0 ps-0" variant='default' onClick={() => { viewDemoClose("Scrollingcontent"); }}>
                    
                  </Button>
                </Modal.Header>
                <Modal.Body>
                  <Modal.Title className='mb-0'>Modal Body</Modal.Title>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    aut odit aut fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    aut odit aut fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    aut odit aut fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    aut odit aut fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    aut odit aut fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    aut odit aut fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt. sed quia
                    consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    aut odit aut fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="success"
                    onClick={() => {
                      viewDemoClose("Scrollingcontent");
                    }}
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      viewDemoClose("Scrollingcontent");
                    }}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4} xxl={3}>
          <Card>
            <div className="card-header">
              <div className="card-title">Scrollable Modal</div>
            </div>
            <Card.Body>
              <Button variant="primary" onClick={() => viewDemoShow("Scrollingmodal")}>
                View Demo
              </Button>

              <Modal show={scrollingmodal} backdrop="static" className='scrollable-modal'>
                <Modal.Header>
                  <Modal.Title className='mb-0'>STATIC MODAL</Modal.Title>
                  <Button className="btn btn-close py-0 ps-0" variant='default' onClick={() => { viewDemoClose("Scrollingmodal"); }}>
                    
                  </Button>
                </Modal.Header>
                <Modal.Body>
                  <Modal.Title className='mb-0'>Modal Body</Modal.Title>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    aut odit aut fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    aut odit aut fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    aut odit aut fugit, sed quia consequuntur magni dolores
                    eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ration.sed quia
                    consequuntur magni dolores eos qui ratione voluptatem
                    sequiqui ratione voluptatem sequi nesciunt nesciunt. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    aut odit aut fugit, sed quia consequuntur magni dolores
                    eos qui ration.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="danger"
                    onClick={() => {
                      viewDemoClose("Scrollingmodal");
                    }}
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => {
                      viewDemoClose("Scrollingmodal");
                    }}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4} xxl={3}>
          <Card>
            <div className="card-header">
              <div className="card-title">Vertically Centered Modal</div>
            </div>
            <Card.Body>

              <VerticallyCenteredModal />
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4} xxl={3}>
          <Card>
            <div className="card-header">
              <div className="card-title">Vertically Centered Scrollable Modal</div>
            </div>
            <Card.Body>
              {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#verticalCenteredScrollModal">
                Launch Modal
              </button> */}
              <VCenteredModalscroll />
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4} xxl={3}>
          <Card>
            <div className="card-header">
              <div className="card-title">Popover Modal</div>
            </div>
            <Card.Body>
              <Button variant="success" onClick={() => viewDemoShow("Popovermodal")}>
                View Demo
              </Button>
              <Modal show={popovermodal} backdrop="static">
                <Modal.Header
                  onClick={() => {
                    viewDemoClose("Popovermodal");
                  }}
                >
                  <Modal.Title className='mb-0'>Tooltips & Popover</Modal.Title>
                  <button type="button" className="btn-close lh-0" aria-label="Close"></button>
                </Modal.Header>
                <Modal.Body>
                  <h5>Popover in a modal</h5>
                  <p className="me-2">
                    This
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={popover}
                    >
                      <Button
                        variant="primary"
                        className="btn btn-sm ripple btn-primary mx-2"
                        data-bs-container="body"
                        data-bs-content="Vivamus sagittis lacus vel"
                        data-bs-placement="right"
                        data-bs-popover-color="default"
                        data-bs-toggle="popover"
                        title="Popover"
                        type="button"
                        size="sm"
                      >
                        Popover
                      </Button>
                    </OverlayTrigger>
                    triggers a popover on click
                  </p>
                  <hr />
                  <h5>Tooltips in a modal</h5>
                  <p>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <div className="btn btn-primary">
                        <span className="mx-2">Hover me </span>
                      </div>
                    </OverlayTrigger>
                    <span className="mx-1"> and </span>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <div className="btn btn-primary">
                        <span className="mx-2">Hover me</span></div></OverlayTrigger> have tooltips on hover
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="success"
                    onClick={() => {
                      viewDemoClose("Popovermodal");
                    }}
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      viewDemoClose("Popovermodal");
                    }}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4} xxl={3}>
          <Card>
            <div className="card-header">
              <div className="card-title">Grid Modal</div>
            </div>
            <Card.Body>

              <Gridmodal />
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} xl={4} xxl={3}>
          <Card>
            <div className="card-header">
              <div className="card-title">Toggle Between Modals</div>
            </div>
            <Card.Body>

              <Togglemodal />
            </Card.Body>
          </Card>
        </Col>

        <div className="col-xl col-lg-12">
          <Card>
            <div className="card-header">
              <div className="card-title">Varying Modal Content</div>
            </div>
            <Card.Body>
              <div className="btn-list">
                <Button variant="default" onClick={handleShow1}> Open modal for @mdo</Button>

                <Modal show={show1} onHide={handleClose1}>
                  <Modal.Header >
                    <Modal.Title className='mb-0'>Modal heading1
                    </Modal.Title>
                    <Button onClick={handleClose1} variant='none'>
                      X          </Button>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Recipient:</Form.Label>
                        <Form.Control type="email" placeholder="@mdo" autoFocus />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Message:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                      Close
                    </Button>
                    <Button variant="primary">Send message</Button>
                  </Modal.Footer>
                </Modal>
                <Button variant="primary" onClick={handleShow2}>
                  Open modal for @fat
                </Button>

                <Modal show={show2} onHide={handleClose2}>
                  <Modal.Header >
                    <Modal.Title className='mb-0'>Modal heading2
                    </Modal.Title>
                    <Button onClick={handleClose2}>
                      X          </Button>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Recipient:</Form.Label>
                        <Form.Control type="email" placeholder="@mdo" autoFocus />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Message:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                      Close
                    </Button>
                    <Button variant="primary">Send message</Button>
                  </Modal.Footer>
                </Modal>
                <Button variant="primary" onClick={handleShow3}>
                  Open modal for @getbootstrap
                </Button>

                <Modal show={show3} onHide={handleClose3}>
                  <Modal.Header >
                    <Modal.Title className='mb-0'>Modal heading3</Modal.Title>
                    <Button onClick={handleClose3}>
                      X          </Button>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Recipient:</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder=" @getbootstrap"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Message:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>
                      Close
                    </Button>
                    <Button variant="primary">Send message</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Card.Body>
          </Card>
        </div>

      </Row>



      <Row>

        <div className="col-md-12 col-lg-6 col-xxl-4">
          <Card>
            <div className="card-header">
              <div className="card-title">Extra Large Modal</div>
            </div>
            <Card.Body>
              <Button
                className="btn ripple btn-primary" variant='default'

                onClick={() => viewDemoShow("Sizexl")}
              >
                View demo
              </Button>
              <Modal show={sizexl} size='xl'>
                <Modal.Header>
                  <Modal.Title className='mb-0'>Basic Modal</Modal.Title>
                  <div className="btn btn-close py-0 ps-0" onClick={() => { viewDemoClose("Sizexl"); }}>
                    
                  </div>
                </Modal.Header>
                <Modal.Body>
                  <h6>Modal Body</h6>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={() => { viewDemoClose("Sizexl"); }}>
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={() => { viewDemoClose("Sizexl"); }}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-12 col-lg-6 col-xxl-4">
          <Card>
            <div className="card-header">
              <div className="card-title">Large Modal</div>
            </div>
            <Card.Body>
              <Button
                className="btn ripple btn-primary"

                onClick={() => viewDemoShow("Sizelg")}
              >
                View demo
              </Button>
              <Modal show={sizelg} size='lg'>
                <Modal.Header>
                  <Modal.Title className='mb-0'>Basic Modal</Modal.Title>
                  <Button className="btn btn-close py-0 ps-0" variant='' onClick={() => { viewDemoClose("Sizelg"); }}>
                    
                  </Button>
                </Modal.Header>
                <Modal.Body>
                  <h6>Modal Body</h6>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={() => { viewDemoClose("Sizelg"); }}>
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={() => { viewDemoClose("Sizelg"); }}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-12 col-lg-6 col-xxl-4">
          <Card>
            <div className="card-header">
              <div className="card-title">Small Modal</div>
            </div>
            <Card.Body>
              <Button
                className="btn ripple btn-primary"

                onClick={() => viewDemoShow("Sizesm")}
              >
                View demo
              </Button>
              <Modal show={sizesm} size='sm'>
                <Modal.Header>
                  <Modal.Title className='mb-0'>Basic Modal</Modal.Title>
                  <Button className="btn btn-close py-0 ps-0" variant='' onClick={() => { viewDemoClose("Sizesm"); }}>
                    
                  </Button>
                </Modal.Header>
                <Modal.Body>
                  <h6>Modal Body</h6>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={() => { viewDemoClose("Sizesm"); }}>
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={() => { viewDemoClose("Sizesm"); }}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </div>

        

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Card>
            <div className="card-header">
              <div className="card-title">Success Alert Modal</div>
            </div>
            <Card.Body>
              <Button
                className="btn ripple btn-success"
                variant=""
                onClick={() => viewDemoShow("success")}
              >
                View demo
              </Button>
              <Modal show={success} onHide={handleClose} >
                <Modal.Header className='p-4'>
                  <Button variant="default" className="btn btn-close py-0 ps-0" onClick={() => { viewDemoClose("success"); }}>
                    
                  </Button>
                </Modal.Header>
                <Modal.Body>
                  <div className="tx-center ">
                    <i className="icon ion-ios-checkmark-circle-outline tx-100 tx-success lh-1 d-inline-block"></i>
                    <h4 className="tx-success tx-semibold mg-b-20">Congratulations!</h4>
                    <p className="mg-b-20 mg-x-20">
                      There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration.
                    </p>
                    <Button
                      variant=""
                      aria-label="Close"
                      className="btn ripple btn-success pd-x-25 mb-2"
                      type="button"
                    >
                      Continue
                    </Button>
                  </div>
                </Modal.Body>
              </Modal>
            </Card.Body>
          </Card>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Card>
            <div className="card-header">
              <div className="card-title">Danger Alert Modal</div>
            </div>
            <Card.Body>
              <Button className="btn ripple btn-danger" variant="" onClick={() => viewDemoShow("Error")}>
                View demo
              </Button>
              <Modal show={error} onHide={handleCloseb} >
                <Modal.Header className='p-4'>
                  <Button variant="default" className="btn btn-close py-0 ps-0" onClick={() => { viewDemoClose("Error"); }}>
                    
                  </Button>
                </Modal.Header>
                <Modal.Body>
                  <div className="tx-center">
                    
                    <i className="icon icon ion-ios-close-circle-outline tx-100 tx-danger lh-1 mg-t-20 d-inline-block"></i>
                    <h4 className="tx-danger mg-b-20">
                      Error: Cannot process your entry!
                    </h4>
                    <p className="mg-b-20 mg-x-20">
                      There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration.
                    </p>
                    <Button
                      variant=""
                      aria-label="Close"
                      className="btn ripple btn-danger pd-x-25"
                      type="button"
                    >
                      Continue
                    </Button>
                  </div>
                </Modal.Body>
              </Modal>
            </Card.Body>
          </Card>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Card>
            <div className="card-header">
              <div className="card-title">Select2 Inside Modals</div>
            </div>
            <Card.Body>
              <Button className="btn ripple btn-teal" variant="" onClick={() => viewDemoShow("select")}>
                View demo
              </Button>

              <Modal show={select} >
                <Modal.Header>
                  <Modal.Title className='mb-0'>Select2 Modal</Modal.Title>
                  <Button variant="default" className="btn btn-close py-0 ps-0" onClick={() => { viewDemoClose("select"); }}>
                    
                  </Button>
                </Modal.Header>
                <Modal.Body>
                  <h6>Modal Body</h6>
                  <div className=" SlectBox">
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      placeholder="Chrome"

                      classNamePrefix='Select2' className="multi-select"
                    />
                  </div>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={() => { viewDemoClose("select"); }}>
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={() => { viewDemoClose("select"); }}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </div>

      </Row>


    </Fragment>
  )
}

export default Modals
