import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
export default function Products({ prods, AddOrder, orders, OpenCheckout }) {
    return (
        <>
            <div className='container'>
                <h1>Products</h1>
                <table>
                    <thead>
                        {
                            prods.map((prod) => {
                                return <ProductCard prods={prods} prod={prod} AddOrder={AddOrder} orders={orders} OpenCheckout={OpenCheckout} />
                            })
                        }
                    </thead>
                </table>
                <button className='addtocart'><Link to='/cart' style={{ textDecoration: 'none', color: 'white' }}>Cart</Link></button>
            </div >

        </>


    )
}
