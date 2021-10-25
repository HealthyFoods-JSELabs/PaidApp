import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";


class PasswordChangeContent extends React.Component {
    state = {};
    render() {
        // const classes = useStyles();
        // let resumeData = this.props.resumeData;
        return (
            <>

                                <div style={{width:"100%", paddingRight:"1%", paddingLeft:"1%"}}>
                                    <Col  className="shadow" md="12" xs="12" style={{backgroundColor:"#D3D3D3",borderRadius:10, marginBottom:"1%" }}>


                                        <Row style={{}}>
                                            <div className="font-weight-bold" style={{fontSize: 24, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"4%"}}>
                                                Change Password
                                            </div>
                                        </Row>

                                        <Row className="mycenter1" style={{width:"100%"}}>
                                            <Col className="mycenter1">
                                                <Row  style={{marginTop:"5%",height:"40px",borderRadius:10, backgroundColor:"#ffffff",width:"80%"}}>
                                                    <Col md="2" xs="2" className="icon-shape">
                                                        <img
                                                            className="mx-auto"
                                                            // style={{marginLeft:"155px",marginTop:"10px"}}
                                                            alt="..."
                                                            src={("img/password.png")}
                                                            width="20px"
                                                            height="20px"

                                                        />
                                                    </Col>
                                                    <Col md="10" xs="10">
                                                        <input placeholder="Enter Old Password Here" className="" style={{fontSize: 13,  marginBottom:"1px",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row className="mycenter1" style={{width:"100%"}}>
                                            <Col className="mycenter1">
                                                <Row  style={{marginTop:"3%",height:"40px",borderRadius:10, backgroundColor:"#ffffff",width:"80%"}}>
                                                    <Col md="2" xs="2" className="icon-shape">
                                                        <img
                                                            className="mx-auto"
                                                            // style={{marginLeft:"155px",marginTop:"10px"}}
                                                            alt="..."
                                                            src={("img/password.png")}
                                                            width="20px"
                                                            height="20px"

                                                        />
                                                    </Col>
                                                    <Col md="10" xs="10">
                                                        <input placeholder="Enter New Password Here" className="" style={{fontSize: 13,  marginBottom:"1px",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row className="mycenter1" style={{width:"100%"}}>
                                            <Col className="mycenter1">
                                                <Row  style={{marginTop:"3%",height:"40px",borderRadius:10, backgroundColor:"#ffffff",width:"80%"}}>
                                                    <Col md="2" xs="2" className="icon-shape">
                                                        <img
                                                            className="mx-auto"
                                                            // style={{marginLeft:"155px",marginTop:"10px"}}
                                                            alt="..."
                                                            src={("img/password.png")}
                                                            width="20px"
                                                            height="20px"
                                                        />
                                                    </Col>
                                                    <Col md="10" xs="10">
                                                        <input placeholder="Confirm New Password Here" className="" style={{fontSize: 13,  marginBottom:"1px",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>





                                        <Row className="columncenter" style={{marginTop:"5%"}}>
                                            <Button href="/adminaccount" className="columncenter shadow" style={{borderRadius:20, background: "linear-gradient(to Bottom, #46A26F, #000000)",border:"none",width:"100%", marginLeft:"35%",marginRight:"35%", marginBottom:"10%"}}>
                                                <a className="font-weight-bold" style={{fontSize: 15, color:"rgb(255,255,255)"}}>Change</a>
                                            </Button>
                                        </Row>
                                    </Col>
                                </div>

            </>
        );
    }
}

export default PasswordChangeContent;
