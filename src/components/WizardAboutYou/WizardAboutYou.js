import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";


class WizardAboutYou extends React.Component {
    state = {};
    render() {
        // const classes = useStyles();
        // let resumeData = this.props.resumeData;
        return (
            <>
                {/*<Container style={{}}>*/}
                {/*    <Container style={{}}>*/}
                {/*        <Container style={{}}>*/}
                {/*            <Container style={{}}>*/}
                                <Container style={{width:"100%" }}>
                                    <Col className="" md="12" xs="12" style={{marginBottom:"2%", width:"100%" }}>

                                        <Row style={{}}>
                                            <div className="font-weight-bold" style={{fontSize: 24, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"4%"}}>
                                                About You
                                            </div>
                                        </Row>
                                        <Row>
                                            <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%"}}>
                                                Company Logo or Letterhead
                                            </p>
                                        </Row>
                                        <Row className="mycenter" style={{marginTop:"6%",width:"100%"}}>
                                            <div  className="mycenter shadow" style={{borderRadius:20, backgroundColor: "#ffffff",border:"none",height:200,width:200, marginBottom:"5%"}}>
                                                {/*<a className="font-weight-bold" style={{fontSize: 15, color:"rgb(255,255,255)"}}>Register</a>*/}
                                            </div>
                                        </Row>
                                        <Row>
                                            <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"0", marginRight:"10%"}}>
                                                First Name
                                            </p>
                                        </Row>
                                        <Row>
                                            <input placeholder="First Name" className="" style={{fontSize: 13, marginTop:"0px", marginBottom:"1px",marginLeft:"10%",marginRight:"10%",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Row>
                                        <Row>
                                            <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%"}}>
                                                Last Name
                                            </p>
                                        </Row>
                                        <Row>
                                            <input placeholder="Last Name" className="" style={{fontSize: 13, marginTop:"0px", marginBottom:"1px",marginLeft:"10%",marginRight:"10%",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Row>
                                        <Row>
                                            <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%"}}>
                                                Company Name
                                            </p>
                                        </Row>
                                        <Row>
                                            <input placeholder="Company Name" className="" style={{fontSize: 13, marginTop:"0px", marginBottom:"1px",marginLeft:"10%",marginRight:"10%",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Row>

                                        <Row>
                                            <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%"}}>
                                                Address Line 1
                                            </p>
                                        </Row>
                                        <Row>
                                            <input placeholder="Address line 1" className="" style={{fontSize: 13, marginTop:"0px", marginBottom:"1px",marginLeft:"10%",marginRight:"10%",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Row>
                                        <Row>
                                            <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%"}}>
                                                Address Line 2
                                            </p>
                                        </Row>
                                        <Row>
                                            <input placeholder="Address line 2" className="" style={{fontSize: 13, marginTop:"0px", marginBottom:"1px",marginLeft:"10%",marginRight:"10%",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Row>
                                        <Row>
                                            <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%"}}>
                                                Address Line 3
                                            </p>
                                        </Row>
                                        <Row>
                                            <input placeholder="Address line 3" className="" style={{fontSize: 13, marginTop:"0px", marginBottom:"1px",marginLeft:"10%",marginRight:"10%",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Row>
                                        <Row>
                                            <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%"}}>
                                                Address Line 4
                                            </p>
                                        </Row>
                                        <Row>
                                            <input placeholder="Address line 4" className="" style={{fontSize: 13, marginTop:"0px", marginBottom:"1px",marginLeft:"10%",marginRight:"10%",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Row>

                                        <Row>
                                            <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%"}}>
                                                Post Code
                                            </p>
                                        </Row>
                                        <Row>
                                            <input placeholder="Post Code" className="" style={{fontSize: 13, marginTop:"0px", marginBottom:"1px",marginLeft:"10%",marginRight:"10%",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Row>

                                        <Row>
                                            <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%"}}>
                                                E-Mail
                                            </p>
                                        </Row>
                                        <Row>
                                            <input placeholder="E-Mail" className="" style={{fontSize: 13, marginTop:"0px", marginBottom:"1px",marginLeft:"10%",marginRight:"10%",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Row>
                                        <Row>
                                            <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%"}}>
                                                Mobile Number
                                            </p>
                                        </Row>
                                        <Row>
                                            <input placeholder="Mobile Number" className="" style={{fontSize: 13, marginTop:"0px", marginBottom:"1px",marginLeft:"10%",marginRight:"10%",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Row>
                                        <Row>
                                            <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%"}}>
                                                Phone Number
                                            </p>
                                        </Row>
                                        <Row style={{}}>
                                            <input placeholder="Phone Number" className="" style={{fontSize: 13, marginTop:"0px", marginBottom:"1px",marginLeft:"10%",marginRight:"10%",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Row>

                                    </Col>
                                </Container>
                {/*            </Container>*/}
                {/*        </Container>*/}
                {/*    </Container>*/}

                {/*</Container>*/}
            </>
        );
    }
}

export default WizardAboutYou;
