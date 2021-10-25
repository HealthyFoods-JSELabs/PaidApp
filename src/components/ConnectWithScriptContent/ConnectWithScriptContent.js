import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";


class ConnectWithScriptContent extends React.Component {
    state = {};
    render() {
        // const classes = useStyles();
        // let resumeData = this.props.resumeData;
        return (
            <>

                                <div style={{width:"100%", paddingRight:"1%", paddingLeft:"1%"}}>
                                    <Col className="shadow" md="12" xs="12" style={{backgroundColor:"#D3D3D3",borderRadius:10, marginBottom:"1%" }}>


                                        <Row style={{}}>
                                            <div className="font-weight-bold" style={{fontSize: 24, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"4%"}}>
                                                Connect with Stripe
                                            </div>

                                            <p className="" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"4%", marginRight:"10%"}}>
                                                As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of De Finibus which challenges.
                                            </p>
                                            <p className="" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"3%", marginRight:"10%"}}>
                                                McClintock's 15th century claims and suggests that the dawn of lorem ipsum was as recent as the 20th century.
                                            </p>
                                            <p className="" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"3%", marginRight:"10%"}}>
                                                As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of De Finibus which challenges McClintock's 15th century claims and suggests that the dawn of lorem ipsum was as recent as the 20th century.
                                            </p>
                                            <p className="" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"3%", marginRight:"10%"}}>
                                                The 1914 Loeb Classical Library Edition ran out of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dangling with “do-”, while another begins with the now ubiquitous “lorem ipsum”.
                                            </p>
                                            <p className="" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"3%", marginRight:"10%"}}>
                                                £179 Per Month
                                            </p>

                                        </Row>
                                        <Row>
                                            <img
                                                className="mx-auto"
                                                style={{marginTop:"8%",marginBottom:"8%"}}
                                                alt="..."
                                                src={("img/pickbg.png")}
                                                width="450px"
                                                height="280px"

                                            />
                                        </Row>

                                        <Row>
                                            <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"0", marginRight:"10%"}}>
                                                Bank Sort Code
                                            </p>
                                        </Row>
                                        <Row>
                                            <input placeholder="Bank Sort Code" className="" style={{fontSize: 13, marginTop:"0px", marginBottom:"1px",marginLeft:"10%",marginRight:"10%",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Row>
                                        <Row>
                                            <p className="font-weight-bold" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%"}}>
                                                Bank Account Number
                                            </p>
                                        </Row>
                                        <Row>
                                            <input placeholder="Bank Account Number" className="" style={{fontSize: 13, marginTop:"0px", marginBottom:"1px",marginLeft:"10%",marginRight:"10%",border:"none",width:"100%",height:"40px",borderRadius:10, paddingLeft:"2%" }}></input>
                                        </Row>
                                        <Row className="columncenter" style={{marginTop:"3%"}}>
                                            <Button href="/adminaccount" className="columncenter shadow" style={{borderRadius:20, background: "linear-gradient(to Bottom, #46A26F, #000000)",border:"none",width:"100%", marginLeft:"35%",marginRight:"35%", marginBottom:"10%"}}>
                                                <a className="font-weight-bold" style={{fontSize: 15, color:"rgb(255,255,255)"}}>Register</a>
                                            </Button>
                                        </Row>
                                    </Col>
                                </div>

            </>
        );
    }
}

export default ConnectWithScriptContent;
