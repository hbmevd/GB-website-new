Dropdown.Toggle
import { Fragment } from 'react'
import Allimages from '../../../../components/common/imagesdata/imagesdata'
import Pageheader from '../../../../components/common/pageheader/pageheader'
import { Card, Col, Dropdown, Row } from 'react-bootstrap'

function Files() {
    return (
        <Fragment>
            <Pageheader titles={"FILE MANAGER 1"} active={"File Manager1"} Subtite={"Apps"} />

            <Row className="row align-items-center mb-4">
                <Col md={4} sm={12} className="col-xl">
                    <div className="tx-18 mb-sm-0 mb-2">Files</div>
                </Col>
                <Col xl={5} md={8} sm={12} >
                    <Row >
                        <div className="col-sm col-12">
                            <div className="input-group mb-sm-0 mb-2">
                                <input type="text" className="form-control" placeholder="Search folder....." />
                                <span className="input-group-append">
                                    <button className="btn ripple btn-primary" type="button">Search</button>
                                </span>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" className="btn-check" name="fmLayout" id="fmGrid" defaultChecked />
                                <label className="btn btn-outline-primary mb-0" htmlFor="fmGrid"><i className="fe fe-grid"></i></label>

                                <input type="radio" className="btn-check" name="fmLayout" id="fmList" />
                                <label className="btn btn-outline-primary mb-0" htmlFor="fmList"><i className="fe fe-list"></i></label>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="btn-group">
                                <Dropdown>
                                    <Dropdown.Toggle className="btn btn-outline-primary toggle-before-none" variant="default" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fe fe-clock"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                        <Dropdown.Item>Date</Dropdown.Item>
                                        <Dropdown.Item >Name</Dropdown.Item>
                                        <Dropdown.Item >Type</Dropdown.Item>
                                        <Dropdown.Item >Size</Dropdown.Item>
                                        <Dropdown.Item >Starred</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>



            <Row className="file-manager1">
                <Col xl={2} md={4} sm={6} >
                    <Card className=" p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File4")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">My Documents</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">1.2 Gb</span>
                                <div className="avatar-list-stacked">
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User1")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User2")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User3")} /></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File4")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">All Projects</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">4.51 Gb</span>
                                <div className="avatar-list-stacked">
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User9")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User12")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User3")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User4")} /></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File4")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">Demo Files</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">4.51 Gb</span>
                                <div className="avatar-list-stacked">
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User10")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User12")} /></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File4")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">My Images</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">1.7 Gb</span>
                                <div className="avatar-list-stacked">
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User5")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User18")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User1")} /></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File4")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">Project Files</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">2 Gb</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File4")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">Backup</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">18.9 Gb</span>
                                <div className="avatar-list-stacked">
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User1")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User2")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User3")} /></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File4")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">Drive Fles</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">515 Mb</span>
                                <div className="avatar-list-stacked">
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User15")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User20")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User13")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User7")} /></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File4")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">Shared</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">21 Gb</span>
                                <div className="avatar-list-stacked">
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User1")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User2")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User3")} /></div>
                                    <div className="avatar avatar-xs rounded-circle bg-primary">+8</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File4")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">Bg Images</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">689 Mb</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File4")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">Sounds</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">310 Kb</span>
                                <div className="avatar-list-stacked">
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User11")} /></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File4")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">Drivers</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">1.1 Gb</span>
                                <div className="avatar-list-stacked">
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User17")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User14")} /></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File4")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">Screenshots</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">1 Gb</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File4")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">My PDF</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">700 Mb</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File4")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">Profile Images</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">400 Mb</span>
                                <div className="avatar-list-stacked">
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User17")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User8")} /></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File7")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">word</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">30 Kb</span>
                                <div className="avatar-list-stacked">
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User7")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User8")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User10")} /></div>
                                    <div className="avatar avatar-xs rounded-circle bg-primary">+2</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File2")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">data</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">20 Kb</span>
                                <div className="avatar-list-stacked">
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User12")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User13")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User14")} /></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File3")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">Excel</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">15 Kb</span>
                                <div className="avatar-list-stacked">
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User1")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User2")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User3")} /></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card className="p-0 ">
                        <div className="d-flex align-items-center px-3 pt-3">
                            <a  className="tx-muted"><i className="fe fe-star"></i></a>
                            <Dropdown className="float-end ms-auto">
                                <Dropdown.Toggle className="tx-muted toggle-before-none p-0 border-0" variant="default" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle >
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                    <Dropdown.Item><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                    <Dropdown.Item><i className="fe fe-info me-2"></i> Info</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body className="pt-0">
                            <div className="wd-70">
                                <img src={Allimages("File8")} alt="img" className="radius-4" />
                            </div>
                            <h6 className="mb-2 font-weight-semibold">zip</h6>
                            <div className="d-flex align-items-cener justify-content-between">
                                <span className="tx-muted">14.4 Gb</span>
                                <div className="avatar-list-stacked">
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User15")} /></div>
                                    <div className="avatar avatar-xs rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User16")} /></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <ul className="pagination float-end mb-2">
                <li className="page-item"><a className="page-link" ><i className="icon ion-ios-arrow-back"></i></a></li>
                <li className="page-item active"><a className="page-link" >1</a></li>
                <li className="page-item"><a className="page-link" >2</a></li>
                <li className="page-item"><a className="page-link" >3</a></li>
                <li className="page-item"><a className="page-link" ><i className="icon ion-ios-arrow-forward"></i></a></li>
            </ul>
        </Fragment>
    )
}

export default Files