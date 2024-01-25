import { Fragment } from 'react'
import Pageheader from '../../../components/common/pageheader/pageheader'
import { Card, Col, Row } from 'react-bootstrap'
import { Apexcharts1, Apexcharts2, Apexcharts3, Apexcharts4 } from '../../../components/common/chartsdata/chartsdata';

function Apexcharts() {
  return (
    <Fragment>
      <Pageheader titles={"APEXCHARTS"} active={'Apexcharts'} Subtite={'Charts'} />
      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">STACKED BAR CHART</h3>
            </Card.Header>
            <Card.Body className="apexchart apexchart1">
              <Apexcharts1 />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">STACKED AREA CHART</h3>
            </Card.Header>
            <Card.Body className="apexchart apexchart1">
              <Apexcharts2 />

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">LINE , COLUMN AND AREA CHART</h3>
            </Card.Header>
            <Card.Body className="apexchart apexchart1">
              <Apexcharts3 />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Pie Chart4</h3>
            </Card.Header>
            <Card.Body className="apexchart apexchart1 pie-chart4">
              <Apexcharts4 />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Apexcharts