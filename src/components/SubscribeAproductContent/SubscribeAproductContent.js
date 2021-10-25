import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";
import {Link} from "react-router-dom";


class SubscribeAproductContent extends React.Component {
    state = {};
    render() {
        // const classes = useStyles();
        // let resumeData = this.props.resumeData;
        return (
            <>
                <div style={{width:"100%", paddingRight:"1%", paddingLeft:"1%"}}>

                                    <Col className="shadow" md="12" xs="12" style={{backgroundColor:"#D3D3D3",borderRadius:10, marginBottom:"1%" }}>


                                        <Row style={{}}>
                                            <div className="font-weight-bold" style={{fontSize: 24, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"4%", marginBottom:"5%"}}>
                                                Subscribe a Product
                                            </div>


                                        </Row>
                                        <Row style={{marginLeft:"7%",marginRight:"7%",}}>

                                            <Col md="4" xs="12">
                                                <Link to="/paywithcard">
                                                <div  className="columncenter shadow" style={{borderRadius:20, backgroundColor: "#ffffff",border:"none",width:"100%", marginLeft:"0%",marginRight:"0%", marginBottom:"20%", cursor:"pointer"}}>
                                                    <Row className="icon-shape">
                                                    <img
                                                        className="columncenter"
                                                        style={{marginTop:"8%",marginBottom:"8%"}}
                                                        alt="..."
                                                        src={("img/sub1.png")}
                                                        width="80%"
                                                        // height="150px"

                                                    />
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            £179 Per Month
                                                        </p>
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter font-weight-bold" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            Elite
                                                        </p>
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            Full suite of branded communications including: email, letters and messaging services e.g. SMS, WhatsApp and Social Media.
                                                        </p>
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            Dedicated telephony, answered in your name during UK office hours (7am-7pm).
                                                        </p>
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            Collection activity carried out using your selected process from our Pre-Built workflows, optimized to maximize recoveries                                                        </p>
                                                    </Row>
                                                    <Row className="" style={{}}>
                                                        <p className="font-weight-bold" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"15%",textAlign:"right",width:"100%",marginBottom:"8%"}}>
                                                            Subscribed
                                                        </p>
                                                    </Row>


                                                </div>
                                                </Link>
                                            </Col>










                                            <Col md="4" xs="12">
                                                <Link to="/paywithcard">
                                                <div  className="columncenter shadow" style={{borderRadius:20, backgroundColor: "#ffffff",border:"none",width:"100%", marginLeft:"0%",marginRight:"0%", marginBottom:"20%", cursor:"pointer"}}>
                                                    <Row className="icon-shape">
                                                        <img
                                                            className="columncenter"
                                                            style={{marginTop:"8%",marginBottom:"8%"}}
                                                            alt="..."
                                                            src={("img/sub1.png")}
                                                            width="80%"
                                                            // height="150px"

                                                        />
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            £179 Per Month
                                                        </p>
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter font-weight-bold" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            Elite
                                                        </p>
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            Full suite of branded communications including: email, letters and messaging services e.g. SMS, WhatsApp and Social Media.
                                                        </p>
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            Dedicated telephony, answered in your name during UK office hours (7am-7pm).
                                                        </p>
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            Collection activity carried out using your selected process from our Pre-Built workflows, optimized to maximize recoveries                                                        </p>
                                                    </Row>
                                                    <Row className="" style={{}}>
                                                        <p className="font-weight-bold" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"15%",textAlign:"right",width:"100%",marginBottom:"8%"}}>
                                                            Subscribed
                                                        </p>
                                                    </Row>

                                                </div>
                                                </Link>
                                            </Col>





                                            <Col md="4" xs="12">
                                                <Link to="/paywithcard">
                                                <div  className="columncenter shadow" style={{borderRadius:20, backgroundColor: "#ffffff",border:"none",width:"100%", marginLeft:"0%",marginRight:"0%", marginBottom:"20%", cursor:"pointer"}}>
                                                    <Row className="icon-shape">
                                                        <img
                                                            className="columncenter"
                                                            style={{marginTop:"8%",marginBottom:"8%"}}
                                                            alt="..."
                                                            src={("img/sub1.png")}
                                                            width="80%"
                                                            // height="150px"

                                                        />
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            £179 Per Month
                                                        </p>
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter font-weight-bold" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            Elite
                                                        </p>
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            Full suite of branded communications including: email, letters and messaging services e.g. SMS, WhatsApp and Social Media.
                                                        </p>
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            Dedicated telephony, answered in your name during UK office hours (7am-7pm).
                                                        </p>
                                                    </Row>
                                                    <Row className="columncenter">
                                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                            Collection activity carried out using your selected process from our Pre-Built workflows, optimized to maximize recoveries                                                        </p>
                                                    </Row>
                                                    <Row className="" style={{}}>
                                                        <p className="font-weight-bold" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"15%",textAlign:"right",width:"100%",marginBottom:"8%"}}>
                                                            Subscribed
                                                        </p>
                                                    </Row>

                                                </div>
                                                </Link>
                                            </Col>

                                        </Row>

                                    </Col>
                    {/*            </Container>*/}
                    {/*        </Container>*/}
                    {/*    </Container>*/}
                    {/*</Container>*/}

                </div>
            </>
        );
    }
}

export default SubscribeAproductContent;
