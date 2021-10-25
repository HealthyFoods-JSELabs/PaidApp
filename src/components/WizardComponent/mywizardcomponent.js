import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";
import WizardContent from "../WizardContent/WizardContent.js";
// import WizardContent from "../WizardContent/NewWizardContent";
// import WizardContent from "../WizardContent/testWizardContent";



class mywizardcomponent extends React.Component {
    state = {};
    render() {
        // const classes = useStyles();
        // let resumeData = this.props.resumeData;
        return (
            <>
                <Container style={{}}>
                    <Container style={{}}>
                        <Container style={{}}>
                           <Row>
                               <Col>
                                   <div style={{width:"5px", height:"5px"}}>
                                   </div>
                               </Col>
                           </Row>

                        </Container>
                    </Container>

                </Container>
            </>
        );
    }
}

export default mywizardcomponent;
