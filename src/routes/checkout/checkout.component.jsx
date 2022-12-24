
import { useContext } from 'react';
import { CartContext } from '../../contexts/card.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.jsx';
import { CheckoutContainer, CheckoutHeader, CheckoutHeaderBlock } from './checkout.styles.jsx';

const Checkout = () =>{

    const {cartItems, cartTotal } = useContext(CartContext);

    
   


   
    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <CheckoutHeaderBlock>
                    <span>Product</span>
                </CheckoutHeaderBlock>
                    

              
                <CheckoutHeaderBlock>
                    <span>Description</span>
                </CheckoutHeaderBlock>
                    

                
                <CheckoutHeaderBlock>
                    <span>Quantity</span>

                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Price</span>

                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Remove</span>

                </CheckoutHeaderBlock>

            </CheckoutHeader>
                

            
            
            
                {
                    cartItems.map((cartItem) => {
                        
                        return(
                            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        )
                    })
                }
                <span className='total'>Total: ${cartTotal}</span>
        </CheckoutContainer>
            
            
      
    )
}


export default Checkout