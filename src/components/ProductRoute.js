import React from 'react'
import { Route } from 'react-router-dom'
import Checkout from './Checkout'
export default function ProductRoute(prods, prodlink, check, AddOrder) {
    prods.map((x) => {
        return (
            <Route path={"/" + prodlink} element={<Checkout prod={check} AddOrder={AddOrder} />}></Route>
        )
    })

}
