import { Fragment } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Pageheader from "../../../components/common/pageheader/pageheader";
//postions
function Notifications() {
  const ToastTop = () => {
    toast(
      <p className="tx-16 d-flex align-items-center mb-0 ">
        Default Top Notification
      </p>,
      {
        position: toast.POSITION.TOP_LEFT,
        hideProgressBar: true,
        draggable : false,
      }
    );
  };
  const Center = () => {
    toast(
      <p className="tx-16 d-flex align-items-center mb-0 ">
        Default Center Notification
      </p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        draggable : false,

      }
    );
  };

  const Bottom = () => {
    toast(
      <p className="tx-16 d-flex align-items-center mb-0 ">
        Default Bottom Notification
      </p>,
      {
        position: toast.POSITION.BOTTOM_LEFT,
        hideProgressBar: true,
        draggable : false,

      }
    );
  };

  const Left = () => {
    toast(
      <p className="tx-16 d-flex align-items-center mb-0 ">
        Default left Notification
      </p>,
      {
        position: toast.POSITION.TOP_LEFT,
        hideProgressBar: true,
        draggable : false,

      }
    );
  };

  const Right = () => {
    toast(
      <p className="tx-16 d-flex align-items-center mb-0 ">
        Default Right Notification
      </p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        draggable : false,

      }
    );
  };

  // Typescolors
  const defaultcolor = () => {
    toast.success(
      <p className="tx-16 d-flex align-items-center mb-0 ">
        Default Top Notification
      </p>,
      {
        position: toast.POSITION.TOP_LEFT,
        hideProgressBar: true,
        draggable : false,

        theme: "colored",
      }
    );
  };

  const IconsSuccess = () => {
    toast.success(
      <p className="tx-16 d-flex align-items-center mb-0 ">
        Default Right Notification
      </p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        draggable : false,

        theme: "colored",
      }
    );
  };

  const Iconsinfo = () => {
    toast.info(
      <p className="tx-16 d-flex align-items-center mb-0 ">
        Default Center Notification
      </p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        draggable : false,

        theme: "colored",
      }
    );
  };

  const Iconserror = () =>
    toast.error(
      <p className="tx-16 d-flex align-items-center mb-0">
        Default Bottom Notification
      </p>,
      {
        position: toast.POSITION.BOTTOM_LEFT,
        hideProgressBar: true,
        draggable : false,

        theme: "colored",
      }
    );

  const Iconswarn = () =>
    toast.warn(
      <p className="tx-16 d-flex align-items-center mb-0 ">
        Default left Notification
      </p>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true,
        draggable : false,

        theme: "colored",
      }
    );
  const Iconsdark = () =>
    toast.warn(
      <p className="tx-16 d-flex align-items-center mb-0 ">
        Default left Notification
      </p>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true,
        draggable : false,

        theme: "dark",
      }
    );
  //Toast notifiaction styles
  const Toastslide = () => {
    toast(
      <p className="tx-16 d-flex align-items-center mb-0 ">
        Slide Notification
      </p>,

      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        draggable : false,

        transition: Slide,
        autoClose: 1000,
      }
    );
  };
  const Toastszoom = () => {
    toast(
      <p className="tx-16 d-flex align-items-center mb-0 ">
        Zoom Notification
      </p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        draggable : false,

        transition: Zoom,
        autoClose: 1000,
      }
    );
  };
  const Toastsflip = () => {
    toast(
      <p className="tx-16 d-flex align-items-center mb-0 ">
        Flip Notification
      </p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        draggable : false,

        transition: Flip,
        autoClose: 1000,
      }
    );
  };
  const ToastsBounce = () => {
    toast(
      <p className="tx-16 d-flex align-items-center mb-0 ">
        Bounce Notification
      </p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        draggable : false,

        transition: Bounce,
        autoClose: 1000,
      }
    );
  };
  return (
    <Fragment>
      <Pageheader
        titles={"NOTIFICATIONS"}
        active={"Notifications"}
        Subtite={"Apps"}
      />
      <Row>
        <Col md={12}>
          {/* <!-- div --> */}
          <Card>
            <Card.Header>
              <div className="card-title">Position Notification</div>
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                <Button className="btn btn-primary mg-t-5" onClick={ToastTop}>
                  Top
                </Button>
                <Button className="btn btn-primary mg-t-5" onClick={Center}>
                  Center
                </Button>
                <Button className="btn btn-primary mg-t-5" onClick={Left}>
                  Left
                </Button>
                <Button className="btn btn-primary mg-t-5" onClick={Right}>
                  Right
                </Button>
                <Button className="btn btn-primary mg-t-5" onClick={Bottom}>
                  Bottom
                </Button>
                <ToastContainer />
              </div>
            </Card.Body>
          </Card>
          {/* <!-- div --> */}

          {/* <!-- div --> */}
          <Card>
            <Card.Header>
              <div className="card-title">Notification Types</div>
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                <Button className="btn-success mg-t-5" variant="" onClick={IconsSuccess}>
                  Success
                </Button>
                <Button className="btn-danger mg-t-5" variant="" onClick={Iconserror}>
                  Error
                </Button>
                <Button className="btn-warning mg-t-5" variant="" onClick={Iconswarn}>
                  Warning
                </Button>
                <Button className="btn-info mg-t-5" variant="" onClick={Iconsinfo}>
                  Info
                </Button>
                <Button className="btn-dark mg-t-5" variant="" onClick={Iconsdark}>
                  Dark
                </Button>
                <Button className="mg-t-5" variant="" onClick={defaultcolor}>
                  Default
                </Button>
              </div>
            </Card.Body>
          </Card>
          {/* <!-- div --> */}

          {/* <!-- div --> */}
          <Card>
            <Card.Header>
              <div className="card-title">Notification Styles</div>
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                <Button className="btn btn-primary mg-t-5" onClick={Toastslide}>
                  Slide
                </Button>
                <Button className="btn btn-primary mg-t-5" onClick={Toastszoom}>
                  Zoom
                </Button>
                <Button className="btn btn-primary mg-t-5" onClick={Toastsflip}>
                  Flip
                </Button>
                <Button
                  className="btn btn-primary mg-t-5"
                  onClick={ToastsBounce}
                >
                  Bounce
                </Button>
              </div>
            </Card.Body>
          </Card>
       
        </Col>
      </Row>
    </Fragment>
  );
}

export default Notifications;
