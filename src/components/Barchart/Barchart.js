import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";


class Barchart extends React.Component {
    state = {
        bar1: 500,
        bar2: 300,
        bar3: 600,
        bar4: 500,
        bar5: 400,
        // bartotal:this.state.bar1
    };

    render() {
        const bartotal = this.state.bar1+this.state.bar2+this.state.bar3+this.state.bar4+this.state.bar5;
        const maxheight = 600;
        // let resumeData = this.props.resumeData;

        return (
            <>
                <Container style={{}}>
                    <Container style={{}}>
                        <Container style={{}}>

                            {/*<Row>*/}
                            {/*    <Col md="4" xs="12" style={{width:"100%",backgroundColor: "#ff1900",height:(this.state.bar1/bartotal)*100}}>*/}
                            {/*    </Col>*/}
                            {/*    <Col md="4" xs="12" style={{width:"100%",backgroundColor: "#00ff11",height:(this.state.bar2/bartotal)*100}}>*/}
                            {/*    </Col>*/}
                            {/*    <Col md="4" xs="12" style={{width:"100%",backgroundColor: "#2900ff",height:(this.state.bar3/bartotal)*100}}>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}


                            <Row style={{backgroundColor: "rgba(255,255,255,0.21)"}}>
                                <Col md="1" xs="1" style={{backgroundColor: "rgba(255,255,255,0.21)"}}>
                                </Col>
                                <Col className="mycenter" md="2" xs="2" style={{height:"100%"}}>
                                    <div  style={{width:"100%",backgroundColor: "rgba(112,112,112,0.21)",height:maxheight, borderRadius:40}}>
                                        <div style={{width:"100%",background: "linear-gradient(to Bottom, #46A26F, #000000)",height:(this.state.bar1/bartotal)*maxheight*2, marginTop:maxheight-((this.state.bar1/bartotal)*maxheight*2), borderRadius:40}}>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mycenter" md="2" xs="2" style={{height:"100%",backgroundColor: "rgba(255,255,255,0.21)"}}>
                                    <div className="barwidth" style={{backgroundColor: "rgba(112,112,112,0.21)",height:maxheight, borderRadius:40}}>
                                        <div style={{width:"100%",background: "linear-gradient(to Bottom, #9AD887, #000000)",height:(this.state.bar2/bartotal)*maxheight*2, marginTop:maxheight-((this.state.bar2/bartotal)*maxheight*2), borderRadius:40}}>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mycenter" md="2" xs="2" style={{height:"100%"}}>
                                    <div className="barwidth" style={{backgroundColor: "rgba(112,112,112,0.21)",height:maxheight, borderRadius:40}}>
                                        <div style={{width:"100%",background: "linear-gradient(to Bottom, #FFED00, #000000)",height:(this.state.bar3/bartotal)*maxheight*2, marginTop:maxheight-((this.state.bar3/bartotal)*maxheight*2), borderRadius:40}}>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mycenter" md="2" xs="2" style={{height:"100%",backgroundColor: "rgba(255,255,255,0.21)"}}>
                                    <div style={{width:"30%",backgroundColor: "rgba(112,112,112,0.21)",height:maxheight, borderRadius:40}}>
                                        <div style={{width:"100%",background: "linear-gradient(to Bottom, #FFB300, #000000)",height:(this.state.bar4/bartotal)*maxheight*2, marginTop:maxheight-((this.state.bar4/bartotal)*maxheight*2), borderRadius:40}}>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mycenter" md="2" xs="2" style={{height:"100%"}}>
                                    <div className="barwidth" style={{backgroundColor: "rgba(112,112,112,0.21)",height:maxheight, borderRadius:40}}>
                                        <div style={{width:"100%",background: "linear-gradient(to Bottom, #F94200, #000000)",height:(this.state.bar5/bartotal)*maxheight*2, marginTop:maxheight-((this.state.bar5/bartotal)*maxheight*2), borderRadius:40}}>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="1" xs="1" style={{height:"100%",backgroundColor: "rgba(255,255,255,0.21)"}}>
                                </Col>

                            </Row>
                            <Row style={{backgroundColor: "rgba(112,112,112,0.21)", height:2, width:"100%"}}>
                            </Row>
                            <Row style={{width:"100%"}}>
                                <Col md="1" xs="1" style={{height:"100%",backgroundColor: "rgba(255,255,255,0.21)"}}>
                                </Col>
                                <Col className="mycenter" md="2" xs="2" style={{height:"100%"}}>
                                    <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"0%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                        Current
                                    </p>
                                </Col>
                                <Col className="mycenter" md="2" xs="2" style={{height:"100%"}}>
                                    <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"0%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                        1-30
                                    </p>
                                </Col>
                                <Col className="mycenter" md="2" xs="2" style={{height:"100%"}}>
                                    <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"0%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                        31-60
                                    </p>
                                </Col>
                                <Col className="mycenter" md="2" xs="2" style={{height:"100%"}}>
                                    <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"0%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                        61-90
                                    </p>
                                </Col>
                                <Col className="mycenter" md="2" xs="2" style={{height:"100%"}}>
                                    <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"0%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                        >90
                                    </p>
                                </Col>
                                <Col md="1" xs="1" style={{height:"100%",backgroundColor: "rgba(255,255,255,0.21)"}}>
                                    <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"0%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                        Day
                                    </p>
                                </Col>
                            </Row>

                        </Container>
                    </Container>

                </Container>
            </>
        );
    }
}

export default Barchart;