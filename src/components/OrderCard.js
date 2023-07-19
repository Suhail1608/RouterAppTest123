import React, { useState } from 'react'

export default function OrderCard({ prod, RemoveOrder }) {
    function handleRemove() {
        RemoveOrder(prod)
    }
    return (
        <>
            <tr>
                <td>
                    <div className='OrderCard'>
                        <div className='OrderImage'>
                            <img src={prod.image} width={60}></img>
                        </div>
                        <div className='OrderDesc'>
                            <h5 className='ordertitle'>{prod.title}</h5>
                            <h5>$ {prod.price}</h5>
                            <button onClick={handleRemove} >Remove</button>
                        </div>
                    </div>
                </td>
            </tr >
        </>

    )

}
