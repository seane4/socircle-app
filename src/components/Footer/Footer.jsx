import SoCircleImg from "../Nav/SoCircle_SVG.svg"


function Footer() {
  return (
    <div className="footer bg-white mt-5 pt-5 pb-5 border-top border-1">
        <div class="container">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
            <p class="col-md-4 mb-0 text-muted">© 2023 SoCircle by Sean Edens</p>

            <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-0 me-md-auto link-dark text-decoration-none">
              <img class="image-fluid" height="40" src={SoCircleImg}/>
            </a>

            <ul class="nav col-md-4 justify-content-end">
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Shop</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Community</a></li>
            </ul>
          </footer>
        </div>
    </div>
  )
}

export default Footer