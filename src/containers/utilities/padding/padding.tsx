import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";

function Padding() {
  return (
    <Fragment>
      <Pageheader titles={"Padding"} active={"Padding"} Subtite={"Utilities"} />

      <Row>
        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Padding values</div>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="d-md-flex">
                  <div className="wd-200 ht-100 bg-white-100 pd-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">.pd-0</div>
                  </div>
                  <div className="wd-200 ht-100 bg-white-100 pd-20 ms-md-4 mt-4 mt-xl-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">.pd-20</div>
                  </div>
                  <div className="wd-200 ht-100 bg-white-100 pd-40 ms-md-4 mt-4 mt-xl-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">.pd-40</div>
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
                        <code>.pd-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Values
                      </td>
                      <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Bigger Values
                      </td>
                      <td>15 | 20 | 25 | 30 | 40 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <div className="card-title">Padding Top values</div>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="d-md-flex">
                  <div className="wd-200 ht-100 bg-white-100 pd-t-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">.pd-t-0</div>
                  </div>
                  <div className="wd-200 ht-100 bg-white-100 pd-t-20 ms-md-4 mt-4 mt-xl-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">
                      .pd-t-20
                    </div>
                  </div>
                  <div className="wd-200 ht-100 bg-white-100 pd-t-40 ms-md-4 mt-4 mt-xl-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">
                      .pd-t-40
                    </div>
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
                        <code>.pd-t-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Values
                      </td>
                      <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Bigger Values
                      </td>
                      <td>15 | 20 | 25 | 30 | 40 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <div className="card-title">Padding Right values</div>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="d-md-flex">
                  <div className="wd-200 ht-100 bg-white-100 pd-e-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">.pd-e-0</div>
                  </div>
                  <div className="wd-200 ht-100 bg-white-100 pd-e-20 ms-md-4 mt-4 mt-xl-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">
                      .pd-e-20
                    </div>
                  </div>
                  <div className="wd-200 ht-100 bg-white-100 pd-e-40 ms-md-4 mt-4 mt-xl-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">
                      .pd-e-40
                    </div>
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
                        <code>.pd-e-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Values
                      </td>
                      <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Bigger Values
                      </td>
                      <td>15 | 20 | 25 | 30 | 40 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <div className="card-title">Padding Bottom values</div>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="d-md-flex">
                  <div className="wd-200 ht-100 bg-white-100 pd-b-0  br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">.pd-b-0</div>
                  </div>
                  <div className="wd-200 ht-100 pd-b-20 bg-white-100 ms-md-4 mt-4 mt-xl-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">
                      .pd-b-20
                    </div>
                  </div>
                  <div className="wd-200 ht-100 pd-b-40 bg-white-100 ms-md-4 mt-4 mt-xl-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">
                      .pd-b-40
                    </div>
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
                        <code>.pd-b-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Values
                      </td>
                      <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Bigger Values
                      </td>
                      <td>15 | 20 | 25 | 30 | 40 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <div className="card-title">Padding Left values</div>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="d-md-flex">
                  <div className="wd-200 ht-100 bg-white-100 pd-s-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">.pd-s-0</div>
                  </div>
                  <div className="wd-200 ht-100 bg-white-100 pd-s-20 ms-md-4 mt-4 mt-xl-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">
                      .pd-s-20
                    </div>
                  </div>
                  <div className="wd-200 ht-100 bg-white-100 pd-s-40 ms-md-4 mt-4 mt-xl-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">
                      .pd-s-40
                    </div>
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
                        <code>.pd-s-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Values
                      </td>
                      <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Bigger Values
                      </td>
                      <td>15 | 20 | 25 | 30 | 40</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <div className="card-title">Padding X values</div>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="d-md-flex">
                  <div className="wd-200 ht-100 bg-white-100 pd-x-0  br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">.pd-x-0</div>
                  </div>
                  <div className="wd-200 ht-100 pd-x-20 bg-white-100 ms-md-4 mt-4 mt-xl-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">
                      .pd-x-20
                    </div>
                  </div>
                  <div className="wd-200 ht-100 pd-x-40 bg-white-100 ms-md-4 mt-4 mt-xl-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">
                      .pd-x-40
                    </div>
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
                        <code>.pd-x-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Values
                      </td>
                      <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Bigger Values
                      </td>
                      <td>15 | 20 | 25 | 30 | 40 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <div className="card-title">Padding Y values</div>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="d-md-flex">
                  <div className="wd-200 ht-100 bg-white-100 pd-y-0  br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">.pd-y-0</div>
                  </div>
                  <div className="wd-200 ht-100 pd-y-20 bg-white-100 ms-md-4 mt-4 mt-xl-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">
                      .pd-y-20
                    </div>
                  </div>
                  <div className="wd-200 ht-100 pd-y-40 bg-white-100 ms-md-4 mt-4 mt-xl-0 br-5 overflow-hidden">
                    <div className="flex-center ht-100p bg-custom">
                      .pd-y-40
                    </div>
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
                        <code>.pd-y-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Values
                      </td>
                      <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Bigger Values
                      </td>
                      <td>15 | 20 | 25 | 30 | 40 </td>
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
              <div className="card-title">Media Query Padding</div>
            </Card.Header>
            <Card.Body>
              {/* <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <thead>
                    <tr>
                      <th className="wd-30p">Class</th>
                      <th className="wd-70p">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>.pd-[size]-t-[value]<br/>
                        .pd-[size]-r-[value]<br/>
                          .pd-[size]-b-[value]<br/>
                            .pd-[size]-l-[value]<br>
                              .pd-[size]-x-[value]<br>
                                .pd-[size]-y-[value]</code></td>
                            <td>
                              <p className="mg-b-5">size: xs | sm | md | lg | xl</p>
                              <p className="mg-b-0">value: the padding value (refer to code above)</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
                      </div>
                    </div>
                  </div>
              </div>  */}

              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <thead>
                    <tr>
                      <th className="wd-30p">class</th>
                      <th className="wd-70p">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>
                          .pd-[size]-t-[value]
                          <br />
                          .pd-[size]-r-[value]
                          <br />
                          .pd-[size]-b-[value]
                          <br />
                          .pd-[size]-l-[value]
                          <br />
                          .pd-[size]-x-[value]
                          <br />
                          .pd-[size]-y-[value]
                        </code>
                      </td>
                      <td>
                        <p className="mg-b-5">size: xs | sm | md | lg | xl</p>
                        <p className="mg-b-0">
                          value: the padding value (refer to code above)
                        </p>
                      </td>
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

export default Padding;
