import { Fragment } from 'react'
import Pageheader from '../../../../components/common/pageheader/pageheader'
import { Link } from 'react-router-dom'
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

function Newmail() {
  const tooltip = (message:any) => {
    return (
    <Tooltip id="tooltip">
      {message}
    </Tooltip>
    )
  }
  return (
    <Fragment>
      <Pageheader titles={" MAIL COMPOSE"} active={" Mail Compose"} Subtite={"Apps"} />

      <Row className="row-sm">

        <Col lg={4} xl={3} md={12} sm={12} className="col-lg-4 col-xl-3 col-md-12 col-sm-12">
          <Card>
            <Card.Body className=" p-0">
              <div className="p-3 border-bottom">
                <ul className="nav nav-pills main-nav-column">
                  <li className="nav-item"><Link to={`${import.meta.env.BASE_URL}app/mail/inbox/`} className="nav-link thumb"><i className="fe fe-mail"></i> Inbox <span className="ms-auto">10</span></Link></li>
                  <li className="nav-item"><a className="nav-link thumb" ><i className="fe fe-star"></i> Starred</a></li>
                  <li className="nav-item"><a className="nav-link thumb" ><i className="fe fe-send"></i> Sent</a></li>
                  <li className="nav-item"><a className="nav-link thumb" ><i className="fe fe-file"></i> Drafts <span className="ms-auto">3</span></a></li>
                  <li className="nav-item"><a className="nav-link thumb" ><i className="fe fe-alert-triangle"></i> Spam <span className="ms-auto">15</span></a></li>
                  <li className="nav-item"><a className="nav-link thumb" ><i className="fe fe-users"></i> Contacts <span className="ms-auto">2</span></a></li>
                  <li className="nav-item"><a className="nav-link thumb" ><i className="fe fe-trash-2"></i> Deleted</a></li>
                  <li className="nav-item"><a className="nav-link thumb" ><i className="ti ti-archive tx-15-f"></i> Archive</a></li>
                </ul>
              </div>
              <div className="p-3">
                <ul className="nav nav-pills main-nav-column">
                  <li className="nav-item"><a className="nav-link thumb" ><i className="fe fe-help-circle"></i> Help</a></li>
                  <li className="nav-item"><Link to={`${import.meta.env.BASE_URL}app/mail/mailsetting/`} className="nav-link thumb" ><i className="fe fe-settings"></i> Settings</Link></li>

                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- col-end --> */}

        <Col xl={9} lg={8} md={12} sm={12}>
          <Card className="card overflow-hidden">
            <div className="card-header">
              <div className="card-title">Compose Mail</div>
            </div>
            <Card.Body >
              <form >
                <div className="form-group">
                  <div className="row align-items-center">
                    <label className="col-sm-2">To</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder="recepient@mail.com" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row align-items-center">
                    <label className="col-sm-2">Subject</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder="Enter your subject here" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row ">
                    <label className="col-sm-2">Message</label>
                    <div className="col-sm-10">
                      <textarea className="form-control" placeholder="Your message..."></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </Card.Body>
            <Card.Footer>
              <div className="d-sm-flex">
                <div className="btn-list">
                  <OverlayTrigger placement="top" overlay={tooltip('Attachment')}>
                  <a  className="btn btn-sm btn-def" ><i className="bx bx-paperclip tx-muted tx-18"></i></a>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={tooltip('Link')}>
                  <a  className="btn btn-sm btn-def" data-bs-toggle="tooltip" data-bs-placement="top" title="Link"><i className="bx bx-link tx-muted tx-18"></i></a>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={tooltip('Image')}>
                  <a  className="btn btn-sm btn-def" data-bs-toggle="tooltip" data-bs-placement="top" title="Photos"><i className="bx bx-image tx-muted tx-18"></i></a>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={tooltip('Delete')}>
                  <a  className="btn btn-sm btn-def" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bx bx-trash tx-muted tx-18"></i></a>
                  </OverlayTrigger>
                </div>
                <div className="ms-auto">
                  <a className="btn btn-primary" ><i className="far fa-paper-plane me-2"></i> Send</a>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        {/* <!-- col-end --> */}

      </Row>
    </Fragment>
  )
}

export default Newmail