import { Fragment, useState } from 'react'
import Pageheader from '../../../components/common/pageheader/pageheader'
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';
import Swal from "sweetalert2";
import Allimages from '../../../components/common/imagesdata/imagesdata';

function Sweetalert() {

  const [title, settitle] = useState('Your message');
  const [message, setmessage] = useState('Your message');

  //Primaryalertbutton
  function Primaryalertbutton() {
    Swal.fire({

      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#38cab3",
      confirmButtonColor: '#3085d6',
      text: message
    });
  }
  //Secondaryalertbutton
  function Secondaryalertbutton() {
    Swal.fire({
      title,
      text: message,
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#38cab3",
    });
  }
  //Infoalertbutton with images
  function Infoalertbutton() {
    Swal.fire({
      title,
      text: message,
      imageUrl: Allimages('Photos1'),
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: "Custom image",

    });
  }

  //Warningalertbutton
  function Warningalertbutton() {
    Swal.fire({
      title,
      allowOutsideClick: false,
      text: "Your message(close after 2seconds)",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      confirmButtonColor: '#3085d6'
    });
  }

  const Timer = () => {
    Swal.fire({
      title: 'Your message',
      text: 'Your message(close after 2 seconds)',
      allowOutsideClick: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  function Basic() {
    Swal.fire({
      title: "Welcome to Your Admin Page",
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#38cab3",
    });
  }
  function Title() {
    Swal.fire({
      title: "Here is  a title!",
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#38cab3",
      text: "All are available in the template",
    });
  }
  //Primaryalert
  function Primaryalert() {
    Swal.fire({
      title: "Well done!",
      icon: "success",
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#38cab3",
      text: "You clicked the button!",
    });
  }
  //Warningalert
  function PASSINGALERT() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success me-1",
        cancelButton: "btn btn-danger me-1",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "Your will not be able to recover this imaginary file!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  }
  function Warningalert() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
  function Infoalertimg() {
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: Allimages('Photos1'),
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: "Custom image",
    });
  }

  const Ajax = () => {
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return fetch(``)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };
  return (
    <Fragment>
      <Pageheader titles={'SWEET ALERTS'} active={'Sweetalerts'} Subtite={'Advanced UI'} />

      <Row className="row-deck">
        <Col sm={12} md={12} lg={12} xl={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Basic Sweet-alert</h3>
            </Card.Header>
            <Card.Body >

              <Table className=" card-table border">
                <tbody>
                  <tr>
                    <td className="pb-0">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="Title text"
                        id="title"
                        onChange={(ele) => { settitle(ele.target.value); }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="bd-t-0">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="Your message"
                        id="message"
                        onChange={(ele) => { setmessage(ele.target.value); }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="mt-5  bd-t-0">
                      <Button
                        variant='primary'
                        type="button"
                        className=" mt-2"

                        id="but1"
                        onClick={Primaryalertbutton}
                      >Simple alert
                      </Button>
                      &nbsp;
                      <Button
                        variant='danger'
                        type="button"
                        className=" mt-2"

                        id="but2"
                        onClick={Secondaryalertbutton}
                      >
                        Alert with title
                      </Button>
                      &nbsp;
                      <Button
                        variant='info'
                        type="button"
                        className=" mt-2"

                        id="but3"
                        onClick={Infoalertbutton}
                      >
                        Alert with image
                      </Button>
                      &nbsp;
                      <Button
                        variant='warning'
                        type="button"
                        className=" mt-2"

                        id="but4"
                        onClick={Warningalertbutton}
                      >
                        With timer
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      <Row>
        <Col sm={6} md={6} lg={4} xl={3}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Basic Alert</h6>
                <p className="text-muted card-sub-title">A Basic Message</p>
              </div>
              <Button variant='primary'
                className="btn ripple"
                id="swal-basic"
                onClick={Basic}
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Title alert</h6>
                <p className="text-muted card-sub-title">
                  A title with a text under
                </p>
              </div>
              <Button variant='danger'
                className="btn ripple "
                id="swal-title"
                onClick={Title}
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Success alert</h6>
                <p className="text-muted card-sub-title">A Success Message</p>
              </div>
              <Button variant='success'
                className="btn ripple "
                id="swal-success"
                onClick={Primaryalert}
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Warning alert</h6>
                <p className="text-muted card-sub-title">A warning message</p>
              </div>
              <Button variant='warning'
                className="btn ripple"
                id="swal-warning"
                onClick={Warningalert}
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div className='parameteralert'>
                <h6 className="card-title mb-1">Passing a parameter alert</h6>
                <p className="text-muted card-sub-title">
                  By passing a parameter
                </p>
              </div>
              <Button variant='secondary'
                className="btn ripple btn-secondary parameteralert"
                id="swal-parameter"
                onClick={PASSINGALERT}
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Image alert</h6>
                <p className="text-muted card-sub-title">
                  A message with custom Image
                </p>
              </div>
              <Button variant='info'
                className="btn ripple"
                id="swal-image"
                onClick={Infoalertimg}
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Timer alert</h6>
                <p className="text-muted card-sub-title">
                  A message with auto close timer
                </p>
              </div>
              <Button variant='dark'
                className="btn ripple"
                id="swal-timer"
                onClick={Timer}
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Ajax Alert</h6>
                <p className="text-muted card-sub-title">
                  With a loader (for a AJAX requests)
                </p>
              </div>
              <Button variant='pink'
                className="btn ripple btn-pink"
                id="swal-ajax"
                onClick={Ajax}
              >
                Click me !
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Sweetalert