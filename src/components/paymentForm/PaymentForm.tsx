import { useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/CartSelector";
import { selectCurrentUser } from "../../store/user/UserSelector";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import { BUTTON_TYPE_CLASSES } from "../button/Button";
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./PaymentForm.styles";
const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/api/functions/CreatePaymentIntent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());
    const {
      paymentIntent: { client_secret },
    } = response;
    const cardDetails = elements.getElement(CardElement);

    if (!ifValidCardElement(cardDetails)) return;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "guest",
        },
      },
    });
    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      alert("Payment Successful");
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
