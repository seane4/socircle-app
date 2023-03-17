import HeroImage from "./HeroImage.png"

function Hero() {
  return (
  <section class="pt-5 pb-5">
    <div class="container">
      <div class="row align-items-center d-flex flex-lg-row flex-column-reverse">
        <div class="col-12 col-lg-5">
          <h1 class="text-center text-lg-start mb-4 mt-5 display-5 fw-bold">
            Empowering Your Beauty Journey
          </h1>
          <p class="lead text-center text-lg-start text-muted mb-4">
            Reviews and recommendations from users with similar disabilities, helping you find the perfect products for your unique needs.
          </p>
          <div class="text-center text-lg-start">
            <a href="#" class="btn btn-dark ps-4 pe-4 rounded-0">Shop Now</a>
        </div>
        </div>
        <div class="col-10 col-lg-7 text-center">
          <img class="img-fluid" src={HeroImage} alt="Body lotion product image and user recommendation" />
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Hero