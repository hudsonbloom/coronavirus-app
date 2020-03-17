import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from './config/firebase_config'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Profile from './components/Profile/Profile'
import Login from './components/Auth/SignIn'


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, {
            useFirestoreForProfile: true, 
            userProfile: 'users',
            attachAuthIsReady: true
        })
    ));


store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Switch>
            
            {/* <Route exact path="/" render={() => (
                <Redirect to="/dashboard"/>
            )}/> */}

            <Route exact path="/" component={App} />
            <Route exact path="/profile" component={Profile} />

            <Route exact path="/login" component={Login} />
        </Switch>
        
        </BrowserRouter>

    </Provider>
    , document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
})


