import { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Allimages from '../../../components/common/imagesdata/imagesdata';

function Overlaywithcard() {
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
                    <Card>
                        <Card.Header className="card-title d-flex align-items-start justify-content-between">
                            <h5 className="card-title"> Overlay With Card Options</h5>
                            <div className="card-options">
                                <Link
                                    to="#"
                                    className="card-options-collapse"
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
                                        className="card-options-fullscreen"
                                        data-bs-toggle="card-fullscreen"
                                        onClick={() => handleShow(v)}
                                    >
                                        <i className="fe fe-maximize"></i>
                                        <Modal show={shows} fullscreen={fullscreen}>
                                            <Modal.Header>
                                                <Modal.Title>Modal</Modal.Title>
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
                                    className="card-options-remove"
                                    data-bs-toggle="card-remove"
                                    onClick={() => Setremove(false)}
                                >
                                    <i className="fe fe-x"></i>
                                </Link>
                            </div>
                        </Card.Header>
                        {isFirstCollapseds ? (
                            <>
                                <Card.Body>

                                    <div className="pos-relative">
                                        <img alt="Image" className="img-fluid card-img" src={Allimages("Photos3")} />
                                        <div className="card-img-overlay bg-black op-5">
                                            <p className="tx-white op-8"> Lorem Ipsum Diam et consetetur nonumy dolor justo dolor et amet. Ea. Diam gubergren et nonumy. Sed diam est et no at rebum, et diam ea sanctus.</p>


                                        </div>
                                    </div>
                                </Card.Body>
                               
                            </>
                        ) : null}
                    </Card>
                ) : null}
                <Modal show={shows} fullscreen={fullscreen}>
                    <Modal.Header>
                        <Modal.Title>Modal</Modal.Title>
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

export default Overlaywithcard