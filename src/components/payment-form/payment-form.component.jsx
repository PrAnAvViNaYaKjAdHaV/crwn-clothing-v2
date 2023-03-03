import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./payment-form.styles.css";
import { orderComplete } from "./../../store/cart/cart.action";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import emailjs from "emailjs-com";
import { selectCurrentUser } from "../../store/user/user.selector";
const PaymentForm = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const User = useSelector(selectCurrentUser);
  const [fromName, setFormName] = useState();
  const [phoneNumber, setFornumber] = useState();
  const [item, setItem] = useState(cartItems);
  const [total, setTotal] = useState();
  const [address, setAddress] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const items = cartItems.map((data) => [data.name + "=" + data.quantity]);
    setItem(items.toString());
    setTotal(cartTotal.toString());
  }, [cartTotal]);
  function sendEmail(e) {
    if (
      phoneNumber === null ||
      item === null ||
      total === null ||
      User === null ||
      address === null
    ) {
      return;
    }
    e.preventDefault();
    const emailConstant = {
      from_name: fromName,
      from_email: User.email,
      item: item,
      total: total,
      address: address,
      from_number: phoneNumber,
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
          dispatch(orderComplete());
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
        <label>Phone Number</label>
        <input
          type="number"
          name="from_number"
          onChange={(e) => setFornumber(e.target.value)}
        />
      </div>
      <div>
        <label>Address</label>
        <textarea name="address" onChange={(e) => setAddress(e.target.value)} />
      </div>

      <input
        type="submit"
        value="Order"
        onClick={(e) => sendEmail(e)}
        style={{
          background: User === null || total === "0" ? "gray" : "green",
        }}
      />
    </form>
  );
};
export default PaymentForm;
