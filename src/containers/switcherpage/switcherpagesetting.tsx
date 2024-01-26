import { Fragment, useEffect } from "react";
import Pageheader from "../../components/common/pageheader/pageheader";
import Themeprimarycolor, * as SwitcherData from "../../components/common/switcher/switcherdata";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Allimages from "../../components/common/imagesdata/imagesdata";
import { ThemeChanger } from "../../redux/action";
function Switcherpagesetting({
  local_varaiable,
  ThemeChanger,
}: {
  local_varaiable: any;
  ThemeChanger: any;
}) {
  useEffect(() => {
    SwitcherData.LocalStorageBackup(ThemeChanger);
  }, []);

  return (
    <Fragment>
      <Helmet>
        <body className={local_varaiable.body.class}></body>
        <html
          dir={local_varaiable.dir}
          data-theme-color={local_varaiable.datathemecolor}
          data-menuimg={local_varaiable.bgImg}
          data-width={local_varaiable.datawidth}
          data-position={local_varaiable.dataposition}
          data-vertical-style={local_varaiable.dataverticalstyle}
          data-layout={local_varaiable.datalayout}
          data-hor-style={local_varaiable.datahorstyle}
        ></html>
      </Helmet>
      <Pageheader
        titles={"SWITCHER PAGE"}
        active={"Switcher Page"}
        Subtite={"Switcher"}
      />
      <div className="container p-sm-5 p-0">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 ">
            <div className="container p-0 ">
              <div className="switcher-wrapper">
                <div className="card">
                  <div className="card-body p-0">
                    <div className="form_holder sidebar-right1">
                      <div className="row">
                        <div className="predefined_styles">
                          <div className="swichermainleft text-start">
                            <h4 className="my-2">LTR AND RTL VERSIONS</h4>
                            <div className="skin-body">
                              <div className="switch_section">
                                <div className="switch-toggle d-flex mt-2">
                                  <span className="me-auto">LTR</span>
                                  <p className="onoffswitch2 my-0">
                                    <input
                                      type="radio"
                                      name="onoffswitch25"
                                      checked={local_varaiable.dir == "ltr"}
                                      onChange={() => {}}
                                      onClick={() => {
                                        SwitcherData.Ltr(ThemeChanger);
                                      }}
                                      id="switchbtn-ltr"
                                      className="onoffswitch2-checkbox"
                                    />
                                    <label
                                      htmlFor="switchbtn-ltr"
                                      className="onoffswitch2-label"
                                    ></label>
                                  </p>
                                </div>
                                <div className="switch-toggle d-flex mt-2">
                                  <span className="me-auto">RTL</span>
                                  <p className="onoffswitch2 my-0">
                                    <input
                                      type="radio"
                                      name="onoffswitch25"
                                      id="switchbtn-rtl"
                                      className="onoffswitch2-checkbox"
                                      checked={local_varaiable.dir == "rtl"}
                                      onChange={() => {}}
                                      onClick={() => {
                                        SwitcherData.Rtl(ThemeChanger);
                                      }}
                                    />
                                    <label
                                      htmlFor="switchbtn-rtl"
                                      className="onoffswitch2-label"
                                    ></label>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swichermainleft switcher-nav text-start">
                            <h4 className="my-2">Navigation Style</h4>
                            <div className="skin-body">
                              <div className="switch_section">
                                <div className="switch-toggle d-flex">
                                  <span className="me-auto">Vertical Menu</span>
                                  <p className="onoffswitch2 my-0">
                                    <input
                                      type="radio"
                                      name="onoffswitch15"
                                      id="switchbtn-vertical"
                                      className="onoffswitch2-checkbox"
                                      checked={
                                        local_varaiable.datalayout == "vertical"
                                      }
                                      onChange={() => {}}
                                      onClick={() => {
                                        SwitcherData.Verticaldirection(
                                          ThemeChanger
                                        );
                                      }}
                                    />
                                    <label
                                      htmlFor="switchbtn-vertical"
                                      className="onoffswitch2-label"
                                    ></label>
                                  </p>
                                </div>
                                <div className="switch-toggle d-flex mt-2">
                                  <span className="me-auto">
                                    Horizontal Click Menu
                                  </span>
                                  <p className="onoffswitch2 my-0">
                                    <input
                                      type="radio"
                                      name="onoffswitch15"
                                      id="switchbtn-horizontal"
                                      className="onoffswitch2-checkbox"
                                      checked={
                                        local_varaiable.datahorstyle ==
                                        "hor-click"
                                      }
                                      onChange={() => {}}
                                      onClick={() => {
                                        SwitcherData.HorizantalClickMenu(
                                          ThemeChanger
                                        );
                                      }}
                                    />
                                    <label
                                      htmlFor="switchbtn-horizontal"
                                      className="onoffswitch2-label"
                                    ></label>
                                  </p>
                                </div>
                                <div className="switch-toggle d-flex mt-2">
                                  <span className="me-auto">
                                    Horizontal Hover Menu
                                  </span>
                                  <p className="onoffswitch2 my-0">
                                    <input
                                      type="radio"
                                      name="onoffswitch15"
                                      id="switchbtn-horizontalHover"
                                      className="onoffswitch2-checkbox"
                                      checked={
                                        local_varaiable.datahorstyle ==
                                        "hor-hover"
                                      }
                                      onChange={() => {}}
                                      onClick={() => {
                                        SwitcherData.HorizantalHoverMenu(
                                          ThemeChanger
                                        );
                                      }}
                                    />
                                    <label
                                      htmlFor="switchbtn-horizontalHover"
                                      className="onoffswitch2-label"
                                    ></label>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swichermainleft text-start">
                            <h4 className="my-2">Theme Style</h4>
                            <div className="skin-body">
                              <div className="switch_section">
                                <div className="switch-toggle d-flex">
                                  <span className="me-auto">Default Theme</span>
                                  <p className="onoffswitch2 my-0">
                                    <input
                                      type="radio"
                                      name="onoffswitch1"
                                      id="switchbtn-default"
                                      className="onoffswitch2-checkbox"
                                      checked={
                                        local_varaiable.datathemecolor ==
                                        "default"
                                      }
                                      onChange={() => {}}
                                      onClick={() => {
                                        SwitcherData.Themedefault(ThemeChanger);
                                      }}
                                    />
                                    <label
                                      htmlFor="switchbtn-default"
                                      className="onoffswitch2-label"
                                    ></label>
                                  </p>
                                </div>
                                <div className="switch-toggle d-flex mt-2">
                                  <span className="me-auto">Light Theme</span>
                                  <p className="onoffswitch2 my-0">
                                    <input
                                      type="radio"
                                      name="onoffswitch1"
                                      id="switchbtn-light-theme"
                                      className="onoffswitch2-checkbox"
                                      checked={
                                        local_varaiable.datathemecolor ==
                                        "light"
                                      }
                                      onChange={() => {}}
                                      onClick={() => {
                                        SwitcherData.Themelight(ThemeChanger);
                                      }}
                                    />
                                    <label
                                      htmlFor="switchbtn-light-theme"
                                      className="onoffswitch2-label"
                                    ></label>
                                  </p>
                                </div>
                                <div className="switch-toggle d-flex mt-2">
                                  <span className="me-auto">Dark Theme</span>
                                  <p className="onoffswitch2 my-0">
                                    <input
                                      type="radio"
                                      name="onoffswitch1"
                                      id="switchbtn-dark"
                                      className="onoffswitch2-checkbox"
                                      checked={
                                        local_varaiable.datathemecolor == "dark"
                                      }
                                      onChange={() => {}}
                                      onClick={() => {
                                        SwitcherData.Themedark(ThemeChanger);
                                      }}
                                    />
                                    <label
                                      htmlFor="switchbtn-dark"
                                      className="onoffswitch2-label"
                                    ></label>
                                  </p>
                                </div>
                                <div className="switch-toggle d-flex mt-2">
                                  <span className="me-auto">Glassy Theme</span>
                                  <p className="onoffswitch2 my-0">
                                    <input
                                      type="radio"
                                      name="onoffswitch1"
                                      id="switchbtn-glassy-theme"
                                      className="onoffswitch2-checkbox"
                                      checked={
                                        local_varaiable.datathemecolor ==
                                        "glassy"
                                      }
                                      onChange={() => {}}
                                      onClick={() => {
                                        SwitcherData.Themeglassy(ThemeChanger);
                                      }}
                                    />
                                    <label
                                      htmlFor="switchbtn-glassy-theme"
                                      className="onoffswitch2-label"
                                    ></label>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swichermainleft text-start">
                            <h4 className="my-2">Theme-colors</h4>
                            <div className="skin-body">
                              <div className="switch_section">
                                <div className="switch-toggle d-flex">
                                  <span className="me-auto">Theme Primary</span>
                                  <div className="">
                                    <Themeprimarycolor />
                                  </div>
                                </div>
                                <div className="switch-toggle d-flex dynamic-bg">
                                  <span className="me-auto">
                                    Theme Background
                                  </span>
                                  <SwitcherData.Themebackgroundcolor />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swichermainleft text-start">
                            <h4 className="my-2">Menu Images</h4>
                            <div className="skin-body">
                              <div className="switch_section d-flex">
                                <div className="switch-toggle d-flex me-2">
                                  <div
                                    className="bg-image"
                                    onClick={() =>
                                      SwitcherData.bgImage1(ThemeChanger)
                                    }
                                  >
                                    <img src={Allimages("Menuimages1")} />
                                  </div>
                                </div>
                                <div className="switch-toggle d-flex me-2">
                                  <div
                                    className="bg-image"
                                    // onClick={() => SwitcherData.Menuimages('bg-img2')}
                                    onClick={() =>
                                      SwitcherData.bgImage2(ThemeChanger)
                                    }
                                  >
                                    <img src={Allimages("Menuimages2")} />
                                  </div>
                                </div>
                                <div className="switch-toggle d-flex me-2">
                                  <div
                                    className="bg-image"
                                    // onClick={() => SwitcherData.Menuimages('bg-img3')}
                                    onClick={() =>
                                      SwitcherData.bgImage3(ThemeChanger)
                                    }
                                  >
                                    <img src={Allimages("Menuimages3")} />
                                  </div>
                                </div>
                                <div className="switch-toggle d-flex me-2">
                                  <div
                                    className="bg-image"
                                    // onClick={() => SwitcherData.Menuimages('bg-img4')}
                                    onClick={() =>
                                      SwitcherData.bgImage4(ThemeChanger)
                                    }
                                  >
                                    <img src={Allimages("Menuimages4")} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swichermainleft text-start">
                            <h4 className="my-2">Layout Width Styles</h4>
                            <div className="skin-body">
                              <div className="switch_section">
                                <div className="switch-toggle d-flex">
                                  <span className="me-auto">Full Width</span>
                                  <p className="onoffswitch2 my-0">
                                    <input
                                      type="radio"
                                      name="onoffswitch4"
                                      id="switchbtn-fullwidth"
                                      className="onoffswitch2-checkbox"
                                      checked={
                                        local_varaiable.datawidth == "fullwidth"
                                      }
                                      onChange={() => {}}
                                      onClick={() => {
                                        SwitcherData.Fullwidth(ThemeChanger);
                                      }}
                                    />
                                    <label
                                      htmlFor="switchbtn-fullwidth"
                                      className="onoffswitch2-label"
                                    ></label>
                                  </p>
                                </div>
                                <div className="switch-toggle d-flex mt-2">
                                  <span className="me-auto">Boxed</span>
                                  <p className="onoffswitch2 my-0">
                                    <input
                                      type="radio"
                                      name="onoffswitch4"
                                      id="switchbtn-boxed"
                                      className="onoffswitch2-checkbox"
                                      checked={
                                        local_varaiable.datawidth == "boxed"
                                      }
                                      onChange={() => {}}
                                      onClick={() => {
                                        if (
                                          localStorage.Zemhorizontal ==
                                          "horizontal"
                                        ) {
                                          document
                                            .querySelector("#slide-right")
                                            ?.classList.remove("d-none");
                                        }
                                        SwitcherData.Boxedwidth(ThemeChanger);
                                      }}
                                    />
                                    <label
                                      htmlFor="switchbtn-boxed"
                                      className="onoffswitch2-label"
                                    ></label>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swichermainleft switcher-layout text-start ">
                            <h4 className="my-2">Layout Positions</h4>
                            <div className="skin-body">
                              <div className="switch_section">
                                <div className="switch-toggle d-flex">
                                  <span className="me-auto">Fixed</span>
                                  <p className="onoffswitch2 my-0">
                                    <input
                                      type="radio"
                                      name="onoffswitch5"
                                      id="switchbtn-fixed"
                                      className="onoffswitch2-checkbox"
                                      checked={
                                        local_varaiable.dataposition == "fixed"
                                      }
                                      onChange={() => {}}
                                      onClick={() => {
                                        SwitcherData.Fixed(ThemeChanger);
                                      }}
                                    />
                                    <label
                                      htmlFor="switchbtn-fixed"
                                      className="onoffswitch2-label"
                                    ></label>
                                  </p>
                                </div>
                                <div className="switch-toggle d-flex mt-2">
                                  <span className="me-auto">Scrollable</span>
                                  <p className="onoffswitch2 my-0">
                                    <input
                                      type="radio"
                                      name="onoffswitch5"
                                      id="switchbtn-scrollable"
                                      className="onoffswitch2-checkbox"
                                      checked={
                                        local_varaiable.dataposition ==
                                        "scrollable"
                                      }
                                      onChange={() => {}}
                                      onClick={() => {
                                        SwitcherData.Scrollable(ThemeChanger);
                                      }}
                                    />
                                    <label
                                      htmlFor="switchbtn-scrollable"
                                      className="onoffswitch2-label"
                                    ></label>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="swichermainleft">
                            <h4 className="my-2">Reset All Styles</h4>
                            <div className="skin-body">
                              <div className="switch_section my-4">
                                <button
                                  id="resetbtn"
                                  className="btn btn-danger btn-block"
                                  onClick={() =>
                                    SwitcherData.ResetButton(ThemeChanger)
                                  }
                                >
                                  Reset All
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
Switcherpagesetting.defaultProps = {};

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps, { ThemeChanger })(Switcherpagesetting);
