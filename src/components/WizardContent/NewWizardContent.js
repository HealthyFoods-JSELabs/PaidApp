import React, {Component} from 'react'
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



import {
    Row,Col,Container, Card
} from "reactstrap";
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        viewnum:0
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
// const [activeStep, setActiveStep] = React.useState(0);




class CustomizedSteppers extends React.Component{
// export default function CustomizedSteppers() {

    // static
    constructor(props) {
        super(props)

        this.state = {
            viewnum: 0,
            // password: ''
        }
        // this.updateText1 = this.updateText1
    }
    // updateText1 = (viewnum) => {this.setState({ viewnum })}

    // handleChange = () => {
    //     this.setState({
    //         viewnum : 1
    //     });
    // }

    // updateChild(num) {
    //     this.setState({
    //         viewnum : num
    //     });
    // }
    view2() {
        this.setState({
            viewnum : 1
        });
    }
    view3() {
        this.setState({
            viewnum : 2
        });
    }
    view4() {
        this.setState({
            viewnum : 3
        });
    }


    render() {
        function incrimentnum(){
            this.view2();
        }
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
            const classes = useColorlibStepIconStyles();
            const { active, completed } = props;

            const icons = {
                1: <SettingsIcon />,
                2: <img
                    className="icon-shape"
                    src={("img/wizard2.png")}
                    width="50px"
                    height="50px"

                />,
                3: <VideoLabelIcon />,
                4: <VideoLabelIcon />,
                5: <VideoLabelIcon />,
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



        // const useStyles = makeStyles((theme) => ({
        //     root: {
        //         width: '100%',
        //     },
        //     button: {
        //         marginRight: theme.spacing(1),
        //     },
        //     instructions: {
        //         marginTop: theme.spacing(1),
        //         marginBottom: theme.spacing(1),
        //     },
        // }));

        function getSteps() {
            return ['Select campaign settings', 'Create an ad group', 'Create an ad', 'Create an ad', 'Create an ad'];
        }

        // const classes = useStyles();
        const steps = getSteps();

        function getStepContent(step) {

            switch (step) {
                case 0:
                    return <WizardAboutYou/>;
                case 1:
                    return <WizardIntegrate/>;
                case 2:
                    return <WizaredSubscribe/>;
                // functioncall={hello.helloAgain()}
                case 3:
                    return 'This is the bit I really care about!';
                case 4:
                    return 'This is the bit I really care about!';
                default:
                    return 'Unknown step';
            }
        }
        var activeStep=1;
        var setActiveStep=0;
        // let myhello = new handleNext();
        function myhandleNext () {
            setActiveStep=setActiveStep+1;
        };

        const handleNext = () => {
            setActiveStep=setActiveStep+1;
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
            <div className={useStyles.root}>

                <Stepper style={{backgroundColor: "#d3d3d3", marginTop: "5%"}} alternativeLabel activeStep={this.state.viewnum}
                         connector={<ColorlibConnector/>}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>
                                {/*{label}*/}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>


                <div style={{width: "100%"}}>


                    {this.state.viewnum === 2 ? (

                        <div style={{width: "100%"}}>
                            <Typography className={useStyles.instructions}>{getStepContent(this.state.viewnum)}</Typography>

                        </div>
                    ) : (

                        this.state.viewnum === 1 ? (
                            <div style={{width: "100%"}}>
                                <Typography className={useStyles.instructions}>{getStepContent(this.state.viewnum)}</Typography>
                                <div className="mycenter" style={{width: "100%"}}>

                                    <Button
                                        className="mycenter shadow"
                                        style={{
                                            borderRadius: 20,
                                            background: "linear-gradient(to Bottom, #46A26F, #000000)",
                                            border: "none",
                                            width: "20%",
                                            marginBottom: "10%"
                                        }}
                                        variant="contained"
                                        color="primary"
                                        onClick={() => this.view3()}
                                        // className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Add Ifram'}
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            this.state.viewnum === 0 ? (
                                <div style={{width: "100%"}}>
                                    <Typography
                                        className={useStyles.instructions}>{getStepContent(this.state.viewnum)}</Typography>
                                    <div className="mycenter" style={{width: "100%"}}>
                                        {/*<Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>*/}
                                        {/*    Back*/}
                                        {/*</Button>*/}
                                        <Button
                                            className="mycenter shadow"
                                            style={{
                                                borderRadius: 20,
                                                background: "linear-gradient(to Bottom, #46A26F, #000000)",
                                                border: "none",
                                                width: "20%",
                                                marginBottom: "10%"
                                            }}
                                            variant="contained"
                                            color="primary"
                                            onClick={() => this.view2()}
                                            // className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Register'}
                                        </Button>
                                    </div>
                                </div>


                            ) : (activeStep === steps.length ? (
                                <div>
                                    {/*<Typography className={classes.instructions}>*/}
                                    {/*    All steps completed - you&apos;re finished*/}
                                    {/*</Typography>*/}
                                    <Button onClick={handleReset} className={useStyles.button}>
                                        Reset
                                    </Button>
                                </div>
                            ) : (
                                <div>
                                    <Typography
                                        className={useStyles.instructions}>{getStepContent(this.state.viewnum)}</Typography>
                                    <div>
                                        <Button disabled={activeStep === 0} onClick={handleBack}
                                                className={useStyles.button}>
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={useStyles.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            ))))}
                </div>
            </div>
        );
    }


}

export default CustomizedSteppers;