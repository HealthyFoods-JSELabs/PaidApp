import React from 'react';
import { Row,Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
// import Logo from '../../assets/icon-logo';
import {
    Container, Card
} from "reactstrap";
import {Button} from "react-bootstrap";

const styles = StyleSheet.create({
    container: {
        marginLeft: 32,
        marginRight: 32
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#ffffff',
        opacity: 0.7,
        marginLeft: 12
    }
});

function PPLogoComponent() {
    return (
        <Row className={css(styles.container)} horizontal="center" vertical="center">
            {/*<Logo />*/}
            {/*<span className={css(styles.title)}>Beta Bridge</span>*/}


            <a href="https://www.positivelypaid.com/" target="_blank">
            <img
                className="mx-auto"
                // style={{marginLeft:"25px",marginTop:"10px"}}
                alt="..."
                src={("img/pplogo.png")}
                width="220px"
                height="80px"

            />
            </a>




        </Row>

    );
}

export default PPLogoComponent;
