import { Fragment, useState } from 'react';
import Pageheader from '../../components/common/pageheader/pageheader';
import { Basicmarkers, Custommarkers, Europemap, MapAnnotation, Shapeworldmap, WorldMap } from '../../components/common/mapsdata/mapsdata';
import { Card, Col, Row } from 'react-bootstrap';


function Simplemaps() {
  const [content, setContent] = useState("");

  return (
    <Fragment>
      <Pageheader titles={'Simplemaps'} active={'Simplemaps'} Subtite={'Maps'} />

      <Row className="row-sm">
        <Col lg={6}>
          <Card className="mg-b-20" id="map">
            <div className='card-header'>
              <div className='card-title'>Vector Map - World</div>
            </div>
            <Card.Body className="overflow-hidden">
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                application.
              </p>
              <div className="sm:ht-300 overflow-hidden
              " id="vmap">
                <WorldMap setTooltipContent={setContent} />
                {content}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mg-b-20" id="map1">
            <div className='card-header'>
              <div className='card-title'>Graticule Map</div>
            </div>
            <Card.Body className="overflow-hidden"> 
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                application.
              </p>
              <div className="sm:ht-300 overflow-hidden
              " id="vmap3">
                <Shapeworldmap />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mg-b-20" id="map2">
            <div className='card-header'>
              <div className='card-title'>Annotation Map</div>
            </div>
            <Card.Body className="overflow-hidden"> 
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                application.
              </p>
              <div className="sm:ht-300 overflow-hidden
              " id="vmap2">
                <MapAnnotation />
              </div>
            </Card.Body>

          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mg-b-20" id="map6">
           <div className='card-header'>
              <div className='card-title'>Europe Map</div>
            </div>
            <Card.Body className="overflow-hidden">
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                application.
              </p>
              <div className="sm:ht-300 overflow-hidden
              " id="vmap7">
                <Europemap />
              </div>
            </Card.Body>

          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mg-b-20" id="map7">
            <div className='card-header'>
              <div className='card-title'>Basicmarkers Map</div>
            </div>
            <Card.Body className="overflow-hidden">
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                application.
              </p>
              <div className="sm:ht-300 overflow-hidden
              " id="vmap8">
                <Basicmarkers />
              </div>
            </Card.Body>

          </Card>
        </Col>
        <Col lg={6}>
          <div className="card" id="map8">
            <div className='card-header'>
              <div className='card-title'>Custommarkers Map</div>
            </div>
            <Card.Body className="overflow-hidden">
              <p className="">
                It is Very Easy to Customize and it uses in your website
                application.
              </p>
              <div className="sm:ht-300 overflow-hidden
              " id="vmap9">
                <Custommarkers />
              </div>
            </Card.Body>

          </div>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Simplemaps