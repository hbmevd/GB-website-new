
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Allimages from "../../../../components/common/imagesdata/imagesdata";
import { useState } from "react";

function Defaultcarousel() {
    const [isRTL, _setisRTL] = useState(false);

    return (
        <>
            <Swiper className="mySwiper"
                dir={isRTL ? 'ltr' : 'rtl'}
            >
                <SwiperSlide>
                    <img alt="img" className="d-block w-100" src={Allimages("Photos1")} />
                </SwiperSlide>
                <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos2")} /></SwiperSlide>
                <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos3")} /></SwiperSlide>
                <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos4")} /></SwiperSlide>

            </Swiper>
        </>
    );
}
export default Defaultcarousel;
