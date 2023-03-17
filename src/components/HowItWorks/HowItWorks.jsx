import HIW_Image1 from "./HIW-ImageOne.png"
import HIW_Image2 from "./HIW-ImageTwo.png"
import HIW_Image3 from "./HIW-ImageThree.png"
import HIW_Image4 from "./HIW-ImageFour.png"
import BannerImg from "./Bathroom_bannerimg.png"

function HowItWorks() {
  return (
    <section className="pt-5">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <hr className="flex-grow-1 border border-dark border-1 opacity-50" />
            <h3 className="fs-4 text-center ms-5 me-5">How It Works</h3>
            <hr className="flex-grow-1 border border-dark border-1 opacity-50" />
          </div>
        </div>

        <div class="pt-5 pb-5 row align-items-center d-flex flex-lg-row flex-column-reverse justify-content-around">
          <div class="col-12 col-lg-5 p-lg-5">
            <p class="text-center text-lg-start mb-2 mt-5 fs-2 fw-bold align-items-center">
              Clarify your needs
            </p>
            <p class="lead text-center text-lg-start text-muted mb-4">
              Start by selecting your unique accessibility needs
            </p>
            
          </div>
        <div class="col-10 col-lg-6 text-center">
          <img class="img-fluid" src={HIW_Image1} alt="Body lotion product image and user recommendation" />
        </div>
      </div>

      <div class="pt-5 pb-5 row align-items-center d-flex flex-lg-row flex-column-reverse justify-content-around">
          <div class="col-12 col-lg-5 order-lg-2 p-lg-5">
            <p class="text-center text-lg-start mb-2 mt-5 fs-2 fw-bold align-items-center">
              Browse curated selection
            </p>
            <p class="lead text-center text-lg-start text-muted mb-4">
              Find products that fit your unique needs using accessibility tags
            </p>
            
          </div>
        <div class="col-10 col-lg-6 text-center">
          <img class="img-fluid" src={HIW_Image2} alt="Body lotion product image and user recommendation" />
        </div>
      </div>

      <div class="pt-5 pb-5 row align-items-center d-flex flex-lg-row flex-column-reverse justify-content-around">
          <div class="col-12 col-lg-5 p-lg-5">
            <p class="text-center text-lg-start mb-2 mt-5 fs-2 fw-bold align-items-center">
              Utilize reviews from users with similar needs
            </p>
            <p class="lead text-center text-lg-start text-muted mb-4">
              Reviews from members with similar needs and preferences make it easier to find the right product
            </p>
            
          </div>
        <div class="col-10 col-lg-6 text-center">
          <img class="img-fluid" src={HIW_Image3} alt="Body lotion product image and user recommendation" />
        </div>
      </div>

      <div class="pt-5 pb-5 row align-items-center d-flex flex-lg-row flex-column-reverse justify-content-around">
          <div class="col-12 col-lg-5 order-lg-2 p-lg-5">
            <p class="text-center text-lg-start mb-2 mt-5 fs-2 fw-bold align-items-center">
              Join the conversation
            </p>
            <p class="lead text-center text-lg-start text-muted mb-4">
              Help shape the future of inclusive products by interacting with people just like you
            </p>
            
          </div>
        <div class="col-10 col-lg-6 text-center">
          <img class="img-fluid" src={HIW_Image4} alt="Body lotion product image and user recommendation" />
        </div>
      </div>
      </div>
    </section>
  )
}

export default HowItWorks