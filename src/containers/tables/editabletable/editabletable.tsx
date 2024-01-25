import { Fragment } from 'react'
import Pageheader from '../../../components/common/pageheader/pageheader'
import ExampleWithProviders from './data/exampleo1'
import Example02 from './data/example02'
import { Card, Col, Row } from 'react-bootstrap'

function Editabletable() {
    return (
        <Fragment>
            <Pageheader titles={'EDITABLE TABLES'} active={'Editable tables'} Subtite={'Table'} />
            <Row className=" row-sm">
                <Col lg={12}>
                    <Card>
                        <div className='card-header'>
                            <div className='card-title'>Basic Editable DataTable</div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">

                                <ExampleWithProviders />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <Row className=" row-sm">
                <Col lg={12}>
                    <Card>
                        <div className='card-header'>
                            <div className='card-title'>Double Click Editable DataTables</div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive ">

                                <Example02 />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>




        </Fragment>
    )
}

export default Editabletable