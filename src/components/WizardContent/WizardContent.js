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
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import WizardAboutYou from '../WizardAboutYou/WizardAboutYou'
import SubscribeAproductContent from '../SubscribeAproductContent/SubscribeAproductContent'
import WizardIntegrate from '../WizardIntegrate/WizardIntegrate'
import WizaredSubscribe from '../WizaredSubscribe/WizaredSubscribe'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

import WizardConnectWithStripe from '../WizardConnectWithStripe/WizardConnectWithStripe'
import WizardPickAWorkflow from '../WizardPickAWorkflow/WizardPickAWorkflow'

import { ProgressBar } from 'react-bootstrap';

import {
    Row,Col,Container, Card
} from "reactstrap";


// const QontoConnector = withStyles({
//     alternativeLabel: {
//         top: 10,
//         left: 'calc(-50% + 16px)',
//         right: 'calc(50% + 16px)',
//     },
//     active: {
//         '& $line': {
//             borderColor: '#784af4',
//         },
//     },
//     completed: {
//         '& $line': {
//             borderColor: '#784af4',
//         },
//     },
//     line: {
//         borderColor: '#eaeaf0',
//         borderTopWidth: 3,
//         borderRadius: 1,
//     },
// })(StepConnector);

// const useQontoStepIconStyles = makeStyles({
//     root: {
//         color: '#eaeaf0',
//         display: 'flex',
//         height: 22,
//         alignItems: 'center',
//     },
//     active: {
//         color: '#784af4',
//     },
//     circle: {
//         width: 8,
//         height: 8,
//         borderRadius: '50%',
//         backgroundColor: 'currentColor',
//     },
//     completed: {
//         color: '#784af4',
//         zIndex: 1,
//         fontSize: 18,
//     },
// });

// function QontoStepIcon(props) {
//     const classes = useQontoStepIconStyles();
//     const { active, completed } = props;
//
//     return (
//         <div
//             className={clsx(classes.root, {
//                 [classes.active]: active,
//             })}
//         >
//             {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
//         </div>
//     );
// }

// QontoStepIcon.propTypes = {
//     /**
//      * Whether this step is active.
//      */
//     active: PropTypes.bool,
//     /**
//      * Mark the step as completed. Is passed to child components.
//      */
//     completed: PropTypes.bool,
// };

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(64,147,102) 0%, rgb(64,147,102) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(64,147,102) 0%, rgb(64,147,102) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        // width:"100%",
        border: 0,
        backgroundColor: '#B6B6B6',
        borderRadius: 1,
    },
})(StepConnector);

// 64,147,102

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#B6B6B6',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(64,147,102) 0%, rgb(64,147,102) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(64,147,102) 0%, rgb(64,147,102) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <img
            className="icon-shape"
            src={("img/wizard1.png")}
            width="50px"
            height="50px"

        />,
        2: <img
            className="icon-shape"
            src={("img/wizard2.png")}
            width="50px"
            height="50px"

        />,
        3: <img
            className="icon-shape"
            src={("img/wizard3.png")}
            width="50px"
            height="50px"

        />,
        4: <img
            className="icon-shape"
            src={("img/wizard4.png")}
            width="50px"
            height="50px"

        />,
        5: <SettingsIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad', 'Create an ad', 'Create an ad'];
}
// var hello = new CustomizedSteppers();
// function getStepContent(step) {
//     // const callApi = () => {
//     //     var myfunction=CustomizedSteppers()
//     // }
//     // var hello = new CustomizedSteppers();
//
//     switch (step) {
//         case 0:
//             return <WizardAboutYou/>;
//         case 1:
//             return <WizardIntegrate/>;
//         case 2:
//             return <WizaredSubscribe />;
//             // functioncall={hello.helloAgain()}
//         case 3:
//             return 'This is the bit I really care about!';
//         case 4:
//             return 'This is the bit I really care about!';
//         default:
//             return 'Unknown step';
//     }
// }

export default function CustomizedSteppers() {

    // static
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    // this.inner = function() {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };


    // var self = this;
    // var helloAgain=0;
    // let helloAgain;
    // this.helloAgain = function helloAgain(){
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //
    // };

    function getStepContent(step) {
        // const callApi = () => {
        //     var myfunction=CustomizedSteppers()
        // }
        // var hello = new myhandleNext();

        switch (step) {
            case 0:
                return <WizardAboutYou/>;
            case 1:
                return <WizardIntegrate/>;
            case 2:
                return (<>
                    <Container style={{}}>
                        <Container style={{}}>
                            <Container style={{}}>
                                <Container style={{}}>
                                    <Container style={{}}>
                                        <Col className="" md="12" xs="12" style={{marginBottom:"16%" }}>


                                            <Row style={{}}>
                                                <div className="font-weight-bold" style={{fontSize: 24, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"4%", marginBottom:"5%"}}>
                                                    Subscribe a Product
                                                </div>


                                            </Row>
                                            <Row style={{marginLeft:"7%",marginRight:"7%",}}>

                                                <Col md="4" xs="12">

                                                    <div
                                                        onClick={handleNext}
                                                        className="columncenter shadow" style={{borderRadius:20, backgroundColor: "#ffffff",border:"none",width:"100%", marginLeft:"0%",marginRight:"0%", marginBottom:"20%"}}>
                                                        <Row className="icon-shape">
                                                            <img
                                                                // onClick={}
                                                                className="columncenter"
                                                                style={{marginTop:"8%",marginBottom:"8%"}}
                                                                alt="..."
                                                                src={("img/sub1.png")}
                                                                width="200px"
                                                                height="150px"
                                                            />
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                £179 Per Month
                                                            </p>
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter font-weight-bold" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                Elite
                                                            </p>
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                Full suite of branded communications including: email, letters and messaging services e.g. SMS, WhatsApp and Social Media.
                                                            </p>
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                Dedicated telephony, answered in your name during UK office hours (7am-7pm).
                                                            </p>
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                Collection activity carried out using your selected process from our Pre-Built workflows, optimized to maximize recoveries                                                        </p>
                                                        </Row>
                                                        <Row className="" style={{}}>
                                                            <p className="font-weight-bold" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"15%",textAlign:"right",width:"100%",marginBottom:"8%"}}>
                                                                Subscribed
                                                            </p>
                                                        </Row>


                                                    </div>
                                                </Col>










                                                <Col md="4" xs="12">
                                                    <div
                                                        onClick={handleNext}
                                                        className="columncenter shadow" style={{borderRadius:20, backgroundColor: "#ffffff",border:"none",width:"100%", marginLeft:"0%",marginRight:"0%", marginBottom:"20%"}}>
                                                        <Row className="icon-shape">
                                                            <img
                                                                className="columncenter"
                                                                style={{marginTop:"8%",marginBottom:"8%"}}
                                                                alt="..."
                                                                src={("img/sub2.png")}
                                                                width="200px"
                                                                height="150px"

                                                            />
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                £179 Per Month
                                                            </p>
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter font-weight-bold" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                Elite
                                                            </p>
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                Full suite of branded communications including: email, letters and messaging services e.g. SMS, WhatsApp and Social Media.
                                                            </p>
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                Dedicated telephony, answered in your name during UK office hours (7am-7pm).
                                                            </p>
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                Collection activity carried out using your selected process from our Pre-Built workflows, optimized to maximize recoveries                                                        </p>
                                                        </Row>
                                                        <Row className="" style={{}}>
                                                            <p className="font-weight-bold" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"15%",textAlign:"right",width:"100%",marginBottom:"8%"}}>
                                                                Subscribed
                                                            </p>
                                                        </Row>

                                                    </div>
                                                </Col>





                                                <Col md="4" xs="12">
                                                    <div
                                                        onClick={handleNext}
                                                        className="columncenter shadow" style={{borderRadius:20, backgroundColor: "#ffffff",border:"none",width:"100%", marginLeft:"0%",marginRight:"0%", marginBottom:"20%"}}>
                                                        <Row className="icon-shape">
                                                            <img
                                                                className="columncenter"
                                                                style={{marginTop:"8%",marginBottom:"8%"}}
                                                                alt="..."
                                                                src={("img/sub3.png")}
                                                                width="200px"
                                                                height="150px"

                                                            />
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                £179 Per Month
                                                            </p>
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter font-weight-bold" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"2%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                Elite
                                                            </p>
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                Full suite of branded communications including: email, letters and messaging services e.g. SMS, WhatsApp and Social Media.
                                                            </p>
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                Dedicated telephony, answered in your name during UK office hours (7am-7pm).
                                                            </p>
                                                        </Row>
                                                        <Row className="columncenter">
                                                            <p className="columncenter" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"10%",textAlign:"center",width:"100%"}}>
                                                                Collection activity carried out using your selected process from our Pre-Built workflows, optimized to maximize recoveries                                                        </p>
                                                        </Row>
                                                        <Row className="" style={{}}>
                                                            <p className="font-weight-bold" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"10%", marginTop:"5%", marginRight:"15%",textAlign:"right",width:"100%",marginBottom:"8%"}}>
                                                                Subscribed
                                                            </p>
                                                        </Row>

                                                    </div>
                                                </Col>

                                            </Row>



                                        </Col>
                                    </Container>
                                </Container>
                            </Container>
                        </Container>

                    </Container>
                </>
                );
            // functioncall={hello.helloAgain()}
            case 3:
                return <WizardConnectWithStripe/>;
            case 4:
                return <WizardPickAWorkflow/>;
            default:
                return 'Unknown step';
        }
    }
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
   const submitall = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {CustomizedSteppers()}
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        })
    };
    return (

        <div className={classes.root}>
            <div className="font-weight-bold" style={{fontSize: 14, color: "rgb(0,0,0)", marginLeft:"-1%", marginTop:"-2%"}}>
                {100-((activeStep+1)*20)}% to complete
            </div>
            <ProgressBar variant="success" style={{backgroundColor:"#d3d3d3", width:"103%",marginLeft:"-1.5%"}} now={(activeStep+1)*20} />
            {/*<Stepper alternativeLabel activeStep={activeStep}>*/}
            {/*    {steps.map((label) => (*/}
            {/*        <Step key={label}>*/}
            {/*            <StepLabel>{label}</StepLabel>*/}
            {/*        </Step>*/}
            {/*    ))}*/}
            {/*</Stepper>*/}
            {/*<Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>*/}
            {/*    {steps.map((label) => (*/}
            {/*        <Step key={label}>*/}
            {/*            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>*/}
            {/*        </Step>*/}
            {/*    ))}*/}
            {/*</Stepper>*/}
            <Stepper style={{backgroundColor:"#d3d3d3", marginTop:"5%"}} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            {/*{label}*/}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>



            <div style={{width:"100%"}}>


                {activeStep === 4 ? (


                    <div  style={{width:"100%"}}>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div className="mycenter" style={{width:"100%"}}>
                            {/*<Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>*/}
                            {/*    Back*/}
                            {/*</Button>*/}
                            <Button
                                className="mycenter shadow"
                                style={{borderRadius:20, background: "linear-gradient(to Bottom, #46A26F, #000000)",border:"none",width:"20%", marginBottom:"10%"}}
                                variant="contained"
                                color="primary"
                                href="/dashboard"
                                // onClick={handleNext}
                                // className={classes.button}
                            >
                                Pick
                            </Button>
                        </div>
                    </div>

                ):(
                    activeStep === 3 ? (
                    <div  style={{width:"100%"}}>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div className="mycenter" style={{width:"100%"}}>
                            {/*<Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>*/}
                            {/*    Back*/}
                            {/*</Button>*/}
                            <Button
                                className="mycenter shadow"
                                style={{borderRadius:20, background: "linear-gradient(to Bottom, #46A26F, #000000)",border:"none",width:"20%", marginBottom:"10%"}}
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                // className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Connect'}
                            </Button>
                        </div>
                    </div>
                ):(
                    activeStep === 2 ? (

                    <div  style={{width:"100%"}}>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>

                    </div>
                    ):(

                activeStep === 1 ? (
                    <div  style={{width:"100%"}}>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div className="mycenter" style={{width:"100%"}}>

                                <Button
                                    className="mycenter shadow"
                                    style={{borderRadius:20, background: "linear-gradient(to Bottom, #46A26F, #000000)",border:"none",width:"20%", marginBottom:"10%"}}
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    // className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Add Ifram'}
                                </Button>
                            {/*<Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>*/}
                            {/*    Back*/}
                            {/*</Button>*/}
                            {/*<Button*/}
                            {/*    className="mycenter shadow"*/}
                            {/*    style={{borderRadius:20, background: "linear-gradient(to Bottom, #46A26F, #000000)",border:"none",width:"20%", marginBottom:"10%"}}*/}
                            {/*    variant="contained"*/}
                            {/*    color="primary"*/}
                            {/*    onClick={handleNext}*/}
                            {/*    // className={classes.button}*/}
                            {/*>*/}
                            {/*    {activeStep === steps.length - 1 ? 'Finish' : 'Add Ifram'}*/}
                            {/*</Button>*/}
                        </div>
                    </div>
                    ):(
                activeStep === 0 ? (
                    <div  style={{width:"100%"}}>

                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div className="mycenter" style={{width:"100%"}}>
                            {/*<Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>*/}
                            {/*    Back*/}
                            {/*</Button>*/}
                            <Button
                                className="mycenter shadow"
                                style={{borderRadius:20, background: "linear-gradient(to Bottom, #46A26F, #000000)",border:"none",width:"20%", marginBottom:"10%"}}
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                // className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Register'}
                            </Button>
                        </div>
                    </div>


                ):(activeStep === steps.length ? (
                    <div>
                        {/*<Typography className={classes.instructions}>*/}
                        {/*    All steps completed - you&apos;re finished*/}
                        {/*</Typography>*/}
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                ))))))}
            </div>
        </div>
    );


}