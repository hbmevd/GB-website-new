import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col } from "react-bootstrap";
import buttonStyles from "../../../assets/css/buttonStyles.module.css";
import {
  ConnectWallet,
  useAddress,
  useConnectionStatus,
} from "@thirdweb-dev/react";
import { useEffect } from "react";
import Multislider from "../../advanceui/carousel/carouseldata/multiplecards";

function Evolution1() {
  const address = useAddress();
  const gblogo = "../../../public/images/gblogo.png";
  const connectionStatus = useConnectionStatus();
  const isConnected = connectionStatus === "connected";

  // Log a message when the user is connected
  useEffect(() => {
    if (isConnected) {
      console.log(
        "User is connected to GorillaBully Web3 Auth. You're encrypted using GB+ThirdWeb SDK."
      );
    }
  }, [isConnected]);

  return (
    //page header
    <Fragment>
      <Pageheader titles="" active={"Evolution 1"} Subtite={"Dashboard"} />
      <Col md={12}>
        <Card>
          <div className="card-header">
            <div className="card-title">Multi Slider</div>
          </div>
          <Card.Body>
            <p className="card-subtitle">
              Multislider is a jQuery powered slideshow that specializes in
              showing more than one slide at a time. There's no need to find
              messy CSS and JS work arounds for other single-slide solutions.
              Multislider allows the developer to focus fully on each individual
              slide as it's own component, and then displays as many slides as
              you decide in a manner that is fluid, consistent, and dymanic.
            </p>
            <Multislider />
          </Card.Body>
        </Card>
      </Col>

      {/* Conditional rendering based on connection status */}
      {isConnected ? (
        <Col xl={12} lg={12}>
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-center mb-3">
                <h3
                  className="card-title numberfont"
                  style={{ fontSize: "23px" }}
                >
                  <b>Evolution1</b>
                </h3>
              </div>
              <p
                className="numberfont d-flex justify-content-center"
                style={{ fontSize: "18px" }}
              >
                find out your whitelist status for the&nbsp;{" "}
                <b>Evolution 1 FREEMINT </b>
              </p>
              <div className="d-flex justify-content-center">
                <h3 className=" numberfont" style={{ fontSize: "18px" }}>
                  VERIFYING: <b>{address}</b>
                </h3>
              </div>
            </Card.Header>
          </Card>
          <div
            className="numberfont justify-content-center card d-flex align-items-center"
            style={{ padding: "20px" }}
          >
            <a href="" style={{ fontSize: "23px" }}>
              <b>JOIN DISCORD TO WHITELIST</b>
            </a>
          </div>
          <div></div>
        </Col>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
}

export default Evolution1;
