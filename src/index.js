import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/styles/rsuite-default.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import DashboardView from "./views/DashboardView";
import PickAworkflowView from "./views/PickAworkflowView";
import ConnectWithStripViews from "./views/ConnectWithStripViews";
import AboutYouView from "./views/AboutYouView";
import SubscribeAproductView from "./views/SubscribeAproductView";
import AnalisisView from "./views/AnalisisView";
import CustomerView from "./views/CustomerView";
import SignUpView from "./views/SignUpView";
import LoginView from "./views/LoginView";
import WizardView from "./views/WizardView";
import FirstDashboardView from "./views/FirstDashboardView";
import PasswordChangeView from "./views/PasswordChangeView.js";
import PayWithCardView from "./views/PayWithCardView";
import StripTestView from "./views/StripTestView";


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={LoginView} />
            <Route exact path="/signup" component={SignUpView} />
            <Route exact path="/dashboard" component={DashboardView} />
            <Route exact path="/pickaworkflow" component={PickAworkflowView} />
            <Route exact path="/connectwithstrip" component={ConnectWithStripViews} />
            <Route exact path="/aboutyou" component={AboutYouView} />
            <Route exact path="/subscribeaproduct" component={SubscribeAproductView} />
            <Route exact path="/analisis" component={AnalisisView} />
            <Route exact path="/customers" component={CustomerView} />
            <Route exact path="/wizard" component={WizardView} />
            <Route exact path="/firstdashboard" component={FirstDashboardView} />
            <Route exact path="/passwordchange" component={PasswordChangeView} />
            <Route exact path="/paywithcard" component={PayWithCardView} />

        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))