import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import { Card, Col, Row } from "react-bootstrap";

function Timelinepage() {
  return (
    <Fragment>
      <Pageheader
        titles={"TIMELINE "}
        active={"Timeline"}
        Subtite={"Advanced UI"}
      />

      <Row>
        <Col lg={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Vertical Timeline</div>
            </div>
            <Card.Body>
              <div className="vtimeline">
                <div className="timeline-wrapper">
                  <div className="timeline-badge">
                    <img
                      className="rounded-circle"
                      alt="img"
                      src={Allimages("User9")}
                    />
                  </div>
                  <div className="timeline-panel">
                    <h6 className="font-weight-semibold">
                      Marsha Mellow updated his status
                    </h6>
                    <p>
                      Nonumy erat nonumy dolores duo ea sit, ipsum sed amet
                      aliquyam magna kasd at. Dolor erat sit sed sea et dolor,
                      justo dolor ipsum dolore voluptua. Sed ipsum sed.
                    </p>
                    <div className="d-block d-sm-flex align-items-center flex-wrap">
                      <a
                        
                        className="d-flex align-items-center tx-muted"
                      >
                        <i className="fe fe-heart me-1"></i> 9
                      </a>
                      <span className="tx-muted ms-auto">
                        <i className="fe fe-calendar me-1 d-inline-block"></i>16
                        Apr 2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-wrapper timeline-inverted">
                  <div className="timeline-badge">
                    <i className="las la-business-time"></i>
                  </div>
                  <div className="timeline-panel">
                    <h6 className="font-weight-semibold">Job Meeting</h6>
                    <p>
                      Invidunt dolor justo gubergren sit voluptua ipsum lorem
                      sanctus, justo dolores dolor dolore stet justo dolor. Eos
                      ipsum rebum diam.
                    </p>
                    <div className="d-block d-sm-flex align-items-center flex-wrap">
                      <a
                        
                        className="d-flex align-items-center tx-muted"
                      >
                        <i className="fe fe-heart me-1"></i> 12
                      </a>
                      <span className="tx-muted ms-auto">
                        <i className="fe fe-calendar me-1 d-inline-block"></i>21
                        May 2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-badge">
                    <img
                      className="rounded-circle"
                      alt="img"
                      src={Allimages("User15")}
                    />
                  </div>
                  <div className="timeline-panel">
                    <h6 className="font-weight-semibold">
                      Clark Kent posted on timeline
                    </h6>
                    <p>
                      Accusam et et stet invidunt at duo, ipsum no takimata est
                      eos magna dolore sed, amet diam sea no diam
                    </p>
                    <div className="d-block d-sm-flex align-items-center flex-wrap">
                      <a
                        
                        className="d-flex align-items-center tx-muted"
                      >
                        <i className="fe fe-heart me-1"></i> 21
                      </a>
                      <span className="tx-muted ms-auto">
                        <i className="fe fe-calendar me-1 d-inline-block"></i>14
                        Jul 2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-wrapper timeline-inverted">
                  <div className="timeline-badge success">
                    <img
                      className="rounded-circle"
                      alt="img"
                      src={Allimages("User2")}
                    />
                  </div>
                  <div className="timeline-panel">
                    <h6 className="font-weight-semibold">
                      Sylvia Trench uploaded 4 photos
                    </h6>
                    <p>
                      Pianoforte principles our unaffected not for astonished
                      travelling are particular.
                    </p>
                    <img
                      src={Allimages("Media2")}
                      className="mb-3 br-5"
                      alt="img"
                    />
                    <div className="d-block d-sm-flex align-items-center flex-wrap">
                      <a
                        
                        className="d-flex align-items-center tx-muted"
                      >
                        <i className="fe fe-heart me-1"></i> 8
                      </a>
                      <span className="tx-muted ms-auto">
                        <i className="fe fe-calendar me-1 d-inline-block"></i>11
                        Nov 2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-badge">
                    <i className="las la-envelope-open-text"></i>
                  </div>
                  <div className="timeline-panel">
                    <h6 className="font-weight-semibold">
                      Shady Tree send you a post
                    </h6>
                    <p className="mb-1">
                      Dolore justo lorem vero sed et takimata sit no dolore
                      dolores, elitr eos et dolor consetetur sed sanctus. Ipsum
                      amet elitr lorem clita et dolor. Kasd diam ea dolor sit
                      accusam gubergren no kasd. Ea amet et sed takimata kasd,.
                    </p>
                    <a  className="btn btn-sm btn-primary mb-3">
                      Read more
                    </a>
                    <div className="d-block d-sm-flex align-items-center flex-wrap">
                      <a
                        
                        className="d-flex align-items-center tx-muted"
                      >
                        <i className="fe fe-heart me-1"></i> 14
                      </a>
                      <span className="tx-muted ms-auto">
                        <i className="fe fe-calendar me-1 d-inline-block"></i>12
                        Dec 2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-wrapper timeline-inverted">
                  <div className="timeline-badge success">
                    <img
                      className="rounded-circle"
                      alt="img"
                      src={Allimages("User7")}
                    />
                  </div>
                  <div className="timeline-panel">
                    <h6 className="font-weight-semibold">
                      Abby Normal shared a video
                    </h6>
                    <div className="embed-responsive embed-responsive-16by9 mb-3 br-5">
                      <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/XZmGGAbHqa0?rel=0&amp;controls=0&amp;showinfo=0"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="d-block d-sm-flex align-items-center flex-wrap">
                      <a
                        
                        className="d-flex align-items-center tx-muted"
                      >
                        <i className="fe fe-heart me-1"></i> 25
                      </a>
                      <span className="tx-muted ms-auto">
                        <i className="fe fe-calendar me-1 d-inline-block"></i>3
                        Dec 2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-badge">
                    <i className="las la-check-circle"></i>
                  </div>
                  <div className="timeline-panel">
                    <h6 className="font-weight-semibold">
                      Sarah Twist accepted your friend request
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet cupiditate, delectus deserunt doloribus earum eveniet
                      explicabo fuga iste magni maxime
                    </p>
                    <div className="d-block d-sm-flex align-items-center flex-wrap">
                      <a
                        
                        className="d-flex align-items-center tx-muted"
                      >
                        <i className="fe fe-heart me-1"></i> 25
                      </a>
                      <span className="tx-muted ms-auto">
                        <i className="fe fe-calendar me-1 d-inline-block"></i>21
                        Feb 2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Timelinepage;
