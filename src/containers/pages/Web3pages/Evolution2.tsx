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

function Evolution2() {
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
      <Pageheader titles="" active={"Evolution 2"} Subtite={"Dashboard"} />

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
                  <b>Evolution2</b>
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
              <b>JOIN DISCORD</b>
            </a>
          </div>
        </Col>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
}

export default Evolution2;
