
import { Fragment } from "react";
import Allimages from "../../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../../components/common/pageheader/pageheader";
import RSC from "react-scrollbars-custom";
import { Card, Col, Dropdown, OverlayTrigger, Row, Tab, Tabs, Tooltip } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Chat() {
  return (
    <Fragment>
      <Pageheader titles={"CHAT"} active={"Chat"} Subtite={"Apps"} />

      <Row className=" row-sm mb-4">
        <Col xl={12} >
          <Row >
            <Col xxl={3} lg={12} xl={6}>
              <Card>
                <div className="main-content-app">
                  <div className="main-content-left main-content-left-chat overflow-hidden">
                    <Tabs
                      defaultActiveKey="recents"
                      id="uncontrolled-tab-example"
                      className="mb-3"
                    >
                      <Tab eventKey="recents" title="Recents">
                <RSC style={{ width: "100%", height: "100vh" }}>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User6")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Socrates Itumay</h6>
                                <span className="tx-muted tx-11 align-self-start min-w-fit-content">
                                  2 hr
                                </span>
                              </div>
                              <p className="mb-0 tx-12">
                                Consetetur sanctus consetetur amet amet stet,.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User2")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Eos Tempor</h6>
                                <span className="tx-muted tx-11">3 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Ipsum lorem kasd sed labore sed elitr.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed selected">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User5")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Ut Nonumy</h6>
                                <span className="tx-muted tx-11">4 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Erat labore elitr takimata sea dolor. Et duo
                                takimata consetetur.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User6")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Ipsum Et</h6>
                                <span className="tx-muted tx-11">5 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Aliquyam justo diam eirmod rebum diam. Dolores
                                dolores dolor justo.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User3")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Et Kasd</h6>
                                <span className="tx-muted tx-11">3 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Sit takimata sanctus takimata takimata et ipsum
                                no. Eos duo elitr.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User4")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Dolor Dlita</h6>
                                <span className="tx-muted tx-11">4 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Erat clita gubergren sit labore. Dolor labore
                                eirmod takimata diam.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User4")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Voluptua Ipsum</h6>
                                <span className="tx-muted tx-11">1 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Stet erat diam lorem ut ea ut ut at. At dolor
                                dolore.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User5")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Socrates Itumay</h6>
                                <span className="tx-muted tx-11">1 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Consetetur sanctus consetetur amet amet stet,.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User2")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Eos Tempor</h6>
                                <span className="tx-muted tx-11">2 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Ipsum lorem kasd sed labore sed elitr.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User5")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Ut Nonumy</h6>
                                <span className="tx-muted tx-11">2 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Erat labore elitr takimata sea dolor. Et duo
                                takimata consetetur.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User6")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Ipsum Et</h6>
                                <span className="tx-muted tx-11">2 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Aliquyam justo diam eirmod rebum diam. Dolores
                                dolores dolor justo.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User3")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Et Kasd</h6>
                                <span className="tx-muted tx-11">1 W</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Sit takimata sanctus takimata takimata et ipsum
                                no. Eos duo elitr.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User4")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Dolor Dlita</h6>
                                <span className="tx-muted tx-11">4 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Erat clita gubergren sit labore. Dolor labore
                                eirmod takimata diam.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User4")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Voluptua Ipsum</h6>
                                <span className="tx-muted tx-11">1 W</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Stet erat diam lorem ut ea ut ut at. At dolor
                                dolore.
                              </p>
                            </div>
                          </div>
                        </RSC>
                      </Tab>
                      <Tab eventKey="groups" title="Groups">
                <RSC style={{ width: "100%", height: "100vh" }}>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User12")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Socrates Itumay</h6>
                                <span className="tx-muted tx-11 align-self-start min-w-fit-content">
                                  2 hr
                                </span>
                              </div>
                              <p className="mb-0 tx-12">
                                Consetetur sanctus consetetur amet amet stet,.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User2")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Eos Tempor</h6>
                                <span className="tx-muted tx-11">3 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Ipsum lorem kasd sed labore sed elitr.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed selected">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User5")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Ut Nonumy</h6>
                                <span className="tx-muted tx-11">4 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Erat labore elitr takimata sea dolor. Et duo
                                takimata consetetur.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User6")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Ipsum Et</h6>
                                <span className="tx-muted tx-11">5 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Aliquyam justo diam eirmod rebum diam. Dolores
                                dolores dolor justo.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User3")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Et Kasd</h6>
                                <span className="tx-muted tx-11">3 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Sit takimata sanctus takimata takimata et ipsum
                                no. Eos duo elitr.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User4")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Dolor Dlita</h6>
                                <span className="tx-muted tx-11">4 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Erat clita gubergren sit labore. Dolor labore
                                eirmod takimata diam.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User4")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Voluptua Ipsum</h6>
                                <span className="tx-muted tx-11">1 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Stet erat diam lorem ut ea ut ut at. At dolor
                                dolore.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User5")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Socrates Itumay</h6>
                                <span className="tx-muted tx-11">1 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Consetetur sanctus consetetur amet amet stet,.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User2")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Eos Tempor</h6>
                                <span className="tx-muted tx-11">2 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Ipsum lorem kasd sed labore sed elitr.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User5")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Ut Nonumy</h6>
                                <span className="tx-muted tx-11">2 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Erat labore elitr takimata sea dolor. Et duo
                                takimata consetetur.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User6")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Ipsum Et</h6>
                                <span className="tx-muted tx-11">2 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Aliquyam justo diam eirmod rebum diam. Dolores
                                dolores dolor justo.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User3")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Et Kasd</h6>
                                <span className="tx-muted tx-11">1 W</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Sit takimata sanctus takimata takimata et ipsum
                                no. Eos duo elitr.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User4")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Dolor Dlita</h6>
                                <span className="tx-muted tx-11">4 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Erat clita gubergren sit labore. Dolor labore
                                eirmod takimata diam.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User4")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Voluptua Ipsum</h6>
                                <span className="tx-muted tx-11">1 W</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Stet erat diam lorem ut ea ut ut at. At dolor
                                dolore.
                              </p>
                            </div>
                          </div>
                        </RSC>
                      </Tab>
                      <Tab eventKey="calls" title="Calls">
                <RSC style={{ width: "100%", height: "100vh" }}>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User8")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Socrates Itumay</h6>
                                <span className="tx-muted tx-11 align-self-start min-w-fit-content">
                                  2 hr
                                </span>
                              </div>
                              <p className="mb-0 tx-12">
                                Consetetur sanctus consetetur amet amet stet,.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User2")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Eos Tempor</h6>
                                <span className="tx-muted tx-11">3 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Ipsum lorem kasd sed labore sed elitr.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed selected">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User5")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Ut Nonumy</h6>
                                <span className="tx-muted tx-11">4 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Erat labore elitr takimata sea dolor. Et duo
                                takimata consetetur.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User6")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Ipsum Et</h6>
                                <span className="tx-muted tx-11">5 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Aliquyam justo diam eirmod rebum diam. Dolores
                                dolores dolor justo.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User3")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Et Kasd</h6>
                                <span className="tx-muted tx-11">3 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Sit takimata sanctus takimata takimata et ipsum
                                no. Eos duo elitr.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User4")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Dolor Dlita</h6>
                                <span className="tx-muted tx-11">4 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Erat clita gubergren sit labore. Dolor labore
                                eirmod takimata diam.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User4")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Voluptua Ipsum</h6>
                                <span className="tx-muted tx-11">1 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Stet erat diam lorem ut ea ut ut at. At dolor
                                dolore.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User5")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Socrates Itumay</h6>
                                <span className="tx-muted tx-11">1 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Consetetur sanctus consetetur amet amet stet,.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User2")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Eos Tempor</h6>
                                <span className="tx-muted tx-11">2 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Ipsum lorem kasd sed labore sed elitr.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User5")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Ut Nonumy</h6>
                                <span className="tx-muted tx-11">2 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Erat labore elitr takimata sea dolor. Et duo
                                takimata consetetur.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar avatar-status">
                                <img
                                  alt="img"
                                  src={Allimages("User6")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Ipsum Et</h6>
                                <span className="tx-muted tx-11">2 D</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Aliquyam justo diam eirmod rebum diam. Dolores
                                dolores dolor justo.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User3")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Et Kasd</h6>
                                <span className="tx-muted tx-11">1 W</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Sit takimata sanctus takimata takimata et ipsum
                                no. Eos duo elitr.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3 border-bottom-dashed">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User4")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Dolor Dlita</h6>
                                <span className="tx-muted tx-11">4 hr</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Erat clita gubergren sit labore. Dolor labore
                                eirmod takimata diam.
                              </p>
                            </div>
                          </div>
                          <div className="chat-item d-flex pd-x-13 py-3">
                            <div className="mg-e-10">
                              <span className="avatar">
                                <img
                                  alt="img"
                                  src={Allimages("User4")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <h6 className="mb-0">Voluptua Ipsum</h6>
                                <span className="tx-muted tx-11">1 W</span>
                              </div>
                              <p className="mb-0 tx-12">
                                Stet erat diam lorem ut ea ut ut at. At dolor
                                dolore.
                              </p>
                            </div>
                          </div>
                        </RSC>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={12} xxl={6} xl={6}>
              <Card>
                <div className="main-content-app">
                  <div className="main-content-body main-content-body-chat">
                    <div className="main-chat-header">
                      <div className="main-header-arrow me-3">
                        <a  className="tx-inverse" id="ChatBodyHide">
                          <i className="icon ion-md-arrow-back"></i>
                        </a>
                      </div>
                      <div className="mg-e-10">
                        <span className="avatar">
                          <img
                            alt="img"
                            src={Allimages("User9")}
                            className="rounded-circle"
                          />
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex-between">
                          <div>
                            <h5 className="mb-0">Voluptua Ipsum</h5>
                            <span className="tx-muted tx-12">
                              active 2 min ago
                            </span>
                          </div>
                          <div className="btn-list d-flex align-items-center ms-auto">
                            <OverlayTrigger overlay={<Tooltip>Call</Tooltip>}>
                              <span className="btn btn-sm btn-def tx-muted">
                                <i className="fe fe-phone"></i>
                              </span>
                            </OverlayTrigger>

                            <OverlayTrigger
                              overlay={<Tooltip>Delete Chat</Tooltip>}
                            >
                              <span className="btn btn-sm btn-def tx-muted">
                                <i className="fe fe-trash"></i>
                              </span>
                            </OverlayTrigger>

                            <OverlayTrigger
                              overlay={<Tooltip>View Info</Tooltip>}
                            >
                              <span className="btn btn-sm btn-def tx-muted">
                                <i className="fe fe-alert-circle"></i>
                              </span>
                            </OverlayTrigger>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="main-chat-body" id="ChatBody">
                <RSC style={{ width: "100%", height: "100vh" }}>
                        <div className="content-inner chat">
                          <div className="chat-box-single-line">
                            <span className="timestamp">Today</span>
                          </div>
                          <div className="d-flex justify-content-start chat_block">
                            <div className="me-1 d-flex align-items-end">
                              <div className="avatar avatar-sm">
                                <img
                                  src={Allimages("User6")}
                                  className="rounded-circle"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="msg_block">
                              <div className="msg_container">
                                <div className="msg_cotainer-main">
                                  <span>Hi there! How are you?</span>
                                </div>
                                <span className="tx-10 tx-muted msg_time">
                                  8:10 AM
                                </span>
                              </div>
                              <div className="msg_container">
                                <div className="msg_cotainer-main">
                                  <span> Hey I'm Waiting for your reply.</span>
                                </div>
                                <div className="msg_cotainer-main">
                                  <span>I've to go to outside....</span>
                                </div>
                                <span className="tx-10 tx-muted msg_time">
                                  8:35 AM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end chat_block">
                            <div className="msg_block_send">
                              <div className="msg_container_send">
                                <div className="msg_cotainer_send-main">
                                  <span>
                                    Hi, I'll catch you in few minutes. Please
                                    wait!
                                  </span>
                                </div>
                                <span className="msg_time_send">8:38 AM</span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start chat_block">
                            <div className="me-1 d-flex align-items-end">
                              <div className="avatar avatar-sm">
                                <img
                                  src={Allimages("User6")}
                                  className="rounded-circle"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="msg_block">
                              <div className="msg_container">
                                <div className="msg_cotainer-main">
                                  <span>Ok Thanks!</span>
                                </div>
                                <div className="msg_cotainer-main">
                                  <span>I'm waiting for your message.</span>
                                </div>
                                <span className="tx-10 tx-muted msg_time">
                                  8:39 AM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end chat_block">
                            <div className="msg_block_send">
                              <div className="msg_container_send">
                                <div className="msg_cotainer_send-main">
                                  <span>Hey, I am at Coffee shop you said</span>
                                </div>
                                <div className="msg_cotainer_send-main">
                                  <span>I can't see you here.</span>
                                </div>
                                <div className="msg_cotainer_send-main">
                                  <div className="d-flex align-items-center">
                                    <a
                                      
                                      className="btn btn-sm btn-def white"
                                    >
                                      <i className="fe fe-play-circle"></i>
                                    </a>
                                    <span className="mx-2">
                                      <svg width="20" height="20">
                                        <defs></defs>
                                        <g transform="matrix(1,0,0,1,0,0)">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 3"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                          >
                                            <path
                                              d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                              fill="rgba(255, 255, 255, 0.5)"
                                              className="color000 svgShape"
                                            ></path>
                                          </svg>
                                        </g>
                                      </svg>
                                      <svg
                                        className="chat_audio"
                                        width="20"
                                        height="20"
                                      >
                                        <defs></defs>
                                        <g transform="matrix(1,0,0,1,0,0)">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 3"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                          >
                                            <path
                                              d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                              fill="rgba(255, 255, 255, 0.5)"
                                              className="color000 svgShape"
                                            ></path>
                                          </svg>
                                        </g>
                                      </svg>
                                      <svg
                                        className="chat_audio"
                                        width="20"
                                        height="20"
                                      >
                                        <defs></defs>
                                        <g transform="matrix(1,0,0,1,0,0)">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 3"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                          >
                                            <path
                                              d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                              fill="rgba(255, 255, 255, 0.5)"
                                              className="color000 svgShape"
                                            ></path>
                                          </svg>
                                        </g>
                                      </svg>
                                      <svg
                                        className="chat_audio"
                                        width="20"
                                        height="20"
                                      >
                                        <defs></defs>
                                        <g transform="matrix(1,0,0,1,0,0)">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 3"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                          >
                                            <path
                                              d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                              fill="rgba(255, 255, 255, 0.5)"
                                              className="color000 svgShape"
                                            ></path>
                                          </svg>
                                        </g>
                                      </svg>
                                      <svg
                                        className="chat_audio"
                                        width="20"
                                        height="20"
                                      >
                                        <defs></defs>
                                        <g transform="matrix(1,0,0,1,0,0)">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 3"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                          >
                                            <path
                                              d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                              fill="rgba(255, 255, 255, 0.5)"
                                              className="color000 svgShape"
                                            ></path>
                                          </svg>
                                        </g>
                                      </svg>
                                      <svg
                                        className="chat_audio"
                                        width="20"
                                        height="20"
                                      >
                                        <defs></defs>
                                        <g transform="matrix(1,0,0,1,0,0)">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 3"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                          >
                                            <path
                                              d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                              fill="rgba(255, 255, 255, 0.5)"
                                              className="color000 svgShape"
                                            ></path>
                                          </svg>
                                        </g>
                                      </svg>
                                      <svg
                                        className="chat_audio"
                                        width="20"
                                        height="20"
                                      >
                                        <defs></defs>
                                        <g transform="matrix(1,0,0,1,0,0)">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 3"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                          >
                                            <path
                                              d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                              fill="rgba(255, 255, 255, 0.5)"
                                              className="color000 svgShape"
                                            ></path>
                                          </svg>
                                        </g>
                                      </svg>
                                      <svg
                                        className="chat_audio"
                                        width="20"
                                        height="20"
                                      >
                                        <defs></defs>
                                        <g transform="matrix(1,0,0,1,0,0)">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 3"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                          >
                                            <path
                                              d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                              fill="rgba(255, 255, 255, 0.5)"
                                              className="color000 svgShape"
                                            ></path>
                                          </svg>
                                        </g>
                                      </svg>
                                      <svg
                                        className="chat_audio"
                                        width="20"
                                        height="20"
                                      >
                                        <defs></defs>
                                        <g transform="matrix(1,0,0,1,0,0)">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 3"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                          >
                                            <path
                                              d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                              fill="rgba(255, 255, 255, 0.5)"
                                              className="color000 svgShape"
                                            ></path>
                                          </svg>
                                        </g>
                                      </svg>
                                      <svg
                                        className="chat_audio"
                                        width="20"
                                        height="20"
                                      >
                                        <defs></defs>
                                        <g transform="matrix(1,0,0,1,0,0)">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 3"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                          >
                                            <path
                                              d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                              fill="rgba(255, 255, 255, 0.5)"
                                              className="color000 svgShape"
                                            ></path>
                                          </svg>
                                        </g>
                                      </svg>
                                    </span>
                                    <a
                                      
                                      className="btn btn-sm btn-def white"
                                    >
                                      <i className="fe fe-download"></i>
                                    </a>
                                  </div>
                                </div>
                                <span className="msg_time_send">9:15 AM</span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start chat_block">
                            <div className="me-1 d-flex align-items-end">
                              <div className="avatar avatar-sm">
                                <img
                                  src={Allimages("User6")}
                                  className="rounded-circle"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="msg_block">
                              <div className="msg_container">
                                <div className="msg_cotainer-main">
                                  <span>I just went to vegetable store.</span>
                                </div>
                                <div className="msg_cotainer-main">
                                  <span>
                                    You can come here or wait for just 5 min
                                  </span>
                                </div>
                                <span className="tx-10 tx-muted msg_time">
                                  9:15 AM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end chat_block">
                            <div className="msg_block_send">
                              <div className="msg_container_send">
                                <div className="msg_cotainer_send-main">
                                  <span>Ok then I'll wait...</span>
                                </div>
                                <div className="msg_cotainer_send-main">
                                  <span>
                                    just call me or come inside to coffee shop
                                    when you came by
                                  </span>
                                </div>
                                <span className="msg_time_send">9:15 AM</span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start chat_block">
                            <div className="me-1 d-flex align-items-end">
                              <div className="avatar avatar-sm">
                                <img
                                  src={Allimages("User6")}
                                  className="rounded-circle"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="msg_block">
                              <div className="msg_container">
                                <div className="msg_cotainer-main">
                                  <span>Deal... Bye</span>
                                </div>
                                <div className="msg_cotainer-main">
                                  <span>Enjoy your coffee</span>
                                </div>
                                <span className="tx-10 tx-muted msg_time">
                                  9:16 AM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end chat_block">
                            <div className="msg_block_send">
                              <div className="msg_container_send">
                                <div className="msg_cotainer_send-main">
                                  <span>Definitely and Bye...</span>
                                </div>
                                <span className="msg_time_send">9:17 AM</span>
                              </div>
                              <div className="msg_container_send">
                                <div className="msg_cotainer_send-main media-files">
                                  <img
                                    src={Allimages("Ecomerce30")}
                                    alt="img"
                                  />
                                </div>
                                <span className="msg_time_send">9:30 AM</span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start chat_block">
                            <div className="me-1 d-flex align-items-end">
                              <div className="avatar avatar-sm">
                                <img
                                  src={Allimages("User6")}
                                  className="rounded-circle"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="msg_block">
                              <div className="msg_container">
                                <div className="msg_cotainer-main">
                                  <span>I'm in coffee shop..</span>
                                </div>
                                <span className="tx-10 tx-muted msg_time">
                                  9:45 AM
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end chat_block">
                            <div className="msg_block_send">
                              <div className="msg_container_send">
                                <div className="msg_cotainer_send-main">
                                  <span>come to 8th number table</span>
                                </div>
                                <span className="msg_time_send">9:46 AM</span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start chat_block">
                            <div className="me-1 d-flex align-items-end">
                              <div className="avatar avatar-sm">
                                <img
                                  src={Allimages("User6")}
                                  className="rounded-circle"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="msg_block">
                              <div className="msg_container">
                                <div className="msg_cotainer-main">
                                  <span>Ok.. coming...</span>
                                </div>
                                <span className="tx-10 tx-muted msg_time">
                                  9:46 AM
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </RSC>
                    </div>
                    <div className="main-chat-footer br-bs-10 br-be-10">
                      <input
                        className="form-control radius-7"
                        placeholder="Type your message here..."
                        type="text"
                      />
                      <a
                        className="btn btn-outline-primary btn-icon me-2"
                        data-bs-toggle="tooltip"
                        
                        title="Attach Files"
                      >
                        <i className="fe fe-paperclip"></i>
                      </a>
                      <a className="btn btn-primary btn-icon" >
                        <i className="fe fe-send"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={12} xxl={3} xl={12}>
              <Card className="card overflow-hidden">
                <div className="main-content-app">
                  <Card.Body className="card-body p-0 chat-main">
                <RSC style={{ width: "100%", height: "100vh" }}>
                    <div className="float-end ms-auto m-4">
                      <Dropdown>
                        <Dropdown.Toggle
                          className="option-dots toggle-before-none p-0 border-0"
                          variant="default"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fe fe-more-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                          <Dropdown.Item >
                            <i className="fe fe-edit me-2"></i> Edit
                          </Dropdown.Item>
                          <Dropdown.Item >
                            <i className="fe fe-share me-2"></i> Share
                          </Dropdown.Item>
                          <Dropdown.Item >
                            <i className="fe fe-trash me-2"></i> Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="text-center border-bottom chat-image p-4">
                      <div className="avatar-xl avatar-status offline mb-3 mx-auto">
                        <NavLink
                          to={`${import.meta.env.BASE_URL}app/contacts/`}
                        >
                          <img
                            alt="avatar"
                            className="rounded-circle"
                            src={Allimages("User2")}
                          />
                        </NavLink>
                      </div>
                      <NavLink to={`${import.meta.env.BASE_URL}app/contacts/`}>
                        <h5 className="mb-1">Voluptua Ipsum</h5>
                      </NavLink>
                      <p className="tx-muted mt-0 mb-1 pt-0 tx-13">
                        UI/UX Designer
                      </p>
                      <p className="tx-muted mt-0 pt-0 tx-13 mb-0">
                        +773(161)-123-567
                      </p>
                    </div>
                    <div className="p-4 border-bottom-dashed">
                      <h6 className="mb-3">Contact Details :</h6>
                      <div className="d-flex mg-b-15">
                        <span className="avatar-sm rounded-circle bg-primary-transparent">
                          <i className="fe fe-mail tx-primary tx-14"></i>
                        </span>
                        <div className="flex-1 ms-2">
                          <p className="mb-1 font-weight-semibold tx-13">
                            Email:
                          </p>
                          <span className="tx-muted tx-12">
                            volupipsum @demo.com
                          </span>
                        </div>
                      </div>
                      <div className="d-flex">
                        <span className="avatar-sm rounded-circle bg-warning-transparent">
                          <i className="fe fe-map-pin tx-warning tx-14"></i>
                        </span>
                        <div className="flex-1 ms-2">
                          <p className="mb-1 font-weight-semibold tx-13">
                            Address:
                          </p>
                          <address className="tx-muted tx-12">
                            2nd street,
                            <br />
                            houston texas
                            <br />
                            united states
                            <br />
                          </address>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h6 className="mb-3">Shared Files :</h6>

                      <div className="d-flex mb-3">
                        <div className="me-2">
                          <div className="pd-10 border br-5 tx-muted">
                            <i className="fa fa-folder-open tx-16"></i>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="d-flex">
                            <div className="mb-0">
                              <p className="mb-1 font-weight-semibold tx-13">
                                Document
                              </p>
                              <span className="tx-muted tx-12">1.2mb</span>
                            </div>
                            <div className="ms-auto">
                              <a
                                
                                className="btn btn-sm btn-def tx-muted"
                              >
                                <i className="fe fe-download"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="me-2">
                          <div className="pd-10 border br-5 tx-muted">
                            <i className="fa fa-image tx-16"></i>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="d-flex">
                            <div className="mb-0">
                              <p className="mb-1 font-weight-semibold tx-13">
                                Image
                              </p>
                              <span className="tx-muted tx-12">5.2mb</span>
                            </div>
                            <div className="ms-auto">
                              <a
                                
                                className="btn btn-sm btn-def tx-muted"
                              >
                                <i className="fe fe-download"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mb-0">
                        <div className="me-2">
                          <div className="pd-10 border br-5 tx-muted">
                            <i className="fa fa-play tx-16"></i>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="d-flex">
                            <div className="mb-0">
                              <p className="mb-1 font-weight-semibold tx-13">
                                Video
                              </p>
                              <span className="tx-muted tx-12">21.2mb</span>
                            </div>
                            <div className="ms-auto">
                              <a
                                
                                className="btn btn-sm btn-def tx-muted"
                              >
                                <i className="fe fe-download"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </RSC>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Chat;
