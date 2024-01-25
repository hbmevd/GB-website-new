import { Fragment } from 'react'
import Pageheader from '../../../components/common/pageheader/pageheader'
import { LightGallery } from './lightgallerycomponent'
import { Col, Pagination, Row } from 'react-bootstrap'

function Gallery() {
  return (
    <Fragment>
      <Pageheader titles={'GALLERY'} active={'Gallery'} Subtite={'Pages'} />

      <LightGallery />
      <Row className=" mb-5">
        <Col md={6} className="mt-1 d-none d-md-block text-dark">
          1 - 10 of 234 photos
        </Col>
        <Pagination className="pagination product-pagination ms-auto float-end">
          <Pagination.Item className="page-item page-prev disabled">
            Prev
          </Pagination.Item>
          <Pagination.Item className="page-item active">1</Pagination.Item>
          <Pagination.Item className="page-item">2</Pagination.Item>
          <Pagination.Item className="page-item">3</Pagination.Item>
          <Pagination.Item className="page-item">4</Pagination.Item>
          <Pagination.Item className="page-item page-next">Next</Pagination.Item>
        </Pagination>
      </Row>

    </Fragment>
  )
}

export default Gallery