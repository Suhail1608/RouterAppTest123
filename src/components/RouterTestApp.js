import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import products from '../products.json'
import './RouterTestApp.css'
import Home from './Home'
import Products from './Products'
import Users from './Users'
import Cart from './Cart'
import Checkout from './Checkout'
import Signin from './Signin'

export default function RouterTestApp() {

    let [prods] = [products]
    const [orders, setOrders] = useState([])
    const [check, setCheck] = useState([])
    const [prodlink, setProdlink] = useState("1")

    useEffect(() => {
        setOrders([...Array.from(new Set(orders))])
    }, [orders])
    function AddOrder(order) {
        setOrders([...orders, order])
        console.log(orders)
    }
    function RemoveOrder(order) {
        setOrders(orders.filter((x) => order !== x))
    }
    function OpenCheckout(x) {
        setCheck(x)
        setProdlink(x.id)
    }
    return (

        < BrowserRouter >
            <header>
                <nav className='navbar'>
                    <ul>
                        <li><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
                        <li><Link to='/prod' style={{ textDecoration: 'none', color: 'white' }}>Products</Link></li>
                        <li><Link to='/user' style={{ textDecoration: 'none', color: 'white' }}>Users</Link></li>
                        <li><Link to='/signin' style={{ textDecoration: 'none', color: 'white' }}>Login</Link></li>
                    </ul>
                </nav>
            </header>

            <Routes>

                <Route path='/' element={<Home />}></Route>
                <Route path='/prod' element={<Products prods={prods} AddOrder={AddOrder} orders={orders} OpenCheckout={OpenCheckout} />}></Route>
                <Route path='/user' element={<Users />}></Route>
                <Route path='/cart' element={<Cart orders={orders} prods={orders} RemoveOrder={RemoveOrder} />}></Route>
                <Route path='/signin' element={<Signin />}></Route>
                <Route path={"/prod/:id"} element={<Checkout AddOrder={AddOrder} prods={prods} />}></Route>
            </Routes>
        </BrowserRouter >

    )
}