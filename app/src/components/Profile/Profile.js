import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { ProfileSidebar } from './ProfileSidebar'
import { ProfileSidebarRight } from './ProfileSidebarRight'
import { ProfileActivity } from './ProfileActivity'

export class Profile extends Component {
    render() {

        const { auth, profile } = this.props;
        if (!auth.uid) return <Redirect to="/login" />


        return (
            <div className="content content-fixed content-profile">
                <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
                <div class="media d-block d-lg-flex">

                    <ProfileSidebar profile={profile} />
                    <ProfileActivity />
                    <ProfileSidebarRight />
                    
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}


export default connect(mapStateToProps, null)(Profile);
