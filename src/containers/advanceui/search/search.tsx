import { Fragment } from "react";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Search() {
  return (
    <Fragment>
      <Pageheader titles={"SEARCH"} active={"Search"} Subtite={"Advanced UI"} />
      <Row>
        <Col sm={12} md={12}>
          <Card>
            <Card.Body className=" p-0">
              <div className="p-sm-4 p-3 border-bottom">
                <div className="input-group mb-4">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Ipsum"
                    placeholder="Searching....."
                  />
                  <span className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      Search
                    </button>
                  </span>
                </div>
                <ul className="nav main-nav search-nav flex-column flex-md-row">
                  <li className="nav-item mb-md-0 mb-3">
                    <a className="nav-link active" >
                      <i className="fe fe-search me-1"></i> All
                    </a>
                  </li>
                  <li className="nav-item mb-md-0 mb-3">
                    <a className="nav-link" >
                      <i className="fe fe-file-text me-1"></i> News
                    </a>
                  </li>
                  <li className="nav-item mb-md-0 mb-3">
                    <a className="nav-link" >
                      <i className="fe fe-image me-1"></i> Images
                    </a>
                  </li>
                  <li className="nav-item mb-md-0 mb-3">
                    <a className="nav-link" >
                      <i className="fe fe-map-pin me-1"></i> Maps
                    </a>
                  </li>
                  <li className="nav-item mb-md-0 mb-3">
                    <a className="nav-link" >
                      <i className="fe fe-book me-1"></i> Books
                    </a>
                  </li>
                  <li className="nav-item mb-md-0 mb-3">
                    <a className="nav-link" >
                      <i className="fe fe-more-vertical me-1"></i> more
                    </a>
                  </li>
                </ul>
              </div>
              <div className="px-sm-4 pt-sm-4 px-3 pt-3 pb-0">
                <p className="tx-muted mb-0">
                  About 1,26,00,00,000 results (0.61 seconds)
                </p>
              </div>
              <div className="result-container-main p-sm-4 p-3">
                <Row>
                  <div className="col-xl-9">
                    <div className="results-all">
                      <div className="main-result-container">
                        <div className="main-result">
                          <div className="d-sm-flex align-items-center mb-1">
                            <NavLink to="#" className="me-3 tx-14">
                              http://www.samplewebsite.com
                            </NavLink>
                            <Dropdown>
                            <Dropdown.Toggle variant="link" id="dropdown-basic">
                              <i className="fe fe-more-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item>Action</Dropdown.Item>
                              <Dropdown.Item>Another action</Dropdown.Item>
                              <Dropdown.Item>Something else here</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item>Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          </div>
                          <NavLink
                            to="#"
                            className="text-primary tx-capitalize tx-18 mb-1"
                          >
                            Eirmod Aliquyamt: Dolor Accusam Sit
                          </NavLink>
                          <p className="mb-0">
                            <span className="font-weight-semibold">
                              Erat ut labore dolor
                            </span>
                            invidunt eirmod nonumy elitr invidunt clita. Et
                            labore lorem ipsum erat est et, labore dolore sed.
                          </p>
                          <div className="table-responsive sub-result mg-sm-s--8-f ms-0 mt-2">
                            <table className="table d-sm-table d-block">
                              <tbody>
                                <tr className="d-sm-table-row d-block">
                                  <td className="d-sm-table-cell d-block">
                                    <a
                                      
                                      className="tx-primary tx-capitalize tx-18 mb-1"
                                    >
                                      Dolores ipsum
                                    </a>
                                    <p className="mb-0 sub-result-text">
                                      Duo sanctus gubergren dolor clita sed duo
                                      kasd et,.
                                    </p>
                                  </td>
                                  <td className="d-sm-table-cell d-block">
                                    <a
                                      
                                      className="tx-primary tx-capitalize tx-18 mb-1"
                                    >
                                      Dolores ipsum
                                    </a>
                                    <p className="mb-0 sub-result-text">
                                      Duo sanctus gubergren dolor clita sed duo
                                      kasd et,.
                                    </p>
                                  </td>
                                </tr>
                                <tr className="d-sm-table-row d-block">
                                  <td className="d-sm-table-cell d-block">
                                    <a
                                      
                                      className="tx-primary tx-capitalize tx-18 mb-1"
                                    >
                                      Dolores ipsum
                                    </a>
                                    <p className="mb-0 sub-result-text">
                                      Duo sanctus gubergren dolor clita sed duo
                                      kasd et,.
                                    </p>
                                  </td>
                                  <td className="d-sm-table-cell d-block">
                                    <a
                                      
                                      className="tx-primary tx-capitalize tx-18 mb-1"
                                    >
                                      Dolores ipsum
                                    </a>
                                    <p className="mb-0 sub-result-text">
                                      Duo sanctus gubergren dolor clita sed duo
                                      kasd et,.
                                    </p>
                                  </td>
                                </tr>
                                <tr className="d-sm-table-row d-block">
                                  <td className="py-0 d-sm-table-cell d-block">
                                    <NavLink to="#" className="tx-primary">
                                      More from spruko.com &#x226B;
                                    </NavLink>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="main-result-container">
                        <div className="main-result">
                          <div className="d-sm-flex align-items-center mb-1">
                            <NavLink to="#" className="me-3 tx-14">
                              http://www.samplewebsite.com
                            </NavLink>
                            <Dropdown>
                            <Dropdown.Toggle variant="link">
                            <i className="fe fe-more-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                            <Dropdown.Item>Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>

                          </div>
                          <NavLink
                            to="#"
                            className="text-primary tx-capitalize tx-18 mb-1"
                          >
                            Eirmod Aliquyamt: Dolor Accusam Sit
                          </NavLink>
                          <p className="mb-0">
                            <span className="font-weight-semibold">
                              Erat ut labore dolor
                            </span>
                            invidunt eirmod nonumy elitr invidunt clita. Et
                            labore lorem ipsum erat est et, labore dolore sed.
                          </p>
                          <div className="sub-result mg-sm-s--15-f ms-0 mt-3">
                            <div className="d-sm-flex align-items-center mb-1">
                              <NavLink to="#" className="me-3 tx-14">
                                http://www.samplewebsite.com
                              </NavLink>
                              
                              <Dropdown>
                            <Dropdown.Toggle variant="link">
                            <i className="fe fe-more-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                            <Dropdown.Item>Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>

                            </div>
                            <NavLink
                              to="#"
                              className="text-primary tx-capitalize tx-18 mb-1"
                            >
                              Eirmod Aliquyamt: Dolor Accusam Sit
                            </NavLink>
                            <p className="mb-0">
                              <span className="font-weight-semibold">
                                Erat ut labore dolor
                              </span>
                              invidunt eirmod nonumy elitr invidunt clita. Et
                              labore lorem ipsum erat est et, labore dolore sed.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="main-result-container">
                        <div className="main-result">
                          <div className="d-flex align-items-center pb-2 border-bottom">
                            <span className="me-3 tx-16 mb-0">
                              <i className="fe fe-image me-2 d-inline-block"></i>Related Images
                            </span>
                           
                            <Dropdown>
                            <Dropdown.Toggle variant="link">
                            <i className="fe fe-more-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                            <Dropdown.Item>Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>

                          </div>
                          <div className="my-3">
                            <div className="tags-group">
                              <label className="tag-item mx-1">
                                <input
                                  type="checkbox"
                                  name="value"
                                  defaultValue="design"
                                  className="selectgroup-input"
                                  defaultChecked
                                />
                                <span className="tag rounded-pill">Design</span>
                              </label>
                              <label className="tag-item mx-1">
                                <input
                                  type="checkbox"
                                  name="value"
                                  defaultValue="bootstrap"
                                  className="selectgroup-input"
                                />
                                <span className="tag rounded-pill">
                                  Bootstrap
                                </span>
                              </label>
                              <label className="tag-item mx-1">
                                <input
                                  type="checkbox"
                                  name="value"
                                  defaultValue="wireframe"
                                  className="selectgroup-input"
                                />
                                <span className="tag rounded-pill">
                                  Wireframe
                                </span>
                              </label>
                              <label className="tag-item mx-1">
                                <input
                                  type="checkbox"
                                  name="value"
                                  defaultValue="php"
                                  className="selectgroup-input"
                                />
                                <span className="tag rounded-pill">PHP</span>
                              </label>
                              <label className="tag-item mx-1">
                                <input
                                  type="checkbox"
                                  name="value"
                                  defaultValue="css"
                                  className="selectgroup-input"
                                />
                                <span className="tag rounded-pill">CSS</span>
                              </label>
                              <label className="tag-item mx-1">
                                <input
                                  type="checkbox"
                                  name="value"
                                  defaultValue="javascript"
                                  className="selectgroup-input"
                                />
                                <span className="tag rounded-pill">
                                  Javascript
                                </span>
                              </label>
                              <label className="tag-item mx-1">
                                <input
                                  type="checkbox"
                                  name="value"
                                  defaultValue="uiux"
                                  className="selectgroup-input"
                                />
                                <span className="tag rounded-pill">UI/UX</span>
                              </label>
                              <label className="tag-item mx-1">
                                <input
                                  type="checkbox"
                                  name="value"
                                  defaultValue="latestui"
                                  className="selectgroup-input"
                                />
                                <span className="tag rounded-pill">
                                  Latest UI
                                </span>
                              </label>
                            </div>
                            <div className="mt-2">
                              <NavLink to="#">
                                <img
                                  src={Allimages("Media5")}
                                  alt="img"
                                  className="wd-20p br-5 mx-1"
                                />
                              </NavLink>
                              <NavLink to="#">
                                <img
                                  src={Allimages("Media4")}
                                  alt="img"
                                  className="wd-20p br-5 mx-1"
                                />
                              </NavLink>
                              <NavLink to="#">
                                <img
                                  src={Allimages("Media10")}
                                  alt="img"
                                  className="wd-20p br-5 mx-1"
                                />
                              </NavLink>
                              <NavLink to="#">
                                <img
                                  src={Allimages("Media3")}
                                  alt="img"
                                  className="wd-20p br-5 mx-1"
                                />
                              </NavLink>
                            </div>
                          </div>
                          <NavLink to="#" className="tx-primary">
                            More images &#x226B;
                          </NavLink>
                        </div>
                      </div>
                      <div className="main-result-container">
                        <div className="main-result">
                          <div className="d-sm-flex align-items-center mb-1">
                            <NavLink to="#" className="me-3 tx-14">
                              http://www.samplewebsite.com
                            </NavLink>
                            
                            <Dropdown>
                            <Dropdown.Toggle variant="link">
                            <i className="fe fe-more-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                            <Dropdown.Item>Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>

                          </div>
                          <NavLink
                            to="#"
                            className="text-primary tx-capitalize tx-18 mb-1"
                          >
                            Eirmod Aliquyamt: Dolor Accusam Sit
                          </NavLink>
                          <p className="mb-0">
                            <span className="font-weight-semibold">
                              Erat ut labore dolor
                            </span>
                            invidunt eirmod nonumy elitr invidunt clita. Et
                            labore lorem ipsum erat est et, labore dolore sed.
                          </p>
                        </div>
                      </div>
                      <div className="main-result-container">
                        <div className="main-result">
                          <div className="d-sm-flex align-items-center mb-1">
                            <NavLink to="#" className="me-3 tx-14">
                              http://www.samplewebsite.com
                            </NavLink>
                            
                            <Dropdown>
                            <Dropdown.Toggle variant="link">
                            <i className="fe fe-more-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                            <Dropdown.Item>Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>

                          </div>
                          <NavLink
                            to="#"
                            className="text-primary tx-capitalize tx-18 mb-1"
                          >
                            Eirmod Aliquyamt: Dolor Accusam Sit
                          </NavLink>
                          <p className="mb-0">
                            <span className="font-weight-semibold">
                              Erat ut labore dolor
                            </span>
                            invidunt eirmod nonumy elitr invidunt clita. Et
                            labore lorem ipsum erat est et, labore dolore sed.
                          </p>
                        </div>
                      </div>
                      <div className="main-result-container">
                        <div className="main-result">
                          <div className="d-sm-flex align-items-center mb-1">
                            <NavLink to="#" className="me-3 tx-14">
                              http://www.samplewebsite.com
                            </NavLink>
                            
                            <Dropdown>
                            <Dropdown.Toggle variant="link">
                            <i className="fe fe-more-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                            <Dropdown.Item>Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>

                          </div>
                          <NavLink
                            to="#"
                            className="text-primary tx-capitalize tx-18 mb-1"
                          >
                            Eirmod Aliquyamt: Dolor Accusam Sit
                          </NavLink>
                          <p className="mb-0">
                            <span className="font-weight-semibold">
                              Erat ut labore dolor
                            </span>
                            invidunt eirmod nonumy elitr invidunt clita. Et
                            labore lorem ipsum erat est et, labore dolore sed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3">
                    <div className="d-xl-block d-none" id="scroll-stickybar">
                      <div className="border radius-4">
                        <div className="p-4">
                          <h6 className="mb-0">Filter results:</h6>
                          <div className="mt-3">
                            <ul className="list-group border-0">
                              <li className="list-group-item p-0 mb-2 border-0">
                                <label className="d-flex align-items-center mb-0">
                                  <span className="check-box mb-0">
                                    <span className="ckbox">
                                      <input type="checkbox" />
                                      <span></span>
                                    </span>
                                  </span>
                                  <span className="ms-3 my-auto">Trending</span>
                                </label>
                              </li>
                              <li className="list-group-item p-0 mb-2 border-0">
                                <label className="d-flex align-items-center mb-0">
                                  <span className="check-box mb-0">
                                    <span className="ckbox">
                                      <input type="checkbox" defaultChecked />
                                      <span></span>
                                    </span>
                                  </span>
                                  <span className="ms-3 my-auto">Recent</span>
                                </label>
                              </li>
                              <li className="list-group-item p-0 mb-2 border-0">
                                <label className="d-flex align-items-center mb-0">
                                  <span className="check-box mb-0">
                                    <span className="ckbox">
                                      <input type="checkbox" />
                                      <span></span>
                                    </span>
                                  </span>
                                  <span className="ms-3 my-auto">Popular</span>
                                </label>
                              </li>
                              <li className="list-group-item p-0 mb-2 border-0">
                                <label className="d-flex align-items-center mb-0">
                                  <span className="check-box mb-0">
                                    <span className="ckbox">
                                      <input type="checkbox" defaultChecked />
                                      <span></span>
                                    </span>
                                  </span>
                                  <span className="ms-3 my-auto">
                                    Most Viewed
                                  </span>
                                </label>
                              </li>
                              <li className="list-group-item p-0 mb-2 border-0">
                                <label className="d-flex align-items-center mb-0">
                                  <span className="check-box mb-0">
                                    <span className="ckbox">
                                      <input type="checkbox" defaultChecked />
                                      <span></span>
                                    </span>
                                  </span>
                                  <span className="ms-3 my-auto">Rated</span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="border radius-4 mt-3">
                        <div className="p-4">
                          <h6 className="mb-0">Similar Searches:</h6>
                          <div className="mt-3">
                            <div className="similar-search">
                              <a
                                
                                className="text-primary tx-capitalize tx-16 mb-1"
                              >
                                Eirmod Aliquyamt: Dolor Accusam Sit
                              </a>
                              <p className="mb-0">
                                <span className="font-weight-semibold">
                                  Erat ut labore dolor
                                </span>
                                invidunt eirmod nonumy elitr invidunt clita. Et
                                labore lorem ipsum erat est et, labore dolore
                                sed.
                              </p>
                            </div>
                            <div className="similar-search">
                              <a
                                
                                className="text-primary tx-capitalize tx-16 mb-1"
                              >
                                Eirmod Aliquyamt: Dolor Accusam Sit
                              </a>
                              <p className="mb-0">
                                <span className="font-weight-semibold">
                                  Erat ut labore dolor
                                </span>
                                invidunt eirmod nonumy elitr invidunt clita. Et
                                labore lorem ipsum erat est et, labore dolore
                                sed.
                              </p>
                            </div>
                            <div className="similar-search">
                              <a
                                
                                className="text-primary tx-capitalize tx-16 mb-1"
                              >
                                Eirmod Aliquyamt: Dolor Accusam Sit
                              </a>
                              <p className="mb-0">
                                <span className="font-weight-semibold">
                                  Erat ut labore dolor
                                </span>
                                invidunt eirmod nonumy elitr invidunt clita. Et
                                labore lorem ipsum erat est et, labore dolore
                                sed.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Card.Body>
            <Card.Footer>
              <ul className="pagination pagination-style2 mb-0 justify-content-center">
                <li className="page-item page-prev">
                  <a className="page-link" >
                    <i className="icon ion-ios-arrow-back"></i>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" >
                    1
                  </a>
                </li>
                <li className="page-item d-sm-block d-none">
                  <a className="page-link" >
                    2
                  </a>
                </li>
                <li className="page-item d-sm-block d-none">
                  <a className="page-link" >
                    3
                  </a>
                </li>
                <li className="page-item d-sm-block d-none">
                  <a className="page-link" >
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" >
                    <i className="fe fe-more-horizontal"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" >
                    10
                  </a>
                </li>
                <li className="page-item page-next">
                  <a className="page-link" >
                    <i className="icon ion-ios-arrow-forward"></i>
                  </a>
                </li>
                <li className="page-item pagination-jump ms-3 d-md-block d-none">
                  <div className="d-flex align-items-center">
                    <span className="tx-muted me-2">Go To Page</span>
                    <input
                      type="number"
                      className="p-1 wd-30 ht-30 radius-4 form-control"
                    />
                    <NavLink to="#" className="ms-2">
                      Go
                    </NavLink>
                  </div>
                </li>
              </ul>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Search;
