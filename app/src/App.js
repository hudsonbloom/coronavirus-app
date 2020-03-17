import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render (){

    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/login" />
    
    return (
        <BrowserRouter>
        <div className="content ht-100v pd-0 dark">

            {/* <Switch>
              <Route exact path="/v1/dashboard" component={Dashboard} />
            </Switch> */}

            <h1>App</h1>
            
                
      
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
