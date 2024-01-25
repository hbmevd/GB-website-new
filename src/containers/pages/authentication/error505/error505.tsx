import { Fragment, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeChanger } from "../../../../redux/action";
import * as SwitcherData from "../../../../components/common/switcher/switcherdata";
import { Helmet } from "react-helmet";
import store from "../../../../redux/store";
function Error505() {
  const theme = store.getState();
  useEffect(() => {
    SwitcherData.LocalStorageBackup(ThemeChanger);

  }, []);
  return (
    <Fragment>
      <Helmet>
        <body className="ltr error-page1 bg-primary"></body>
        <html
          dir={theme.dir}
          data-theme-color={localStorage.ZemThemestyles}
        ></html>
      </Helmet>
      <div className="bg-svg svg-5">
        <div className="page">
          <div className="z-index-10">
            <Container>
              <div className="main-error-wrapper flex-center flex-column tx-center">
                <h1 className="text-white">
                  505<span className="tx-20">error</span>
                </h1>
                <h2 className="text-white">
                  Oopps! The page you were looking for doesn't exist.
                </h2>
                <h6 className="">
                  You may have mistyped the address or the page may have moved.
                </h6>
                <Link
                  to={`${import.meta.env.BASE_URL}dashboard/index/`}
                  className="btn btn-secondary"
                >
                  Back to Home
                </Link>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Error505;
