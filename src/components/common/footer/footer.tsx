import { Fragment } from "react";
import { Col, Container } from "react-bootstrap";

function Footer() {
  return (
    <Fragment>
      <div className="main-footer">
        <Col md={12} sm={12} className="text-center">
          <Container fluid className=" pd-t-0 ht-100p">
            Built with <span className="fa fa-heart "></span> by{" "}
            <a> GorillaBully. </a> All rights reserved
          </Container>
        </Col>
      </div>
    </Fragment>
  );
}

export default Footer;
