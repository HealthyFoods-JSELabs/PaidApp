import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import PayComponent from "../PayComponent/PayComponent2.js";
import {Link} from "react-router-dom";


class PayWithCardComponent extends React.Component {
    state = {};
    render() {
        return (
            <>
                <Row style={{width:"100%", height:window.innerHeight}}>
                    <Col md="6" xs="12" style={{backgroundColor:"#3bc0a8"}}>
                        <Row style={{marginTop:"10%"}}>
                            <Col md="2" xs="2" className="mycenter1">
                                <Link to="/subscribeaproduct">
                                <img
                                    className="mx-auto"
                                    // style={{marginLeft:"155px",marginTop:"10px"}}
                                    alt="..."
                                    src={("img/leftarrow.png")}
                                    width="50%"
                                    // height="80px"

                                />
                                </Link>
                            </Col>
                            <Col md="10" xs="10">
                                <a href="https://www.positivelypaid.com/" target="_blank">
                                    <img
                                        className="mx-auto"
                                        // style={{marginLeft:"155px",marginTop:"10px"}}
                                        alt="..."
                                        src={("img/pplogo.jpg")}
                                        width="30%"
                                        // height="80px"

                                    />
                                </a>
                            </Col>

                        </Row>
                        <Row>
                            <div style={{fontSize: 20, color: "rgb(255,255,255)", marginLeft:"18%", marginTop:"4%",opacity:0.6}}>
                                Subscribe to Starter
                            </div>
                        </Row>
                        <Row>
                                <div style={{fontSize: 34, color: "rgb(255,255,255)", marginLeft:"18%", marginTop:"1%",opacity:1}}>
                                    $12.00 <a style={{fontSize: 20,opacity:0.6}}>per month</a>
                                </div>
                        </Row>
                        <Row style={{marginTop:"55%"}}>
                            <div style={{fontSize: 15, color: "rgb(255,255,255)", marginLeft:"18%", marginTop:"4%",opacity:0.6}}>
                                Powered by <a href="https://stripe.com/" target="_blank" className="font-weight-bold" target="_blank" style={{color: "rgb(255,255,255)"}}>Stripe</a> | <a href="https://stripe.com/payment-terms/legal" target="_blank" style={{color: "rgb(255,255,255)"}}>Terms</a> <a href="https://stripe.com/en-ca/privacy" target="_blank" style={{color: "rgb(255,255,255)"}}>Privacy</a>
                            </div>
                        </Row>
                    </Col>
                    <Col md="6" xs="12">
                        <PayComponent/>
                    </Col>

                </Row>

            </>
        );
    }
}

export default PayWithCardComponent;
