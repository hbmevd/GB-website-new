import { Fragment } from 'react'
import Allimages from '../../../components/common/imagesdata/imagesdata'
import Pageheader from '../../../components/common/pageheader/pageheader'
import { Card, Col, Dropdown, Row, Tab, Tabs } from 'react-bootstrap'
import { LightGallery } from './data/lightgallery'
import { NavLink } from 'react-router-dom'


function Profilepage() {
    return (
        <Fragment>
            <Pageheader titles={'PROFILE'} active={'Profile'} Subtite={'Pages'} />

            <Row>
                <Col xl={12}>
                    <Card className="overflow-hidden">
                        <Card.Body className=" p-0">
                            <div className="profile-cover ht-350"></div>
                            <div className="px-4 pt-4 pos-relative">
                                <div className="rounded-circle profile-img">
                                    <img src={Allimages("User8")} alt="img" className="avatar-xxl rounded-circle" />
                                </div>
                                <div className="my-4 d-sm-flex">
                                    <div className="mt-0 mb-sm-0 mb-3"> 
                                        <h3 className="mb-1">Json Taylor</h3>
                                        <span className="tx-muted">UI/UX Designer</span>
                                    </div>
                                    <div className="ms-auto mg-sm-t-0-f mt-2">
                                        <div className="d-sm-flex">
                                            <div className="d-flex align-items-center me-4 mb-2 mg-b-sm-0-f">
                                                <span className="avatar rounded-circle bg-primary-transparent"><i className="fe fe-briefcase tx-primary"></i></span>
                                                <div className="ms-2">
                                                    <p className="mb-1 font-weight-semibold">Projects</p>
                                                    <span className="tx-muted">746</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center me-4 mb-2 mg-b-sm-0-f">
                                                <span className="avatar rounded-circle bg-warning-transparent"><i className="fe fe-cast tx-warning"></i></span>
                                                <div className="ms-2">
                                                    <p className="mb-1 font-weight-semibold">Following</p>
                                                    <span className="tx-muted">12K</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="avatar rounded-circle bg-green-transparent"><i className="fe fe-users tx-green"></i></span>
                                                <div className="ms-2">
                                                    <p className="mb-1 font-weight-semibold">Followers</p>
                                                    <span className="tx-muted">325K</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                    <div className="panel tabs-style7 scaleX mt-2">
                                <div className="panel-head">


                                    <Tabs
                                        defaultActiveKey="about"
                                        id="uncontrolled-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab eventKey="about" title="About" className='px-4'>
                                            <div className="card">
                                                <div className="card-body p-0 border-0">
                                                    <div className="p-4">
                                                        <h4 className="tx-15 text-uppercase font-weight-semibold mb-3">About Me</h4>
                                                        <p className="mb-1">Labore sadipscing amet ea ipsum ipsum, diam amet voluptua clita sea takimata labore, et duo et tempor vero dolores ipsum. Kasd rebum tempor lorem dolor at, et ut magna lorem.
                                                            Labore sadipscing amet ea ipsum ipsum, diam amet voluptua clita sea takimata labore, et duo et tempor vero dolores ipsum. Kasd rebum tempor lorem dolor at, et ut magna lorem.
                                                        </p>
                                                        <p className="mb-0">Labore sadipscing amet ea ipsum ipsum, diam amet voluptua clita sea takimata labore, et duo et tempor vero dolores ipsum. Kasd rebum tempor lorem dolor at, et ut magna lorem.
                                                            Labore sadipscing amet ea ipsum ips, Kasd rebum tempor lorem dolor at, et ut magna lorem.
                                                        </p>
                                                    </div>
                                                    <div className="border-top"></div>
                                                    <div className="p-4">
                                                        <h4 className="tx-15 text-uppercase font-weight-semibold mb-3">Skills</h4>
                                                        <span className="badge badge-lg badge-light rounded-pill mb-3 me-1 mb-sm-0">HTML</span>
                                                        <span className="badge badge-lg badge-light rounded-pill mb-3 me-1 mb-sm-0">CSS</span>
                                                        <span className="badge badge-lg badge-light rounded-pill mb-3 me-1 mb-sm-0">Javascript</span>
                                                        <span className="badge badge-lg badge-light rounded-pill mb-3 me-1 mb-sm-0">Jquery</span>
                                                        <span className="badge badge-lg badge-light rounded-pill mb-3 me-1 mb-sm-0">Adobe Photoshop</span>
                                                        <span className="badge badge-lg badge-light rounded-pill me-1">Figma</span>
                                                    </div>
                                                    <div className="border-top"></div>
                                                    <div className="p-4">
                                                        <h4 className="tx-15 text-uppercase font-weight-semibold mb-3">Contact Details</h4>
                                                        <div className="d-sm-flex">
                                                            <div className="d-flex align-items-center me-4 mb-3">
                                                                <span className="avatar rounded-circle bg-custom"><i className="icon ion-md-phone-portrait tx-muted op-7"></i></span>
                                                                <div className="ms-3">
                                                                    <p className="mb-1 font-weight-semibold">Mobile</p>
                                                                    <span className="tx-muted">+(110)-23493</span>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center me-4 mb-3 mb-sm-0">
                                                                <span className="avatar rounded-circle bg-custom"><i className="icon ion-logo-slack tx-muted op-7"></i></span>
                                                                <div className="ms-3">
                                                                    <p className="mb-1 font-weight-semibold">Slack</p>
                                                                    <span className="tx-muted">@spruko.w</span>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <span className="avatar rounded-circle bg-custom"><i className="icon ion-md-locate tx-muted op-7"></i></span>
                                                                <div className="ms-3">
                                                                    <p className="mb-1 font-weight-semibold">Current Address</p>
                                                                    <span className="tx-muted">San Francisco, CA</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="border-top"></div>
                                                    <div className="p-4">
                                                        <h4 className="tx-15 text-uppercase font-weight-semibold mb-3">Social Media</h4>
                                                        <div className="d-md-flex">
                                                            <div className="d-flex align-items-center me-4 mb-3 mb-md-0">
                                                                <span className="avatar rounded-circle bg-custom"><i className="icon ion-logo-github tx-muted op-7"></i></span>
                                                                <div className="ms-3">
                                                                    <p className="mb-1 font-weight-semibold">Github</p>
                                                                    <a  className="tx-inverse">github/spruko</a>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center me-4 mb-3 mb-md-0">
                                                                <span className="avatar rounded-circle bg-custom"><i className="icon ion-logo-twitter tx-muted op-7"></i></span>
                                                                <div className="ms-3">
                                                                    <p className="mb-1 font-weight-semibold">Twitter</p>
                                                                    <a  className="tx-inverse">twitter/spruko</a>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <span className="avatar rounded-circle bg-custom"><i className="icon ion-logo-linkedin tx-muted op-7"></i></span>
                                                                <div className="ms-3">
                                                                    <p className="mb-1 font-weight-semibold">Linkedin</p>
                                                                    <a  className="tx-inverse">spruko.com/</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="profile" title="Profile Edit" className='px-4'>
                                            <Card className=''>
                                                <Card.Body className=" border-0">
                                                    <div className="d-flex">
                                                        <div className="ms-auto btn-list">
                                                            <a  className="btn btn-sm btn-primary rounded-pill">Save Changes</a>
                                                            <a  className="btn btn-sm btn-outline-danger rounded-pill">Cancel</a>
                                                        </div>
                                                    </div>
                                                    <form className="form-horizontal">
                                                        <h4 className="tx-15 text-uppercase font-weight-semibold mb-3">Name</h4>
                                                        <div className="form-group ">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">First Name</label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control"
                                                                        placeholder="First Name" defaultValue="Json" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group ">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">last Name</label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control"
                                                                        placeholder="Last Name" defaultValue="Taylor" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group ">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">Nick Name</label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control"
                                                                        placeholder="Nick Name" defaultValue="Spruha" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h4 className="tx-15 text-uppercase font-weight-semibold mb-3">About Yourself</h4>
                                                        <div className="form-group ">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">About</label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <textarea className="form-control"  name="example-textarea-input" onChange={()=>{}} placeholder="about..">Labore sadipscing amet ea ipsum ipsum</textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h4 className="tx-15 text-uppercase font-weight-semibold mb-3">Work</h4>
                                                        <div className="form-group ">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">Designation</label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control"
                                                                        placeholder="Designation" defaultValue="UI/UX Designer" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h4 className="tx-15 text-uppercase font-weight-semibold mb-3">Contact</h4>
                                                        <div className="form-group ">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">Email<i>(required)</i></label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control" placeholder="Email"
                                                                        defaultValue="info@Spruha.in" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group ">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">Website</label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control"
                                                                        placeholder="Website" defaultValue="@spruko.w" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group ">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">Phone</label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control"
                                                                        placeholder="phone number" defaultValue="+125 3545654" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group ">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">Address</label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <textarea className="form-control" name="example-textarea-input"

                                                                        placeholder="Address">San Francisco, CA</textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h4 className="tx-15 text-uppercase font-weight-semibold mb-3">Social Info</h4>
                                                        <div className="form-group ">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">Twitter</label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control"
                                                                        placeholder="twitter" defaultValue="twitter.com/spruko.me" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group ">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">Facebook</label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control"
                                                                        placeholder="facebook"
                                                                        defaultValue="https://www.facebook.com/Spruha" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group ">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">Google+</label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control" placeholder="google"
                                                                        defaultValue="spruko.com" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group ">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">Linked in</label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control"
                                                                        placeholder="linkedin" defaultValue="linkedin.com/in/spruko" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group ">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">Github</label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <input type="text" className="form-control" placeholder="github"
                                                                        defaultValue="github.com/sprukos" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h4 className="tx-15 text-uppercase font-weight-semibold mb-3">Email Preferences</h4>
                                                        <div className="form-group mb-0">
                                                            <div className="row row-sm">
                                                                <div className="col-md-3">
                                                                    <label className="form-label">Verified User</label>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <label className="ckbox mg-b-10-f">
                                                                        <input type="checkbox" defaultChecked />
                                                                        <span>Accept to receive post or page notification emails</span>
                                                                    </label>
                                                                    <label className="ckbox">
                                                                        <input type="checkbox" defaultChecked />
                                                                        <span> Accept to receive email sent to multiple recipients</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </Card.Body>
                                            </Card>
                                        </Tab>
                                        <Tab eventKey="timeline" title="Timeline" >
                                            <Row className=" row-sm px-4">
                                                <div className="col-12">
                                                    <Card>
                                                        <Card.Header className="card-header px-4 py-2 pb-0">
                                                            <div className="d-flex">
                                                                <div className="me-2">
                                                                    <div className="avatar">
                                                                        <img alt="img" className="rounded-circle" src={Allimages("User6")} />
                                                                    </div>
                                                                </div>
                                                                <div className="ms-2">
                                                                    <h6 className="mb-0 mg-t-2">Mintrona Pechon Pechon</h6>
                                                                    <span className="tx-primary">just now</span>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <Dropdown >
                                                                        <Dropdown.Toggle data-bs-toggle="dropdown" className='toggle-before-none tx-inverse' variant='default' ><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                                        <Dropdown.Menu className=" shadow">
                                                                            <Dropdown.Item >Edit Post</Dropdown.Item>
                                                                            <Dropdown.Item >Delete Post</Dropdown.Item>
                                                                            <Dropdown.Item >Personal Settings</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </div>
                                                            </div>
                                                        </Card.Header>
                                                        <Card.Body>
                                                            <p className="mg-t-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                            <div className="row row-sm">
                                                                <div className="col">
                                                                    <NavLink to={`${import.meta.env.BASE_URL}pages/gallery`}><img alt="img" className="wd-200 br-5 mb-2 mt-2 me-4" src={Allimages("Media1")} /></NavLink>
                                                                    <NavLink to={`${import.meta.env.BASE_URL}pages/gallery`}><img alt="img" className="wd-200 br-5" src={Allimages("Media2")} /></NavLink>
                                                                </div>
                                                            </div>
                                                            <div className="mg-t-15">
                                                                <div className="avatar-list-stacked me-2">
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User2")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User6")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User8")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User10")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User12")} /></div>
                                                                    <div className="avatar avatar-sm bg-primary rounded-circle">+8</div>
                                                                </div>
                                                                <h6 className="mb-0 mt-3">28 people like your photo</h6>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card className="card">
                                                        <Card.Header className="card-header px-4 py-2 pb-0">
                                                            <div className="d-flex">
                                                                <div className="me-2">
                                                                    <div className="avatar">
                                                                        <img alt="img" className="rounded-circle" src={Allimages("User6")} />
                                                                    </div>
                                                                </div>
                                                                <div className="ms-2">
                                                                    <h6 className="mb-0 mg-t-2">Soejn Kin</h6>
                                                                    <span className="tx-muted tx-12">Mar 14 2021, 09:10AM</span>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <Dropdown className="dropdown">
                                                                        <Dropdown.Menu data-bs-toggle="dropdown" className='toggle-before-none tx-inverse' variant='default'><i className="fe fe-more-vertical"></i></Dropdown.Menu>
                                                                        <Dropdown.Menu className=" shadow">
                                                                            <Dropdown.Item >Edit Post</Dropdown.Item>
                                                                            <Dropdown.Item >Delete Post</Dropdown.Item>
                                                                            <Dropdown.Item >Personal Settings</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </div>
                                                            </div>
                                                        </Card.Header>
                                                        <Card.Body >
                                                            <p className="mg-t-0">Amet voluptua consetetur no accusam diam kasd gubergren et sed tempor. Ea sit eos ea et dolor invidunt sea diam,.</p>
                                                            <Row className="row-sm">
                                                                <div className="col">
                                                                    <NavLink to={`${import.meta.env.BASE_URL}pages/gallery`}><img alt="img" className="wd-200 br-5 mb-2 mt-2 me-4" src={Allimages("Media3")} /></NavLink>
                                                                </div>
                                                            </Row>
                                                            <div className="mg-t-15">
                                                                <div className="avatar-list-stacked me-2">
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User2")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User6")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User8")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User10")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User12")} /></div>
                                                                    <div className="avatar avatar-sm bg-primary rounded-circle">+8</div>
                                                                </div>
                                                                <h6 className="mb-0 mt-3">237 people like your photo</h6>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card>
                                                        <Card.Header className=" px-4 py-2">
                                                            <div className="d-flex">
                                                                <div className="me-2">
                                                                    <div className="avatar">
                                                                        <img alt="img" className="rounded-circle" src={Allimages("User11")} />
                                                                    </div>
                                                                </div>
                                                                <div className="ms-2">
                                                                    <h6 className="mb-0 mg-t-2">Oensk Lson</h6>
                                                                    <span className="tx-muted tx-12">Mar 15 2022, 01:08AM</span>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <Dropdown className="dropdown">
                                                                        <Dropdown.Toggle data-bs-toggle="dropdown"  className='toggle-before-none tx-inverse' variant='default'><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                                        <Dropdown.Menu className="dropdown-menu shadow">
                                                                            <Dropdown.Item >Edit Post</Dropdown.Item>
                                                                            <Dropdown.Item >Delete Post</Dropdown.Item>
                                                                            <Dropdown.Item >Personal Settings</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </div>
                                                            </div>
                                                        </Card.Header>
                                                        <Card.Body>
                                                            <p className="mg-t-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                            <div className="row row-sm">
                                                                <div className="col">
                                                                    <NavLink to={`${import.meta.env.BASE_URL}pages/gallery`}><img alt="img" className="wd-200 br-5 mb-2 mt-2 me-4" src={Allimages("Media1")} /></NavLink>
                                                                    <NavLink to={`${import.meta.env.BASE_URL}pages/gallery`}><img alt="img" className="wd-200 br-5" src={Allimages("Media2")} /></NavLink>
                                                                </div>
                                                            </div>
                                                            <div className="mg-t-15">
                                                                <div className="avatar-list-stacked me-2">
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User2")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User6")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User8")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User10")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User12")} /></div>
                                                                    <div className="avatar avatar-sm bg-primary rounded-circle">+8</div>
                                                                </div>
                                                                <h6 className="mb-0 mt-3">185 people like your photo</h6>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card className="card">
                                                        <Card.Header className="card-header px-4 py-2">
                                                            <div className="d-flex">
                                                                <div className="me-2">
                                                                    <div className="avatar">
                                                                        <img alt="img" className="rounded-circle" src={Allimages("User6")} />
                                                                    </div>
                                                                </div>
                                                                <div className="ms-2">
                                                                    <h6 className="mb-0 mg-t-2">Tson Down</h6>
                                                                    <span className="tx-muted tx-12">Apr 20 2022, 04:05AM</span>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <Dropdown className="dropdown">
                                                                        <Dropdown.Toggle data-bs-toggle="dropdown"  className='toggle-before-none tx-inverse' variant='default'><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                                        <Dropdown.Menu className="dropdown-menu shadow">
                                                                            <Dropdown.Item >Edit Post</Dropdown.Item>
                                                                            <Dropdown.Item >Delete Post</Dropdown.Item>
                                                                            <Dropdown.Item >Personal Settings</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </div>
                                                            </div>
                                                        </Card.Header>
                                                        <Card.Body className="card-body">
                                                            <p className="mg-t-0">Diam nonumy vero sed tempor sanctus stet justo. Sed gubergren duo justo justo labore tempor ut magna sed, takimata lorem voluptua invidunt et..</p>
                                                            <Row className="row row-sm">
                                                                <div className="col">
                                                                    <NavLink to={`${import.meta.env.BASE_URL}pages/gallery`}><img alt="img" className="wd-200 br-5 mb-2 mt-2 me-4" src={Allimages("Media4")} /></NavLink>
                                                                    <NavLink to={`${import.meta.env.BASE_URL}pages/gallery`}><img alt="img" className="wd-200 br-5 me-4" src={Allimages("Media5")} /></NavLink>
                                                                    <NavLink to={`${import.meta.env.BASE_URL}pages/gallery`}><img alt="img" className="wd-200 br-5" src={Allimages("Media6")} /></NavLink>
                                                                </div>
                                                            </Row>
                                                            <div className="mg-t-15">
                                                                <div className="avatar-list-stacked me-2">
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User2")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User6")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User8")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User10")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User12")} /></div>
                                                                    <div className="avatar avatar-sm bg-primary rounded-circle">+5</div>
                                                                </div>
                                                                <h6 className="mb-0 mt-3">103 people like your photo</h6>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card className="card">
                                                        <Card.Header className="card-header px-4 py-2">
                                                            <div className="d-flex">
                                                                <div className="me-2">
                                                                    <div className="avatar">
                                                                        <img alt="img" className="rounded-circle" src={Allimages("User6")} />
                                                                    </div>
                                                                </div>
                                                                <div className="ms-2">
                                                                    <h6 className="mb-0 mg-t-2">Uslod Loen</h6>
                                                                    <span className="tx-muted tx-12">Jun 21 2022, 02:03PM</span>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <Dropdown className="dropdown">
                                                                        <Dropdown.Toggle data-bs-toggle="dropdown"  className='toggle-before-none tx-inverse' variant='default'><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                                        <Dropdown.Menu className="dropdown-menu shadow">
                                                                            <Dropdown.Item >Edit Post</Dropdown.Item>
                                                                            <Dropdown.Item >Delete Post</Dropdown.Item>
                                                                            <Dropdown.Item >Personal Settings</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </div>
                                                            </div>
                                                        </Card.Header>
                                                        <Card.Body className="card-body">
                                                            <p className="mg-t-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                            <div className="row row-sm">
                                                                <div className="col">
                                                                    <NavLink to={`${import.meta.env.BASE_URL}pages/gallery`}><img alt="img" className="wd-200 br-5 mb-2 mt-2 me-4" src={Allimages("Media1")} /></NavLink>
                                                                    <NavLink to={`${import.meta.env.BASE_URL}pages/gallery`}><img alt="img" className="wd-200 br-5" src={Allimages("Media2")} /></NavLink>
                                                                </div>
                                                            </div>
                                                            <div className="mg-t-15">
                                                                <div className="avatar-list-stacked me-2">
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User2")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User6")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User8")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User10")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User12")} /></div>
                                                                    <div className="avatar avatar-sm bg-primary rounded-circle">+11</div>
                                                                </div>
                                                                <h6 className="mb-0 mt-3">228 people like your photo</h6>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card className="card">
                                                        <Card.Header className="card-header px-4 py-2">
                                                            <div className="d-flex">
                                                                <div className="me-2">
                                                                    <div className="avatar">
                                                                        <img alt="img" className="rounded-circle" src={Allimages("User6")} />
                                                                    </div>
                                                                </div>
                                                                <div className="ms-2">
                                                                    <h6 className="mb-0 mg-t-2">Sarah Chxn</h6>
                                                                    <span className="tx-muted tx-12">11 Nov 2022, 10:30AM</span>
                                                                </div>
                                                                <div className="ms-auto">
                                                                    <Dropdown className="dropdown">
                                                                        <Dropdown.Toggle data-bs-toggle="dropdown" className='toggle-before-none tx-inverse' variant='default'><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                                        <Dropdown.Menu className="dropdown-menu shadow">
                                                                            <Dropdown.Item >Edit Post</Dropdown.Item>
                                                                            <Dropdown.Item >Delete Post</Dropdown.Item>
                                                                            <Dropdown.Item >Personal Settings</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </div>
                                                            </div>
                                                        </Card.Header>
                                                        <Card.Body className="card-body">
                                                            <p className="mg-t-0">Lorem ut eos amet no eirmod dolores. Et dolor sadipscing est sit, no consetetur erat sanctus no duo. Takimata elitr..</p>
                                                            <div className="row row-sm">
                                                                <div className="col">
                                                                    <NavLink to={`${import.meta.env.BASE_URL}pages/gallery`}><img alt="img" className="wd-200 br-5 mb-2 mt-2 me-4" src={Allimages("Media5")} /></NavLink>
                                                                    <NavLink to={`${import.meta.env.BASE_URL}pages/gallery`}><img alt="img" className="wd-200 br-5" src={Allimages("Media6")} /></NavLink>
                                                                </div>
                                                            </div>
                                                            <div className="mg-t-15">
                                                                <div className="avatar-list-stacked me-2">
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User2")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User6")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User8")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User10")} /></div>
                                                                    <div className="avatar avatar-sm rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User12")} /></div>
                                                                    <div className="avatar avatar-sm bg-primary rounded-circle">+9</div>
                                                                </div>
                                                                <h6 className="mb-0 mt-3">9K people like your photo</h6>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </Row>
                                        </Tab>
                                        <Tab eventKey="gallery" title="Gallery" >

                                            <LightGallery />
                                        </Tab>
                                        <Tab eventKey="friends" title="Friends" >
                                            <Row className="row-sm px-4">
                                                <Col sm={12} md={6} lg={6} xl={3} className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                                    <Card className="card border">
                                                        <Card.Body className="card-body text-center">
                                                            <Dropdown className="dropdown float-end">
                                                                <Dropdown.Toggle  data-bs-toggle="dropdown" aria-haspopup="true" className='toggle-before-none' variant='default' aria-expanded="true"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right shadow">
                                                                    <Dropdown.Item ><i className="fe fe-message-square me-2 float-start"></i> Message</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-edit-2 me-2  float-start"></i> Edit</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-eye me-2 float-start"></i> View</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-trash-2 me-2 float-start"></i> Delete</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <NavLink to="#">
                                                                <img alt="avatar" className="rounded-circle" src={Allimages("User2")} />
                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">James Thomas</h4>
                                                                <span className="tx-muted">Web designer</span>
                                                                <div className="mt-3 d-flex mx-auto text-center justify-content-center">
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-facebook tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-twitter tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-linkedin tx-18"></i></div>
                                                                </div>
                                                            </NavLink>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col sm={12} md={6} lg={6} xl={3}>
                                                    <Card className="card border">
                                                        <Card.Body className="card-body text-center">
                                                            <Dropdown className="dropdown float-end">
                                                                <Dropdown.Toggle  data-bs-toggle="dropdown" className='toggle-before-none' variant='default' aria-haspopup="true" aria-expanded="true"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right shadow">
                                                                    <Dropdown.Item ><i className="fe fe-message-square me-2 float-start"></i> Message</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-edit-2 me-2  float-start"></i> Edit</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-eye me-2 float-start"></i> View</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-trash-2 me-2 float-start"></i> Delete</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <NavLink to="#">
                                                                <img alt="avatar" className="rounded-circle"
                                                                    src={Allimages("User3")} />
                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">Reynante Labares</h4>
                                                                <span className="tx-muted">Web designer</span>
                                                                <div className="mt-3 d-flex mx-auto text-center justify-content-center">
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-facebook tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-twitter tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-linkedin tx-18"></i></div>
                                                                </div>
                                                            </NavLink>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col sm={12} md={6} lg={6} xl={3}>
                                                    <Card className="card border">
                                                        <Card.Body className="card-body text-center">
                                                            <Dropdown className="dropdown float-end">
                                                                <Dropdown.Toggle  data-bs-toggle="dropdown" className='toggle-before-none' variant='default' aria-haspopup="true" aria-expanded="true"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right shadow">
                                                                    <Dropdown.Item ><i className="fe fe-message-square me-2 float-start"></i> Message</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-edit-2 me-2  float-start"></i> Edit</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-eye me-2 float-start"></i> View</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-trash-2 me-2 float-start"></i> Delete</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <NavLink to="#">
                                                                <img alt="avatar" className="rounded-circle"
                                                                    src={Allimages("User4")} />
                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">Owen Bongcaras</h4>
                                                                <span className="tx-muted">Web designer</span>
                                                                <div className="mt-3 d-flex mx-auto text-center justify-content-center">
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-facebook tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-twitter tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-linkedin tx-18"></i></div>
                                                                </div>
                                                            </NavLink>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col sm={12} md={6} lg={6} xl={3}>
                                                    <Card className="card border">
                                                        <Card.Body className="card-body text-center">
                                                            <Dropdown className="dropdown float-end">
                                                                <Dropdown.Toggle data-bs-toggle="dropdown" aria-haspopup="true" className='toggle-before-none' variant='default' aria-expanded="true"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right shadow">
                                                                    <Dropdown.Item ><i className="fe fe-message-square me-2 float-start"></i> Message</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-edit-2 me-2  float-start"></i> Edit</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-eye me-2 float-start"></i> View</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-trash-2 me-2 float-start"></i> Delete</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <NavLink to="#">
                                                                <img alt="avatar" className="rounded-circle"
                                                                    src={Allimages("User8")} />
                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">Stephen Metcalfe</h4>
                                                                <span className="tx-muted">Administrator</span>
                                                                <div className="mt-3 d-flex mx-auto text-center justify-content-center">
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-facebook tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-twitter tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-linkedin tx-18"></i></div>
                                                                </div>
                                                            </NavLink>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col sm={12} md={6} lg={6} xl={3}>
                                                    <Card className="card border">
                                                        <Card.Body className="card-body text-center">
                                                            <Dropdown className="dropdown float-end">
                                                                <Dropdown.Toggle  data-bs-toggle="dropdown" className='toggle-before-none' variant='default' aria-haspopup="true" aria-expanded="true"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right shadow">
                                                                    <Dropdown.Item ><i className="fe fe-message-square me-2 float-start"></i> Message</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-edit-2 me-2  float-start"></i> Edit</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-eye me-2 float-start"></i> View</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-trash-2 me-2 float-start"></i> Delete</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <NavLink to="#">
                                                                <img alt="avatar" className="rounded-circle"
                                                                    src={Allimages("User12")} />
                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">Socrates Itumay</h4>
                                                                <span className="tx-muted">Project Manager</span>
                                                                <div className="mt-3 d-flex mx-auto text-center justify-content-center">
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-facebook tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-twitter tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-linkedin tx-18"></i></div>
                                                                </div>
                                                            </NavLink>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col sm={12} md={6} lg={6} xl={3}>
                                                    <Card className="card border">
                                                        <Card.Body className="card-body text-center">
                                                            <Dropdown className="dropdown float-end">
                                                                <Dropdown.Toggle  data-bs-toggle="dropdown" aria-haspopup="true" className='toggle-before-none' variant='default' aria-expanded="true"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right shadow">
                                                                    <Dropdown.Item ><i className="fe fe-message-square me-2 float-start"></i> Message</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-edit-2 me-2  float-start"></i> Edit</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-eye me-2 float-start"></i> View</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-trash-2 me-2 float-start"></i> Delete</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <NavLink to="#">
                                                                <img alt="avatar" className="rounded-circle"
                                                                    src={Allimages("User13")} />
                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">Odne Tho</h4>
                                                                <span className="tx-muted">Web Designer</span>
                                                                <div className="mt-3 d-flex mx-auto text-center justify-content-center">
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-facebook tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-twitter tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-linkedin tx-18"></i></div>
                                                                </div>
                                                            </NavLink>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col sm={12} md={6} lg={6} xl={3}>
                                                    <Card className="card border">
                                                        <Card.Body className="card-body text-center">
                                                            <Dropdown className="dropdown float-end">
                                                                <Dropdown.Toggle data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className='toggle-before-none' variant='default'><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right shadow">
                                                                    <Dropdown.Item ><i className="fe fe-message-square me-2 float-start"></i> Message</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-edit-2 me-2  float-start"></i> Edit</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-eye me-2 float-start"></i> View</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-trash-2 me-2 float-start"></i> Delete</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <NavLink to="#">
                                                                <img alt="avatar" className="rounded-circle"
                                                                    src={Allimages("User14")} />
                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">Ayran Myan</h4>
                                                                <span className="tx-muted">App Developer</span>
                                                                <div className="mt-3 d-flex mx-auto text-center justify-content-center">
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-facebook tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-twitter tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-linkedin tx-18"></i></div>
                                                                </div>
                                                            </NavLink>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col sm={12} md={6} lg={6} xl={3}>
                                                    <Card className="card border">
                                                        <Card.Body className="card-body text-center">
                                                            <Dropdown className=" float-end">
                                                                <Dropdown.Toggle data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className='toggle-before-none' variant='default'><i className="fe fe-more-vertical "></i></Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right shadow">
                                                                    <Dropdown.Item ><i className="fe fe-message-square me-2 float-start"></i> Message</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-edit-2 me-2  float-start"></i> Edit</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-eye me-2 float-start"></i> View</Dropdown.Item>
                                                                    <Dropdown.Item ><i className="fe fe-trash-2 me-2 float-start"></i> Delete</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <NavLink to="#">
                                                                <img alt="avatar" className="rounded-circle"
                                                                    src={Allimages("User8")} />
                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">Hawk Yso</h4>
                                                                <span className="tx-muted">Administrator</span>
                                                                <div className="mt-3 d-flex mx-auto text-center justify-content-center">
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-facebook tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-twitter tx-18"></i></div>
                                                                    <div className="btn btn-icon btn-outline-primary rounded-circle mx-3"><i className="bx bxl-linkedin tx-18"></i></div>
                                                                </div>
                                                            </NavLink>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                    </Card>
                </Col>

            </Row>
        </Fragment>
    )
}

export default Profilepage