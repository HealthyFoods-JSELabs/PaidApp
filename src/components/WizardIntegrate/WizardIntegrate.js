import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";


class WizardIntegrate extends React.Component {
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
                                <Container style={{}}>
                                    <Col className="" md="12" xs="12" style={{marginBottom:"2%" }}>


                                        <Row style={{}}>
                                            <div className="font-weight-bold" style={{fontSize: 24, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"4%"}}>
                                                Integrated with codat
                                            </div>
                                            <p className="" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"4%", marginRight:"10%"}}>
                                                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”
                                            </p>
                                            <p className="" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"3%", marginRight:"10%"}}>
                                                The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
                                            </p>
                                            <p className="" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"3%", marginRight:"10%"}}>
                                                Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.
                                            </p>
                                            <p className="" style={{fontSize: 15, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"3%", marginRight:"10%"}}>
                                                It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.
                                            </p>
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

export default WizardIntegrate;
