import { Fragment } from "react";
import Allimages from "../../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../../components/common/pageheader/pageheader";
import { Card, Col, Pagination, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <Fragment>
      <Pageheader titles={"BLOG"} active={"Blog"} Subtite={"Ecommerce"} />

      <Row>
        <Col xl={12} xxl={6} lg={6} md={12}>
          <Card className="card overflow-hidden">
            <Link
              to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}
              className="background-image-blog mb-0"
            ></Link>
            <Card.Body>
              <Link
                to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}
                className="mt-4"
              >
                <h4 className="font-weight-semibold">
                  Best Place To visit For a Holiday idea of denouncing pleasure?
                </h4>
              </Link>
              <p className="mb-0 tx-muted">
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure.
              </p>
              <div className="mt-3 flex-between">
                <Link
                  to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}
                  className="btn btn-primary"
                >
                  Read Article
                </Link>
                <span className="tx-11 tx-muted">Read in 3 minutes</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} xxl={3} lg={6} md={12}>
          <Card className="card overflow-hidden">
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}>
              <img
                className="w-100 br-be-0 br-bs-0"
                src={Allimages("Photos11")}
                alt="img"
              />
            </Link>
            <Card.Body>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}>
                <h4 className="font-weight-semibold">
                  10 Ways To Immediately Start Selling Products!
                </h4>
              </Link>
              <p className="mb-0 tx-muted">
                Those who do not know how pursues or desires to occur in which
                toil and pain can procure him some great pleasure. To take a
                trivial example pain was born and I will give you a complete
                account of the system.
              </p>
              <div className="mt-3 flex-between">
                <Link
                  to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}
                  className="btn btn-primary"
                >
                  Read Article
                </Link>
                <span className="tx-11 tx-muted">Read in 10 minutes</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} xxl={3} lg={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Recent Articles</div>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled mb-0">
                <li className="mb-4">
                  <h5 className="font-weight-semibold">
                    10 Ways to Immediately Start Selling Products!
                  </h5>
                  <p className="mb-0 tx-muted">
                    Eos lorem eos erat clita diam sea sed et nonumy, et ut sit
                    vero dolor gubergren ipsum magna at. Amet.
                  </p>
                  <Link
                    to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}
                    className="btn btn-outline-primary btn-sm mt-2"
                  >
                    Read Article
                  </Link>
                </li>
                <li className="mb-4">
                  <h5 className="font-weight-semibold">
                    7 Interesting Facts Everyone Must Know about Healty Diet
                    Plans.
                  </h5>
                  <p className="mb-0 tx-muted">
                    Eos lorem eos erat clita diam sea sed et nonumy, et ut sit
                    vero dolor gubergren ipsum magna at. Amet.
                  </p>
                  <Link
                    to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}
                    className="btn btn-outline-primary btn-sm mt-2"
                  >
                    Read Article
                  </Link>
                </li>
                <li className="mb-0">
                  <h5 className="font-weight-semibold">
                    10 Ways to Immediately Start Selling Products!
                  </h5>
                  <p className="mb-0 tx-muted">
                    Eos lorem eos erat clita diam sea sed et nonumy, et ut sit
                    vero dolor gubergren ipsum magna at. Amet.
                  </p>
                  <Link
                    to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}
                    className="btn btn-outline-primary btn-sm mt-2"
                  >
                    Read Article
                  </Link>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xxl={3} xl={6} lg={6} sm={6}>
          <Card className="card overflow-hidden">
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}>
              <img
                className="br-be-0 br-bs-0 w-100"
                src={Allimages("Photos2")}
                alt="img"
              />
            </Link>
            <Card.Body>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}>
                <h5>How To Become Better With Building In 1 Month !</h5>
              </Link>
              <p className="tx-muted mb-0">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="mt-3 flex-between">
                <Link
                  to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}
                  className="btn btn-primary"
                >
                  Read Article
                </Link>
                <span className="tx-11 tx-muted">Read in 3 minutes</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6} lg={6} sm={6}>
          <Card className="card overflow-hidden">
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}>
              <img
                className="br-be-0 br-bs-0 w-100"
                src={Allimages("Photos1")}
                alt="img"
              />
            </Link>
            <Card.Body>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}>
                <h5>10 Ways To Immediately Start Selling Products !</h5>
              </Link>
              <p className="tx-muted mb-0">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="mt-3 flex-between">
                <Link
                  to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}
                  className="btn btn-primary"
                >
                  Read Article
                </Link>
                <span className="tx-11 tx-muted">Read in 5 minutes</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6} lg={6} sm={6}>
          <Card className="card overflow-hidden">
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}>
              <img
                className="br-be-0 br-bs-0 w-100"
                src={Allimages("Photos9")}
                alt="img"
              />
            </Link>
            <Card.Body>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}>
                <h5>3 Easy Ways To Make Your mobile Faster & Even !</h5>
              </Link>
              <p className="tx-muted mb-0">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="mt-3 flex-between">
                <Link
                  to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}
                  className="btn btn-primary"
                >
                  Read Article
                </Link>
                <span className="tx-11 tx-muted">Read in 10 minutes</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6} lg={6} sm={6}>
          <Card className="card overflow-hidden">
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}>
              <img
                className="br-be-0 br-bs-0 w-100"
                src={Allimages("Photos2")}
                alt="img"
              />
            </Link>
            <Card.Body>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}>
                <h5>How To Become Better With Building In 1 Month !</h5>
              </Link>
              <p className="tx-muted mb-0">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="mt-3 flex-between">
                <Link
                  to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}
                  className="btn btn-primary"
                >
                  Read Article
                </Link>
                <span className="tx-11 tx-muted">Read in 5 minutes</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Pagination className="pagination justify-content-end mb-4">
        <Pagination.Prev />
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item active>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </Fragment>
  );
}

export default Blog;
