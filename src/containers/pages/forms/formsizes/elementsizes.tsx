import { Fragment } from "react";
import Pageheader from "../../../../components/common/pageheader/pageheader";
import { Card, Col, Form, Row } from "react-bootstrap";

function Elementsizes() {
  return (
    <Fragment>
      <Pageheader
        titles={"FORM ELEMENT SIZES"}
        active={"Form Sizes"}
        Subtite={"Forms"}
      />

      <Row>
        <Col md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Form Element Sizes</div>
            </div>

            <Card.Body>
              <Row>
                <Col xl={12}>
                  <Form.Label
                    htmlFor="inputSm"
                    className="form-label font-weight-semibold tx-13"
                  >
                    Form Control Small
                  </Form.Label>
                  <Form.Group className="form-group mb-2">
                    <Form.Control
                      type="text"
                      id="inputSm"
                      className="form-control form-control-sm"
                      name="input"
                    />
                  </Form.Group>
                </Col>
                <Col xl={12}>
                  <Form.Group className="form-group mb-2">
                    <Form.Label
                      htmlFor="inputMd"
                      className="form-label font-weight-semibold tx-13"
                    >
                      Form Control Medium
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="inputMd"
                      className="form-control"
                      name="input"
                    />
                  </Form.Group>
                </Col>
                <Col xl={12}>
                  <Form.Group>
                    <Form.Label
                      htmlFor="inputLg"
                      className="form-label font-weight-semibold tx-13"
                    >
                      Form Control Large
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="inputLg"
                      className="form-control form-control-lg"
                      name="input"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <div className="card-header">
              <div className="card-title">Checkbox Sizes</div>
            </div>
            <Card.Body>
              <Row>
                <Col xl={4}>
                  <Form.Group className="form-group m-0">
                    <p className="tx-14 font-weight-semibold form-label mb-3">
                      Checkboxes
                    </p>
                    <div className="custom-controls-stacked">
                      <Form.Label className="custom-control custom-checkbox">
                        <Form.Control
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox1"
                          value="option1"
                          defaultChecked
                        />
                        <span className="custom-control-label">Option 1</span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-checkbox">
                        <Form.Control
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label">Option 2</span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-checkbox">
                        <Form.Control
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox3"
                          value="option3"
                          disabled
                        />
                        <span className="custom-control-label">
                          Option Disabled
                        </span>
                      </Form.Label>

                      <Form.Label className="custom-control custom-checkbox">
                        <Form.Control
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox4"
                          value="option4"
                          defaultChecked
                          disabled
                        />
                        <span className="custom-control-label">
                          Option Disabled Checked
                        </span>
                      </Form.Label>
                    </div>
                  </Form.Group>
                </Col>
                <Col xl={4} className=" mt-4 mt-xl-0">
                  <Form.Group className="form-group m-0">
                    <p className="tx-14 font-weight-semibold form-label mb-3">
                      Checkboxes Medium Sizes
                    </p>
                    <div className="custom-controls-stacked">
                      <Form.Label className="custom-control custom-checkbox custom-control-md">
                        <Form.Control
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox1"
                          value="option1"
                          defaultChecked
                        />
                        <span className="custom-control-label custom-control-label-md">
                          Option 1
                        </span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-checkbox custom-control-md">
                        <Form.Control
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label custom-control-label-md">
                          Option 2
                        </span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-checkbox custom-control-md">
                        <Form.Control
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox3"
                          value="option3"
                          disabled
                        />
                        <span className="custom-control-label custom-control-label-md">
                          Option Disabled
                        </span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-checkbox custom-control-md">
                        <Form.Control
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox4"
                          value="option4"
                          defaultChecked
                          disabled
                        />
                        <span className="custom-control-label custom-control-label-md">
                          Option Disabled Checked
                        </span>
                      </Form.Label>
                    </div>
                  </Form.Group>
                </Col>
                <Col xl={4} className=" mt-4 mt-xl-0">
                  <Form.Group className="form-group m-0">
                    <p className="tx-14 font-weight-semibold form-label mb-3">
                      Checkboxes Large Size
                    </p>
                    <div className="custom-controls-stacked">
                      <Form.Label className="custom-control custom-checkbox custom-control-lg">
                        <Form.Control
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox1"
                          value="option1"
                          defaultChecked
                        />
                        <span className="custom-control-label custom-control-label-lg">
                          Option 1
                        </span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-checkbox custom-control-lg">
                        <Form.Control
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label custom-control-label-lg">
                          Option 2
                        </span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-checkbox custom-control-lg">
                        <Form.Control
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox3"
                          value="option3"
                          disabled
                        />
                        <span className="custom-control-label custom-control-label-lg">
                          Option Disabled
                        </span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-checkbox custom-control-lg">
                        <Form.Control
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox4"
                          value="option4"
                          defaultChecked
                          disabled
                        />
                        <span className="custom-control-label custom-control-label-lg">
                          Option Disabled Checked
                        </span>
                      </Form.Label>
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <div className="card-header">
              <div className="card-title">Radios Sizes</div>
            </div>
            <Card.Body>
              <Row>
                <Col xl={4}>
                  <Form.Group>
                    <Form.Label className="form-label tx-14 font-weight-semibold mb-3">
                      Radios
                    </Form.Label>
                    <div className="custom-controls-stacked">
                      <Form.Label className="custom-control custom-radio">
                        <Form.Control
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option1"
                          defaultChecked
                        />
                        <span className="custom-control-label">Option 1</span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-radio">
                        <Form.Control
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option2"
                        />
                        <span className="custom-control-label">Option 2</span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-checkbox3"
                          value="option3"
                          disabled
                        />
                        <span className="custom-control-label">
                          Option Disabled
                        </span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-radio"> <input type="radio" className="custom-control-input" name="example-radios" value="option3" disabled /> <span className="custom-control-label">Option Disabled</span> </Form.Label>

                    </div>
                  </Form.Group>
                </Col>
                <Col xl={4} className=" mt-4 mt-xl-0">
                  <Form.Group>
                    <Form.Label className="form-label tx-14 font-weight-semibold mb-3">
                      Medium Radios
                    </Form.Label>
                    <div className="custom-controls-stacked">
                    <Form.Label className="custom-control custom-radio custom-control-md">
                        <Form.Control
                          type="radio"
                          className="custom-control-input"
                          name="example-radios101"
                          value="option1"
                          defaultChecked
                        />
                        <span className="custom-control-label custom-control-label-md">Option 1</span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-radio custom-control-md">
                        <Form.Control
                          type="radio"
                          className="custom-control-input"
                          name="example-radios101"
                          value="option2"
                        />
                        <span className="custom-control-label custom-control-label-md">Option 2</span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-radio custom-control-md">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios1"
                          value="option3"
                          disabled
                        />
                        <span className="custom-control-label custom-control-label-md">
                          Option Disabled
                        </span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-radio custom-control-md">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios12"
                          value="option4"
                          disabled
                          defaultChecked
                        />
                        <span className="custom-control-label custom-control-label-md">
                          Option Disabled Checked
                        </span>
                      </Form.Label>
                    </div>
                  </Form.Group>
                </Col>
                <Col xl={4} className=" mt-4 mt-xl-0">
                  <Form.Group>
                    <Form.Label className="form-label tx-14 font-weight-semibold mb-3">
                      Large Radios
                    </Form.Label>
                    <div className="custom-controls-stacked">
                      <Form.Label className="custom-control custom-radio custom-control-lg">
                        <Form.Control
                          type="radio"
                          className="custom-control-input"
                          name="example-radios2"
                          value="option1"
                          defaultChecked
                        />
                        <span className="custom-control-label custom-control-label-lg">
                          Option 1
                        </span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-radio custom-control-lg">
                        <Form.Control
                          type="radio"
                          className="custom-control-input"
                          name="example-radios2"
                          value="option2"
                        />
                        <span className="custom-control-label custom-control-label-lg">
                          Option 2
                        </span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-radio custom-control-lg">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios2"
                          value="option3"
                          disabled
                        />
                        <span className="custom-control-label custom-control-label-lg">
                          Option Disabled
                        </span>
                      </Form.Label>
                      <Form.Label className="custom-control custom-radio custom-control-lg">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios22"
                          value="option4"
                          disabled
                          defaultChecked
                        />
                        <span className="custom-control-label custom-control-label-lg">
                          Option Disabled Checked
                        </span>
                      </Form.Label>
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <div className="card-header">
              <div className="card-title">Check Box Sizes Switches</div>
            </div>
            <Card.Body>
              <Row>
                <Col xl={4}>
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className="me-2">Check Box</span>
                      <Form.Control
                        type="checkbox"
                        name="custom-switch-checkbox1"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                    </Form.Label>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className="tx-17 me-2">Check Box</span>
                      <Form.Control
                        type="checkbox"
                        name="custom-switch-checkbox1"
                        className="custom-switch-input"
                        defaultChecked
                      />
                      <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                    </Form.Label>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className=" tx-20 me-2">Check Box</span>
                      <Form.Control
                        type="checkbox"
                        name="custom-switch-checkbox1"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator custom-switch-indicator-xl"></span>
                    </Form.Label>
                  </Form.Group>
                </Col>
                <Col xl={4} className=" mt-4 mt-xl-0">
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className="me-2">Check Box</span>
                      <Form.Control
                        type="checkbox"
                        name="custom-switch-checkbox2"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator custom-square"></span>
                    </Form.Label>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className=" tx-17 me-2">Check Box</span>
                      <Form.Control
                        type="checkbox"
                        name="custom-switch-checkbox2"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator custom-switch-indicator-lg custom-square"></span>
                    </Form.Label>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className="tx-20 me-2">Check Box</span>
                      <Form.Control
                        type="checkbox"
                        name="custom-switch-checkbox2"
                        className="custom-switch-input"
                        defaultChecked
                      />
                      <span className="custom-switch-indicator custom-switch-indicator-xl custom-square"></span>
                    </Form.Label>
                  </Form.Group>
                </Col>
                <Col xl={4} className=" mt-4 mt-xl-0">
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className="me-2">Check Box</span>
                      <Form.Control
                        type="checkbox"
                        name="custom-switch-checkbox3"
                        className="custom-switch-input"
                        defaultChecked
                      />
                      <span className="custom-switch-indicator custom-radius"></span>
                    </Form.Label>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className=" tx-17 me-2">Check Box</span>
                      <Form.Control
                        type="checkbox"
                        name="custom-switch-checkbox3"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator custom-switch-indicator-lg custom-radius"></span>
                    </Form.Label>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className="tx-20 me-2">Check Box</span>
                      <Form.Control
                        type="checkbox"
                        name="custom-switch-checkbox3"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator custom-switch-indicator-xl custom-radius"></span>
                    </Form.Label>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <div className="card-header">
              <div className="card-title">Radio Button Sizes Switches</div>
            </div>
            <Card.Body>
              <Row>
                <Col xl={4}>
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className="me-2">Radio Buttons</span>
                      <Form.Control
                        type="radio"
                        name="custom-switch-radio"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                    </Form.Label>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className=" tx-17 me-2">Radio Buttons</span>
                      <Form.Control
                        type="radio"
                        name="custom-switch-radio"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                    </Form.Label>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className=" tx-20 me-2">Radio Buttons</span>
                      <Form.Control
                        type="radio"
                        name="custom-switch-radio"
                        className="custom-switch-input"
                        defaultChecked
                      />
                      <span className="custom-switch-indicator custom-switch-indicator-xl"></span>
                    </Form.Label>
                  </Form.Group>
                </Col>
                <Col xl={4} className=" mt-4 mt-xl-0">
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className="me-2">Radio Buttons</span>
                      <Form.Control
                        type="radio"
                        name="custom-switch-radio1"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator custom-square"></span>
                    </Form.Label>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className="tx-17 me-2">Radio Buttons</span>
                      <Form.Control
                        type="radio"
                        name="custom-switch-radio1"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator custom-switch-indicator-lg custom-square"></span>
                    </Form.Label>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className="tx-20 me-2">Radio Buttons</span>
                      <Form.Control
                        type="radio"
                        name="custom-switch-radio1"
                        className="custom-switch-input"
                        defaultChecked
                      />
                      <span className="custom-switch-indicator custom-switch-indicator-xl custom-square"></span>
                    </Form.Label>
                  </Form.Group>
                </Col>
                <Col xl={4} className=" mt-4 mt-xl-0">
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className="me-2">Radio Buttons</span>
                      <Form.Control
                        type="radio"
                        name="custom-switch-radio2"
                        className="custom-switch-input"
                        defaultChecked
                      />
                      <span className="custom-switch-indicator custom-radius"></span>
                    </Form.Label>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className="tx-17 me-2">Radio Buttons</span>
                      <Form.Control
                        type="radio"
                        name="custom-switch-radio2"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator custom-switch-indicator-lg custom-radius"></span>
                    </Form.Label>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="custom-switch">
                      <span className="tx-20 me-2">Radio Buttons</span>
                      <Form.Control
                        type="radio"
                        name="custom-switch-radio2"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator custom-switch-indicator-xl custom-radius"></span>
                    </Form.Label>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={12} md={12}>
          <Card className="card form-size">
            <div className="card-header">
              <div className="card-title">Form Elements With Sizes</div>
            </div>
            <Card.Body>
              <Row>
                <Col xl={12}>
                  <div className="form-label mb-2 p-0">
                    Form-control small sizes
                  </div>
                </Col>
                <Col xl={2} className="text-start pe-0">
                  <Form.Group className="my-1">
                    <button className="btn btn-sm btn-primary btn-block">
                      Small
                    </button>
                  </Form.Group>
                </Col>
                <Col xl={2} className="text-start">
                  <Form.Group className="my-1">
                    <Form.Control
                      className="form-control form-control-sm"
                      placeholder="from-control-sm"
                      type="text"
                    />
                  </Form.Group>
                </Col>
                <Col xl={2} className="text-start">
                  <div className="form-group my-1 select2-sm">
                    <select
                      className="form-select mycustom form-select-sm select2 select2-sm select2-no-search"
                      id="inputGroupSelect01"
                    >
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </Col>
                <Col xl={2} className="text-start">
                  <div className="custom-control custom-radio mb-0 mt-1 p-0">
                    <Form.Label className="my-1 custom-control custom-radio">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios1"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label">
                        Radio example
                      </span>
                    </Form.Label>
                  </div>
                </Col>
                <Col xl={2} className="text-start">
                  <Form.Label className="my-1 custom-control custom-checkbox">
                    <Form.Control
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox1"
                      value="option1"
                      defaultChecked
                    />
                    <span className="custom-control-label">
                      checkbox example
                    </span>
                  </Form.Label>
                </Col>
                <Col xl={2} className="text-start">
                  <Form.Label className="my-1 custom-switch form-switch mb-0  p-0">
                    <Form.Control
                      type="checkbox"
                      name="custom-switch-radio"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator"></span>
                    <span className="custom-switch-description ms-2">
                      Toggle example
                    </span>
                  </Form.Label>
                </Col>
              </Row>
              <div className="row p-0 m-0">
                <Col xl={12} className="p-0">
                  <div className="form-label mb-2 p-0">
                    Form-control Medium sizes
                  </div>
                </Col>
                <Col xl={2} className="text-start px-0">
                  <Form.Group className="my-1">
                    <button className="btn btn-primary btn-block">
                      Medium
                    </button>
                  </Form.Group>
                </Col>
                <Col xl={2} className="text-start">
                  <Form.Group className="my-1">
                    <Form.Control
                      className="form-control"
                      placeholder="from-control"
                      type="text"
                    />
                  </Form.Group>
                </Col>
                <Col xl={2} className="text-start">
                  <Form.Group className="my-1">
                    <select
                      className="form-select mycustom form-select select2 select2-no-search"
                      id="inputGroupSelect02"
                    >
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </Form.Group>
                </Col>
                <Col xl={2} className="text-start">
                  <Form.Group className="my-1">
                    <div className="custom-control custom-radio-md mb-0 mt-1  p-0">
                      <Form.Label className="my-1 custom-control custom-radio custom-control-md">
                        <Form.Control
                          type="radio"
                          className="custom-control-input"
                          name="example-radios1"
                          value="option1"
                          defaultChecked
                        />
                        <span className="custom-control-label custom-control-label-md">
                          Radio example
                        </span>
                      </Form.Label>
                    </div>
                  </Form.Group>
                </Col>
                <Col xl={2} className="text-start">
                  <Form.Group className="my-1">
                    <Form.Label className="my-1 custom-control custom-checkbox custom-control-md">
                      <Form.Control
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox1"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-md">
                        checkbox example
                      </span>
                    </Form.Label>
                  </Form.Group>
                </Col>
                <Col xl={2} className="text-start">
                  <Form.Group className="my-1">
                    <Form.Label className="my-1 custom-switch form-switch mb-0  p-0">
                      <Form.Control
                        type="checkbox"
                        name="custom-switch-radio"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                      <span className="tx-17 ms-2">Toggle example</span>
                    </Form.Label>
                  </Form.Group>
                </Col>
              </div>
              <div className="row p-0 m-0">
                <Col xl={12} className="p-0">
                  <div className="form-label mb-2 p-0">
                    Form-control Large sizes
                  </div>
                </Col>
                <Col xl={2} className="text-start px-0">
                  <Form.Group className="my-1">
                    <button className="btn btn-lg btn-primary btn-block">
                      Large
                    </button>
                  </Form.Group>
                </Col>
                <Col xl={2} className="text-start">
                  <Form.Group className="my-1">
                    <Form.Control
                      className="form-control form-control-lg"
                      placeholder="from-control-lg"
                      type="text"
                    />
                  </Form.Group>
                </Col>
                <Col xl={2} className="text-start">
                  <Form.Group className="form-group select2-lg my-1">
                    <select
                      className="form-select mycustom form-select-lg select2 select2-no-search"
                      id="inputGroupSelect03"
                    >
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </Form.Group>
                </Col>
                <Col xl={2} className="text-start">
                  <Form.Group className="my-1">
                    <div className="custom-control custom-radio-lg mb-0 mt-1  p-0">
                      <Form.Label className="my-1 custom-control custom-radio custom-control-lg">
                        <Form.Control
                          type="radio"
                          className="custom-control-input"
                          name="example-radios1"
                          value="option1"
                          defaultChecked
                        />
                        <span className="custom-control-label custom-control-label-lg">
                          Radio example
                        </span>
                      </Form.Label>
                    </div>
                  </Form.Group>
                </Col>
                <Col xl={2} className="text-start">
                  <Form.Group className="my-1">
                    <Form.Label className="my-1 custom-control custom-checkbox custom-control-lg">
                      <Form.Control
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox1"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-lg">
                        checkbox example
                      </span>
                    </Form.Label>
                  </Form.Group>
                </Col>
                <Col xl={2} className="text-start">
                  <Form.Group className="my-1">
                    <Form.Label className="my-1 custom-switch form-switch mb-0  p-0">
                      <Form.Control
                        type="checkbox"
                        name="custom-switch-radio"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator custom-switch-indicator-xl"></span>
                      <span className="tx-20 ms-2">Toggle example</span>
                    </Form.Label>
                  </Form.Group>
                </Col>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Elementsizes;
