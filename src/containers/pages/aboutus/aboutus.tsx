import { Fragment } from "react";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../components/common/pageheader/pageheader";
import {
  Card,
  Col,
  Container,
  Dropdown,
  ProgressBar,
  Row,
} from "react-bootstrap";
import pageStyles from "../../../assets/css/pageStyles.module.css";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <Fragment>
      <Row className=" mb-0">
        <Col xl={12} md={12} sm={12}>
          <Card>
            <Card.Body className=" p-5">
              <Col xl={12}>
                <h1 className=" font-weight-semibold tx-46">
                  <span className="tx-primary tx-56">GorillaBully</span>
                </h1>
                <h6 className="mb-3 tx-23 font-weight-bold">
                  Pioneering Digital Culture
                </h6>
                <p className="tx-18 mb-2 tx-inverse">
                  Welcome to an NFT revolution that seamlessly blends
                  technology, community, and street culture in a symphony of
                  modern minimalism. Our project transcends the ordinary,
                  embodying a brand that is clean, futuristic, and pulsating
                  with the vibrant essence of street culture. At the heart of
                  GorillaBully lies a commitment to seamlessly blend
                  cutting-edge technology with a thriving community spirit. We
                  are not just creators; we are curators of a movement that
                  celebrates uniqueness and diversity. Our brand is a testament
                  to the combination of art and technology, where each NFT is
                  more than a digital asset - it's ownership of our brands
                  future.
                  <br></br>
                  <br></br>
                  Embark on this evolutionary journey with a free mint—our gift
                  to early adopters, unlocking access to exclusive future
                  content, lifetime discounted paid minting, physical brand
                  merch and so much more. We're allowing up to 200 members to
                  mint 5 NFT's out of 1,000 that are meticulously crafted in
                  full 3D, 4K resolution.
                  <br></br>
                  <br></br>
                  Each GorillaBully is a masterpiece, a synthesis of over 150
                  custom made 3D assets, composed programmatically from the well
                  known 3D software, Blender. With two dynamic views on OpenSea,
                  users can seamlessly switch between a profile picture style
                  for an intimate close-up and a full-length portrait, offering
                  a comprehensive view of their GorillaBully Evolution I NFT,
                  again, breaking the norm and pushing new boundaries in the NFT
                  arena.
                </p>
              </Col>
            </Card.Body>
            <div
              className="numberfont justify-content-center card3 d-flex align-items-center"
              style={{ padding: "20px" }}
            >
              <a
                href="https://discord.gg/BRfAGDtUmK"
                target="_blank"
                style={{ fontSize: "23px" }}
              >
                <b>JOIN DISCORD TO WHITELIST</b>
              </a>
            </div>

            <section
              className="product-section bg-primary-transparent mt-3"
              id="features"
            >
              <Container className="text-center mt-5">
                <div
                  style={{
                    paddingTop: "5rem",
                    paddingLeft: "5rem",
                    paddingRight: "5rem",
                  }}
                >
                  <h1 className=" font-weight-semibold tx-46">
                    <span className="tx-primary tx-56">
                      <b>Evolution Phase I</b>
                    </span>
                  </h1>
                  <h6 className="mb-3 tx-23 font-weight-bold">
                    THE BIGGEST FREEMINT OF 2024
                  </h6>
                  <div className="p-4">
                    <h4 className="tx-15 text-uppercase font-weight-semibold mb-3">
                      DETAILS
                    </h4>
                    <span className="badge badge-lg tx-18 badge-light rounded-pill mb-3 me-1 mb-sm-0">
                      Full 3D 4K NFT
                    </span>
                    <span className="badge badge-lg tx-18 badge-light rounded-pill mb-3 me-1 mb-sm-0">
                      PFP + Portrait NFT
                    </span>
                    <span className="badge badge-lg tx-18 badge-light rounded-pill mb-3 me-1 mb-sm-0">
                      3D Files (.GLB download){" "}
                    </span>
                    <span className="badge badge-lg tx-18 badge-light rounded-pill mb-3 me-1 mb-sm-0">
                      Total Supply: 1,000{" "}
                    </span>
                    <span className="badge badge-lg tx-18 badge-light rounded-pill mb-3 me-1 mb-sm-0">
                      Price(ETH): FREE
                    </span>
                  </div>
                  <div className="btn-list min-btn-list-lg">
                    <Link
                      to={`${import.meta.env.BASE_URL}dashboard/index/`}
                      className="btn btn-primary"
                    >
                      MINTING SOON
                    </Link>
                  </div>
                </div>
                <div>
                  <img
                    src="/Images/gb5.png"
                    alt="Your Image Description"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <Container>
                  <Row className="justify-content-center"></Row>
                </Container>
                <Container className="text-start">
                  <Card>
                    <Card.Header className="text-center">
                      <div className="card-title tx-23">Mint Progress</div>
                    </Card.Header>
                    <Card.Body className="d-grid">
                      <div className="mb-2 tx-23">
                        <span>0 / 1,000 MINTED</span>
                      </div>
                      <div className="mb-2 tx-18 text-start">
                        <span>0% completed</span>
                      </div>
                      <ProgressBar now={1} />
                    </Card.Body>
                  </Card>
                </Container>
              </Container>
            </section>
          </Card>
        </Col>
      </Row>

      <div className={pageStyles.newContainer2}>
        <div className="container">
          <Row className=" mb-2 p-xl-5 p-0">
            <Col md={12}>
              <Row className="row justify-content-start">
                <Col xl={4} className="col-xl-4 ps-4 justify-self-start">
                  <h1 className="mb-3 font-weight-semibold tx-46">
                    <span className="tx-primary tx-56">Technology</span>
                  </h1>
                  <h6 className="mb-3 tx-23 font-weight-bold">
                    How we are building GorillaBully
                  </h6>
                </Col>
                <Col xl={3}>
                  <Card>
                    <Card.Body className=" tx-center">
                      <span className="avatar avatar-lg rounded-circle mx-auto bg-primary-transparent tx-primary mb-2">
                        <i className="fe fe-layers tx-20"></i>
                      </span>
                      <h5>NFTs</h5>
                      <p className="mb-0 tx-18 tx-muted">
                        The Evolution I NFTs were modelled in Blender from over
                        150 custom assets/traits. You own your entire bully, and
                        the commercial IP rights are yours. Fully textured, 3D
                        .GLB files are available to download upon mint.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3}>
                  <Card>
                    <Card.Body className=" tx-center">
                      <span className="avatar avatar-lg rounded-circle mx-auto bg-warning-transparent tx-warning mb-2">
                        <i className="fe fe-code tx-20"></i>
                      </span>
                      <h5>Marvelous Designer</h5>
                      <p className="mb-0 tx-18 tx-muted">
                        Marvelous Designer a 3D software used to create 3D
                        clothing for digital art projects, video games, 3D
                        animations, CGI in films, and more. Our entire wardrobe
                        for the Evolution I collection was made in Marvelous
                        Designer.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <div className="row flex-1 justify-content-center">
                <Col xl={3}>
                  <Card>
                    <Card.Body className=" tx-center">
                      <span className="avatar avatar-lg rounded-circle mx-auto bg-orange-transparent tx-orange mb-2">
                        <i className="fe fe-globe tx-20"></i>
                      </span>
                      <h5>Adobe Substance Painter</h5>
                      <p className="mb-0 tx-18 tx-muted">
                        Substance Painter is a software by Adobe, built for
                        real-time material and texture creation for 3D meshes.
                        Our entire wardrobe for the Evolution I collection was
                        textured in Substance Painter.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3}>
                  <Card>
                    <Card.Body className=" tx-center">
                      <span className="avatar avatar-lg rounded-circle mx-auto bg-green-transparent tx-green mb-2">
                        <i className="fe fe-shopping-cart tx-20"></i>
                      </span>
                      <h5>Website/WEB3 Platform</h5>
                      <p className="mb-0 tx-18 tx-muted">
                        {" "}
                        This platform is custom built using React, Vite &
                        Typescript. We've integrated with ThirdWeb for
                        blockchain functionality and Firebase/Firestore to read,
                        write and store our community data. There's much more
                        WEB3 features being built, stay tuned!
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
}

export default Aboutus;
