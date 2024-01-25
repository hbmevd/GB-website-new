import { Fragment } from 'react'
import Allimages from '../../../components/common/imagesdata/imagesdata'
import Pageheader from '../../../components/common/pageheader/pageheader'
import { Card, Col, Row } from 'react-bootstrap'

function Aboutus() {
  return (
    <Fragment>

      <Pageheader titles={'ABOUTUS'} active={'Aboutus'} Subtite={'Pages'} />
      <div className="container">


        <Row className="mb-3">
          <Col xl={8} lg={12} sm={12}>
            <h1 className="mb-3 font-weight-semibold tx-46">Hello! This is <span className="tx-primary tx-56">Zem.</span></h1>
            <p className="leading-normal lead-1">Majority have suffered alteration in some form.</p>
            <p className="leading-normal  tx-16">There are many variations of passages of Lorem Ipsum available, but the majority have suffered  by injected humour, or randomised words which don't look even slightly believable.
              If you are going to use a passage of Lorem Ipsum you are going to use a passage of Lorem Ipsum</p>
          </Col>
        </Row>


        <Row className="mb-3 br-5">
          <p className="bg-white p-2 radius-4"><img src={Allimages("Photos27")} className="radius-7" alt="image" /></p>
        </Row>


        <Row className=" mb-2 p-xl-5 p-0">
          <Col md={12}>
            <Row className="row justify-content-end">
              <Col xl={4} className="col-xl-4 ps-4 justify-self-start">
                <h5 className="text-dark tx-26 font-weight-semibold">Our Services</h5>
                <p className="tx-14 mb-4">Diam consetetur sed labore sea kasd</p>
              </Col>
              <Col xl={3}>
                <Card>
                  <Card.Body className=" tx-center">
                    <span className="avatar avatar-lg rounded-circle mx-auto bg-primary-transparent tx-primary mb-2"><i className="fe fe-layers tx-20"></i></span>
                    <h5>Designing</h5>
                    <p className="mb-0 tx-muted">Labore duo et at ea accusam. Et guberg  consetetur.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3}>
                <Card>
                  <Card.Body className=" tx-center">
                    <span className="avatar avatar-lg rounded-circle mx-auto bg-warning-transparent tx-warning mb-2"><i className="fe fe-code tx-20"></i></span>
                    <h5>Developing</h5>
                    <p className="mb-0 tx-muted">Labore duo et at ea accusam. Et guberg  consetetur.</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="row flex-1 justify-content-center">
              <Col xl={3}>
                <Card>
                  <Card.Body className=" tx-center">
                    <span className="avatar avatar-lg rounded-circle mx-auto bg-orange-transparent tx-orange mb-2"><i className="fe fe-globe tx-20"></i></span>
                    <h5>Social Media</h5>
                    <p className="mb-0 tx-muted">Labore duo et at ea accusam. Et guberg  consetetur.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3}>
                <Card>
                  <Card.Body className=" tx-center">
                    <span className="avatar avatar-lg rounded-circle mx-auto bg-green-transparent tx-green mb-2"><i className="fe fe-shopping-cart tx-20"></i></span>
                    <h5>E-Commerce</h5>
                    <p className="mb-0 tx-muted">Labore duo et at ea accusam. Et guberg  consetetur.</p>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          </Col>
        </Row>


        <Row className=" mb-5">
          <Col xl={12} md={12} sm={12}>
            <Card>
              <Card.Body className=" p-4">
                <Row>
                  <Col xl={8}>
                    <h5 className="text-dark mb-3 tx-26 font-weight-semibold">Our Mission</h5>
                    <h6 className="mb-3 tx-18 font-weight-normal">Meatae veniam, cumque eligendi earum praesenti!</h6>
                    <p className="tx-14 mb-2 tx-inverse">Amet magna justo justo sit et tempor nonumy lorem. Ea vero sed accusam aliquyam et, et sed rebum amet sea. Diam lorem dolor consetetur kasd. Et labore erat stet no dolores. Sadipscing at dolor labore dolore. Et labore dolor takimata kasd at, duo sed.</p>
                    <p className="tx-14 mb-2 tx-inverse">Amet magna justo justo sit et tempor. Rebum amet sea. Diam lorem dolor consetetur kasd. Et labore erat stet no dolores. Sadipscing at dolor labore dolore. Et labore dolor takimata kasd at, duo sed.</p>
                    <p className="tx-14 mb-2 tx-inverse">Amet magna justo justo sit et tempor. Rebum amet sea. Accusam rebum duo justo kasd eirmod elitr nonumy. Sed et. Diam lorem dolor consetetur kasd. Et labore erat stet no dolores. Sadipscing at dolor labore dolore. Et labore dolor takimata kasd at, duo sed.</p>
                    <p className="tx-14 mb-0 tx-inverse">Amet dolor amet tempor elitr kasd sit diam no kasd, sit justo diam et tempor elitr at aliquyam, stet sanctus sit accusam ipsum elitr at,.</p>
                  </Col>
                  <Col xl={4} className=" about-svg">
                    <div className="tx-center">
                      <svg width="360" height="360"><defs ></defs><g ><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 1200 1000" width="360" height="360"><g data-name="Api Interface" fill="#000000" className="color000 svgShape"><path fill="#38aba1" d="M353.97441,321.47331h0c-9.71438-51.94225-37.668-89.412-75.3361-108.44432s-84.45572-19.42878-131.83816,3.56856h0C166.229,320.08555,259.01129,367.07147,353.97441,321.47331Z" className="color199180 svgShape"></path><path fill="#ffffff" d="M342.47576,316.517,162.46214,224.92415c-.19825,0-.19825-.19825-.19825-.3965s.19825-.19825.39651-.19825l180.4101,90.79982a.75492.75492,0,0,1-.59474,1.38777Z" className="colorfff svgShape"></path><path fill="#ffffff" d="M238.78951 263.187a53.95548 53.95548 0 00-15.86023 2.379 34.2019 34.2019 0 00-7.33535 3.172 48.84982 48.84982 0 00-6.74061 4.36156h0a.85271.85271 0 01-.99126-1.38776h0a32.02681 32.02681 0 017.1371-4.16331A40.27659 40.27659 0 01222.731 264.773a56.08481 56.08481 0 0116.25673-1.78428c-.19825 0 0 0-.19825.19826zM293.5073 290.94236a52.979 52.979 0 01-10.5074-22.00606 39.49747 39.49747 0 01-.793-8.32662.793.793 0 011.586 0h0a53.14071 53.14071 0 00.3965 7.93012 34.07671 34.07671 0 001.98252 7.73186 63.47912 63.47912 0 007.33536 14.6707c.19824-.19825.19824 0 0 0zM312.73783 300.65676a53.95487 53.95487 0 00-15.86023 2.379 34.20037 34.20037 0 00-7.33535 3.172 48.84879 48.84879 0 00-6.7406 4.36156h0a.85272.85272 0 01-.99126-1.38779h0a32.02727 32.02727 0 017.1371-4.16333 40.27463 40.27463 0 017.73186-2.77552 56.08455 56.08455 0 0116.25675-1.78427c-.19827 0-.19827 0-.19827.19827zM210.83584 249.111A52.97876 52.97876 0 01200.32845 227.105a39.49683 39.49683 0 01-.793-8.32662.793.793 0 011.586 0h0a53.14077 53.14077 0 00.3965 7.93012 34.0762 34.0762 0 001.98253 7.73186 63.47988 63.47988 0 007.33535 14.6707c.19826-.19826.19826 0 0 0z" className="colorfff svgShape"></path><path fill="#4ac9bd" d="M353.97441,321.47331h0c20.61828-48.572,17.84275-95.35963-2.9738-132.03641s-59.67411-62.64791-112.01287-69.785h0C198.14767,216.79579,249.69341,307.19911,353.97441,321.47331Z" className="color2ab19f svgShape"></path><path fill="#ffffff" d="M347.03556,310.76764l-99.52294-175.652c0-.19825,0-.39651.19825-.39651s.3965,0,.3965.19825L348.62158,310.1729a.87177.87177,0,0,1-.19826.99127,1.13746,1.13746,0,0,1-1.38776-.39653Z" className="colorfff svgShape"></path><path fill="#ffffff" d="M289.93874 209.26217a51.74437 51.74437 0 00-14.67072-6.7406 51.04972 51.04972 0 00-7.93011-1.586 35.357 35.357 0 00-7.93012 0h0a.793.793 0 010-1.586h0a58.55949 58.55949 0 018.32662.3965 35.74746 35.74746 0 017.93011 1.98253 46.90131 46.90131 0 0114.27422 7.53363zM320.46968 262.5922a49.9802 49.9802 0 01.99127-16.25673 52.39455 52.39455 0 012.379-7.93012 37.6448 37.6448 0 013.965-7.33535c.19827-.3965.793-.3965 1.18953-.19825s.3965.793.19827 1.18952h0a29.98691 29.98691 0 00-3.96506 6.93885 47.64022 47.64022 0 00-4.36156 23.59209c-.19826 0-.19826.19824-.39653 0zM330.97709 281.228a51.74438 51.74438 0 00-14.6707-6.7406 51.049 51.049 0 00-7.93011-1.586 35.357 35.357 0 00-7.93012 0h0a.7262.7262 0 01-.793-.793c0-.59477.19825-.793.793-.793h0a58.55956 58.55956 0 018.32662.3965 35.74774 35.74774 0 017.93011 1.98253 42.936 42.936 0 0114.2742 7.53363c.19824-.19825.19824 0 0 0zM274.475 182.10153a49.98049 49.98049 0 01.99127-16.25673 52.39421 52.39421 0 012.379-7.93012 37.64545 37.64545 0 013.965-7.33536c.19825-.3965.793-.3965 1.18952-.19825s.3965.793.19825 1.18952h0a29.98712 29.98712 0 00-3.96506 6.93885 47.64 47.64 0 00-4.36157 23.59209c-.19824 0-.19824.19825-.39649 0C274.67327 182.29978 274.475 182.29978 274.475 182.10153z" className="colorfff svgShape"></path><path fill="#75e2da" d="M353.77617,321.275h0c-39.25407-35.09075-84.45572-47.77894-125.69232-39.84882s-78.70639,36.28027-102.29848,83.26622h0C204.2935,434.874,306.39373,415.44516,353.77617,321.275Z" className="color48dbc5 svgShape"></path><path fill="#ffffff" d="M341.4845,324.4471,143.03336,361.71865c-.19825,0-.39651,0-.39651-.19827s0-.3965.19825-.3965L341.088,322.86107a1.09029,1.09029,0,0,1,.99126.59477.69354.69354,0,0,1-.59473.99126Z" className="colorfff svgShape"></path><path fill="#ffffff" d="M226.89433 345.66015a47.83247 47.83247 0 00-11.10215 11.69691 34.74176 34.74176 0 00-3.96506 6.93885 33.82682 33.82682 0 00-2.5773 7.53362h0a.81742.81742 0 01-1.586-.3965h0a51.92261 51.92261 0 012.97379-7.73185 50.83081 50.83081 0 014.36156-6.93885 45.13729 45.13729 0 0111.89518-11.10218zM287.16319 334.16148a52.44617 52.44617 0 01-15.06721-6.14585 39.48481 39.48481 0 01-6.54235-4.75806 38.786 38.786 0 01-5.55109-5.94758.934.934 0 01.19825-1.18953c.3965-.39653.793-.19827 1.18952.19826h0a49.8127 49.8127 0 005.15457 6.14585 38.92052 38.92052 0 006.34408 4.95633 51.74389 51.74389 0 0014.67072 6.74058c-.19822-.19823-.19822-.19823-.39649 0zM308.37626 329.99819A47.83251 47.83251 0 00297.2741 341.6951a34.74171 34.74171 0 00-3.965 6.93885 33.82674 33.82674 0 00-2.5773 7.53361h0a.81742.81742 0 11-1.586-.3965h0a51.92416 51.92416 0 012.9738-7.73185 50.83233 50.83233 0 014.36155-6.93885 52.80673 52.80673 0 0111.89519-11.10217c-.19825-.19827 0-.19827 0 0zM196.36339 351.40947a52.446 52.446 0 01-15.06722-6.14585 39.48525 39.48525 0 01-6.54234-4.75805 38.78589 38.78589 0 01-5.55108-5.94759.85271.85271 0 111.38776-.99126h0a49.81441 49.81441 0 005.15458 6.14585 38.92 38.92 0 006.34408 4.95632 51.74376 51.74376 0 0014.67072 6.74058c-.3965-.19823-.3965-.19823-.3965 0z" className="colorfff svgShape"></path><path fill="#4b788a" d="M1042.50667,844.66266H266.74316V306.80258a17.47179,17.47179,0,0,1,17.44626-17.44626h740.871a17.47176,17.47176,0,0,1,17.44623,17.44626Z" className="color5b6f8b svgShape"></path><path fill="#ffffff" d="M275.46629,844.66266v-537.067a9.51825,9.51825,0,0,1,9.51614-9.51615h739.08668a9.51821,9.51821,0,0,1,9.51612,9.51615v537.067Z" className="colorfff svgShape"></path><circle cx="368.05" cy="402.559" r="60.071" fill="#4b788a" className="color5b6f8b svgShape"></circle><circle cx="368.05" cy="402.559" r="53.528" fill="#ffffff" className="colorfff svgShape"></circle><path fill="#5ebfec" d="M403.33939,433.48618a45.71621,45.71621,0,0,1-70.578,0,20.50849,20.50849,0,0,1,5.55109-5.35282c12.09344-7.93011,20.42005-9.91264,20.42005-9.91264v-5.15459a22.345,22.345,0,0,1-5.74932-8.12838c-1.586-.3965-3.17206-2.77553-3.56856-5.94759-.59476-3.37029.3965-6.34408,2.1808-6.93885v-9.91264h0a5.9908,5.9908,0,0,1,.99126-3.17206,7.77187,7.77187,0,0,1,.793-1.78426,17.044,17.044,0,0,1,3.96506-3.56856,28.46119,28.46119,0,0,1,6.54235-3.17206c2.379-.793,5.35282-1.586,7.13712-3.37029a13.76793,13.76793,0,0,1-.99127,2.57729c1.78426,0,5.35282.19827,6.93885-.3965l-1.18953,1.18953c.59477,1.18953,2.1808,1.586,3.37029,2.379a7.42387,7.42387,0,0,1,2.379,2.57729,19.8508,19.8508,0,0,1,1.98253,4.16333,11.36347,11.36347,0,0,1,.793,2.77552h0v9.71438h0c1.98253.19827,2.97379,3.3703,2.379,6.93885-.59476,3.3703-2.18079,5.94759-3.96506,5.94759a18.606,18.606,0,0,1-5.55108,8.12838v5.15459s8.12838,1.98253,20.42005,9.91264A21.59766,21.59766,0,0,1,403.33939,433.48618Z" className="color3d84f2 svgShape"></path><path fill="#6a8696" d="M1044.88567,880.14991H264.16586a35.66292,35.66292,0,0,1-35.68551-35.68552h851.89257A35.36941,35.36941,0,0,1,1044.88567,880.14991Z" className="color4a5b6b svgShape"></path><path fill="#4b788a" d="M597.429,859.53162H727.2846c4.75806,0,8.72311-6.54232,8.72311-14.869H588.70579C588.70579,852.791,592.67085,859.53162,597.429,859.53162Z" className="color5b6f8b svgShape"></path><path fill="#e8e8e8" d="M672.96327,495.93584V617.66312a6.388,6.388,0,0,1-6.34412,6.34411H310.16054a6.388,6.388,0,0,1-6.34409-6.34411V495.7376a6.388,6.388,0,0,1,6.34409-6.34408H666.61921C669.98947,489.79,672.96327,492.56554,672.96327,495.93584Z" className="colorc8e1ff svgShape"></path><path fill="#ffffff" d="M458.05716,519.13142V594.864a5.96449,5.96449,0,0,1-5.94758,5.94758H333.55435a5.96448,5.96448,0,0,1-5.94758-5.94758V519.13142a5.9645,5.9645,0,0,1,5.94758-5.94759H452.10958A5.84141,5.84141,0,0,1,458.05716,519.13142Z" className="colorfff svgShape"></path><path fill="#ffda82" d="M433.07732 584.15833l-80.09418-.39653a1.29639 1.29639 0 01-.99126-2.18079l27.3589-37.27155a1.29442 1.29442 0 012.18079 0l16.25673 22.99732a1.41433 1.41433 0 002.1808.19826l10.5074-11.30043a1.32037 1.32037 0 011.98253 0l21.60955 25.77287A1.29643 1.29643 0 01433.07732 584.15833zM408.69221 537.37067a7.63337 7.63337 0 11-7.53361-7.73185A7.70193 7.70193 0 01408.69221 537.37067z" className="colorfcc800 svgShape"></path><path fill="#ff9b47" d="M587.9128,517.34715v19.82529a4.18764,4.18764,0,0,1-4.16333,4.16332H487.0021a4.18765,4.18765,0,0,1-4.16333-4.16332V517.34715a4.18764,4.18764,0,0,1,4.16333-4.16332h96.74737A4.18762,4.18762,0,0,1,587.9128,517.34715Z" className="colorfa5814 svgShape"></path><path fill="#ffffff" d="M646.00092 555.8082a3.47416 3.47416 0 01-3.37032 3.37032H486.01083a3.37033 3.37033 0 010-6.74065H642.6306A3.34156 3.34156 0 01646.00092 555.8082zM646.00092 573.651a3.47416 3.47416 0 01-3.37032 3.37032H486.01083a3.37033 3.37033 0 010-6.74065H642.6306A3.34156 3.34156 0 01646.00092 573.651zM613.4874 591.49371a3.47416 3.47416 0 01-3.37032 3.37033H486.209a3.37033 3.37033 0 010-6.74065h123.908A3.47416 3.47416 0 01613.4874 591.49371z" className="colorfff svgShape"></path><path fill="#5ebfec" d="M792.11325,684.276V789.74659a6.263,6.263,0,0,1-6.34411,6.34411H652.54324a6.263,6.263,0,0,1-6.34411-6.34411V684.276a6.263,6.263,0,0,1,6.34411-6.34411h133.226A6.263,6.263,0,0,1,792.11325,684.276Z" className="color3d84f2 svgShape"></path><path fill="#ff9b47" d="M997.70151,684.276V789.74659a6.263,6.263,0,0,1-6.34412,6.34411H858.1315a6.263,6.263,0,0,1-6.34412-6.34411V684.276a6.263,6.263,0,0,1,6.34412-6.34411h133.226A6.3881,6.3881,0,0,1,997.70151,684.276Z" className="colorfa5814 svgShape"></path><path fill="#ffffff" fill-rule="evenodd" d="M719.15622,692.20615a44.67461,44.67461,0,1,1-31.72046,13.0847,45.37559,45.37559,0,0,1,31.72046-13.0847Zm-42.02963,46.193a40.6854,40.6854,0,0,0,7.33538,22.20434,57.2893,57.2893,0,0,1,14.6707-5.55106l.59473-.19826a93.06533,93.06533,0,0,1-1.78426-16.65323H677.12659Zm23.59208,0a88.17042,88.17042,0,0,0,1.586,16.05849,77.498,77.498,0,0,1,15.06723-1.38779V738.59737H700.71867Zm19.82528,0v14.47243a94.61072,94.61072,0,0,1,15.06723,1.38779,86.46956,86.46956,0,0,0,1.586-16.05849H720.544Zm33.10826,22.20428a42.35911,42.35911,0,0,0,7.33538-22.20435H740.3693a79.27535,79.27535,0,0,1-1.78426,16.65323l.59473.19827a49.14263,49.14263,0,0,1,14.47244,5.35285Zm7.33538-24.97981a41.01955,41.01955,0,0,0-6.14585-20.42,49.81481,49.81481,0,0,1-15.86023,6.14585h-.19827a115.93117,115.93117,0,0,1,1.3878,14.27423h20.81655Zm-23.59214,0a78.00654,78.00654,0,0,0-1.18953-13.67944,102.25457,102.25457,0,0,1-15.662,1.586v12.2917h16.8515Zm-35.289-13.8777a79.69862,79.69862,0,0,0-1.18953,13.67943h16.8515V723.33187a82.28338,82.28338,0,0,1-15.662-1.586Zm-4.16332,13.8777a68.352,68.352,0,0,1,1.38779-14.27423h0a51.68626,51.68626,0,0,1-15.86023-6.14586,41.63168,41.63168,0,0,0-6.14585,20.42h20.61829Zm4.75806-16.65329a76.10234,76.10234,0,0,0,15.06723,1.38779V695.17994c-5.35286.99127-9.11965,7.13712-11.10218,11.69691a45.51275,45.51275,0,0,0-3.96505,12.09344Zm14.869,36.875a89.39867,89.39867,0,0,0-14.47243,1.3878,51.05647,51.05647,0,0,0,3.37032,9.71438c1.98253,4.55979,5.94759,10.70564,11.10217,11.6969V755.84533Zm2.97379,22.99735c5.35286-.99127,9.11965-7.13712,11.10218-11.69691a56.34013,56.34013,0,0,0,3.37032-9.71438A89.40562,89.40562,0,0,0,720.544,756.0436v22.79908Zm0-58.28633a96.78358,96.78358,0,0,0,15.06723-1.3878,65.684,65.684,0,0,0-3.76679-12.09343c-1.98253-4.5598-5.94758-10.70565-11.10217-11.69691v25.17814Zm32.71173-7.93012a54.63282,54.63282,0,0,0-4.55979-5.35285,41.26224,41.26224,0,0,0-21.01482-11.30044,32.25151,32.25151,0,0,1,6.54232,9.71438,55.53869,55.53869,0,0,1,3.96506,12.68817h0a51.49668,51.49668,0,0,0,15.06723-5.74926Zm-53.52828,5.74932a72.33594,72.33594,0,0,1,3.96506-12.68817,29.96967,29.96967,0,0,1,6.54232-9.71438A41.26139,41.26139,0,0,0,689.22,707.27344a40.4536,40.4536,0,0,0-4.55979,5.35285,56.11775,56.11775,0,0,0,15.06723,5.74926Zm-13.48117,44.6069c.99127,1.18953,2.1808,2.57726,3.17206,3.76679a41.2622,41.2622,0,0,0,21.01482,11.30044,32.2512,32.2512,0,0,1-6.54232-9.71438,70.67929,70.67929,0,0,1-3.56853-10.30917l-.59474.19826a42.15966,42.15966,0,0,0-13.48129,4.75806Zm41.43484,15.06723a41.26135,41.26135,0,0,0,21.01482-11.30044,28.99135,28.99135,0,0,0,3.17205-3.76679,47.09361,47.09361,0,0,0-13.67943-4.95632l-.59474-.19827a45.29094,45.29094,0,0,1-3.56852,10.30918A24.27289,24.27289,0,0,1,727.68107,778.04968Z" className="colorfff svgShape"></path><path fill="#ffffff" d="M901.54886 698.9468v76.32735a2.20015 2.20015 0 01-2.18079 2.1808H882.71484a2.20015 2.20015 0 01-2.18079-2.1808V698.9468a2.20015 2.20015 0 012.18079-2.1808h16.65323A2.20015 2.20015 0 01901.54886 698.9468zM935.05359 724.12487v50.951a2.20015 2.20015 0 01-2.1808 2.18079H916.21956a2.20014 2.20014 0 01-2.18079-2.18079v-50.951a2.20014 2.20014 0 012.18079-2.18079h16.65323A2.34341 2.34341 0 01935.05359 724.12487zM968.55831 736.81305v38.26278a2.20014 2.20014 0 01-2.18079 2.18079H949.72429a2.20015 2.20015 0 01-2.1808-2.18079V736.81305a2.20016 2.20016 0 012.1808-2.1808h16.65323A2.20023 2.20023 0 01968.55831 736.81305z" className="colorfff svgShape"></path><path fill="#e8e8e8" d="M1100,264.57473v347.339a25.637,25.637,0,0,1-25.57467,25.5746H735.41292a25.637,25.637,0,0,1-25.57461-25.5746v-347.339a25.637,25.637,0,0,1,25.57461-25.57463h339.01241A25.51,25.51,0,0,1,1100,264.57473Z" className="colorc8e1ff svgShape"></path><path fill="#ffffff" d="M735.61118,632.13555a20.307,20.307,0,0,1-20.22181-20.22181v-347.339a20.30694,20.30694,0,0,1,20.22181-20.22179h339.01248a20.307,20.307,0,0,1,20.22181,20.22179v347.339a20.30691,20.30691,0,0,1-20.22181,20.22181Z" className="colorfff svgShape"></path><circle cx="745.127" cy="272.307" r="7.137" fill="#ff9b47" className="colorfa5814 svgShape"></circle><circle cx="767.728" cy="272.307" r="7.137" fill="#ffda82" className="colorfdd333 svgShape"></circle><circle cx="790.527" cy="272.307" r="7.137" fill="#75e2da" className="color48dbc5 svgShape"></circle><path fill="#e8fafe" d="M749.48889,331.58419a3.39952,3.39952,0,0,1-3.56853,3.56856,3.5537,3.5537,0,0,1-3.56853-3.56856,3.64643,3.64643,0,0,1,6.14579-2.5773A4.17536,4.17536,0,0,1,749.48889,331.58419Z" className="colore8fafe svgShape"></path><rect width="25.376" height="7.137" x="758.41" y="328.016" fill="#e8fafe" className="colore8fafe svgShape"></rect><path fill="#e8fafe" d="M809.75775,331.58419a3.39952,3.39952,0,0,1-3.56853,3.56856,3.5537,3.5537,0,0,1-3.56853-3.56856,3.64643,3.64643,0,0,1,6.14579-2.5773A4.17536,4.17536,0,0,1,809.75775,331.58419Z" className="colore8fafe svgShape"></path><rect width="25.376" height="7.137" x="818.679" y="328.016" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="142.346" height="7.137" x="853.373" y="328.016" fill="#e8fafe" className="colore8fafe svgShape"></rect><path fill="#e8fafe" d="M749.48889,350.81474a3.39952,3.39952,0,0,1-3.56853,3.56856,3.5537,3.5537,0,0,1-3.56853-3.56856,3.64643,3.64643,0,0,1,6.14579-2.57729A4.17529,4.17529,0,0,1,749.48889,350.81474Z" className="colore8fafe svgShape"></path><rect width="25.376" height="7.137" x="758.41" y="347.246" fill="#e8fafe" className="colore8fafe svgShape"></rect><path fill="#e8fafe" d="M809.75775,350.81474a3.39952,3.39952,0,0,1-3.56853,3.56856,3.5537,3.5537,0,0,1-3.56853-3.56856,3.64643,3.64643,0,0,1,6.14579-2.57729A4.17529,4.17529,0,0,1,809.75775,350.81474Z" className="colore8fafe svgShape"></path><rect width="25.376" height="7.137" x="818.679" y="347.246" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="142.346" height="7.137" x="853.373" y="347.246" fill="#e8fafe" className="colore8fafe svgShape"></rect><path fill="#e8fafe" d="M749.48889,370.04526a3.39951,3.39951,0,0,1-3.56853,3.56856,3.5537,3.5537,0,0,1-3.56853-3.56856,3.64643,3.64643,0,0,1,6.14579-2.57729A4.17529,4.17529,0,0,1,749.48889,370.04526Z" className="colore8fafe svgShape"></path><rect width="25.376" height="7.137" x="758.41" y="366.477" fill="#e8fafe" className="colore8fafe svgShape"></rect><path fill="#e8fafe" d="M809.75775,370.04526a3.39951,3.39951,0,0,1-3.56853,3.56856,3.5537,3.5537,0,0,1-3.56853-3.56856,3.64643,3.64643,0,0,1,6.14579-2.57729A4.17529,4.17529,0,0,1,809.75775,370.04526Z" className="colore8fafe svgShape"></path><rect width="25.376" height="7.137" x="818.679" y="366.477" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="142.346" height="7.137" x="853.373" y="366.477" fill="#e8fafe" className="colore8fafe svgShape"></rect><path fill="#e8fafe" d="M749.48889,389.27579a3.39951,3.39951,0,0,1-3.56853,3.56855,3.5537,3.5537,0,0,1-3.56853-3.56855,3.64643,3.64643,0,0,1,6.14579-2.5773A4.17536,4.17536,0,0,1,749.48889,389.27579Z" className="colore8fafe svgShape"></path><rect width="25.376" height="7.137" x="758.41" y="385.707" fill="#e8fafe" className="colore8fafe svgShape"></rect><path fill="#e8fafe" d="M809.75775,389.27579a3.39951,3.39951,0,0,1-3.56853,3.56855,3.5537,3.5537,0,0,1-3.56853-3.56855,3.64643,3.64643,0,0,1,6.14579-2.5773A4.17536,4.17536,0,0,1,809.75775,389.27579Z" className="colore8fafe svgShape"></path><rect width="25.376" height="7.137" x="818.679" y="385.707" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="142.346" height="7.137" x="853.373" y="385.707" fill="#e8fafe" className="colore8fafe svgShape"></rect><path fill="#e8fafe" d="M749.48889,408.50631a3.39952,3.39952,0,0,1-3.56853,3.56856,3.5537,3.5537,0,0,1-3.56853-3.56856,3.64643,3.64643,0,0,1,6.14579-2.5773A4.17536,4.17536,0,0,1,749.48889,408.50631Z" className="colore8fafe svgShape"></path><rect width="25.376" height="7.137" x="758.41" y="404.938" fill="#e8fafe" className="colore8fafe svgShape"></rect><path fill="#e8fafe" d="M809.75775,408.50631a3.39952,3.39952,0,0,1-3.56853,3.56856,3.5537,3.5537,0,0,1-3.56853-3.56856,3.64643,3.64643,0,0,1,6.14579-2.5773A4.17536,4.17536,0,0,1,809.75775,408.50631Z" className="colore8fafe svgShape"></path><rect width="25.376" height="7.137" x="818.679" y="404.938" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="142.346" height="7.137" x="853.373" y="404.938" fill="#e8fafe" className="colore8fafe svgShape"></rect><path fill="#e8fafe" d="M749.48889,427.73683a3.39952,3.39952,0,0,1-3.56853,3.56856,3.5537,3.5537,0,0,1-3.56853-3.56856,3.64643,3.64643,0,0,1,6.14579-2.57729A4.17536,4.17536,0,0,1,749.48889,427.73683Z" className="colore8fafe svgShape"></path><rect width="25.376" height="7.137" x="758.41" y="424.168" fill="#e8fafe" className="colore8fafe svgShape"></rect><path fill="#e8fafe" d="M809.75775,427.73683a3.39952,3.39952,0,0,1-3.56853,3.56856,3.5537,3.5537,0,0,1-3.56853-3.56856,3.64643,3.64643,0,0,1,6.14579-2.57729A4.17536,4.17536,0,0,1,809.75775,427.73683Z" className="colore8fafe svgShape"></path><rect width="25.376" height="7.137" x="818.679" y="424.168" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="142.346" height="7.137" x="853.373" y="424.168" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="30.333" height="5.353" x="745.92" y="468.973" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="112.211" height="5.353" x="807.18" y="468.973" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="142.742" height="5.353" x="933.468" y="468.973" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="85.447" height="5.353" x="745.92" y="489.592" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="117.96" height="5.353" x="867.648" y="489.592" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="72.164" height="5.353" x="1004.046" y="489.592" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="40.444" height="5.353" x="745.92" y="572.263" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="32.91" height="5.353" x="812.335" y="572.263" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="26.169" height="5.353" x="860.312" y="572.263" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="47.184" height="5.353" x="929.503" y="572.263" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="32.712" height="5.353" x="989.97" y="572.263" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="41.435" height="5.353" x="1034.775" y="572.263" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="163.955" height="5.353" x="812.732" y="551.645" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="48.968" height="5.353" x="745.92" y="551.645" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="78.706" height="5.353" x="997.702" y="551.645" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="72.561" height="5.353" x="912.849" y="448.355" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="64.829" height="5.353" x="1011.381" y="448.355" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="132.036" height="5.353" x="745.92" y="448.355" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="51.149" height="5.353" x="745.92" y="510.21" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="137.389" height="5.353" x="813.525" y="510.21" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="105.867" height="5.353" x="970.541" y="510.21" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="34.892" height="5.353" x="1041.515" y="531.027" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="98.928" height="5.353" x="922.762" y="531.027" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="35.686" height="5.353" x="864.674" y="531.027" fill="#e8fafe" className="colore8fafe svgShape"></rect><rect width="103.29" height="5.353" x="745.92" y="531.027" fill="#e8fafe" className="colore8fafe svgShape"></rect><path fill="#7070da" d="M263.76936,876.77959a10.33347,10.33347,0,0,1-.3965,2.77552,1.31715,1.31715,0,0,1-.99126.793H214.80091a.99259.99259,0,0,1-.99126-1.18953l1.78428-7.73185,5.74933-24.78161,18.834,1.98253s-1.38776,11.10218,13.48121,15.4637C262.97635,866.47047,263.96761,872.81453,263.76936,876.77959Z" className="color464ae4 svgShape"></path><path fill="#2927a5" d="M245.72836,860.12636a13.46652,13.46652,0,0,1-5.55109-11.49865l-18.834-1.98252-3.17205,13.48117Z" className="color2624bd svgShape"></path><path fill="#7070da" d="M175.15033,876.77959a10.333,10.333,0,0,1-.39651,2.77552,1.31715,1.31715,0,0,1-.99126.793H126.18187a.9926.9926,0,0,1-.99127-1.18953l1.78428-7.73185,5.74934-24.78161,18.834,1.98253s-1.38777,11.10218,13.4812,15.4637C174.15906,866.47047,175.34858,872.81453,175.15033,876.77959Z" className="color464ae4 svgShape"></path><path fill="#2927a5" d="M157.10931,860.12636a13.4665,13.4665,0,0,1-5.55108-11.49865l-18.834-1.98252-3.172,13.48117Z" className="color2624bd svgShape"></path><path fill="#5c5c9c" d="M191.40707,854.97177c-2.18078-7.93012-8.72313-170.69574-8.72313-170.69574l11.10215-36.47851,3.76681-62.44966,38.06455,35.289s15.662,79.30115,18.43752,118.357c2.57729,38.26278-7.73186,65.02692,11.69692,116.17619H191.40707Z" className="color191937 svgShape"></path><path fill="#504a94" d="M179.51189,854.97177H113.69194c-25.17812-27.7554,15.26547-90.40332,22.79908-103.488s14.076-15.06723,4.95632-60.66539c-9.31789-45.59817-2.379-71.5693-2.379-71.5693l77.71512-12.68818L193.38958,754.25927C185.45948,788.55706,174.75382,808.18408,179.51189,854.97177Z" className="color292561 svgShape"></path><path fill="#ffd1c4" d="M293.5073,458.66429s12.68818-38.85757,29.73791-22.40258-19.23052,33.703-19.23052,33.703Z" className="colorffd1c4 svgShape"></path><path fill="var(--primary-bg-color)" d="M208.85331,479.87734l2.379,11.30041,6.7406,33.703s13.8777,3.56856,28.94492,6.14585c13.28293,2.379,27.3589,3.96506,33.703,1.586,10.70566-3.76679,31.5222-64.23395,31.5222-64.23395l-19.82529-13.28294-27.7554,47.38243C234.42793,486.02319,208.85331,479.87734,208.85331,479.87734Z" className="colorba93df svgShape"></path><path fill="#3e90b1" d="M211.0341,491.17775l6.7406,33.703s13.87771,3.56856,28.94492,6.14585a4.54383,4.54383,0,0,0-2.97379-2.379c-1.586-.59476-3.3703-.59476-4.75807-1.18953-2.5773-.99126-4.36156-3.37029-5.55109-5.74932a50.53383,50.53383,0,0,1-2.57729-7.73185,63.79561,63.79561,0,0,0-4.55983-9.91264,75.177,75.177,0,0,0-5.94758-7.93012c-1.78428-1.78426-4.75807-5.55108-7.33535-5.55108A3.34925,3.34925,0,0,0,211.0341,491.17775Z" className="color9859cd svgShape"></path><path fill="var(--primary-bg-color)" d="M138.87005,619.24912c0,2.77553,5.55108,4.95632,13.87771,6.34411,26.76413,4.75806,83.068,2.57727,83.068-6.34411,0,0,1.18952-126.68358-25.97112-138.97528-11.10216-4.95632-29.73793-10.11091-49.56322,1.78427a12.72791,12.72791,0,0,0-2.57728,1.98252C133.51723,506.04671,138.87005,619.24912,138.87005,619.24912Z" className="colorba93df svgShape"></path><path fill="#3e90b1" d="M138.87005,619.24912c0,2.77553,5.55108,4.95632,13.87771,6.34411,1.38777-3.76679,1.18951-7.93011,2.379-11.89517,2.18078-7.13711,8.72313-12.09344,15.46372-15.26549s14.076-5.15459,20.22179-9.31791,11.30041-11.10218,10.50741-18.4375c-.59477-5.35285-4.55982-9.91264-9.31788-12.4899s-10.30914-3.37033-15.662-3.37033c-3.3703,0-6.93885.19827-10.30915-.59473s-6.54234-2.97379-7.53361-6.34409c-1.586-5.55108,3.56855-10.30914,7.33536-14.6707a34.02859,34.02859,0,0,0,6.7406-12.29167,39.13868,39.13868,0,0,0-.59476-25.17811c-1.98253-5.35282-7.93011-10.50741-14.07595-12.09344C133.51723,506.04671,138.87005,619.24912,138.87005,619.24912Z" className="color9859cd svgShape"></path><path fill="#ffd1c4" d="M194.18261,476.11055v-8.92138s17.248,5.55109,20.6183-2.379,5.94759-48.96845-23.39384-45.00339c-29.14318,3.965-13.87771,41.2366-13.87771,41.2366v14.869C177.72761,481.26511,194.18261,481.26511,194.18261,476.11055Z" className="colorffd1c4 svgShape"></path><path fill="#5c5c9c" d="M177.72761,465.00838s9.11963-7.73185,6.93886-16.0585,4.55982-11.69691,5.94758-8.12838,5.35282-3.76679,4.75807-7.13711,28.35017,6.34408,29.73793-11.10218-22.60083-5.35282-28.94491-9.71438-24.78161-3.96505-30.13444,13.67944C160.47961,444.39009,177.72761,465.00838,177.72761,465.00838Z" className="color191937 svgShape"></path><path fill="#504a94" d="M187.83851,571.47016H302.82517a4.55764,4.55764,0,0,0,3.96506-2.57726l18.834-42.0296a4.41844,4.41844,0,0,0-3.96506-6.14585H257.227a4.1382,4.1382,0,0,0-3.96506,2.57729l-18.041,40.047H195.76862A7.9979,7.9979,0,0,0,187.83851,571.47016Z" className="color292561 svgShape"></path><path fill="#ffd1c4" d="M193.58784,561.16105s20.81656-15.46373,24.97986,5.74932c3.172,15.86023-27.95365,5.35285-27.95365,5.35285Z" className="colorffd1c4 svgShape"></path><path fill="var(--primary-bg-color)" d="M102.19327,574.64222c12.09343,21.21308,93.3771-.39653,93.3771-.39653l-2.379-15.06723-64.43218.99126,28.15191-27.55713c9.71439-9.51615,15.06722-22.79908,13.8777-36.28028-.59476-6.74059-2.77554-12.88644-7.73186-16.0585C147.39493,486.02319,87.91907,549.46408,102.19327,574.64222Z" className="colorba93df svgShape"></path><path fill="#f0f4f9" d="M683.27244 386.50026v4.95632a3.5537 3.5537 0 01-3.56853 3.56856H448.93755a3.55373 3.55373 0 01-3.56856-3.56856v-4.95632a3.55373 3.55373 0 013.56856-3.56856H679.70391A3.83314 3.83314 0 01683.27244 386.50026zM557.38186 413.66089v4.95633a3.55371 3.55371 0 01-3.56855 3.56855H448.93752a3.55372 3.55372 0 01-3.56856-3.56855v-4.95633a3.55372 3.55372 0 013.56856-3.56855H553.81328A3.55372 3.55372 0 01557.38186 413.66089z" className="colorf0f4f9 svgShape"></path><path fill="#e8e8e8" d="M631.33016,202.91809V314.53446a14.76516,14.76516,0,0,1-14.6707,14.6707H498.10424a14.63759,14.63759,0,0,1-14.6707-14.6707V202.91809a14.76518,14.76518,0,0,1,14.6707-14.67072H616.65946A14.63759,14.63759,0,0,1,631.33016,202.91809Z" className="colorc8e1ff svgShape"></path><path fill="#ffffff" d="M530.61773 281.42622L503.85359 263.187a5.65629 5.65629 0 01-1.586-1.38776 2.42337 2.42337 0 01-.59476-1.78428v-2.379a5.78915 5.78915 0 01.3965-1.78428 5.6558 5.6558 0 011.586-1.38776l26.76414-18.23926a1.98259 1.98259 0 012.37906 0 1.67586 1.67586 0 01.3965 1.18951v8.32662a2.4234 2.4234 0 01-.59476 1.78428 5.47333 5.47333 0 01-1.586 1.18951l-15.662 10.30914 15.662 10.30915c.59476.3965 1.18953.99126 1.586 1.18951a2.25119 2.25119 0 01.59476 1.586V280.435a2.81794 2.81794 0 01-.3965 1.18951 1.676 1.676 0 01-1.18953.3965A4.3342 4.3342 0 00530.61773 281.42622zM539.73737 290.3476a1.09144 1.09144 0 01-.3965-.99127 1.49856 1.49856 0 01.19827-.793L564.32072 228.691a2.80679 2.80679 0 012.77552-1.78428h6.93885a2.81788 2.81788 0 011.18953.3965c.19827.3965.39653.59476.39653.99126a1.49865 1.49865 0 01-.19826.793L550.443 288.95984a2.64635 2.64635 0 01-2.77552 1.78427H540.9269A2.81777 2.81777 0 01539.73737 290.3476zM581.96521 281.42622a1.67585 1.67585 0 01-.39653-1.18951v-8.32662a2.25134 2.25134 0 01.59473-1.586 5.474 5.474 0 011.586-1.18951l15.662-10.30915-15.662-10.30914a10.99615 10.99615 0 01-1.586-1.18951 2.42324 2.42324 0 01-.59473-1.78428v-8.32662a2.81759 2.81759 0 01.39653-1.18951 1.67593 1.67593 0 011.18953-.3965 7.7979 7.7979 0 011.18953.3965l26.76414 18.23926a5.8965 5.8965 0 011.586 1.38776c.39653.3965.39653.99127.39653 1.78428v2.379a3.198 3.198 0 01-.59473 1.78428 5.65654 5.65654 0 01-1.586 1.38776L584.14606 281.228a2.81788 2.81788 0 01-1.18953.3965C582.75821 281.82273 582.36174 281.62447 581.96521 281.42622z" className="colorfff svgShape"></path><rect width="317.998" height="10.706" x="303.816" y="692.206" fill="#f0f4f9" className="colorf0f4f9 svgShape"></rect><rect width="317.998" height="10.706" x="303.816" y="729.279" fill="#f0f4f9" className="colorf0f4f9 svgShape"></rect><rect width="130.649" height="10.706" x="303.816" y="766.353" fill="#f0f4f9" className="colorf0f4f9 svgShape"></rect></g></svg></g></svg>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        <div className="row mb-2  p-xl-5 p-0">
          <Col md={12}>
            <Row className="row justify-content-end mb-md-4">
              <div className="col-xl-5 ps-4 justify-self-start">
                <h5 className="text-dark tx-26 font-weight-semibold">Why Zem ?</h5>
                <p className="tx-14 tx-muted mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aliquam voluptas repellat eum beatae veniam, cumque eligendi earum praesentium, in corrupti reprehenderit cum architecto quisquam? Quibusdam quaerat veritatis perferendis iusto. !</p>
              </div>
              <Col xl={3}>
                <div className="motto-icon mi_1 tx-white mb-2">
                  <Card.Body className="  tx-center">
                    <span className="avatar avatar-lg rounded-circle mx-auto bg-white-transparent tx-white mb-2"><i className="fe fe-check-circle tx-20"></i></span>
                    <h5>Quality</h5>
                    <p className="mb-0 op-6">Labore duo et at ea accusam. Et guberg  consetetur.</p>
                  </Card.Body>
                </div>
              </Col>
              <Col xl={3}>
                <div className="motto-icon mi_2 tx-white mb-2">
                  <Card.Body className="  tx-center">
                    <span className="avatar avatar-lg rounded-circle mx-auto bg-white-transparent tx-white mb-2"><i className="fe fe-shield tx-20"></i></span>
                    <h5>Security</h5>
                    <p className="mb-0 op-6">Labore duo et at ea accusam. Et guberg  consetetur.</p>
                  </Card.Body>
                </div>
              </Col>
            </Row>
            <div className="row flex-1 justify-content-center ">
              <Col xl={3}>
                <div className="motto-icon mi_3 tx-white mb-2">
                  <Card.Body className="  tx-center">
                    <span className="avatar avatar-lg rounded-circle mx-auto bg-white-transparent tx-white mb-2"><i className="fe fe-edit-3 tx-20"></i></span>
                    <h5>Customize</h5>
                    <p className="mb-0 op-6">Labore duo et at ea accusam. Et guberg  consetetur.</p>
                  </Card.Body>
                </div>
              </Col>
              <Col xl={3}>
                <div className="motto-icon mi_4 tx-white mb-2">
                  <Card.Body className="  tx-center">
                    <span className="avatar avatar-lg rounded-circle mx-auto bg-white-transparent tx-white mb-2"><i className="fe fe-box tx-20"></i></span>
                    <h5>Advanced</h5>
                    <p className="mb-0 op-6">Labore duo et at ea accusam. Et guberg  consetetur.</p>
                  </Card.Body>
                </div>
              </Col>
            </div>
          </Col>
        </div>


        <Row className=" mb-5">
          <Col md={12}>
            <div className="card overflow-hidden">
              <Card.Body className="">
                <Row>
                  <Col xl={3}>
                    <div className="counter-status p-4 md-mb-0">
                      <div className="text-center mb-2">
                        <svg className="about-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#38cab3" d="M10.3125,16.09375a.99676.99676,0,0,1-.707-.293L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328l-6.1875,6.1875A.99676.99676,0,0,1,10.3125,16.09375Z" opacity=".99" /><path fill="#87dfd1" d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm5.207,7.61328-6.1875,6.1875a.99963.99963,0,0,1-1.41406,0L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328Z" /></svg>
                      </div>
                      <div className="text-center">
                        <h2 className="counter mb-2">256</h2>
                        <h6 className="mb-0 tx-muted">Completed Projects</h6>
                      </div>
                    </div>
                  </Col>
                  <Col xl={3}>
                    <div className="counter-status p-4 md-mb-0">
                      <div className="text-center mb-2">
                        <svg className="about-icons" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><circle cx="10" cy="8.5" r="5" fill="#fbb8c7" /><path fill="#fa95ac" d="M13.30884,12.22253C12.42566,13.00806,11.27496,13.5,10,13.5s-2.42566-0.49194-3.30884-1.27747C3.92603,13.48206,2,16.26324,2,19.5c0,0.00018,0,0.00037,0,0.00055C2.00012,20.05267,2.44788,20.50012,3,20.5h14c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1C18,16.26324,16.07397,13.48206,13.30884,12.22253z" /><path fill="#f74f75" d="M18.3335,13.5c-0.26526,0.0003-0.51971-0.10515-0.707-0.293l-1.3335-1.333c-0.38694-0.39399-0.38123-1.02706,0.01275-1.414c0.38897-0.38202,1.01228-0.38202,1.40125,0l0.62647,0.626l1.95953-1.96c0.39399-0.38694,1.02706-0.38123,1.414,0.01275c0.38202,0.38897,0.38202,1.01227,0,1.40125l-2.6665,2.667C18.85321,13.39485,18.59877,13.5003,18.3335,13.5z" /></svg>
                      </div>
                      <div className="text-center">
                        <h2 className="counter mb-2">256</h2>
                        <h6 className="mb-0 tx-muted">Completed Projects</h6>
                      </div>
                    </div>
                  </Col>
                  <Col xl={3}>
                    <div className="counter-status p-4 md-mb-0">
                      <div className="text-center mb-2">
                        <svg className="about-icons" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#ffd79c" d="M12,14.5c-3.26461,0.00094-6.4876-0.73267-9.43018-2.14648C2.22156,12.18802,1.99974,11.83676,2,11.45117V9.5c0.00181-1.65611,1.34389-2.99819,3-3h14c1.65611,0.00181,2.99819,1.34389,3,3v1.95215c0.00003,0.3859-0.22189,0.73741-0.57031,0.90332C18.48677,13.76762,15.26418,14.50051,12,14.5z M21,11.45215L21,11.45215z" /><path fill="#ffbd5a" d="M10,6.5v-1c0.00055-0.55206,0.44794-0.99945,1-1h2c0.55206,0.00055,0.99945,0.44794,1,1v1h2v-1c-0.00183-1.65613-1.34387-2.99817-3-3h-2c-1.65613,0.00183-2.99817,1.34387-3,3v1H10z" /><path fill="#ffe4bd" d="M21.42969,12.35547C18.48676,13.76764,15.26416,14.50049,12,14.5c-3.26459,0.00092-6.48761-0.73267-9.43018-2.14648C2.22156,12.18805,1.99976,11.83673,2,11.45117V18.5c0.00183,1.65613,1.34387,2.99817,3,3h14c1.65613-0.00183,2.99817-1.34387,3-3v-7.04785C22.00006,11.83807,21.77814,12.18958,21.42969,12.35547z" /><path fill="#ffbd5a" d="M8,15.5c-0.55214,0.00014-0.99986-0.44734-1-0.99948C7,14.50035,7,14.50017,7,14.5v-2c0-0.55229,0.44772-1,1-1s1,0.44771,1,1v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C8.00035,15.5,8.00017,15.5,8,15.5z M16,15.5c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052v-2c0-0.55229,0.44771-1,1-1c0.55228,0,1,0.44771,1,1v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C16.00035,15.5,16.00017,15.5,16,15.5z" /></svg>
                      </div>
                      <div className="text-center">
                        <h2 className="counter mb-2">256</h2>
                        <h6 className="mb-0 tx-muted">Completed Projects</h6>
                      </div>
                    </div>
                  </Col>
                  <Col xl={3}>
                    <div className="counter-status p-4 md-mb-0">
                      <div className="text-center mb-2">
                        <svg className="about-icons" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><circle cx="12" cy="9.25" r="6" fill="#b8e6f9" /><path fill="#94daf6" d="M19.57391,17.01288L17.00854,12.56l-0.00873,0.00433C15.92511,14.18231,14.08795,15.25,12,15.25c-0.1286,0-0.25439-0.01123-0.38098-0.01923l0.38953,0.66925l2.37408,4.11218c0.13806,0.23914,0.44385,0.32111,0.68304,0.18304c0.07391-0.04266,0.13562-0.10358,0.17938-0.17682l1.32349-2.21844l2.57941-0.0376c0.27612-0.00397,0.4967-0.23108,0.49268-0.5072C19.6394,17.17004,19.61646,17.08667,19.57391,17.01288z" /><path fill="#4ec2f0" d="M11.61896,15.23071c-1.92963-0.12152-3.61176-1.14911-4.62012-2.66864l-2.56421,4.45081c-0.04248,0.07379-0.06549,0.15717-0.06671,0.24231c-0.00397,0.27612,0.21661,0.50323,0.49274,0.5072L7.44,17.79999l1.32355,2.21844c0.0437,0.07324,0.10547,0.13416,0.17938,0.17682c0.23914,0.13806,0.54492,0.05609,0.68298-0.18304L12,15.90002l0.00427-0.00732l-0.38525-0.66193L11.61896,15.23071z" /></svg>
                      </div>
                      <div className="text-center">
                        <h2 className="counter mb-2">256</h2>
                        <h6 className="mb-0 tx-muted">Completed Projects</h6>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </div>
          </Col>
        </Row>


        <Row className=" mb-5">
          <Col xl={3} lg={6} md={6} sm={12} >
            <Card className="card p-3">
              <Card.Body className="">
                <div className="mb-3 text-center about-team">
                  <img className="rounded-pill" src={Allimages("User1")} alt="image" />
                </div>
                <div className="tx-16 text-center font-weight-semibold">
                  Rosen Berg
                </div>
                <div className="tx-14 text-center tx-muted mb-3">
                  Chief Manager
                </div>
                <div className="text-center tx-14 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident !</div>
                <p className="text-center mb-0"><i className="fe fe-facebook tx-primary me-3"></i><i className="fe fe-instagram tx-secondary me-3"></i><i className="fe fe-globe tx-info me-3"></i></p>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} lg={6} md={6} sm={12} >
            <Card className="card p-3">
              <Card.Body className="">
                <div className="mb-3 text-center about-team">
                  <img className="rounded-pill" src={Allimages("User2")} alt="image" />
                </div>
                <div className="tx-16 text-center font-weight-semibold">
                  Mclaren mcannen
                </div>
                <div className="tx-14 text-center tx-muted mb-3">
                  Sales Manager
                </div>
                <div className="text-center tx-14 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident !</div>
                <p className="text-center mb-0"><i className="fe fe-facebook tx-primary me-3"></i><i className="fe fe-instagram tx-secondary me-3"></i><i className="fe fe-globe tx-info me-3"></i></p>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} lg={6} md={6} sm={12} >
            <Card className="card p-3">
              <Card.Body className="">
                <div className="mb-3 text-center about-team">
                  <img className="rounded-pill" src={Allimages("User3")} alt="image" />
                </div>
                <div className="tx-16 text-center font-weight-semibold">
                  Shimpa Craig
                </div>
                <div className="tx-14 text-center tx-muted mb-3">
                  Author & writer
                </div>
                <div className="text-center tx-14 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident !</div>
                <p className="text-center mb-0"><i className="fe fe-facebook tx-primary me-3"></i><i className="fe fe-instagram tx-secondary me-3"></i><i className="fe fe-globe tx-info me-3"></i></p>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} lg={6} md={6} sm={12} >
            <Card className="card p-3">
              <Card.Body className="">
                <div className="mb-3 text-center about-team">
                  <img className="rounded-pill" src={Allimages("User4")} alt="image" />
                </div>
                <div className="tx-16 text-center font-weight-semibold">
                  Limo Peter
                </div>
                <div className="tx-14 text-center tx-muted mb-3">
                  Operations Head
                </div>
                <div className="text-center tx-14 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident !</div>
                <p className="text-center mb-0"><i className="fe fe-facebook tx-primary me-3"></i><i className="fe fe-instagram tx-secondary me-3"></i><i className="fe fe-globe tx-info me-3"></i></p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </div>
    </Fragment>
  )
}

export default Aboutus