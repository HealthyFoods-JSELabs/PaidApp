import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";
import './CSS.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {confirmAlert} from "react-confirm-alert";
import CustomizedSteppers from "../WizardContent/WizardContent";
import MyPopup from "../Popup/Popup";


// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
// }));

class DashboardContent extends React.Component {
    state = {

    };
    // constructor(props) {
    //     super(props);
    //     this.mypopup=function () {
    //         <img
    //             className="columncenter"
    //             style={{marginTop:"8%",marginBottom:"8%"}}
    //             alt="..."
    //             src={("img/sub1.png")}
    //             width="200%"
    //             height="150px"
    //         />
    //     }
    // }

    constructor(props) {
        super(props);
        this.state = {
            hide: true
        };
    }

    render() {
// function hide(){
//     return(
//         <MyPopup/>
//     )
// }

        // function mypopup() {
        //     return(
        //         <Popup trigger={<button> Trigger</button>} position="right center">
        //             <div>Popup content here !!</div>
        //         </Popup>
        //     )
        // //
        //  };
        // const classes = useStyles();
        // let resumeData = this.props.resumeData;
        return (
            <>

                {/*<MyPopup/>*/}


                {/*{*/}
                {/*    this.state.hide?(*/}
                {/*        <MyPopup/>*/}
                {/*        )*/}

                {/*}*/}
                {/*<Popup trigger={<button> Trigger</button>} position="right center">*/}
                {/*    <div>Popup content here !!</div>*/}
                {/*</Popup>*/}
                <Container style={{}}>
                    <Col md="12" xs="12">


                        <Row style={{}}>
                            <Col md="6" xs="6">
                                <Card  className="shadow columncenter" style={{width:"80%",borderRadius:10,border:'none',marginLeft:'8%',marginRight:'5%', marginBottom:"2%",marginTop:"5%"}}>
                                    <Row style={{marginTop:"3%"}}>
                                        <div className="font-weight-bold" style={{fontSize: 24, color: "rgb(0,0,0)", }}>
                                            All Time
                                        </div>
                                    </Row>
                                    <Row style={{marginTop:"5%"}}>
                                        <div style={{fontSize: 24, color: "rgb(20,0,255)", }}>
                                            $ 100,000,00
                                        </div>
                                    </Row>
                                    <Row style={{marginTop:"5%"}}>
                                        <Col md="2" xs="4">
                                            <div className="icon-shape" style={{fontSize: 24, backgroundColor: "rgb(20,0,255)", marginTop:"0%", width:25,height:25, borderRadius:20}}>
                                                <div style={{fontSize: 12, color: "rgb(255,255,255)", marginTop:"0%"}}>
                                                    35
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="10" xs="8">
                                            <div style={{fontSize: 18, color: "rgb(0,0,0)", marginTop:"0%"}}>
                                                Invoice and credits
                                            </div>
                                        </Col>

                                    </Row>
                                    <Row style={{marginTop:"2%"}}>
                                        <div className="columncenter" style={{fontSize: 24, backgroundColor: "rgb(218,218,218)", marginTop:"0%", width:220,height:2}}>
                                        </div>
                                    </Row>
                                    <Row style={{marginTop:"2%", marginLeft:"-9%"}}>
                                        <Col md="2" xs="4">
                                            <div className="icon-shape" style={{fontSize: 24, backgroundColor: "rgb(3,238,255)", marginTop:"0%", width:25,height:25, borderRadius:20}}>
                                                <div style={{fontSize: 12, color: "rgb(255,255,255)", marginTop:"0%"}}>
                                                    35
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="10" xs="8">
                                            <div style={{fontSize: 18, color: "rgb(0,0,0)", marginTop:"0%", marginBottom:"15%"}}>
                                                Total Customers
                                            </div>
                                        </Col>

                                    </Row>
                                </Card>

                            </Col>
                            <Col md="6" xs="6">
                                <Card  className="shadow columncenter" style={{width:"80%",borderRadius:10,border:'none',marginLeft:'8%',marginRight:'5%', marginBottom:"2%",marginTop:"5%"}}>
                                    <Row style={{marginTop:"3%"}}>
                                        <div className="font-weight-bold" style={{fontSize: 24, color: "rgb(0,0,0)", }}>
                                            All Time
                                        </div>
                                    </Row>
                                    <Row style={{marginTop:"5%"}}>
                                        <div style={{fontSize: 24, color: "rgb(20,0,255)", }}>
                                            $ 100,000,00
                                        </div>
                                    </Row>
                                    <Row style={{marginTop:"5%"}}>
                                        <Col md="2" xs="4">
                                            <div className="icon-shape" style={{fontSize: 24, backgroundColor: "rgb(20,0,255)", marginTop:"0%", width:25,height:25, borderRadius:20}}>
                                                <div style={{fontSize: 12, color: "rgb(255,255,255)", marginTop:"0%"}}>
                                                    35
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="10" xs="8">
                                            <div style={{fontSize: 18, color: "rgb(0,0,0)", marginTop:"0%"}}>
                                                Invoice and credits
                                            </div>
                                        </Col>

                                    </Row>
                                    <Row style={{marginTop:"2%"}}>
                                        <div className="columncenter" style={{fontSize: 24, backgroundColor: "rgb(218,218,218)", marginTop:"0%", width:220,height:2}}>
                                        </div>
                                    </Row>
                                    <Row style={{marginTop:"2%", marginLeft:"-9%"}}>
                                        <Col md="2" xs="4">
                                            <div className="icon-shape" style={{fontSize: 24, backgroundColor: "rgb(3,238,255)", marginTop:"0%", width:25,height:25, borderRadius:20}}>
                                                <div style={{fontSize: 12, color: "rgb(255,255,255)", marginTop:"0%"}}>
                                                    35
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="10" xs="8">
                                            <div style={{fontSize: 18, color: "rgb(0,0,0)", marginTop:"0%", marginBottom:"15%"}}>
                                                Total Customers
                                            </div>
                                        </Col>

                                    </Row>
                                </Card>


                            </Col>
                        </Row>







                        {/*=================================*/}
                        <Row style={{}}>
                            <Col md="6" xs="6">
                                <Card className="shadow columncenter" style={{width:"80%",borderRadius:10,border:'none',marginLeft:'8%',marginRight:'5%', marginBottom:"5%",marginTop:"5%"}}>
                                    <Row style={{marginTop:"3%"}}>
                                        <div className="font-weight-bold" style={{fontSize: 24, color: "rgb(0,0,0)"}}>
                                            Total Open Balances
                                        </div>
                                    </Row>
                                    <Row style={{marginTop:"2%"}}>
                                        <div style={{fontSize: 24, color: "rgb(20,0,255)", }}>
                                            $ 50,000,00
                                        </div>
                                    </Row>
                                    <Row style={{marginTop:"2%"}}>
                                        <Col md="2" xs="4">
                                            <div className="icon-shape" style={{fontSize: 24, backgroundColor: "rgb(20,0,255)", marginTop:"0%", width:25,height:25, borderRadius:20}}>
                                                <div style={{fontSize: 12, color: "rgb(255,255,255)", marginTop:"0%"}}>
                                                    35
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="10" xs="8">
                                            <div style={{fontSize: 18, color: "rgb(0,0,0)", marginTop:"0%"}}>
                                                Invoice and credits
                                            </div>
                                        </Col>

                                    </Row>

                                    <Row style={{marginTop:"4%"}}>
                                        <div className="columncenter" style={{fontSize: 24, backgroundColor: "rgb(218,218,218)", marginTop:"0%", width:220,height:2}}>
                                        </div>
                                    </Row>


                                    <Row style={{marginTop:"4%"}}>
                                        <div className="font-weight-bold" style={{fontSize: 24, color: "rgb(0,0,0)"}}>
                                            Total Overdue
                                        </div>
                                    </Row>
                                    <Row style={{marginTop:"2%"}}>
                                        <div style={{fontSize: 24, color: "rgb(20,0,255)", }}>
                                            $ 50,000,00
                                        </div>
                                    </Row>
                                    <Row style={{marginTop:"2%"}}>
                                        <Col md="2" xs="4">
                                            <div className="icon-shape" style={{fontSize: 24, backgroundColor: "rgb(20,0,255)", marginTop:"0%", width:25,height:25, borderRadius:20}}>
                                                <div style={{fontSize: 12, color: "rgb(255,255,255)", marginTop:"0%"}}>
                                                    35
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="10" xs="8">
                                            <div style={{fontSize: 18, color: "rgb(0,0,0)", marginTop:"0%", marginBottom:"18%"}}>
                                                Invoice and credits
                                            </div>
                                        </Col>

                                    </Row>





                                </Card>

                            </Col>









                            <Col md="6" xs="6">
                                <Card className="shadow columncenter" style={{width:"80%",borderRadius:10,border:'none',marginLeft:'8%',marginRight:'5%', marginBottom:"5%",marginTop:"5%"}}>
                                    <Row style={{marginTop:"3%"}}>
                                        <div className="font-weight-bold" style={{fontSize: 24, color: "rgb(0,0,0)"}}>
                                            Average Terms
                                        </div>
                                    </Row>
                                    <Row style={{marginTop:"2%"}}>
                                        <div style={{fontSize: 24, color: "rgb(20,0,255)", }}>
                                            45 Days
                                        </div>
                                    </Row>


                                    <Row style={{marginTop:"11%"}}>
                                        <div className="columncenter" style={{fontSize: 24, backgroundColor: "rgb(218,218,218)", marginTop:"0%", width:220,height:2}}>
                                        </div>
                                    </Row>


                                    <Row style={{marginTop:"5%"}}>
                                        <div className="font-weight-bold" style={{fontSize: 24, color: "rgb(0,0,0)"}}>
                                            Current Debtor Days
                                        </div>
                                    </Row>
                                    <Row style={{marginTop:"2%", marginBottom:"15%"}}>
                                        <div style={{fontSize: 24, color: "rgb(20,0,255)", }}>
                                            45 Days
                                        </div>
                                    </Row>






                                </Card>


                            </Col>
                        </Row>

                    </Col>


                </Container>
            </>
        );
    }
}

export default DashboardContent;
