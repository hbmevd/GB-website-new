import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";

function Border() {
  return (
    <Fragment>
      <Pageheader titles={"Border"} active={"Border"} Subtite={"Utilities"} />
      <Row>
        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Set Border</div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex flex-wrap">
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd bd-2">
                  .bd
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd-s bd-2  ">
                  .bd-s
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd-t bd-2 ">
                  .bd-t
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd-y bd-2 ">
                  .bd-y
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd-e bd-2">
                  .bd-e
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd-x bd-2  ">
                  .bd-x
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd-b bd-2 mb-0">
                  .bd-b
                </div>
              </div>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <thead>
                    <tr>
                      <th className="wd-30p bg-custom">Class</th>
                      <th className="wd-70p bg-custom">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">
                          className="bd"
                        </code>
                      </td>
                      <td>
                        Add border in all sides of an element using default
                        color and width.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">
                          className="bd-t"
                        </code>
                      </td>
                      <td>Add border to top side of element.</td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">
                          className="bd-e"
                        </code>
                      </td>
                      <td>Add border to right side of element.</td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">
                          className="bd-b"
                        </code>
                      </td>
                      <td>Add border to bottom side of element.</td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">
                          className="bd-s"
                        </code>
                      </td>
                      <td>Add border to left side of element.</td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">
                          className="bd-x"
                        </code>
                      </td>
                      <td>Add border to left and right side of element.</td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">
                          className="bd-y"
                        </code>
                      </td>
                      <td>Add border to top and bottom side of element.</td>
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
              <div className="card-title">Border Sizes</div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex flex-wrap">
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd">.bd</div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd bd-2">
                  .bd .bd-2
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd bd-3">
                  .bd .bd-3
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd bd-4">
                  .bd .bd-4
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd bd-5">
                  .bd .bd-5
                </div>
              </div>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <thead>
                    <tr>
                      <th className="wd-30p bg-custom">Class</th>
                      <th className="wd-70p bg-custom">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">
                          className="bd"
                        </code>
                      </td>
                      <td>Set 1px (default) border to element.</td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">
                          className="bd bd-2"
                        </code>
                      </td>
                      <td>Set 2px border to element.</td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">
                          className="bd bd-3"
                        </code>
                      </td>
                      <td>Set 3px border to element.</td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">
                          className="bd bd-4"
                        </code>
                      </td>
                      <td>Set 4px border to element.</td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">
                          className="bd bd-5"
                        </code>
                      </td>
                      <td>Set 5px border to element.</td>
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
              <div className="card-title">Remove Border</div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex flex-wrap">
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd bd-2 bd-t-0">
                  .bd-t-0
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd bd-2 bd-e-0">
                  .bd-e-0
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd bd-2 bd-b-0">
                  .bd-b-0
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd bd-2 bd-s-0">
                  .bd-s-0
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom  bd bd-2 bd-x-0">
                  .bd-x-0
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bg-custom bd bd-2 bd-y-0">
                  .bd-y-0
                </div>
              </div>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <thead>
                    <tr>
                      <th className="wd-30p bg-custom">Class</th>
                      <th className="wd-70p bg-custom">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">.bd-t-0</code>
                      </td>
                      <td>Remove top border of an element</td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">.bd-e-0</code>
                      </td>
                      <td>Remove right border of an element</td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">.bd-b-0</code>
                      </td>
                      <td>Remove bottom border of an element</td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">.bd-s-0</code>
                      </td>
                      <td>Remove left border of an element</td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">.bd-x-0</code>
                      </td>
                      <td>Remove left and right border of an element</td>
                    </tr>
                    <tr>
                      <td>
                        <code className="pd-0 bg-transparent">.bd-y-0</code>
                      </td>
                      <td>Remove top and bottom border of an element</td>
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
              <div className="card-title">Border Color</div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex flex-wrap">
                <div className="p-5 w-40 mg-s-10 mb-2 bd bd-2 bd-primary">
                  .bd-primary
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bd bd-2 bd-secondary">
                  .bd-secondary
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bd bd-2 bd-success">
                  .bd-success
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bd bd-2 bd-danger">
                  .bd-danger
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bd bd-2 bd-warning">
                  .bd-warning
                </div>
                <div className="p-5 w-40 mg-s-10 mb-2 bd bd-2 bd-teal">
                  .bd-teal
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
                        <code className="pd-0 bg-transparent">.bd-[value]</code>
                      </td>
                      <td className="border-top-0">
                        <code className="pd-0 bg-transparent">
                          .bd-gray-[value]
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Values
                      </td>
                      <td>
                        primary | success | warning | danger | info | indigo |
                        purple | pink | teal | orange
                      </td>
                      <td>
                        100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
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
              <div className="card-title">Border Radius</div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex">
                <div className="wd-80 ht-80 mg-s-10 bd bd-2 bg-custom radius-1"></div>
                <div className="wd-80 ht-80 mg-s-10 bd bd-2 bg-custom radius-4"></div>
                <div className="wd-80 ht-80 mg-s-10 bd bd-2 bg-custom radius-4"></div>
                <div className="wd-80 ht-80 mg-s-10 bd bd-2 bg-custom radius-4"></div>
                <div className="wd-80 ht-80 mg-s-10 bd bd-2 bg-custom radius-30"></div>
                <div className="wd-80 ht-80 mg-s-10 bd bd-2 bg-custom radius-40"></div>
              </div>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">
                        Classes
                      </td>
                      <td className="border-top-0">
                        <code className="pd-0 bg-transparent">.radius</code>
                      </td>
                      <td className="border-top-0">
                        <code className="pd-0 bg-transparent">
                          .radius-[value]
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">
                        Values
                      </td>
                      <td>
                        Set a border radius of 2px (default) to an element.
                      </td>
                      <td>0 | 1 | 3 | 5 | 7 | 10 | 20 | 30 | 40 | 50 </td>
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

export default Border;
