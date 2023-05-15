import React, { useEffect, useState } from "react";
 import "../Styles/Home2.css";
 import {Link} from 'react-router-dom';
export default function Home2() {
  const [Users, setUsers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/addproducts")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setUsers(resp);
      })
      .catch((err) => {
        alert("Login Failed due to : " + err.message);
      });
  }, []);
  return (
    <>
      <div className="container-fluid">
        
        <div className="container-fluid Hyderabad">
          <center>
            <h2>Some Special Products</h2>
          </center>
        </div>

        <div className="row">
  {Users && Users.map((User) => (
    <div className="col-6 col-md-4 col-lg-3 mb-3" key={User.id}>
      <div className="card h-100">
        <img
          src={User.imgsrc}
          className="card-img-top h-100"
          alt={User.title}
        />
        <div className="card-body d-flex flex-column justify-content-end">
          <h5 className="card-title">{User.title}</h5>
          <p className="card-text">Regular price ₹ {User.price}</p>
        <Link className='btn' to='/Payment'>  <button className="btn btn-primary mt-auto">Add to Cart</button></Link>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </>
  );
}
