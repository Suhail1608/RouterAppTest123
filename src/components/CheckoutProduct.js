import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function CheckoutProduct({ prod, AddOrder }) {
    const [isAdded, setisAdded] = useState(false)
    function handleAddtoCart() {
        AddOrder(prod)
        setisAdded(true)
    }
    if (!isAdded) {
        return (
            <div className='container'>
                <h1>{prod.title}</h1>
                <div className='productdetails'>
                    <img src={prod.image} width={200} height={250}></img>
                    <div className='productdesc'>
                        <p>{prod.description}</p>
                        <h2>$ {prod.price}</h2>
                    </div>

                </div>
                <div>
                    <button className='addtocart' onClick={handleAddtoCart} style={{ width: "90px", color: 'white' }}>Add Now</button>
                    <Link to='/cart' style={{ textDecoration: 'none', color: 'black' }}><button className='addtocart' style={{ width: '100px', color: 'white' }}>Go to Cart</button></Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className='container'>
                <h1>{prod.title}</h1>
                <div className='productdetails'>
                    <img src={prod.image} width={200} height={250}></img>
                    <div className='productdesc'>
                        <p>{prod.description}</p>
                        <h2>$ {prod.price}</h2>
                    </div>

                </div>
                <div>
                    <button className='addtocart' style={{ width: "70px", color: 'white' }} >Added</button>
                    <Link to='/cart' style={{ textDecoration: 'none', color: 'black' }}><button className='addtocart' style={{ width: '100px', color: 'white' }}>Go to Cart</button></Link>
                </div>
            </div>
        )
    }
}
