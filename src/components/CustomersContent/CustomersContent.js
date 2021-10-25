import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";
import CustomersTable from "../CustomersTable/CustomersTable";


class CustomersContent extends React.Component {
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
                                    <Row style={{marginBottom:"2%"}}>
                                        <input placeholder="Search" className="" style={{fontSize: 15, marginTop:"0px", marginBottom:"1px",marginLeft:"0%",marginRight:"60%",width:"100%",height:"30px",borderRadius:20, paddingLeft:"2%" }}></input>
                                    </Row>
                                    <Row style={{}}>
                                        <CustomersTable/>
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

export default CustomersContent;
