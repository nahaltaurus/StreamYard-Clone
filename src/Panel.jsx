import React from 'react'
import './Panel.css';
import logo from './ab.png'
export default function Panel() {
  return (
    <div>
      <div class="nav">
        <img src={logo} width="190px" alt='/' />
        <button type="button" class="btn btn-outline-primary">Upgrade</button>
        <p>My account</p>
      </div>
      <div class="line">
      </div>
      <div class="ab">
        
      </div>
    </div>
  )
}
