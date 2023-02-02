import './checkout-item.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action.js';
import { CheckoutItemContainer, ImageContainer, Image, NameSpan, QuantitySpan, PriceSpan, RemoveButton, ArrowButton, Value } from './checkout-item.styles.jsx';


const CheckoutItem = ({cartItem})=>{
    const {name, imageUrl, price, quantity} = cartItem;
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems)
    




    

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () =>dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`} />
            </ImageContainer>
                
            
            <NameSpan>{name}</NameSpan>
            <QuantitySpan>
                <ArrowButton onClick={removeItemHandler}>
                    &#10094;
                </ArrowButton>
                <Value>{quantity}</Value>
                <ArrowButton className='arrow' onClick={addItemHandler}>
                    &#10095;
                </ArrowButton>
            </QuantitySpan>
            <PriceSpan>{price}</PriceSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
            
        </CheckoutItemContainer>
            
        
    )
}

export default CheckoutItem