import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Col, Row } from 'react-bootstrap';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Allimages from '../../../../../components/common/imagesdata/imagesdata';
export const Gallerylist = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Row className="masonry">
        <Col xl={4} lg={4} sm={6} >
          <div className="brick">
            <img src={Allimages('Photos1')} alt='media1' onClick={() => setOpen(true)} className="img-responsive br-5" />
          </div>
        </Col>
        <Col xl={4} lg={4} sm={6}>
          <div className="brick">
            <img src={Allimages('Photos2')} alt='media2' onClick={() => setOpen(true)} className="img-responsive br-5" />
          </div>
        </Col>
        <Col xl={4} lg={4} sm={6}>
          <div className="brick">
            <img src={Allimages('Photos3')} alt='media3' onClick={() => setOpen(true)} className="img-responsive br-5" />
          </div>
        </Col>
        <Col xl={4} lg={4} sm={6}>
          <div className="brick">
            <img src={Allimages('Photos4')} alt='media4' onClick={() => setOpen(true)} className="img-responsive br-5" />
          </div>
        </Col>
        <Col xl={4} lg={4} sm={6}>
          <div className="brick">
            <img src={Allimages('Photos5')} alt='media5' onClick={() => setOpen(true)} className="img-responsive br-5" />
          </div>
        </Col>
        <Col xl={4} lg={4} sm={6}>
          <div className="brick">
            <img src={Allimages('Photos6')} alt='media6' onClick={() => setOpen(true)} className="img-responsive br-5" />
          </div>
        </Col>


      </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
        }}
        slides={[{ src: Allimages('Photos1') }, { src: Allimages('Photos2') }, { src: Allimages('Photos3') }, { src: Allimages('Photos4') },
        { src: Allimages('Photos5') }, { src: Allimages('Photos6') },

        ]}
      />
    </>
  );
};