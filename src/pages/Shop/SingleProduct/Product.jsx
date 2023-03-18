import React from 'react'
import Nav from '../../../components/Nav/Nav'
import "./product.css"
import "../custom.css"
import ProductImg from "../../Shop/ProductImage.png"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Footer from '../../../components/Footer/Footer'

function Product() {
  return (
    <div>
        <Nav/>
        <main>
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Library</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                    </div>

                    <div class="ProductInfo d-flex justify-content-around gap-5 mb-5 flex-lg-row flex-column-reverse align-items-center">
                        <div class="Left bg-white col-12 col-lg-5 p-3 d-flex flex-column gap-5">
                            <div class="Top d-flex align-items-center justify-content-between">
                                <div class="">
                                    <i class="fa fa-star me-1"></i>
                                    <span class="fw-bold">Rating: 4.5/5.0</span>
                                </div>
                                <div class="userPics parent d-flex flex-row gap-2 text-underline">
                                    <div class="userPics d-flex">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar" alt="Avatar" />
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar" alt="Avatar" />
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar" alt="Avatar" />
                                    </div>
                                    <div class="">
                                        52 Reviews
                                    </div>
                                </div>
                            </div>
                            <div class="Middle d-flex flex-column gap-2">
                                <div class="title display-5">
                                    Alpine Allergy-Free Lip Balm
                                </div>
                                <div class="col-4 d-flex flex-row gap-2">
                                    <div class="mx-auto badge mobility">
                                        Limited Mobility
                                    </div>
                                    <div class="mx-auto badge mobility">
                                        Limited Mobility
                                    </div>
                                </div>
                                <div class="description text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                                <hr/>
                                <div class="sizeText">
                                    Size
                                </div>
                                <div class="selectorInput">
                                    <select class="form-select">
                                        <option defaultValue="">Show: 50</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                    </select>
                                </div>
                            </div>    
                            <div class="Bottom d-flex flex-row gap-4">
                                <div class="text-center text-lg-start">
                                    <a href="#" class="btn btn-dark ps-4 pe-4 rounded-0">Add to Cart</a>
                                </div>
                                <div class="text-center text-lg-start">
                                    <a href="#" class="btn btn-outline-dark ps-4 pe-4 rounded-0">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="Right text-center col-5 col-lg-5 p-3 d-flex flex-column align-items-center gap-3">
                            <Zoom>
                                <img class="img-fluid w-100" src={ProductImg}/>
                            </Zoom>
                            <div class="col-1 moreImages d-flex flex-row align-items-center justify-content-center gap-3">
                                <img class="img-fluid" src={ProductImg}/>
                                <img class="img-fluid" src={ProductImg}/>
                                <img class="img-fluid" src={ProductImg}/>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                <div class="row my-5">
                    <h3 class="fs-6 mb-3">Item Details</h3>
                    <div class="details bg-light d-flex flex-column flex-lg-row gap-4 p-3 rounded-3">
                        <div class="left flex-fill col-12 col-lg-6">
                            <div class="manufaturerdesc pb-2">
                                <p class="head mb-1">Manufacturer Description</p>
                                <p class="description text-muted">Developed with dermatologists, CeraVe Skin Renewing Night Cream is formulated with biomimetic peptides, hyaluronic acid, and three essential ceramides that work together to lock in skins moisture an help restore you skin's protective barrier overnight. Wake up to skin that looks refreshed and renewed. This non-greasy, intensely moisturizing skin renewing night cream is designed to soften and renew the look of tired skin.</p>
                            </div>
                            <div class="directions">
                                <p class="head mb-1">Directions</p>
                                <p class="description text-muted">Apply In Small Dots Where Needed Around The Face And Gently Smooth Until Thoroughly Absorbed. Use Nightly Before Bedtime. Avoid Direct Contact With Eyes. If Contact Occurs Rinse Thoroughly With Water.</p>
                            </div>
                        </div>
                        <div class="right flex-fill col-12 col-lg-6 d-flex flex-column">
                            <div class="detail group">
                                <p class="head mb-0">Manufacturer </p>
                                <p class="detail text-muted">CeraVe</p>
                            </div>
                            <div class="detail group">
                                <p class="head mb-0">Product Dimensions </p>
                                <p class="detail text-muted">8 x 2.63 x 2.19 inches 1.69 Ounces</p>
                            </div>
                            <div class="detail group">
                                <p class="head mb-0">Country of Origin </p>
                                <p class="detail text-muted">USA</p>
                            </div>
                            <div class="detail group">
                                <p class="head mb-0">Special Ingredients </p>
                                <p class="detail text-muted">Biomimetic Peptides, Ceramides, Hyaluronic Acid, Niacinamide</p>
                            </div>
                            <div class="detail group">
                                <p class="head mb-0">Material Type </p>
                                <p class="detail text-muted">Fragrance-free, Non-Comedogenic</p>
                            </div>
                            <div class="detail group">
                                <p class="head mb-0">Use for  </p>
                                <p class="detail text-muted">Face (All Skin Types)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row my-5 ">
                    <h3 class="fs-6 mb-3">Frequently Asked Questions (FAQ) </h3>
                    <div class="details d-flex flex-column flex-lg-row gap-4 bg-light rounded-3 p-3">
                        <div class="left flex-fill col-12 col-lg-6">
                            <div class="manufaturerdesc pb-2">
                                <p class="head mb-1">Q: What is the jar shaped like, and is it easy to open for those with physical impairments?</p>
                                <p class="description text-muted">A: The jar is rounded with an easy-open lid, yes. We also include a plastic device in our packaging for those with physical impairments.</p>
                            </div>
                            <div class="manufaturerdesc pb-2">
                                <p class="head mb-1">Q: What is the jar shaped like, and is it easy to open for those with physical impairments?</p>
                                <p class="description text-muted">A: The jar is rounded with an easy-open lid, yes. We also include a plastic device in our packaging for those with physical impairments.</p>
                            </div>
                        </div>
                            <div class="right flex-fill col-12 col-lg-6 d-flex flex-column">
                                <div class="manufaturerdesc pb-2">
                                    <p class="head mb-1">Q: What is the jar shaped like, and is it easy to open for those with physical impairments?</p>
                                    <p class="description text-muted">A: The jar is rounded with an easy-open lid, yes. We also include a plastic device in our packaging for those with physical impairments.</p>
                                </div>
                                <div class="manufaturerdesc pb-2">
                                    <p class="head mb-1">Q: What is the jar shaped like, and is it easy to open for those with physical impairments?</p>
                                    <p class="description text-muted">A: The jar is rounded with an easy-open lid, yes. We also include a plastic device in our packaging for those with physical impairments.</p>
                                </div>
                            </div>
                    </div>
                </div>

                <div class="row my-5 ">
                    <div class="top d-flex flex-row justify-content-between mb-3 align-items-center flex-wrap">
                        <h3 class="fs-6 mb-0">Community Reviews </h3>
                        <div class="d-flex mt-2 mt-lg-0">
                            <div>
                                <div class="right d-flex align-items-center flex-row gap-4">
                                    <select class="form-select">
                                        <option defaultValue="">Sort by: Featured</option>
                                        <option value="Low to High">Price: Low to High</option>
                                        <option value="High to Low"> Price: High to Low</option>
                                        <option value="Release Date"> Release Date</option>
                                        <option value="Avg. Rating"> Avg. Rating</option>
                                    </select>
                                    <div class="text-center text-lg-start w-100">
                                        <a href="#" class="btn btn-outline-dark rounded-0">Write a Review</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="details d-flex flex-column flex-lg-row gap-4 ">
                        <div class="left col-12 col-lg-6 d-flex flex-column gap-4">
                            <div class="d-flex flex-column gap-2 p-3 bg-light rounded-3">
                                <i class="fa fa-star me-1"></i>
                                <span class="fw-bold">Rating: 4.5/5.0</span>
                                <div class="profilegroup justify-content-between d-flex flex-row align-items-center mb-2">
                                    <div class="left d-flex flex-row">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar-lg me-2" alt="Avatar" />
                                        <div class="profilename d-flex flex-column">
                                            <span class="m-0 fs-6">Jaquel Anderson</span>
                                            <p class="m-0 text-muted">March 23, 2023</p>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="mx-auto badge mobility">
                                            Limited Mobility
                                        </div>
                                    </div>
                                </div>
                                <div class="manufaturerdesc pb-2">
                                    <p class="head mb-3">After struggling to open the packaging with one hand, I was disappointed to find that the lotion didn't absorb into my skin well. It left a sticky residue and didn't provide the relief I was hoping for.</p>
                                    <div class="questionparent d-flex flex-row flex-fill gap-4">
                                        <div class="questiongroup col-6">
                                            <p class="mb-0 description fw-bold">Would you recommend this product to others who have the same accessibility needs as you?</p>
                                            <p class="answer">No.</p>
                                        </div>
                                        <div class="questiongroup col-6">
                                            <p class="mb-0 description fw-bold">Would you order this product again?</p>
                                            <p class="answer">No.</p>
                                        </div>
                                    </div>
                                </div>
                            
                                
                            </div>
                            <div class="d-flex flex-column gap-2 p-3 bg-light rounded-3 p-3">
                                <div class="stargroup">
                                    <i class="fa fa-star me-1"></i>
                                    <i class="fa fa-star me-1"></i>
                                    <i class="fa fa-star me-1"></i>
                                    <i class="fa fa-star me-1"></i>
                                    <i class="fa fa-star-half-alt me-1"></i>
                                </div>
                                <span class="fw-bold">Rating: 4.5/5.0</span>
                                <div class="profilegroup justify-content-between d-flex flex-row align-items-center mb-2">
                                    <div class="left d-flex flex-row">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar-lg me-2" alt="Avatar" />
                                        <div class="profilename d-flex flex-column">
                                            <span class="m-0 fs-6">Jaquel Anderson</span>
                                            <p class="m-0 text-muted">March 23, 2023</p>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="mx-auto badge mobility">
                                            Limited Mobility
                                        </div>
                                    </div>
                                </div>
                                <div class="manufaturerdesc pb-2">
                                    <p class="head mb-3">After struggling to open the packaging with one hand, I was disappointed to find that the lotion didn't absorb into my skin well. It left a sticky residue and didn't provide the relief I was hoping for.</p>
                                    <div class="questionparent d-flex flex-row flex-fill gap-4">
                                        <div class="questiongroup col-6">
                                            <p class="mb-0 description fw-bold">Would you recommend this product to others who have the same accessibility needs as you?</p>
                                            <p class="answer">No.</p>
                                        </div>
                                        <div class="questiongroup col-6">
                                            <p class="mb-0 description fw-bold">Would you order this product again?</p>
                                            <p class="answer">No.</p>
                                        </div>
                                    </div>
                                </div>
                            
                                
                            </div>
                        </div>
                        <div class="right col-12 col-lg-6 d-flex flex-column gap-4">
                            <div class="d-flex flex-column gap-2 p-3 bg-light rounded-3 p-3">
                                <i class="fa fa-star me-1"></i>
                                <span class="fw-bold">Rating: 4.5/5.0</span>
                                <div class="profilegroup justify-content-between d-flex flex-row align-items-center mb-2">
                                    <div class="left d-flex flex-row">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar-lg me-2" alt="Avatar" />
                                        <div class="profilename d-flex flex-column">
                                            <span class="m-0 fs-6">Jaquel Anderson</span>
                                            <p class="m-0 text-muted">March 23, 2023</p>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="mx-auto badge mobility">
                                            Limited Mobility
                                        </div>
                                    </div>
                                </div>
                                <div class="manufaturerdesc pb-2">
                                    <p class="head mb-3">After struggling to open the packaging with one hand, I was disappointed to find that the lotion didn't absorb into my skin well. It left a sticky residue and didn't provide the relief I was hoping for.</p>
                                    <div class="questionparent d-flex flex-row flex-fill gap-4">
                                        <div class="questiongroup col-6">
                                            <p class="mb-0 description fw-bold">Would you recommend this product to others who have the same accessibility needs as you?</p>
                                            <p class="answer">No.</p>
                                        </div>
                                        <div class="questiongroup col-6">
                                            <p class="mb-0 description fw-bold">Would you order this product again?</p>
                                            <p class="answer">No.</p>
                                        </div>
                                    </div>
                                </div>
                            
                                
                            </div>
                            <div class="d-flex flex-column gap-2 p-3 bg-light rounded-3 p-3">
                                <i class="fa fa-star me-1"></i>
                                <span class="fw-bold">Rating: 4.5/5.0</span>
                                <div class="profilegroup justify-content-between d-flex flex-row align-items-center mb-2">
                                    <div class="left d-flex flex-row">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar-lg me-2" alt="Avatar" />
                                        <div class="profilename d-flex flex-column">
                                            <span class="m-0 fs-6">Jaquel Anderson</span>
                                            <p class="m-0 text-muted">March 23, 2023</p>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="mx-auto badge mobility">
                                            Limited Mobility
                                        </div>
                                    </div>
                                </div>
                                <div class="manufaturerdesc pb-2">
                                    <p class="head mb-3">After struggling to open the packaging with one hand, I was disappointed to find that the lotion didn't absorb into my skin well. It left a sticky residue and didn't provide the relief I was hoping for.</p>
                                    <div class="questionparent d-flex flex-row flex-fill gap-4">
                                        <div class="questiongroup col-6">
                                            <p class="mb-0 description fw-bold">Would you recommend this product to others who have the same accessibility needs as you?</p>
                                            <p class="answer">No.</p>
                                        </div>
                                        <div class="questiongroup col-6">
                                            <p class="mb-0 description fw-bold">Would you order this product again?</p>
                                            <p class="answer">No.</p>
                                        </div>
                                    </div>
                                </div>
                            
                                
                            </div>
                                
                        </div>

                        
                    </div>

                </div>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Product