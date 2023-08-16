import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./payment-form.styles.css";
import { orderComplete } from "./../../store/cart/cart.action";
import { userUpdateHisotryStart } from './../../store/user/user.action'
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import emailjs from "emailjs-com";
import { selectCurrentUser } from "../../store/user/user.selector";
import { createUserHistory } from '../../utils/firebase/firebase.utils'
const PaymentForm = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const User = useSelector(selectCurrentUser);
  const [fromName, setFormName] = useState(null);
  const [phoneNumber, setFornumber] = useState(null);
  const [item, setItem] = useState(cartItems);
  const [total, setTotal] = useState();
  const [address, setAddress] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const items = cartItems.map((data) => [data.name + "=" + data.quantity]);
    setItem(items.toString());
    setTotal(cartTotal.toString());
  }, [cartTotal]);
  function sendEmail(e) {
    e.preventDefault();
    if (
      phoneNumber === null ||
      item === [] ||
      total === 0 ||
      User === null ||
      address === null
    ) {
      console.log("return");
      return;
    } else {
      dispatch(userUpdateHisotryStart(User, cartItems))
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
  }
  return (
    <form className="contact-form" onSubmit={(e) => sendEmail(e)}>
      <input type="hidden" name="contact_number" />
      <div>
        <label>Name</label>
        <input
          type="text"
          name="from_name"
          onChange={(e) => setFormName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="number"
          id="phone"
          name="from_number"
          onChange={(e) => setFornumber(e.target.value)}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          size="10"
          required
        />
        {phoneNumber ? (
          phoneNumber.length < 10 ? (
            <p className="warning ">Phonenumber cant be less than 10</p>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {phoneNumber ? (
          phoneNumber.length > 10 ? (
            <p className="warning ">Phonenumber cant be greater than 10</p>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
      <div>
        <label>Address</label>
        <textarea name="address" onChange={(e) => setAddress(e.target.value)} />
      </div>

      <input
        type="submit"
        value="Order"
        // onClick={(e) => sendEmail(e)}
        style={{
          background: User === null || total === "0" ? "gray" : "green",
        }}
      />
    </form>
  );
};
export default PaymentForm;
