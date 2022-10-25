import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Col, Row} from "reactstrap";
// import ReactNavbar from "react-responsive-animate-navbar";
import { Navbar,Container,Nav } from 'react-bootstrap';
export default class NavComponent extends Component {
    render() {

        // let resumeData = this.props.resumeData;
        return (
            <div style={{width:"100%",position:"fixed",top:0,zIndex:2}}>
                <Navbar style={{width:"100%", padding:0}} collapseOnSelect expand="lg" bg="light" >
                    <Container>
                        <Navbar.Brand style={{padding:0}} href="/"><img width='180vw' src="assets/img/SUSLSB.png"></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link style={{fontWeight:'bold',marginRight:'3vw'}} href="/">About</Nav.Link>
                                <Nav.Link style={{fontWeight:'bold',marginRight:'3vw'}} href="/#">Blogs</Nav.Link>
                                <Nav.Link style={{fontWeight:'bold',marginRight:'3vw'}} href="/#">Events</Nav.Link>
                                <Nav.Link style={{fontWeight:'bold',marginRight:'3vw'}} href="/#">Projects</Nav.Link>
                                <Nav.Link style={{fontWeight:'bold',marginRight:'3vw'}} href="/#">News</Nav.Link>
                                <Nav.Link style={{fontWeight:'bold',marginRight:'3vw'}} href="/#">Awards</Nav.Link>
                                <Nav.Link style={{fontWeight:'bold',marginRight:'3vw'}} href="/#">Contact Us</Nav.Link>
                                {/*<Nav.Link eventKey={2} href="#memes">*/}
                                {/*    Dank memes*/}
                                {/*</Nav.Link>*/}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>



        );
    }
}
