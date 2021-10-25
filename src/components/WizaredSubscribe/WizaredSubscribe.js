import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import CustomizedSteppers from "../WizardContent/NewWizardContent";
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {bindExpression} from "@babel/types";


//
// function updateState(num){
//     this.setState({num})
// }

class WizaredSubscribe extends React.Component {

    // incrementScore() {
    //     Score.prototype.increment()
    // }
    // state = {};
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         num: 2
    //     }
    //     updateState = updateState.bind(this)
    // }
    // view2() {
    //     this.setState({
    //         viewnum : 1
    //     });
    // }
    // submit = () => {
    //     confirmAlert({
    //         title: 'Confirm to submit',
    //         message: 'Are you sure to do this.',
    //         buttons: [
    //             {
    //                 label: 'Yes',
    //                 onClick: () => {CustomizedSteppers()}
    //             },
    //             {
    //                 label: 'No',
    //                 onClick: () => alert('Click No')
    //             }
    //         ]
    //     })
    // };
    render() {
        // const [open, setOpen] = React.useState(false);
        //
        // const handleClickOpen = () => {
        //     setOpen(true);
        // };
        //
        // const handleClose = () => {
        //     setOpen(false);
        // };


        // const classes = useStyles();
        // let resumeData = this.props.resumeData;
        return (
            <>
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

                                                <div className="columncenter shadow" style={{borderRadius:20, backgroundColor: "#ffffff",border:"none",width:"100%", marginLeft:"0%",marginRight:"0%", marginBottom:"20%"}}>
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
                                                <div  className="columncenter shadow" style={{borderRadius:20, backgroundColor: "#ffffff",border:"none",width:"100%", marginLeft:"0%",marginRight:"0%", marginBottom:"20%"}}>
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
                                                <div  className="columncenter shadow" style={{borderRadius:20, backgroundColor: "#ffffff",border:"none",width:"100%", marginLeft:"0%",marginRight:"0%", marginBottom:"20%"}}>
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
    }
}

export default WizaredSubscribe;
