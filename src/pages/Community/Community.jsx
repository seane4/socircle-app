import React from 'react'
import Nav from '../../components/Nav/Nav'
import "../Shop/custom.css"

function Community() {
  return (
    <div class="bg-light">
      <Nav/>
      <main>
        <div class="my-5">

          <div class="container">

            <div class="container">
              <div class="row p-5 bg-community my-5 text-white">
                <div class="jumbotron jumbotron-fluid text-center d-flex flex-column justify-content-center align-items-center">

                <div class="userPics parent d-flex flex-row gap-2 text-underline justify-content-center align-items-center">
                  <div class="userPics d-flex">
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar-lg" alt="Avatar" />
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar-lg" alt="Avatar" />
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar-lg" alt="Avatar" />
                  </div>
                  
                </div>            
                  <h1 class="display-5 unbounded">Be Part of a Community That Cares</h1>
                  <p class="lead">Great products tried and tested by community members</p>
                </div>
              </div>
            </div>

            <div class="row gx-10 mt-5 d-flex justify-content-center">
              <div class="leftusergroup col-lg-3 col-md-4 mb-4 d-flex flex-column gap-3">
                <div class="gap-3 left d-flex flex-column align-items-center bg-light p-3 rounded-3 usercard bg-white sticky-top stickpad">
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

                    <button type="button" class="btn btn-light usercard w-100" data-bs-toggle="modal" data-bs-target="#accessibilitySelector">
                      Edit Accessibility Needs
                    </button>
                </div>
                  {/* <button type="button" class="btn btn-light usercard w-100">
                  <i class="fa fa-regular fa-bookmark me-2"></i>
                    Bookmarks</button> */}
                  
              </div>
              <section class="col-lg-7 col-md-12 rounded-3 d-flex flex-column gap-3">
                <div class="createpost d-flex flex-row align-items-center bg-white p-3 rounded-3 usercard">
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
                <div class="feedpost bg-white rounded-3 p-3 d-flex flex-column gap-3 usercard">
                  <h3 class="posttitle fw-bold">Any Favorite Creams and Moisturizers for Severe Eczema?</h3>
                  <div class="userprofilegroup d-flex justify-content-between align-items-center">
                    <div class="left d-flex flex-row">
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar-lg me-2" alt="Avatar" />
                        <div class="profilename d-flex flex-column">
                          <span class="m-0 fs-6">Jaquel Anderson</span>
                          <p class="m-0 text-muted">March 23, 2023</p>
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
                  <div class="manufaturerdesc pb-2">
                    <p class="head mb-3">After struggling to open the packaging with one hand, I was disappointed to find that the lotion didn't absorb into my skin well. It left a sticky residue and didn't provide the relief I was hoping for.</p>
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
                    <button class="btn btn-light flex-fill">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-thumbs-up me-2"></i>
                        Like
                      </div>
                    </button>
                    <button class="btn btn-light flex-fill">
                      <div class="commentgroup">
                        <i class="fa fa-regular fa-comment-alt me-2"></i>
                        Comment
                      </div>
                    </button>
                    <button class="btn btn-light flex-fill">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-bookmark me-2"></i>
                        Bookmark
                      </div>
                    </button>
                    <button class="btn btn-light flex-fill">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-share-square me-2"></i>
                        Share
                      </div>
                    </button>
                  </div>
                </div>
                <div class="feedpost bg-light rounded-3 p-3 d-flex flex-column gap-3 usercard">
                  <h3 class="posttitle fw-bold">Any Favorite Creams and Moisturizers for Severe Eczema?</h3>
                  <div class="userprofilegroup d-flex justify-content-between align-items-center">
                    <div class="left d-flex flex-row">
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar-lg me-2" alt="Avatar" />
                        <div class="profilename d-flex flex-column">
                          <span class="m-0 fs-6">Jaquel Anderson</span>
                          <p class="m-0 text-muted">March 23, 2023</p>
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
                  <div class="manufaturerdesc pb-2">
                    <p class="head mb-3">After struggling to open the packaging with one hand, I was disappointed to find that the lotion didn't absorb into my skin well. It left a sticky residue and didn't provide the relief I was hoping for.</p>
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
                  <div class="buttonparent pe-2 ps-2 d-flex flex-row flex-fill justify-content-between">
                    <button class="btn btn-light">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-thumbs-up me-2"></i>
                        Like
                      </div>
                    </button>
                    <button class="btn btn-light">
                      <div class="commentgroup">
                        <i class="fa fa-regular fa-comment-alt me-2"></i>
                        Comment
                      </div>
                    </button>
                    <button class="btn btn-light">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-bookmark me-2"></i>
                        Bookmark
                      </div>
                    </button>
                    <button class="btn btn-light">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-share-square me-2"></i>
                        Share
                      </div>
                    </button>
                  </div>
                </div>
                <div class="feedpost bg-light rounded-3 p-3 d-flex flex-column gap-3 usercard">
                  <h3 class="posttitle fw-bold">Any Favorite Creams and Moisturizers for Severe Eczema?</h3>
                  <div class="userprofilegroup d-flex justify-content-between align-items-center">
                    <div class="left d-flex flex-row">
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle avatar-lg me-2" alt="Avatar" />
                        <div class="profilename d-flex flex-column">
                          <span class="m-0 fs-6">Jaquel Anderson</span>
                          <p class="m-0 text-muted">March 23, 2023</p>
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
                  <div class="manufaturerdesc pb-2">
                    <p class="head mb-3">After struggling to open the packaging with one hand, I was disappointed to find that the lotion didn't absorb into my skin well. It left a sticky residue and didn't provide the relief I was hoping for.</p>
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
                  <div class="buttonparent pe-2 ps-2 d-flex flex-row flex-fill justify-content-between">
                    <button class="btn btn-light">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-thumbs-up me-2"></i>
                        Like
                      </div>
                    </button>
                    <button class="btn btn-light">
                      <div class="commentgroup">
                        <i class="fa fa-regular fa-comment-alt me-2"></i>
                        Comment
                      </div>
                    </button>
                    <button class="btn btn-light">
                      <div class="likegroup">
                        <i class="fa fa-regular fa-bookmark me-2"></i>
                        Bookmark
                      </div>
                    </button>
                    <button class="btn btn-light">
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
    </div>
  )
}

export default Community