import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentformContainer, FormContainer, PaymentButton } from "../paymentform/paymentform.style";
import { useSelector } from "react-redux";
import { selectCurrentUser } from '../../store/user/user.selector'
import { orderComplete } from "./../../store/cart/cart.action";
import { userUpdateHistoryStart } from './../../store/user/user.action'
import { useDispatch } from "react-redux";
import {
    selectCartItems,
    selectCartTotal,
} from "../../store/cart/cart.selector";
const PaymentFormStripe = () => {
    const dispatch = useDispatch()
    const stripe = useStripe()
    const elements = useElements()
    const amount = useSelector(selectCartTotal)
    const currentuser = useSelector(selectCurrentUser)
    const cartItems = useSelector(selectCartItems);
    const [isProcessingPayment, setisProcessingPayment] = useState(false)
    const PaymentHandler = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            console.log(true)
            return
        }
        setisProcessingPayment(true)
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json())
        const { paymentIntent: { client_secret } } = response
        console.log(client_secret)
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentuser ? currentuser.displayName : 'Guest'
                }
            }
        })
        setisProcessingPayment(false)
        if (paymentResult.error) {
            alert(paymentResult.error.message)
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('payment successful')
                dispatch(userUpdateHistoryStart(currentuser, cartItems))
                dispatch(orderComplete())
            }
        }
    }
    return (
        <PaymentformContainer >
            <h2>Credit card payment</h2>
            <FormContainer onSubmit={PaymentHandler}>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</PaymentButton>
            </FormContainer>
        </PaymentformContainer>
    )
}
export default PaymentFormStripe