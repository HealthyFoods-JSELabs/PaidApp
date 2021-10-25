import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import Drawer from 'react-drag-drawer';
import PopupSlider from "../PopupSlider/PopupSlider";
import {
    Row,Col,Container, Card
} from "reactstrap";
import Button from "@material-ui/core/Button";
export default class App extends React.Component {
    state = {
        open: false,
    };
    toggle = () => {
        let { toggle } = this.state;

        this.setState({ toggle: !toggle })
    };

    logState = () => {
        console.log(`Drawer now ${this.state.open ? 'open' : 'closed'}`)
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render () {
        const { open } = this.state;

        return (
            <div style={{width:"100%"}}>
                <button
                    className="mycenter shadow"
                    style={{borderRadius:20, background: "linear-gradient(to Bottom, #46A26F, #000000)",border:"none",width:"35%", marginBottom:"5%",color:"#FFFFFF"}}
                    // variant="contained"
                    color="#FFFFFF"
                    onClick={this.onOpenModal}>PICK</button>
                <Drawer

                    style={{width:500, height:200,backgroundColor: "rgb(255,255,255)"}}
                    open={open}
                    onRequestClose={this.toggle}
                >
                    <div className="mycenter1" style={{width:500,backgroundColor: "rgb(255,255,255)"}}>
                        <Col>
                        <Row className="mycenter1" style={{marginTop:"5%",width:"100%"}}>
                            <p>
                                Select an Image to Pick a Flow
                            </p>
                        </Row>
                        <Row className="mycenter1" style={{marginTop:"5%",width:"100%"}}>
                            <Col>
                            <PopupSlider/>
                            </Col>
                        </Row>
                        <Row style={{marginTop:"5%",marginBottom:"5%", width:"100%"}}>
                            <Col md="6" xs="6" className="mycenter1">
                                <Row >
                                    <Button onClick={this.onCloseModal}>Cancel</Button>
                                </Row>
                            </Col>
                            <Col md="6" xs="6" className="mycenter1">
                                <Button href="/dashboard">Confirm</Button>
                            </Col>
                        </Row>
                        </Col>
                    </div>
                </Drawer>
            </div>

        )
    }
}