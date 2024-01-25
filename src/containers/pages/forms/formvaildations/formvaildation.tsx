import { Fragment, useState } from "react";
// import PropTypes from "prop-types";
import { Button, Card, Form, FormGroup, InputGroup } from "react-bootstrap";
import { FormExample1 } from "./data/formvaildationusingyup";
import Pageheader from "../../../../components/common/pageheader/pageheader";

function FormValidation() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  // from 2
  const [validated1, setValidated1] = useState(false);

  const handleSubmit1 = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated1(true);
  };
  // Server Side
  const [validated2, setValidated2] = useState(false);

  const handleSubmit2 = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated2(true);
  };

  return (
    <Fragment>
      <Pageheader
        titles={"FORM VALIDATION"}
        Subtite={"Forms"}
        active={"Form Validation"}
      />
      {/* <!-- Row --> */}
      <div className="row row-sm">
        <div className="col-xl-6 col-lg-12 col-md-12">
          <Card className="card custom-card">
            <div className="card-header">
              <div className="card-title">Input Validation</div>
            </div>
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="">
                  <div className="row row-sm">
                    <Form.Group className="col-lg-6 form-group">
                      <Form.Label>
                        Firstname : <span className="tx-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        name="firstname"
                        placeholder="Enter firstname"
                        type="text"
                        defaultValue="Marky"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="col-lg-6 form-group"
                      defaultValue="John"
                    >
                      <Form.Label>
                        Lastname : <span className="tx-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Marky"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <Form.Group className="mb-3 form-group">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <Button
                    className="btn ripple btn-main-primary btn-block"
                    type="submit"
                  >
                    Validate Form
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-6 col-lg-12 col-md-12">
          <Card className="card custom-card">
            <div className="card-header">
              <h6 className="main-content-label mb-1 card-title">
                Custom Checkbox Validation
              </h6>
            </div>
            <Card.Body>
              <Form noValidate validated={validated1} onSubmit={handleSubmit1}>
                <div className="">
                  <div className="row row-sm">
                    <Form.Group className="col-lg-6 form-group">
                      <Form.Label>
                        Firstname : <span className="tx-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        name="firstname"
                        placeholder="Enter firstname"
                        type="text"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="col-lg-6 form-group">
                      <Form.Label>
                        Lastname : <span className="tx-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <Form.Group className="mb-3 form-group">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <div className="mg-t-20">
                    <Button
                      className="btn ripple btn-primary pd-x-20"
                      type="submit"
                    >
                      Validate Form
                    </Button>
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* <!-- End Row--> */}

      {/* <!-- Row --> */}
      <div className="row row-sm">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <Card className="card custom-card">
            <div className="card-header">
              <h6 className="main-content-label mb-3 card-title">
                Server side
              </h6>
            </div>
            <Card.Body>
              <Form
                className="row g-3"
                noValidate
                validated={validated2}
                onSubmit={handleSubmit2}
              >
                <FormGroup className="col-md-4">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    defaultValue="Marky"
                    required
                  />
                  <Form.Control.Feedback className="valid-feedback">
                    Looks good!
                  </Form.Control.Feedback>
                </FormGroup>
                <FormGroup className="col-md-4">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    defaultValue="john"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </FormGroup>
                <Form.Group className="col-md-4 form-group">
                  <Form.Label className="form-label">Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend3">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      aria-describedby="inputGroupPrepend3"
                      required
                    />
                    <Form.Control.Feedback>
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="col-md-6 mt-0 form-group">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    aria-describedby="validationServer03Feedback"
                    placeholder="City"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="col-md-3 mt-0 form-group">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    required
                  ></Form.Control>
                  <Form.Control.Feedback className="invalid-feedback">
                    Please select a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="col-md-3 mt-0 form-group">
                  <Form.Label controlid="validationServer05">Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required />
                  <Form.Control.Feedback id="validationServer05Feedback">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="col-12 form-group">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <div className="col-12">
                  <Button className="btn btn-primary" type="submit">
                    Submit form
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12">
          <Card className="card custom-card">
            <div className="card-header">
              <h6 className="main-content-label mb-3 card-title">Tooltips</h6>
            </div>

            <Card.Body>
              <FormExample1 />
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* <!-- End Row--> */}
    </Fragment>
  );
}

FormValidation.propTypes = {};

FormValidation.defaultProps = {};

export default FormValidation;
