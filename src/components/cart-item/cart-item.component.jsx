import { CartItemContainer, ItemDetails } from "./cart-item.styles";
import { BiRupee } from "react-icons/bi";
const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x <BiRupee />
          {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
