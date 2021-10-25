import React from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, CardNumberElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';
import SubscribeAproductComponent from "../SubscribeAproductComponent/SubscribeAproductComponent";

class CheckoutForm extends React.Component {
    handleSubmit = async (event) => {
        event.preventDefault();
        const {stripe, elements} = this.props;
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };

    render() {
        const {stripe} = this.props;
        return (
            <form onSubmit={this.handleSubmit}>




                <CardElement/>





                {/*<CardNumberElement/>*/}
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        );
    }
}

const InjectedCheckoutForm = () => (
    <ElementsConsumer>
        {({stripe, elements}) => (
            <CheckoutForm stripe={stripe} elements={elements} />
        )}
    </ElementsConsumer>
);

const stripePromise = loadStripe('STRIPE_PUBLIC_KEY=pk_test_aaYNOZUMPpxh0TxNs1IRNipO');

const App = () => (
    <Elements stripe={stripePromise}>
        <InjectedCheckoutForm />
    </Elements>
);

export default App;