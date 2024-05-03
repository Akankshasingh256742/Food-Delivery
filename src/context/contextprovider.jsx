import React, { useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const Storecontext = React.createContext(null)

export const Storecontextprovider = (props) => {
    const [cartitem, setcartitem] = useState({})
    console.log(cartitem)

    const additem = (cartid) => {
        if (!cartitem[cartid]) {
            setcartitem((prev) => ({ ...prev, [cartid]: 1 }))
        }
        else {
            setcartitem((prev) => ({ ...prev, [cartid]: prev[cartid] + 1 }))
        }
    }

    const removeitem = (cartid) => {
        setcartitem((prev) => ({ ...prev, [cartid]: prev[cartid] - 1 }))
    }
    const totalCartamount = () => {
        let totalamount=0
        for (const item in cartitem) {
            if(cartitem[item]>0){
            let foodinfo = food_list.find((product) =>product._id === item )
            totalamount += foodinfo.price * cartitem[item]
        }}
        return totalamount;
    }

    const context = {
        food_list,
        additem,
        removeitem,
        cartitem,
        setcartitem,
        totalCartamount
    }


    return (
        <Storecontext.Provider value={context}>
            {props.children}
        </Storecontext.Provider>
    )
}