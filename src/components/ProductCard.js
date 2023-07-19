import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
export default function ProductCard({ prod, AddOrder, orders, OpenCheckout }) {
    const [isAdded, setisAdded] = useState(false)
    let id = useParams()
    function handleAddOrder() {
        AddOrder(prod)
        setisAdded(true)
    }
    function handleOpenCheckout() {
        OpenCheckout(prod)
    }

    if (!isAdded) {
        return (
            <>
                <tr>
                    <td>
                        <div className='Card'>
                            <div className='ProdImage'>
                                <Link to={"/prod/" + prod.id} style={{ textDecoration: 'none', color: 'black' }} onClick={handleOpenCheckout}><img src={prod.image} width={120}></img></Link>
                            </div>
                            <div className='ProdDesc'>
                                <h5 className='title'>{prod.title}</h5>
                                <h5>$ {prod.price}</h5>
                                <button onClick={handleAddOrder}>Add</button>
                            </div>
                        </div>
                    </td>
                </tr >
            </>
        )
    } else {
        return (
            <>
                <tr>
                    <td>
                        <div className='Card'>
                            <div className='ProdImage'>
                                <Link to={"/prod/" + prod.id} style={{ textDecoration: 'none', color: 'black' }} onClick={handleOpenCheckout}><img src={prod.image} width={120}></img></Link>
                            </div>
                            <div className='ProdDesc'>
                                <h5 className='title'>{prod.title}</h5>
                                <h5>$ {prod.price}</h5>
                                <button style={{ width: "70px" }}>Added</button>
                            </div>
                        </div>
                    </td>
                </tr >
            </>
        )
    }

}
