// import React from 'react'

import { Fragment, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
// import './styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import Allimages from "../../../../components/common/imagesdata/imagesdata";
function Withcontrols() {
    const [isRTL, _setisRTL] = useState(false);

    return (
        <Fragment>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
                dir={isRTL ? 'ltr' : 'rtl'}

            >
                <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos1")} /></SwiperSlide>
                <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos2")} /></SwiperSlide>
                <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos3")} /></SwiperSlide>
                <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos4")} /></SwiperSlide>
            </Swiper>
        </Fragment>
    )
}

export default Withcontrols