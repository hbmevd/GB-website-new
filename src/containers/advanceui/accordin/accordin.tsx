import { Fragment } from 'react';
import Allimages from '../../../components/common/imagesdata/imagesdata';
import Pageheader from '../../../components/common/pageheader/pageheader';
import { Accordion, Card, Col, Row } from 'react-bootstrap';

function Accordin() {
  return (
    <Fragment>
      <Pageheader titles={'Accordion'} active={'Accordion'} Subtite={'Advanced UI'} />
      <Row >
        <Col md={12} >
          <Card>
            <div className="card-header">
              <div className="card-title">Basic Accordion</div>
            </div>
            <Card.Body>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Fully Collapsed State</div>
            </div>
            <Card.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Accordion Style-1</div>
            </div>
            <Card.Body>
              <Accordion defaultActiveKey="Item1" id="accordion">
                <Accordion.Item eventKey="Item1" className="">
                  <Accordion.Header className=" " id="headingOne">
                    Making a Beautiful CSS3 Button Set
                  </Accordion.Header>
                  <Accordion.Body className="borders">
                    A concisely coded CSS3 button set increases usability across
                    the board, gives you a ton of options, and keeps all the code
                    involved to an absolute minimum. Anim pariatur cliche
                    reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="Item2" className="">
                  <Accordion.Header className=" " id="headingTwo">
                    Horizontal Navigation Menu Fold Animation
                  </Accordion.Header>
                  <Accordion.Body className="borders">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia aute,
                    non cupidatat skateboard dolor brunch. Food truck quinoa
                    nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                    beer labore.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="Item3" className="">
                  <Accordion.Header className=" " id="headingThree">
                    Creating CSS3 Button with Rounded Corners
                  </Accordion.Header>
                  <Accordion.Body className="borders">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia aute,
                    non cupidatat skateboard dolor brunch. Food truck quinoa
                    nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                    beer labore.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Accordion Style-2</div>
            </div>
            <Card.Body>
              <Accordion defaultActiveKey="Item1" id="accordion">
                <Accordion.Item eventKey="Item1" className="">
                  <Accordion.Header className=" " id="headingOne">
                    Making a Beautiful CSS3 Button Set
                  </Accordion.Header>
                  <Accordion.Body className="borders">
                    A concisely coded CSS3 button set increases usability across
                    the board, gives you a ton of options, and keeps all the code
                    involved to an absolute minimum. Anim pariatur cliche
                    reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="Item2" className="">
                  <Accordion.Header className=" " id="headingTwo">
                    Horizontal Navigation Menu Fold Animation
                  </Accordion.Header>
                  <Accordion.Body className="borders">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia aute,
                    non cupidatat skateboard dolor brunch. Food truck quinoa
                    nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                    beer labore.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="Item3" className="">
                  <Accordion.Header className=" " id="headingThree">
                    Creating CSS3 Button with Rounded Corners
                  </Accordion.Header>
                  <Accordion.Body className="borders">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia aute,
                    non cupidatat skateboard dolor brunch. Food truck quinoa
                    nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                    beer labore.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Accordion With Elements</div>
            </div>
            <Card.Body>

              <Accordion defaultActiveKey="Item1" id="accordion">
                <Accordion.Item eventKey="Item1" className="">
                  <Accordion.Header className=" " id="headingOne">
                    Making a Beautiful CSS3 Button Set
                  </Accordion.Header>
                  <Accordion.Body className="borders">
                    <div id="custom7" className="accordion-collapse collapse show" aria-labelledby="heading11" data-bs-parent="#accordionWithElements">
                      <div className="accordion-body">
                        <Row>
                          <Col lg={3} md={6}>
                            <img className="img-fluid radius-4 mb-3 mb-lg-0" src={Allimages("Photos13")} alt="accr-img" />
                          </Col>
                          <Col lg={3} md={6}>
                            <img className="img-fluid radius-4 mb-3 mb-lg-0" src={Allimages("Photos21")} alt="accr-img" />
                          </Col>
                          <Col lg={3} md={6}>
                            <img className="img-fluid radius-4 mb-3 mb-lg-0" src={Allimages("Photos22")} alt="accr-img" />
                          </Col>
                          <Col lg={3} md={6}>
                            <img className="img-fluid radius-4 mb-3 mb-lg-0" src={Allimages("Photos20")} alt="accr-img" />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="Item2" className="">
                  <Accordion.Header className=" " id="headingTwo">
                    Horizontal Navigation Menu Fold Animation
                  </Accordion.Header>
                  <Accordion.Body className="borders">
                    <table className="table mb-0 table-bordered border-top mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>User ID</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Barb</td>
                          <td>Akew</td>
                          <td>Barb1171</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Con</td>
                          <td>Junktivitas</td>
                          <td>Con1568</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Perry</td>
                          <td>Tonitus</td>
                          <td>Perry7956</td>
                        </tr>
                      </tbody>
                    </table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Fragment>
  )
}

export default Accordin