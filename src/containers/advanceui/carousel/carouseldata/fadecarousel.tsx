
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Allimages from '../../../../components/common/imagesdata/imagesdata';
import { useState } from 'react';

export default function Fadecarousel() {
    const [isRTL, _setisRTL] = useState(false);
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                dir={isRTL ? 'ltr' : 'rtl'}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"

            >
                <SwiperSlide>
                    <img alt="img" className="d-block w-100" src={Allimages("Photos1")} /></SwiperSlide>
                <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos2")} /></SwiperSlide>
                <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos3")} /></SwiperSlide>
                <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos4")} /></SwiperSlide>
            </Swiper>
        </>
    );
}
