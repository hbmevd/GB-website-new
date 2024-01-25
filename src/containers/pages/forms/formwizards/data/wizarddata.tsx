import React, { useState } from "react";
import { Col, Form, FormGroup, InputGroup, Row, Table } from "react-bootstrap";
import validator from "validator";

import { registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);



//Basic start
const Wizard = ({ step: currentIndex, ...props }: any) => {
  const steps: any = React.Children.toArray(props.children);
  const prevStep: any = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep: any = currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

  return (
    <div>

      <nav className="btn-group steps basicsteps">
        {steps.map((step: any, index: any) => (
          <Button
            key={step.props.number}
            onClick={() => props.onChange(index)}
            className={getClsNavBtn(index === currentIndex)}
          >
            <span className="number me-2 ">{step.props.number}</span>
            <i>{step.props.title}</i>
          </Button>
        ))}
      </nav>

      {steps[currentIndex]}

      <div className=" p-3 d-flex justify-content-between  ">
        <Button
          visible={prevStep}
          onClick={() => props.onChange(currentIndex - 1)}
          title={prevStep.description}
        >
          Back
        </Button>
        <Button
          visible={nextStep}
          onClick={() => props.onChange(currentIndex + 1)}
          title={nextStep.description}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
const Step = ({ children }: any) => children;

function getClsNavBtn(active: any) {
  return "btn" + (active ? " active" : "");
}
function Button({ visible, ...props }: any) {
  return (

    <button
      className={visible ? "btn btn-primary " : "invisible"}
      {...props}
    />

  );
}

export class Basicwizard extends React.Component {
  state = { step: 0 };

  handleStep = (step: any) => {
    this.setState({ step });
  };

  render() {
    return (
      <Wizard step={this.state.step} onChange={this.handleStep}>
        <Step title="Personal Information" number="1">
          <section className="card-body Basicwizard ">
            <FormGroup className="control-group form-group">
              <Form.Label className="form-label">Name</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                required
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup className="control-group form-group">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                type="email"
                className="form-control"
                required
                placeholder="Email Address"
              />
            </FormGroup>
            <FormGroup className="control-group form-group">
              <Form.Label className="form-label">Phone Number</Form.Label>
              <Form.Control
                type="number"
                className="form-control"
                required
                placeholder="Number"
              />
            </FormGroup>
            <div className="control-group form-group mb-0">
              <Form.Label className="form-label">Address</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                required
                placeholder="Address"
              />
            </div>
          </section>
        </Step>

        <Step title="Billing Information" number="2">
          <section className="card-body Basicwizard ">
            <div className="table-responsive mg-t-20">
              <Table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td className="text-end">$792.00</td>
                  </tr>
                  <tr>
                    <td>
                      <span>Totals</span>
                    </td>
                    <td className="text-end text-muted">
                      <span>$792.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Order Total</span>
                    </td>
                    <td>
                      <h2 className="price text-end mb-0">$792.00</h2>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </section>
        </Step>
        <Step title="Payment Details" number="3">
          <section className="card-body Basicwizard ">
            <FormGroup className="form-group">
              <Form.Label className="form-label">CardHolder Name</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="name1"
                placeholder="First Name"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label className="form-label">Card number</Form.Label>
              <InputGroup className="input-group">
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <span className="input-group-append">
                  <Button
                    variant=""
                    className="btn btn-secondary"
                    type="button"
                  >
                    <i className="fab fa-cc-visa"></i> &nbsp;
                    <i className="fab fa-cc-amex"></i> &nbsp;
                    <i className="fab fa-cc-mastercard"></i>
                  </Button>
                </span>
              </InputGroup>
            </FormGroup>
            <Row>
              <Col sm={8}>
                <FormGroup className="form-group mb-sm-0">
                  <Form.Label className="form-label">Expiration</Form.Label>
                  <InputGroup className="input-group">
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="MM"
                      name="expiremonth"
                    />
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="YY"
                      name="expireyear"
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup className="form-group mb-0">
                  <Form.Label className="form-label">
                    CVV <i className="fa fa-question-circle"></i>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
          </section>
        </Step>
      </Wizard>
    );
  }
}
//Basic end

function Name({ nextStep, handleFormData, values }: any) {
  const [error, setError] = useState(false);
  const submitFormData = (e: any) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Form.Group className="">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid #6259ca" : "" }}
            name="firstName"
            defaultValue={values.firstName}
            type="text"
            placeholder="First Name"
            onChange={handleFormData("firstName")}
          />
          {error ? (
            <Form.Text style={{ color: "#6259ca" }}>
              This is a required field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid #6259ca" : "" }}
            name="lastName"
            defaultValue={values.lastName}
            type="text"
            placeholder="Last Name"
            onChange={handleFormData("lastName")}
          />
          {error ? (
            <Form.Text style={{ color: "#6259ca" }}>
              This is a required field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Button type="submit" className="btn mt-3 btn-primary">
          Continue
        </Button>
      </Form>
    </div>
  );
}
function StepTwo({ nextStep, handleFormData, prevStep, values }: any) {

  const [error, setError] = useState(false);

  const submitFormData = (e: any) => {
    e.preventDefault();

    if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid red" : "" }}
            type="number"
            placeholder="Age"
            onChange={handleFormData("age")}
          />
          {error ? (
            <Form.Text style={{ color: "red" }}>
              This is a required field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid red" : "" }}
            type="email"
            placeholder="email"
            onChange={handleFormData("email")}
          />
          {error ? (
            <Form.Text style={{ color: "red" }}>
              This is a required field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <div>
          <Button className="float-start btn btn-primary" onClick={prevStep}>
            Previous
          </Button>

          <Button className="float-end btn btn-primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
function Final({ nextStep, prevStep, values }: any) {
  const [error, setError] = useState(false);

  const submitFormData = (e: any) => {
    e.preventDefault();

    if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <section>
        <FormGroup className="form-group" onSubmit={submitFormData}>
          <Form.Label className="form-label">CardHolder Name</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid red" : "" }}
            type="text"
            placeholder="First Name"
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Form.Label className="form-label">Card number</Form.Label>
          <InputGroup className="input-group">
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Search for..."
            />
            <span className="input-group-append">
              <Button variant="" className="btn btn-secondary" type="button">
                <i className="fab fa-cc-visa"></i> &nbsp;
                <i className="fab fa-cc-amex"></i> &nbsp;
                <i className="fab fa-cc-mastercard"></i>
              </Button>
            </span>
          </InputGroup>
        </FormGroup>
        <Row>
          <Col sm={8}>
            <FormGroup className="form-group mb-sm-0">
              <Form.Label className="form-label">Expiration</Form.Label>
              <InputGroup className="input-group">
                <Form.Control
                  type="number"
                  className="form-control"
                  placeholder="MM"
                  name="expiremonth"
                />
                <Form.Control
                  type="number"
                  className="form-control"
                  placeholder="YY"
                  name="expireyear"
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup className="form-group mb-0">
              <Form.Label className="form-label">
                CVV <i className="fa fa-question-circle"></i>
              </Form.Label>
              <Form.Control type="number" className="form-control" required />
            </FormGroup>
          </Col>
        </Row>
      </section>
      <div>
        <Button
          className="float-start btn btn-primary mt-2"
          onClick={prevStep}
        >
          Previous
        </Button>

        <Button
          className="float-end btn btn-primary mt-2"
          disabled
          type="submit"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
export function WizardForm() {
  const [step, setstep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: ""
  });
  const nextStep = () => {
    setstep(step + 1);
  };
  const prevStep = () => {
    setstep(step - 1);
  };
  const handleInputData: any = (input: any) => (e: any) => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
  };
  switch (step) {
    case 1:
      return (
        <div className="custom-margin">
          <Name nextStep={nextStep} handleFormData={handleInputData} values={formData} />
        </div>
      );
    default:
      return (
        <div className="custom-margin">
          <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        </div>
      );
    case 3:
      return (
        <div className="">
          <div className="custom-margin">
            <Final values={formData} />
          </div>
        </div>
      );
  }
}

const Wizardhor = ({ step: currentIndex, ...props }: any) => {

  const steps: any = React.Children.toArray(props.children);
  const prevStep: any = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep: any =
    currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

  return (
    <div className="row border">
      <nav className=" steps col-sm-3 card-body">
        {steps.map((step: any, index: any) => (
          <Buttons
            key={step.props.number}
            onClick={() => props.onChange(index)}
            className={getClsNavBtns(index === currentIndex)}
          >
            <span className="number">{step.props.number}</span> 
            <i className="ms-2">{step.props.title}</i>
          </Buttons>
        ))}
      </nav>

      {steps[currentIndex]}
      <div className="col-sm-3 border-start"></div>
      <div className=" p-3 d-flex justify-content-between col-sm-9 ">
        <Buttons
          visible={prevStep}
          onClick={() => props.onChange(currentIndex - 1)}
          title={prevStep.description}
        >
          Back
        </Buttons>
        <Buttons
          visible={nextStep}
          onClick={() => props.onChange(currentIndex + 1)}
          title={nextStep.description}
        >
          Next
        </Buttons>
      </div>
    </div>
  );
};
const Steps = ({ children }: any) => children;

function getClsNavBtns(active: any) {
  return "btn horwizard" + (active ? " active" : "");
}
function Buttons({ visible, ...props }: any) {
  return (
    <button className={visible ? "btn btn-primary " : "invisible"} {...props} />
  );
}

export class Vertical extends React.Component {

  state = { step: 0 };

  handleStep = (step: any) => {
    this.setState({ step });
  };

  render() {
    return (
      <Wizardhor step={this.state.step} onChange={this.handleStep}>
        <Steps title="Personal Information" number="1">
          <section className="card-body col-sm-9">
            <FormGroup className="control-group form-group">
              <Form.Label className="form-label">Name</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                required
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup className="control-group form-group">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                type="email"
                className="form-control"
                required
                placeholder="Email Address"
              />
            </FormGroup>
            <FormGroup className="control-group form-group">
              <Form.Label className="form-label">Phone Number</Form.Label>
              <Form.Control
                type="number"
                className="form-control"
                required
                placeholder="Number"
              />
            </FormGroup>
            <FormGroup className="control-group form-group mb-2">
              <Form.Label className="form-label">Address</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                required
                placeholder="Address"
              />
            </FormGroup>
            <div className="mb-2 mt-4 drop">
              {/* <Drop /> */}
            </div>
            <div className="mb-0 drop1">
              {/* <Drop1 /> */}
            </div>
          </section>
        </Steps>

        <Steps title="Billing Information" number="2">
          <section className="card-body col-sm-9">
            <div className="table-responsive mg-t-20">
              <Table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td className="text-end">$792.00</td>
                  </tr>
                  <tr>
                    <td>
                      <span>Totals</span>
                    </td>
                    <td className="text-end text-muted">
                      <span>$792.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Order Total</span>
                    </td>
                    <td>
                      <h2 className="price text-end mb-0">$792.00</h2>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </section>
        </Steps>
        <Steps title="Payment Details" number="3">
          <section className="card-body col-sm-9">
            <FormGroup className="form-group">
              <Form.Label className="form-label">CardHolder Name</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="name12"
                placeholder="First Name"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label className="form-label">Card number</Form.Label>
              <InputGroup className="input-group">
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <span className="input-group-append">
                  <Button
                    variant=""
                    className="btn btn-secondary"
                    type="button"
                  >
                    <i className="fab fa-cc-visa"></i> &nbsp;
                    <i className="fab fa-cc-amex"></i> &nbsp;
                    <i className="fab fa-cc-mastercard"></i>
                  </Button>
                </span>
              </InputGroup>
            </FormGroup>
            <Row>
              <Col sm={8}>
                <FormGroup className="form-group mb-sm-0">
                  <Form.Label className="form-label">Expiration</Form.Label>
                  <InputGroup className="input-group">
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="MM"
                      name="expiremonth"
                    />
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="YY"
                      name="expireyear"
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup className="form-group mb-0">
                  <Form.Label className="form-label">
                    CVV <i className="fa fa-question-circle"></i>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
          </section>
        </Steps>
      </Wizardhor>
    );
  }
}
