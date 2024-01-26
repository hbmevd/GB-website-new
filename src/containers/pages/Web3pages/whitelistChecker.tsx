import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col } from "react-bootstrap";
import buttonStyles from "../../../assets/css/buttonStyles.module.css";
import {
  ConnectWallet,
  useAddress,
  useConnectionStatus,
} from "@thirdweb-dev/react";
import { useEffect } from "react";

function WhitelistChecker() {
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
      <Pageheader
        titles=""
        active={"Whitelist Checker"}
        Subtite={"Dashboard"}
      />

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
                  <b>WHITELIST VERIFIER</b>
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
            <Card.Body className="p-0">
              <div className="browser-stats">
                <div className="d-flex align-items-center item border-bottom">
                  <div className="d-flex">
                    <img src={gblogo} alt="img" className="ht-60 wd-60 me-2" />
                    <div>
                      <h6 className="numberfont" style={{ fontSize: "23px" }}>
                        <b>STATUS</b>
                      </h6>
                      <h5 className="numberfont" style={{ fontSize: "18px" }}>
                        Congratulations <b>Bully</b>, welcome to the jungle.
                      </h5>
                      <h5 className="numberfont" style={{ fontSize: "18px" }}>
                        You are eligible to mint
                      </h5>
                    </div>
                  </div>
                  <div className="ms-auto my-auto">
                    <div className="d-flex">
                      <span className="me-4 my-auto">35,502</span>
                      <span className="tx-success fs-15">
                        <i className="fe fe-arrow-up"></i>12.75%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress progress-style ht-5">
                {" "}
                <div className="progress-bar bg-primary wd-80p"></div>{" "}
              </div>
            </Card.Body>
          </Card>
          <div
            className="numberfont justify-content-center card d-flex align-items-center"
            style={{ padding: "20px" }}
          >
            <a href="" style={{ fontSize: "23px" }}>
              <b>JOIN DISCORD TO WHITELIST</b>
            </a>
          </div>
        </Col>
      ) : (
        <div className="d-flex justify-content-center mb-3">
          <ConnectWallet className={buttonStyles.connectButton} />
        </div>
      )}
    </Fragment>
  );
}

export default WhitelistChecker;
