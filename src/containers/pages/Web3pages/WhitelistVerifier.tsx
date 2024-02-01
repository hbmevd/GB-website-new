import React, { useState, useEffect, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  useAddress,
  useConnectionStatus,
  lightTheme,
  ConnectWallet,
} from "@thirdweb-dev/react";
import { collection, query, where, getDocs } from "firebase/firestore"; // Adjust the import statements
import { firestore } from "./firebaseConfig"; // Adjust the path accordingly
import buttonStyles from "../../../assets/css/buttonStyles.module.css";

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

  // Function to truncate the address
  function truncateAddress(address?: string | undefined) {
    if (!address) {
      return "No address available";
    }

    const truncatedAddress =
      address.substring(0, 7) + "......" + address.slice(-5);
    return truncatedAddress;
  }

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
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  height: "71.5vh",
                }}
              >
                <Container>
                  <Row className="justify-content-center">
                    <div
                      className="numberfont justify-content-center card d-flex align-items-center"
                      style={{ padding: "20px", marginLeft: "20px" }}
                    >
                      <a
                        href="https://discord.gg/BRfAGDtUmK"
                        target="_blank"
                        style={{ fontSize: "23px" }}
                      >
                        <b>JOIN THE DISCORD</b>
                      </a>
                    </div>
                  </Row>
                </Container>
              </div>
            </div>
            <Card.Body className="p-0">
              <div className="browser-stats row">
                {/* First Column */}
                <div className="col-md-4 item border-bottom d-flex align-items-center">
                  <div className="">
                    <h6
                      className="numberfont mb-3"
                      style={{ fontSize: "23px", margin: "0 20px" }}
                    >
                      <b>STATUS:</b>
                    </h6>
                    <h5
                      className="numberfont"
                      style={{ fontSize: "23px", margin: "0 20px" }}
                    >
                      {whitelistStatus ? (
                        <>
                          Congratulations <b>Bully</b>
                          <br></br> You are whitelisted.
                          <br></br>
                          <br></br>
                          <b>Verified Address: </b>
                          {truncateAddress(address)}
                        </>
                      ) : (
                        "You are not whitelisted."
                      )}
                    </h5>
                  </div>
                </div>

                {/* Third Column */}
                <div className="col-md-4 item border-bottom align-items-center">
                  <div className="text-center">
                    <div className="d-flex justify-content-center">
                      <div className="col-md-8 item border-bottom d-flex align-items-center">
                        <div className="text-center">
                          <h5
                            style={{
                              fontSize: "25px",
                              margin: "0px 0px",
                              fontWeight: "bold",
                            }}
                          >
                            MINT ALLOCATION:
                          </h5>
                        </div>
                      </div>
                      <h4
                        style={{
                          fontSize: "75px",
                          color: "var(--primary-bg-color)",
                          textShadow: "0 0px 10px rgba(77, 238, 234, 0.7)",
                        }}
                      >
                        {whitelistStatus !== null
                          ? eligibleMints
                          : "Loading..."}
                      </h4>
                    </div>
                    <h4
                      className="numberfont"
                      style={{ fontSize: "20px", marginTop: "20px" }}
                    >
                      EVOLUTION PHASE I<br></br> TOTAL SUPPLY: <b>1,000</b>
                    </h4>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        ) : (
          <div>
            <Card>
              <div>
                <div
                  className="hero-section text-center"
                  style={{
                    backgroundImage: 'url("/Images/blueBG2.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                    height: "71.5vh",
                  }}
                >
                  <Container>
                    <Row className="justify-content-center">
                      <div
                        className="numberfont justify-content-center card d-flex align-items-center"
                        style={{ padding: "20px", marginLeft: "20px" }}
                      >
                        <a
                          href="https://discord.gg/BRfAGDtUmK"
                          target="_blank"
                          style={{ fontSize: "23px" }}
                        >
                          <b>JOIN THE DISCORD TO WHITELIST</b>
                        </a>
                      </div>
                    </Row>
                  </Container>
                </div>
              </div>
              <Card.Body className="p-0"></Card.Body>
            </Card>
            <Card.Header>
              <div className="d-flex justify-content-center">
                <ConnectWallet
                  className={buttonStyles.connectButton2}
                  theme={lightTheme({
                    fontFamily: "Rajdhani",
                    colors: {
                      modalBg: "#ededed",
                      accentText: "#fffff",
                      accentButtonBg: "#464444",
                      primaryText: "#464444",
                      secondaryText: "#fffff",
                      primaryButtonText: "#fffff",
                      secondaryButtonBg: "#e3e3e3",
                      secondaryButtonHoverBg: "#ffffff",
                      connectedButtonBg: "#00000036",
                      success: "#e54d2e",
                      primaryButtonBg: "#00000036",
                      connectedButtonBgHover: "#00000",
                      secondaryIconHoverColor: "#706f78",
                      selectedTextBg: "#ffa500",
                      borderColor: "#00000",
                    },
                  })}
                  btnTitle={"Connect Wallet"}
                  modalTitle={"GorillaBully"}
                  modalSize={"wide"}
                  welcomeScreen={{
                    img: {
                      src: "https://raw.githubusercontent.com/hbmevd/GB-website-new/d902d1a1ba9f850e0bd3fde8d44346b519993c32/public/Images/gblogo.png",
                      width: 150,
                      height: 150,
                    },
                    title: "Welcome to the Web3 jungle.",
                    subtitle: "Connect to the Gorilla Universe",
                  }}
                  modalTitleIconUrl={
                    "https://raw.githubusercontent.com/hbmevd/GB-website-new/d902d1a1ba9f850e0bd3fde8d44346b519993c32/public/Images/gblogo.png"
                  }
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h3
                  className="card-title numberfont mt-4 mb-5 text-center"
                  style={{ fontSize: "23px" }}
                >
                  <b>CONNECT WALLET TO VERIFY WHITELIST</b>
                </h3>
              </div>
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
                <b>JOIN THE DISCORD TO WHITELIST</b>
              </a>
            </div>
          </div>
        )}
      </Col>
    </Fragment>
  );
}

export default WhitelistVerifier;
