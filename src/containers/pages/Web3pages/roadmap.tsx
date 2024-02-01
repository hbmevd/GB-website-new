import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import { Link } from "react-router-dom";
import { Card, Container, Row } from "react-bootstrap";

function Roadmap() {
  return (
    <Fragment>
      <Container>
        <Row className="justify-content-center">
          <div
            className="numberfont justify-content-center card d-flex align-items-center"
            style={{ padding: "20px", marginLeft: "20px" }}
          >
            <a
              href="/dashboard/whitelistVerifier"
              target=""
              style={{ fontSize: "23px" }}
            >
              <b>VERIFY EVOLUTION PHASE I WHITELIST</b>
            </a>
          </div>
        </Row>
      </Container>
      <Pageheader titles={""} active={"Roadmap"} Subtite={"Dashboard"} />

      <div className="container">
        <ul className="notification contents">
          <li>
            <div className="notification-time">
              <span className="time">
                <b>February 26th</b>
              </span>
              <span className="time">2024</span>
            </div>
            <div className="notification-icon">
              <a></a>
            </div>
            <div className="notification-body">
              <div className="">
                <Card>
                  <div>
                    <div
                      className="hero-section text-center"
                      style={{
                        backgroundImage:
                          'url("/Images/BullyBackgroundNoText.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "bottom",
                        backgroundRepeat: "no-repeat",
                        height: "30vh",
                      }}
                    >
                      <Container></Container>
                    </div>
                  </div>
                  <Card.Body className="p-0"></Card.Body>
                </Card>
                <div className="avatar mb-3">
                  <img alt="avatar" src="/Images/gblogo.png" />
                </div>
                <div className="flex-1">
                  <div className="d-flex">
                    <div className="mt-0">
                      <h5 className="mb-1 tx-20 font-weight-semibold text-dark">
                        <b>Evolution Phase I</b>
                      </h5>
                      <p className="mb-0 tx-15 mb-0 tx-muted">
                        Minting for the official GorillaBully Evolution 1 NFT
                        begins
                        <span className="badge badge-primary-transparent tx-15 font-weight-semibold text-primiary ms-1 me-1 my-1">
                          1,000 SUPPLY
                        </span>
                        <span className="badge badge-primary-transparent tx-15 font-weight-semibold text-primiary ms-1 me-1 my-1">
                          FREE
                        </span>
                        <span className="badge badge-primary-transparent tx-15 font-weight-semibold text-primiary ms-1 me-1 my-1">
                          3D NFTs
                        </span>
                        <span className="badge badge-primary-transparent tx-15 font-weight-semibold text-primiary ms-1 me-1 my-1">
                          .GLB DOWNLOAD
                        </span>
                      </p>
                    </div>
                    <div className="ms-auto">
                      <span className="float-end badge notification-badge">
                        <span className="tx-11 font-weight-semibold">
                          UPCOMING
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="time">
                <b>April</b>
              </span>
              <span className="time">2024</span>
            </div>
            <div className="notification-icon">
              <a></a>
            </div>
            <div className="notification-body">
              <div className="">
                <Card>
                  <div>
                    <div
                      className="hero-section text-center"
                      style={{
                        backgroundImage: 'url("/Images/EvolutionPhase2.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "30vh",
                      }}
                    >
                      <Container></Container>
                    </div>
                  </div>
                  <Card.Body className="p-0"></Card.Body>
                </Card>
                <div className="avatar mb-3">
                  <img alt="avatar" src="/Images/gblogo.png" />
                </div>
                <div className="flex-1">
                  <div className="d-flex">
                    <div className="mt-0">
                      <h5 className="mb-1 tx-20 font-weight-semibold text-dark">
                        <b>Evolution Phase II</b>
                      </h5>
                      <p className="mb-0 tx-15 mb-0 tx-muted">
                        Phase 2 GorillaBully Official launch
                        <span className="badge badge-primary-transparent tx-15 font-weight-semibold text-primiary ms-1 me-1 my-1">
                          3,000 SUPPLY
                        </span>
                        <span className="badge badge-primary-transparent tx-15 font-weight-semibold text-primiary ms-1 me-1 my-1">
                          PAID MINT
                        </span>
                        <span className="badge badge-primary-transparent tx-15 font-weight-semibold text-primiary ms-1 me-1 my-1">
                          ANIMATED
                        </span>
                      </p>
                    </div>
                    <div className="ms-auto">
                      <span className="float-end badge notification-badge">
                        <span className="tx-11 font-weight-semibold">
                          Q2 LAUNCH
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="time">
                <b>July</b>
              </span>
              <span className="time">2024</span>
            </div>
            <div className="notification-icon">
              <a></a>
            </div>
            <div className="notification-body">
              <div className="">
                <Card>
                  <div>
                    <div
                      className="hero-section text-center"
                      style={{
                        backgroundImage: 'url("/Images/EvolutionPhase3.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "30vh",
                      }}
                    >
                      <Container></Container>
                    </div>
                  </div>
                  <Card.Body className="p-0"></Card.Body>
                </Card>
                <div className="avatar mb-3">
                  <img alt="avatar" src="/Images/gblogo.png" />
                </div>
                <div className="flex-1">
                  <div className="d-flex">
                    <div className="mt-0">
                      <h5 className="mb-1 tx-20 font-weight-semibold text-dark">
                        <b>Evolution Phase III</b>
                      </h5>
                      <p className="mb-0 tx-15 mb-0 tx-muted">
                        Phase 3 GorillaBully Official launch
                        <span className="badge badge-primary-transparent tx-15 font-weight-semibold text-primiary ms-1 me-1 my-1">
                          3,000 SUPPLY
                        </span>
                        <span className="badge badge-primary-transparent tx-15 font-weight-semibold text-primiary ms-1 me-1 my-1">
                          PAID MINT
                        </span>
                      </p>
                    </div>
                    <div className="ms-auto">
                      <span className="float-end badge notification-badge">
                        <span className="tx-11 font-weight-semibold">
                          Q3 LAUNCH
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Roadmap;
