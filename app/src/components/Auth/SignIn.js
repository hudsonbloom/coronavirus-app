import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect, Link } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: "",
        password: "",
        loading: false
    }

    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }

    render() {
        const { authError, authLoading, auth } = this.props;
        if (auth.uid) return <Redirect to="/" />

        return (

            <div className="content content-fixed content-auth">
      <div className="container">
        <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
          
          <div className="sign-wrapper">
            <div style={{width:"300px"}}>
                <div className="text-center" style={{paddingBottom:"20px"}}>
                {/* <Link to="/">
                    <img src="/img/bolt-logo.png" alt="Logo" style={{width:"200px", marginTop:"-8px", marginBottom:"0px"}}></img>
                </Link> */}

                </div>

              {/* <h3 className="tx-color-01 mg-b-5">Sign In</h3> */}
              <p className="text-center tx-color-03 tx-16 mg-b-30">Please Sign In</p>

              <div style={{paddingBottom:"0px", fontWeight:"bold", maxWidth:"300px"}}>
                             { authError ? <p style={{color:"red"}}>{authError}</p> : null }
                    </div>

        <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" className="form-control" placeholder="yourname@yourmail.com" onChange={this.handleChange}></input>
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between mg-b-5">
                  <label htmlFor="password" className="mg-b-0-f">Password</label>

                  {/* TODO: CREATE RESET PASSWORD */}
                  {/* <Link to="/reset-password" className="tx-13">Forgot password?</Link> */}


                </div>
                <input type="password" id="password" className="form-control" placeholder="Enter your password" onChange={this.handleChange}></input>
              </div>
              <button className="btn btn-primary w-100">Sign In</button>

            </form>

              {/* <div className="tx-13 mg-t-20 tx-center">Don't have an account? <a href="page-signup.html">Create an Account</a></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
            // <div className="page-container">
            //     <div className="page-inner login-page">
            //         <div id="main-wrapper" className="container-fluid">
            //             <div className="row">
            //                 <div className="col-sm-6 col-md-3 login-box">
            //                     <h4 className="login-title">Sign in to your account</h4>

            //     <form onSubmit={this.handleSubmit}>
            //         <div style={{paddingBottom:"20px"}}>
            //                 { authError ? <p style={{color:"red"}}>{authError}</p> : null }
            //         </div>
            //                 <div className="form-group">
            //                     <label htmlFor="email">Email Address</label>
            //                     <input type="email" className="form-control" id="email" placeholder="your@email.com" onChange={this.handleChange}></input>
            //                 </div>

            //                 <div className="form-group">
            //                     <label htmlFor="password">Password</label>
            //                     <input type="password" className="form-control" id="password" placeholder="password" onChange={this.handleChange}></input>
            //                 </div>

            //                 <button className="btn btn-primary w-100">Login</button>
            //                 <br></br>
            //             </form>

            //                 <Link to="/register" className="btn btn-default">Register</Link><br></br>
            //                 <Link to="/reset" classNameName="form-help">Forgot password?</Link>
            //                 </div>
            //             </div>
            //         </div>
            // </div>
            // </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        authError: state.auth.authError,
        authLoading: state.auth.authLoading,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)


