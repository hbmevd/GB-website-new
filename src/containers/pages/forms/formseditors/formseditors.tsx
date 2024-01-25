import { Fragment, useState } from 'react'
import Pageheader from '../../../../components/common/pageheader/pageheader'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import SunEditor from 'suneditor-react';
import "suneditor/dist/css/suneditor.min.css"; //suneditor Css

import { Link } from 'react-router-dom';

function Formseditors() {
  //quill
  // sun editor
  const htmlWithTableImages = '<center>  </center>';
  // Editor
  const [value, setValue] = useState(htmlWithTableImages);
  // Modal Editor
  const [show, setShow] = useState(false);

  const handleClose: any = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Pageheader titles={'FORM EDITOR'} active={'Form Editor'} Subtite={'Forms'} />
      <div className="main-container container-fluid">
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header className="border-bottom-0">
                <h3 className="card-title">Summernote Editor</h3>
              </Card.Header>
              <Card.Body>
                <SunEditor />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card>
              <Card.Header className="border-bottom-0">
                <h3 className="card-title">Wysiwyag Form Editor</h3>
              </Card.Header>
              <Card.Body>

                <SunEditor
                  setContents={value}
                  onChange={setValue}
                  setOptions={{
                    buttonList: [
                      ['undo', 'redo'],
                      ['font', 'fontSize'],
                      ['paragraphStyle', 'blockquote'],
                      [
                        'bold',
                        'underline',
                        'italic',
                        'strike',
                        'subscript',
                        'superscript'
                      ],
                      ['fontColor', 'hiliteColor'],
                      ['align', 'list', 'lineHeight'],
                      ['outdent', 'indent'],
                      ['table', 'horizontalRule', 'link', 'image', 'video'],
                      ['preview', 'print'],
                      ['removeFormat']
                    ],
                    defaultTag: 'div',
                    minHeight: '300px',
                    showPathLabel: false,
                    attributesWhitelist: {
                      all: 'style',
                      table: 'cellpadding|width|cellspacing|height|style',
                      tr: 'valign|style',
                      td: 'styleinsert|height|style',
                      img: 'title|alt|src|style'
                    }
                  }}
                />
                <hr />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className='form-edit-model'>
              <Card.Header className=" card-header">
                <div className=' card-title'>Form Editor in Modal</div>
              </Card.Header>
              <Card.Body>

                <Button variant="primary" className="mt-3 me-2" data-bs-target="#modalQuill" onClick={handleShow}
                  data-bs-toggle="modal">View Live Demo</Button>
                <Modal show={show} onHide={handleClose} size="lg" variant='primary' aria-labelledby="contained-modal-title-vcenter" centered>
                  <Modal.Header className='pd-20'>
                    <Modal.Title as='h6'>Create New Document</Modal.Title>
                    <Link to="#" className="text-dark d-flex ms-auto my-auto" onClick={() => { handleClose("Basic"); }}><i className='fe fe-x ms-auto'></i></Link>
                  </Modal.Header>
                  <Modal.Body>
                    <SunEditor />
                  </Modal.Body>
                  <Modal.Footer className="pd-20">
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          </Col>
        </Row>
       
      </div>
    </Fragment>
  )
}

export default Formseditors