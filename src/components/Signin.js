import React, { useState, useRef, } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Signin() {
    let [isSigned, setisSigned] = useState(false)
    const [userinfo, setUserinfo] = useState({ username: "demo", password: "12345" })
    const [userlogin, setUserlogin] = useState({ username: "", password: "" })

    const navigate = useNavigate()
    var username = useRef()
    var password = useRef()

    function handlesetisSigned() {
        setisSigned(true)
    }
    function handlesetisNotSigned() {
        setisSigned(false)
    }

    function handleLogin() {
        const name = username.current.value
        const pwd = password.current.value
        setUserlogin({ username: name, password: pwd })
        if (userinfo.username === name) {
            if (userinfo.password === pwd) {
                navigate('/user')
            }
        } else {
            navigate('/signin')
        }
    }

    if (!isSigned) {
        return (
            <div className='signin-container'>

                <div className='signin'>
                    <form>
                        <div>
                            <input type='name' placeholder='username' ref={username} required></input>
                        </div>
                        <div>
                            <input type='password' placeholder='password' ref={password} required></input>
                        </div>
                        <button type='button' onClick={handleLogin} className='addtocart' style={{ marginLeft: 0, marginRight: 5, width: 50, height: 25, fontSize: 12 }}>Login</button>
                        <button className='addtocart' style={{ marginLeft: 0, marginRight: 5, width: 60, height: 25, fontSize: 12 }} onClick={handlesetisSigned}>Sign Up</button>
                    </form>
                </div>
            </div>
        )
    } else {
        return (
            <div className='signin-container'>
                <div className='signin'>
                    <form>
                        <div>
                            <input type='name' placeholder='your name'></input>
                        </div>
                        <div>
                            <input type='phone' placeholder='phone number'></input>
                        </div>
                        <div>
                            <input type='email' placeholder='email address'></input>
                        </div>
                        <div>
                            <input type='password' placeholder='password'></input>
                        </div>
                        <button className='addtocart' style={{ marginLeft: 0, marginRight: 5, width: 70, height: 25, fontSize: 12 }}>Register</button>
                        <button className='addtocart' style={{ marginLeft: 0, marginRight: 5, width: 50, height: 25, fontSize: 12 }} onClick={handlesetisNotSigned}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
