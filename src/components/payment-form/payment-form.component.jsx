import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./payment-form.styles.css";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import emailjs from "emailjs-com";
const PaymentForm = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [fromName, setFormName] = useState("");
  const [fromEmail, setFormEmail] = useState("");
  const [item, setItem] = useState(cartItems);
  const [total, setTotal] = useState();
  const [address, setAddress] = useState("");
  useEffect(() => {
    const items = cartItems.map((data) => [data.name + "=" + data.quantity]);
    setItem(items.toString());
    setTotal(cartTotal.toString());
  }, [cartTotal]);

  function sendEmail(e) {
    e.preventDefault();
    const emailConstant = {
      from_name: fromName,
      from_email: fromEmail,
      item: item,
      total: total,
      address: address,
    };
    emailjs
      .send(
        "service_s638xb8",
        "template_iwmj80t",
        emailConstant,
        "vFmkgEt53JE1uTz0L"
      )
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <form className="contact-form">
      <input type="hidden" name="contact_number" />
      <div>
        <label>Name</label>
        <input
          type="text"
          name="from_name"
          onChange={(e) => setFormName(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="from_email"
          onChange={(e) => setFormEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Address</label>
        <textarea name="address" onChange={(e) => setAddress(e.target.value)} />
      </div>

      <input type="submit" value="Send" onClick={(e) => sendEmail(e)} />
    </form>
  );
};
export default PaymentForm;
