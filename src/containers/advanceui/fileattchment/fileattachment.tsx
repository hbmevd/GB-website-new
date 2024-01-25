import { Fragment } from 'react'
import Allimages from '../../../components/common/imagesdata/imagesdata'
import Pageheader from '../../../components/common/pageheader/pageheader'
import { Card, Col, Row } from 'react-bootstrap'

function Fileattachment() {
  return (
    <Fragment>
      <Pageheader titles={'FILE ATTACHMENT'} active={'Fileattachment'} Subtite={'Advanced dUI'} />

      <Row>
        <Col lg={6}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>File Attachment Tags</div>
            </div>
            <Card.Body>
              <div className="tag-attachments-group">
                <div className="tag-attachment">
                  <a ><i className="mdi mdi-file-image tx-20 me-1"></i>Image01..._jpg</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment attachment-primary">
                  <a  className="text-white"><i className="mdi mdi-file-image tx-20 me-1"></i>Image01..._jpg</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment attachment-secondary">
                  <a  className="text-white"><i className="mdi mdi-music tx-20 me-1"></i>music-mp3</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment attachment-success">
                  <a  className="tx-white"><i className="mdi mdi-file-video tx-20 me-1"></i>video0014...-mp4</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment attachment-warning">
                  <a  className="text-white"><i className="mdi mdi-file-excel tx-20 me-1"></i>Document.xl</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment attachment-danger">
                  <a  className="tx-white"><i className="mdi mdi-file-pdf tx-20 me-1"></i>AMN0012.pdf</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>Rounded File Attachments</div>
            </div>
            <Card.Body>
              <div className="tag-attachments-group">
                <div className="tag-attachment rounded-pill">
                  <a ><i className="mdi mdi-file-image tx-20 me-1"></i>Image01..._jpg</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment rounded-pill attachment-primary">
                  <a  className="text-white"><i className="mdi mdi-file-image tx-20 me-1"></i>Image01..._jpg</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment rounded-pill attachment-secondary">
                  <a  className="text-white"><i className="mdi mdi-music tx-20 me-1"></i>music-mp3</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment rounded-pill attachment-success">
                  <a  className="tx-white"><i className="mdi mdi-file-video tx-20 me-1"></i>video0014...-mp4</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment rounded-pill attachment-warning">
                  <a  className="text-white"><i className="mdi mdi-file-excel tx-20 me-1"></i>Document.xl</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment rounded-pill attachment-danger">
                  <a  className="tx-white"><i className="mdi mdi-file-pdf tx-20 me-1"></i>AMN0012.pdf</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>Outline File Attachments</div>
            </div>
            <Card.Body>
              <div className="tag-attachments-group">
                <div className="tag-attachment">
                  <a ><i className="mdi mdi-file-image tx-20 me-1"></i>Image01..._jpg</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment attachment-outline-primary">
                  <a  className="tx-primary"><i className="mdi mdi-file-image tx-20 me-1"></i>Image01..._jpg</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment attachment-outline-secondary">
                  <a  className="tx-secondary"><i className="mdi mdi-music tx-20 me-1"></i>music-mp3</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment attachment-outline-success">
                  <a  className="tx-success"><i className="mdi mdi-file-video tx-20 me-1"></i>video0014...-mp4</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment attachment-outline-warning">
                  <a  className="tx-warning"><i className="mdi mdi-file-excel tx-20 me-1"></i>Document.xl</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment attachment-outline-danger">
                  <a  className="tx-danger"><i className="mdi mdi-file-pdf tx-20 me-1"></i>AMN0012.pdf</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>Rounded Outline File Attachments</div>
            </div>
            <Card.Body>
              <div className="tag-attachments-group">
                <div className="tag-attachment rounded-pill">
                  <a ><i className="mdi mdi-file-image tx-20 me-1"></i>Image01..._jpg</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment rounded-pill attachment-outline-primary">
                  <a  className="tx-primary"><i className="mdi mdi-file-image tx-20 me-1"></i>Image01..._jpg</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment rounded-pill attachment-outline-secondary">
                  <a  className="tx-secondary"><i className="mdi mdi-music tx-20 me-1"></i>music-mp3</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment rounded-pill attachment-outline-success">
                  <a  className="tx-success"><i className="mdi mdi-file-video tx-20 me-1"></i>video0014...-mp4</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment rounded-pill attachment-outline-warning">
                  <a  className="tx-warning"><i className="mdi mdi-file-excel tx-20 me-1"></i>Document.xl</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
                <div className="tag-attachment rounded-pill attachment-outline-danger">
                  <a  className="tx-danger"><i className="mdi mdi-file-pdf tx-20 me-1"></i>AMN0012.pdf</a>
                  <a  className="tag-addon"><i className="fe fe-x"></i></a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={12}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>Attachment Sizes</div>
            </div>
            <Card.Body>
              <Row>
                <Col xl={6} lg={12}>
                  <div className="tag-attachments-group">
                    <div className="tag-attachment attachment-sm">
                      <a ><i className="mdi mdi-music tx-15 me-1"></i>music-mp3</a>
                      <a  className="tag-addon"><i className="fe fe-x tx-13"></i></a>
                    </div>
                    <div className="tag-attachment attachment-primary">
                      <a  className="text-white"><i className="mdi mdi-file-video tx-20 me-1"></i>video0014...-mp4</a>
                      <a  className="tag-addon"><i className="fe fe-x"></i></a>
                    </div>
                    <div className="tag-attachment attachment-lg attachment-secondary">
                      <a  className="text-white"><i className="mdi mdi-file-excel tx-22 me-1"></i>Document.xl</a>
                      <a  className="tag-addon"><i className="fe fe-x tx-17"></i></a>
                    </div>
                    <div className="tag-attachment attachment-xl attachment-success">
                      <a  className="tx-white"><i className="mdi mdi-file-pdf tx-24 me-1"></i>AMN0012.pdf</a>
                      <a  className="tag-addon"><i className="fe fe-x tx-20"></i></a>
                    </div>
                  </div>
                </Col>
                <Col xl={6} lg={12}>
                  <div className="tag-attachments-group">
                    <div className="tag-attachment rounded-pill attachment-sm">
                      <a ><i className="mdi mdi-music tx-15 me-1"></i>music-mp3</a>
                      <a  className="tag-addon"><i className="fe fe-x tx-13"></i></a>
                    </div>
                    <div className="tag-attachment rounded-pill attachment-primary">
                      <a  className="text-white"><i className="mdi mdi-file-video tx-20 me-1"></i>video0014...-mp4</a>
                      <a  className="tag-addon"><i className="fe fe-x"></i></a>
                    </div>
                    <div className="tag-attachment rounded-pill attachment-lg attachment-secondary">
                      <a  className="text-white"><i className="mdi mdi-file-excel tx-22 me-1"></i>Document.xl</a>
                      <a  className="tag-addon"><i className="fe fe-x tx-17"></i></a>
                    </div>
                    <div className="tag-attachment rounded-pill attachment-xl attachment-success">
                      <a  className="tx-white"><i className="mdi mdi-file-pdf tx-24 me-1"></i>AMN0012.pdf</a>
                      <a  className="tag-addon"><i className="fe fe-x tx-20"></i></a>
                    </div>
                  </div>
                </Col>
                <Col xl={6} lg={12}>
                  <div className="tag-attachments-group">
                    <div className="tag-attachment attachment-sm">
                      <a ><i className="mdi mdi-music tx-15 me-1"></i>music-mp3</a>
                      <a  className="tag-addon"><i className="fe fe-x"></i></a>
                    </div>
                    <div className="tag-attachment attachment-outline-primary">
                      <a  className="tx-primary"><i className="mdi mdi-file-video tx-20 me-1"></i>video0014...-mp4</a>
                      <a  className="tag-addon"><i className="fe fe-x"></i></a>
                    </div>
                    <div className="tag-attachment attachment-lg attachment-outline-secondary">
                      <a  className="tx-secondary"><i className="mdi mdi-file-excel tx-22 me-1"></i>Document.xl</a>
                      <a  className="tag-addon"><i className="fe fe-x"></i></a>
                    </div>
                    <div className="tag-attachment attachment-xl attachment-outline-success">
                      <a  className="tx-success"><i className="mdi mdi-file-pdf tx-24 me-1"></i>AMN0012.pdf</a>
                      <a  className="tag-addon"><i className="fe fe-x"></i></a>
                    </div>
                  </div>
                </Col>
                <Col xl={6} lg={12}>
                  <div className="tag-attachments-group">
                    <div className="tag-attachment rounded-pill attachment-sm">
                      <a ><i className="mdi mdi-music tx-15 me-1"></i>music-mp3</a>
                      <a  className="tag-addon"><i className="fe fe-x"></i></a>
                    </div>
                    <div className="tag-attachment rounded-pill attachment-outline-primary">
                      <a  className="tx-primary"><i className="mdi mdi-file-video tx-20 me-1"></i>video0014...-mp4</a>
                      <a  className="tag-addon"><i className="fe fe-x"></i></a>
                    </div>
                    <div className="tag-attachment rounded-pill attachment-lg attachment-outline-secondary">
                      <a  className="tx-secondary"><i className="mdi mdi-file-excel tx-22 me-1"></i>Document.xl</a>
                      <a  className="tag-addon"><i className="fe fe-x"></i></a>
                    </div>
                    <div className="tag-attachment rounded-pill attachment-xl attachment-outline-success">
                      <a  className="tx-success"><i className="mdi mdi-file-pdf tx-24 me-1"></i>AMN0012.pdf</a>
                      <a  className="tag-addon"><i className="fe fe-x"></i></a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      <Row>
        <Col xl={12}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>Image Attachment Tags</div>
            </div>
            <Card.Body>
              <Row>
                <Col xl={2} lg={6} md={12} className="mb-3 mb-xl-0">
                  <div className="image-attach">
                    <img className="card-img" src={Allimages("Media1")} alt="pos-relative" />
                    <div className="pos-absolute a-0 bg-black-1 radius-4"></div>
                    <span className="pos-absolute t-15 l-15 tx-17 tx-white">123image.jpg</span>
                    <div className="btn-list attach-options flex-center">
                      <a  className="btn btn-circle flex-center btn-primary" data-bs-toggle="tooltip" title="Dowonload"><i className="fe fe-download tx-13"></i></a>
                      <a  className="btn btn-circle flex-center btn-danger" data-bs-toggle="tooltip" title="Delete"><i className="fe fe-trash tx-13"></i></a>
                      <a  className="btn btn-circle flex-center btn-teal" data-bs-toggle="tooltip" title="Share"><i className="fe fe-share tx-13"></i></a>
                    </div>
                  </div>
                </Col>
                <Col xl={2} lg={6} md={12} className="mb-3 mb-xl-0">
                  <div className="image-attach">
                    <img className="card-img" src={Allimages("Media2")} alt="pos-relative" />
                    <div className="pos-absolute a-0 bg-black-1 radius-4"></div>
                    <span className="pos-absolute t-15 l-15 tx-17 tx-white">123image.jpg</span>
                    <div className="btn-list attach-options flex-center">
                      <a  className="btn btn-circle flex-center btn-primary" data-bs-toggle="tooltip" title="Dowonload"><i className="fe fe-download tx-13"></i></a>
                      <a  className="btn btn-circle flex-center btn-danger" data-bs-toggle="tooltip" title="Delete"><i className="fe fe-trash tx-13"></i></a>
                      <a  className="btn btn-circle flex-center btn-teal" data-bs-toggle="tooltip" title="Share"><i className="fe fe-share tx-13"></i></a>
                    </div>
                  </div>
                </Col>
                <Col xl={2} lg={6} md={12} className="mb-3 mb-xl-0">
                  <div className="image-attach">
                    <img className="card-img" src={Allimages("Media3")} alt="pos-relative" />
                    <div className="pos-absolute a-0 bg-black-1 radius-4"></div>
                    <span className="pos-absolute t-15 l-15 tx-17 tx-white">123image.jpg</span>
                    <div className="btn-list attach-options flex-center">
                      <a  className="btn btn-circle flex-center btn-primary" data-bs-toggle="tooltip" title="Dowonload"><i className="fe fe-download tx-13"></i></a>
                      <a  className="btn btn-circle flex-center btn-danger" data-bs-toggle="tooltip" title="Delete"><i className="fe fe-trash tx-13"></i></a>
                      <a  className="btn btn-circle flex-center btn-teal" data-bs-toggle="tooltip" title="Share"><i className="fe fe-share tx-13"></i></a>
                    </div>
                  </div>
                </Col>
                <Col xl={2} lg={6} md={12} className="mb-3 mb-xl-0">
                  <div className="image-attach">
                    <img className="card-img" src={Allimages("Media4")} alt="pos-relative" />
                    <div className="pos-absolute a-0 bg-black-1 radius-4"></div>
                    <span className="pos-absolute t-15 l-15 tx-17 tx-white">123image.jpg</span>
                    <div className="btn-list attach-options flex-center">
                      <a  className="btn btn-circle flex-center btn-primary" data-bs-toggle="tooltip" title="Dowonload"><i className="fe fe-download tx-13"></i></a>
                      <a  className="btn btn-circle flex-center btn-danger" data-bs-toggle="tooltip" title="Delete"><i className="fe fe-trash tx-13"></i></a>
                      <a  className="btn btn-circle flex-center btn-teal" data-bs-toggle="tooltip" title="Share"><i className="fe fe-share tx-13"></i></a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col lg={12}>
          <Card>
            <div className='card-header'>
              <div className='card-title'>File Attachments</div>
            </div>
            <Card.Body>
              <div className="d-sm-flex d-block align-items-end">
                <div className="file-attach file-attach-sm">
                  <div className="mb-1 border br-5 pos-relative overflow-hidden">
                    <img src={Allimages("File5")} className="br-5" alt="file" />
                    <div className="btn-list attach-options v-center d-flex flex-column">
                      <a  className="btn btn-circle-xs btn-primary flex-center me-0 mb-0"><i className="fe fe-trash tx-11"></i></a>
                      <a  className="btn btn-circle-xs btn-warning flex-center me-0 mb-0 mg-t-3"><i className="fe fe-download tx-11"></i></a>
                      <a  className="btn btn-circle-xs btn-success flex-center me-0 mb-0 mg-t-3"><i className="fe fe-eye tx-11"></i></a>
                    </div>
                  </div>
                  <span>Image01.jpg</span>
                </div>
                <div className="file-attach">
                  <div className="mb-1 border br-5 pos-relative overflow-hidden">
                    <img src={Allimages("File1")} className="br-5" alt="doc" />
                    <div className="btn-list attach-options v-center d-flex flex-column">
                      <a  className="btn btn-circle-sm btn-primary flex-center me-0 mb-0"><i className="fe fe-trash tx-12"></i></a>
                      <a  className="btn btn-circle-sm btn-warning flex-center me-0 mb-0 mg-t-3"><i className="fe fe-download tx-12"></i></a>
                      <a  className="btn btn-circle-sm btn-success flex-center me-0 mb-0 mg-t-3"><i className="fe fe-eye tx-12"></i></a>
                    </div>
                  </div>
                  <span>word.doc</span>
                </div>
                <div className="file-attach file-attach-lg">
                  <div className="mb-1 border br-5 pos-relative overflow-hidden">
                    <img src={Allimages("File3")} className="br-5" alt="file" />
                    <div className="btn-list attach-options v-center d-flex flex-column">
                      <a  className="btn btn-circle-lg btn-primary flex-center me-0 mb-0"><i className="fe fe-trash tx-14"></i></a>
                      <a  className="btn btn-circle-lg btn-warning flex-center me-0 mb-0 mg-t-3"><i className="fe fe-download tx-14"></i></a>
                      <a  className="btn btn-circle-lg btn-success flex-center me-0 mb-0 mg-t-3"><i className="fe fe-eye tx-14"></i></a>
                    </div>
                  </div>
                  <span>demoXL.xl</span>
                </div>
                <div className="file-attach file-attach-xl">
                  <div className="mb-1 border br-5 pos-relative overflow-hidden">
                    <img src={Allimages("File2")} className="br-5" alt="pdf" />
                    <div className="btn-list attach-options v-center d-flex flex-column">
                      <a  className="btn btn-circle-xl btn-primary flex-center me-0 mb-0"><i className="fe fe-trash"></i></a>
                      <a  className="btn btn-circle-xl btn-warning flex-center me-0 mb-0 mg-t-3"><i className="fe fe-download"></i></a>
                      <a  className="btn btn-circle-xl btn-success flex-center me-0 mb-0 mg-t-3"><i className="fe fe-eye"></i></a>
                    </div>
                  </div>
                  <span>Document.pdf</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Fileattachment