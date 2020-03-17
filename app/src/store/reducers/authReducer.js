const initState = {
    authError: null,
    authLoading: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR': 
            console.log("Login Failed!", action.error)
            var errorMessage = 'Unknown Error';
            if (action.error.code === "auth/invalid-email"){
                errorMessage = "Invalid email address."
            } else if (action.error.code === "auth/wrong-password"){
                errorMessage = "Password is incorrect."
            } else if (action.error.code === "auth/user-not-found"){
                errorMessage = "User couldn't be found or does not exist."
            } else if (action.error.code === "auth/email-already-exists"){
                errorMessage = "Email address is already in use."
            }

            return {
                ...state,
                authError: errorMessage,
            }
        
        case 'LOGIN_SUCCESS':
            console.log("Login Success!")
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case 'SIGNOUT_SUCCESS':
            console.log("Signout Success!")
            return state;


        case 'SIGNUP_SUCCESS':
            console.log("Signup Success!", action.result)
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log("Signup Error!", action.error)
            return {
                ...state,
                authError: action.error.message
            }
        
        
        default:
            return state;
    }
}

export default authReducer