import React from 'react'

function ReviewCard() {
  return (
    <div>
        <div class="d-flex flex-column gap-2 p-3 bg-white rounded-3 p-3 border border-white-50 border-1">
            <div class="stargroup">
                <i class="fa fa-star me-1"></i>
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
  )
}

export default ReviewCard