import React from 'react'
import Nav from '../../components/Nav/Nav'
import ShopBanner from "./Shop_BannerImg.png"
import BathroomImg from "./Bathroom_bannerimg_lg.png"
import ProductImg from "./ProductImage.png"
import "./custom.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Shop() {
    
    return (
        <div>
            <Nav />
            <main class="bg-light">
                <div class="pt-5">
                    {/*Container*/}

                        <div class="container bg-light">

                        <div class="container">
                            <div class="row p-5 bg-shop my-5 text-white text-center">
                                <div class="jumbotron jumbotron-fluid">
                                        
                                            <h1 class="display-5 unbounded">Discover Inclusive Beauty</h1>
                                            <p class="lead">Great products tried and tested by community members</p>
                                        
                                </div>
                            </div>
                        </div>


                        {/*Row*/}

                        <div class="row gap-3 mt-5 d-flex flex-fill bg-white">

                            {/*Col*/}
                            <aside class="col-lg-2 d-flex flex-fill col-md-4 mb-6 mb-md-0 p-3">

                            <div class="offcanvas offcanvas-start offcanvas-collapse w-md-50" tabIndex="-1" id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">

                                <div class="offcanvas-header d-lg-none">
                                    <h5 class="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body ps-lg-2 pt-lg-0">
                            

                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="m-0 fs-6 fw-bold">Filters</p>
                                        <button class="btn btn-outline-dark btn-sm">Reset Filters</button>
                                    </div>

                                    {/*Mobile Menu*/}
                                    <ul class="nav nav-category" id="categoryCollapseMenu">
                                    <li class="nav-item border-bottom w-100 collapsed mb-3" data-bs-toggle="collapse" data-bs-target="#categoryFlushOne" aria-expanded="false" aria-controls="categoryFlushOne">
                                            <a href="#" class="nav-link ps-0 text-dark d-flex justify-content-between align-items-center">
                                                Accessibility Features 
                                                <i class="fa-solid fa-sm fa-chevron-right"/>
                                            </a>
                                            <div id="categoryFlushOne" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                                <div>
                                                    <form class="p-1">
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Low/No Vision
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Limited Mobility
                                                            </span>
                                                        </label>  
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Sensitive Skin
                                                            </span>
                                                        </label>
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Allergy-Free
                                                            </span>
                                                        </label>
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Hearing Impairment
                                                            </span>
                                                        </label>
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Cognitive Impairment
                                                            </span>
                                                        </label>  
                                                    </form>
                                                </div>
                                            </div>

                                        </li>

                                        <li class="nav-item border-bottom w-100 collapsed mb-3" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <a href="#" class="nav-link ps-0 text-dark d-flex justify-content-between align-items-center">
                                                Skin Concern 
                                                <i class="fa fa-sm fa-chevron-right"></i>
                                            </a>


                                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                                <div>
                                                <form class="p-1">
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Acne
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Lines & Wrinkles
                                                            </span>
                                                        </label>  
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Dark Circles
                                                            </span>
                                                        </label>  
                                                    </form>
                                                </div>
                                            </div>

                                        </li>
                                        <li class="nav-item border-bottom w-100 collapsed mb-3" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <a href="#" class="nav-link ps-0 text-dark d-flex justify-content-between align-items-center">
                                                Skin Type 
                                                <i class="fa fa-sm fa-chevron-right"></i>
                                            </a>


                                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                                <div>
                                                <form class="p-1">
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Combination
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Dry
                                                            </span>
                                                        </label>  
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Oily
                                                            </span>
                                                        </label>
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Normal
                                                            </span>
                                                        </label>
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Sensitive
                                                            </span>
                                                        </label>
                                                         
                                                    </form>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="nav-item border-bottom w-100 collapsed mb-3" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            <a href="#" class="nav-link ps-0 text-dark d-flex justify-content-between align-items-center">
                                                Ingredients
                                                <i class="fa fa-sm fa-chevron-right"></i>
                                            </a>


                                            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                                <div>
                                                <form class="p-1">
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Hyaluronic Acid
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Niacinamide
                                                            </span>
                                                        </label>  
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Peptides
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Retinoid Complex
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                SPF
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Vitamin C
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Fragrance Free
                                                            </span>
                                                        </label>  
                                                    </form>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div class="d-none d-lg-block">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                        <p class="m-0 fs-6 fw-bold">Filters</p>
                                        <button class="btn btn-outline-dark btn-sm">Reset Filters</button>
                                    </div>

                                    <ul class="nav nav-category" id="categoryCollapseMenu">
                                        <li class="nav-item border-bottom w-100 collapsed mb-3" data-bs-toggle="collapse" data-bs-target="#categoryFlushOne" aria-expanded="false" aria-controls="categoryFlushOne">
                                            <a href="#" class="nav-link ps-0 text-dark d-flex justify-content-between align-items-center">
                                                Accessibility Features 
                                                <i class="fa-solid fa-sm fa-chevron-right"/>
                                            </a>
                                            <div id="categoryFlushOne" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                                <div>
                                                    <form class="p-1">
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Low/No Vision
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Limited Mobility
                                                            </span>
                                                        </label>  
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Sensitive Skin
                                                            </span>
                                                        </label>
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Allergy-Free
                                                            </span>
                                                        </label>
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Hearing Impairment
                                                            </span>
                                                        </label>
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Cognitive Impairment
                                                            </span>
                                                        </label>  
                                                    </form>
                                                </div>
                                            </div>

                                        </li>

                                        <li class="nav-item border-bottom w-100 collapsed mb-3" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <a href="#" class="nav-link ps-0 text-dark d-flex justify-content-between align-items-center">
                                                Skin Concern 
                                                <i class="fa fa-sm fa-chevron-right"></i>
                                            </a>


                                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                                <div>
                                                <form class="p-1">
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Acne
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Lines & Wrinkles
                                                            </span>
                                                        </label>  
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Dark Circles
                                                            </span>
                                                        </label>  
                                                    </form>
                                                </div>
                                            </div>

                                        </li>
                                        <li class="nav-item border-bottom w-100 collapsed mb-3" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <a href="#" class="nav-link ps-0 text-dark d-flex justify-content-between align-items-center">
                                                Skin Type 
                                                <i class="fa fa-sm fa-chevron-right"></i>
                                            </a>


                                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                                <div>
                                                <form class="p-1">
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Combination
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Dry
                                                            </span>
                                                        </label>  
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Oily
                                                            </span>
                                                        </label>
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Normal
                                                            </span>
                                                        </label>
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Sensitive
                                                            </span>
                                                        </label>
                                                         
                                                    </form>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="nav-item border-bottom w-100 collapsed mb-3" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            <a href="#" class="nav-link ps-0 text-dark d-flex justify-content-between align-items-center">
                                                Ingredients
                                                <i class="fa fa-sm fa-chevron-right"></i>
                                            </a>


                                            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                                <div>
                                                <form class="p-1">
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Hyaluronic Acid
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Niacinamide
                                                            </span>
                                                        </label>  
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Peptides
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Retinoid Complex
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                SPF
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Vitamin C
                                                            </span>
                                                        </label> 
                                                        <label class="form-check mb-3">
                                                            <input class="form-check-input" type="checkbox" value=""/>
                                                            <span class="form-check-label">
                                                                Fragrance Free
                                                            </span>
                                                        </label>  
                                                    </form>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                            </div>
                            
                            </aside>
                            
                            <section class="col-lg-9 col-md-12 p-3">

                                <div class="mb-4 rounded">
                                    <input type="text" class="form-control" id="search" placeholder="Search for products"/>
                                </div>

                                <div class="d-lg-flex justify-content-between align-items-center">


                                    <div class="d-md-flex justify-content-between align-items-center w-100 ">
                                        <div class="d-flex align-items-center justify-content-between mb-0 ">
                                            <div class="ms-0 d-lg-none">
                                                <btn class="btn btn-outline-secondary me-2" data-bs-toggle="offcanvas" href="#offcanvasCategory" role="button" aria-controls="offcanvasCategory">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter me-2">
                                                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                                    </svg>  */}
                                                    Filters
                                                </btn>
                                            </div>
                                            <div class="mb-0 mb-lg-0">
                                                <p class="mb-0"> <span class="text-dark">24 </span> Products found </p>
                                            </div>
                                            
                                        </div>

                                        <div class="d-flex mt-2 mt-lg-0">
                                            <div class="me-2 flex-grow-1">

                                                <select class="form-select">
                                                    <option defaultValue="">Show: 50</option>
                                                    <option value="10">10</option>
                                                    <option value="20">20</option>
                                                    <option value="30">30</option>
                                                </select></div>
                                            <div>

                                                <select class="form-select">
                                                    <option defaultValue="">Sort by: Featured</option>
                                                    <option value="Low to High">Price: Low to High</option>
                                                    <option value="High to Low"> Price: High to Low</option>
                                                    <option value="Release Date"> Release Date</option>
                                                    <option value="Avg. Rating"> Avg. Rating</option>

                                                </select></div>

                                        </div>

                                    </div>
                                </div>

                                <div class="row g-4 row-cols-xl-3 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">


                                    <div class="col">

                                        <div class="card card-product border-1 p-2 product">
                                            <div class="card-body p-0">
                                                <div class="text-center position-relative ">
                                                    <a href="">
                                                        <img src={ProductImg} alt="" class="mb-0 img-fluid w-100"/>
                                                    </a>
                                                </div>
                                                <div class="p-1">
                                                    <div class= "pt-1 pb-1">
                                                        <span class="badge vision">Low/No Vision</span>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <h3 class="fs-6 m-0">
                                                            <a href="" class="text-dark text-decoration-none">Nécessaire Body Lotion</a>
                                                        </h3>
                                                        <div>
                                                            <span class=" fs-5 text-dark">$18</span>
                                                        </div>
                                                    </div>
                                                    <div class="bottomcontainer d-flex flex-row align-items-center justify-content-between">
                                                        <div class="left flex-fill">
                                                            <div class="text-small mb-0">
                                                                <div class="text-decoration-none text-muted">
                                                                    <small>Body Lotion</small>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <i class="fa fa-star me-1"></i>
                                                                <span class="text-muted small">4.5(149)</span>
                                                            </div>
                                                        </div>
                                                        <div class="right flex-fill">
                                                            <div class="">
                                                                <div>
                                                                    <a href="#!" class="btn btn-dark rounded-0 btn-sm w-100 p-2"> View Product</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">

                                        <div class="card card-product border-1 p-2 product">
                                            <div class="card-body p-0">
                                                <div class="text-center position-relative ">
                                                    <a href="">
                                                        <img src={ProductImg} alt="" class="mb-0 img-fluid w-100"/>
                                                    </a>
                                                </div>
                                                <div class="p-1">
                                                    <div class= "pt-1 pb-1">
                                                        <span class="badge vision">Low/No Vision</span>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <h3 class="fs-6 m-0">
                                                            <a href="" class="text-dark text-decoration-none">Nécessaire Body Lotion</a>
                                                        </h3>
                                                        <div>
                                                            <span class=" fs-5 text-dark">$18</span>
                                                        </div>
                                                    </div>
                                                    <div class="bottomcontainer d-flex flex-row align-items-center justify-content-between">
                                                        <div class="left flex-fill">
                                                            <div class="text-small mb-0">
                                                                <div class="text-decoration-none text-muted">
                                                                    <small>Body Lotion</small>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <i class="fa fa-star me-1"></i>
                                                                <span class="text-muted small">4.5(149)</span>
                                                            </div>
                                                        </div>
                                                        <div class="right flex-fill">
                                                            <div class="">
                                                                <div>
                                                                    <a href="#!" class="btn btn-dark rounded-0 btn-sm w-100 p-2"> View Product</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">

                                        <div class="card card-product border-1 p-2 product">
                                            <div class="card-body p-0">
                                                <div class="text-center position-relative ">
                                                    <a href="">
                                                        <img src={ProductImg} alt="" class="mb-0 img-fluid w-100"/>
                                                        
                                                    </a>
                                                </div>
                                                <div class="p-1">
                                                    <div class= "pt-1 pb-1">
                                                        <span class="badge vision">Low/No Vision</span>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <h3 class="fs-6 m-0">
                                                            <a href="" class="text-dark text-decoration-none">Nécessaire Body Lotion</a>
                                                        </h3>
                                                        <div>
                                                            <span class=" fs-5 text-dark">$18</span>
                                                        </div>
                                                    </div>
                                                    <div class="bottomcontainer d-flex flex-row align-items-center justify-content-between">
                                                        <div class="left flex-fill">
                                                            <div class="text-small mb-0">
                                                                <div class="text-decoration-none text-muted">
                                                                    <small>Body Lotion</small>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <i class="fa fa-star me-1"></i>
                                                                <span class="text-muted small">4.5(149)</span>
                                                            </div>
                                                        </div>
                                                        <div class="right flex-fill">
                                                            <div class="">
                                                                <div>
                                                                    <a href="#!" class="btn btn-dark rounded-0 btn-sm w-100 p-2"> View Product</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">

                                        <div class="card card-product border-1 p-2 product">
                                            <div class="card-body p-0">
                                                <div class="text-center position-relative ">
                                                    <a href="">
                                                        <img src={ProductImg} alt="" class="mb-0 img-fluid w-100"/>
                                                    </a>
                                                </div>
                                                <div class="p-1">
                                                    <div class= "pt-1 pb-1">
                                                        <span class="badge vision">Low/No Vision</span>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <h3 class="fs-6 m-0">
                                                            <a href="" class="text-dark text-decoration-none">Nécessaire Body Lotion</a>
                                                        </h3>
                                                        <div>
                                                            <span class=" fs-5 text-dark">$18</span>
                                                        </div>
                                                    </div>
                                                    <div class="bottomcontainer d-flex flex-row align-items-center justify-content-between">
                                                        <div class="left flex-fill">
                                                            <div class="text-small mb-0">
                                                                <div class="text-decoration-none text-muted">
                                                                    <small>Body Lotion</small>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <i class="fa fa-star me-1"></i>
                                                                <span class="text-muted small">4.5(149)</span>
                                                            </div>
                                                        </div>
                                                        <div class="right flex-fill">
                                                            <div class="">
                                                                <div>
                                                                    <a href="#!" class="btn btn-dark rounded-0 btn-sm w-100 p-2"> View Product</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div class="row mt-5">
                                    <div class="col">

                                        <nav class="">
                                            <ul class="pagination">
                                                <li class="page-item disabled">
                                                    <a class="page-link  mx-1 " href="#" aria-label="Previous">
                                                        <i class="fa fa-chevron-left"></i>
                                                    </a>
                                                </li>
                                                <li class="page-item "><a class="page-link  mx-1 active" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link mx-1 text-body" href="#">2</a></li>

                                                <li class="page-item"><a class="page-link mx-1 text-body" href="#">...</a></li>
                                                <li class="page-item"><a class="page-link mx-1 text-body" href="#">12</a></li>
                                                <li class="page-item">
                                                    <a class="page-link mx-1 text-body" href="#" aria-label="Next">
                                                        <i class="fa fa-chevron-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Shop