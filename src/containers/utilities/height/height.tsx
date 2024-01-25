import { Fragment } from 'react'
import Pageheader from '../../../components/common/pageheader/pageheader'
import { Card, Col, Row } from 'react-bootstrap'

function Height() {
  return (
    <Fragment>
      <Pageheader titles={'Height'} active={'Height'} Subtite={'Utilities'} />

      <Row className="row">
        <Col md={12} xl={12} xs={12} sm={12}>

          <Card>
            <div className='card-header'>
              <div className='card-title'>Height Values</div>
            </div>
            <Card.Body>
              <div className="example">
                <div className="d-flex">
                  <div className="d-flex align-items-center justify-content-center br-5 wd-150 ht-50 bg-custom">
                    .ht-50
                  </div>
                  <div className="d-flex align-items-center justify-content-center br-5 wd-150 ht-80 bg-custom mg-s-20">
                    .ht-80
                  </div>
                  <div className="d-flex align-items-center justify-content-center br-5 wd-150 ht-100 bg-custom mg-s-20">
                    .ht-100
                  </div>
                  <div className="d-flex align-items-center justify-content-center br-5 wd-150 ht-150 bg-custom mg-s-20">
                    .ht-150
                  </div>
                </div>
              </div>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">Classes</td>
                      <td className="border-top-0"><code>.ht-[value]</code></td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">Values</td>
                      <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">Classes</td>
                      <td className="border-top-0"><code>.ht-[value]</code></td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">Values</td>
                      <td>15 | 20 | 25 | 30 | ... | 100 &nbsp; (step of 5) Regular Height</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">Classes</td>
                      <td className="border-top-0"><code>.ht-[value]</code></td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">Values</td>
                      <td>150 | 200 | 250 | 300 | ... | 850 &nbsp; (step of 50) Bigger Height</td>
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
              <div className='card-title'>Percentage Height</div>
            </div>
            <Card.Body>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">Classes</td>
                      <td className="border-top-0"><code>.ht-[value]p</code></td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">Values</td>
                      <td>10 | 20 | 30 | 40 | ... | 100 &nbsp; (step of 10)</td>
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
              <div className='card-title'>Media Query Height</div>
            </div>
            <Card.Body>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">Classes</td>
                      <td className="border-top-0"><code>.ht-[size]-[value]</code></td>
                      <td className="border-top-0"><code>.ht-[size]-[value]p</code></td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">Values</td>
                      <td>
                        <p className="mg-b-5">size: xs | sm | md | lg | xl</p>
                        <p className="mg-b-0">value: the height value (refer to code above)</p>
                      </td>
                      <td>
                        <p className="mg-b-5">size: xs | sm | md | lg | xl</p>
                        <p className="mg-b-0">value: the height value (refer to code above)</p>
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
              <div className='card-title'>Extra Height Classes</div>
            </div>
            <Card.Body>
              <div className="table-responsive border radius-4 mg-t-20">
                <table className="table border-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p border-top-0 font-weight-semibold">Classes</td>
                      <td className="border-top-0"><code>.ht-100v</code></td>
                      <td className="border-top-0"><code>.ht-auto</code></td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p font-weight-semibold">Values</td>
                      <td>Set a height to an element based on viewport height.</td>
                      <td>Set an auto height to an element.</td>
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

export default Height