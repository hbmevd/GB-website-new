import { Fragment, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Primarycard() {
    const [remove, Setremove] = useState(true);
    const values = [
        true,
    ];
    const [fullscreen, setFullscreen] = useState<any>(true);
    const [shows, setShows] = useState(false);

    function handleShow(breakpoint: any) {
        setFullscreen(breakpoint);
        setShows(true);
    }
    const [isFirstCollapseds, setisFirstCollapseds] = useState<any>(true);
    const firsts = () => {
        if (isFirstCollapseds === false) {
            setisFirstCollapseds(true);
        } else if (isFirstCollapseds === true) {
            setisFirstCollapseds(false);
        }
    };
    return (
        <div>
            <>
                {remove ? (
                    <Card className="custom-card">
                        <Card.Header className="d-flex align-items-start justify-content-between">
                            <h5 className="card-title"> Card With Alert Notifications</h5>
                            <div className="card-options btn-group">
                                <Link
                                    to="#"
                                    className="card-options-collapse btn-sm"
                                    data-bs-toggle="card-collapse"
                                    onClick={() => {
                                        firsts();
                                    }}
                                >
                                    <i className="fe fe-chevron-up"></i>
                                </Link>
                                {values.map((v, idx) => (
                                    <Link
                                        key={idx}
                                        to="#"
                                        className="card-options-fullscreen btn-sm"
                                        data-bs-toggle="card-fullscreen"
                                        onClick={() => handleShow(v)}
                                    >
                                        <i className="fe fe-maximize"></i>
                                        <Modal show={shows} fullscreen={fullscreen}>
                                            <Modal.Header>
                                                <div className='model-title'>Modal</div>
                                                <Button
                                                    variant="secondary"
                                                    onClick={() => setShows(false)}
                                                >
                                                    x
                                                </Button>
                                            </Modal.Header>
                                            <Modal.Body>Modal body content</Modal.Body>
                                        </Modal>
                                    </Link>
                                ))}
                                <Link
                                    to="#"
                                    className="card-options-remove btn-sm"
                                    data-bs-toggle="card-remove"
                                    onClick={() => Setremove(false)}
                                >
                                    <i className="fe fe-x"></i>
                                </Link>
                            </div>
                        </Card.Header>
                        {isFirstCollapseds ? (
                            <Fragment>
                                <div className="card-alert alert-primary">
                                    <p className="mb-0">This is an Primary Alert.</p>
                                </div>
                                <Card.Body>
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam
                                    libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                    impedit quo minus id quod maxime placeat facere
                                </Card.Body>
                                <Card.Footer className="">This is Basic card footer</Card.Footer>
                            </Fragment>
                        ) : null}
                    </Card>
                ) : null}
                <Modal show={shows} fullscreen={fullscreen}>
                    <Modal.Header>
                        <div className='modal-title'>Modal</div>
                        <Button variant="" onClick={() => setShows(false)}>
                            x
                        </Button>
                    </Modal.Header>
                    <Modal.Body>Modal body content</Modal.Body>
                </Modal>
            </>
        </div>
    )
}

export default Primarycard