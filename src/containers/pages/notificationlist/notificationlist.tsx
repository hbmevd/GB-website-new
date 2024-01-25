import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import { Link } from "react-router-dom";

function Notificationlist() {
  return (
    <Fragment>
      <Pageheader
        titles={"NOTIFICATIONS LIST"}
        active={"Notificationlist"}
        Subtite={"Pages"}
      />

      <div className="container">
        <ul className="notification contents">
          <li>
            <div className="notification-time">
              <span className="date">Friday</span>
              <span className="time">11:11</span>
            </div>
            <div className="notification-icon">
              <a ></a>
            </div>
            <div className="notification-body">
              <div className="d-flex mt-sm-0 mt-4">
                <div className="avatar avatar-status me-3">
                  <Link to={`${import.meta.env.BASE_URL
                              }pages/profilepage/`} >
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={Allimages("User6")}
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="d-flex">
                    <div className="mt-0">
                      <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                        Ray Manta
                      </h5>
                      <p className="mb-0 tx-13 mb-0 tx-muted">
                        Project assigned by the manager all
                        <span className="badge badge-primary-transparent tx-12 font-weight-semibold text-primiary ms-1 me-1 my-1">
                          files
                        </span>
                        and
                        <span className="badge badge-primary-transparent tx-primary tx-12 font-weight-semibold ms-1 me-1">
                          folders
                        </span>
                        were included
                      </p>
                    </div>
                    <div className="ms-auto">
                      <span className="float-end badge notification-badge">
                        <span className="tx-11 font-weight-semibold">
                          11, Mar 2022
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">Saturday</span>
              <span className="time">09:15</span>
            </div>
            <div className="notification-icon">
              <a ></a>
            </div>
            <div className="notification-body">
              <div className="d-flex mt-sm-0 mt-4">
                <div className="avatar avatar-status offline mb-3  me-3 my-auto">
                  <Link to={`${import.meta.env.BASE_URL
                              }pages/profilepage/`} >
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={Allimages("User1")}
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="d-flex">
                    <div className="mt-0">
                      <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                        Joseph Arima
                      </h5>
                      <p className="mb-0 tx-13 mb-0 tx-muted">
                        Admin and other team accepted your work request
                      </p>
                    </div>
                    <div className="ms-auto">
                      <span className="float-end badge notification-badge">
                        <span className="tx-11 font-weight-semibold">
                          16, Apr 2022
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">Yesterday</span>
              <span className="time">11:43</span>
            </div>
            <div className="notification-icon">
              <a ></a>
            </div>
            <div className="notification-body">
              <div className="d-flex mt-sm-0 mt-4">
                <div className="avatar  avatar-status mb-3 me-3 my-auto">
                  <Link to={`${import.meta.env.BASE_URL
                              }pages/profilepage/`} >
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={Allimages("User15")}
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="d-flex">
                    <div className="mt-0">
                      <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                        Simon Cyre
                      </h5>
                      <p className="mb-0 tx-13 mb-0 tx-muted">
                        Temporary data will be
                        <span className="badge badge-danger-transparent tx-12 font-weight-semibold me-1 ms-1">
                          deleted
                        </span>
                        once dedicated time complated
                      </p>
                    </div>
                    <div className="ms-auto">
                      <span className="float-end badge notification-badge">
                        <span className="tx-11 font-weight-semibold">
                          21, Apr 2022
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">Today</span>
              <span className="time">04:18</span>
            </div>
            <div className="notification-icon">
              <a ></a>
            </div>
            <div className="notification-body">
              <div className="d-flex mt-sm-0 mt-4">
                <div className="avatar  avatar-status mb-3  me-3 my-auto shadow">
                  <Link to={`${import.meta.env.BASE_URL
                              }pages/profilepage/`} >
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={Allimages("User2")}
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="d-flex">
                    <div className="mt-0">
                      <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                        Ason Odn
                      </h5>
                      <p className="mb-0 tx-12 mb-0 tx-muted">
                        Approved date for sanction of loan is verified
                        <i className="fe fe-check tx-success"></i>
                      </p>
                    </div>
                    <div className="ms-auto">
                      <span className="float-end badge notification-badge">
                        <span className="tx-11 font-weight-semibold">
                          19, May 2022
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">Today</span>
              <span className="time">13:22</span>
            </div>
            <div className="notification-icon">
              <a ></a>
            </div>
            <div className="notification-body">
              <div className="d-flex mt-sm-0 mt-4">
                <div className="avatar avatar-status offline mb-3  me-3 my-auto">
                  <Link to={`${import.meta.env.BASE_URL
                              }pages/profilepage/`} >
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={Allimages("User11")}
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="d-flex">
                    <div className="mt-0">
                      <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                        Messi Logn
                      </h5>
                      <p className="mb-0 tx-13 mb-0 tx-muted">
                        Social network accounts are at risk check your
                        <span className="badge badge-success-transparent font-weight-semibold tx-12 ms-1 me-1">
                          login
                        </span>
                        details
                      </p>
                    </div>
                    <div className="ms-auto">
                      <span className="float-end badge notification-badge">
                        <span className="tx-11 font-weight-semibold">
                          02, Aug 2022
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">Today</span>
              <span className="time">24:00</span>
            </div>
            <div className="notification-icon">
              <a ></a>
            </div>
            <div className="notification-body">
              <div className="d-flex mt-sm-0 mt-4">
                <div className="avatar  avatar-status mb-3  me-3 my-auto shadow">
                  <Link to={`${import.meta.env.BASE_URL
                              }pages/profilepage/`} >
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={Allimages("User13")}
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="d-flex">
                    <div className="mt-0">
                      <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                        Holly Golightly
                      </h5>
                      <p className="mb-0 tx-13 mb-0 tx-muted">
                        Changed the password of gmail 4 hrs ago.
                        <span className="badge badge-secondary">Update</span>
                      </p>
                    </div>
                    <div className="ms-auto">
                      <span className="float-end badge notification-badge">
                        <span className="tx-11 font-weight-semibold">
                          14, Jun 2022
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">Today</span>
              <span className="time">20:25</span>
            </div>
            <div className="notification-icon">
              <a ></a>
            </div>
            <div className="notification-body">
              <div className="d-flex mt-sm-0 mt-4">
                <div className="avatar  avatar-status mb-3  me-3 my-auto shadow">
                  <Link to={`${import.meta.env.BASE_URL
                              }pages/profilepage/`} >
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={Allimages("User4")}
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="d-flex">
                    <div className="mt-0">
                      <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                        Kissy Suzuki
                      </h5>
                      <p className="mb-0 tx-13 mb-0 tx-muted">
                        Completed target date to change data heirarchy
                      </p>
                    </div>
                    <div className="ms-auto">
                      <span className="float-end badge notification-badge">
                        <span className="tx-11 font-weight-semibold">
                          21, Jul 2022
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">Saturday</span>
              <span className="time">09:15</span>
            </div>
            <div className="notification-icon">
              <a ></a>
            </div>
            <div className="notification-body">
              <div className="d-flex mt-sm-0 mt-4">
                <div className="avatar avatar-status offline mb-3  me-3 my-auto">
                  <Link to={`${import.meta.env.BASE_URL
                              }pages/profilepage/`} >
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={Allimages("User1")}
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="d-flex">
                    <div className="mt-0">
                      <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                        Joseph Arima
                      </h5>
                      <p className="mb-0 tx-13 mb-0 tx-muted">
                        Admin and other team accepted your work request
                      </p>
                    </div>
                    <div className="ms-auto">
                      <span className="float-end badge notification-badge">
                        <span className="tx-11 font-weight-semibold">
                          16, Apr 2022
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">Yesterday</span>
              <span className="time">11:43</span>
            </div>
            <div className="notification-icon">
              <a ></a>
            </div>
            <div className="notification-body">
              <div className="d-flex mt-sm-0 mt-4">
                <div className="avatar  avatar-status mb-3 me-3 my-auto">
                  <Link to={`${import.meta.env.BASE_URL
                              }pages/profilepage/`} >
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={Allimages("User15")}
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="d-flex">
                    <div className="mt-0">
                      <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                        Simon Cyre
                      </h5>
                      <p className="mb-0 tx-13 mb-0 tx-muted">
                        Temporary data will be
                        <span className="badge badge-danger-transparent tx-12 font-weight-semibold me-1 ms-1">
                          deleted
                        </span>
                        once dedicated time complated
                      </p>
                    </div>
                    <div className="ms-auto">
                      <span className="float-end badge notification-badge">
                        <span className="tx-11 font-weight-semibold">
                          21, Apr 2022
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">Today</span>
              <span className="time">04:18</span>
            </div>
            <div className="notification-icon">
              <a ></a>
            </div>
            <div className="notification-body">
              <div className="d-flex mt-sm-0 mt-4">
                <div className="avatar  avatar-status mb-3  me-3 my-auto shadow">
                  <Link to={`${import.meta.env.BASE_URL
                              }pages/profilepage/`} >
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={Allimages("User2")}
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="d-flex">
                    <div className="mt-0">
                      <h5 className="mb-1 tx-15 font-weight-semibold text-dark">
                        Ason Odn
                      </h5>
                      <p className="mb-0 tx-12 mb-0 tx-muted">
                        Approved date for sanction of loan is verified
                        <i className="fe fe-check tx-success"></i>
                      </p>
                    </div>
                    <div className="ms-auto">
                      <span className="float-end badge notification-badge">
                        <span className="tx-11 font-weight-semibold">
                          19, May 2022
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Notificationlist;
