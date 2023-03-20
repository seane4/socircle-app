import SoCircleSVG from "./SoCircle_SVG.svg"
import { Link } from "react-router-dom";
import "./nav.css"

function Nav() {
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white ps-3 pe-3 mb-0 border-bottom border-1">
      <div class="container">
        <Link to="/" class="navbar-brand">
          <img src={SoCircleSVG} alt="SoCircle Logo" height="40" class="image-fluid"/>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll gap-0 gap-lg-4 align-items-center">
            <li class="nav-item">
              <Link to="/" class="nav-link" aria-current="page">Home</Link>
            </li>
            <li class="nav-item dropdown">
                <button class="btn btn-link nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </button>
              <ul class="dropdown-menu multi-column columns-2">
                <li>
                    <span class="fs-6 ms-3 text-muted">Shop By Concern</span>
                    <button class="btn btn-link dropdown-item">Aging</button>
                </li>
                <li><button class="btn btn-link dropdown-item">Lines & Wrinkles</button></li>
                <li><button class="btn btn-link dropdown-item">Acne</button></li>
                <li><button class="btn btn-link dropdown-item">Dark Circles</button></li>
                <li><button class="btn btn-link dropdown-item">Dryness</button></li>
                <li><hr class="dropdown-divider"/></li>
                <li>
                  <Link to="/shop-all" class="dropdown-item" >Shop All Products</Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to="/community" class="nav-link">Community</Link>
            </li>
            


          </ul>
          <div>
            <div class="d-flex gap-3 py-3 py-lg-0">
              <i class="fa fa-shopping-cart fa-xl fa-lg-lg text-dark"></i>
              <i class="fa fa-user-circle fa-xl fa-lg-lg text-dark"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
