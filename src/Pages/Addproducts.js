import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddProducts() {
  const Removefunction =(id)=>{
    if(window.confirm('Do You Want to Remove')){
      fetch("http://localhost:8000/addproducts/"+id,{
        method :"DELETE",
       
               }).then((res)=>{
                   alert('Removed Successfully') ;
                  window.location.reload();
               }).catch((err)=>{
                  console.log(err.message); 
               })
              
    }
    }




  const [imgsrc, imgsrcchange] = useState("");
  const [title, titlechange] = useState("");
  const [price, pricechange] = useState("");
  const [model, modelchange] = useState("Hyderabad");
 

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { title, imgsrc, price, model};

    //console.log(user)
    fetch("http://localhost:8000/addproducts/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regobj),
    })
      .then((res) => {
        toast.success("Adding product succesfull....");
        navigate("/Home");
      })
      .catch((err) => {
        //console.log('err')
        toast.error("Failed :" + err.message);
      });
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-header">
              <h1>Add Products</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      imgsrc<span className="errmsg">*</span>
                    </label>
                    <input
                      value={imgsrc}
                      onChange={(e) => imgsrcchange(e.target.value)}
                      type="imgsrc"
                      className="form-control"
                      required
                    ></input>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full title <span className="errmsg">*</span>
                    </label>
                    <input
                      value={title}
                      onChange={(e) => titlechange(e.target.value)}
                      className="form-control"
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                    price <span className="errmsg">*</span>
                    </label>
                    <input
                      value={price}
                      onChange={(e) => pricechange(e.target.value)}
                      className="form-control"
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>State </label>
                    <select
                      onChange={(e) => modelchange(e.target.value)}
                      className="form-control"
                    >
                      <option>Hyderabad</option>
                      <option>Karnataka</option>
                      <option>Tamil nadu</option>
                      <option>Andhra Pradesh</option>
                      <option>Gujurat</option>
                      <option>Goa</option>
                     
                    </select>
                  </div>
                </div>
               </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>{" "}
              |
              <Link className="btn btn-danger" to={""} onClick={()=>Removefunction()}>
                
                Remove
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
