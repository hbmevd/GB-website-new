import { Fragment } from 'react'
// import Allimages from '../../../components/common/imagesdata/imagesdata'
import Pageheader from '../../../components/common/pageheader/pageheader'
import Defaultcarousel from './carouseldata/default'
import Withcontrols from './carouseldata/withcontrols'
import Paginationcarousel from './carouseldata/paginationcarousel'
import Progressbarcarousel from './carouseldata/progresscarousel'
// import Carouselwithcaption from './carouseldata/fadecarousel'
import Nestedcarousel from './carouseldata/nestedcarousel'
import Fadecarousel from './carouseldata/fadecarousel'
import Multislider from './carouseldata/multiplecards'
import { Card, Col, Row } from 'react-bootstrap'

function Carousel() {
  return (
    <Fragment>
      <Pageheader titles={'CAROUSEL'} active={'Carousel'} Subtite={'Advanced UI'} />
      <Row>

        <Col xl={4} lg={6} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Static Carousel</div>
            </div>
            <Card.Body>

              <Defaultcarousel />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4} lg={6} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">With Controls</div>
            </div>
            <Card.Body>
              <Withcontrols />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4} lg={6} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Custom Controls</div>
            </div>
            <Card.Body>
              <Paginationcarousel />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4} lg={6} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Progressbar</div>
            </div>
            <Card.Body>
              <Progressbarcarousel />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4} lg={6} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Nested carousel</div>
            </div>
            <div className='card-body'>
              <Nestedcarousel />

            </div>
          </Card>
        </Col>

        <Col xl={4} lg={6} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Fade Animate Carousel</div>
            </div>
            <Card.Body>

              <Fadecarousel />
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Multi Slider</div>
            </div>
            <Card.Body>
              <p className="card-subtitle">Multislider is a jQuery powered slideshow that specializes in showing more than one slide at a time. There's no need to find messy CSS and JS work arounds for other single-slide solutions. Multislider allows the developer to focus fully on each individual slide as it's own component, and then displays as many slides as you decide in a manner that is fluid, consistent, and dymanic.</p>
              <Multislider />
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Fragment>
  )
}

export default Carousel