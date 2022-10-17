import React from "react";
import AnalisisComponent from "../components/AnalisisComponent/AnalisisComponent";
import {Col, Container, Input, Row} from "reactstrap";



class AnalisisView extends React.Component {

    render() {
        return (
            <Row>
                            <Container style={{paddingLeft: '15%', paddingRight: '15%'}}>
                                <div style={{
                                    fontSize: '6vw',
                                    fontWeight: 'bold'
                                }}>
                                    Contact us
                                </div>
                            </Container>
                        </Row>

        );
    }
}

export default AnalisisView;
