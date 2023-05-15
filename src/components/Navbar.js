import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";



const username = sessionStorage.getItem("username");

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate("/Login");
    window.location.reload();
  };
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="#">
          <img
            className="logo"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStUeqmZUeWz28gKgmXbUwAQmTpKDF2ZBze27D60TvwpsTEELSc"
            alt="logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              {username === null && (
                <>
                  {" "}
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    {" "}
                    Login
                  </Link>
                </>
              )}
            </li>
            <li class="nav-item">
              {username !== null && (
                <>
                  {" "}
                  <Link class="nav-link" to="/">
                    <i className="fa-solid fa-user"></i>{username}
                  </Link>
                </>
              )}
            </li>
            <li>
              {username === "sravan" && (
                <Link class="nav-link" to="/addproducts">
                  Add Products
                </Link>
              )}
            </li>
            <li className="nav-item">
              {username !== null && (
                <>
                  <Link className="nav-link" onClick={logout}>
                    Log Out
                    </Link>
                </>
              )}
            </li>
         
          </ul>
        </div>
        <div className='justify-content-md-end'><i class="fa-solid fa-cart-plus"></i></div>
      </div>
    </nav>
  );
};

export default Navbar;
