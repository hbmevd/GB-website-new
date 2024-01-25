import { Fragment, useEffect } from "react"

import faviconwhite from '../../../../assets/img/brand/favicon-white.png';
import faviconwhite1 from '../../../../assets/img/brand/favicon-white-1.png';
import users6 from '../../../../assets/img/users/6.jpg'
import { Link, NavLink } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { ThemeChanger } from "../../../../redux/action";
import * as SwitcherData from "../../../../components/common/switcher/switcherdata";
import { Helmet } from "react-helmet";
import store from "../../../../redux/store";
function Lockscreen() {
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
      <div className="bg-svg svg-3">
        <div className="page" >
          <div className="z-index-10">
            <div className="container">
              <Row>
                <Col xl={5} lg={6} md={8} sm={8} xs={10} className=" py-4 justify-content-center mx-auto">
                  <div className="card-sigin">
                    {/* <!-- Demo content--> */}
                    <div className="main-card-signin d-md-flex">
                      <div className="wd-100p">
                        <div className="d-flex mx-auto">
                          <NavLink to={`${import.meta.env.BASE_URL}dashboard/index/`} className="mx-auto d-flex">
                            <img src={faviconwhite} className="sign-favicon ht-40 mx-auto logo-dark" alt="logo" />
                            <img src={faviconwhite1} className="sign-favicon ht-40 mx-auto logo-light-theme" alt="logo" />
                            <h1 className="main-logo1 ms-1 me-0 my-auto tx-28 text-light ms-2">zem</h1>
                          </NavLink>
                        </div>
                        <div className="mt-3">
                          <div className="avatar avatar-xxl avatar-xxl mx-auto text-center mb-2"><img alt="" className="avatar avatar-xxl rounded-circle  mt-2 mb-2 " src={users6} /></div>
                          <div className="mx-auto text-center mg-b-20">
                            <h5 className="mg-b-15 tx-16 text-dark">Rita Morgan</h5>
                            <h6 className="tx-13 text-muted text-dark">Enter password to unlock screen</h6>
                          </div>
                          <form action="#">
                            <div className="form-group">
                              <input className="form-control" placeholder="Enter your password" type="password" />
                            </div>
                            <Link to={`${import.meta.env.BASE_URL}dashboard/index/`} className="btn btn-primary btn-block">Unlock</Link>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Lockscreen