// import React from 'react'
import { Fragment, useEffect } from "react";
import { Card, Col, ProgressBar, Row, Tab, Tabs } from "react-bootstrap";
import pageStyles from "../../../assets/css/pageStyles.module.css";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import { useAddress, useConnectionStatus } from "@thirdweb-dev/react";
import RSC from "react-scrollbars-custom";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Accordion, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Landing from "./landing";
import softStyle from "../../../assets/css/softStyle.module.css";
import Aboutus from "../aboutus/aboutus";

function MainDashboard() {
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
      {/* Conditional rendering based on connection status */}
      <div>
        <div
          className="hero-section text-center"
          style={{
            backgroundImage: 'url("/Images/blueBG7.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "85vh",
          }}
        >
          {" "}
          <Container>
            <Row className="justify-content-center"></Row>
          </Container>
          <Container className="text-start" style={{ marginTop: "36rem" }}>
            <Card className="">
              <Card.Header className="text-start">
                <div className="card-title tx-23">Mint Progress</div>
              </Card.Header>
              <Card.Body className="d-grid">
                <div className="mb-2 tx-23">
                  <span>0 / 1,000 MINTED</span>
                </div>
                <div className="mb-2 tx-18 text-start">
                  <span>0% completed</span>
                </div>
                <ProgressBar now={1} />
              </Card.Body>
            </Card>
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
            <b>JOIN DISCORD TO WHITELIST</b>
          </a>
        </div>
      </div>

      <Aboutus />
    </Fragment>
  );
}

export default MainDashboard;
