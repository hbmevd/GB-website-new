import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Col, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Allimages from '../../../components/common/imagesdata/imagesdata';

//gallery
export const LightGallery = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Row className="masonry ">


                <Col xl={3} lg={4} sm={6}>
                    <img src={Allimages('Photos1')} alt='media1' onClick={() => setOpen(true)} className="js-img-viewer mb-4 rounded-1" />
                </Col>

                <Col xl={3} lg={4} sm={6}>
                    <img src={Allimages('Photos2')} alt='media2' onClick={() => setOpen(true)} className="js-img-viewer mb-4 rounded-1" />
                </Col>

                <Col xl={3} lg={4} sm={6}>
                    <img src={Allimages('Photos3')} alt='media3' onClick={() => setOpen(true)} className="js-img-viewer mb-4 rounded-1" />
                </Col>

                <Col xl={3} lg={4} sm={6}>
                    <img src={Allimages('Photos4')} alt='media4' onClick={() => setOpen(true)} className="js-img-viewer mb-4 rounded-1" />
                </Col>

                <Col xl={3} lg={4} sm={6}>
                    <img src={Allimages('Photos5')} alt='media5' onClick={() => setOpen(true)} className="js-img-viewer mb-4 rounded-1" />
                </Col>

                <Col xl={3} lg={4} sm={6}>
                    <img src={Allimages('Photos6')} alt='media12' onClick={() => setOpen(true)} className="js-img-viewer mb-4 rounded-1" />
                </Col>

                <Col xl={3} lg={4} sm={6}>
                    <img src={Allimages('Photos7')} alt='media7' onClick={() => setOpen(true)} className="js-img-viewer mb-4 rounded-1" />
                </Col>

                <Col xl={3} lg={4} sm={6}>
                    <img src={Allimages('Photos8')} alt='media8' onClick={() => setOpen(true)} className="js-img-viewer mb-4 rounded-1" />
                </Col>

                <Col xl={3} lg={4} sm={6}>
                    <img src={Allimages('Photos9')} alt='media9' onClick={() => setOpen(true)} className="js-img-viewer mb-4 rounded-1" />
                </Col>

                <Col xl={3} lg={4} sm={6}>
                    <img src={Allimages('Photos10')} alt='media10' onClick={() => setOpen(true)} className="js-img-viewer mb-4 rounded-1" />
                </Col>

                <Col xl={3} lg={4} sm={6}>
                    <img src={Allimages('Photos11')} alt='media11' onClick={() => setOpen(true)} className="js-img-viewer mb-4 rounded-1" />
                </Col>

                <Col xl={3} lg={4} sm={6}>
                    <img src={Allimages('Photos12')} alt='media12' onClick={() => setOpen(true)} className="js-img-viewer mb-4 rounded-1" />
                </Col>

            </Row>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: Allimages('Photos1') }, { src: Allimages('Photos2') }, { src: Allimages('Photos3') }, { src: Allimages('Photos4') },
                { src: Allimages('Photos5') }, { src: Allimages('Photos6') }, { src: Allimages('Photos7') }, { src: Allimages('Photos8') }, { src: Allimages('Photos9') },
                { src: Allimages('Photos10') }, { src: Allimages('Photos11') }, { src: Allimages('Photos12') },

                ]}
            />
        </>
    );
};

// blogdetails
export const Gallerylist = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Row>
                <Col xl={4} lg={4} sm={6} >
                    <div className="brick">
                        <img src={Allimages('photo1')} alt='media1' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <img src={Allimages('photo2')} alt='media2' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <img src={Allimages('photo3')} alt='media3' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <img src={Allimages('photo4')} alt='media4' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <img src={Allimages('photo5')} alt='media5' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <img src={Allimages('photo6')} alt='media6' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <img src={Allimages('photo7')} alt='media7' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <img src={Allimages('photo8')} alt='media8' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <img src={Allimages('photo9')} alt='media9' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </div>
                </Col>

            </Row>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: Allimages('photo1') }, { src: Allimages('photo2') }, { src: Allimages('photo3') }, { src: Allimages('photo4') },
                { src: Allimages('photo5') }, { src: Allimages('photo6') }, { src: Allimages('photo7') }, { src: Allimages('photo8') }, { src: Allimages('photo9') }

                ]}
            />
        </>
    );
};

//filedetails

export const LightGallery1 = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <ul id="lightgallery" className="list-unstyled row mb-0 px-2">
                <Col xl={3} md={4} sm={4} as="li" >
                    <Link to="#">
                        <img src={Allimages('photo1')} alt='media1' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </Link>
                </Col>
                <Col xl={3} md={4} sm={4} as="li" >
                    <Link to="#">
                        <img src={Allimages('photo2')} alt='media2' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </Link>
                </Col>
                <Col xl={3} md={4} sm={4} as="li" >
                    <Link to="#">
                        <img src={Allimages('photo3')} alt='media3' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </Link>
                </Col>
                <Col xl={3} md={4} sm={4} as="li" >
                    <Link to="#">
                        <img src={Allimages('photo4')} alt='media4' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </Link>
                </Col>
                <Col xl={3} md={4} sm={4} as="li" >
                    <Link to="#">
                        <img src={Allimages('photo5')} alt='media5' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </Link>
                </Col>
                <Col xl={3} md={4} sm={4} as="li" >
                    <Link to="#">
                        <img src={Allimages('photo6')} alt='media6' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </Link>
                </Col>
                <Col xl={3} md={4} sm={4} as="li" >
                    <Link to="#">
                        <img src={Allimages('photo7')} alt='media7' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </Link>
                </Col>
                <Col xl={3} md={4} sm={4} as="li" >
                    <Link to="#">
                        <img src={Allimages('photo8')} alt='media8' onClick={() => setOpen(true)} className="img-responsive br-5" />
                    </Link>
                </Col>

            </ul>
            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: Allimages('photo1') }, { src: Allimages('photo2') }, { src: Allimages('photo3') }, { src: Allimages('photo4') },
                { src: Allimages('photo5') }, { src: Allimages('photo6') }, { src: Allimages('photo7') }, { src: Allimages('photo8') }

                ]}
            />
        </>
    );
};
