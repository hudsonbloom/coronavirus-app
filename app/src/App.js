import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Profile from './components/Profile/Profile'
import Header from './components/Layouts/Header'
import Dashboard from './components/Dashboard/Dashboard'

class App extends Component {
  render (){

    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/login" />
    
    return (
        <BrowserRouter>
        <div className="content ht-100v pd-0 dark">

        <Header profile={profile} />

            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
            </Switch>

          
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}


export default connect(mapStateToProps, null)(App);
