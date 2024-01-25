import { Fragment } from 'react'
import Pageheader from '../../../components/common/pageheader/pageheader'
import Example from '../data/exampleo1'
import Example02 from '../data/example02'
import Example03 from '../data/example03'

import ExampleWithReactQueryProvider from '../data/example05'
import { Card, Col, Row } from 'react-bootstrap'

function Datatable() {
  return (
    <Fragment>
      <Pageheader titles={'DATA TABLES'} active={'Datatable'} Subtite={'Table'} />

      <Row className="row-sm data-table">
        <Col lg={12}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>Basic DataTable</div>
            </div>
            <Card.Body>
              <div className="table-responsive">

                <Example />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row className="row-sm data-table">
        <Col lg={12}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>Responsive DataTable</div>
            </div>
            <Card.Body>
              <div className="table-responsive ">

                <Example02 />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row className="row-sm data-table">
        <Col lg={12}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>Modal DataTable</div>
            </div>
            <Card.Body>
              <div className="table-responsive ">

                <Example03 />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row-sm data-table">
        <Col lg={12}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>Deletable Row DataTable</div>
            </div>
            <Card.Body>
              <div className="table-responsive deleted-table">

                <ExampleWithReactQueryProvider />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>





    </Fragment>
  )
}

export default Datatable