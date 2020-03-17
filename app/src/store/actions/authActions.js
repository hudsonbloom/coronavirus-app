export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch(error => {
            dispatch({ type: 'LOGIN_ERROR', error})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCESS'})
        })
    }
} 


export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const db = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return db.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                settings_receiveEmailNotificatons: true,
                settings_sendEmailDelay: null,
                settings_sendThankYouEmail: false,
                created_at: new Date(),
                usage: 0
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(error => {
            dispatch({ type: 'SIGNUP_ERROR', error })
        })
    }
} 


export const signInWithEmailLink = (firstName, lastName, company, email, password) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const db = getFirestore();

        // The client SDK will parse the code from the link for you.
        firebase.auth().signInWithEmailLink(email, window.location.href)
        .then(function(result) {
            const user = result.user;
            return db.collection('users').doc(user.uid).set({
                account: company,
                firstName: firstName,
                lastName: lastName,
                email: email,
                emailVerified: user.emailVerified,
                created_at: user.metadata.creationTime,
                settings_receiveEmailNotificatons: true,
                settings_sendEmailDelay: null,
                settings_sendThankYouEmail: false,
                usage: 0
            })
            
        }).then(() => {
            var currentUser = firebase.auth().currentUser;
            return currentUser.updatePassword(password).then(function() {
                // Update successful.
                console.log("updated password")
            }).catch(function(error) {
                console.log("error updating password", error)
            // An error happened.
            });
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        })
        .catch(function(error) {
            dispatch({ type: 'SIGNUP_ERROR', error })
            // Some error occurred, you can inspect the code: error.code
            // Common errors could be invalid email and invalid or expired OTPs.
        });
    }
} 
