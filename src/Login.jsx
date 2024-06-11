import React, { useState } from 'react'
import './Login.css';
import logo from './ab.png'
import as from './as.png'

export default function Login() {
  let buttonclick =1;
  const[news,setnew]=useState("Create your account")
  const[sign1,setsign]=useState("Sign up with Google")
  const[buttons,setbutton]=useState("Get login code")
  const[bot,setbot]=useState("Already using StreamYard?")
  const[bb,setbb]=useState("Log in")
  const[buttclick,setclick]=useState(true)

  const change = ()  => {
    if (buttclick) {
      setnew("Log in to your account")
      setsign("Log in with Google")
      setbutton("Log in")
      setbot("New to StreamYard?")
      setbb("Create an account")
      setclick(false)
    }
    else{
      setnew("Create your account")
      setsign("Sign up with Google")
      setbutton("Get login code")
      setbot("Already using StreamYard?")
      setbb("Log in")
      setclick(true)
    }
  }
  return (
    <div>
      <div class="nav">
        <img src={logo} width="190px" alt='/' />
      </div>
      <div class="line">
      </div>
      <div class="cont">
        <form>
          <h1>{news}</h1>
          <button>
            <img src={as}  alt='/'  />
            <p>{sign1}</p>
          </button>
        </form>
        <div class="lr">
        <p1>______________________ OR _______________________</p1>
        </div>
        <div class="n">
          <h7>Email address</h7>
          <input type='email'  id='emailInput' name='email'  />
          <button type="button" class="btn btn-primary">{buttons}</button>
        </div>
        <p5>{bot}<span><a id="newx" onClick={change}>{bb}</a></span></p5>
      </div>
    </div>
  )
}
