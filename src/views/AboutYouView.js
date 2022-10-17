import React, {Component} from 'react';
import {Container, Row} from "reactstrap";
import {Button} from "react-bootstrap";


export default class AboutYouView extends Component {
    render() {

        let pageTitle = this.props.pageTitle;
        return (

            <div>
                <Row style={{margin: 0}}>
                    <div style={{
                        backgroundColor: '#003E9B', height: '16vw',
                        borderBottomLeftRadius: '10vw', borderBottomRightRadius: '10vw',
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center"
                    }}
                    >
                        <div style={{
                            height: '100%',
                            color: 'white',
                            fontSize: '4vw',
                            fontWeight: 'bold',
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            fontFamily:'sans-serif'
                        }}>
                            {pageTitle}
                        </div>
                    </div>
                </Row>
            </div>


        );
    }
}
