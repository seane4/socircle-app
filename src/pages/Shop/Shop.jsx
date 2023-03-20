import React from 'react'
import Nav from '../../components/Nav/Nav'
import ProductImg from "./ProductImage.png"
import ProductImg2 from "./ProductImage_2.webp"
import ProductImg3 from "./ProductImage_3.webp"
import ProductImg4 from "./ProductImage_4.webp"
import ProductImg5 from "./ProductImage_5.jpg"
import ProductImg6 from "./ProductImage_6.jpg"
import { Link } from 'react-router-dom'
import "./custom.css"
import Footer from '../../components/Footer/Footer'

function Shop() {
    
    return (
        <div>
            <Nav />
            <main class="bg-light pb-5">
                <div class="pt-5 pb-5">
                    {/*Container*/}

                        <div class="container-fluid bg-light">

                        <div class="container-fluid">
                            <div class="row bg-shop m-auto text-white text-center me-4 ms-4 align-items-center rounded-3 border border-1">
                                <div class="jumbotron jumbotron-fluid">
                                        
                                            <h1 class="display-5 unbounded">Discover Inclusive Beauty</h1>
                                            <p class="lead">Great products tried and tested by community members</p>
                                        
                                </div>
                            </div>
                        </div>


                        {/*Row*/}

                        <div class="row col-10 gap-3 mt-5 d-flex flex-fill bg-white rounded-3 border border-1 m-auto pb-5">

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
                                                                Cognitive Assistance
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
                                                                Cognitive Assistance
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
                                                    
                                                    Filters
                                                </btn>
                                            </div>
                                            <div class="mb-0 mb-lg-0">
                                                <p class="mb-0"> <span class="text-dark">6 </span> Products found </p>
                                            </div>
                                            
                                        </div>

                                        <div class="d-flex mt-2 mt-lg-0">

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

                                <div class="row g-4 row-cols-xl-3 row-cols-lg-3 row-cols-1 row-cols-sm-2 row-cols-md-2 mt-2">

                                    
                                    <div class="col">

                                        <div class="card card-product border-1 p-2 product itemheight">
                                            <div class="card-body p-0 itemheight">
                                                <div class="text-center position-relative ">
                                                    <a href="">
                                                        <img src={ProductImg} alt="Nécessaire Body Lotion Image" class="mb-0 img-fluid w-100"/>
                                                    </a>
                                                </div>
                                                <div class="p-1">
                                                    <div class="badgegroup d-flex flex-row gap-1 flex-wrap">
                                                        <div class= "pt-1 pb-1">
                                                            <span class="badge skin">Sensitive Skin</span>
                                                        </div>
                                                        <div class= "pt-1 pb-1">
                                                            <span class="badge allergy">Allergy-Free</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <h3 class="fs-6 m-0">
                                                            <Link to="/product" href="" class="text-dark text-decoration-none">Nécessaire Body Lotion</Link>
                                                        </h3>
                                                        <div>
                                                            <span class=" fs-5 text-dark">$18</span>
                                                        </div>
                                                    </div>
                                                    <div class="bottomcontainer d-flex flex-wrap flex-row align-items-center justify-content-between">
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
                                                                    <Link to="/product" class="btn btn-dark rounded-0 btn-sm w-100 p-2"> View Product</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">

                                        <div class="card card-product border-1 p-2 product itemheight">
                                            <div class="card-body p-0 itemheight d-flex flex-column justify-content-between">
                                                <div class="text-center position-relative ">
                                                    <a href="">
                                                        <img src={ProductImg3} alt="Hero Force Shield Image" class="mb-0 img-fluid w-100"/>
                                                    </a>
                                                </div>
                                                <div class="p-1">
                                                    <div class="badgegroup d-flex flex-row gap-1 flex-wrap">
                                                        <div class= "pt-1 pb-1">
                                                            <span class="badge vision">Low/No Vision</span>
                                                        </div>
                                                        <div class= "pt-1 pb-1">
                                                            <span class="badge skin">Sensitive Skin</span>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <h3 class="fs-6 m-0">
                                                            <a href="" class="text-dark text-decoration-none">Hero Force Shield</a>
                                                        </h3>
                                                        <div>
                                                            <span class=" fs-5 text-dark">$46</span>
                                                        </div>
                                                    </div>
                                                    <div class="bottomcontainer d-flex flex-row align-items-center justify-content-between flex-wrap">
                                                        <div class="left flex-fill">
                                                            <div class="text-small mb-0">
                                                                <div class="text-decoration-none text-muted">
                                                                    <small>Serum</small>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <i class="fa fa-star me-1"></i>
                                                                <span class="text-muted small">4.2(80)</span>
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

                                        <div class="card card-product border-1 p-2 product itemheight">
                                            <div class="card-body p-0 itemheight d-flex flex-column justify-content-between">
                                                <div class="text-center position-relative ">
                                                    <a href="">
                                                        <img src={ProductImg2} alt="Native Facial Care Image" class="mb-0 img-fluid w-100"/>
                                                        
                                                    </a>
                                                </div>
                                                <div class="p-1">
                                                    <div class="badgegroup d-flex flex-row gap-1 flex-wrap">
                                                        <div class= "pt-1 pb-1">
                                                            <span class="badge cog">Cognitive Assistance </span>
                                                        </div>
                                                        <div class= "pt-1 pb-1">
                                                            <span class="badge skin">Sensitive Skin</span>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <h3 class="fs-6 m-0">
                                                            <a href="" class="text-dark text-decoration-none">Native Facial Care</a>
                                                        </h3>
                                                        <div>
                                                            <span class=" fs-5 text-dark">$45</span>
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
                                                        <img src={ProductImg4} alt="Protini Polypeptide Cream Image" class="mb-0 img-fluid w-100"/>
                                                    </a>
                                                </div>
                                                <div class="p-1">
                                                    <div class="badgegroup d-flex flex-row gap-1 flex-wrap">
                                                        <div class= "pt-1 pb-1">
                                                            <span class="badge mobility">Limited Mobility</span>
                                                        </div>
                                                        <div class= "pt-1 pb-1">
                                                            <span class="badge skin">Sensitive Skin</span>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <h3 class="fs-6 m-0">
                                                            <a href="" class="text-dark text-decoration-none">Protini Polypeptide Cream</a>
                                                        </h3>
                                                        <div>
                                                            <span class=" fs-5 text-dark">$34</span>
                                                        </div>
                                                    </div>
                                                    <div class="bottomcontainer d-flex flex-row align-items-center justify-content-between">
                                                        <div class="left flex-fill">
                                                            <div class="text-small mb-0">
                                                                <div class="text-decoration-none text-muted">
                                                                    <small>Cream</small>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <i class="fa fa-star me-1"></i>
                                                                <span class="text-muted small">4.0(18)</span>
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

                                        <div class="card card-product border-1 p-2 product itemheight">
                                            <div class="card-body p-0 itemheight d-flex flex-column justify-content-between ">
                                                <div class="text-center position-relative ">
                                                    <a href="">
                                                        <img src={ProductImg5} alt="Protini Polypeptide Serum Image" class="mb-0 img-fluid w-100"/>
                                                    </a>
                                                </div>
                                                <div class="p-1">
                                                    <div class="badgegroup d-flex flex-row gap-1 flex-wrap">
                                                        <div class= "pt-1 pb-1">
                                                            <span class="badge mobility">Limited Mobility</span>
                                                        </div>
                                                        <div class= "pt-1 pb-1">
                                                            <span class="badge skin">Sensitive Skin</span>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <h3 class="fs-6 m-0">
                                                            <a href="" class="text-dark text-decoration-none">Protini Polypeptide Serum</a>
                                                        </h3>
                                                        <div>
                                                            <span class=" fs-5 text-dark">$28</span>
                                                        </div>
                                                    </div>
                                                    <div class="bottomcontainer d-flex flex-row align-items-center justify-content-between">
                                                        <div class="left flex-fill">
                                                            <div class="text-small mb-0">
                                                                <div class="text-decoration-none text-muted">
                                                                    <small>Serum</small>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <i class="fa fa-star me-1"></i>
                                                                <span class="text-muted small">4.6(30)</span>
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

                                        <div class="card card-product border-1 p-2 product itemheight">
                                            <div class="card-body p-0 itemheight d-flex flex-column justify-content-between">
                                                <div class="text-center position-relative ">
                                                    <a href="">
                                                        <img src={ProductImg6} alt="Humanrace Routine Pack Image" class="mb-0 img-fluid w-100 rounded-1"/>
                                                    </a>
                                                </div>
                                                <div class="p-1">
                                                    <div class="badgegroup d-flex flex-row gap-1 flex-wrap">
                                                        <div class= "pt-1 pb-1">
                                                            <span class="badge vision">Low/No Vision</span>
                                                        </div>
                                                        <div class= "pt-1 pb-1">
                                                            <span class="badge skin">Sensitive Skin</span>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <h3 class="fs-6 m-0">
                                                            <a href="" class="text-dark text-decoration-none">Humanrace Routine Pack</a>
                                                        </h3>
                                                        <div>
                                                            <span class=" fs-5 text-dark">$110</span>
                                                        </div>
                                                    </div>
                                                    <div class="bottomcontainer d-flex flex-row align-items-center justify-content-between">
                                                        <div class="left flex-fill">
                                                            <div class="text-small mb-0">
                                                                <div class="text-decoration-none text-muted">
                                                                    <small>Cream</small>
                                                                </div>
                                                            </div>
                                                            <div class="">
                                                                <i class="fa fa-star me-1"></i>
                                                                <span class="text-muted small">4.8(55)</span>
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
                                
                            </section>
                        </div>
                    </div>

                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Shop