import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";


class PickAworkflowContent extends React.Component {
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
                                                Pick a workflow
                                            </div>

                                            <p className="" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"4%", marginRight:"10%"}}>
                                                Aldus Corporation, which later merged with Adobe Systems, ushered lorem ipsum into the information age with its desktop publishing software Aldus PageMaker.
                                            </p>
                                            <p className="" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"3%", marginRight:"10%"}}>
                                                The program came bundled with lorem ipsum dummy text for laying out page content, and other word processors like Microsoft Word followed suit. More recent.
                                            </p>
                                            <p className="" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"3%", marginRight:"10%"}}>
                                                web design has helped proliferate lorem ipsum across the internet as a placeholder for future text—and in some cases the final content (this is why we proofread, kids).
                                            </p>
                                            <p className="" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"3%", marginRight:"10%"}}>
                                                The 1914 Loeb Classical Library Edition ran out of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dangling with “do-”, while another begins with the now ubiquitous “lorem ipsum”.
                                            </p>

                                        </Row>
                                        <Row>
                                            <img
                                                className="mx-auto"
                                                style={{marginTop:"8%",marginBottom:"4%"}}
                                                alt="..."
                                                src={("img/pickbg.png")}
                                                width="450px"
                                                height="280px"

                                            />
                                        </Row>
                                        <Row className="columncenter" style={{}}>
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

export default PickAworkflowContent;
