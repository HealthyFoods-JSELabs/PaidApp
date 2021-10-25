import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";


class LoginComponent extends React.Component {
    state = {};
    render() {
        // const classes = useStyles();
        // let resumeData = this.props.resumeData;
        return (
            <>

                <div className="mycenter" style={{height:window.innerHeight}}>
                    <Col className="mycenter" md="8" xs="12" style={{height:"100%",paddingLeft:0, paddingRight:0}}>
                        <div className="shadow" style={{backgroundColor:"#D3D3D3",borderRadius:20, width:"78%"}}>
                            <Row>
                                <Col md="5" xs="12" style={{paddingLeft:0, paddingRight:0}}>
                                    <Row className="mycenter" style={{marginLeft:"8%",marginTop:"20%", marginRight:"8%"}}>
                                        <a href="https://www.positivelypaid.com/" target="_blank">
                                            <img
                                                className="mx-auto"
                                                // style={{marginLeft:"155px",marginTop:"10px"}}
                                                alt="..."
                                                src={("img/pplogo.png")}
                                                width="98%"
                                                // height="80px"

                                            />
                                        </a>
                                    </Row>
                                    <Row className="columncenter" style={{ marginLeft:"15%", marginRight:"15%"}}>
                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)",textAlign:"justify",width:"100%"}}>
                                            t is a long established fact that a reader
                                            will be distracted by the readable
                                            content of a page when looking at its
                                            layout. The point of using Lorem Ipsum
                                            is that it has a more-or-less normal
                                            t is a long established fact that a reader

                                        </p>
                                    </Row>
                                </Col>
                                <Col md="7" xs="12" style={{paddingLeft:0, paddingRight:0}}>

                                    <Row style={{}}>
                                        <div className="font-weight-bold" style={{fontSize: 28, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"4%",}}>
                                            Login
                                        </div>
                                    </Row>

                                    <Row>
                                        <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"6%", marginRight:"10%"}}>
                                            E-mail
                                        </p>
                                    </Row>
                                    <Row style={{marginLeft:"7%",marginTop:"2%",height:"40px",borderRadius:10, backgroundColor:"#ffffff",width:"80%"}}>
                                        <Col md="2" xs="2" className="icon-shape">
                                            <img
                                                className="mx-auto"
                                                // style={{marginLeft:"155px",marginTop:"10px"}}
                                                alt="..."
                                                src={("img/email.png")}
                                                width="20px"
                                                height="15px"

                                            />
                                        </Col>
                                        <Col md="10" xs="10">
                                            <input placeholder="Enter Email Here" className="" style={{fontSize: 13,  marginBottom:"1px",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%"}}>
                                            Password
                                        </p>
                                    </Row>
                                    <Row style={{marginLeft:"7%",marginTop:"2%",height:"40px",borderRadius:10, backgroundColor:"#ffffff",width:"80%"}}>
                                        <Col md="2" xs="2" className="icon-shape">
                                            <img
                                                className="mx-auto"
                                                // style={{marginLeft:"155px",marginTop:"10px"}}
                                                alt="..."
                                                src={("img/password.png")}
                                                width="18px"
                                                height="20px"

                                            />
                                        </Col>
                                        <Col md="10" xs="10">
                                            <input  placeholder="Enter Password" className="" style={{fontSize: 13,  marginBottom:"1px",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Col>
                                    </Row>


                                    {/*<Row>*/}
                                    {/*    <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%"}}>*/}
                                    {/*        Confirm Password*/}
                                    {/*    </p>*/}
                                    {/*</Row>*/}
                                    {/*<Row>*/}
                                    {/*    <input placeholder="Confirm Password" className="" style={{fontSize: 13, marginTop:"2%", marginBottom:"1px",marginLeft:"10%",marginRight:"10%",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>*/}
                                    {/*</Row>*/}
                                    <Row className="columncenter" style={{marginTop:"10%"}}>
                                        <Button href="/dashboard" className="columncenter shadow" style={{borderRadius:20, background: "linear-gradient(to Bottom, #46A26F, #000000)",border:"none",width:"100%", marginLeft:"30%",marginRight:"30%", marginBottom:"10%"}}>
                                            <a className="font-weight-bold" style={{fontSize: 15, color:"rgb(255,255,255)"}}>Login</a>
                                        </Button>
                                    </Row>
                                    <Row className="columncenter" style={{ marginBottom:"4%",}}>
                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginTop:"-8%", marginRight:"0%",textAlign:"center",width:"100%"}}>
                                            <a href="">Forget Password?</a>
                                        </p>
                                    </Row>
                                    <Row className="columncenter" style={{ marginBottom:"10%",}}>
                                        <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginTop:"-5%", marginRight:"0%",textAlign:"center",width:"100%"}}>
                                            Don't have an account? <a href="/signup">Sign Up</a>
                                        </p>
                                    </Row>

                                </Col>
                            </Row>
                        </div>

                    </Col>
                </div>
            </>
        );
    }
}

export default LoginComponent;
