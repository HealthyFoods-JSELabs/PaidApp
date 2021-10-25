
import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import ISlider from "../ISlider/ISlider";
import {Row} from "reactstrap";

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : true
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                {/*<h1>React-Modal Examples</h1>*/}
                {/*<input type="button" value="Open" onClick={() => this.openModal()} />*/}
                <Modal visible={this.state.visible} width="50%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <Row className="mycenter" style={{width:"100%"}}>
                        {/*<a className="mycenter" href="https://www.positivelypaid.com/" target="_blank">*/}
                        {/*    <img*/}
                        {/*        className="mx-auto mycenter"*/}
                        {/*        // style={{marginLeft:"155px",marginTop:"10px"}}*/}
                        {/*        alt="..."*/}
                        {/*        src={("img/pplogo.png")}*/}
                        {/*        width="80%"*/}
                        {/*        // height="130px"*/}

                        {/*    />*/}
                        {/*</a>*/}
                    </Row>
                    <ISlider/>
                </Modal>
            </section>
        );
    }
}