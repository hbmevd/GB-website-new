import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import { Analyticsdashboard } from "./data/chartsdata";
import { Analyticsessionchart } from "./data/chartsdata2";
import { Analyticsdonut } from "./data/chartsdata3";
function Analytics() {
  return (
    <Fragment>
      <Pageheader
        titles={"DASHBOARD"}
        active={"Analytics"}
        Subtite={"Dashboard"}
      />
      <Row>
        <Col xxl={8} xl={12}>
          <Row>
            <Col xl={3} lg={6}>
              <Card>
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-1">
                      <p className="mb-3">Total Users</p>
                      <div className="mt-1">
                        <h5 className="font-weight-semibold mb-2 numberfont">
                          52,283
                        </h5>
                        <p className="mb-0">
                          <span className="badge badge-success-transparent">
                            +2.31%
                          </span>
                          <span className="tx-muted ms-2 tx-12">
                            since last month
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="ms-2">
                      <div className="avatar radius-4 bg-primary-transparent">
                        <i className="fa fa-users tx-primary"></i>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={6}>
              <Card>
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-1">
                      <p className="mb-3">Total Sessions</p>
                      <div className="mt-1">
                        <h5 className="font-weight-semibold mb-2 numberfont">
                          56.2K
                        </h5>
                        <p className="mb-0">
                          <span className="badge badge-success-transparent">
                            +1.05%
                          </span>
                          <span className="tx-muted ms-2 tx-12">
                            since last month
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="ms-2">
                      <div className="avatar radius-4 bg-secondary-transparent">
                        <i className="fa fa-globe tx-secondary"></i>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={6}>
              <Card>
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-1">
                      <p className="mb-3">Avg. Session Duration</p>
                      <div className="mt-1">
                        <h5 className="font-weight-semibold mb-2 numberfont">
                          11min 16sec
                        </h5>
                        <p className="mb-0">
                          <span className="badge badge-danger-transparent">
                            -1.51%
                          </span>
                          <span className="tx-muted ms-2 tx-12">
                            since last month
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="ms-2">
                      <div className="avatar radius-4 bg-warning-transparent">
                        <i className="fa fa-clock tx-warning"></i>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={6}>
              <Card>
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-1">
                      <p className="mb-3">Bounce Rate</p>
                      <div className="mt-1">
                        <h5 className="font-weight-semibold mb-2 numberfont">
                          77.3%
                        </h5>
                        <p className="mb-0">
                          <span className="badge badge-success-transparent">
                            +5.19%
                          </span>
                          <span className="tx-muted ms-2 tx-12">
                            since last month
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="ms-2">
                      <div className="avatar radius-4 bg-success-transparent">
                        <i className="fa fa-angles-down tx-success"></i>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card>
                <Card.Header>
                  <div className="card-title">Audience Report</div>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col xl={3} sm={3} className="col-12 p-0">
                      <div className="tx-center pd-b-7 pd-sm-b-0-f bd-sm-e bd-e-0 bd-b bd-sm-b-0 bd-b-dashed bd-e-dashed">
                        <p className="mb-0 tx-muted font-weight-semibold">
                          Avg. Sessions :
                        </p>
                        <div className="mt-2">
                          <span className="mb-0 font-weight-semibold tx-15 numberfont">
                            684
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={3} className="col-12 p-0">
                      <div className="tx-center pd-y-7 pd-sm-y-0-f bd-sm-e bd-e-0 bd-b bd-sm-b-0 bd-b-dashed bd-e-dashed">
                        <p className="mb-0 tx-muted font-weight-semibold">
                          Conversion Rate :
                        </p>
                        <div className="mt-2">
                          <span className="mb-0 font-weight-semibold tx-15 numberfont">
                            1,284
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={3} className="col-12 p-0">
                      <div className="tx-center pd-y-7 pd-sm-y-0-f bd-sm-e bd-e-0 bd-b bd-sm-b-0 bd-b-dashed bd-e-dashed">
                        <p className="mb-0 tx-muted font-weight-semibold">
                          Avg. Session Duration :
                        </p>
                        <div className="mt-2">
                          <span className="mb-0 font-weight-semibold tx-15 numberfont">
                            11min 16sec
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={3} className="col-12 p-0">
                      <div className="tx-center pd-t-7 pd-sm-t-0-f">
                        <p className="mb-0 tx-muted font-weight-semibold">
                          Growth Rate :
                        </p>
                        <div className="mt-2">
                          <span className="tx-12 font-weight-semibold tx-success numberfont">
                            <i className="fe fe-arrow-up-right me-1"></i>+5.64%
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div id="audienceReport">
                    <Analyticsdashboard />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xxl={4} xl={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Active Users</div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex mb-3">
                <div className="me-2">
                  <span className="avatar br-5 bg-primary-transparent tx-primary">
                    <i className="fe fe-users"></i>
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="mb-0 numberfont">1,340</h5>
                  <span className="tx-muted tx-12">users are active now</span>
                </div>
              </div>
              <div className="progress-bar ht-25 radius-4 d-flex flex-row mg-b-20">
                <div className="bg-primary wd-50p text-black flex-center tx-11">
                  50%
                </div>
                <div className="bg-secondary wd-30p text-white flex-center tx-11">
                  30%
                </div>
                <div className="bg-success wd-10p flex-center tx-11">10%</div>
                <div className="bg-purple wd-10p flex-center tx-11">10%</div>
              </div>
              <div className="mg-b-15">
                <Row className="align-items-center">
                  <Col md={4}>
                    <span className="tx-14">
                      <i className="fa fa-circle tx-primary tx-8 me-1"></i>
                      Direct
                    </span>
                  </Col>
                  <Col md={8}>
                    <span className="badge badge-success-transparent me-1">
                      +2.6%
                    </span>
                    <span className="tx-muted tx-12">since last 6 months</span>
                  </Col>
                </Row>
              </div>
              <div className="mg-b-15">
                <Row className="align-items-center">
                  <Col md={4}>
                    <span className="tx-14">
                      <i className="fa fa-circle tx-secondary tx-8 me-1"></i>
                      Referred
                    </span>
                  </Col>
                  <Col md={8}>
                    <span className="badge badge-danger-transparent me-1">
                      -1.6%
                    </span>
                    <span className="tx-muted tx-12">since last 6 months</span>
                  </Col>
                </Row>
              </div>
              <div className="mg-b-15">
                <Row className="align-items-center">
                  <Col md={4}>
                    <span className="tx-14">
                      <i className="fa fa-circle tx-success tx-8 me-1"></i>
                      Social
                    </span>
                  </Col>
                  <Col md={8}>
                    <span className="badge badge-success-transparent me-1">
                      +3.5%
                    </span>
                    <span className="tx-muted tx-12">since last 6 months</span>
                  </Col>
                </Row>
              </div>
              <div className="mb-0">
                <Row className="align-items-center">
                  <Col md={4}>
                    <span className="tx-14">
                      <i className="fa fa-circle tx-purple tx-8 me-1"></i>Email
                    </span>
                  </Col>
                  <Col md={8}>
                    <span className="badge badge-success-transparent me-1">
                      +1.8%
                    </span>
                    <span className="tx-muted tx-12">since last 6 months</span>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <div className="card-title">Top Pages</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <th className="border-top-0 bg-black-03 br-bs-5 br-ts-5">
                        Website
                      </th>
                      <th className="border-top-0 bg-black-03">Visits</th>
                      <th className="border-top-0 bg-black-03 br-be-5 br-te-5">
                        Status
                      </th>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <a  className="tx-inverse">
                          <i className="fe fe-globe me-1 tx-13"></i>
                          demo/template.nit
                        </a>
                      </td>
                      <td className="border-top-0 numberfont">20.2K</td>
                      <td className="border-top-0">
                        <span className="tx-12 font-weight-semibold tx-success">
                          <i className="fe fe-arrow-up-right me-1"></i>+5.37%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <a  className="tx-inverse">
                          <i className="fe fe-slack me-1 tx-13"></i>
                          dashboard/licence.demo
                        </a>
                      </td>
                      <td className="border-top-0 numberfont">18.3K</td>
                      <td className="border-top-0">
                        <span className="tx-12 font-weight-semibold tx-success">
                          <i className="fe fe-arrow-up-right me-1"></i>+2.64%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <a  className="tx-inverse">
                          <i className="fe fe-zap me-1 tx-13"></i>
                          web/page/demo.xis
                        </a>
                      </td>
                      <td className="border-top-0 numberfont">18.1K</td>
                      <td className="border-top-0">
                        <span className="tx-12 font-weight-semibold tx-danger">
                          <i className="fe fe-arrow-down-right me-1"></i>-1.46%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <a  className="tx-inverse">
                          <i className="fe fe-codepen me-1 tx-13"></i>
                          landing/page.demo
                        </a>
                      </td>
                      <td className="border-top-0 numberfont">15.2K</td>
                      <td className="border-top-0">
                        <span className="tx-12 font-weight-semibold tx-success">
                          <i className="fe fe-arrow-up-right me-1"></i>+3.75%
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-deck">
        <Col xl={4}>
          <Card>
            <Card.Header>
              <div className="card-title">Browser Usuage</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <th className="border-top-0 bg-black-03 br-bs-5 br-ts-5">
                        Browser
                      </th>
                      <th className="border-top-0 bg-black-03">Sessions</th>
                      <th className="border-top-0 bg-black-03 br-be-5 br-te-5">
                        Bounce Rate
                      </th>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <span className="avatar avatar-sm bg-primary-gradient tx-white">
                              <i className="fab fa-chrome tx-14"></i>
                            </span>
                          </div>
                          <p className="mb-0">Chrome</p>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">23,379</td>
                      <td className="border-top-0">
                        <span className="tx-12 font-weight-semibold tx-success numberfont">
                          <i className="fe fe-arrow-up-right me-1"></i>+5.37%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <span className="avatar avatar-sm bg-secondary-gradient tx-white">
                              <i className="fab fa-safari tx-14"></i>
                            </span>
                          </div>
                          <p className="mb-0">Safari</p>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">20,937</td>
                      <td className="border-top-0">
                        <span className="tx-12 font-weight-semibold tx-success numberfont">
                          <i className="fe fe-arrow-up-right me-1"></i>+1.74%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <span className="avatar avatar-sm bg-warning-gradient tx-white">
                              <i className="fab fa-opera tx-14"></i>
                            </span>
                          </div>
                          <p className="mb-0">Opera</p>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">20,848</td>
                      <td className="border-top-0">
                        <span className="tx-12 font-weight-semibold tx-danger numberfont">
                          <i className="fe fe-arrow-down-right me-1"></i>-11.43%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <span className="avatar avatar-sm bg-success-gradient tx-white">
                              <i className="fab fa-firefox tx-14"></i>
                            </span>
                          </div>
                          <p className="mb-0">Firefox</p>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">18,120</td>
                      <td className="border-top-0">
                        <span className="tx-12 font-weight-semibold tx-success numberfont">
                          <i className="fe fe-arrow-up-right me-1"></i>7.61%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <span className="avatar avatar-sm bg-purple-gradient tx-white">
                              <i className="fab fa-edge tx-14"></i>
                            </span>
                          </div>
                          <p className="mb-0">Edge</p>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">14,986</td>
                      <td className="border-top-0">
                        <span className="tx-12 font-weight-semibold tx-danger numberfont">
                          <i className="fe fe-arrow-up-right me-1"></i>-1.14%
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-top-0">
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <span className="avatar avatar-sm bg-secondary-gradient tx-white">
                              <i className="fab fa-safari tx-14"></i>
                            </span>
                          </div>
                          <p className="mb-0">Safari</p>
                        </div>
                      </td>
                      <td className="border-top-0 numberfont">20,937</td>
                      <td className="border-top-0">
                        <span className="tx-12 font-weight-semibold tx-success numberfont">
                          <i className="fe fe-arrow-up-right me-1"></i>+1.74%
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6}>
          <Card>
            <Card.Header>
              <div className="card-title">Sessions By Device</div>
            </Card.Header>
            <Card.Body>
              <div id="sessionsDevice">
                <Analyticsdonut />
              </div>
              <div className="d-flex mg-b-15">
                <div className="me-2">
                  <span className="avatar avatar-sm radius-4 bg-primary-transparent tx-primary">
                    <i className="fe fe-smartphone"></i>
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex-between mb-1">
                    <p className="mb-0">
                      <span className="pe-2 border-end">Mobile</span>
                      <span className="ps-2 tx-muted">39.3%</span>
                    </p>
                    <span className="badge badge-success-transparent me-1">
                      +1.6%
                    </span>
                  </div>
                  <div className="progress">
                    <ProgressBar
                      now={65}
                      className="progress-bar-xs progress-bar-striped progress-bar-animated  wd-65p"
                      variant="primary"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex mg-b-15">
                <div className="me-2">
                  <span className="avatar avatar-sm radius-4 bg-secondary-transparent tx-secondary">
                    <i className="fe fe-monitor"></i>
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex-between mb-1">
                    <p className="mb-0">
                      <span className="pe-2 border-end">Desktop</span>
                      <span className="ps-2 tx-muted">36.4%</span>
                    </p>
                    <span className="badge badge-danger-transparent me-1">
                      -5.2%
                    </span>
                  </div>
                  <div className="progress">
                    <ProgressBar
                      now={65}
                      className="progress-bar-xs progress-bar-striped progress-bar-animated  wd-65p"
                      variant="warning"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-2">
                  <span className="avatar avatar-sm radius-4 bg-success-transparent tx-success">
                    <i className="fe fe-tablet"></i>
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex-between mb-1">
                    <p className="mb-0">
                      <span className="pe-2 border-end">Tablet</span>
                      <span className="ps-2 tx-muted">24.3%</span>
                    </p>
                    <span className="badge badge-success-transparent me-1">
                      +2.7%
                    </span>
                  </div>
                  <div className="progress">
                    <ProgressBar
                      now={65}
                      className="progress-bar-xs progress-bar-striped progress-bar-animated  wd-65p"
                      variant="success"
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6}>
          <Card>
            <Card.Header>
              <div className="card-title">Sessions By Country</div>
            </Card.Header>
            <div className="card-body pb-0">
              <div className="chart-wrapper">
                <div id="sessionsCountry">
                  <Analyticsessionchart />
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Analytics;
