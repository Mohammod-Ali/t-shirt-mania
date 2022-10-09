import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {
 
    let message;
    if(cart.length === 0){
        message = <p>Please buy at least one item</p>
    }else{
        message = <h5>Thanks for buying</h5>
    }

    return (
        <div>
            {/* conditional class */}
            <h2 className={cart.length === 2 ? `orange` : `purple`}>Order Summery</h2>
            <h5 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p 
                key={tshirt._id}> 
                {tshirt.name}
                <button onClick={()=> handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {/* conditional operator */}
            {
                message
            }
            {/* {cart.length === 0 ? <p>Please buy at least one item</p> : <p>Thanks for buying</p>}
            <p>and operator</p> */}
            {
                cart.length === 2 && <h2>Double Items</h2>
            }
            {cart.length ===3 || <p>One more</p>}
        </div>
    );
};

export default Cart;