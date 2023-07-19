import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
export default function Cart({ orders, prods, RemoveOrder }) {

    if (orders.length > 0) {
        return (
            <div className='ordercontainer'>
                <h1>Your Cart</h1>
                <div className='order'>
                    <table>
                        <thead>
                            {
                                prods.map((prod) => {
                                    return <OrderCard prods={prods} prod={prod} RemoveOrder={RemoveOrder} />
                                })
                            }
                        </thead>
                    </table>
                    <div className='checkoutsection'>
                        <h2>Checkout</h2>

                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <div className='ordercontainer'>
                    <h1>Your Cart</h1>

                </div>
                <div style={{ paddingTop: '100px' }}>
                    <h3 style={{ textAlign: 'center' }}>cart is empty.</h3>
                </div>
            </>

        )

    }

}
