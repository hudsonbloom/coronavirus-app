import React from 'react'

export const Post = (props) => {
    return (
        <div>
        <div className="card-body pd-20 pd-lg-25">
                <div className="media align-items-center mg-b-20">
                  <div className="avatar avatar-online">
                      <img src="../https://via.placeholder.com/500" className="rounded-circle" alt="" /></div>
                  <div className="media-body pd-l-15">
                    <h6 className="mg-b-3">Dyanne Aceron</h6>
                    <span className="d-block tx-13 tx-color-03">Cigarette Butt Collector</span>
                  </div>
                  <span className="d-none d-sm-block tx-12 tx-color-03 align-self-start">5 hours ago</span>
                </div>
                <p className="mg-b-20">Our team is expanding again. We are looking for a Product Manager and Software Engineer to drive our new aspects of our capital projects. If you're interested, please drop a comment here or simply message me. <a href="">#softwareengineer</a> <a href="">#engineering</a></p>

              </div>


              <div className="card-footer bg-transparent pd-y-10 pd-sm-y-15 pd-x-10 pd-sm-x-20">
                <nav className="nav nav-with-icon tx-13">
                  <a href="" className="nav-link"><i data-feather="thumbs-up"></i> Like</a>
                  <a href="" className="nav-link"><i data-feather="message-square"></i> Comment</a>
                  <a href="" className="nav-link"><i data-feather="share"></i> Share</a>
                </nav>
              </div>

            </div>
    )
}
