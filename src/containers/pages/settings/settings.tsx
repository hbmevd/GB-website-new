import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Nav, Tab } from "react-bootstrap";

function Settings() {
  return (
    <Fragment>
      <Pageheader titles={"SETTINGS"} active={"Settings"} Subtite={"Pages"} />
      <div className="row">
        <div className="col-md-12">
          <div className="card overflow-hidden">
            <div className="card-body p-0">
              <div className="main-settings-row">
                <div className="border-end border-bottom bd-lg-b-0 d-flex flex-column mn-wd-20p">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="general"
                  >
                    <div className="row">
                      <div className="col-xl-2 col-lg-3 border-end">
                        <Nav variant="pills" className="flex-column p-3">
                          <Nav.Item>
                            <Nav.Link eventKey="general">General</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="language">
                              Language & Region
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="notifications">
                              Notifications
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="security">
                              Security & Verification
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="privacy">
                              Privacy & Others
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="integration">
                              Integration
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <div className="col-xl-10 col-lg-9 p-0">
                        <Tab.Content>
                          <Tab.Pane eventKey="general">
                            <div className="p-4 border-bottom">
                              <h5 className="mb-0">General Settings</h5>
                            </div>
                            <div
                              className="p-4 main-settings-app overflow-auto"
                              id="generalSettings"
                            >
                              <form className="form-horizontal">
                                <p className="font-weight-semibold tx-15 pb-2 border-bottom-dashed tx-primary">
                                  Personal Info
                                </p>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                      <label
                                        htmlFor="userName"
                                        className="form-label"
                                      >
                                        User Name
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="userName"
                                        placeholder="User Name"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                      <label
                                        htmlFor="email"
                                        className="form-label"
                                      >
                                        Email
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <p className="font-weight-semibold tx-15 pb-2 border-bottom-dashed tx-primary">
                                  Contact
                                </p>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                      <label
                                        htmlFor="mobileNumber"
                                        className="form-label"
                                      >
                                        Mobile Number
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="mobileNumber"
                                        placeholder="Mobile Number"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                      <label
                                        htmlFor="altNumber"
                                        className="form-label"
                                      >
                                        Alternate Number
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="altNumber"
                                        placeholder="Alternate Number"
                                        
                                      />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="p-3 mt-auto border-top">
                              <div className="text-end btn-list me-3">
                                <a  className="btn btn-outline-danger">
                                  Discard
                                </a>
                                <a  className="btn btn-primary">
                                  Save Changes
                                </a>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="language">
                            <div className="p-4 border-bottom">
                              <h5 className="mb-0">Personal Info</h5>
                            </div>
                            <div
                              className="p-4 main-settings-app overflow-auto"
                              id="generalSettings"
                            >

                              <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                      <label
                                        htmlFor="userName"
                                        className="form-label"
                                      >
                                        User Name
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="userName"
                                        placeholder="User Name"
                                        value="Jason Taylor"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                      <label
                                        htmlFor="email"
                                        className="form-label"
                                      >
                                        Email
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        value="json.taylor@gmail.com"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <p className="font-weight-semibold tx-15 pb-2 border-bottom-dashed tx-primary">
                                  Contact
                                </p>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                      <label
                                        htmlFor="mobileNumber"
                                        className="form-label"
                                      >
                                        Mobile Number
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="mobileNumber"
                                        placeholder="Mobile Number"
                                        value="+(110)-3984922"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                      <label
                                        htmlFor="altNumber"
                                        className="form-label"
                                      >
                                        Alternate Number
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="altNumber"
                                        placeholder="Alternate Number"
                                        value="+(110)-19549223"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="p-3 mt-auto border-top">
                              <div className="text-end btn-list me-3">
                                <a  className="btn btn-outline-danger">
                                  Discard
                                </a>
                                <a  className="btn btn-primary">
                                  Save Changes
                                </a>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="notifications">
                            <div className="p-4 border-bottom">
                              <h5 className="mb-0">Notifications Settings</h5>
                            </div>
                            <div
                              className="p-4 main-settings-app overflow-auto"
                              id="notificationsSettings"
                            >
                              <form className="form-horiontal">
                                <p className="font-weight-semibold tx-15 pb-2 border-bottom-dashed tx-primary">
                                  General
                                </p>
                                <div className="form-group mb-2">
                                  <div className="row">
                                    <div className="col-10 order-2">
                                      <label className="form-label font-weight-semibold mt-0 mb-0">
                                        Comments
                                      </label>
                                      <p className="tx-muted tx-12">
                                        Enable notifications form comments on
                                        your posts and replies to your comments
                                      </p>
                                    </div>
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-sm-12 order-1">
                                      <label htmlFor="cmts" className="mt-1">
                                        <input
                                          type="checkbox"
                                          className="custom-switch-input"
                                          id="cmts"
                                          defaultChecked
                                        />
                                        <span className="custom-switch-indicator"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group mb-2">
                                  <div className="row">
                                    <div className="col-10 order-2">
                                      <label className="form-label font-weight-semibold mt-0 mb-0">
                                        Tags
                                      </label>
                                      <p className="tx-muted tx-12">
                                        Receive notifications when someone
                                        mentioned in a comment or a post.
                                      </p>
                                    </div>
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-sm-12 order-1">
                                      <label htmlFor="tgs" className="mt-1">
                                        <input
                                          type="checkbox"
                                          className="custom-switch-input"
                                          id="tgs"
                                        />
                                        <span className="custom-switch-indicator"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-10 order-2">
                                      <label className="form-label font-weight-semibold mt-0 mb-0">
                                        Reminders
                                      </label>
                                      <p className="tx-muted tx-12">
                                        Receive notifications to remind you of
                                        Tasks, Events, Updates etc.
                                      </p>
                                    </div>
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-sm-12 order-1">
                                      <label htmlFor="rmdrs" className="mt-1">
                                        <input
                                          type="checkbox"
                                          className="custom-switch-input"
                                          id="rmdrs"
                                          defaultChecked
                                        />
                                        <span className="custom-switch-indicator"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <p className="font-weight-semibold tx-15 pb-2 border-bottom-dashed tx-primary">
                                  Workspace
                                </p>
                                <div className="form-group mb-2">
                                  <div className="row">
                                    <div className="col-10 order-2">
                                      <label className="form-label font-weight-semibold mt-0 mb-0">
                                        Weekly, Monthly Report
                                      </label>
                                      <p className="tx-muted tx-12">
                                        Receive weekly and monthly report of
                                        workspace details including projects,
                                        hires etc.
                                      </p>
                                    </div>
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-sm-12 order-1">
                                      <label htmlFor="rprt" className="mt-1">
                                        <input
                                          type="checkbox"
                                          className="custom-switch-input"
                                          id="rprt"
                                          defaultChecked
                                        />
                                        <span className="custom-switch-indicator"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group mb-2">
                                  <div className="row">
                                    <div className="col-10 order-2">
                                      <label className="form-label font-weight-semibold mt-0 mb-0">
                                        Company Announcements
                                      </label>
                                      <p className="tx-muted tx-12">
                                        Receive notifications about company
                                        announcements.
                                      </p>
                                    </div>
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-sm-12 order-1">
                                      <label htmlFor="ancmnts" className="mt-1">
                                        <input
                                          type="checkbox"
                                          className="custom-switch-input"
                                          id="ancmnts"
                                          defaultChecked
                                        />
                                        <span className="custom-switch-indicator"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <p className="font-weight-semibold tx-15 pb-2 border-bottom-dashed tx-primary">
                                  Personal
                                </p>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-10 order-2">
                                      <label className="form-label font-weight-semibold mt-0 mb-0">
                                        Profile
                                      </label>
                                      <p className="tx-muted tx-12">
                                        Enable notifications from profile
                                        activity.
                                      </p>
                                    </div>
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-sm-12 order-1">
                                      <label htmlFor="prfl" className="mt-1">
                                        <input
                                          type="checkbox"
                                          className="custom-switch-input"
                                          id="prfl"
                                        />
                                        <span className="custom-switch-indicator"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <p className="font-weight-semibold tx-15 pb-2 border-bottom-dashed tx-primary">
                                  Account
                                </p>
                                <div className="form-group mb-0">
                                  <div className="row">
                                    <div className="col-10 order-2">
                                      <label className="form-label font-weight-semibold mt-0 mb-0">
                                        Security
                                      </label>
                                      <p className="tx-muted tx-12">
                                        Receive notifications on password
                                        change, mobile number change or any
                                        other changes in your account.
                                      </p>
                                    </div>
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-sm-12 order-1">
                                      <label htmlFor="scrty" className="mt-1">
                                        <input
                                          type="checkbox"
                                          className="custom-switch-input"
                                          id="scrty"
                                          defaultChecked
                                        />
                                        <span className="custom-switch-indicator"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="p-3 mt-auto border-top">
                              <div className="text-end btn-list me-3">
                                <a  className="btn btn-outline-danger">
                                  Discard
                                </a>
                                <a  className="btn btn-primary">
                                  Save Changes
                                </a>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="security">

                            <div className="p-4 border-bottom">
                              <h5 className="mb-0">
                                Security & Verfication Settings
                              </h5>
                            </div>
                            <div
                              className="p-4 main-settings-app overflow-auto"
                              id="secAndverifSettings"
                            >
                              <form className="form-horizontal">
                                <p className="font-weight-semibold tx-15 pb-2 border-bottom-dashed tx-primary">
                                  Security
                                </p>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                      <label className="form-label">
                                        2 Step Verification
                                        <a
                                          
                                          className="ms-2 tx-inverse"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title="help"
                                        >
                                          <i className="fe fe-help-circle tx-14 d-inline-block"></i>
                                        </a>
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                      <label
                                        htmlFor="twoStepVerification"
                                        className="mb-0 mt-1"
                                      >
                                        <input
                                          type="checkbox"
                                          className="custom-switch-input"
                                          id="twoStepVerification"
                                        />
                                        <span className="custom-switch-indicator"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                      <label
                                        htmlFor="changeNumber"
                                        className="form-label"
                                      >
                                        Change Number
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="changeNumber"
                                        placeholder="Enter new mobile number"
                                      />
                                      <p className="tx-warning mt-2">
                                        You need to verify mobile number first.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                      <label className="form-label">
                                        Change Password
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                      <div className="row">
                                        <div className="col-xl-6 col-md-12">
                                          <input
                                            className="form-control"
                                            id="password2"
                                            placeholder="Enter current password"
                                          />
                                        </div>
                                        <div className="col-xl-6 col-md-12">
                                          <input
                                            className="form-control mt-1 mt-lg-0"
                                            id="password"
                                            placeholder="Enter new password"
                                          />
                                        </div>
                                        <div className="col-md-12">
                                          <p className="tx-muted mt-2">
                                            Use a strong password of atleast 8
                                            characters in combination of
                                            letters, numbers and special
                                            characters.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className="font-weight-semibold tx-15 pb-2 border-bottom-dashed tx-primary mb-3">
                                  Identity Verificaton
                                  <a
                                    
                                    className="ms-2 tx-inverse"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="help"
                                  >
                                    <i className="fe fe-help-circle tx-14 d-inline-block"></i>
                                  </a>
                                </p>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                      <p className="tx-muted">
                                        <span className="font-weight-semibold">
                                          Verification only takes a few minutes,
                                        </span>
                                        helps secure your payments and
                                        transactions.
                                      </p>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                      <a
                                        
                                        className="btn btn-outline-primary rounded-pill"
                                      >
                                        Upload ID
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <p className="font-weight-semibold tx-15 pb-2 border-bottom-dashed tx-primary mb-3">
                                  Mobile Number Verificaton
                                  <a
                                    
                                    className="ms-2 tx-inverse"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="help"
                                  >
                                    <i className="fe fe-help-circle tx-14 d-inline-block"></i>
                                  </a>
                                </p>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                      <label
                                        htmlFor="numberVerif"
                                        className="form-label"
                                      >
                                        Mobile Number
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                      <div className="row">
                                        <div className="col-md-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="numberVerif"
                                            placeholder="Enter mobile number"
                                          />
                                        </div>
                                        <div className="col-md-3">
                                          <a
                                            
                                            className="btn btn-outline-primary rounded-pill mt-3 mt-md-0"
                                          >
                                            Verify
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className="font-weight-semibold tx-15 pb-2 border-bottom-dashed tx-primary mb-3">
                                  Mail Verificaton
                                  <a
                                    
                                    className="ms-2 tx-inverse"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="help"
                                  >
                                    <i className="fe fe-help-circle tx-14 d-inline-block"></i>
                                  </a>
                                </p>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                      <label
                                        htmlFor="mailVerif"
                                        className="form-label"
                                      >
                                        Mail
                                      </label>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                      <div className="row">
                                        <div className="col-md-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="mailVerif"
                                            placeholder="Enter Mail"
                                          />
                                        </div>
                                        <div className="col-md-3">
                                          <a
                                            
                                            className="btn btn-outline-primary rounded-pill mt-3 mt-md-0"
                                          >
                                            Verify
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="p-3 mt-auto border-top">
                              <div className="text-end btn-list me-3">
                                <a  className="btn btn-outline-danger">
                                  Discard
                                </a>
                                <a  className="btn btn-primary">
                                  Save Changes
                                </a>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="privacy">
                            <div className="p-4 border-bottom">
                              <h5 className="mb-0">Privacy & Other Settings</h5>
                            </div>
                            <div
                              className="p-4 main-settings-app overflow-auto"
                              id="otherSettings"
                            >
                              <form className="form-horizontal">
                                <p className="font-weight-semibold tx-15 pb-2 border-bottom-dashed tx-primary">
                                  Privacy
                                </p>
                                <div className="form-group">
                                  <div className="row align-items-center">
                                    <div className="col-10 order-2">
                                      <label className="form-label mt-0">
                                        Profile Visibility
                                      </label>
                                    </div>
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-sm-12 order-1">
                                      <label
                                        htmlFor="profileVis"
                                        className="mt-1"
                                      >
                                        <input
                                          type="checkbox"
                                          className="custom-switch-input"
                                          id="profileVis"
                                          defaultChecked
                                        />
                                        <span className="custom-switch-indicator"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="row align-items-center">
                                    <div className="col-10 order-2">
                                      <label className="form-label mt-0">
                                        Online Status
                                      </label>
                                    </div>
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-sm-12 order-1">
                                      <label
                                        htmlFor="onlineStatus"
                                        className="mt-1"
                                      >
                                        <input
                                          type="checkbox"
                                          className="custom-switch-input"
                                          id="onlineStatus"
                                         
                                        />
                                        <span className="custom-switch-indicator"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <p className="font-weight-semibold tx-15 pb-2 border-bottom-dashed tx-primary">
                                  Others
                                </p>
                                <div className="form-group mb-0">
                                  <div className="row">
                                    <div className="col-10 order-2">
                                      <label className="form-label font-weight-semibold mt-0 mb-0">
                                        Auto Reply
                                      </label>
                                      <p className="tx-muted tx-12">
                                        Enable this feature to reply
                                        automatically to a message while you are
                                        on offline.
                                      </p>
                                    </div>
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-sm-12 order-1">
                                      <label
                                        htmlFor="autoReply"
                                        className="mt-1"
                                      >
                                        <input
                                          type="checkbox"
                                          className="custom-switch-input"
                                          id="autoReply"
                                        />
                                        <span className="custom-switch-indicator"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="p-3 mt-auto border-top">
                              <div className="text-end btn-list me-3">
                                <a  className="btn btn-outline-danger">
                                  Discard
                                </a>
                                <a  className="btn btn-primary">
                                  Save Changes
                                </a>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="integration">
                            <div className="p-4 border-bottom">
                              <h5 className="mb-0">Integration Settings</h5>
                            </div>
                            <div
                              className="p-4 main-settings-app overflow-auto"
                              id="integrationSettings"
                            >
                              <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-10 order-2">
                                      <label className="font-weight-semibold form-label mb-0 mt-0">
                                        Dropbox
                                      </label>
                                      <p className="tx-muted tx-12">
                                        Bring your Files and Cloud together.
                                      </p>
                                    </div>
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-sm-12 order-1">
                                      <label
                                        htmlFor="intDropbox"
                                        className="mt-1"
                                      >
                                        <input
                                          type="checkbox"
                                          className="custom-switch-input"
                                          id="intDropbox"
                                          defaultChecked
                                        />
                                        <span className="custom-switch-indicator"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-10 order-2">
                                      <label className="font-weight-semibold form-label mb-0 mt-0">
                                        Google Calendar
                                      </label>
                                      <p className="tx-muted tx-12">
                                        Manage your Shedules and Upcoming Events
                                        in less time.
                                      </p>
                                    </div>
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-sm-12 order-1">
                                      <label htmlFor="intCal" className="mt-1">
                                        <input
                                          type="checkbox"
                                          className="custom-switch-input"
                                          id="intCal"
                                          
                                        />
                                        <span className="custom-switch-indicator"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-10 order-2">
                                      <label className="font-weight-semibold form-label mb-0 mt-0">
                                        Facebook
                                      </label>
                                      <p className="tx-muted tx-12">
                                        Connect with Family, Friends and other
                                        people you know and get updates.
                                      </p>
                                    </div>
                                    <div className="col-xl-auto col-lg-auto col-md-auto col-sm-12 order-1">
                                      <label htmlFor="intFb" className="mt-1">
                                        <input
                                          type="checkbox"
                                          className="custom-switch-input"
                                          id="intFb"
                                          
                                        />
                                        <span className="custom-switch-indicator"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="p-3 mt-auto border-top">
                              <div className="btn-list text-end me-3">
                                <a  className="btn btn-outline-danger">
                                  Discard
                                </a>
                                <a  className="btn btn-primary">
                                  Save Changes
                                </a>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </div>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Settings;
