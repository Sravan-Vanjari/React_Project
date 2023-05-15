import React from 'react'
import '../Styles/register.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Signup() {
    const[id,idchange] =useState("");
    const[name,namechange] =useState("");
    const[password,passwordchange] =useState("");
    const[email,emailchange] =useState("");
    const[phone,phonechange] =useState("");
    const[state,statechange] =useState("");
    const[Address,Addresschange] =useState("");

    const navigate = useNavigate();

    
    const Isvalidate = ()=>{
        let isproceed =true;
        let errormessage = 'Please enter the value in '
        if(id === null || id === ''){
            isproceed = false;
            errormessage += 'Username';
        }
        if(name === null || name === ''){
            isproceed = false;
            errormessage += 'Username';
        }
        // Add for Remaining to validation   


        if(!isproceed){
            alert(errormessage)
        }
        return isproceed
    }

    const handlesubmit =(event) =>{
        if(Isvalidate()){
        event.preventDefault();
        let regobj ={id,name,password,email,phone,state,Address};
    //    console.log(regobj);
    fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(regobj)
     })
     .then((res) => {
        if (res.ok) {
           alert('Registered Successfully.');
           navigate('/login')
        } else {
           throw new Error('Network response was not ok.');
        }
     })
     .catch((err) => {
      alert('Failed :' + err.message);
     });
    }
    }
    return (
        <div>
            <br/>
        <br/> <br/>
           {/* <h1>Sign up Page</h1>  */}
           <div className="offset-lg-3 col-lg-6">
                <form className="container-form" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-head">
                        <h1>Registration</h1>
                        </div>
                        <div className="card-body1">
                            <div className="row">
          <div className="col-lg-6">
          <div className="form-group"> 
              <label>User Name<span className="errmsg1">*</span></label>
              <input value={id} onChange={e=>idchange(e.target.value)} className="form-control1"></input>   
              </div>                          
              </div>
          <div className="col-lg-6">
          <div className="form-group1"> 
              <label>Password<span className="errmsg">*</span></label>
              <input value={password} onChange={e=>passwordchange(e.target.value)} type="password" className="form-control"></input>   
              </div>                          
              </div>
              <div className="col-lg-6">
              <div className="form-group1"> 
              <label>Full Name<span className="errmsg">*</span></label>
              <input  value={name} onChange={e=>namechange(e.target.value)} className="form-control"></input>   
              </div>                          
              </div>
              <div className="col-lg-6">
              <div className="form-group1"> 
              <label>Email<span className="errmsg">*</span></label>
              <input  value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>   
              </div>                          
              </div>
              <div className="col-lg-6">
              <div className="form-group1"> 
              <label>Phone Number<span className="errmsg">*</span></label>
              <input  value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>   
              </div>                          
              </div>
              <div className="col-lg-6">
              <div className="form-group1"> 
              <label>State<span className="errmsg">*</span></label>
              <select  value={state} onChange={e=>statechange(e.target.value)} className="form-control">
  <option value="Hyderabad">Hyderabad</option>
  <option value ="Karnataka">Karnataka</option>
  <option value ="Tamil nadu">Tamil nadu</option> 
  <option value ="Andhra Pradesh">Andhra Pradesh</option>             
  <option value ="Gujurat">Gujurat</option>
  <option value ="Goa">Goa</option>
              </select>
              </div>                          
              </div>
              <div className="col-lg-12">
              <div className="form-group"> 
              <label>Address<span className="errmsg">*</span></label>
              <textarea  value={Address} onChange={e=>Addresschange(e.target.value)} className="form-control"></textarea>   
              </div>                          
              </div>
                            </div>
                            </div>
                            <div className="card-footer">
                            <button type="submit" className="btn btn-primary" >Register</button>
                            <a href="/" className="btn btn-danger">Back</a>
                            </div>
                    </div>
                </form>
            </div>
          
        </div>
    )
}

export default Signup
