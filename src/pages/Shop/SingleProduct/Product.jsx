import React from 'react'
import Nav from '../../../components/Nav/Nav'
import "./product.css"
import "../custom.css"
import ProductImg from "../../Shop/ProductImage.png"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Footer from '../../../components/Footer/Footer'
import ReviewCard from '../../../components/ReviewCard/ReviewCard'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <div class="bg-light">
        <Nav/>
        <main>

            <div class="container mt-5 mb-5">
                <div class="row bg-white rounded-3 mb-5 border border-1 border-outline">
                    

                    <div class="ProductInfo d-flex justify-content-around gap-2 gap-lg-5 mb-5 flex-lg-row flex-column-reverse align-items-center">
                        <div class="Left bg-white col-12 col-lg-5 p-3 d-flex flex-column gap-5">
                        <div class="breadcrumb p-3 ps-0 pb-0">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/shop-all">Shop All Products</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Nécessaire Body Lotion</li>
                            </ol>
                        </nav>
                    </div>
                            <div class="Top d-flex align-items-center justify-content-between">
                                <div class="">
                                    <i class="fa fa-star me-1"></i>
                                    <span class="fw-bold">Rating: 4.5/5.0</span>
                                </div>
                                <div class="userPics parent d-flex flex-row gap-2 text-underline">
                                    <div class="">
                                        52 Reviews
                                    </div>
                                </div>
                            </div>
                            <div class="Middle d-flex flex-column gap-2">
                                <div class="title display-5">
                                    Nécessaire Body Lotion
                                </div>
                                <div class="col-4 d-flex flex-row gap-2">
                                    <div class="mx-auto badge skin">
                                        Sensitive Skin
                                    </div>
                                    <div class="mx-auto badge allergy">
                                        Allergy-Free
                                    </div>
                                </div>
                                <div class="description text-muted">
                                    A daily multi-vitamin moisturizing treatment to nourish and strengthen the skin. Fast-absorbing. Hypoallergenic. Dermatologist-Tested. Non-Comedogenic.
                                </div>
                                <hr/>
                                <div class="sizeText">
                                    Size
                                </div>
                                <div class="selectorInput w-50">
                                    <select class="form-select">
                                        <option defaultValue="150">150ml: $15.99</option>
                                        <option value="200">200ml: $18.99</option>
                                        <option value="250">250ml: $20.99</option>
                                        <option value="300">300ml: $22.99</option>
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
                        <div class="Right text-center col-8 col-lg-5 p-3 d-flex flex-column align-items-center gap-3">
                            <Zoom>
                                <img class="img-fluid w-100" src={ProductImg}/>
                            </Zoom>
                            <div class="col-3 col-lg-1 moreImages d-flex flex-row align-items-center justify-content-center gap-3">
                                <img class="img-fluid" src={ProductImg}/>
                                <img class="img-fluid" src={ProductImg}/>
                                <img class="img-fluid" src={ProductImg}/>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                <div class="row my-5 justify-content-center">
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <h3 class="fs-6 mb-0 fw-bold">Item Details</h3>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body d-flex flex-row gap-4">
                                    <div class="row">
                                        <div class="left flex-fill col-12 col-lg-6">
                                            <div class="manufaturerdesc pb-2">
                                                <p class="head mb-1">Manufacturer Description</p>
                                                <p class="description text-muted">Developed with dermatologists, Nécessaire body lotion is formulated with biomimetic peptides, hyaluronic acid, and three essential ceramides that work together to lock in skins moisture an help restore you skin's protective barrier overnight. Wake up to skin that looks refreshed and renewed. This non-greasy, intensely moisturizing skin renewing lotion is designed to soften and renew the look of tired skin.</p>
                                            </div>
                                            <div class="directions">
                                                <p class="head mb-1">Directions</p>
                                                <p class="description text-muted">Apply in regions of dryness along the body including the neck and legs. Avoid direct eye contact with eyes. If contact occurs rise thoroughly with water.</p>
                                            </div>
                                        </div>
                                    <div class="right flex-fill col-12 col-lg-6 d-flex flex-column">
                                        <div class="detail group">
                                            <p class="head mb-0">Manufacturer </p>
                                            <p class="detail text-muted">Nécessaire</p>
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
                                            <p class="detail text-muted">Body (All Skin Types)</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <h3 class="fs-6 mb-0 fw-bold">Frequently Asked Questions (FAQ) </h3>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div class="accordion-body d-flex flex-row gap-4">
                                    <div class="row">
                                    <div class="left flex-fill col-12 col-lg-6">
                                        <div class="manufaturerdesc pb-2">
                                            <p class="head mb-1">Q: Is this product known to cause itching for those with sensitive skin conditions?</p>
                                            <p class="description text-muted">A: This lotion is designed specifically to be hypoallergenic and anti-itch, containing ingredients like oat and shea butter to help moistruize the skin.</p>
                                        </div>
                                        <div class="manufaturerdesc pb-2">
                                            <p class="head mb-1">Q: When is the best time to apply this product?</p>
                                            <p class="description text-muted">A: Immediately after a bath or shower is critical. if you don’t moisturize immediately afterward, the moisture your skin needs will evaporate and may cause a rebound effect making the skin even more dry.</p>
                                        </div>
                                    </div>
                                    <div class="right flex-fill col-12 col-lg-6 d-flex flex-column">
                                        <div class="manufaturerdesc pb-2">
                                            <p class="head mb-1">Q: Why does my skin burn sometimes when I apply lotion?</p>
                                            <p class="description text-muted">A: Because lotions are primarily made of water, they evaporate quickly and may contain preservatives that burn when applied to skin that’s scratched or broken.</p>
                                        </div>
                                        <div class="manufaturerdesc pb-2">
                                            <p class="head mb-1">Q: How does this product help with sensitive skin?</p>
                                            <p class="description text-muted">A: This lotion targets the source of the symptoms of eczema and moisturizes the skin using a velvety, non-greasy vehicle to provide long-lasting hydration to severely dry skin.</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                <h3 class="fs-6 mb-0 fw-bold">Ingredients</h3>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div class="accordion-body d-flex flex-row gap-4">
                                    <div class="row">
                                    <div class="left flex-fill col-12 col-lg-6">
                                        <div class="manufaturerdesc pb-2">
                                            <p class="head mb-1">-Niacinamide: Clinically shown vitamin B3 helps strengthen the skin's natural barrier.
                                            -Plant Oils: Marula, cacay, and meadowfoam oils help nourish the skin.
                                            -Peptides: Two signal peptides help skin's visible firmness and tightness. <br/><br/>

                                            Aqua/Water/Eau, Caprylic/Capric Triglyceride, Dicaprylyl Carbonate, Glycerin, Shea Butter Glycerides, Simmondsia Chinensis (Jojoba) Seed Oil, Cetearyl Olivate, Niacinamide, Cetearyl Alcohol, Glyceryl Stearate, Sorbitan Olivate, Palmitoyl Dipeptide-5 Diaminobutyroyl Hydroxythreonine, Palmitoyl Dipeptide-5 Diaminonhydroxybutyrate, Sclerocarya Birrea Seed Oil, Caryodendron Orinocense Seed Oil, Limnanthes Alba (Meadowfoam) Seed Oil, Saccharum Officinarum (Sugar Cane) Extract, Camellia Sinensis Leaf Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Aurantium Dulcis (Orange) Fruit Extract, Citrus Limon (Lemon) Fruit Extract, Tocopherol, Linoleic Acid, Linolenic Acid, Propanediol, Polyacrylate Crosspolymer-6, Caprylhydroxamic Acid, Caprylyl Glycol, T-Butyl Alcohol, Oleic Acid, Palmitic Acid, Stearic Acid.

                                            Acrylates, Aluminum Salts, Animal Musks/Fats/Oils, Benzophenones and related compounds, Butoxyethanol, Butylated hydroxyanisole (BHA), Butylated hydroxytoluene (BHT) under 0.1%, Carbon Black or Black 2, Coal Tar, Ethanolamines, Formaldehyde and Formaldehyde Releasing Agents, Hydroquinone, Lead and Lead Acetate, Mercury + Mercury Compounds (Thimerisol), Methoxyethanol, Methyl Cellosolve, Methylchloroisothiazolinone and Methylisothiazolinone, Mineral Oil, Nanomaterials (restrictions for specific nanomaterials only), Oxybenzone, Parabens, Petrolatum and Paraffin (USP grade only), Phenoxyethanol under 1%, Phthalates, Plastic Microbeads, Polyacrylamide & Acrylamide, Resorcinol, Retinyl Palmitate, Styrene, Sulfates, Talc (no detection of asbestos), Toluene, Triclosan and Triclocarban, Undisclosed Synthetic Fragrance (under 1% and formulated without Acetaldehyde, Acetone, Acetonitrile, Benzalkonium chloride, BPA, EDTA, Methylene chloride, PTFE, PFOA), 1,4-Dioxane (ingredients must comply with impurity thresholds), Octinoxate, PFAS compounds, Nitromusks and Polycyclic Musks, Ethoxylated Ingredients (including PEGS or polyethylene glycol must meet contamination limits for 1,4-Dioxane and ethylene oxide), Cyclic Silicones, EDTA and derivatives (allowed if no technical substitute under 0.2%).</p>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                </div>

                <div class="row my-5">
                    <div class="top d-flex flex-row justify-content-between mb-3 align-items-center flex-wrap">
                        <h3 class="fs-6 mb-0 fw-bold">Community Reviews </h3>
                        <div class="mt-2 mt-lg-0">
                                <div class="right d-flex align-items-center flex-row gap-4">
                                    <div class="selectgroup">
                                        <select class="form-select">
                                            <option defaultValue="Featured">Featured</option>
                                            <option value="Oldest">Oldest</option>
                                            <option value="Newest">Newest</option>
                                            <option value="Most Liked">Most Liked</option>
                                        </select>
                                    </div>
                                    <div class="text-lg-start bg-white">
                                        <button class="btn btn-outline-dark rounded-0">Write a Review</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                    <div class="details d-flex flex-column flex-lg-row gap-1 px-0">
                        <div class="left col-12 col-lg-6 d-flex flex-column gap-1">
                        <div>
                            <div class="d-flex flex-column gap-2 p-3 bg-white rounded-3 p-3 border border-white-50 border-1">
                                <div class="stargroup">
                                    <i class="fa fa-star me-1"></i>
                                    <i class="fa fa-star me-1"></i>

                                    <i class="fa fa-star-half-alt me-1"></i>
                                    
                                </div>
                                <span class="fw-bold">Rating: 2.5/5.0</span>
                                <div class="profilegroup flex-wrap justify-content-between d-flex flex-row align-items-center mb-2">
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
                                    <div class="questionparent d-flex flex-column flex-lg-row flex-fill gap-2">
                                        <div class="questiongroup w-100">
                                            <p class="mb-0 description fw-bold">Would you recommend this product to others who have the same accessibility needs as you?</p>
                                            <p class="answer">No.</p>
                                        </div>
                                        <div class="questiongroup w-100">
                                            <p class="mb-0 description fw-bold">Would you order this product again?</p>
                                            <p class="answer">No.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex flex-column gap-2 p-3 bg-white rounded-3 p-3 border border-white-50 border-1">
                                <div class="stargroup">
                                    <i class="fa fa-star me-1"></i>
                                    <i class="fa fa-star me-1"></i>
                                    <i class="fa fa-star me-1"></i>
                                    <i class="fa fa-star me-1"></i>
                                    <i class="fa fa-star me-1"></i>
                                    
                                </div>
                                <span class="fw-bold">Rating: 5.0/5.0</span>
                                <div class="profilegroup flex-wrap justify-content-between d-flex flex-row align-items-center mb-2">
                                    <div class="left d-flex flex-row">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/4.webp" class="rounded-circle avatar-lg me-2" alt="Avatar" />
                                        <div class="profilename d-flex flex-column">
                                            <span class="m-0 fs-6">Ames Hansen</span>
                                            <p class="m-0 text-muted">February 03, 2023</p>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="badgegroup d-flex flex-row gap-1 flex-wrap">
                                            <div class= "pt-1 pb-1">
                                                <span class="badge skin">Sensitive Skin</span>
                                            </div>
                                            <div class= "pt-1 pb-1">
                                                <span class="badge allergy">Allergy-Free</span>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                                <div class="manufaturerdesc pb-2">
                                    <p class="head mb-3">As someone with severe allergies, I'm always cautious when trying new skincare products. I'm happy to say that this product is completely allergy-free and has not caused any irritation or adverse reactions. It's a relief to have a reliable skincare option that I can trust.</p>
                                    <div class="questionparent d-flex flex-column flex-lg-row flex-fill gap-2">
                                        <div class="questiongroup w-100">
                                            <p class="mb-0 description fw-bold">Would you recommend this product to others who have the same accessibility needs as you?</p>
                                            <p class="answer">Yes.</p>
                                        </div>
                                        <div class="questiongroup w-100">
                                            <p class="mb-0 description fw-bold">Would you order this product again?</p>
                                            <p class="answer">Yes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        </div>
                        <div class="right col-12 col-lg-6 d-flex flex-column gap-1">
                        <div>
                            <div class="d-flex flex-column gap-2 p-3 bg-white rounded-3 p-3 border border-white-50 border-1">
                                <div class="stargroup">
                                    <i class="fa fa-star me-1"></i>
                                    <i class="fa fa-star me-1"></i>
                                    <i class="fa fa-star me-1"></i>
                                    
                                </div>
                                <span class="fw-bold">Rating: 3.0/5.0</span>
                                <div class="profilegroup flex-wrap justify-content-between d-flex flex-row align-items-center mb-2">
                                    <div class="left d-flex flex-row">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/25.webp" class="rounded-circle avatar-lg me-2" alt="Avatar" />
                                        <div class="profilename d-flex flex-column">
                                            <span class="m-0 fs-6">Reeva Portmouth</span>
                                            <p class="m-0 text-muted">February 03, 2023</p>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="badgegroup d-flex flex-row gap-1 flex-wrap">
                                            <div class= "pt-1 pb-1">
                                                <span class="badge vision">Low/No Vision</span>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                                <div class="manufaturerdesc pb-2">
                                    <p class="head mb-3">I've been using Braille for years, and this packaging is just no good. It's so hard to distinguish compared to similar products, and I had to get some help with the instructions from a friend. Not all that useful, but the product was nice I guess.</p>
                                    <div class="questionparent d-flex flex-column flex-lg-row flex-fill gap-2">
                                        <div class="questiongroup w-100">
                                            <p class="mb-0 description fw-bold">Would you recommend this product to others who have the same accessibility needs as you?</p>
                                            <p class="answer">No.</p>
                                        </div>
                                        <div class="questiongroup w-100">
                                            <p class="mb-0 description fw-bold">Would you order this product again?</p>
                                            <p class="answer">Maybe.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div>
                            <div class="d-flex flex-column gap-2 p-3 bg-white rounded-3 p-3 border border-white-50 border-1">
                                <div class="stargroup">
                                    <i class="fa fa-star me-1"></i>
                                    <i class="fa fa-star me-1"></i>

                                    
                                </div>
                                <span class="fw-bold">Rating: 2.0/5.0</span>
                                <div class="profilegroup flex-wrap justify-content-between d-flex flex-row align-items-center mb-2">
                                    <div class="left d-flex flex-row">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/24.webp" class="rounded-circle avatar-lg me-2" alt="Avatar" />
                                        <div class="profilename d-flex flex-column">
                                            <span class="m-0 fs-6">Lindsey Brettworth</span>
                                            <p class="m-0 text-muted">February 01, 2023</p>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="badgegroup d-flex flex-row gap-1 flex-wrap">
                                            <div class= "pt-1 pb-1">
                                                <span class="badge cog">Cognitive Assistance</span>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                                <div class="manufaturerdesc pb-2">
                                    <p class="head mb-3">I found the instructions on the label to be confusing and unclear. It wasn't until I had already applied the product that I realized I had used it incorrectly. The company should consider making their instructions more accessible and user-friendly for those with cognitive impairments.</p>
                                    <div class="questionparent d-flex flex-column flex-lg-row flex-fill gap-2">
                                        <div class="questiongroup w-100">
                                            <p class="mb-0 description fw-bold">Would you recommend this product to others who have the same accessibility needs as you?</p>
                                            <p class="answer">No.</p>
                                        </div>
                                        <div class="questiongroup w-100">
                                            <p class="mb-0 description fw-bold">Would you order this product again?</p>
                                            <p class="answer">Maybe.</p>
                                        </div>
                                    </div>
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