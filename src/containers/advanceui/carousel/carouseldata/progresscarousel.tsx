// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Allimages from '../../../../components/common/imagesdata/imagesdata';
import { useState } from 'react';

export default function Progressbarcarousel() {
    const [isRTL, _setisRTL] = useState(false);

    return (
        <>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                dir={isRTL ? 'ltr' : 'rtl'}

                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
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
