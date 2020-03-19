import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import Profile from '../Profile/Profile'
import MapCorona from './MapCorona'


export class Dashboard extends Component {
    
    render() {

        const { auth, profile } = this.props;
        if (!auth.uid) return <Redirect to="/login" />
        const welcomeMesage = profile ? "Welcome, " + profile.first_name : null

        return (
            <div>
            
            { profile.address ? (
                <div id="map-container">
                    <MapCorona profile={profile} />
                </div>
            ) : null}
              <Profile />  
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


export default connect(mapStateToProps, null)(Dashboard);
