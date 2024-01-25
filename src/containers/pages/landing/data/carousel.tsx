
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Parallax, Pagination, Navigation } from 'swiper/modules';
import Allimages from '../../../../components/common/imagesdata/imagesdata';

export default function Landingcarousel() {
    return (
        <>
            <Swiper

                speed={600}
                parallax={false}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>


                    <div className="review d-flex" data-swiper-parallax="-100">
                        <div className="title" data-swiper-parallax="-300">
                            <div className="me-3">
                                <div className="avatar"> <img src={Allimages("User11")} alt="img" className="rounded-circle" /></div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <p className="sub-title-1 tx-20 invert mb-1">Great Work!</p>
                            <p className="invert op-8 tx-15">"Aliquyam et et tempor clita ipsum stet, invidunt diam at et elitr, ipsum ipsum lorem stet et justo et sea."</p>
                            <p className="invert font-weight-semibold mb-1 tx-15">- Louis Abraham</p>
                            <p className="mb-0 invert op-8"><i>UI Developer</i></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>


                    <div className="review d-flex" data-swiper-parallax="-100">
                        <div className="title" data-swiper-parallax="-300">
                            <div className="me-3">
                                <div className="avatar"> <img src={Allimages("User11")} alt="img" className="rounded-circle" /></div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="sub-title-1 tx-20 invert mb-1">Great Work!</p>
                            <p className="invert op-8 tx-15">"Aliquyam et et tempor clita ipsum stet, invidunt diam at et elitr, ipsum ipsum lorem stet et justo et sea."</p>
                            <p className="invert font-weight-semibold mb-1 tx-15">- Louis Abraham</p>
                            <p className="mb-0 invert op-8"><i>UI Developer</i></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>


                    <div className="review d-flex" data-swiper-parallax="-100">
                        <div className="title" data-swiper-parallax="-300">
                            <div className="me-3">
                                <div className="avatar"> <img src={Allimages("User11")} alt="img" className="rounded-circle" /></div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="sub-title-1 tx-20 invert mb-1">Great Work!</p>
                            <p className="invert op-8 tx-15">"Aliquyam et et tempor clita ipsum stet, invidunt diam at et elitr, ipsum ipsum lorem stet et justo et sea."</p>
                            <p className="invert font-weight-semibold mb-1 tx-15">- Louis Abraham</p>
                            <p className="mb-0 invert op-8"><i>UI Developer</i></p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
