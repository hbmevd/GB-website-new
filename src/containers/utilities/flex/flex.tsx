import { Fragment } from 'react'
import Pageheader from '../../../components/common/pageheader/pageheader'
import { Card, Col, Row } from 'react-bootstrap'

function Flex() {
  return (
    <Fragment>
      <Pageheader titles={'Flex'} active={'Flex'} Subtite={'Utilities'} />

      <Row className="row row-sm">
        <Col md={12} xl={12} xs={12} sm={12}>

          <Card>
            <div className="card-header">
              <div className="card-title">Enable Flex</div>
            </div>
            <Card.Body>
              <div className="d-flex pd-10 bg-gray-200 br-5">
                I'm a flexbox container!
              </div>
            </Card.Body>
          </Card>
        </Col>



        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Direction</div>
            </div>
            <Card.Body>
              <div>
                <div className="d-flex flex-row border p-3 br-5  mg-b-20">
                  <div className="pd-10 bg-gray-200">
                    Flex item 1
                  </div>
                  <div className="pd-10 bg-gray-300">
                    Flex item 2
                  </div>
                  <div className="pd-10 bg-gray-400">
                    Flex item 3
                  </div>
                </div>
                <div className="d-flex flex-row-reverse border p-3 br-5 ">
                  <div className="pd-10 bg-gray-200">
                    Flex item 1
                  </div>
                  <div className="pd-10 bg-gray-300">
                    Flex item 2
                  </div>
                  <div className="pd-10 bg-gray-400">
                    Flex item 3
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>


        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Justify Content</div>
            </div>
            <Card.Body>
              <div>
                <div className="d-flex flex-row justify-content-start mg-b-20  border p-3 br-5">
                  <div className="pd-10 bg-gray-200">
                    Flex item 1
                  </div>
                  <div className="pd-10 bg-gray-300">
                    Flex item 2
                  </div>
                  <div className="pd-10 bg-gray-400">
                    Flex item 3
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-end mg-b-20  border p-3 br-5">
                  <div className="pd-10 bg-gray-200">
                    Flex item 1
                  </div>
                  <div className="pd-10 bg-gray-300">
                    Flex item 2
                  </div>
                  <div className="pd-10 bg-gray-400">
                    Flex item 3
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-center mg-b-20  border p-3 br-5">
                  <div className="pd-10 bg-gray-200">
                    Flex item 1
                  </div>
                  <div className="pd-10 bg-gray-300">
                    Flex item 2
                  </div>
                  <div className="pd-10 bg-gray-400">
                    Flex item 3
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between mg-b-20  border p-3 br-5">
                  <div className="pd-10 bg-gray-200">
                    Flex item 1
                  </div>
                  <div className="pd-10 bg-gray-300">
                    Flex item 2
                  </div>
                  <div className="pd-10 bg-gray-400">
                    Flex item 3
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-around  border p-3 br-5">
                  <div className="pd-10 bg-gray-200">
                    Flex item 1
                  </div>
                  <div className="pd-10 bg-gray-300">
                    Flex item 2
                  </div>
                  <div className="pd-10 bg-gray-400">
                    Flex item 3
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>


        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>

            <div className="card-header">
              <div className="card-title">Align Items</div>
            </div>
            <Card.Body>
              <div>
                <div className="d-flex flex-row align-items-start ht-100 mg-b-20  border p-3 br-5">
                  <div className="pd-10 bg-gray-200">
                    Flex item 1
                  </div>
                  <div className="pd-10 bg-gray-300">
                    Flex item 2
                  </div>
                  <div className="pd-10 bg-gray-400">
                    Flex item 3
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center  ht-100 mg-b-20  border p-3 br-5">
                  <div className="pd-10 bg-gray-200">
                    Flex item 1
                  </div>
                  <div className="pd-10 bg-gray-300">
                    Flex item 2
                  </div>
                  <div className="pd-10 bg-gray-400">
                    Flex item 3
                  </div>
                </div>
                <div className="d-flex flex-row align-items-end ht-100 mg-b-20 border p-3 br-5">
                  <div className="pd-10 bg-gray-200">
                    Flex item 1
                  </div>
                  <div className="pd-10 bg-gray-300">
                    Flex item 2
                  </div>
                  <div className="pd-10 bg-gray-400">
                    Flex item 3
                  </div>
                </div>
                <div className="d-flex flex-row align-items-stretch ht-100  border p-3 br-5">
                  <div className="pd-10 bg-gray-200">
                    Flex item 1
                  </div>
                  <div className="pd-10 bg-gray-300">
                    Flex item 2
                  </div>
                  <div className="pd-10 bg-gray-400">
                    Flex item 3
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>



        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Align Self</div>
            </div>
            <Card.Body>
              <div>
                <div className="d-flex flex-row ht-100 mg-b-20  border p-3 br-5">
                  <div className="pd-10 bg-gray-200 align-self-start">
                    Flex item 1
                  </div>
                  <div className="pd-10 bg-gray-300 align-self-center">
                    Flex item 2
                  </div>
                  <div className="pd-10 bg-gray-400 align-self-end">
                    Flex item 3
                  </div>
                  <div className="pd-10 bg-gray-300 align-self-stretch">
                    Flex item 4
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>



        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Fill</div>
            </div>
            <Card.Body>
              <div>
                <div className="d-flex  border p-3 br-5">
                  <div className="pd-10 bg-gray-200 flex-fill">
                    Flex item with a lot of content
                  </div>
                  <div className="pd-10 bg-gray-300 flex-fill">
                    Flex item
                  </div>
                  <div className="pd-10 bg-gray-400 flex-fill">
                    Flex item
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>



        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Grow and Shrink</div>
            </div>
            <Card.Body>
              <div>
                <div className="d-flex  border p-3 br-5">
                  <div className="pd-10 bg-gray-200 flex-grow-1">
                    Flex item
                  </div>
                  <div className="pd-10 bg-gray-300">
                    Flex item
                  </div>
                  <div className="pd-10 bg-gray-400">
                    Third flex item
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>



        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <div className="card-header">
              <div className="card-title">Auto Margins</div>
            </div>
            <Card.Body>
              <div>
                <div className="d-flex  border p-3 br-5">
                  <div className="pd-10 bg-gray-200">
                    Flex item
                  </div>
                  <div className="pd-10 bg-gray-300">
                    Flex item
                  </div>
                  <div className="pd-10 bg-gray-400 mg-s-auto">
                    Third flex item
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Fragment>
  )
}

export default Flex