import { Fragment } from 'react'
import Pageheader from '../../../components/common/pageheader/pageheader'
import { Card, Col, Row } from 'react-bootstrap'

function Extras() {
  return (
    <Fragment>
      <Pageheader titles={'Extras'} active={'Extras'} Subtite={'Utilities'} />

      <Row >
        <Col md={12} xl={12} xs={12} sm={12}>

          <Card>
            <div className='card-header'>
              <div className='card-title'>Opacity</div>
            </div>
            <Card.Body>
              <div className="example">
                <div className="d-flex flex-wrap">
                  <div className="flex-1 bg-primary tx-white p-3 ht-100 p-3 op-1">.op-1</div>
                  <div className="flex-1 bg-primary tx-white p-3 ht-100 p-3 op-2">.op-2</div>
                  <div className="flex-1 bg-primary tx-white p-3 ht-100 p-3 op-3">.op-3</div>
                  <div className="flex-1 bg-primary tx-white p-3 ht-100 p-3 op-4">.op-4</div>
                  <div className="flex-1 bg-primary tx-white p-3 ht-100 p-3 op-5">.op-5</div>
                  <div className="flex-1 bg-primary tx-white p-3 ht-100 p-3 op-6">.op-6</div>
                  <div className="flex-1 bg-primary tx-white p-3 ht-100 p-3 op-7">.op-7</div>
                  <div className="flex-1 bg-primary tx-white p-3 ht-100 p-3 op-8">.op-8</div>
                  <div className="flex-1 bg-primary tx-white p-3 ht-100 p-3 op-9">.op-9</div>
                </div>
              </div>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">Classes</td>
                      <td className="border-top-0"><code>.op-[value]</code></td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">Values</td>
                      <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-responsive border radius-4 mg-t-10">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">Classes</td>
                      <td className="border-top-0"><code>.op-[breakpoint]-[value]</code></td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">Values</td>
                      <td>
                        <p className="mg-b-5">breakpoint: xs | sm | md | lg | xl</p>
                        <p className="mg-b-0">value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>Shadow</div>
            </div>
            <Card.Body>
              <div className="table-responsive border radius-4">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">Classes</td>
                      <td className="border-top-0"><code>.shadow-base</code></td>
                      <td className="border-top-0"><code>.shadow-none</code></td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">Values</td>
                      <td>Add shadow to any box element.</td>
                      <td>Remove shadow to any box element.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Extras