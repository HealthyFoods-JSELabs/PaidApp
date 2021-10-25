import React from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';




import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import Card from './Cards'
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
} from './cardUtils'
import {Col} from "reactstrap";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}





const CheckoutForm = () => {
    // const API_KEY = elements.getElement('api-key').val();


    const stripe = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    const elements = useElements();
    const card = elements.getElement(CardElement);


    // const result = await stripe.createToken(card);

    const handleSubmit = async (event) => {
        // event.preventDefault();
        // const {error, paymentMethod} = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card: elements.getElement(CardElement),
        //     result: await stripe.createToken(card),
        //     // const result = await stripe.createToken(card)
        //
        // });




        // event.preventDefault();
        //
        // // const { stripe, elements } = this.props;
        // if (!stripe || !elements) {
        //     return;
        // }
        //
        // const card = elements.getElement(CardElement);
        // const result = await stripe.createToken(card);
        // if (result.error) {
        //     console.log(result.error.message);
        // } else {
        //     console.log(result.token);
        // }



        // var form = document.getElementById('payment-form');
        // form.addEventListener('submit', function(event) {
        //     event.preventDefault();
        //
        //     stripe.createToken(card).then(function(result) {
        //         if (result.error) {
        //             // Inform the customer that there was an error.
        //             var errorElement = document.getElementById('card-errors');
        //             errorElement.textContent = result.error.message;
        //         } else {
        //             // Send the token to your server.
        //             // stripeTokenHandler(result.token);
        //             var token = result.token.id;
        //             console.log(token)
        //         }
        //     });
        // });


        stripe.createToken(card).then(function (result) {
            if (result.error) {
                // Inform the user if there was an error.
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
            } else {
                // Send the token to your server.
                var token = result.token.id;
                console.log(token)
            }
        });

    };

    return (
        <div className="mycenter1" style={{width:"100%", height:window.innerHeight}}>
    <div className="shadow " style={{width:"80%",paddingLeft:"5%",paddingRight:"5%",paddingTop:"5%",paddingBottom:"5%"}}>
            <form onSubmit={handleSubmit}>
                <div className="font-weight-bold" style={{fontSize: 20}}>
                    Pay with Card
                </div>
                <div style={{fontSize: 15,textAlign:"justify",marginTop:12}}>
                    Email
                </div>
                <div>
                    <input type="email" placeholder="" className="" style={{fontSize: 13,  marginBottom:"1px",width:"100%",height:"25px",borderRadius:0, paddingLeft:"2%" }}></input>
                </div>
                <div style={{fontSize: 15,textAlign:"justify",marginTop:12}}>

                    Card Information
                </div>

                <div style={{width:"100%",marginTop:5}}>
                    <CardElement />
                </div>
                <div style={{fontSize: 15,textAlign:"justify",marginTop:12}}>
                    ZIP
                </div>
                <div>
                    <input placeholder="" className="" style={{fontSize: 13,  marginBottom:"1px",width:"100%",height:"25px",borderRadius:0, paddingLeft:"2%" }}></input>
                </div>
                <button type="submit" disabled={!stripe} style={{width:"100%",height:30, backgroundColor:"#3bc0a8",color:"#ffffff",marginTop:12}}>
                    Subscribe
                </button>
                <div style={{fontSize:12,textAlign:"center",marginTop:12}}>
                    By confirming your subscription, you allow togethere to charge your card for this payment and future payment in accordance with their terms.
                </div>
            </form>
        </div>
        </div>


    );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const App = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default App;