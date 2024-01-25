import { Fragment } from "react";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

function Userlist() {
  return (
    <Fragment>
      <Pageheader
        titles={"USERLIST"}
        active={"Userlist"}
        Subtite={"Advanced UI"}
      />
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div className="table-responsive  deleted-table">
                <table
                  id="user-datatable"
                  className="table table-bordered text-nowrap border-bottom Userlist"
                >
                  <thead>
                    <tr>
                      <th className="wd-2">Photo</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Last Active</th>
                      <th>Country</th>
                      <th>Verification</th>
                      <th>Joined Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <div className="avatar rounded-circle">
                          <img
                            alt="avatar"
                            className="rounded-circle"
                            src={Allimages("User9")}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="tx-14 font-weight-semibold text-dark mb-1">
                          Clark
                        </p>
                        <p className="tx-13 tx-muted mb-0">
                          Clark.b773@gmail.com
                        </p>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">User</span>
                      </td>
                      <td>
                        <span className="badge bg-light tx-muted tx-13">
                          2 days ago
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Italy</span>
                      </td>
                      <td>
                        <span className="badge font-weight-semibold bg-success-transparent tx-success tx-11">
                          Verified
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">16-04-2021</span>
                      </td>
                      <td>
                        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                          <span className="btn btn-icon btn-primary-light me-2">
                            <i className="las la-pen"></i>
                          </span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar rounded-circle">
                          <img
                            alt="avatar"
                            className="rounded-circle"
                            src={Allimages("User2")}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="tx-14 font-weight-semibold text-dark mb-1">
                          Sarah
                        </p>
                        <p className="tx-13 tx-muted mb-0">
                          Sarah.B245@gmail.com
                        </p>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Admin</span>
                      </td>
                      <td>
                        <span className="badge bg-light tx-muted tx-13">
                          3 days ago
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Saudi</span>
                      </td>
                      <td>
                        <span className="badge font-weight-semibold bg-secondary-transparent tx-secondary tx-11">
                          Not Verified
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">11-11-2021</span>
                      </td>
                      <td>
                        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                          <span className="btn btn-icon btn-primary-light me-2">
                            <i className="las la-pen"></i>
                          </span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar avatar bg-secondary text-white rounded-circle">
                          CX
                        </div>
                      </td>
                      <td>
                        <p className="tx-14 font-weight-semibold text-dark mb-1">
                          James
                        </p>
                        <p className="tx-13 tx-muted mb-0">james.j@gmail.com</p>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">User</span>
                      </td>
                      <td>
                        <span className="badge bg-light tx-muted tx-13">
                          2 days ago
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Chicago</span>
                      </td>
                      <td>
                        <span className="badge font-weight-semibold bg-success-transparent tx-success tx-11">
                          Verified
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">27-8-2021</span>
                      </td>
                      <td>
                        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                          <span className="btn btn-icon btn-primary-light me-2">
                            <i className="las la-pen"></i>
                          </span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar rounded-circle">
                          <img
                            alt="avatar"
                            className="rounded-circle"
                            src={Allimages("User10")}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="tx-14 font-weight-semibold text-dark mb-1">
                          David
                        </p>
                        <p className="tx-13 tx-muted mb-0">
                          david1558@gmail.in
                        </p>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Agent</span>
                      </td>
                      <td>
                        <span className="badge bg-light tx-muted tx-13">
                          1 day ago
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Austria</span>
                      </td>
                      <td>
                        <span className="badge font-weight-semibold bg-secondary-transparent tx-secondary tx-11">
                          Not Verified
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">31-4-2021</span>
                      </td>
                      <td>
                        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                          <span className="btn btn-icon btn-primary-light me-2">
                            <i className="las la-pen"></i>
                          </span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar rounded-circle">
                          <img
                            alt="avatar"
                            className="rounded-circle"
                            src={Allimages("User3")}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="tx-14 font-weight-semibold text-dark mb-1">
                          Mary
                        </p>
                        <p className="tx-13 tx-muted mb-0">mary009@gmail.com</p>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Admin</span>
                      </td>
                      <td>
                        <span className="badge bg-light tx-muted tx-13">
                          1 hr ago
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Paris</span>
                      </td>
                      <td>
                        <span className="badge font-weight-semibold bg-success-transparent tx-success tx-11">
                          Verified
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">21-4-2021</span>
                      </td>
                      <td>
                        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                          <span className="btn btn-icon btn-primary-light me-2">
                            <i className="las la-pen"></i>
                          </span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar rounded-circle">
                          <img
                            alt="avatar"
                            className="rounded-circle"
                            src={Allimages("User11")}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="tx-14 font-weight-semibold text-dark mb-1">
                          Charles
                        </p>
                        <p className="tx-13 tx-muted mb-0">
                          charles.charlie@gmail.com
                        </p>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">User</span>
                      </td>
                      <td>
                        <span className="badge bg-light tx-muted tx-13">
                          22 hrs ago
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Los Vegas</span>
                      </td>
                      <td>
                        <span className="badge font-weight-semibold bg-success-transparent tx-success tx-11">
                          Verified
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">09-11-2021</span>
                      </td>
                      <td>
                        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                          <span className="btn btn-icon btn-primary-light me-2">
                            <i className="las la-pen"></i>
                          </span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar rounded-circle">
                          <img
                            alt="avatar"
                            className="rounded-circle"
                            src={Allimages("User12")}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="tx-14 font-weight-semibold text-dark mb-1">
                          Richard
                        </p>
                        <p className="tx-13 tx-muted mb-0">
                          richard1885@gmail.com
                        </p>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Manager</span>
                      </td>
                      <td>
                        <span className="badge bg-light tx-muted tx-13">
                          1 hr ago
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Japan</span>
                      </td>
                      <td>
                        <span className="badge font-weight-semibold bg-secondary-transparent tx-secondary tx-11">
                          Not Verified
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">13-04-2021</span>
                      </td>
                      <td>
                        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                          <span className="btn btn-icon btn-primary-light me-2">
                            <i className="las la-pen"></i>
                          </span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar rounded-circle">
                          <img
                            alt="avatar"
                            className="rounded-circle"
                            src={Allimages("User6")}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="tx-14 font-weight-semibold text-dark mb-1">
                          Linda
                        </p>
                        <p className="tx-12 tx-muted mb-0">
                          linda.123@gmail.com
                        </p>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Admin</span>
                      </td>
                      <td>
                        <span className="badge bg-light tx-muted tx-13">
                          10 min ago
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Russia</span>
                      </td>
                      <td>
                        <span className="badge font-weight-semibold bg-success-transparent tx-success tx-11">
                          Verified
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">09-07-2021</span>
                      </td>
                      <td>
                        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                          <span className="btn btn-icon btn-primary-light me-2">
                            <i className="las la-pen"></i>
                          </span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar avatar bg-warning text-white rounded-circle">
                          E
                        </div>
                      </td>
                      <td>
                        <p className="tx-14 font-weight-semibold text-dark mb-1">
                          Emily
                        </p>
                        <p className="tx-13 tx-muted mb-0">
                          emily.j@hotmail.in
                        </p>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">User</span>
                      </td>
                      <td>
                        <span className="badge bg-light tx-muted tx-13">
                          1 day ago
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">France</span>
                      </td>
                      <td>
                        <span className="badge font-weight-semibold bg-success-transparent tx-success tx-11">
                          Verified
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">16-11-2021</span>
                      </td>
                      <td>
                        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                          <span className="btn btn-icon btn-primary-light me-2">
                            <i className="las la-pen"></i>
                          </span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar rounded-circle">
                          <img
                            alt="avatar"
                            className="rounded-circle"
                            src={Allimages("User14")}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="tx-14 font-weight-semibold text-dark mb-1">
                          Tony
                        </p>
                        <p className="tx-13 tx-muted mb-0">
                          tonay568@gmail.org
                        </p>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Agent</span>
                      </td>
                      <td>
                        <span className="badge bg-light tx-muted tx-13">
                          10 min ago
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Canada</span>
                      </td>
                      <td>
                        <span className="badge font-weight-semibold bg-success-transparent tx-success tx-11">
                          Verified
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">13-12-2021</span>
                      </td>
                      <td>
                        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                          <span className="btn btn-icon btn-primary-light me-2">
                            <i className="las la-pen"></i>
                          </span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar rounded-circle">
                          <img
                            alt="avatar"
                            className="rounded-circle"
                            src={Allimages("User13")}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="tx-14 font-weight-semibold text-dark mb-1">
                          Stanley
                        </p>
                        <p className="tx-13 tx-muted mb-0">
                          Stanley.l@hotmail.com
                        </p>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Admin</span>
                      </td>
                      <td>
                        <span className="badge bg-light tx-muted tx-13">
                          5 min ago
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Spain</span>
                      </td>
                      <td>
                        <span className="badge font-weight-semibold bg-secondary-transparent tx-secondary tx-11">
                          Not Verified
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">07-06-2021</span>
                      </td>
                      <td>
                        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                          <span className="btn btn-icon btn-primary-light me-2">
                            <i className="las la-pen"></i>
                          </span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar rounded-circle">
                          <img
                            alt="avatar"
                            className="rounded-circle"
                            src={Allimages("User5")}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="tx-14 font-weight-semibold text-dark mb-1">
                          Sylvia
                        </p>
                        <p className="tx-13 tx-muted mb-0">
                          sylvia.N@gmail.com
                        </p>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">User</span>
                      </td>
                      <td>
                        <span className="badge bg-light tx-muted tx-13">
                          2 days ago
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Italy</span>
                      </td>
                      <td>
                        <span className="badge font-weight-semibold bg-success-transparent tx-success tx-11">
                          Verified
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">31-12-2021</span>
                      </td>
                      <td>
                        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                          <span className="btn btn-icon btn-primary-light me-2">
                            <i className="las la-pen"></i>
                          </span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar rounded-circle">
                          <img
                            alt="avatar"
                            className="rounded-circle"
                            src={Allimages("User15")}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="tx-14 font-weight-semibold text-dark mb-1">
                          Melvin
                        </p>
                        <p className="tx-13 tx-muted mb-0">melvin@gmail.com</p>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Admin</span>
                      </td>
                      <td>
                        <span className="badge bg-light tx-muted tx-13">
                          1 hr ago
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">Mexico</span>
                      </td>
                      <td>
                        <span className="badge font-weight-semibold bg-success-transparent tx-success tx-11">
                          Verified
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">14-09-2021</span>
                      </td>
                      <td>
                        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                          <span className="btn btn-icon btn-primary-light me-2">
                            <i className="las la-pen"></i>
                          </span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar rounded-circle">
                          <img
                            alt="avatar"
                            className="rounded-circle"
                            src={Allimages("User7")}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="tx-14 font-weight-semibold text-dark mb-1">
                          Josephine
                        </p>
                        <p className="tx-13 tx-muted mb-0">
                          josephine@hotmail.in
                        </p>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">User</span>
                      </td>
                      <td>
                        <span className="badge bg-light tx-muted tx-13">
                          1 day ago
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">USA</span>
                      </td>
                      <td>
                        <span className="badge font-weight-semibold bg-success-transparent tx-success tx-11">
                          Verified
                        </span>
                      </td>
                      <td>
                        <span className="tx-muted tx-13">06-08-2021</span>
                      </td>
                      <td>
                        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                          <span className="btn btn-icon btn-primary-light me-2">
                            <i className="las la-pen"></i>
                          </span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Userlist;
