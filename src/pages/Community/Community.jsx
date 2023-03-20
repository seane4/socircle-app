import React from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import "../Shop/custom.css"

function Community() {
  return (
    <div class="bg-light">
      <Nav/>
      
      <main>
        <div class="">
          
          
          <div class="container mb-5">

            

            <div class="row gx-10 mt-4 d-flex justify-content-center">
              <div class="leftusergroup col-lg-3 col-md-4 mb-4 d-flex flex-column gap-3">
                <div class="gap-3 left d-flex flex-column align-items-center p-3 rounded-3 border border-1 bg-white sticky-top stickpad">
                    <div class="profilename d-flex flex-column text-center align-items-center">
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar-lg me-2" alt="Avatar" />
                      <span class="m-0 fs-5">Jaquel Anderson</span>
                    </div>
                    <p class="m-0 text-muted text-center">Seeking solutions best described as:</p>
                    <div class="badgegroup d-flex flex-column gap-3">
                      <div class="mx-auto badge mobility">
                        Limited Mobility
                      </div>
                      <div class="mx-auto badge allergy">
                        Allergy Free
                      </div>
                      <div class="mx-auto badge skin">
                        Sensitive Skin
                      </div>
                    </div>

                    <button type="button" class="btn btn-light border border-1 w-100" data-bs-toggle="modal" data-bs-target="#accessibilitySelector">
                      Edit Accessibility Needs
                    </button>
                </div>

                  
              </div>
              <section class="col-lg-7 col-md-12 rounded-3 d-flex flex-column gap-3">
                <div class="createpost d-flex flex-row align-items-center bg-white p-3 rounded-3 border border-1">
                  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar-md me-2" alt="Avatar" />
                  <button type="button" class="btn btn-light d-flex justify-content-left flex-fill rounded-5 border border-secondary border-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <span class="text-muted">Create a post</span>
                  </button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content p-2">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Create a post</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"></span>
                          </button>
                        </div>
                        <div class="modal-body d-flex flex-column gap-3">
                          <div class="left d-flex flex-row align-items-center">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar-md me-2" alt="Avatar" />
                            <div class="profilename d-flex flex-column">
                              <span class="m-0 fs-6">Jaquel Anderson</span>
                            </div>
                          </div>
                          <div class="usercontent d-flex flex-column gap-3">
                            <input class="w-100 border-0 bg-light p-2" type="text" placeholder='Your title'></input>
                            <textarea rows="4" cols="50" class="w-100 border-0 bg-light p-2" placeholder='Start writing your post'></textarea>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-dark flex-fill">Post</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
                <div class="feedpost bg-white rounded-3 p-4 d-flex flex-column gap-3 border border-1">
                  <h3 class="posttitle fw-bold">Skincare for Paralyzed Individuals: Brands That I Love</h3>
                  <div class="userprofilegroup flex-wrap gap-3 gap-lg-none d-flex justify-content-between align-items-center">
                    <div class="left d-flex flex-row">
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" class="rounded-circle avatar-lg me-2" alt="Avatar" />
                        <div class="profilename d-flex flex-column">
                          <span class="m-0 fs-6">Malia Rodriguez</span>
                          <p class="m-0 text-muted">March 22, 2023</p>
                        </div>
                    </div>
                    <div class="right d-flex flex-row gap-3">
                      <div class="mx-auto badge mobility">
                        Limited Mobility
                      </div>
                      <div class="mx-auto badge skin">
                        Sensitive Skin
                      </div>
                    </div>
                  </div>
                  <div class="manufaturerdesc pb-2 " id="module">
                    <p class="head mb-1 collapse" id="collapseExample" aria-expanded="false">Hi everyone, my name is Malia I was born with limited mobility due to a birth defect that affects my hands. As you can imagine, finding skincare products and routines that work for me has been a challenge. Over the years, I've experimented with countless products and techniques to find what works best for me. Today, I want to share some of my favorite brands with you all in the hopes that I can help someone else with similar needs.<br/><br/><strong>Haus Labs</strong> has some amazing products for my accessibility needs, specifically their hard plastic eyeshadow palettes. A lot of standard palettes are not easy to open, and tend to close if you're not holding them open.<br/><br/><strong>Drunk Elephant</strong> is also one of my go-to's for their unique twist top, flip caps, and twist n' pump packaging. Their products are designed for one-handed use, so they have such a wide selection of helpful items.If you aren't already using Drunk Elephant, you must check them out!! They're just great.</p>
                    <a role="button" class="btn btn-link collapsed d-flex justify-content-end" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    </a>
                  </div>
                  <div class="bottommetrics d-flex justify-content-between align-items-center">
                    <div class="left">
                      <div class="userPics parent d-flex flex-row gap-2 text-underline">
                        <div class="text-muted fs-6 ">
                          24 Shares
                        </div>
                      </div>
                    </div>
                    <div class="right d-flex flex-row align-items-center gap-2 text-muted">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-thumbs-up me-2"></i>
                        16
                      </div>
                      <div class="commentgroup">
                        <i class="fa fa-regular fa-comment-alt me-2"></i>
                        14
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div class="buttonparent pe-2 ps-2 d-flex flex-row gap-2 justify-content-around mb-1">
                    <button class="btn btn-light border border-1 flex-fill">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-thumbs-up me-2"></i>
                        Like
                      </div>
                    </button>
                    <button class="btn btn-light border border-1 flex-fill">
                      <div class="commentgroup">
                        <i class="fa fa-regular fa-comment-alt me-2"></i>
                        Comment
                      </div>
                    </button>
                    <button class="btn btn-light border border-1 flex-fill">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-bookmark me-2"></i>
                        Bookmark
                      </div>
                    </button>
                    <button class="btn btn-light border border-1 flex-fill">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-share-square me-2"></i>
                        Share
                      </div>
                    </button>
                  </div>
                </div>
                <div class="feedpost bg-white rounded-3 p-4 d-flex flex-column gap-3 border border-1">
                  <h3 class="posttitle fw-bold">Any Favorite Creams and Moisturizers for Severe Eczema?</h3>
                  <div class="userprofilegroup flex-wrap gap-3 gap-lg-none d-flex justify-content-between align-items-center">
                    <div class="left d-flex flex-row">
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/4.webp" class="rounded-circle avatar-lg me-2" alt="Avatar" />
                        <div class="profilename d-flex flex-column">
                          <span class="m-0 fs-6">Ames Hansen</span>
                          <p class="m-0 text-muted">March 23, 2023</p>
                        </div>
                    </div>
                    <div class="right d-flex flex-row gap-3">
                      <div class="mx-auto badge skin">
                        Sensitive Skin
                      </div>
                      <div class="mx-auto badge allergy">
                        Allgery-Free
                      </div>
                    </div>
                  </div>
                  <div class="manufaturerdesc pb-2">
                    <p class="head mb-3">Hi everyone, I’ve recently been diagnosed with severe eczema along my face and due to this I can no longer use the same skincare routine from before. I’ve read blogs and followed YouTubers but it’s hard to know if any of the items they recommend really work. If you have a similar condition please share your favorite routines and products so that people like us can find real solutions. Thank you so much!!</p>
                  </div>
                  <div class="bottommetrics d-flex justify-content-between align-items-center">
                    <div class="left">
                      <div class="userPics parent d-flex flex-row gap-2 text-underline">
                        <div class="text-muted fs-6 ">
                          137 Shares
                        </div>
                      </div>
                    </div>
                    <div class="right d-flex flex-row align-items-center gap-2 text-muted">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-thumbs-up me-2"></i>
                        46
                      </div>
                      <div class="commentgroup">
                        <i class="fa fa-regular fa-comment-alt me-2"></i>
                        20
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div class="buttonparent pe-2 ps-2 d-flex flex-row gap-2 justify-content-around mb-1">
                    <button class="btn btn-light border border-1 flex-fill">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-thumbs-up me-2"></i>
                        Like
                      </div>
                    </button>
                    <button class="btn btn-light border border-1 flex-fill">
                      <div class="commentgroup">
                        <i class="fa fa-regular fa-comment-alt me-2"></i>
                        Comment
                      </div>
                    </button>
                    <button class="btn btn-light border border-1 flex-fill">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-bookmark me-2"></i>
                        Bookmark
                      </div>
                    </button>
                    <button class="btn btn-light border border-1 flex-fill">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-share-square me-2"></i>
                        Share
                      </div>
                    </button>
                  </div>
                </div>
                
                <div class="feedpost bg-white rounded-3 p-4 d-flex flex-column gap-3 border border-1">
                  <h3 class="posttitle fw-bold">My Daily Favorites - Navigating Skincare as a Braille User</h3>
                  <div class="userprofilegroup flex-wrap gap-3 gap-lg-none d-flex justify-content-between align-items-center">
                    <div class="left d-flex flex-row">
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/22.webp" class="rounded-circle avatar-lg me-2" alt="Avatar" />
                        <div class="profilename d-flex flex-column">
                          <span class="m-0 fs-6">Jordan Bourdin</span>
                          <p class="m-0 text-muted">March 21, 2023</p>
                        </div>
                    </div>
                    <div class="right d-flex flex-row gap-3">
                      <div class="mx-auto badge vision">
                        Low/No Vision
                      </div>

                    </div>
                  </div>
                  <div class="manufaturerdesc pb-2 " id="modulejordan">
                    <p class="head mb-1 collapse" id="collapseExamplejordan" aria-expanded="false">Hello. My name is Jordan and I use Braille to navigate every day. When I first started my skincare routine, I found it challenging to read the labels and identify the products. Thankfully, I discovered that many skincare brands have Braille on their packaging, which made it easier for me to identify what I was using. However, not all brands have Braille labeling, which can be frustrating. <br/><br/>I'm a huge fan of Pharrell so I have to recommend the All In Skincare & Body Bar Set by Humanrace for anyone. <br/><br/>Clealogic also has great set of exfoliating cloths that I will forever use. They also have Braille packaging, and their items are physically distinguishable unlike most cloths.<br/><br/>Any recommendations? I'm always looking for more great products.</p>
                    <a role="button" class="btn btn-link collapsed d-flex justify-content-end" data-bs-toggle="collapse" data-bs-target="#collapseExamplejordan" aria-expanded="false" aria-controls="collapseExample">
                    </a>
                  </div>
                  <div class="bottommetrics d-flex justify-content-between align-items-center">
                    <div class="left">
                      <div class="userPics parent d-flex flex-row gap-2 text-underline">
                        <div class="text-muted fs-6 ">
                          13 Shares
                        </div>
                      </div>
                    </div>
                    <div class="right d-flex flex-row align-items-center gap-2 text-muted">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-thumbs-up me-2"></i>
                        22
                      </div>
                      <div class="commentgroup">
                        <i class="fa fa-regular fa-comment-alt me-2"></i>
                        18
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div class="buttonparent pe-2 ps-2 d-flex flex-row gap-2 justify-content-around mb-1">
                    <button class="btn btn-light border border-1 flex-fill">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-thumbs-up me-2"></i>
                        Like
                      </div>
                    </button>
                    <button class="btn btn-light border border-1 flex-fill">
                      <div class="commentgroup">
                        <i class="fa fa-regular fa-comment-alt me-2"></i>
                        Comment
                      </div>
                    </button>
                    <button class="btn btn-light border border-1 flex-fill">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-bookmark me-2"></i>
                        Bookmark
                      </div>
                    </button>
                    <button class="btn btn-light border border-1 flex-fill">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-share-square me-2"></i>
                        Share
                      </div>
                    </button>
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

export default Community