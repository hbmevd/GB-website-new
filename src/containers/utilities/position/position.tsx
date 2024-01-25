import { Fragment } from 'react'
import Pageheader from '../../../components/common/pageheader/pageheader'
import { Card, Col, Row } from 'react-bootstrap'

function Position() {
  return (
    <Fragment>
      <Pageheader titles={'Position'} active={'Position'} Subtite={'Utilities'} />

      <Row >
        <Col md={12} xl={12} xs={12} sm={12}>

          <Card>
            <div className='card-header'>
              <div className='card-title'>Set Position</div>
            </div>
            <Card.Body>
              <div className="table-responsive border radius-4 mg-b-20">
                <table className="table border-0 mb-0 text-nowrap">
                  <thead>
                    <tr>
                      <th className="wd-30p">Class</th>
                      <th className="wd-70p">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>.pos-relative</code></td>
                      <td>Set a relative position to an element.</td>
                    </tr>
                    <tr>
                      <td><code>.pos-absolute</code></td>
                      <td>Set an absolute position to an element.</td>
                    </tr>
                    <tr>
                      <td><code>.pos-fixed</code></td>
                      <td>Set a fixed position to an element.</td>
                    </tr>
                    <tr>
                      <td><code>.pos-static</code></td>
                      <td>Set a static position to an element.</td>
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
              <div className='card-title'>Cornering</div>
            </div>
            <Card.Body>
              <div className="table-responsive border radius-4 mg-b-20">
                <table className="table border-0 mb-0 text-nowrap">
                  <thead>
                    <tr>
                      <th className="wd-30p">Class</th>
                      <th className="wd-70p">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>.t-[value]</code></td>
                      <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                    </tr>
                    <tr>
                      <td><code>.r-[value]</code></td>
                      <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                    </tr>
                    <tr>
                      <td><code>.b-[value]</code></td>
                      <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                    </tr>
                    <tr>
                      <td><code>.l-[value]</code></td>
                      <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
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
              <div className='card-title'>X and Y Position</div>
            </div>
            <Card.Body>
              <div className="table-responsive border radius-4 mg-b-20">
                <table className="table border-0 mb-0 text-nowrap">
                  <thead>
                    <tr>
                      <th className="wd-30p">Class</th>
                      <th className="wd-70p">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>.t-[value]</code></td>
                      <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                    </tr>
                    <tr>
                      <td><code>.r-[value]</code></td>
                      <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                    </tr>
                    <tr>
                      <td><code>.b-[value]</code></td>
                      <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                    </tr>
                    <tr>
                      <td><code>.l-[value]</code></td>
                      <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
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
              <div className='card-title'>Negative Corner</div>
            </div>
            <Card.Body>
              <div className="table-responsive border radius-4 mg-b-20">
                <table className="table border-0 mb-0 text-nowrap">
                  <thead>
                    <tr>
                      <th className="wd-30p">Class</th>
                      <th className="wd-70p">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>.t--[value]</code></td>
                      <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                    </tr>
                    <tr>
                      <td><code>.r--[value]</code></td>
                      <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                    </tr>
                    <tr>
                      <td><code>.b--[value]</code></td>
                      <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                    </tr>
                    <tr>
                      <td><code>.l--[value]</code></td>
                      <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
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
              <div className='card-title'>Z-Index Property</div>
            </div>
            <Card.Body>
              <div className="table-responsive border radius-4 mg-b-20">
                <table className="table border-0 mb-0 text-nowrap">
                  <thead>
                    <tr>
                      <th className="wd-30p">Class</th>
                      <th className="wd-70p">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>.z-index-[value]</code></td>
                      <td>0 | 10 | 50 | 100 | 150 | 200</td>
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

export default Position