import React, { useState, useEffect, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useAddress, useConnectionStatus } from "@thirdweb-dev/react";
import { collection, query, where, getDocs } from "firebase/firestore"; // Adjust the import statements
import { firestore } from "./firebaseConfig"; // Adjust the path accordingly

function WhitelistVerifier() {
  const [whitelistStatus, setWhitelistStatus] = useState<boolean | null>(null);
  const [eligibleMints, setEligibleMints] = useState<number>(0);
  const address = useAddress();
  const connectionStatus = useConnectionStatus();
  const isConnected = connectionStatus === "connected";

  const fetchData = async () => {
    try {
      const whitelistCollection = collection(firestore, "whitelist");
      const q = query(whitelistCollection, where("address", "==", address));
      const snapshot = await getDocs(q);

      if (snapshot.size > 0) {
        const foundEntry = snapshot.docs[0].data();
        setWhitelistStatus(true);
        setEligibleMints(foundEntry.mintsEligible);
      } else {
        setWhitelistStatus(false);
        setEligibleMints(0);
      }
    } catch (error) {
      setWhitelistStatus(false);
      setEligibleMints(0);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isConnected, address]);

  return (
    <Fragment>
      {/* Your Pageheader component */}
      <Col xl={12} lg={12}>
        {isConnected ? (
          <Card>
            <div>
              <div
                className="hero-section text-center"
                style={{
                  backgroundImage: 'url("/Images/blueBG2.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "left bottom",
                  backgroundRepeat: "no-repeat",
                  height: "64vh",
                }}
              >
                <Container>
                  <Row className="justify-content-center"></Row>
                </Container>
              </div>
              <div
                className="numberfont justify-content-center card d-flex align-items-center"
                style={{ padding: "20px" }}
              >
                <a
                  href="https://discord.gg/BRfAGDtUmK"
                  target="_blank"
                  style={{ fontSize: "23px" }}
                >
                  <b>JOIN YOUR COMMUNITY</b>
                </a>
              </div>
            </div>
            <Card.Body className="p-0">
              <div className="browser-stats">
                <div className="d-flex align-items-center item border-bottom">
                  <div className="d-flex">
                    <div>
                      <h6
                        className="numberfont"
                        style={{ fontSize: "23px", margin: "0 20px" }}
                      >
                        <b>STATUS</b>
                      </h6>
                      <h5
                        className="numberfont"
                        style={{ fontSize: "18px", margin: "0 20px" }}
                      >
                        {whitelistStatus ? (
                          <>
                            Congratulations <b>Bully</b> Welcome to the
                            jungle...
                          </>
                        ) : (
                          "You are not whitelisted."
                        )}
                      </h5>
                      <h5
                        style={{
                          fontSize: "25px",
                          margin: "20px 20px",
                          fontWeight: "bold",
                        }}
                      >
                        MINT ALLOCATION:
                      </h5>
                    </div>
                  </div>
                  <div className="ms-auto my-auto">
                    <div className="d-flex">
                      {" "}
                      <h4 style={{ fontSize: "75px" }}>
                        {whitelistStatus !== null
                          ? eligibleMints
                          : "Loading..."}
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
        ) : (
          <div>
            <Card.Header>
              <div className="d-flex justify-content-center mb-1">
                <h3
                  className="card-title numberfont mt-5"
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
              <a
                href="https://discord.gg/BRfAGDtUmK"
                target="_blank"
                style={{ fontSize: "23px" }}
              >
                <b>JOIN DISCORD TO WHITELIST</b>
              </a>
            </div>
          </div>
        )}
      </Col>
    </Fragment>
  );
}

export default WhitelistVerifier;
