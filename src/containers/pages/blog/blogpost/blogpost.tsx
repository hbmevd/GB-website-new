import { Fragment, useState } from 'react'
import Pageheader from '../../../../components/common/pageheader/pageheader'
import { Card, Col, Form, FormGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { Language } from './selcetbutton';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
function Blogpost() {
  //filepond
  const [files, setFiles] = useState<any>([]);
  // sun editor
  const htmlWithTableImages = '<center>  </center>';
  // Editor
  const [value, setValue] = useState(htmlWithTableImages);

  return (
    <Fragment>
      <Pageheader titles={'BLOGPOST'} active={'Blogpost'} Subtite={'Ecommerce'} />
      <Row >
        <Col lg={12} md={12} >
          <Card>
            <Card.Body>
              <FormGroup>
                <Form.Label className="form-label text-dark">Course Title</Form.Label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Advanced Web Develpment"
                />
              </FormGroup>
              <FormGroup>
                <Form.Label className="form-label text-dark">Category</Form.Label>

                <Language />
              </FormGroup>
              <FormGroup>
                <Form.Label className="form-label text-dark">Instructor</Form.Label>

              </FormGroup>

              Edit Content
              <div className="ql-wrapper border=0">

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
              </div>

              <FormGroup className="p-4 border mt-4 form-group">
                <div>
                  <div>
                    <FilePond
                      files={files} onupdatefiles={setFiles} allowMultiple={true} maxFiles={3} server="/api" name="files" /* sets the file input name, it's filepond by default */ labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    />
                  </div>
                </div>
              </FormGroup>

            </Card.Body>
            <Card.Footer>
              <Link to="#" className="btn btn-secondary">
                Save to Draft
              </Link>
              <Link to="#" className="btn btn-primary float-end">
                Publish Now
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

    </Fragment>
  )
}

export default Blogpost