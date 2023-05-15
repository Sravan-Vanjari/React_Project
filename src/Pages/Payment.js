import React from 'react';
import '../Styles/Payment.css'
import {Link} from 'react-router-dom';

const Payment = () => {
    const action =()=>{
        alert("Your Order is Confirmed")
    }
  return (
    <>
      <center><form class="form"  onSubmit={action}>
    <div class="header">Online Payment</div>
    <div class="inputs">
        <input placeholder="Card Holder Name" class="input" required type="text"/>
        <input placeholder="Card Number" class="input" type="text" required/>
        <input placeholder="Cvv" class="input" type="num" required/>
        <input placeholder="Expiry Date" class="input" type="date" required/>
 
    <button class="sigin-btn">Submit</button>
    
    <p class="signup-link">Back to Home page ? <Link to="/">Home </Link></p>
    </div>
</form></center>
    </>
  );
}

export default Payment;
