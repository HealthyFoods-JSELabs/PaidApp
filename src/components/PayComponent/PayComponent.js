// import React from 'react';
// import Cards from 'react-credit-cards';
// import 'react-credit-cards/es/styles-compiled.css';
// import {
//     Row,Col,Container
// } from "reactstrap";
//
// export default class PaymentForm extends React.Component {
//     state = {
//         cvc: '',
//         expiry: '',
//         focus: '',
//         name: '',
//         number: '',
//     };
//
//     handleInputFocus = (e) => {
//         this.setState({ focus: e.target.name });
//     }
//
//     handleInputChange = (e) => {
//         const { name, value } = e.target;
//
//         this.setState({ [name]: value });
//     }
//
//     render() {
//         return (
//             <Container>
//                 <div style={{marginTop:"360px",marginBottom:"40px"}}>
//             <div id="PaymentForm">
//                 <Cards
//                     cvc={this.state.cvc}
//                     expiry={this.state.expiry}
//                     focused={this.state.focus}
//                     name={this.state.name}
//                     number={this.state.number}
//                 />
//                 <form autocomplete="on">
//                     <input
//                         type="tel"
//                         name="number"
//                         placeholder="Card Number"
//                         onChange={this.handleInputChange}
//                         onFocus={this.handleInputFocus}
//                     />
//                     <input type="text" className="cc-number" pattern="\d*" autocompletetype="cc-number"
//                            placeholder="Card number" required/>
//
//                 </form>
//                 <form autoComplete="on">
//                     <input
//                         type="tel"
//                         name="number"
//                         placeholder="Card Number"
//                         onChange={this.handleInputChange}
//                         onFocus={this.handleInputFocus}
//                     />
//                 </form>
//             </div>
//                 </div>
//             </Container>
//         );
//     }
// }


import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import Card from './Cards'
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
} from './cardUtils'
import {
    Row,Col,Container
} from "reactstrap";


import {loadStripe} from '@stripe/stripe-js';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const App = () => (
    <Styles>
        {/*<h1>🏁 React Final Form</h1>*/}

        <div style={{}}>
        <Form
            onSubmit={onSubmit}
            render={({
                         handleSubmit,
                         form,
                         submitting,
                         pristine,
                         values,
                         active
                     }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <div className="font-weight-bold" style={{marginLeft:"3%",fontSize: 20}}>
                            Pay with Card
                        </div>

                        <div>
                            <Field
                                name="email"
                                component="input"
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                        <Card
                            number={values.number || ''}
                            name={values.name || ''}
                            expiry={values.expiry || ''}
                            cvc={values.cvc || ''}
                            focused={active}
                        />
                        <div>
                            <Field
                                name="number"
                                component="input"
                                type="text"
                                pattern="[\d| ]{16,22}"
                                placeholder="Card Number"
                                format={formatCreditCardNumber}
                            />
                        </div>
                        <div>
                            <Field
                                name="name"
                                component="input"
                                type="text"
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <Field
                                name="expiry"
                                component="input"
                                type="text"
                                pattern="\d\d/\d\d"
                                placeholder="Valid Thru"
                                format={formatExpirationDate}
                            />
                            <Field
                                name="cvc"
                                component="input"
                                type="text"
                                pattern="\d{3,4}"
                                placeholder="CVC"
                                format={formatCVC}
                            />
                        </div>
                        <div>
                            <Field
                                name="zip"
                                component="input"
                                type="text"
                                placeholder="ZIP"
                            />
                        </div>
                        <div style={{marginTop:-5}}>
                            <button  style={{width:"100%",backgroundColor:"#3bc0a8",color:"#ffffff"}}>
                                Subscribe
                            </button>
                            {/*<button*/}
                            {/*    type="button"*/}
                            {/*    onClick={form.reset}*/}
                            {/*    disabled={submitting || pristine}*/}
                            {/*>*/}
                            {/*    Reset*/}
                            {/*</button>*/}
                        </div>
                        <div style={{fontSize:12,textAlign:"center"}}>
                                By confirming your subscription, you allow togethere to charge your card for this payment and future payment in accordance with their terms.
                        </div>
                    </form>
                )
            }}
        />
        </div>
    </Styles>
)

export default App;
// render(<App />, document.getElementById('root'))
