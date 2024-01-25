import { Fragment } from 'react'
import Allimages from '../../../../components/common/imagesdata/imagesdata'
import Pageheader from '../../../../components/common/pageheader/pageheader'
import { Link } from 'react-router-dom'
import ReactColor from './filecarousel'
import { Card, Col, Row } from 'react-bootstrap'

function Filedetails() {
    return (
        <Fragment>
            <Pageheader titles={"FILE DETAILS"} active={"File Details"} Subtite={"Apps"} />

            <Row className="row-sm">
                <Col xl={8} lg={12} md={12}>
                    <Card className=" overflow-hidden">
                        <Card.Body className=" px-4 pt-4">
                            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><img src={Allimages("Photos28")} alt="img" className="cover-image radius-4 w-100" /></Link>
                            <ReactColor />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={12}>
                    <Card>
                        <Card.Header>
                            <div className='card-title'>
                                File details :
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={12}>
                                    <div className="table-responsive border br-5">
                                        <table className="table mb-0 border-0">
                                            <tbody>
                                                <tr>
                                                    <th scope="row" className="border-top-0">Name</th>
                                                    <td className="border-top-0">cover.jpg</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Size</th>
                                                    <td>20.5 Mb</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Date</th>
                                                    <td>04-03-2022</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Measurements</th>
                                                    <td>1036 &times; 414</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Format</th>
                                                    <td>.jpg</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Location</th>
                                                    <td>storage/My Images/cover.jpg</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                          <div className='card-title'>
                                Recently added
                          </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className=" row-sm file-detailimg">
                                <Col md={3} sm={6}>
                                    <Card>
                                        <img src={Allimages("Media1")} alt="img" className="br-5" />
                                    </Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card>
                                        <img src={Allimages("Media2")} alt="img" className="br-5" />
                                    </Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card>
                                        <img src={Allimages("Media3")} alt="img" className="br-5" />
                                    </Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card>
                                        <img src={Allimages("Media4")} alt="img" className="br-5" />
                                    </Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card>
                                        <img src={Allimages("Media5")} alt="img" className="br-5" />
                                    </Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card>
                                        <img src={Allimages("Media6")} alt="img" className="br-5" />
                                    </Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card>
                                        <img src={Allimages("Media7")} alt="img" className="br-5" />
                                    </Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card>
                                        <img src={Allimages("Media8")} alt="img" className="br-5" />
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Filedetails