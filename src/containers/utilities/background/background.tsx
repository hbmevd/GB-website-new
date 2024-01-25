import { Fragment } from "react";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col } from "react-bootstrap";

function Background() {
  return (
    <Fragment>
      <Pageheader
        titles={"Background"}
        active={"Background"}
        Subtite={"Utilities"}
      />

      <Col md={12} xl={12} xs={12} sn={12}>
        <Card>
          <Card.Header>
            <div className="card-title">Gray Set</div>
          </Card.Header>
          <Card.Body>
            <div className="gray-set d-flex flex-wrap">
              <div className="mb-2 bg-gray-100 ht-50 lh-2 text-center me-2 p-3 br-5">
                .bg-gray-100
              </div>
              <div className="mb-2 bg-gray-200 ht-50 lh-2 text-center me-2 p-3 br-5">
                .bg-gray-200
              </div>
              <div className="mb-2 bg-gray-300 ht-50 lh-2 text-center me-2 p-3 br-5">
                .bg-gray-300
              </div>
              <div className="mb-2 bg-gray-400 ht-50 lh-2 text-center me-2 p-3 br-5">
                .bg-gray-400
              </div>
              <div className="mb-2 bg-gray-500 ht-50 lh-2 text-center me-2 p-3 br-5">
                .bg-gray-500
              </div>
              <div className="mb-2 bg-gray-600 ht-50 lh-2 text-center me-2 p-3 br-5">
                .bg-gray-600
              </div>
              <div className="mb-2 bg-gray-700 ht-50 lh-2 text-center me-2 p-3 br-5 tx-white-7">
                .bg-gray-700
              </div>
              <div className="mb-2 bg-gray-800 ht-50 lh-2 text-center me-2 p-3 br-5 tx-white-7">
                .bg-gray-800
              </div>
              <div className="mb-2 bg-gray-900 ht-50 lh-2 text-center me-2 p-3 br-5 tx-white-7">
                .bg-gray-900
              </div>
            </div>
            <div className="table-responsive border radius-4 mg-t-20">
              <table className="table border-0 mb-0">
                <tbody>
                  <tr>
                    <td className="bg-custom wd-20p border-top-0 font-weight-semibold">
                      Classes
                    </td>
                    <td className="border-top-0">
                      <code>className="bg-gray-[value]"</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-custom wd-20p font-weight-semibold">
                      Values
                    </td>
                    <td>900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={12} xl={12} xs={12} sn={12}>
        <Card>
          <Card.Header>
            <div className="card-title">Solid Background Set</div>
          </Card.Header>
          <Card.Body>
            <div className="d-flex flex-wrap">
              <div className="mb-2 bg-primary lh-2 text-center ht-50 me-2 p-3 tx-white  br-5">
                .bg-primary
              </div>
              <div className="mb-2 bg-secondary lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                .bg-secondary
              </div>
              <div className="mb-2 bg-success lh-2 text-center  ht-50 me-2 p-3 tx-white br-5">
                .bg-success
              </div>
              <div className="mb-2 bg-warning lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                .bg-warning
              </div>
              <div className="mb-2 bg-danger lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                .bg-danger
              </div>
              <div className="mb-2 bg-info lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                .bg-info
              </div>
              <div className="mb-2 bg-indigo lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                .bg-indigo
              </div>
              <div className="mb-2 bg-purple lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                .bg-purple
              </div>
              <div className="mb-2 bg-pink lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                .bg-pink
              </div>
              <div className="mb-2 bg-teal lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                .bg-teal
              </div>
              <div className="mb-2 bg-orange lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                .bg-orange
              </div>
            </div>
            <div className="table-responsive border radius-4 mg-t-20">
              <table className="table border-0 mb-0">
                <tbody>
                  <tr>
                    <td className="bg-custom wd-20p border-top-0 font-weight-semibold">
                      Classes
                    </td>
                    <td className="border-top-0">
                      <code>className="bg-[value]"</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-custom wd-20p font-weight-semibold">
                      Values
                    </td>
                    <td>
                      primary | secondary | success | warning | danger | info |
                      indigo | purple | pink | teal | orange
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={12} xl={12} xs={12} sn={12}>
        <Card>
          <Card.Header>
            <div className="card-title">Solid Gradient Background Set</div>
          </Card.Header>
          <Card.Body>
            <div className="d-flex flex-wrap">
              <div className="mb-2 bg-primary-gradient   ht-50 lh-2 p-3 tx-white br-5 me-2">
                .bg-primary-gradient
              </div>
              <div className="mb-2 bg-secondary-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                .bg-secondary-gradient
              </div>
              <div className="mb-2 bg-success-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                .bg-success-gradient
              </div>
              <div className="mb-2 bg-warning-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                .bg-warning-gradient
              </div>
              <div className="mb-2 bg-danger-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                .bg-danger-gradient
              </div>
              <div className="mb-2 bg-info-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                .bg-info-gradient
              </div>
              <div className="mb-2 bg-purple-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                .bg-purple-gradient
              </div>
              <div className="mb-2 bg-teal-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                .bg-teal-gradient
              </div>
            </div>
            <div className="table-responsive border radius-4 mg-t-20">
              <table className="table border-0 mb-0">
                <tbody>
                  <tr>
                    <td className="bg-custom wd-20p border-top-0 font-weight-semibold">
                      Classes
                    </td>
                    <td className="border-top-0">
                      <code>className="bg-[value]"</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-custom wd-20p font-weight-semibold">
                      Values
                    </td>
                    <td>
                      primary-gradient | secondary-gradient | success-gradient |
                      warning-gradient | dange-gradientr | info-gradient |
                      purple-gradient | teal-gradient
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={12} xl={12} xs={12} sn={12}>
        <Card>
          <Card.Header>
            <div className="card-title">Transparent White Set</div>
          </Card.Header>
          <Card.Body>
            <div className="d-flex flex-wrap">
              <div className="flex-1 pos-relative br-ts-5 br-bs-5 overflow-hidden">
                <img
                  alt=""
                  className="wd-100p ht-100p object-fit-cover"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-white-1"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img
                  alt=""
                  className="wd-100p ht-100p object-fit-cover"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-white-2"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img
                  alt=""
                  className="wd-100p ht-100p object-fit-cover"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-white-3"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img
                  alt=""
                  className="wd-100p ht-100p object-fit-cover"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-white-4"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img
                  alt=""
                  className="wd-100p ht-100p object-fit-cover"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-white-5"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img
                  alt=""
                  className="wd-100p ht-100p object-fit-cover"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-white-6"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img
                  alt=""
                  className="wd-100p ht-100p object-fit-cover"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-white-7"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img
                  alt=""
                  className="wd-100p ht-100p object-fit-cover"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-white-8"></div>
              </div>
              <div className="flex-1 pos-relative br-te-5 br-be-5 overflow-hidden">
                <img
                  alt=""
                  className="wd-100p ht-100p object-fit-cover"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-white-9"></div>
              </div>
            </div>
            <div className="table-responsive border radius-4 mg-t-20">
              <table className="table border-0 mb-0">
                <tbody>
                  <tr>
                    <td className="bg-custom wd-20p border-top-0 font-weight-semibold">
                      Classes
                    </td>
                    <td className="border-top-0">
                      <code>className="bg-white-[value]"</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-custom wd-20p font-weight-semibold">
                      Values
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={12} xl={12} xs={12} sn={12}>
        <Card>
          <Card.Header>
            <div className="card-title">Transparent Black Set</div>
          </Card.Header>
          <Card.Body>
            <div className="d-flex flex-wrap">
              <div className="flex-1 pos-relative br-ts-5 br-bs-5 overflow-hidden">
                <img
                  alt="img"
                  className="wd-100p ht-100p"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-black-1"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img
                  alt="img"
                  className="wd-100p ht-100p"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-black-2"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img
                  alt="img"
                  className="wd-100p ht-100p"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-black-3"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img
                  alt="img"
                  className="wd-100p ht-100p"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-black-4"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img
                  alt="img"
                  className="wd-100p ht-100p"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-black-5"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img
                  alt="img"
                  className="wd-100p ht-100p"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-black-6"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img
                  alt="img"
                  className="wd-100p ht-100p"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-black-7"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img
                  alt="img"
                  className="wd-100p ht-100p"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-black-8"></div>
              </div>
              <div className="flex-1 pos-relative br-te-5 br-be-5 overflow-hidden">
                <img
                  alt="img"
                  className="wd-100p ht-100p"
                  src={Allimages("Photos5")}
                />
                <div className="pos-absolute a-0 bg-black-9"></div>
              </div>
            </div>
            <div className="table-responsive border radius-4 mg-t-20">
              <table className="table border-0 mb-0">
                <tbody>
                  <tr>
                    <td className="bg-custom wd-20p border-top-0 font-weight-semibold">
                      Classes
                    </td>
                    <td className="border-top-0">
                      <code>className="bg-black-[value]"</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-custom wd-20p font-weight-semibold">
                      Values
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
}

export default Background;
