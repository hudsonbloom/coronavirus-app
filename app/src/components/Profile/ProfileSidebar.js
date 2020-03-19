import React from 'react'

import EditProfile from './modals/EditProfile'

export const ProfileSidebar = (props) => {

    const {profile} = props;

    const city = profile.address ? profile.address.city : null
    const state = profile.address ? profile.address.state : null
    const postal = profile.address ? profile.address.postal : null
    const age = profile.address ? profile.dob.age : null

    const firstNameLetter = profile.first_name ? profile.first_name.charAt(0) : null
    const lastNameLetter = profile.last_name ? profile.last_name.charAt(0) : null

    return (
        <div className="profile-sidebar pd-lg-r-25">

            <div className="row">
              <div className="col-sm-3 col-md-2 col-lg">
              <div className="avatar avatar-xxl"><span className="avatar-initial rounded-circle bg-gray-600">{firstNameLetter}{lastNameLetter}</span></div>

              
              </div> 
              <div className="col-sm-8 col-md-7 col-lg mg-t-20 mg-sm-t-0 mg-lg-t-25">
                <h5 className="mg-b-2 tx-spacing--1">{profile.first_name} {profile.last_name}</h5>
                <p className="tx-color-03 mg-b-10">{profile.email}</p>

                <div className="d-flex mg-b-25">
                  <a href="#editProfile" data-toggle="modal" className="btn btn-xs btn-white flex-fill">Edit Profile</a>
                  {/* <button className="btn btn-xs btn-primary flex-fill mg-l-10">Mark Safe</button> */}
                </div>


                <p className="tx-color-03 mg-b-25">{city}, {state} {postal}</p>
                
                


                <div className="d-flex mg-b-15">
                  <div className="profile-skillset flex-fill">
                    <h4><a href="" className="link-01">0%</a></h4>
                    <label>Risk Factor</label>
                  </div>
                  <div className="profile-skillset flex-fill">
                    <h4><a href="" className="link-01">Not Tested</a></h4>
                    <label>Tested</label>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="profile-skillset flex-fill">
                    <h4><a href="" className="link-01">{age}</a></h4>
                    <label>Age</label>
                  </div>
                </div>

              </div>
              {/* <div className="col-sm-6 col-md-5 col-lg mg-t-40">
                <label className="tx-sans tx-10 tx-semibold tx-uppercase tx-color-01 tx-spacing-1 mg-b-15">Skills</label>
                <ul className="list-inline list-inline-skills">
                  <li className="list-inline-item"><a href="">HTML5</a></li>
                  <li className="list-inline-item"><a href="">Sass</a></li>
                  <li className="list-inline-item"><a href="">CSS</a></li>
                  <li className="list-inline-item"><a href="">React</a></li>
                  <li className="list-inline-item"><a href="">jQuery</a></li>
                  <li className="list-inline-item"><a href="">Angular</a></li>
                  <li className="list-inline-item"><a href="">Wordpress</a></li>
                  <li className="list-inline-item"><a href="">Photoshop</a></li>
                  <li className="list-inline-item"><a href="">PHP</a></li>
                  <li className="list-inline-item"><a href="">Node</a></li>
                  <li className="list-inline-item"><a href="">Git</a></li>
                  <li className="list-inline-item"><a href="">Front-End Development</a></li>
                  <li className="list-inline-item"><a href="">Web Design</a></li>
                </ul>
              </div> */}



              <div className="col-sm-6 col-md-5 col-lg mg-t-40">
                <label className="tx-sans tx-10 tx-semibold tx-uppercase tx-color-01 tx-spacing-1 mg-b-15">Contact Information</label>
                <ul className="list-unstyled profile-info-list">
                  <li><i data-feather="briefcase"></i> <span className="tx-color-03">Bay Area, San Francisco, CA</span></li>
                  <li><i data-feather="home"></i> <span className="tx-color-03">Westfield, Oakland, CA</span></li>
                  <li><i data-feather="smartphone"></i> <a href="">(+1) 012 345 6789</a></li>
                  <li><i data-feather="phone"></i> <a href="">(+1) 987 654 3201</a></li>
                  <li><i data-feather="mail"></i> <a href="">me@fenchiumao.me</a></li>
                </ul>
              </div>
            </div>


            <EditProfile />

          </div>
    )
}
