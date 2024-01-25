import { Fragment, useState } from "react";
import Pageheader from "../../../../components/common/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; //suneditor Css
import ReactDatePicker from "react-datepicker";
import { Visibilityselect } from "./data/selectoption1";
import { ProductCategoryselect } from "./data/selectoption2";

function Addproducts() {
  const htmlWithTableImages = "<center>  </center>";
  const [value, setValue] = useState(htmlWithTableImages);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Fragment>
      <Pageheader
        titles={"ADD PRODUCT"}
        active={"Addproducts"}
        Subtite={"Ecommerce"}
      />
      <Row className="row-sm">
        <Col xl={9}>
          <Card>
            <Card.Header>
              <div className="card-title">Add New Product</div>
            </Card.Header>
            <Card.Body>
              <form action="#">
                <Row>
                  <Col xl={6}>
                    <div className="form-group">
                      <label htmlFor="productName" className="form-label">
                        Product Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="productName"
                        placeholder="Enter Product Name"
                      />
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className="form-group">
                      <label className="form-label">Product Category</label>
                      <ProductCategoryselect />
                    </div>
                  </Col>
                  <Col xl={12}>
                    <div className="form-group">
                      <label className="form-label">Product Description</label>
                      <SunEditor
                        setContents={value}
                        onChange={setValue}
                        setOptions={{
                          buttonList: [
                            ["undo", "redo"],
                            ["font", "fontSize"],
                            ["paragraphStyle", "blockquote"],
                            [
                              "bold",
                              "underline",
                              "italic",
                              "strike",
                              "subscript",
                              "superscript",
                            ],
                            ["fontColor", "hiliteColor"],
                            ["align", "list", "lineHeight"],
                            ["outdent", "indent"],
                            [
                              "table",
                              "horizontalRule",
                              "link",
                              "image",
                              "video",
                            ],
                            ["preview", "print"],
                            ["removeFormat"],
                          ],
                          defaultTag: "div",
                          minHeight: "300px",
                          showPathLabel: false,
                          attributesWhitelist: {
                            all: "style",
                            table: "cellpadding|width|cellspacing|height|style",
                            tr: "valign|style",
                            td: "styleinsert|height|style",
                            img: "title|alt|src|style",
                          },
                        }}
                      />
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className="form-group">
                      <label htmlFor="productPrice" className="form-label">
                        Product Price
                      </label>
                      <input
                        type="number"
                        id="productPrice"
                        className="form-control"
                        placeholder="Enter Product Price"
                      />
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className="form-group">
                      <label htmlFor="productDiscount" className="form-label">
                        Product discount(%)
                      </label>
                      <input
                        type="number"
                        id="productDiscount"
                        className="form-control"
                        placeholder="Enter Product Discount in %"
                      />
                    </div>
                  </Col>
                  <Col xl={12}>
                    <div className="form-group">
                      <label className="form-label">Product Images</label>
                      <div>
                        <input 
                          className="form-control"
                          id="productImage"
                          type="file"
                          name="files"
                          accept=" image/jpeg, image/png, text/html, application/zip, text/css, text/js"
                          multiple
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </form>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3}>
          <Card>
            <Card.Header>
              <div className="card-title">Publish</div>
            </Card.Header>
            <Card.Body>
              <form action="#">
                <div className="form-group">
                  <Row className=" align-items-center">
                    <div className="col-10 order-2">
                      <label className="form-label mt-0">
                        schedule Publish
                      </label>
                    </div>
                    <div className="col-xl-auto col-lg-auto col-md-auto col-sm-12 order-1">
                      <label htmlFor="sheduledPost" className="mt-1">
                        <input
                          type="checkbox"
                          className="custom-switch-input"
                          id="sheduledPost"
                        />
                        <span className="custom-switch-indicator"></span>
                      </label>
                    </div>
                  </Row>
                </div>
                <div className="form-group">
                  <label className="form-label mt-0">schedule Date</label>
                  
                  <ReactDatePicker
                    className="form-control"
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Visibility</label>
                 
                  <Visibilityselect />
                </div>
              </form>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <div className="card-title">Company Details</div>
            </Card.Header>
            <Card.Body>
              <form action="#">
                <div className="form-group">
                  <label htmlFor="companyName" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    placeholder="Enter Company Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="operatorName" className="form-label">
                    Operator/Owner Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="operatorName"
                    placeholder="Enter Operator/Owner Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="brandName" className="form-label">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="brandName"
                    placeholder="Enter Brand Name"
                  />
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={12}>
          <div className="form-group">
            <div className="btn-list">
              <input
                type="button"
                className="btn btn-secondary"
                defaultValue="Save As Draft"
              />
              <input
                type="button"
                className="btn btn-primary"
                defaultValue="Publish"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Addproducts;
