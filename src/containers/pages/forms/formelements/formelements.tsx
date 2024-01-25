// import  { Fragment } from 'react'
import { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormGroup,
  InputGroup,
  Row,
} from "react-bootstrap";
import Pageheader from "../../../../components/common/pageheader/pageheader";
import { Classicmethod } from "./data/classicmethod";
import { Monolithmethod } from "./data/monolithmethod";
import { Nanomethod } from "./data/nanomethode";
import DatePicker from "react-datepicker";
import { TextField } from "@mui/material";
import { Brand, Customize, Disabled } from "./data/selctoptions";
function Formelements() {
  const [startDate, setStartDate] = useState(new Date());

  // const [startDate, setStartDate] = useState(new Date());

  const [secondary, setsecondary] = useState("");
  const [success, setsuccess] = useState("");
  const [dark, setdark] = useState("");
  const [primary, setprimary] = useState("");

  const [secondary1, setsecondary1] = useState("on");
  const [success1, setsuccess1] = useState("on");
  const [dark1, setdark1] = useState("on");
  const [primary1, setprimary1] = useState("on");
  return (
    <Fragment>
      <Pageheader
        titles={"Formelements"}
        active={"Formelements"}
        Subtite={"Forms"}
      />

      <Row className=" row-sm">
        <Col lg={6} xl={6} md={12} sm={12}>
          <Card className="box-shadow-0">
            <Card.Header>
              <h4 className="card-title mb-1">Default Form</h4>
            </Card.Header>
            <Card.Body className="">
              <Form className="form-horizontal">
                <FormGroup className="form-group">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Name"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Control
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Control
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Password"
                  />
                </FormGroup>
                <FormGroup className="form-group mb-0 justify-content-end">
                  <div className="checkbox">
                    <div className="custom-checkbox custom-control">
                      <Form.Control
                        type="checkbox"
                        data-checkboxes="mygroup"
                        className="custom-control-input"
                        id="checkbox-2"
                      />
                      <Form.Label
                        htmlFor="checkbox-2"
                        className="custom-control-label mt-1"
                      >
                        Check me Out
                      </Form.Label>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup className="form-group mb-0 mt-3 justify-content-end">
                  <div>
                    <Button
                      variant=""
                      type="submit"
                      className="btn btn-primary"
                    >
                      Sign in
                    </Button>
                    <Button
                      variant=""
                      type="submit"
                      className="btn btn-secondary ms-4"
                    >
                      Cancel
                    </Button>
                  </div>
                </FormGroup>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={6} md={12} sm={12}>
          <Card className="box-shadow-0 ">
            <Card.Header>
              <h4 className="card-title mb-1">Vertical Form</h4>
            </Card.Header>
            <Card.Body className=" pt-0">
              <Form>
                <div>
                  <FormGroup className="form-group">
                    <Form.Label htmlFor="exampleInputEmail1">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <Form.Label htmlFor="exampleInputPassword1">
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </FormGroup>
                  <div className="checkbox">
                    <div className="custom-checkbox custom-control">
                      <Form.Control
                        type="checkbox"
                        data-checkboxes="mygroup"
                        className="custom-control-input"
                        id="checkbox-1"
                      />
                      <Form.Label
                        htmlFor="checkbox-1"
                        className="custom-control-label mt-1"
                      >
                        Check me Out
                      </Form.Label>
                    </div>
                  </div>
                </div>
                <Button
                  variant=""
                  type="submit"
                  className="btn btn-primary mt-3 mb-0"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>

            <div className="card-header">
              <div className="main-content-label mg-b-5 card-title">
                Form Input and Textarea
              </div>
            </div>
            <Card.Body>

              <Row className=" row-sm">
                <div className="col-lg">
                  <Form.Control
                    className="form-control"
                    placeholder="Input box"
                    type="text"
                  />
                </div>
                <div className="col-lg mg-t-10 mg-lg-t-0">
                  <Form.Control
                    className="form-control"
                    placeholder="Input box (readonly)"
                    readOnly
                    type="text"
                  />
                </div>
                <div className="col-lg mg-t-10 mg-lg-t-0">
                  <Form.Control
                    className="form-control"
                    disabled
                    placeholder="Input box (disabled)"
                    type="text"
                  />
                </div>
              </Row>
              <Row className="row-sm mg-t-20">
                <div className="col-lg">
                  <Form.Control
                    as="textarea"
                    className="form-control"
                    placeholder="Textarea"
                    rows={3}
                  ></Form.Control>
                </div>
                <div className="col-lg mg-t-10 mg-lg-t-0">
                  <Form.Control
                    as="textarea"
                    className="form-control"
                    placeholder="Textarea (readonly)"
                    readOnly
                    rows={3}
                  ></Form.Control>
                </div>
                <div className="col-lg mg-t-10 mg-lg-t-0">
                  <Form.Control
                    as="textarea"
                    className="form-control"
                    disabled
                    placeholder="Texarea (disabled)"
                    rows={3}
                  ></Form.Control>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <div className="card-header">
              <div className="main-content-label mg-b-5 card-title">
                Form Input Sizes
              </div>
            </div>
            <Card.Body>
              <Row className=" row-sm">
                <div className="col-lg">
                  <Form.Control
                    className="form-control form-control-sm mg-b-20"
                    placeholder="Input sm box"
                    type="text"
                  />
                  <Form.Control
                    className="form-control mg-b-20"
                    placeholder="Input box"
                    type="text"
                  />
                  <Form.Control
                    className="form-control form-control-lg"
                    placeholder="Input lg box"
                    type="text"
                  />
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <div className="card-header">
              <div className="main-content-label mg-b-5 card-title">
                Valid State Input
              </div>
            </div>
            <Card.Body>
              <Form className="needs-validation was-validated">
                <Row className=" row-sm">
                  <Col lg={6}>
                    <FormGroup className="form-group has-success mg-b-0">
                      <Form.Control
                        className="form-control"
                        placeholder="Input box (success state)"
                        required
                        type="text"
                        defaultValue="This is input"
                      />
                      <Form.Control
                        as="textarea"
                        className="form-control mg-t-20"
                        placeholder="Textarea (success state)"
                        required
                        rows={3}
                        defaultValue="This is textarea"
                      ></Form.Control>
                    </FormGroup>
                  </Col>
                  <Col lg={6} className=" mg-t-20 mg-lg-t-0">
                    <FormGroup className="form-group has-danger mg-b-0">
                      <Form.Control
                        className="form-control"
                        placeholder="Input box (invalid state)"
                        required
                        type="text"
                      />
                      <Form.Control
                        as="textarea"
                        className="form-control mg-t-20"
                        placeholder="Textarea (invalid state)"
                        required
                        rows={3}
                      ></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <div className="card-header">
              <div className="main-content-label mg-b-5 card-title">
                File Browser
              </div>
            </div>
            <Card.Body>
              <Row className=" row-sm">
                <Col sm={12} md={12} lg={12}>
                  <div className="mb-3">
                    <Form.Label htmlFor="formFile" className="form-label">
                      Default file input example
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      type="file"
                      id="formFile"
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Label
                      htmlFor="formFileMultiple"
                      className="form-label"
                    >
                      Multiple files input example
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      type="file"
                      id="formFileMultiple"
                      multiple
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Label
                      htmlFor="formFileDisabled"
                      className="form-label"
                    >
                      Disabled file input example
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      type="file"
                      id="formFileDisabled"
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="formFileSm" className="form-label">
                      Small file input example
                    </Form.Label>
                    <Form.Control
                      className="form-control form-control-sm"
                      id="formFileSm"
                      type="file"
                    />
                  </div>
                  <div>
                    <Form.Label htmlFor="formFileLg" className="form-label">
                      Large file input example
                    </Form.Label>
                    <Form.Control
                      className="form-control form-control-lg"
                      id="formFileLg"
                      type="file"
                    />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={6} xs={12} sm={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Checkbox</div>
            </div>
            <Card.Body>


              <Row>
                <Col lg={3}>
                  <Form.Check type="checkbox" label="Checkbox Unchecked" />
                </Col>
                <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                  <Form.Check
                    type="checkbox"
                    label="Checkbox Checked"
                    defaultChecked
                  />
                </Col>
                <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                  <Form.Check type="radio" label="Checkbox Disabled" disabled />
                </Col>
              </Row>
              <Row className="mg-t-15">
                <Col lg={3}>
                  <Form.Check
                    type="radio"
                    label="Radio Unchecked"
                    name="example-radios"
                  />
                </Col>
                <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                  <Form.Check
                    type="radio"
                    label="Radio Checked"
                    name="example-radios"
                    defaultChecked
                  />
                </Col>
                <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                  <Form.Check
                    type="radio"
                    label="Radio Disabled"
                    name="example-radios"
                    disabled
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={6} xs={12} sm={12}>
          <Card>
            <Card.Body>
              <div className="main-content-label mg-b-5">Toggle Switches</div>

              <div className="main-toggle-group-demo">
                <div
                  className={`main-toggle ${primary}`}
                  onClick={() => {
                    primary == "off" ? setprimary("on") : setprimary("off");
                  }}
                >
                  <span></span>
                </div>
                <div
                  className={`main-toggle ms-sm-2 main-toggle-secondary ${secondary}`}
                  onClick={() => {
                    secondary == "off"
                      ? setsecondary("on")
                      : setsecondary("off");
                  }}
                >
                  <span></span>
                </div>
                <div
                  className={`main-toggle  ms-sm-2 main-toggle-success ${success}`}
                  onClick={() => {
                    success == "off" ? setsuccess("on") : setsuccess("off");
                  }}
                >
                  <span></span>
                </div>
                <div
                  className={`main-toggle ms-sm-2 main-toggle-dark ${dark}`}
                  onClick={() => {
                    dark == "off" ? setdark("on") : setdark("off");
                  }}
                >
                  <span></span>
                </div>
              </div>
              <div className="main-toggle-group-demo mg-t-10">
                <div
                  className={`main-toggle  ${primary1}`}
                  onClick={() => {
                    primary1 == "on" ? setprimary1("off") : setprimary1("on");
                  }}
                >
                  <span></span>
                </div>
                <div
                  className={`main-toggle ms-sm-2  main-toggle-secondary ${secondary1}`}
                  onClick={() => {
                    secondary1 == "on"
                      ? setsecondary1("off")
                      : setsecondary1("on");
                  }}
                >
                  <span></span>
                </div>
                <div
                  className={`main-toggle ms-sm-2  main-toggle-success ${success1}`}
                  onClick={() => {
                    success1 == "on" ? setsuccess1("off") : setsuccess1("on");
                  }}
                >
                  <span></span>
                </div>
                <div
                  className={`main-toggle ms-sm-2  main-toggle-dark ${dark1}`}
                  onClick={() => {
                    dark1 == "on" ? setdark1("off") : setdark1("on");
                  }}
                >
                  <span></span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <div className="card-header">
              <div className="main-content-label mg-b-5 card-title">
                Input Groups
              </div>
            </div>
            <Card.Body>
              <Row className=" row-sm">
                <Col lg={4}>
                  <InputGroup className="input-group mb-3">
                    <InputGroup.Text
                      className="input-group-text"
                      id="basic-addon1"
                    >
                      @
                    </InputGroup.Text>
                    <Form.Control
                      aria-describedby="basic-addon1"
                      aria-label="Username"
                      className="form-control"
                      placeholder="Username"
                      type="text"
                    />
                  </InputGroup>
                </Col>
                <Col lg={4}>
                  <InputGroup className="input-group mb-3">
                    <Form.Control
                      aria-describedby="basic-addon2"
                      aria-label="Recipient's username"
                      className="form-control"
                      placeholder="Recipient's username"
                      type="text"
                    />
                    <InputGroup.Text
                      className="input-group-text"
                      id="basic-addon2"
                    >
                      @example.com
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col lg={4}>
                  <InputGroup className="input-group mb-3">
                    <InputGroup.Text className="input-group-text">
                      $
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Amount (to the nearest dollar)"
                      className="form-control"
                      type="text"
                    />
                    <InputGroup.Text className="input-group-text">
                      .00
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>
              <Row className=" row-sm">
                <Col lg={4}>
                  <InputGroup className="input-group">
                    <div className="input-group-text">
                      <label className="ckbox wd-16 mg-b-0">
                        <input className="mg-0" type="checkbox" />
                        <span></span>
                      </label>
                    </div>
                    <Form.Control
                      className="form-control"
                      placeholder="Text input with checkbox"
                      type="text"
                    />
                  </InputGroup>
                </Col>

                <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                  <InputGroup className="input-group">
                    <div className="input-group-text">
                      <label className="rdiobox wd-16 mg-b-0">
                        <input type="radio" />
                        <span></span>
                      </label>
                    </div>
                    <Form.Control
                      className="form-control"
                      placeholder="Text input with radiobox"
                      type="text"
                    />
                  </InputGroup>
                </Col>

                <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                  <InputGroup className="input-group">
                    <Form.Control
                      className="form-control"
                      placeholder="Search for..."
                      type="text"
                    />
                    <Button
                      variant=""
                      className="btn btn-primary br-ts-0 br-bs-0"
                      type="button"
                    >
                      <i className="fa fa-search"></i>
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <div className="card-header">
              <div className="main-content-label mg-b-5 card-title">
                Input Mask
              </div>
            </div>
            <Card.Body>
              <Row className=" row-sm">
                <Col lg={3}>
                  <InputGroup className="input-group">
                    <InputGroup.Text className="input-group-text">
                      Date:
                    </InputGroup.Text>
                    <Form.Control
                      className="form-control"
                      id="dateMask"
                      placeholder="MM/DD/YYYY"
                      type="text"
                    />
                  </InputGroup>
                </Col>

                <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                  <InputGroup className="input-group">
                    <InputGroup.Text className="input-group-text">
                      Phone:
                    </InputGroup.Text>
                    <Form.Control
                      className="form-control"
                      id="phoneMask"
                      placeholder="(000) 000-0000"
                      type="text"
                    />
                  </InputGroup>
                </Col>
                <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                  <InputGroup className="input-group">
                    <InputGroup.Text className="input-group-text">
                      Phone + Ext.:
                    </InputGroup.Text>
                    <Form.Control
                      className="form-control"
                      id="phoneExtMask"
                      placeholder="(000) 000-0000 ext 0000"
                      type="text"
                    />
                  </InputGroup>
                </Col>
                <Col lg={2} className=" mg-t-20 mg-lg-t-0">
                  <InputGroup className="input-group">
                    <InputGroup.Text className="input-group-text">
                      SSN:
                    </InputGroup.Text>

                    <Form.Control
                      className="form-control"
                      id="ssnMask"
                      placeholder="000-00-0000"
                      type="text"
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col> */}

        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <div className="card-header">
              <div className="main-content-label mg-b-5 card-title">
                Color Picker
              </div>
            </div>

            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <div className="theme-container">
                    <Button variant="">classic</Button>
                  </div>
                  <div className="pickr-container">
                    <Classicmethod />
                  </div>
                </div>
                <div>
                  <div className="theme-container1">
                    <Button variant="">monolith</Button>
                  </div>
                  <div className="pickr-container1">
                    <Monolithmethod />
                  </div>
                </div>
                <div>
                  <div className="theme-container2">
                    <Button variant="">nano</Button>
                  </div>
                  <div className="pickr-container2">
                    <Nanomethod />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <div className="card-header">
              <div className="main-content-label mg-b-5 card-title">
                DATE, MONTH, YEAR RANGE PICKER
              </div>
            </div>
            <Card.Body className="year-date-section">
              <Row className=" row-sm">
                <Col lg={4}>
                  <InputGroup className="input-group reactdate-pic">
                    <InputGroup.Text className="input-group-text">
                      <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                    </InputGroup.Text>

                    <DatePicker
                      className="form-control rounded-start-0 h-34px"
                      selected={startDate}
                      onChange={(date: any) => setStartDate(date)}
                    />
                  </InputGroup>
                </Col>

                <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                  <InputGroup className="input-group reactdate-pic">
                    <InputGroup.Text className="input-group-text">
                      <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                    </InputGroup.Text>
                    <DatePicker
                      className="form-control rounded-start-0 h-34px"
                      selected={startDate}
                      onChange={(date: any) => setStartDate(date)}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      showFullMonthYearPicker
                    />
                  </InputGroup>
                </Col>
                <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                  <InputGroup className="input-group reactdate-pic">
                    <InputGroup.Text className="input-group-text">
                      <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                    </InputGroup.Text>

                    <DatePicker
                      className="form-control rounded-start-0 h-34px"
                      selected={startDate}
                      onChange={(date: any) => setStartDate(date)}
                      showYearPicker
                      dateFormat="yyyy"
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={6} xs={12} sm={12}>
          <Card className="datepicker-style2">
            <div className="card-header">
              <div className="card-title">
                <div className="main-content-label mg-b-5">
                  Datetimepicker Style 2
                </div>
              </div>
            </div>
            <Card.Body>
              <Row className=" row-sm">
                <InputGroup className="input-group col-xl-9 datetimepicker-2">
                  <InputGroup.Text className="input-group-text ">
                    <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                  </InputGroup.Text>

                  <Form className="form-control p-0 border-0" noValidate>
                    <TextField
                      id="datetime-local"
                      type="datetime-local"
                      defaultValue="2020-01-16T14:22"
                    />
                  </Form>
                </InputGroup>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={6} xs={12} sm={12}>
          <Card>
            
              <div className="card-header">
                <div className="card-title">Datetimepicker Style 3</div>
              </div>
              <Card.Body>
              <Row className=" row-sm">
                <InputGroup className="input-group col-md-6">
                  <InputGroup.Text className="input-group-text">
                    <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    defaultValue="January 20, 2019 09:00"
                    id="datetimepicker3"
                    className="form-control"
                  />
                </InputGroup>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Select</h3>
            </Card.Header>
            <Card.Body>
              <FormGroup className="form-group">
                <Form.Label className="form-label">Default Select</Form.Label>
                <Brand />
              </FormGroup>
              <FormGroup className="form-group">
                <Form.Label className="form-label">Customize Select</Form.Label>
                <Customize />
              </FormGroup>
              <FormGroup className="form-group">
                <Form.Label className="form-label">Disabled Select</Form.Label>
                <Disabled />
              </FormGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Formelements;
