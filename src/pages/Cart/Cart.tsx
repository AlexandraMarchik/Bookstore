import React from "react";
import {useSelector} from "react-redux";

import FormContainer from "src/pages/FormContainer";
import CartList from "src/components/CartList";
import {CartSelectors} from "src/redux/reducer/cartSlice";


const Cart =()=>{
    const cartList = useSelector(CartSelectors.getCartList);

    return <div>
        <FormContainer title={"Your cart"}/>
        <CartList cartList={cartList} />
    </div>
}

export default Cart