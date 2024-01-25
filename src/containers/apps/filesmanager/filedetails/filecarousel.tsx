
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {  NavLink } from "react-router-dom";

import { Card } from "react-bootstrap";
import Allimages from "../../../../components/common/imagesdata/imagesdata";

export default function ReactColor() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          speed: 3000,
          autoplay: true
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 3000,
          autoplay: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          speed: 3000,
          autoplay: true
        }
      }
    ]

  };
  return (
    <>
      <Card.Body >
        <div className='swiper-slider'>
          <Slider {...settings}>

            <div className="item">
              <div className="slicksliders">
                <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                  <NavLink to="#">
                    <img

                      src={Allimages('Photos30')}
                    />
                  </NavLink>
                </div>
                <Card.Footer className="bd-t-0 py-3"> <div className="d-flex"> <div> <h6 className="mb-0">221.jpg</h6> </div> <div className="ms-auto"> <h6 className="tx-muted mb-0">120 KB</h6> </div> </div> </Card.Footer>
              </div>
            </div>
            <div className="item">
              <div className="slicksliders">
                <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                  <NavLink to="#">
                    <img className=""
                      alt=""
                      src={Allimages('Photos31')}
                    />
                  </NavLink>
                </div>
                <Card.Footer className=" bd-t-0 py-3"> <div className="d-flex"> <div> <h6 className="mb-0">121.jpg</h6> </div> <div className="ms-auto"> <h6 className="tx-muted mb-0">68 KB</h6> </div> </div> </Card.Footer>

              </div>
            </div>
            <div className="item">
              <div className="slicksliders">
                <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                  <NavLink to="#">
                    <img className=""

                      src={Allimages('Photos32')}
                    />
                  </NavLink>
                </div>
                <Card.Footer className=" bd-t-0 py-3"> <div className="d-flex"> <div> <h6 className="mb-0">111.jpg</h6> </div> <div className="ms-auto"> <h6 className="tx-muted mb-0">56 KB</h6> </div> </div> </Card.Footer>

              </div>
            </div>
            <div className="item">
              <div className="slicksliders">
                <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                  <NavLink to="#">
                    <img className=""
                      alt=""
                      src={Allimages('Photos33')}
                    />
                  </NavLink>
                </div>
                <Card.Footer className=" bd-t-0 py-3"> <div className="d-flex"> <div> <h6 className="mb-0">161.jpg</h6> </div> <div className="ms-auto"> <h6 className="tx-muted mb-0">86 KB</h6> </div> </div> </Card.Footer>

              </div>
            </div>
            <div className="item">
              <div className="slicksliders">
                <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                  <NavLink to="#">
                    <img className=""
                      alt=""
                      src={Allimages('Photos34')}
                    />
                  </NavLink>
                </div>
                <Card.Footer className=" bd-t-0 py-3"> <div className="d-flex"> <div> <h6 className="mb-0">131.jpg</h6> </div> <div className="ms-auto"> <h6 className="tx-muted mb-0">76 KB</h6> </div> </div> </Card.Footer>

              </div>
            </div>


          </Slider>
        </div>
      </Card.Body>
    </>
  );
}
