import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";

function Display() {
  return (
    <Fragment>
      <Pageheader titles={"Display"} active={"Display"} Subtite={"Utilities"} />
      <Row>
        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Basic Display</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive border radius-4 mg-t-15">
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
                        <code>.d-inline</code>
                      </td>
                      <td>Set an inline display property of an element.</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-inline-block</code>
                      </td>
                      <td>
                        Set an inline-block display property of an element.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-block</code>
                      </td>
                      <td>Set a block display property of an element.</td>
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
              <div className="card-title">Hiding Elements</div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive border radius-4 mg-t-15">
                <table className="table border-0 mb-0">
                  <thead>
                    <tr>
                      <th className="wd-40p bg-custom">Class</th>
                      <th className="wd-60p bg-custom">Screen Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>.d-none</code>
                      </td>
                      <td>Hidden on all</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-none .d-sm-block</code>
                      </td>
                      <td>Hidden only on xs</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-sm-none .d-md-block</code>
                      </td>
                      <td>Hidden only on sm</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-md-none .d-lg-block</code>
                      </td>
                      <td>Hidden only on md</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-lg-none .d-xl-block</code>
                      </td>
                      <td>Hidden only on lg</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-xl-none</code>
                      </td>
                      <td>Hidden only on xl</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-xxl-none</code>
                      </td>
                      <td>Hidden only on xxl</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-block</code>
                      </td>
                      <td>Visible on all</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-block .d-sm-none</code>
                      </td>
                      <td>Visible only on xs</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-none .d-sm-block .d-md-none</code>
                      </td>
                      <td>Visible only on sm</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-none .d-md-block .d-lg-none</code>
                      </td>
                      <td>Visible only on md</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-none .d-lg-block .d-xl-none</code>
                      </td>
                      <td>Visible only on lg</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-none .d-xl-block</code>
                      </td>
                      <td>Visible only on xl</td>
                    </tr>
                    <tr>
                      <td>
                        <code>.d-none .d-xxl-block</code>
                      </td>
                      <td>Visible only on xxl</td>
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

export default Display;
