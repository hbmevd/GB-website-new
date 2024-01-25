import { Fragment } from "react";
import { Provider } from "react-redux";
// import { Helmet } from "react-helmet";
import { Outlet } from "react-router";
import store from "./redux/store";
import "../src/assets/css/style.css";
import "../src/assets/css/plugins.css";
import "../src/assets/switcher/css/switcher.css";
import "../src/assets/switcher/styles.css";

function Custompages() {
  return (
    <Fragment>
      <Provider store={store}>
        <div className="square-box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Outlet />
      </Provider>
    </Fragment>
  );
}

export default Custompages;
