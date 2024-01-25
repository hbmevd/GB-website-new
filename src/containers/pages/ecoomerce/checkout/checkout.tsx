// import { Fragment } from 'react'
import Pageheader from '../../../../components/common/pageheader/pageheader'
import { Fragment, useEffect, useState } from "react";
import { Card, Col, Row } from 'react-bootstrap';
import female1 from "../../../../assets/img/users/1.jpg";
import female2 from "../../../../assets/img/users/2.jpg";
import { Appdata } from './data/checkoutdata';
function Checkout({ a }: any) {
  const [, setCartData] = useState<any>([]);
  const [Price, setPrice] = useState(0);
  interface cart {
    id: number,
    preview: string,
    title: string,
    oldprice: string,
    newprice: string,
  }
  const cartData: cart[] = [
    {
      id: Math.random(),
      preview: female1,
      title: "Flowerpot",
      oldprice: "2498",
      newprice: "290",
    },
    {
      id: Math.random(),
      preview: female2,
      title: "Mens Formal Red Shoes",
      oldprice: "2498",
      newprice: "124",
    },
  ];

  useEffect(() => {

    if (a == undefined) {

      setCartData(cartData);
      cartData.filter((ele) => {
        setPrice(Number(ele.newprice) + Price);
      });
    }
    else if (a.length == 0) {

      setCartData(cartData);
      cartData.filter((ele) => {
        setPrice(Number(ele.newprice) + Price);
      });
    }
    else {

      setCartData(a);
      a.filter((ele: any) => {
        setPrice(Number(ele.newprice) + Price);
      });
    }
  }, [a]);
  return (
    <Fragment>
      <Pageheader titles={'Checkout'} active={'Checkout'} Subtite={'Ecommerce'} />
      <Row>
        <Col xl={12} className="px-0">
          <Card className="custom-card">
            <Card.Header className="bg-transparent border-bottom-0">
              <div>
                <label className="main-content-label mb-2">Checkout</label>
                <span className="d-block tx-12 mb-0 text-muted">
                  The Project Budget is a tool used by project managers to
                  estimate the total cost of a project
                </span>
              </div>
            </Card.Header>
              <Card.Body className="mx-auto col-xl-6">

                <div className="checkout-steps wrapper">
                  <div id="checkoutsteps">
                    <Card>
                      <Appdata />
                    </Card>
                  </div>
                </div>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Checkout