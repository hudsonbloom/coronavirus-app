import React from 'react'

import { Post } from './elements/Post'

export const ProfileActivity = () => {
    return (
        <div className="media-body mg-t-40 mg-lg-t-0 pd-lg-x-10">
            <div className="profile-update-option bg-white ht-50 bd d-flex justify-content-end mg-b-20 mg-lg-b-25 rounded">
              <div className="d-flex align-items-center pd-x-20 mg-r-auto">
                <i data-feather="edit-3"></i> <a href="" className="link-03 mg-l-10"><span className="d-none d-sm-inline">Share an</span> Update</a>
              </div>
              <div className="wd-50 bd-l d-flex align-items-center justify-content-center">
                <a href="" className="link-03" data-toggle="tooltip" title="Publish Photo"><i data-feather="image"></i></a>
              </div>
              <div className="wd-50 bd-l d-flex align-items-center justify-content-center">
                <a href="" className="link-03" data-toggle="tooltip" title="Publish Video"><i data-feather="video"></i></a>
              </div>
              <div className="wd-50 bd-l d-flex align-items-center justify-content-center">
                <a href="" className="link-03" data-toggle="tooltip" title="Write an Article"><i data-feather="file-text"></i></a>
              </div>
            </div>


        <div class="card mg-b-20 mg-lg-b-25">
            <div class="card-header pd-y-15 pd-x-20 d-flex align-items-center justify-content-between">
                <h6 class="tx-uppercase tx-semibold mg-b-0">Latest Activity</h6>
                <nav class="nav nav-icon-only">
                  <a href="" class="nav-link"><i data-feather="more-horizontal"></i></a>
                </nav>
              </div>

              <Post />
        </div>

        </div>
    )
}
