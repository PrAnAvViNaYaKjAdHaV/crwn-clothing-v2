import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import { BiRupee } from "react-icons/bi";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl, id } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate()
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} onClick={() => navigate(`/${id}`)} />
      <Footer>
        <Name>{name}</Name>
        <Price>
          <BiRupee />
          {price}
        </Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
