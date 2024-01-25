import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import ReactEcharts from "echarts-for-react";
import * as echarts from "../../../components/common/chartsdata/chartsdata";
import { Card, Col, Row } from "react-bootstrap";

function Echarts() {
  return (
    <Fragment>
      <Pageheader titles={"ECHARTS"} active={"Echarts"} Subtite={"Charts"} />
      <Row>
        <Col lg={6} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Data Attributes</div>
            </div>
            <Card.Body>

              <ReactEcharts
                className="ht-300"
                option={echarts.Echart1.option}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Data Attributes</div>
            </div>
            <Card.Body>
              <ReactEcharts option={echarts.Echart2.option} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Bar Chart</div>
            </div>
            <Card.Body>

              <ReactEcharts option={echarts.Echart3.option} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Vertical Bar Chart</div>
            </div>
            <Card.Body>
              <ReactEcharts option={echarts.Echart4.option} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Line Chart</div>
            </div>
            <Card.Body>
              <ReactEcharts option={echarts.Echart5.option} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Vertical Line Chart</div>
            </div>
            <Card.Body>
              <ReactEcharts option={echarts.Echart6.option} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Data Attributes</div>
            </div>
            <Card.Body>
              <ReactEcharts option={echarts.Echart7.option} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Data Attributes</div>
            </div>
            <Card.Body>
              <ReactEcharts option={echarts.Echart8.option} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <div className="col-lg-12 col-md-12">
          <Card>
            <div className="card-header">
              <div className="card-title">Data Attributes</div>
            </div>
            <Card.Body>
              <ReactEcharts option={echarts.Echart9.option} />
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Fragment>
  );
}

export default Echarts;
