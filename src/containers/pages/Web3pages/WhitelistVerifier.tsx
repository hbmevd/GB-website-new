import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col } from "react-bootstrap";
import { useAddress, useConnectionStatus } from "@thirdweb-dev/react";
import { useEffect } from "react";

function WhitelistVerifier() {
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
    <Fragment>
      <Pageheader
        titles=""
        active={"Whitelist Verifier"}
        Subtite={"Dashboard"}
      />
      {/* Conditional rendering based on connection status */}
      {isConnected ? (
        <Col xl={12} lg={12}>
          <Card>
            <Card.Body className="p-0">
              <div className="browser-stats">
                <div className="d-flex align-items-center item border-bottom">
                  <div className="d-flex">
                    <div>
                      <h6
                        className="numberfont"
                        style={{
                          fontSize: "23px",
                          margin: "0 20px",
                        }}
                      >
                        <b>STATUS</b>
                      </h6>
                      <h5
                        className="numberfont"
                        style={{ fontSize: "18px", margin: "0 20px" }}
                      >
                        Congratulations <b>Bully</b>
                        <br></br>Welcome to the jungle...
                      </h5>
                      <h5 style={{ fontSize: "25px", margin: "20px 20px" }}>
                        YOU ARE ELIGIBLE TO MINT:
                      </h5>
                    </div>
                  </div>
                  <div className="ms-auto my-auto">
                    <div className="d-flex">
                      {" "}
                      <h4 className="numberfont" style={{ fontSize: "75px" }}>
                        36
                      </h4>
                    </div>
                  </div>
                  <h4
                    className="numberfont"
                    style={{ fontSize: "25px", margin: "0 20px" }}
                  >
                    Evolution 1 <b>NFTs</b>
                  </h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        <div>
          <Card.Header>
            <div className="d-flex justify-content-center mb-3">
              <h3
                className="card-title numberfont"
                style={{ fontSize: "23px" }}
              >
                <b>PLEASE CONNECT YOUR WALLET TO VERIFY</b>
              </h3>
            </div>

            <p
              className="numberfont d-flex justify-content-center"
              style={{ fontSize: "18px" }}
            >
              find out your whitelist status for the&nbsp;{" "}
              <b>Evolution 1 FREEMINT </b>
            </p>
          </Card.Header>
          <div
            className="numberfont justify-content-center card d-flex align-items-center"
            style={{ padding: "20px" }}
          >
            <a href="" style={{ fontSize: "23px" }}>
              <b>JOIN DISCORD TO WHITELIST</b>
            </a>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default WhitelistVerifier;
