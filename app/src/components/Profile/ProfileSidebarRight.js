import React from 'react'

import { Group } from './elements/Group'

export const ProfileSidebarRight = () => {
    return (
        <div className="profile-sidebar mg-t-40 mg-lg-t-0 pd-lg-l-25">
            <div className="row">
              <div className="col-sm-6 col-md-5 col-lg">
                <div className="d-flex align-items-center justify-content-between mg-b-20">
                  <h6 className="tx-13 tx-spacng-1 tx-uppercase tx-semibold mg-b-0">Groups</h6>
                  <a href="" className="link-03">Create a Group</a>
                </div>
                <ul className="list-unstyled media-list mg-b-15">
                  <Group />
                  <Group />
                  <Group />
                  <Group />

                </ul>
              </div>
              </div>
        </div>
    )
}
