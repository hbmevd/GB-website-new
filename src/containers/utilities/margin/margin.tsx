import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";

function Margin() {
  return (
    <Fragment>
      <Pageheader titles={"Margin"} active={"Margin"} Subtite={"Utilities"} />

      <Row>
        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Margin Values</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <div className="d-sm-flex align-items-end flex-wrap">
                  <div className="bg-white-100 br-5 overflow-hidden me-sm-3 mb-2">
                    <div className="flex-center wd-sm-150 ht-80 bg-custom mg-0">
                      .mg-0
                    </div>
                  </div>
                  <div className="bg-white-100 br-5 overflow-hidden me-sm-3 mb-2">
                    <div className="flex-center wd-sm-150 ht-80 bg-custom mg-10">
                      .mg-10
                    </div>
                  </div>
                  <div className="bg-white-100 br-5 overflow-hidden mb-2">
                    <div className="flex-center wd-sm-150 ht-80 bg-custom mg-20">
                      .mg-20
                    </div>
                  </div>
                </div>
                <div className="table-responsive border radius-4 mg-t-20">
                  <table className="table border-0 mb-0">
                    <tbody>
                      <tr>
                        <td className="bg-custom wd-20p border-top-0 font-weight-semibold">
                          Classes
                        </td>
                        <td className="border-top-0">
                          <code>.mg-[value]</code>
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-custom wd-20p font-weight-semibold">
                          Values
                        </td>
                        <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <div className="card-title">Margin-top Values</div>
            </Card.Header>
            <Card.Body>
              <div className="d-sm-flex flex-wrap align-items-baseline">
                <div className="bg-white-100 br-5 overflow-hidden me-sm-3 mb-2">
                  <div className="flex-center wd-sm-150 ht-80 bg-custom mg-t-0">
                    .mg-t-0
                  </div>
                </div>
                <div className="bg-white-100 br-5 overflow-hidden me-sm-3 mb-2">
                  <div className="flex-center wd-sm-150 ht-80 bg-custom mg-t-20">
                    .mg-t-20
                  </div>
                </div>
                <div className="bg-white-100 br-5 overflow-hidden mb-2">
                  <div className="flex-center wd-sm-150 ht-80 bg-custom mg-t-40">
                    .mg-t-40
                  </div>
                </div>
              </div>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">
                        Classes
                      </td>
                      <td className="border-top-0">
                        <code>.mg-t-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Values
                      </td>
                      <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <div className="card-title">Margin-right Values</div>
            </Card.Header>
            <Card.Body>
              <div className="d-sm-flex flex-wrap">
                <div className="bg-white-100 br-5 overflow-hidden me-sm-3 mb-2">
                  <div className="flex-center wd-sm-150 ht-80 bg-custom mg-e-20">
                    .mg-e-20
                  </div>
                </div>
                <div className="bg-white-100 br-5 overflow-hidden me-sm-3 mb-2">
                  <div className="flex-center wd-sm-150 ht-80 bg-custom mg-e-40">
                    .mg-e-40
                  </div>
                </div>
                <div className="bg-white-100 br-5 overflow-hidden mb-2">
                  <div className="flex-center wd-sm-150 ht-80 bg-custom mg-e-0">
                    .mg-e-0
                  </div>
                </div>
              </div>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">
                        Classes
                      </td>
                      <td className="border-top-0">
                        <code>.mg-e-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Values
                      </td>
                      <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <div className="card-title">Margin-bottom Values</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <div className="d-sm-flex flex-wrap align-items-baseline">
                  <div className="bg-white-100 br-5 overflow-hidden me-sm-3 mb-2">
                    <div className="flex-center wd-sm-150 ht-80 bg-custom mg-b-0">
                      .mg-b-0
                    </div>
                  </div>
                  <div className="bg-white-100 br-5 overflow-hidden me-sm-3 mb-2">
                    <div className="flex-center wd-sm-150 ht-80 bg-custom mg-b-20">
                      .mg-b-20
                    </div>
                  </div>
                  <div className="bg-white-100 br-5 overflow-hidden mb-2">
                    <div className="flex-center wd-sm-150 ht-80 bg-custom mg-b-40">
                      .mg-b-40
                    </div>
                  </div>
                </div>
                <div className="table-responsive border radius-4 mg-t-20">
                  <table className="table border-0 mb-0">
                    <tbody>
                      <tr>
                        <td className="bg-custom wd-20p border-top-0 font-weight-semibold">
                          Classes
                        </td>
                        <td className="border-top-0">
                          <code>.mg-b-[value]</code>
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-custom wd-20p font-weight-semibold">
                          Values
                        </td>
                        <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <div className="card-title">Margin-left Values</div>
            </Card.Header>
            <Card.Body>
              <div className="d-sm-flex flex-wrap">
                <div className="bg-white-100 br-5 overflow-hidden me-sm-3 mb-2">
                  <div className="flex-center wd-sm-150 ht-80 bg-custom mg-s-0">
                    .mg-s-0
                  </div>
                </div>
                <div className="bg-white-100 br-5 overflow-hidden me-sm-3 mb-2">
                  <div className="flex-center wd-sm-150 ht-80 bg-custom mg-s-20">
                    .mg-s-20
                  </div>
                </div>
                <div className="bg-white-100 br-5 overflow-hidden mb-2">
                  <div className="flex-center wd-sm-150 ht-80 bg-custom mg-s-40">
                    .mg-s-40
                  </div>
                </div>
              </div>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">
                        Classes
                      </td>
                      <td className="border-top-0">
                        <code>.mg-s-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Values
                      </td>
                      <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <div className="card-title">Margin-x Values</div>
            </Card.Header>
            <Card.Body>
              <div className="d-sm-flex flex-wrap">
                <div className="bg-white-100 br-5 overflow-hidden me-sm-3 mb-2">
                  <div className="flex-center wd-sm-150 ht-80 bg-custom mg-x-0">
                    .mg-x-0
                  </div>
                </div>
                <div className="bg-white-100 br-5 overflow-hidden me-sm-3 mb-2">
                  <div className="flex-center wd-sm-150 ht-80 bg-custom mg-x-20">
                    .mg-x-20
                  </div>
                </div>
                <div className="bg-white-100 br-5 overflow-hidden mb-2">
                  <div className="flex-center wd-sm-150 ht-80 bg-custom mg-x-40">
                    .mg-x-40
                  </div>
                </div>
              </div>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">
                        Classes
                      </td>
                      <td className="border-top-0">
                        <code>.mg-x-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Values
                      </td>
                      <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <div className="card-title">Margin-y Values</div>
            </Card.Header>
            <Card.Body>
              <div className="d-sm-flex flex-wrap">
                <div className="wd-200 ht-100p bg-white-100  br-5 overflow-hidden m-1">
                  <div className="flex-center bg-custom mg-y-0">.mg-y-0</div>
                </div>
                <div className="wd-200 ht-100p bg-white-100 ms-md-4 br-5 m-1 overflow-hidden">
                  <div className="flex-center bg-custom mg-y-20">.mg-y-20</div>
                </div>
                <div className="wd-200 ht-100p bg-white-100 ms-md-4 br-5 m-1 overflow-hidden">
                  <div className="flex-center bg-custom mg-y-40">.mg-y-40</div>
                </div>
              </div>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">
                        Classes
                      </td>
                      <td className="border-top-0">
                        <code>.mg-y-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Values
                      </td>
                      <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Media Query Margin</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <thead>
                    <tr>
                      <th className="wd-30p">Class</th>
                      <th className="wd-70p">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-top-0">
                        <code>
                          .mg-[breakpoint]-t-[value]
                          <br/>
                          .mg-[breakpoint]-r-[value]
                          <br/>
                          .mg-[breakpoint]-b-[value]
                          <br/>
                          .mg-[breakpoint]-l-[value]
                        </code>
                      </td>
                      <td>
                        <p className="mg-b-5">breakpoint: xs | sm | md | lg | xl</p>
                        <p className="mg-b-0">value: the margin value (refer to code above)</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>

          </Card>
        </Col>
        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Auto Margin</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <thead>
                    <tr>
                      <th className="wd-30p">Class</th>
                      <th className="wd-70p">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>.mg-t-auto</code>
                      </td>
                      <td>Set a top margin to auto</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.mg-e-auto</code>
                      </td>
                      <td>Set a right margin to auto</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.mg-b-auto</code>
                      </td>
                      <td>Set a bottom margin to auto</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.mg-x-auto</code>
                      </td>
                      <td>Set x-axis margin to auto</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.mg-y-auto</code>
                      </td>
                      <td>Set y-axis margin to auto</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.mg-s-auto</code>
                      </td>
                      <td>Set a left margin to auto</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Margin;
