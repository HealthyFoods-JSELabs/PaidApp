import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import WizardAboutYou from '../WizardAboutYou/WizardAboutYou'
import SubscribeAproductContent from '../SubscribeAproductContent/SubscribeAproductContent'
import WizardIntegrate from '../WizardIntegrate/WizardIntegrate'
import WizaredSubscribe from '../WizaredSubscribe/WizaredSubscribe'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

import WizardConnectWithStripe from '../WizardConnectWithStripe/WizardConnectWithStripe'
import WizardPickAWorkflow from '../WizardPickAWorkflow/WizardPickAWorkflow'

import MyPopup from "../Popup/Popup";

import { ProgressBar } from 'react-bootstrap';

import {
    Row,Col,Container, Card, Button
} from "reactstrap";




// 64,147,102







function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad', 'Create an ad', 'Create an ad'];
}


export default function CustomizedSteppers() {

    // static
    // const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();


    // let myhello = new handleNext();
    function myhandleNext () {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return (
                    <Col>
                        <Row style={{width:"100%"}}>
                            <Col md="2" xs="2" style={{width:"100%"}} className="mycenter1">
                                <div style={{visibility:activeStep === 0 ?  "hidden":"visible"}}>
                                <img

                                    alt="..."
                                    src={("img/backbtn.png")}
                                    width="50px"
                                    height="50px"
                                    onClick={handleBack}

                                />
                                </div>
                            </Col>

                            <Col md="8" xs="8" style={{width:"100%"}} className="mycenter1">
                                <Row style={{width:"100%"}} className="mycenter1">
                                    <div className="mycenter1" style={{width:"100%",paddingRight:0,paddingLeft:0}}>


                                        {(
                                            activeStep === 2 ? (
                                                <Button style={{width:"80%",backgroundColor:"rgb(255,255,255)"}}>
                                                    <img
                                                        // onClick={}
                                                        className="columncenter"
                                                        style={{marginTop:"8%",marginBottom:"8%"}}
                                                        alt="..."
                                                        src={("img/sub3.png")}
                                                        width="100%"
                                                        // height="150px"
                                                    />
                                                </Button>
                                            ):(

                                                activeStep === 1 ? (
                                                    <Button style={{width:"80%",backgroundColor:"rgb(255,255,255)"}}>
                                                        <img
                                                            // onClick={}
                                                            className="columncenter"
                                                            style={{marginTop:"8%",marginBottom:"8%"}}
                                                            alt="..."
                                                            src={("img/sub2.png")}
                                                            width="100%"
                                                            // height="150px"
                                                        />
                                                    </Button>
                                                ):(
                                                    activeStep === 0 ? (
                                                        <Button style={{width:"80%",backgroundColor:"rgb(255,255,255)"}}>
                                                            <img
                                                                // onClick={}
                                                                className="columncenter"
                                                                style={{marginTop:"8%",marginBottom:"8%"}}
                                                                alt="..."
                                                                src={("img/sub1.png")}
                                                                width="100%"
                                                                // height="150px"
                                                            />
                                                        </Button>

                                                    ):(activeStep === steps.length ? (
                                                        <div></div>
                                                    ) : (
                                                        <div></div>
                                                    )))))}
                                    </div>
                                </Row>
                            </Col>

                            <Col md="2" xs="2" style={{width:"100%"}} className="mycenter1">
                                <div style={{visibility:activeStep === 2 ?  "hidden":"visible"}}>
                                <img
                                    alt="..."
                                    src={("img/nextbtn.png")}
                                    width="50px"
                                    height="50px"
                                    onClick={handleNext}
                                />
                                </div>
                            </Col>

                        </Row>
                        <Row className="mycenter1" style={{width:"100%"}}>
                            <Col md="1" xs="1" style={{width:"100%", paddingLeft:0,paddingRight:0}}>
                                <div style={{width:10,height:10,backgroundColor:activeStep === 0 ?"rgba(0,255,53,0.56)":"rgb(211,211,211)",borderRadius:50}}></div>
                            </Col>
                            <Col md="1" xs="1" style={{width:"100%", paddingLeft:0,paddingRight:0}}>
                                <div style={{width:10,height:10,backgroundColor:activeStep === 1 ?"rgba(0,255,53,0.56)":"rgb(211,211,211)",borderRadius:50}}></div>
                            </Col>
                            <Col md="1" xs="1" style={{width:"100%", paddingLeft:0,paddingRight:0}}>
                                <div style={{width:10,height:10,backgroundColor:activeStep === 2 ?"rgba(0,255,53,0.56)":"rgb(211,211,211)",borderRadius:50}}></div>
                            </Col>

                        </Row>
                    </Col>


    );


}