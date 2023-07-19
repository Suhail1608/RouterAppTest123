import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'

export default function Checkout({ AddOrder, prods }) {
    let { id } = useParams()
    if ((id > 0) & (id <= prods.length)) {
        return (
            <>
                <div className='container'>
                    <CheckoutProduct prod={prods[id - 1]} AddOrder={AddOrder} />
                </div>
            </>

        )
    } else {
        return (
            <>
                <NotFound />
            </>
        )
    }



}
