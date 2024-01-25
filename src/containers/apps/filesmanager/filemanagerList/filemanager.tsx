
import { Fragment, useState } from "react";
import Allimages from "../../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../../components/common/pageheader/pageheader";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Modal,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { FilePond } from "react-filepond";
import BasicTable from "./data/tabledata";
import { Link } from "react-router-dom";


function FilemanagerList() {
  const [show, setShow] = useState<any>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [files1, setFiles1] = useState<any>([]);

  return (
    <Fragment>
      <Pageheader
        titles={"FILE MANAGER"}
        active={"File Manager"}
        Subtite={"Apps"}
      />

      <Row>
        <Col lg={12} xl={3}>
          <Card>
            <Card.Body className="p-0">
              <div className="p-3 border-bottom">
                <Button
                  className="btn btn-secondary btn-block"
                  data-bs-target="#file-upload-modal"
                  data-bs-toggle="modal"
                  onClick={handleShow}
                >
                  <i className="fe fe-upload-cloud me-1 d-inline-block"></i>
                  Upload Files
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add file</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <FilePond
                      files={files1}
                      onupdatefiles={setFiles1}
                      allowMultiple={true}
                      maxFiles={3}
                      server="/api"
                      name="files"
                      /* sets the file input name, it's filepond by default */ labelIdle="Drag & Drop your file here or click "
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                      Add
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="p-3 border-bottom">
                <ul className="nav nav-pills main-nav-column">
                  <li className="nav-item">
                    <a className="nav-link thumb " >
                      <i className="fe fe-home"></i> Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link thumb" >
                      <i className="fe fe-folder"></i> My Files
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link thumb" >
                      <i className="fe fe-star"></i> Favourite Files
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link thumb" >
                      <i className="fe fe-users"></i> Shared Files
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link thumb" >
                      <i className="fe fe-trash-2"></i> Trash Bin
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-3">
                <ul className="nav nav-pills main-nav-column">
                  <li className="nav-item">
                    <a className="nav-link thumb" >
                      <i className="fe fe-help-circle"></i> Help
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link thumb" >
                      <i className="fe fe-settings"></i> Settings
                    </a>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
          <Card className=" mt-3 d-none d-xl-block">
            <Card.Body>
              <p className="tx-16 mb-2">
                <i className="fe fe-cloud me-2 d-inline-flex"></i>Storage
              </p>
              <div className="progress mg-b-10">
                <ProgressBar
                  now={15}
                  className="progress-bar progress-bar-striped progress-bar-animated ht-5 wd-45p"
                />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="tx-muted font-weight-semibold tx-13 mb-1">
                  126.24 Gb / 526 GB
                </span>
                <a  className="tx-primary">
                  Manage Files
                </a>
              </div>
            </Card.Body>
          </Card>
          <Card className=" mt-3 svg-card overflow-visible d-none d-xl-block">
            <Card.Body>
              <div className="tx-center">
                <svg className="svg-upgrade" width="150" height="150">
                  <defs></defs>
                  <g>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 80 80"
                      viewBox="0 0 80 80"
                      width="150"
                      height="150"
                    >
                      <linearGradient
                        id="a"
                        x1="17.146"
                        x2="62.854"
                        y1="38.751"
                        y2="38.751"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#f3f3f3"
                          className="stopColorf1f5fd svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#8ee1fb"
                          className="stopColoraac8f9 svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        d="M59.8,23.9H20.2c-1.7,0-3.1,1.4-3.1,3.1v23.5c0,1.7,1.4,3.1,3.1,3.1h39.6c1.7,0,3.1-1.4,3.1-3.1V27
                    C62.9,25.3,61.5,23.9,59.8,23.9z"
                      ></path>
                      <path
                        fill="#ffffff"
                        d="M20.2,49.7c-1,0-1.8-0.8-1.8-1.8V27c0-1,0.8-1.8,1.8-1.8h39.6c1,0,1.8,0.8,1.8,1.8v21c0,1-0.8,1.8-1.8,1.8
                    H20.2z"
                        className="colorFFF svgShape"
                      ></path>
                      <linearGradient
                        id="b"
                        x1="40"
                        x2="40"
                        y1="35.44"
                        y2="49.29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#78d5ff"
                          className="stopColord9dff6 svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#b8e0f5"
                          className="stopColorb9c4fc svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#b)"
                        d="M43.5,49.7c-2.4-6.3-3-15.6-3-15.6l-0.1,0.1L40,33.9l-0.3,0.4l-0.1-0.1c0,0-0.7,9.2-3,15.6H43.5z"
                      ></path>
                      <linearGradient
                        id="c"
                        x1="44.073"
                        x2="44.073"
                        y1="35.44"
                        y2="49.29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#78d5ff"
                          className="stopColord9dff6 svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#b8e0f5"
                          className="stopColorb9c4fc svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#c)"
                        d="M47,49.7c-2-7.1-2.6-17.9-2.6-17.9l-0.1,0.1l-0.3-0.4l-0.3,0.4l-0.1-0.1c0,0-0.6,10.9-2.6,17.9
                                H47z"
                      ></path>
                      <linearGradient
                        id="d"
                        x1="35.927"
                        x2="35.927"
                        y1="35.44"
                        y2="49.29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#78d5ff"
                          className="stopColord9dff6 svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#b8e0f5"
                          className="stopColorb9c4fc svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#d)"
                        d="M38.9,49.7c-2-7.1-2.6-17.9-2.6-17.9l-0.1,0.1l-0.3-0.4l-0.3,0.4l-0.1-0.1c0,0-0.6,10.9-2.6,17.9
                                H38.9z"
                      ></path>
                      <linearGradient
                        id="e"
                        x1="30.138"
                        x2="30.138"
                        y1="47.132"
                        y2="49.623"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#78d5ff"
                          className="stopColord9dff6 svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#b8e0f5"
                          className="stopColorb9c4fc svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#e)"
                        d="M37.8,49.7H22.4c0.2-1.2,1.3-2.2,2.6-2.2c0.9,0,1.7,0.4,2.1,1.1c0.2-0.1,0.5-0.2,0.8-0.2
                                c0.5,0,1,0.2,1.3,0.6c0.4-0.6,1-0.9,1.7-0.9c0.5,0,0.9,0.2,1.2,0.4c0.6-0.9,1.5-1.5,2.6-1.5C36.3,47.1,37.6,48.2,37.8,49.7z"
                      ></path>
                      <linearGradient
                        id="f"
                        x1="49.863"
                        x2="49.863"
                        y1="47.132"
                        y2="49.623"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#78d5ff"
                          className="stopColord9dff6 svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#b8e0f5"
                          className="stopColorb9c4fc svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#f)"
                        d="M57.6,49.7H42.2c0.3-1.5,1.5-2.6,3.1-2.6c1.1,0,2.1,0.6,2.6,1.4c0.3-0.3,0.8-0.4,1.2-0.4
                                c0.7,0,1.3,0.4,1.7,0.9c0.3-0.4,0.8-0.6,1.3-0.6c0.3,0,0.6,0.1,0.8,0.2c0.5-0.7,1.2-1.1,2.1-1.1C56.3,47.6,57.3,48.5,57.6,49.7z
                                "
                      ></path>
                      <linearGradient
                        id="g"
                        x1="34.91"
                        x2="36.945"
                        y1="32.693"
                        y2="32.693"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#416d99"
                          className="stopColor416d99 svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#244d77"
                          className="stopColor244d77 svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#g)"
                        d="M36.6,33.3h-1.4c-0.2,0-0.3-0.2-0.3-0.4l0.2-0.8h1.7l0.2,0.8C37,33.1,36.8,33.3,36.6,33.3z"
                      ></path>
                      <linearGradient
                        id="h"
                        x1="37.584"
                        x2="42.416"
                        y1="21.998"
                        y2="21.998"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#b8e2fb"
                          className="stopColor99a9fa svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#4deeea"
                          className="stopColor797efc svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#h)"
                        d="M42.4,31.6V18.2c0-1.3-1.1-5.8-2.4-5.8l0,0c-1.3,0-2.4,4.5-2.4,5.8v13.4H42.4z"
                      ></path>
                      <linearGradient
                        x1="43.056"
                        x2="45.091"
                        y1="32.693"
                        y2="32.693"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#416d99"
                          className="stopColor416d99 svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#244d77"
                          className="stopColor244d77 svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#i)"
                        d="M44.8,33.3h-1.4c-0.2,0-0.3-0.2-0.3-0.4l0.2-0.8h1.7l0.2,0.8C45.1,33.1,45,33.3,44.8,33.3z"
                      ></path>
                      <linearGradient
                        id="j"
                        x1="42.416"
                        x2="45.731"
                        y1="26.392"
                        y2="26.392"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#b8e2fb"
                          className="stopColor99a9fa svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#4deeea"
                          className="stopColor797efc svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#j)"
                        d="M45.2,32.6c0.3,0,0.6-0.2,0.6-0.6v-7.9c0-0.9-0.7-4-1.7-4h0c-0.9,0-1.7,3.1-1.7,4V32
                            c0,0.3,0.2,0.6,0.6,0.6H45.2z"
                      ></path>
                      <linearGradient
                        id="k"
                        x1="34.27"
                        x2="37.584"
                        y1="26.392"
                        y2="26.392"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#b8e2fb"
                          className="stopColor99a9fa svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#4deeea"
                          className="stopColor797efc svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#k)"
                        d="M37,32.6c0.3,0,0.6-0.2,0.6-0.6v-7.9c0-0.9-0.7-4-1.7-4l0,0c-0.9,0-1.7,3.1-1.7,4V32
                        c0,0.3,0.2,0.6,0.6,0.6H37z"
                      ></path>
                      <linearGradient
                        id="l"
                        x1="40"
                        x2="40"
                        y1="17.319"
                        y2="31.542"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#f3f3f3"
                          className="stopColorf1f5fd svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#8ee1fb"
                          className="stopColoraac8f9 svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#l)"
                        d="M41.7,31.6h-3.4V20.7c0-0.9,0.8-4.1,1.7-4.1h0c0.9,0,1.7,3.1,1.7,4.1V31.6z"
                      ></path>
                      <linearGradient
                        id="m"
                        x1="44.353"
                        x2="44.353"
                        y1="31.551"
                        y2="22.141"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#f3f3f3"
                          className="stopColorf1f5fd svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#8ee1fb"
                          className="stopColoraac8f9 svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#m)"
                        d="M41.7,22c0,0,0.9,3.2,1.8,4.4c0.9,1.3,3.6,2.4,3.6,5.2h-5.3V22z"
                      ></path>
                      <linearGradient
                        id="n"
                        x1="6525.379"
                        x2="6525.379"
                        y1="31.551"
                        y2="22.141"
                        gradientTransform="matrix(-1 0 0 1 6561.026 0)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#f3f3f3"
                          className="stopColorf1f5fd svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#8ee1fb"
                          className="stopColoraac8f9 svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#n)"
                        d="M38.3,22c0,0-0.9,3.2-1.8,4.4c-0.9,1.3-3.6,2.4-3.6,5.2h5.3V22z"
                      ></path>
                      <path
                        fill="#cfeafb"
                        d="M40.8,19.2c0,0.5-0.4-0.2-0.8-0.2c-0.5,0-0.8,0.7-0.8,0.2s0.4-0.8,0.8-0.8C40.5,18.4,40.8,18.8,40.8,19.2z
                        "
                        className="colorAAC8F9 svgShape"
                      ></path>
                      <linearGradient
                        id="o"
                        x1="38.684"
                        x2="41.316"
                        y1="34.665"
                        y2="34.665"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#416d99"
                          className="stopColor416d99 svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#244d77"
                          className="stopColor244d77 svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#o)"
                        d="M40.9,35.5h-1.8c-0.3,0-0.4-0.2-0.4-0.5l0.2-1.1h2.2l0.2,1.1C41.4,35.2,41.2,35.5,40.9,35.5z"
                      ></path>
                      <linearGradient
                        id="p"
                        x1="37.856"
                        x2="42.144"
                        y1="32.595"
                        y2="32.595"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#f3f3f3"
                          className="stopColorf1f5fd svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#8ee1fb"
                          className="stopColoraac8f9 svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#p)"
                        d="M37.9,32.2v1.6c0,0.4,0.3,0.7,0.7,0.7h2.9c0.4,0,0.7-0.3,0.7-0.7v-1.6c0-0.9-0.7-1.6-1.6-1.6h-1.2
                        C38.6,30.6,37.9,31.3,37.9,32.2z"
                      ></path>
                      <circle
                        cx="39.7"
                        cy="51.7"
                        r=".8"
                        fill="#ffffff"
                        className="colorFFF svgShape"
                      ></circle>
                      <g fill="#000000" className="color000 svgShape">
                        <linearGradient
                          id="q"
                          x1="6376.162"
                          x2="6377.86"
                          y1="-3235.743"
                          y2="-3230.127"
                          gradientTransform="matrix(-.7853 .6196 .62 .7848 7043.439 -1359.675)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#ffb50b"
                            className="stopColorf099dd svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#ffd894"
                            className="stopColord34ac0 svgShape"
                          ></stop>
                        </linearGradient>
                        <path
                          fill="url(#q)"
                          d="M29.9,55.5c1.1,2.4,3.8,6,4.7,5.6c0.9-0.4-0.3-4.8-1.5-7.1c-1.1-2.4-2.3-3-3.2-2.6
                        C29,51.8,28.8,53.2,29.9,55.5z"
                        ></path>
                        <linearGradient
                          id="r"
                          x1="6380.794"
                          x2="6378.767"
                          y1="-3234.556"
                          y2="-3225.488"
                          gradientTransform="matrix(-.7853 .6196 .62 .7848 7043.439 -1359.675)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#ffb50b"
                            className="stopColorf099dd svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#ffd894"
                            className="stopColord34ac0 svgShape"
                          ></stop>
                        </linearGradient>
                        <path
                          fill="url(#r)"
                          d="M30.7,56c1.8,1.5,4.4,4.5,3.9,5.1s-4-1.3-5.8-2.7c-1.8-1.5-2.1-2.6-1.6-3.3
                        C27.7,54.5,28.9,54.5,30.7,56z"
                        ></path>
                      </g>
                      <g fill="#000000" className="color000 svgShape">
                        <linearGradient
                          id="s"
                          x1="1881.734"
                          x2="1882.807"
                          y1="316.355"
                          y2="319.902"
                          gradientTransform="matrix(.7853 .6196 -.62 .7848 -1232.01 -1359.675)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#64c2e1"
                            className="stopColor64c2e1 svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#1897b5"
                            className="stopColor1897b5 svgShape"
                          ></stop>
                        </linearGradient>
                        <path
                          fill="url(#s)"
                          d="M49.7,57.1c-0.7,1.5-2.4,3.8-2.9,3.5c-0.6-0.3,0.2-3,0.9-4.5c0.7-1.5,1.5-1.9,2-1.6
                        C50.3,54.8,50.5,55.6,49.7,57.1z"
                        ></path>
                        <linearGradient
                          id="t"
                          x1="1884.66"
                          x2="1883.38"
                          y1="317.105"
                          y2="322.833"
                          gradientTransform="matrix(.7853 .6196 -.62 .7848 -1232.01 -1359.675)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#64c2e1"
                            className="stopColor64c2e1 svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#1897b5"
                            className="stopColor1897b5 svgShape"
                          ></stop>
                        </linearGradient>
                        <path
                          fill="url(#t)"
                          d="M49.2,57.4c-1.1,0.9-2.8,2.8-2.4,3.3c0.3,0.4,2.5-0.8,3.7-1.7c1.1-0.9,1.3-1.7,1-2.1
                        S50.4,56.5,49.2,57.4z"
                        ></path>
                      </g>
                      <linearGradient
                        id="u"
                        x1="40"
                        x2="40"
                        y1="60.235"
                        y2="53.087"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#f3f3f3"
                          className="stopColorf1f5fd svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#8ee1fb"
                          className="stopColoraac8f9 svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#u)"
                        d="M48.4,59.1c0,0.4-0.3,0.7-0.7,0.7H32.4c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7h0.1
                    c0.9,0,1.6-0.6,1.9-1.4l0.9-3.4h9.4l0.9,3.4c0.2,0.8,1,1.4,1.9,1.4h0.1C48,58.4,48.4,58.7,48.4,59.1z"
                      ></path>
                      <g fill="#000000" className="color000 svgShape">
                        <linearGradient
                          id="v"
                          x1="22.252"
                          x2="26.673"
                          y1="30.856"
                          y2="30.856"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#f3f3f3"
                            className="stopColorf1f5fd svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#8ee1fb"
                            className="stopColoraac8f9 svgShape"
                          ></stop>
                        </linearGradient>
                        <circle
                          cx="24.5"
                          cy="30.9"
                          r="2.2"
                          fill="url(#v)"
                        ></circle>
                        <linearGradient
                          id="w"
                          x1="-609.634"
                          x2="-607.503"
                          y1="37.028"
                          y2="37.028"
                          gradientTransform="translate(626.497)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#f9c7a5"
                            className="stopColorf9c7a5 svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#f9a395"
                            className="stopColorf9a395 svgShape"
                          ></stop>
                        </linearGradient>
                        <path
                          fill="url(#w)"
                          d="M18.3,35.5c0.2,0.1,0.4,0.3,0.5,0.6c0.1,0.2,0.1,0.5,0,0.8c-0.1,0.3-0.3,0.5-0.6,0.5
                            c0,0.4,0.1,0.8,0.1,1.2c-0.4,0-0.9,0-1.3,0c-0.1-0.7-0.1-1.3-0.3-2C17.4,36.2,17.9,35.8,18.3,35.5C18.4,35.5,18.4,35.5,18.3,35.5
                            z"
                        ></path>
                        <path
                          fill="#fdddbe"
                          d="M13.8,44.2c0,0,0,0.3-0.1,0.7c-0.1,0.4-0.1,0.9-0.2,1.5c-0.1,0.5-0.2,1-0.4,1.4
                                    c-0.1,0.4-0.2,0.6-0.2,0.6c-0.6,0.1-0.5,0.4-0.2,0.5c0.3,0.2,0.8,0.2,0.9-0.1c0,0,0.2-0.2,0.4-0.6c0.2-0.4,0.5-0.9,0.7-1.5
                                    c0.2-0.5,0.4-1.1,0.5-1.5c0.1-0.4,0.2-0.7,0.2-0.7L13.8,44.2z"
                          className="colorF9A395 svgShape"
                        ></path>
                        <path
                          fill="#ff9e49"
                          d="M17.4,40.8c0,0-0.2,0.1-0.4,0.4c-0.3,0.3-0.6,0.7-0.8,1.2c-0.3,0.5-0.5,1-0.6,1.5
                                    c-0.1,0.4-0.2,0.7-0.2,0.7l-1.5-0.4c0,0,0-0.3,0.1-0.8c0.1-0.5,0.2-1.1,0.4-1.8c0.2-0.7,0.5-1.3,0.9-1.8
                                    c0.3-0.5,0.6-0.8,0.6-0.8c0.3-0.3,0.7-0.4,1-0.3c0.3,0.1,0.5,0.3,0.7,0.6c0.1,0.3,0.2,0.6,0.2,0.8
                                    C17.7,40.4,17.6,40.6,17.4,40.8z"
                          className="colorEE6B6B svgShape"
                        ></path>
                        <linearGradient
                          id="x"
                          x1="-606.853"
                          x2="-606.853"
                          y1="58.758"
                          y2="46.778"
                          gradientTransform="translate(626.497)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#7ec1f2"
                            className="stopColor7ec1f2 svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#4deeea"
                            className="stopColor009fdd svgShape"
                          ></stop>
                        </linearGradient>
                        <path
                          fill="url(#x)"
                          d="M20,58.9c0,0,0-0.7,0-1.8c0-1.1-0.1-2.5-0.2-3.9c-0.1-0.7-0.2-1.4-0.4-1.9
                                    c-0.2-0.5-0.4-1-0.7-1.5c-0.5-0.8-1-1.4-1.1-1.6c-0.4-0.5-0.3-1.7,0.4-2.2c0.7-0.5,1.9-0.2,2.3,0.5c0.1,0.1,0.5,0.9,1,2.1
                                    c0.2,0.6,0.4,1.4,0.5,2.2c0.1,0.8,0.1,1.6,0,2.4c-0.3,3-1,5.8-1,5.8L20,58.9z"
                        ></path>
                        <linearGradient
                          id="y"
                          x1="-606.694"
                          x2="-604.729"
                          y1="59.316"
                          y2="59.316"
                          gradientTransform="translate(626.497)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#416d99"
                            className="stopColor416d99 svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#244d77"
                            className="stopColor244d77 svgShape"
                          ></stop>
                        </linearGradient>
                        <path
                          fill="url(#y)"
                          d="M20,58.9l-0.2,0.3c-0.1,0.1,0,0.2,0.2,0.2l1.5,0.2c0.2,0,0.3-0.2,0.1-0.3L20.8,59L20,58.9z"
                        ></path>
                        <linearGradient
                          id="z"
                          x1="-609.801"
                          x2="-609.801"
                          y1="58.758"
                          y2="46.778"
                          gradientTransform="translate(626.497)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#7ec1f2"
                            className="stopColor7ec1f2 svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#4deeea"
                            className="stopColor009fdd svgShape"
                          ></stop>
                        </linearGradient>
                        <path
                          fill="url(#z)"
                          d="M14.6,58.8c0,0,0.2-0.7,0.4-1.7c0.2-1,0.5-2.4,0.7-3.7c0.2-1.4,0.2-2.7,0.1-3.8
                                c-0.1-1-0.2-1.8-0.2-1.9c0-0.6,0.6-1.5,1.5-1.6c0.9-0.1,1.7,0.8,1.7,1.5c0,0.2,0,1-0.2,2.2c-0.2,1.2-0.5,2.7-1,4
                                c-0.5,1.4-1.1,2.7-1.5,3.7c-0.5,0.9-0.8,1.6-0.8,1.6L14.6,58.8z"
                        ></path>
                        <linearGradient
                          id="A"
                          x1="-612.181"
                          x2="-610.295"
                          y1="59.335"
                          y2="59.335"
                          gradientTransform="translate(626.497)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#416d99"
                            className="stopColor416d99 svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#244d77"
                            className="stopColor244d77 svgShape"
                          ></stop>
                        </linearGradient>
                        <path
                          fill="url(#A)"
                          d="M14.6,58.8L14.4,59c-0.1,0.1,0,0.2,0.1,0.3l1.5,0.5c0.2,0.1,0.4-0.1,0.2-0.3l-0.8-0.5L14.6,58.8z
                            "
                        ></path>
                        <linearGradient
                          id="B"
                          x1="-608.566"
                          x2="-608.566"
                          y1="41.599"
                          y2="47.148"
                          gradientTransform="translate(626.497)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#ffb075"
                            className="stopColoree6b6b svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#f3811d"
                            className="stopColorc43737 svgShape"
                          ></stop>
                        </linearGradient>
                        <path
                          fill="url(#B)"
                          d="M20.5,46.7c0.1,1.1-4.9,1.5-4.9,0.5c0-1.1-1.2-6.9,0.5-8.5c0.5-0.4,1.7-0.8,2.7-0.4
                                    C22.3,39.6,19.8,42.1,20.5,46.7z"
                        ></path>
                        <g fill="#000000" className="color000 svgShape">
                          <linearGradient
                            id="C"
                            x1="-602.779"
                            x2="-602.848"
                            y1="31.234"
                            y2="35.762"
                            gradientTransform="translate(626.497)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0"
                              stopColor="#f9c7a5"
                              className="stopColorf9c7a5 svgShape"
                            ></stop>
                            <stop
                              offset="1"
                              stopColor="#f9a395"
                              className="stopColorf9a395 svgShape"
                            ></stop>
                          </linearGradient>
                          <path
                            fill="url(#C)"
                            d="M24.3,36.2c0,0,0-0.1,0.1-0.3c0-0.2,0.1-0.4,0-0.7c0-0.5-0.1-1.1-0.2-1.6
                                    c-0.2-1.1-0.4-2.2-0.4-2.2c0.8-1-1-0.6-0.9,0.1c0,0,0,1.1,0,2.3c0,0.6,0,1.2,0,1.5c0,0.3-0.1,0.4-0.1,0.4L24.3,36.2z"
                          ></path>
                          <g fill="#000000" className="color000 svgShape">
                            <path
                              fill="#ff9e49"
                              d="M19.2,38.5c0,0,1-0.8,2.1-1.5c0.3-0.2,0.5-0.4,0.8-0.6c0.2-0.2,0.4-0.3,0.5-0.4
                                        c0.1-0.1,0.2-0.2,0.2-0.3c0-0.1,0.1-0.1,0.1-0.1l1.5,0.5c0,0,0,0.1-0.1,0.3c-0.1,0.2-0.2,0.4-0.4,0.7
                                        c-0.2,0.3-0.4,0.5-0.6,0.7c-0.2,0.2-0.4,0.5-0.7,0.7c-0.9,0.9-1.8,1.9-1.8,1.9C19.7,41.3,18.1,39.4,19.2,38.5z"
                              className="colorEE6B6B svgShape"
                            ></path>
                          </g>
                        </g>
                        <linearGradient
                          id="D"
                          x1="-608.619"
                          x2="-609.752"
                          y1="33.911"
                          y2="37.902"
                          gradientTransform="translate(626.497)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#416d99"
                            className="stopColor416d99 svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#244d77"
                            className="stopColor244d77 svgShape"
                          ></stop>
                        </linearGradient>
                        <path
                          fill="url(#D)"
                          d="M18.3,35.9c0.5,0,0.9-0.5,0.9-0.9c0-0.3-0.1-0.7-0.4-0.9c-0.2-0.2-0.6-0.3-0.9-0.3
                            c-0.3,0-0.6,0.1-0.9,0.2c-0.5,0.2-0.8,0.7-1,1.1c-0.2,0.5-0.2,1-0.1,1.6c0.1,0.4,0.3,0.8,0.5,1.1c0.2,0.2,0.4,0.4,0.7,0.5
                            c0.2,0.1,0.5,0.1,0.7,0c0.2-0.1,0.4-0.2,0.4-0.5c0-0.2-0.1-0.3-0.2-0.5s-0.2-0.3-0.3-0.5c0-0.2,0.1-0.4,0.2-0.4
                            c0.1,0,0.3,0.1,0.4,0.1c0.1,0,0.1-0.2,0.1-0.3C18.4,36,18.3,36,18.3,35.9z"
                        ></path>
                      </g>
                      <path
                        fill="#fdfdfd"
                        d="M5.7,59.9c1,2.9,16,5.2,34.3,5.2s33.3-2.3,34.3-5.2H5.7z"
                        className="colorF1F5FD svgShape"
                      ></path>
                      <g fill="#000000" className="color000 svgShape">
                        <rect
                          width="5.4"
                          height=".3"
                          x="53.1"
                          y="29.7"
                          fill="#f1f1f1"
                          className="colorD2E1F9 svgShape"
                        ></rect>
                        <rect
                          width="3.9"
                          height=".3"
                          x="53.1"
                          y="30.6"
                          fill="#f1f1f1"
                          className="colorD2E1F9 svgShape"
                        ></rect>
                        <linearGradient
                          id="E"
                          x1="50.228"
                          x2="52.077"
                          y1="30.299"
                          y2="30.299"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#64c2e1"
                            className="stopColor64c2e1 svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#1897b5"
                            className="stopColor1897b5 svgShape"
                          ></stop>
                        </linearGradient>
                        <circle
                          cx="51.2"
                          cy="30.3"
                          r=".9"
                          fill="url(#E)"
                        ></circle>
                      </g>
                      <g fill="#000000" className="color000 svgShape">
                        <rect
                          width="5.4"
                          height=".3"
                          x="53.1"
                          y="32.9"
                          fill="#f1f1f1"
                          className="colorD2E1F9 svgShape"
                        ></rect>
                        <rect
                          width="3.9"
                          height=".3"
                          x="53.1"
                          y="33.8"
                          fill="#f1f1f1"
                          className="colorD2E1F9 svgShape"
                        ></rect>
                        <linearGradient
                          id="F"
                          x1="50.228"
                          x2="52.077"
                          y1="33.519"
                          y2="33.519"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#ffb50b"
                            className="stopColorf099dd svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#ffd894"
                            className="stopColord34ac0 svgShape"
                          ></stop>
                        </linearGradient>
                        <circle
                          cx="51.2"
                          cy="33.5"
                          r=".9"
                          fill="url(#F)"
                        ></circle>
                      </g>
                      <g fill="#000000" className="color000 svgShape">
                        <rect
                          width="5.4"
                          height=".3"
                          x="53.1"
                          y="36.2"
                          fill="#f1f1f1"
                          className="colorD2E1F9 svgShape"
                        ></rect>
                        <rect
                          width="3.9"
                          height=".3"
                          x="53.1"
                          y="37"
                          fill="#f1f1f1"
                          className="colorD2E1F9 svgShape"
                        ></rect>
                        <linearGradient
                          id="G"
                          x1="50.228"
                          x2="52.077"
                          y1="36.739"
                          y2="36.739"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#ffb668"
                            className="stopColorfaa34d svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#ff8824"
                            className="stopColoref7b1b svgShape"
                          ></stop>
                        </linearGradient>
                        <circle
                          cx="51.2"
                          cy="36.7"
                          r=".9"
                          fill="url(#G)"
                        ></circle>
                      </g>
                      <g fill="#000000" className="color000 svgShape">
                        <rect
                          width="5.4"
                          height=".3"
                          x="53.1"
                          y="39.4"
                          fill="#f1f1f1"
                          className="colorD2E1F9 svgShape"
                        ></rect>
                        <rect
                          width="3.9"
                          height=".3"
                          x="53.1"
                          y="40.2"
                          fill="#f1f1f1"
                          className="colorD2E1F9 svgShape"
                        ></rect>
                        <linearGradient
                          id="H"
                          x1="50.228"
                          x2="52.077"
                          y1="39.959"
                          y2="39.959"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0"
                            stopColor="#f9c7a5"
                            className="stopColorf9c7a5 svgShape"
                          ></stop>
                          <stop
                            offset="1"
                            stopColor="#f9a395"
                            className="stopColorf9a395 svgShape"
                          ></stop>
                        </linearGradient>
                        <circle
                          cx="51.2"
                          cy="40"
                          r=".9"
                          fill="url(#H)"
                        ></circle>
                      </g>
                      <g fill="#000000" className="color000 svgShape">
                        <rect
                          width="5.4"
                          height=".3"
                          x="53.1"
                          y="42.6"
                          fill="#f1f1f1"
                          className="colorD2E1F9 svgShape"
                        ></rect>
                        <rect
                          width="3.9"
                          height=".3"
                          x="53.1"
                          y="43.4"
                          fill="#f1f1f1"
                          className="colorD2E1F9 svgShape"
                        ></rect>
                        <circle
                          cx="51.2"
                          cy="43.2"
                          r=".9"
                          fill="#f1f1f1"
                          className="colorD2E1F9 svgShape"
                        ></circle>
                      </g>
                      <linearGradient
                        id="I"
                        x1="4675.968"
                        x2="4675.968"
                        y1="18.846"
                        y2="16.204"
                        gradientTransform="matrix(-1 0 0 1 4699.14 0)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#ffffff"
                          className="stopColorfff svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#f3f3f3"
                          className="stopColorf1f5fd svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#I)"
                        d="M18.8,18.9h8.7c0,0,0,0,0,0c0-0.7-0.6-1.3-1.3-1.3c-0.1,0-0.3,0-0.4,0.1c-0.3-0.9-1.2-1.6-2.2-1.6
                    c-1,0-1.8,0.6-2.2,1.4c-0.3-0.1-0.6-0.2-0.9-0.2C19.7,17.2,18.9,17.9,18.8,18.9z"
                      ></path>
                      <linearGradient
                        id="J"
                        x1="4644.911"
                        x2="4644.911"
                        y1="18.411"
                        y2="14.843"
                        gradientTransform="matrix(-1 0 0 1 4699.14 0)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0"
                          stopColor="#ffffff"
                          className="stopColorfff svgShape"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="#f3f3f3"
                          className="stopColorf1f5fd svgShape"
                        ></stop>
                      </linearGradient>
                      <path
                        fill="url(#J)"
                        d="M48.4,18.5h11.8c0,0,0,0,0,0c0-0.9-0.8-1.7-1.7-1.7c-0.2,0-0.4,0-0.5,0.1c-0.4-1.3-1.6-2.2-3-2.2
                    c-1.3,0-2.4,0.8-2.9,1.9c-0.3-0.2-0.8-0.3-1.2-0.3C49.5,16.2,48.4,17.2,48.4,18.5z"
                      ></path>
                    </svg>
                  </g>
                </svg>
                <h5 className="mt-5">Get More Space Now !</h5>
                <a  className="btn btn-block btn-primary mt-2">
                  Upgrade account
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={12} xl={9}>
          <Row className="align-items-center mb-4">
            <Col sm={6} className="col-12 col-sm-6">
              <div className="tx-18">File Manager</div>
            </Col>
            <Col sm={6} className="col-12 col-sm-6">
              <div className="d-flex align-items-center">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search folder....."
                  />
                  <span className="input-group-append">
                    <button className="btn ripple btn-primary" type="button">
                      Search
                    </button>
                  </span>
                </div>
                <a
                  
                  className="btn btn-def tx-muted ms-3"
                  id="fm-sidebar-btn"
                >
                  <i className="fe fe-chevrons-left tx-20"></i>
                </a>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Card>
                <Card.Body className="card-body bg-primary-transparent text-primary radius-4">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="float-end tx-white toggle-before-none p-0 border-0"
                      variant="default"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                      <Dropdown.Item >Action</Dropdown.Item>
                      <Dropdown.Item >Another Action</Dropdown.Item>
                      <Dropdown.Item >
                        Something Else Here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <div className="avatar avatar-lg bg-primary-transparent radius-4 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon wd-35 tx-white"
                      viewBox="0 0 512 512"
                    >
                      <title>Logo Dropbox</title>
                      <path d="M256.32 126.24l-120.16 78.25 120.16 78.24L136.16 361 16 282.08l120.16-78.24L16 126.24 136.16 48zm-120.8 259.52l120.16-78.25 120.16 78.25L255.68 464zm120.8-103.68l120.16-78.24-120.16-77.6L375.84 48 496 126.24l-120.16 78.25L496 282.73 375.84 361z" />
                    </svg>
                  </div>
                  <h5>Dropbox</h5>
                  <p className="mb-0 tx-semibold tx-14">
                    97 Gb Used<span className="float-end">128 Gb</span>
                  </p>
                  <div className="progress mg-t-5">
                    <ProgressBar
                      now={15}
                      className="progress-bar progress-bar-striped progress-bar-animated ht-5 wd-45p"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="float-end tx-white toggle-before-none p-0 border-0"
                      variant="default"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                      <Dropdown.Item >Action</Dropdown.Item>
                      <Dropdown.Item >Another Action</Dropdown.Item>
                      <Dropdown.Item >
                        Something Else Here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="avatar avatar-lg radius-4 bg-custom mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="wd-35"
                      viewBox="0 0 16 16"
                    >
                      <path fill="#FFC107" d="M10.667 11H16L10.667 1H5.333z" />
                      <path fill="#2196F3" d="M4.952 11l-2.285 4H13.5l2.5-4z" />
                      <path
                        fill="#4CAF50"
                        d="M5.333 1L0 10.333 2.667 15l5.241-9.172z"
                      />
                    </svg>
                  </div>
                  <h5>Google Drive</h5>
                  <p className="mb-0 tx-muted tx-semibold tx-14">
                    49 Gb Used<span className="float-end">128 Gb</span>
                  </p>
                  <div className="progress mg-t-5">
                    <ProgressBar
                      now={14}
                      className="progress-bar progress-bar-striped progress-bar-animated ht-5 wd-45p"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="float-end tx-white toggle-before-none p-0 border-0"
                      variant="default"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                      <Dropdown.Item >Action</Dropdown.Item>
                      <Dropdown.Item >Another Action</Dropdown.Item>
                      <Dropdown.Item >
                        Something Else Here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="avatar avatar-lg radius-4 bg-custom mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="wd-35"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#0948AC"
                        d="M16.54,10.649c-1.27-1.605-2.806-2.155-4.612-1.665c-1.804,0.476-2.845,1.724-3.12,3.744c-2.106,0.179-3.176,1.218-3.21,3.105c-0.036,1.88,0.998,2.958,3.102,3.232h12.738c1.612-0.182,2.463-0.999,2.555-2.448c0.093-1.447-0.649-2.368-2.225-2.755l-0.006-0.02c0-0.697-0.166-1.338-0.479-1.901c-0.316-0.566-0.796-1.012-1.396-1.323c-0.463-0.253-1.029-0.387-1.697-0.432C17.526,10.143,16.976,10.293,16.54,10.649z"
                      />
                      <path
                        fill="#0948AC"
                        d="M3.24,18.028c0.621,0,1.181-0.151,1.68-0.453l0.062,0.09c-0.21-0.505-0.301-1.056-0.301-1.65c0-0.534,0.091-1.039,0.256-1.53c0.164-0.489,0.42-0.921,0.75-1.293c0.345-0.432,0.779-0.759,1.289-0.996c0.316-0.134,0.661-0.237,1.021-0.311c0.105-0.52,0.3-1.011,0.585-1.471c0.285-0.459,0.63-0.862,1.05-1.218c0.48-0.416,1.02-0.727,1.62-0.95c0.6-0.224,1.23-0.327,1.89-0.327c0.721,0,1.396,0.118,2.011,0.386c0.629,0.268,1.185,0.653,1.664,1.158c0.361-0.133,0.765-0.192,1.23-0.192h0.285c-0.24-1.233-0.826-2.229-1.756-3.002c-0.929-0.772-2.023-1.174-3.314-1.204c-0.959,0.016-1.83,0.254-2.609,0.714C9.888,6.24,9.272,6.863,8.792,7.622C8.222,7.28,7.577,7.117,6.858,7.117C5.716,7.147,4.77,7.533,4.016,8.261c-0.75,0.728-1.14,1.663-1.17,2.792c0,0.197,0.012,0.384,0.042,0.561c-0.833,0.101-1.518,0.445-2.058,1.04C0.291,13.247,0.016,13.972,0,14.826c0.031,0.906,0.346,1.665,0.953,2.26C1.56,17.686,2.32,18,3.24,18.028z"
                      />
                    </svg>
                  </div>
                  <h5>One Drive</h5>
                  <p className="mb-0 tx-muted tx-semibold tx-14">
                    114 Gb Used<span className="float-end">128 Gb</span>
                  </p>
                  <div className="progress mg-t-5">
                    <ProgressBar
                      now={12}
                      className="progress-bar progress-bar-striped progress-bar-animated ht-5 wd-45p"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="tx-muted mb-3 tx-18">
                <span className="tx-muted">Storage</span>
              </div>
            </Col>
            <Col md={3} sm={6} className="col-12">
              <Card>
                <Card.Body>
                  <div className="avatar-list-stacked float-end">
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User1")}
                      />
                    </div>
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User2")}
                      />
                    </div>
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User3")}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <svg
                      className="file-manager-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#d7e8c7"
                        d="M13.5,9C12.67157,9,12,8.32843,12,7.5S12.67157,6,13.5,6S15,6.67157,15,7.5C14.9991,8.32805,14.32805,8.9991,13.5,9z"
                      />
                      <path
                        fill="#c4ddac"
                        d="M19,2H5C3.34515,2.00483,2.00483,3.34515,2,5v8.86l3.88-3.88c1.18747-1.13,3.05253-1.13,4.24,0l2.87139,2.887l0.88752-0.88751c1.17344-1.16662,3.06874-1.16662,4.24218,0L22,15.8584V5C21.99517,3.34515,20.65485,2.00483,19,2z M13.5,9C12.67157,9,12,8.32843,12,7.5S12.67157,6,13.5,6S15,6.67157,15,7.5C14.9991,8.32805,14.32805,8.9991,13.5,9z"
                      />
                      <path
                        fill="#9dc775"
                        d="M10.12,9.98c-1.18747-1.13-3.05253-1.13-4.24,0L2,13.86V19c0.00484,1.65484,1.34516,2.99516,3,3h14c0.81512-0.00034,1.59497-0.3325,2.16-0.92L10.12,9.98z"
                      />
                      <path
                        fill="#d7e8c7"
                        d="M22,15.8584l-3.87891-3.87891c-1.17345-1.1666-3.06873-1.1666-4.24218,0L12.99139,12.867l8.16425,8.20856C21.69776,20.5208,22.00089,19.77567,22,19V15.8584z"
                      />
                    </svg>
                  </div>
                  <h6>Images</h6>
                  <p className="mb-0 tx-muted tx-12">
                    259 files<span className="float-end">14 mb</span>
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="col-12">
              <Card>
                <Card.Body>
                  <div className="avatar-list-stacked float-end">
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User4")}
                      />
                    </div>
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User5")}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <svg
                      className="file-manager-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fdc3cf"
                        d="M14,18H5c-1.65611-0.00181-2.99819-1.34389-3-3V9c0.00181-1.65611,1.34389-2.99819,3-3h9c1.65611,0.00181,2.99819,1.34389,3,3v6C16.99819,16.65611,15.65611,17.99819,14,18z"
                      />
                      <path
                        fill="#fd9caf"
                        d="M21.89465,7.55359c-0.24683-0.49432-0.8476-0.69495-1.34192-0.44812l-3.56421,1.7821C16.98999,8.92572,16.99994,8.96149,17,9v6c-0.00006,0.03851-0.01001,0.07428-0.01147,0.11243l3.56421,1.7821C20.69165,16.96381,20.84479,16.99994,21,17c0.55212-0.00037,0.99969-0.44788,1-1V8C21.99994,7.84503,21.96387,7.6922,21.89465,7.55359z"
                      />
                    </svg>
                  </div>
                  <h6>Videos</h6>
                  <p className="mb-0 tx-muted tx-12">
                    57 files<span className="float-end">986 mb</span>
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="col-12">
              <Card>
                <Card.Body>
                  <div className="avatar-list-stacked float-end">
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User6")}
                      />
                    </div>
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User7")}
                      />
                    </div>
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User8")}
                      />
                    </div>
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User9")}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <svg
                      className="file-manager-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#f5d382"
                        d="M21.65137,2.24121a1.00561,1.00561,0,0,0-.80323-.22949l-13,2A1.00054,1.00054,0,0,0,7,5V15.35107A3.45946,3.45946,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.85779L20,9.16553v4.18554A3.45946,3.45946,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A.99909.99909,0,0,0,21.65137,2.24121Z"
                      />
                    </svg>
                  </div>
                  <h6>Music</h6>
                  <p className="mb-0 tx-muted tx-12">
                    68 files<span className="float-end">156 mb</span>
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="col-12">
              <Card>
                <Card.Body>
                  <div className="avatar-list-stacked float-end">
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User10")}
                      />
                    </div>
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User11")}
                      />
                    </div>
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User12")}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <svg
                      className="file-manager-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="9"
                        height="9"
                        x="2"
                        y="2"
                        fill="#86c8f5"
                        rx="1"
                      />
                      <rect
                        width="9"
                        height="9"
                        x="2"
                        y="13"
                        fill="#b6def9"
                        rx="1"
                      />
                      <rect
                        width="9"
                        height="9"
                        x="13"
                        y="2"
                        fill="#b6def9"
                        rx="1"
                      />
                      <rect
                        width="9"
                        height="9"
                        x="13"
                        y="13"
                        fill="#b6def9"
                        rx="1"
                      />
                    </svg>
                  </div>
                  <h6>Apps</h6>
                  <p className="mb-0 tx-muted tx-12">
                    259 files<span className="float-end">1 gb</span>
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="col-12">
              <Card>
                <Card.Body>
                  <div className="avatar-list-stacked float-end">
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User13")}
                      />
                    </div>
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User14")}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <svg
                      className="file-manager-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#a8e5e5"
                        d="M17,21H7a3.00328,3.00328,0,0,1-3-3V8A.99943.99943,0,0,1,5,7H19a.99943.99943,0,0,1,1,1V18A3.00328,3.00328,0,0,1,17,21Z"
                      />
                      <path
                        fill="#6fd4d4"
                        d="M19 9H5A3 3 0 0 1 5 3H19a3 3 0 0 1 0 6zM14 13H10a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"
                      />
                    </svg>
                  </div>
                  <h6>Zip Files</h6>
                  <p className="mb-0 tx-muted tx-12">
                    592 files<span className="float-end">1.7 gb</span>
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="col-12">
              <Card>
                <Card.Body>
                  <div className="avatar-list-stacked float-end">
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User15")}
                      />
                    </div>
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User16")}
                      />
                    </div>
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User17")}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <svg
                      className="file-manager-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#ffd5af"
                        d="M20,8.99969l-7-7H7a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z"
                      />
                      <path
                        fill="#ffba7a"
                        d="M20 8.99969H15a2 2 0 0 1-2-2v-5zM15 18H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM15 14H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM10 10H9A1 1 0 0 1 9 8h1a1 1 0 0 1 0 2z"
                      />
                    </svg>
                  </div>
                  <h6>Documents</h6>
                  <p className="mb-0 tx-muted tx-12">
                    2 files<span className="float-end">983 kb</span>
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="col-12">
              <Card>
                <Card.Body>
                  <div className="avatar-list-stacked float-end">
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="ar"
                        className="rounded-circle"
                        src={Allimages("User18")}
                      />
                    </div>
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User19")}
                      />
                    </div>
                    <div className="avatar avatar-xs rounded-circle">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User20")}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <svg
                      className="file-manager-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#8b89d6"
                        d="M19,22H5c-1.65611-0.00181-2.99819-1.34389-3-3v-4c0-0.55229,0.44772-1,1-1s1,0.44771,1,1v4c0.00037,0.55213,0.44787,0.99963,1,1h14c0.55213-0.00037,0.99963-0.44787,1-1v-4c0-0.55229,0.44772-1,1-1s1,0.44771,1,1v4C21.99819,20.65611,20.65611,21.99819,19,22z"
                      />
                      <path
                        fill="#b9b8e6"
                        d="M16.707,10.293c-0.39027-0.39048-1.02319-0.39065-1.41368-0.00038c-0.00013,0.00013-0.00026,0.00026-0.00038,0.00038L13,12.58594V3c0-0.55228-0.44771-1-1-1s-1,0.44772-1,1v9.58594L8.707,10.293c-0.39402-0.38691-1.02709-0.38116-1.414,0.01286c-0.38195,0.38896-0.38195,1.01218,0,1.40114l4,4c0.39028,0.39048,1.02321,0.39065,1.41369,0.00037c0.00012-0.00012,0.00025-0.00025,0.00037-0.00037l4-4c0.39045-0.3903,0.39058-1.02322,0.00028-1.41367C16.70723,10.29322,16.70712,10.29311,16.707,10.293z"
                      />
                    </svg>
                  </div>
                  <h6>Downloads</h6>
                  <p className="mb-0 tx-muted tx-12">
                    1567 files<span className="float-end">2.4 gb</span>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div>
            <div className="col-xl-12">
              <Card>
                <Card.Header className="card-header">
                  <div className="card-title d-flex justify-content-between">
                    Recent Files
                    <div className="ms-auto">
                      <Link
                        to={`${import.meta.env.BASE_URL}app/filemanagers/file/`}
                        className="tx-inverse tx-12"
                      >
                        View all
                      </Link>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="table-responsive">
                    <BasicTable />
                  </div>
                </Card.Body>
              </Card>
              <Card className="card d-block d-xl-none">
                <Card.Body>
                  <p className="tx-16 mb-2">
                    <i className="fe fe-cloud me-2 d-inline-flex"></i>Storage
                  </p>
                  <div className="progress mg-b-10">
                    <ProgressBar
                      now={255}
                      className="progress-bar progress-bar-striped progress-bar-animated ht-5 wd-45p"
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="tx-muted font-weight-semibold tx-13 mb-1">
                      126.24 Gb / 526 GB
                    </span>
                    <a  className="tx-primary">
                      Manage Files
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}

export default FilemanagerList;
