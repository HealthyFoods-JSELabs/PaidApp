import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";
// import './CSS.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {confirmAlert} from "react-confirm-alert";
import CustomizedSteppers from "../WizardContent/WizardContent";
// import MyPopup from "../Popup/Popup";
import MyPopup from "../Popup/Newpopup";
import DashboardContent from "../DashboardContent/Dashboard1";



class FirstDashboardContent extends React.Component {
    state = {

    };


    render() {

        return (
            <>
                <DashboardContent/>
                <MyPopup/>
                {/*<DashboardContent/>*/}


            </>
        );
    }
}

export default FirstDashboardContent;
