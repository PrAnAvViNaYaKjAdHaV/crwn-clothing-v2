import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentformContainer, FormContainer } from "../paymentform/paymentform.component";
const PaymentFormStripe = () => {
    const stripe = useStripe()
    const elements = useElements()
    const PaymentHandler = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
    }
    return (
        <PaymentformContainer>
            <FormContainer>
                <CardElement />
            </FormContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}></Button>
        </PaymentformContainer>
    )
}
export default PaymentFormStripe