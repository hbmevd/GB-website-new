
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Allimages from '../../../../components/common/imagesdata/imagesdata';
import { useState } from 'react';

export default function Multislider() {
  const [isRTL, _setisRTL] = useState(false);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        dir={isRTL ? 'ltr' : 'rtl'}

        modules={[Autoplay]}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}

        className="mySwiper"
      >
        <SwiperSlide>
          <img alt="img" className="d-block w-100" src={Allimages("Photos1")} /></SwiperSlide>
        <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos2")} /></SwiperSlide>
        <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos3")} /></SwiperSlide>
        <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos4")} /></SwiperSlide>
        <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos5")} /></SwiperSlide>
        <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos6")} /></SwiperSlide>
        <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos7")} /></SwiperSlide>
        <SwiperSlide><img alt="img" className="d-block w-100" src={Allimages("Photos8")} /></SwiperSlide>
      </Swiper>
    </>
  );
}
