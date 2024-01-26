import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";

function Emptypage() {
  return (
    <Fragment>
      <Pageheader
        titles={"Empty page"}
        active={"Empty page"}
        Subtite={"Pages"}
      />

      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h6 className="mb-0">Type text here...</h6>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Emptypage;
