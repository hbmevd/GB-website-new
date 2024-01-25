// import  { Fragment } from 'react'
import Pageheader from "../../../../components/common/pageheader/pageheader";
import { Fragment, useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Button, Card, Col, InputGroup, Row } from "react-bootstrap";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import Creatable from "react-select/creatable";
import { Link } from "react-router-dom";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

import { groupedOptions, options } from "./data/selectoptions";
function Advacneforms() {
  const [value, setValue] = useState<any>();
  const [files1, setFiles1] = useState<any>([]);
  const [files2, setFiles2] = useState<any>([]);
  const [files3, setFiles3] = useState<any>([]);

  const [selected1, setSelected1] = useState<any>([]);
  const [selected2, setSelected2] = useState<any>([]);
  const [selectedFiles] = useState([]);
  const [Singleselect, setSingleselect] = useState<any>("");
  const [Selectdis, setSelectdis] = useState<any>("");
  const [Search, setSearch] = useState<any>("");

  const BasicMutipleSelect = () => {
    const [selected, setSelected] = useState([]);
    const options = [
      { value: "Audi", label: "Audi" },
      { value: "BMW", label: "BMW" },
      { value: "volkswagen", label: "volkswagen" },
      { value: "Aston Martin", label: "Aston Martin" },
      { value: "mitsubishi", label: "mitsubishi" },
      { value: "hyundai", label: "hyundai" },
      { value: "fiat", label: "fiat" },
    ];
    return (
      <MultiSelect
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        options={options}
        disableSearch
        className=""
      />
    );
  };
  const BasicMutipleSelect2 = () => {
    const [selected, setSelected] = useState([]);
    const options = [
      { value: "Audi", label: "Audi" },
      { value: "BMW", label: "BMW" },
      { value: "volkswagen", label: "volkswagen" },
      { value: "Aston Martin", label: "Aston Martin" },
      { value: "mitsubishi", label: "mitsubishi" },
      { value: "hyundai", label: "hyundai" },
      { value: "fiat", label: "fiat" },
    ];
    return (
      <MultiSelect
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        options={options}
        disabled
      />
    );
  };
  const BasicMutipleSelect3 = () => {
    const [selected, setSelected] = useState([]);
    const options = [
      { value: "Audi", label: "Audi" },
      { value: "BMW", label: "BMW" },
      { value: "volkswagen", label: "volkswagen" },
      { value: "Aston Martin", label: "Aston Martin" },
      { value: "mitsubishi", label: "mitsubishi" },
      { value: "hyundai", label: "hyundai" },
      { value: "fiat", label: "fiat" },
    ];
    return (
      <MultiSelect
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        options={options}
        hasSelectAll
        isCreatable
      />
    );
  };
  //Fileuploader
  const [Fileuploader] = useState([]);
  return (
    <Fragment>
      <Pageheader
        titles={"ADVANCED FORMS"}
        active={"Advanced forms"}
        Subtite={"pages"}
      />

      <Row>
        <Col lg={6} md={12}>
          <Card>
            <div className="card-header">
              <h6 className="card-title mb-1">Single Select Style</h6>
            </div>
            <Card.Body>
              <div className="mb-4">
                <p className="mg-b-10">Single Select</p>
                <div className=" SlectBox">
                  <Select
                    defaultValue={Singleselect}
                    onChange={setSingleselect}
                    options={options}
                    placeholder="eg1"
                    classNamePrefix="Select2"
                    className="multi-select"
                  />
                </div>
              </div>
              <div className="mb-4">
                <p className="mg-b-10">Disabled Select</p>
                <div className="SlectBox">
                  <Select
                    defaultValue={Selectdis}
                    onChange={setSelectdis}
                    options={options}
                    placeholder="eg1"
                    classNamePrefix="Select2"
                    className="multi-select"
                    isDisabled
                  />
                </div>
              </div>
              <div>
                <p className="mg-b-10">Inline Search Select</p>
                <div className=" SlectBox">
                  <Select
                    defaultValue={Search}
                    onChange={setSearch}
                    options={options}
                    placeholder="eg1"
                    classNamePrefix="Select2"
                    className="multi-select"
                    isSearchable
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card className="multi-select-styles">
            <Card.Header>
              <h6 className="card-title">Multiple Select Styles</h6>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <p className="mg-b-9">Multiple Select</p>
                <BasicMutipleSelect />
              </div>
              <div className="mb-3">
                <p className="mg-b-9">Disabled Select</p>
                <BasicMutipleSelect2 />
              </div>
              <div>
                <p className="mg-b-9">Creatable Select</p>
                <BasicMutipleSelect3 />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12}>
          <Card>
            <div className="card-header">
              <div className="main-content-label mg-b-5 card-title">
                Multiple Select Styles
              </div>
            </div>
            <Card.Body>
              <div className="mb-4">
                <p className="mg-b-10">Multiple Select-1</p>
                <Creatable
                  classNamePrefix="Select2"
                  options={groupedOptions}
                  value={selected1}
                  onChange={setSelected1}
                />
              </div>
              <div>
                <p className="mg-b-10">Multiple Select-2</p>
                <div>
                  <Creatable
                    classNamePrefix="Select2"
                    options={groupedOptions}
                    value={selected2}
                    onChange={setSelected2}
                    isMulti
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <h6 className="card-title mb-1">Telephone Input</h6>
            </Card.Header>
            <Card.Body>
              <InputGroup>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                />
                <span className="input-group-btn tele-input rounded-0">
                  <Button variant="primary" className="ripple" type="button">
                    Submit
                  </Button>
                </span>
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12}>
          <Card>
            <div className="card-header">
              <h6 className="card-title mb-1">File Upload</h6>
            </div>
            <Card.Body>
              <Row className="mb-4">
                <Col sm={12} md={6}>
                  <FilePond
                    files={files1}
                    onupdatefiles={setFiles1}
                    allowMultiple={true}
                    maxFiles={3}
                    server="/api"
                    name="files"
                    labelIdle="Drag & Drop your file here or click "
                  />

                  <div className="list-unstyled mb-0" id="file-previews">
                    {Fileuploader.map((f: any, i: any) => {
                      return (
                        <Card
                          className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                          key={i + "-file"}
                        >
                          <div className="p-2">
                            <Row className="align-items-center">
                              <Col className="col-auto">
                                <img
                                  data-dz-thumbnail=""
                                  height="80"
                                  className="avatar-sm rounded bg-light"
                                  alt={f.name}
                                  src={f.preview}
                                />
                              </Col>
                              <Col>
                                <Link
                                  to="#"
                                  className="text-muted font-weight-bold"
                                >
                                  {f.name}
                                </Link>
                                <p className="mb-0">
                                  <strong>{f.formattedSize}</strong>
                                </p>
                              </Col>
                            </Row>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </Col>
                <Col sm={12} md={6} className="mg-t-10 mg-md-t-0">
                  <FilePond
                    disabled
                    files={files2}
                    onupdatefiles={setFiles2}
                    allowMultiple={true}
                    maxFiles={3}
                    server="/api"
                    name="files"
                    labelIdle="Drag & Drop your are disabled "
                  />
                  <div className="list-unstyled mb-0" id="file-previews">
                    {selectedFiles.map((f: any, i: any) => {
                      return (
                        <Card
                          className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                          key={i + "-file"}
                        >
                          <div className="p-2">
                            <Row className="align-items-center">
                              <Col className="col-auto">
                                <img
                                  data-dz-thumbnail=""
                                  height="80"
                                  className="avatar-sm rounded bg-light"
                                  alt={f.name}
                                  src={f.preview}
                                />
                              </Col>
                              <Col>
                                <Link
                                  to="#"
                                  className="text-muted font-weight-bold"
                                >
                                  {f.name}
                                </Link>
                                <p className="mb-0">
                                  <strong>{f.formattedSize}</strong>
                                </p>
                              </Col>
                            </Row>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </Col>
              </Row>
              <div className="textnone">
                <div>
                  <FilePond
                    files={files3}
                    onupdatefiles={setFiles3}
                    allowMultiple={true}
                    maxFiles={3}
                    server="/api"
                    name="files"
                    labelIdle="Drag & Drop your file here or click "
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Advacneforms;
