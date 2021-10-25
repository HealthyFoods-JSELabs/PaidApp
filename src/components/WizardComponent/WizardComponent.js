import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";
// import WizardContent from "../WizardContent/WizardContent.js";
import WizardContent from "../WizardContent/mywizard2.js";
// import WizardContent from "../WizardContent/NewWizardContent";
// import WizardContent from "../WizardContent/testWizardContent";



class WizardComponent extends React.Component {
    state = {};
    render() {
        // const classes = useStyles();
        // let resumeData = this.props.resumeData;
        return (
            <>
                <Container style={{}}>
                    <Container style={{}}>
                        <Container style={{}}>
                            <Container style={{}}>
                                <Container style={{}}>
                                    <Row className="mycenter" style={{width:"100%"}}>
                                        <a className="mycenter" href="https://www.positivelypaid.com/" target="_blank">
                                            <img
                                                className="mx-auto mycenter"
                                                // style={{marginLeft:"155px",marginTop:"10px"}}
                                                alt="..."
                                                src={("img/pplogo.png")}
                                                width="360px"
                                                height="130px"

                                            />
                                        </a>
                                    </Row>
                                    <Row style={{width:"100%"}}>
                                        <Col className="shadow" style={{backgroundColor:"#5356d3",borderRadius:10, marginBottom:"16%", width:"100%" }}>

                                            <WizardContent/>

                                        </Col>
                                    </Row>
                                </Container>
                            </Container>
                        </Container>
                    </Container>

                </Container>
            </>
        );
    }
}

export default WizardComponent;
