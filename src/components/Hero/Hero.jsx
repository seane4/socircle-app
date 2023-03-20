import HeroImage from "./HeroImage.png"
import { Link } from "react-router-dom";

import "./hero.css"

function Hero() {
  return (
  <section class="pt-5 pb-5 heroback bg-white">
    <div class="container mb-5 mt-5">
      <div class="row align-items-center d-flex flex-lg-row flex-column-reverse justify-content-between pb-5 pb-lg-3">
        <div class="col-12 col-lg-5">
          <h1 class="text-center text-lg-start mb-4 mt-5 mt-lg-3 display-5 fw-bold unbounded">
            Empowering Your Beauty Journey
          </h1>
          <p class="lead text-center text-lg-start mb-4 text-muted">
            Reviews and recommendations from users with similar disabilities, helping you find the perfect products for your unique needs.
          </p>
          <div class="text-center text-lg-start">
            <Link to="/shop-all" class="btn btn-dark text-white ps-4 pe-4 rounded-0">Shop All Products</Link>
          </div>
        </div>
        <div class="col-10 col-lg-6 text-center">
          <img class="img-fluid" src={HeroImage} alt="Body lotion product image and user recommendation for best products for chemo-induced skin changes" />
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Hero