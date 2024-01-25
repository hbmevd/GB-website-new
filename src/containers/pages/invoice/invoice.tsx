import { Fragment } from "react";
import whiteicon from "../../../assets/img/brand/favicon-white.png";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Button, Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Invoice() {
  return (
    <Fragment>
      <Pageheader titles={"INVOICE"} active={"Invoice"} Subtite={"Pages"} />

      <Row className="row row-sm">
        <Col lg={12} md={12} className="col-lg-12 col-md-12">
          <Card>
            <Card.Body>
              <div className="d-lg-flex">
                <div className="d-flex">
                  <NavLink to={`${import.meta.env.BASE_URL}dashboard/index/`}>
                    <img
                      src={whiteicon}
                      className="sign-favicon ht-40"
                      alt="logo"
                    />
                  </NavLink>
                  <div className="mb-4 ms-2">
                    <h2 className="mb-0">Zem</h2>
                    <span className="tx-muted">zembt5@gmail.com</span>
                  </div>
                </div>
                <div className="ms-auto">
                  <div className="tx-muted text-end my-2">
                    Cecilia Chapman
                    <br />
                    P.O. Box 283 8562 Fusce Rd., 20620
                    <br />
                    ypurdomain@example.com
                  </div>
                </div>
              </div>
              <div className="invoice-highlight">
                <div className="row row-sm p-3">
                  <div className="col-lg-6">
                    <p className="h3 mb-3">Invoice :</p>
                    <p className="mb-2">#INV-0033970</p>
                    <p className="mb-2">
                      Issued Date <span className="op-8">11-03-2022</span>
                    </p>
                    <p className="mb-0">
                      Due Date <span className="op-8">30-04-2022</span>
                    </p>
                  </div>
                  <div className="col-lg-6 text-end">
                    <p className="h3">To :</p>
                    <address className="mb-0">
                      Kyla Olsen
                      <br />
                      Muskegon, KY
                      <br />
                      Chelsea, 12482
                      <br />
                      ypurdomain@example.com
                    </address>
                  </div>
                </div>
              </div>
              <div className="table-responsive border radius-4 mg-t-30">
                <table className="table table-invoice mb-0 border-0">
                  <thead>
                    <tr>
                      <th className="wd-20p">Product</th>
                      <th className="wd-40p">Description</th>
                      <th className="tx-center">Quantity</th>
                      <th className="tx-right">Unit</th>
                      <th className="tx-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Logo Creation</td>
                      <td className="tx-12">Logo and business cards design</td>
                      <td className="tx-center">2</td>
                      <td className="tx-right">$60.00</td>
                      <td className="tx-right">$120.00</td>
                    </tr>
                    <tr>
                      <td>Online Store Design & Development</td>
                      <td className="tx-12">
                        Design/Development for all popular modern browsers
                      </td>
                      <td className="tx-center">3</td>
                      <td className="tx-right">$80.00</td>
                      <td className="tx-right">$240.00</td>
                    </tr>
                    <tr>
                      <td>App Design</td>
                      <td className="tx-12">Promotional mobile application</td>
                      <td className="tx-center">1</td>
                      <td className="tx-right">$40.00</td>
                      <td className="tx-right">$40.00</td>
                    </tr>
                    <tr>
                      <td className="valign-middle" colSpan={2} rowSpan={4}>
                        <div className="invoice-notes">
                          <label className="main-content-label tx-13">
                            Notes
                          </label>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </p>
                        </div>
                      </td>
                      <td className="tx-right" >Sub-Total</td>
                      <td className="tx-right" colSpan={2}>$400.00</td>
                    </tr>
                    <tr>
                      <td className="tx-right">Tax</td>
                      <td className="tx-right" colSpan={2}>3%</td>
                    </tr>
                    <tr>
                      <td className="tx-right">Discount</td>
                      <td className="tx-right" colSpan={2}>10%</td>
                    </tr>
                    <tr>
                      <td className="tx-right tx-uppercase tx-bold tx-inverse">Total Due</td>
                      <td className="tx-right" colSpan={2}>
                        <h4 className="tx-bold mb-0">$450.00</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
            <Card.Footer className="card-footer text-end">
              <div className="btn-list">
                <Button type="button" className="btn btn-primary">
                  <i className="fe fe-credit-card me-1"></i> Pay Invoice
                </Button>
                <Button
                  type="button"
                  className="btn btn-secondary"
                >
                  <i className="fe fe-send me-1"></i> Send Invoice
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Invoice;
