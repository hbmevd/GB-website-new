import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import * as chart from "../../../components/common/chartsdata/chartsdata";

function Chartsjs() {
  return (
    <Fragment>
      <Pageheader titles={"CHARTSJS"} active={"Chartsjs"} Subtite={"Charts"} />

      <Row className="row-sm">
        <Col sm={12} md={6}>
          <Card>
            <div className="card-header">
              <div className="card-title">Line Chart</div>
            </div>
            <Card.Body>
              <div>
                <Line
                  options={chart.Linechart}
                  data={chart.linechartdata}
                  height={130}
                  id="chartLine1"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <div className="card-header">
              <div className="card-title">Area Chart</div>
            </div>
            <Card.Body>
              <div>
               
                <Line
                  options={chart.Areachart}
                  data={chart.areachart}
                  height={130}
                  className="barchart"
                  id="chartArea1"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row row-sm">
        <Col sm={12} md={6}>
          <Card>
            <div className="card-header">
              <div className="card-title">Stacked Bar Chart</div>
            </div>
            <Card.Body>
              <div>
                <Bar
                  options={chart.Barchart1}
                  data={chart.barchart1data}
                  height={130}
                  className="barchart"
                  id="chartStacked1"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <div className="card-header">
              <div className="card-title">Stacked Bar Chart</div>
            </div>
            <Card.Body>
              <div>
                <Bar
                  options={chart.Horizontalbarchart}
                  data={chart.Horizontalbarchartdata}
                  height={130}
                  className="barchart"
                  id="chartStacked2"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row row-sm">
        <Col sm={12} md={6} xl={4}>
          <Card>
            <div className="card-header">
              <div className="card-title">Solid Color</div>
            </div>
            <Card.Body>
              <div>
                <Bar
                  options={chart.SolidColor}
                  data={chart.SolidColordata}
                  height={130}
                  className="barchart"
                  id="chartBar1"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col
          sm={12}
          md={6}
          xl={4}
          className="col-sm-12 col-md-6 col-xl-4 mg-t-20 mg-md-t-0"
        >
          <Card>
            <div className="card-header">
              <div className="card-title">With Transparency</div>
            </div>
            <Card.Body>
              <div>
                <Bar
                  options={chart.Transparency}
                  data={chart.Transparencydata}
                  height={130}
                  className="barchart"
                  id="chartBar2"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col
          sm={12}
          md={6}
          xl={4}
          className="mg-t-20 mg-xl-t-0"
        >
          <Card>
            <div className="card-header">
              <div className="card-title">Using Gradient Color</div>
            </div>
            <Card.Body>
              <div>
                <Bar
                  options={chart.GradientColor}
                  data={chart.GradientColordata}
                  height={130}
                  className="barchart"
                  id="chartBar3"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-sm">
        <Col sm={12} md={6}>
          <Card>
            <div className="card-header">
              <div className="card-title">Horizontal Bar Chart</div>
            </div>
            <Card.Body>
              <div>
                <Bar
                  options={chart.Horizontalbarchart1}
                  data={chart.Horizontalbarchartdata1}
                  height={130}
                  className="barchart"
                  id="chartBar4"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <div className="card-header">
              <div className="card-title">Horizontal Bar Chart</div>
            </div>
            <Card.Body>
              <div>
                <Bar
                  options={chart.Horizontalbarchart2}
                  data={chart.Horizontalbarchartdata2}
                  height={130}
                  className="barchart"
                  id="chartBar5"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-sm">
        <Col sm={12} md={6}>
          <Card className=" mg-b-md-20 overflow-hidden">
            <div className="card-header">
              <div className="card-title">Pie Chart</div>
            </div>
            <Card.Body>
              <div>
                <Pie data={chart.piechart} className="mx-auto ht-230 w-230" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <div className="card-header">
              <div className="card-title">Donut Chart</div>
            </div>
            <Card.Body>
              <div>
                <Doughnut
                  data={chart.dchart}
                  id="chartDonut"
                  className="chartjs-render-monitor  ht-230 w-230 mx-auto"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Chartsjs;
