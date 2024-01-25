import { Fragment, useState } from "react";
import Pageheader from "../../../../components/common/pageheader/pageheader";
import { Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Creatable from "react-select/creatable";

function Mailsetting() {
  const [selected2, setSelected2] = useState<any>([]);
  const groupedOptions2 = [
    { value: "Pacific/Midway", selected: "true", label: "(GMT-11:00) Midway Island, Samoa" },
    { value: "America/Adak", label: "(GMT-10:00) Hawaii-Aleutian" },
    { value: "Etc/GMT+10", label: "(GMT-10:00) Hawaii" },
    { value: "Pacific/Marquesas", label: "(GMT-09:30) Marquesas Islands" },
    { value: "Pacific/Gambier", label: "(GMT-09:00) Gambier Islands" },
    { value: "America/Anchorage", label: "(GMT-09:00) Alaska" },
    { value: "America/Ensenada", label: "(GMT-08:00) Tijuana, Baja California" },
    { value: "Etc/GMT+8", label: "(GMT-08:00) Pitcairn Islands" },
    { value: "America/Los_Angeles", label: "(GMT-08:00) Pacific Time (US & Canada)" },
    { value: "America/Denver", label: "(GMT-07:00) Mountain Time (US & Canada)" },
    { value: "America/Chihuahua", label: "(GMT-07:00) Chihuahua, La Paz, Mazatlan" },
    { value: "America/Dawson_Creek", label: "(GMT-07:00) Arizona" },
    { value: "America/Belize", label: "(GMT-06:00) Saskatchewan, Central America" },
    { value: "America/Cancun", label: "(GMT-06:00) Guadalajara, Mexico City, Monterrey" },
    { value: "Chile/EasterIsland", label: "(GMT-06:00) Easter Island" },
    { value: "America/Chicago", label: "(GMT-06:00) Central Time (US & Canada)" },
    { value: "America/New_York", label: "(GMT-05:00) Eastern Time (US & Canada)" },
    { value: "America/Havana", label: "(GMT-05:00) Cuba" },
    { value: "America/Bogota", label: "(GMT-05:00) Bogota, Lima, Quito, Rio Branco" },
    { value: "America/Caracas", label: "(GMT-04:30) Caracas" },
    { value: "America/Santiago", label: "(GMT-04:00) Santiago" },
    { value: "America/La_Paz", label: "(GMT-04:00) La Paz" },
    { value: "Atlantic/Stanley", label: "(GMT-04:00) Faukland Islands" },
    { value: "America/Campo_Grande", label: "(GMT-04:00) Brazil" },
    { value: "America/Goose_Bay", label: "(GMT-04:00) Atlantic Time (Goose Bay)" },
    { value: "America/Glace_Bay", label: "(GMT-04:00) Atlantic Time (Canada)" },
    { value: "America/St_Johns", label: "(GMT-03:30) Newfoundland" },
    { value: "America/Araguaina", label: "(GMT-03:00) UTC-3" },
    { value: "America/Montevideo", label: "(GMT-03:00) Montevideo" },
    { value: "America/Miquelon", label: "(GMT-03:00) Miquelon, St. Pierre" },
    { value: "America/Godthab", label: "(GMT-03:00) Greenland" },
    { value: "America/Argentina/Buenos_Aires", label: "(GMT-03:00) Buenos Aires" },
    { value: "America/Sao_Paulo", label: "(GMT-03:00) Brasilia" },
    { value: "America/Noronha", label: "(GMT-02:00) Mid-Atlantic" },
    { value: "Atlantic/Cape_Verde", label: "(GMT-01:00) Cape Verde Is." },
    { value: "Atlantic/Azores", label: "(GMT-01:00) Azores" },
    { value: "Europe/Belfast", label: "(GMT) Greenwich Mean Time : Belfast" },
    { value: "Europe/Dublin", label: "(GMT) Greenwich Mean Time : Dublin" },
    { value: "Europe/Lisbon", label: "(GMT) Greenwich Mean Time : Lisbon" },
    { value: "Europe/London", label: "(GMT) Greenwich Mean Time : London" },
    { value: "Africa/Abidjan", label: "(GMT) Monrovia, Reykjavik" },
    { value: "Europe/Amsterdam", label: "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna" },
    { value: "Europe/Belgrade", label: "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague" },
    { value: "Europe/Brussels", label: "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris" },
    { value: "Africa/Algiers", label: "(GMT+01:00) West Central Africa" },
    { value: "Africa/Windhoek", label: "(GMT+01:00) Windhoek" },
    { value: "Asia/Beirut", label: "(GMT+02:00) Beirut" },
    { value: "Africa/Cairo", label: "(GMT+02:00) Cairo" },
    { value: "Asia/Gaza", label: "(GMT+02:00) Gaza" },
    { value: "Africa/Blantyre", label: "(GMT+02:00) Harare, Pretoria" },
    { value: "Asia/Jerusalem", label: "(GMT+02:00) Jerusalem" },
    { value: "Europe/Minsk", label: "(GMT+02:00) Minsk" },
    { value: "Asia/Damascus", label: "(GMT+02:00) Syria" },
    { value: "Europe/Moscow", label: "(GMT+03:00) Moscow, St. Petersburg, Volgograd" },
    { value: "Africa/Addis_Ababa", label: "(GMT+03:00) Nairobi" },
    { value: "Asia/Tehran", label: "(GMT+03:30) Tehran" },
    { value: "Asia/Dubai", label: "(GMT+04:00) Abu Dhabi, Muscat" },
    { value: "Asia/Yerevan", label: "(GMT+04:00) Yerevan" },
    { value: "Asia/Kabul", label: "(GMT+04:30) Kabul" },
    { value: "Asia/Yekaterinburg", label: "(GMT+05:00) Ekaterinburg" },
    { value: "Asia/Tashkent", label: "(GMT+05:00) Tashkent" },
    { value: "Asia/Kolkata", label: "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi" },
    { value: "Asia/Katmandu", label: "(GMT+05:45) Kathmandu" },
    { value: "Asia/Dhaka", label: "(GMT+06:00) Astana, Dhaka" },
    { value: "Asia/Novosibirsk", label: "(GMT+06:00) Novosibirsk" },
    { value: "Asia/Rangoon", label: "(GMT+06:30) Yangon (Rangoon)" },
    { value: "Asia/Bangkok", label: "(GMT+07:00) Bangkok, Hanoi, Jakarta" },
    { value: "Asia/Krasnoyarsk", label: "(GMT+07:00) Krasnoyarsk" },
    { value: "Asia/Hong_Kong", label: "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi" },
    { value: "Asia/Irkutsk", label: "(GMT+08:00) Irkutsk, Ulaan Bataar" },
    { value: "Australia/Perth", label: "(GMT+08:00) Perth" },
    { value: "Australia/Eucla", label: "(GMT+08:45) Eucla" },
    { value: "Asia/Tokyo", label: "(GMT+09:00) Osaka, Sapporo, Tokyo" },
    { value: "Asia/Seoul", label: "(GMT+09:00) Seoul" },
    { value: "Asia/Yakutsk", label: "(GMT+09:00) Yakutsk" },
    { value: "Australia/Adelaide", label: "(GMT+09:30) Adelaide" },
    { value: "Australia/Darwin", label: "(GMT+09:30) Darwin" },
    { value: "Australia/Brisbane", label: "(GMT+10:00) Brisbane" },
    { value: "Australia/Hobart", label: "(GMT+10:00) Hobart" },
    { value: "Asia/Vladivostok", label: "(GMT+10:00) Vladivostok" },
    { value: "Australia/Lord_Howe", label: "(GMT+10:30) Lord Howe Island" },
    { value: "Etc/GMT-11", label: "(GMT+11:00) Solomon Is., New Caledonia" },
    { value: "Asia/Magadan", label: "(GMT+11:00) Magadan" },
    { value: "Pacific/Norfolk", label: "(GMT+11:30) Norfolk Island" },
    { value: "Asia/Anadyr", label: "(GMT+12:00) Anadyr, Kamchatka" },
    { value: "Pacific/Auckland", label: "(GMT+12:00) Auckland, Wellington" },
    { value: "Etc/GMT-12", label: "(GMT+12:00) Fiji, Kamchatka, Marshall Is." },
    { value: "Pacific/Chatham", label: "(GMT+12:45) Chatham Islands" },
    { value: "Pacific/Tongatapu", label: "(GMT+13:00) Nuku'alofa" },
    { value: "Pacific/Kiritimati", label: "(GMT+14:00) Kiritimati" }
  ];
  return (
    <Fragment>
      <Pageheader
        titles={"MAIL SETTING"}
        active={"Mail -Setting"}
        Subtite={"Apps"}
      />

      <Row className="row-sm">
        <Col md={12}>
          <Card>
            <Card.Body>
              <div className="panel tabs-style7 scaleX">
                <div className="panel-head">
                  <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="home" title="General" className="tx-15">
                      <div className="tab-pane active" id="mailSettingsTab1">
                        <h5 className="font-weight-semibold">
                          General and Basic Info Settings
                        </h5>
                        <p className="tx-muted mb-4">
                          Tempor accusam labore dolor takimata invidunt dolores
                          no lorem lorem eirmod. Takimata lorem dolor aliquyam
                          clita est. Dolore dolor et.
                        </p>
                        <form className="form-horizontal">
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="form-label">User Name</label>
                              </div>
                              <div className="col-md-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="User Name"
                                  defaultValue="Jason Taylor"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="form-label">Email</label>
                              </div>
                              <div className="col-md-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Email"
                                  defaultValue="json.taylor@gmail.com"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="form-label">Language</label>
                              </div>
                              <div className="col-md-9">
                                <select className="form-control select2">
                                  <option>US English</option>
                                  <option>Arabic</option>
                                  <option>Korean</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="form-label">Timezone</label>
                              </div>
                              <div className="col-md-9">
                              <Creatable
                                classNamePrefix="Select2"
                                options={groupedOptions2}
                                value={selected2}
                                onChange={setSelected2}
                              />
                              </div>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <div className="row">
                              <div className="col-sm-3 col">
                                <label className="form-label">
                                  Verification
                                </label>
                              </div>
                              <div className="col-sm-9 col">
                                <div className="tags-group">
                                  <label className="tag-item mx-1">
                                    <input
                                      type="checkbox"
                                      value="mobilenumber"
                                      className="selectgroup-input"
                                      defaultChecked
                                    />
                                    <span className="tag rounded-pill">
                                      Mobile Number
                                    </span>
                                  </label>
                                  <label className="tag-item">
                                    <input
                                      type="checkbox"
                                      value="altmail"
                                      className="selectgroup-input"
                                    />
                                    <span className="tag rounded-pill">
                                      Alternate Mail
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </Tab>
                    <Tab
                      eventKey="profile"
                      title="Notifications"
                      className="tx-15"
                    >
                      <div className="tab-pane" id="mailSettingsTab2">
                        <h5 className="font-weight-semibold">
                          Notification Settings
                        </h5>
                        <p className="tx-muted mb-4">
                          Ipsum ut accusam dolores est dolore amet, amet ipsum
                          et.
                        </p>
                        <form className="form-horizontal">
                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-sm order-2 mt-2 mt-sm-0">
                                <label className="form-label m-0">
                                  Notifications from unknown mails
                                </label>
                              </div>
                              <div className="col-sm-auto order-1">
                                <label htmlFor="unknownMail" className="mb-0">
                                  <input
                                    type="checkbox"
                                    className="custom-switch-input"
                                    id="unknownMail"
                                    defaultChecked
                                  />
                                  <span className="custom-switch-indicator"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-sm order-2 mt-2 mt-sm-0">
                                <label className="form-label m-0">
                                  Notifications from spam mails
                                </label>
                              </div>
                              <div className="col-sm-auto order-1">
                                <label htmlFor="unknownMail" className="mb-0">
                                  <input
                                    type="checkbox"
                                    className="custom-switch-input"
                                    id="unknownMail"
                                    defaultChecked
                                  />
                                  <span className="custom-switch-indicator"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-sm order-2 mt-2 mt-sm-0">
                                <label className="form-label m-0">
                                  Notifications from blocked contacts
                                </label>
                              </div>
                              <div className="col-sm-auto order-1">
                                <label
                                  htmlFor="blockedContacts"
                                  className="mb-0"
                                >
                                  <input
                                    type="checkbox"
                                    className="custom-switch-input"
                                    id="blockedContacts"
                                  />
                                  <span className="custom-switch-indicator"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-sm order-2 mt-2 mt-sm-0">
                                <label className="form-label m-0">
                                  Allow all mails
                                </label>
                              </div>
                              <div className="col-sm-auto order-1">
                                <label htmlFor="allowAll" className="mb-0">
                                  <input
                                    type="checkbox"
                                    className="custom-switch-input"
                                    id="allowAll"
                                  />
                                  <span className="custom-switch-indicator"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group mb-4">
                            <div className="row align-items-center">
                              <div className="col-sm order-2 mt-2 mt-sm-0">
                                <label className="form-label m-0">
                                  Block all mails
                                </label>
                              </div>
                              <div className="col-sm-auto order-1">
                                <label htmlFor="blockAll" className="mb-0">
                                  <input
                                    type="checkbox"
                                    className="custom-switch-input"
                                    id="blockAll"
                                  />
                                  <span className="custom-switch-indicator"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-2 col">
                                <label className="form-label">
                                  Connected networks
                                </label>
                              </div>
                              <div className="col-md-10 col">
                                <div className="tags-group">
                                  <label className="tag-item">
                                    <input
                                      type="checkbox"
                                      name="mobilenumber"
                                      value="mobilenumber"
                                      className="selectgroup-input"
                                      defaultChecked
                                    />
                                    <span className="tag avatar-sm radius-7">
                                      <i className="ti ti-facebook tx-12"></i>
                                    </span>
                                  </label>
                                  <label className="tag-item mx-1">
                                    <input
                                      type="checkbox"
                                      name="mobilenumber"
                                      value="mobilenumber"
                                      className="selectgroup-input"
                                    />
                                    <span className="tag avatar-sm radius-7">
                                      <i className="ti ti-linkedin tx-12"></i>
                                    </span>
                                  </label>
                                  <label className="tag-item">
                                    <input
                                      type="checkbox"
                                      name="mobilenumber"
                                      value="mobilenumber"
                                      className="selectgroup-input"
                                    />
                                    <span className="tag avatar-sm radius-7">
                                      <i className="ti ti-dropbox tx-12"></i>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3 main-content-label">
                            Notifications from
                          </div>
                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-sm order-2 mt-2 mt-sm-0">
                                <label className="form-label m-0">
                                  <svg
                                    className="mx-1"
                                    width="20px"
                                    height="20px"
                                  >
                                    <defs></defs>
                                    <g transform="matrix(1,0,0,1,0,0)">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-name="Ebene 1"
                                        viewBox="0 0 1024 1024"
                                        width="20px"
                                        height="20px"
                                      >
                                        <path
                                          fill="var(--primary-bg-color)"
                                          d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                                          className="color1877f2 svgShape"
                                        ></path>
                                        <path
                                          fill="#ffffff"
                                          d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                                          className="colorfff svgShape"
                                        ></path>
                                      </svg>
                                    </g>
                                  </svg>
                                  Facebook
                                </label>
                              </div>
                              <div className="col-sm-auto order-1">
                                <label htmlFor="loginFacebook" className="mb-0">
                                  <input
                                    type="checkbox"
                                    className="custom-switch-input"
                                    id="loginFacebook"
                                    defaultChecked
                                  />
                                  <span className="custom-switch-indicator"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-sm order-2 mt-2 mt-sm-0">
                                <label className="form-label m-0">
                                  <svg
                                    className="mx-1"
                                    width="24px"
                                    height="18px"
                                    version="1.1"
                                  >
                                    <defs></defs>
                                    <g transform="matrix(1,0,0,1,0,0)">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22px"
                                        height="20px"
                                        data-name="047-dropbox"
                                        viewBox="0 0 98.488 98.488"
                                      >
                                        <path
                                          fill="var(--primary-bg-color)"
                                          d="M305.244,19.07,276.27,0,256,17.057l29.214,18.177Z"
                                          data-name="Path 115"
                                          transform="translate(-206.756)"
                                          className="color1e88e5 svgShape"
                                        ></path>
                                        <path
                                          fill="var(--primary-bg-color)"
                                          d="M28.974,0,0,19.064l20.036,16.17L49.244,17.057Z"
                                          data-name="Path 116"
                                          className="color1e88e5 svgShape"
                                        ></path>
                                        <path
                                          fill="var(--primary-bg-color)"
                                          d="M49.244,201.351l-20.27,17.057L0,199.338l20.03-16.17,29.214,18.183,29.208-18.183,20.036,16.17-28.974,19.07Z"
                                          data-name="Path 117"
                                          transform="translate(0 -147.934)"
                                          className="color1e88e5 svgShape"
                                        ></path>
                                        <path
                                          fill="var(--primary-bg-color)"
                                          d="M148.512,334.908a3.055,3.055,0,0,1-1.687.5,3.107,3.107,0,0,1-1.982-.72l-18.066-15.2-18.066,15.2a3.089,3.089,0,0,1-3.675.215L96,328.961v9.092l30.839,18.466,30.716-18.466v-9.1Z"
                                          data-name="Path 118"
                                          transform="translate(-77.534 -258.032)"
                                          className="color1e88e5 svgShape"
                                        ></path>
                                      </svg>
                                    </g>
                                  </svg>
                                  Dropbox
                                </label>
                              </div>
                              <div className="col-sm-auto order-1">
                                <label htmlFor="loginDropbox" className="mb-0">
                                  <input id="loginDropbox"
                                    type="checkbox"
                                    className="custom-switch-input"
                                  />
                                  <span className="custom-switch-indicator"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <div className="row align-items-center">
                              <div className="col-sm order-2 mt-2 mt-sm-0">
                                <label className="form-label m-0">
                                  <svg
                                    className="mx-1"
                                    width="20px"
                                    height="20px"
                                    version="1.1"
                                  >
                                    <defs></defs>
                                    <g>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        viewBox="7.025 7.025 497.951 497.95"
                                      >
                                        <linearGradient
                                          id="a"
                                          x1="-974.482"
                                          x2="-622.378"
                                          y1="1306.773"
                                          y2="1658.877"
                                          gradientTransform="translate(1054.43 -1226.825)"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop
                                            offset="0"
                                            stopColor="#4deeea"
                                            className="stopColor2489be svgShape"
                                          ></stop>
                                          <stop
                                            offset="1"
                                            stopColor="#4deeea"
                                            className="stopColor0575b3 svgShape"
                                          ></stop>
                                        </linearGradient>
                                        <path
                                          fill="var(--primary-bg-color)"
                                          d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                                        ></path>
                                      </svg>
                                    </g>
                                  </svg>
                                  Linkedin
                                </label>
                              </div>
                              <div className="col-sm-auto order-1">
                                <label htmlFor="loginLinkedin" className="mb-0">
                                  <input id="loginLinkedin"
                                    type="checkbox"
                                    className="custom-switch-input"
                                  />
                                  <span className="custom-switch-indicator"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </Tab>
                    <Tab eventKey="contact" title="Security" className="tx-15">
                      <div className="tab-pane" id="mailSettingsTab3">
                        <h5 className="font-weight-semibold">
                          Security Settings
                        </h5>
                        <p className="tx-muted mb-4">
                          Est elitr justo lorem at et dolore diam consetetur
                          diam ea. Justo sit nonumy voluptua takimata lorem
                          takimata erat, sit.
                        </p>
                        <form className="form-horizontal">
                          <div className="form-group mb-4">
                            <div className="row align-items-center">
                              <div className="col-md-3">
                                <label className="form-label m-0">
                                  2 Step verifiction
                                  <NavLink
                                    to={`${import.meta.env.BASE_URL
                                      }app/mail/mailsetting/`}
                                    className="ms-2 tx-muted"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="help"
                                  >
                                    <i className="fe fe-help-circle"></i>
                                  </NavLink>
                                </label>
                              </div>
                              <div className="col-md-9">
                                <label htmlFor="twoStep" className="mb-0">
                                  <input
                                    type="checkbox"
                                    className="custom-switch-input"
                                    id="twoStep"
                                  />
                                  <span className="custom-switch-indicator"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="mb-2 main-content-label">
                            Change Password
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="form-label">
                                  New Password
                                </label>
                              </div>
                              <div className="col-md-9">
                                <input
                                  className="form-control"
                                  placeholder="Enter new password"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group mb-4">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="form-label">
                                  Re-Enter Password
                                </label>
                              </div>
                              <div className="col-md-9">
                                <input
                                  className="form-control"
                                  placeholder="Re-Enter your password"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mb-2 main-content-label">Account</div>
                          <div className="form-group mb-0">
                            <div className="row">
                              <div className="col-md-3">
                                <a className="btn btn-outline-danger" >
                                  Deactivate Account
                                </a>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="btn-list text-end">
                <a  className="btn btn-primary">
                  Save Changes
                </a>
                <a  className="btn btn-secondary">
                  Restore to default
                </a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        {/* <!-- col-end --> */}
      </Row>
    </Fragment>
  );
}

export default Mailsetting;
