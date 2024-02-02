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
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            height: "75vh",
          }}
        ></div>
      </div>
      <Aboutus />
    </Fragment>
  );
}

export default MainDashboard;
