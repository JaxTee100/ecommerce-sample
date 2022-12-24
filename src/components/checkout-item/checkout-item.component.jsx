import './checkout-item.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/card.context';
import { CheckoutItemContainer, ImageContainer, Image, NameSpan, QuantitySpan, PriceSpan, RemoveButton, ArrowButton, Value } from './checkout-item.styles.jsx';


const CheckoutItem = ({cartItem})=>{
    const {name, imageUrl, price, quantity} = cartItem;

    const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () =>addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

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