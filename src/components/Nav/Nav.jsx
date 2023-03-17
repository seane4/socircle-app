import SoCircleSVG from "./SoCircle_SVG.svg"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { LinkContainer } from 'react-router-bootstrap'


function Nav() {
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white ps-3 pe-3 mb-5">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src={SoCircleSVG} alt="SoCircle Logo" height="40"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll gap-0 gap-lg-4">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
              <ul class="dropdown-menu multi-column columns-2">
                <li>
                    <span class="fs-6 ms-3 text-muted">Shop By Type</span>
                    <a class="dropdown-item" href="#">Type Item</a>
                </li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li>
                  <a class="dropdown-item" href="#">Shop All Products</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Community</a>
            </li>

            {/* <form class="d-flex" role="search">
              <input class="form-control me-2 form-control-sm" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </ul>
          <div>
            <div class="d-flex gap-3">
              <i class="fa fa-shopping-cart fa-xl text-black"></i>
              <i class="fa fa-user-circle fa-xl text-black"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

{/* <LinkContainer to="/">
<Nav.Link>Home</Nav.Link>
</LinkContainer> */}