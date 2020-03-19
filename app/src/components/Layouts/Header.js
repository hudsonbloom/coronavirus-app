import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

import {NewMessage} from './elements/NewMessage'
import {NewNotification} from './elements/NewNotification'

const Header = (props) => {

    const { profile } = props;
    const firstNameLetter = profile.first_name ? profile.first_name.charAt(0) : null
    const lastNameLetter = profile.last_name ? profile.last_name.charAt(0) : null


    return (
        <React.Fragment>
        <header className="navbar navbar-header navbar-header-fixed">
      <a href="" id="mainMenuOpen" className="burger-menu"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></a>
      <div className="navbar-brand">
      <Link to="/">
        <h5 style={{marginTop:"8px"}}><b>Coronavirus App</b></h5>
      </Link>
      </div>
      <div id="navbarMenu" className="navbar-menu-wrapper">
        <div className="navbar-menu-header">
          <a id="mainMenuClose" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
        </div>

        <ul className="nav navbar-menu">
          <li className="nav-label pd-l-20 pd-lg-l-25 d-lg-none">Main Navigation</li>
          <li className="nav-item">
            <NavLink to="/" exact={true} className="nav-link">
               <span>Dashboard</span></NavLink>
            </li>
        
        <li className="nav-item">
            <NavLink to="/groups" className="nav-link">
              {/* <i className="icon ion-ios-contacts" style={{fontSize:"18px",marginRight:"10px"}}></i> */}
               <span>Groups</span></NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="/news" exact={true} className="nav-link">
               <span>News</span>
        </NavLink>
        </li>
        </ul>
      </div>


      <div className="navbar-right" style={{width:"400px"}}>
        <div className="dropdown dropdown-message">
          <a href="" className="dropdown-link new-indicator" data-toggle="dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span>5</span>
          </a>
          
          <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-header">New Messages</div>
            <NewMessage />

            <div className="dropdown-footer"><a href="">View all Messages</a></div>
          </div>
        </div>

        <div className="dropdown dropdown-notification">
          <a href="" className="dropdown-link new-indicator" data-toggle="dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
            <span>2</span>
          </a>



          <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-header">Notifications</div>

            <NewNotification />

            <div className="dropdown-footer"><a href="">View all Notifications</a></div>
          </div>
        </div>

        <div className="dropdown dropdown-profile">
          <a href="" className="dropdown-link" data-toggle="dropdown" data-display="static">
            {/* <div className="avatar avatar-sm"><img src="https://via.placeholder.com/500" className="rounded-circle" alt=""></img>
            </div> */}
            <div className="avatar"><span className="avatar-initial rounded-circle bg-gray-600">{firstNameLetter}{lastNameLetter}</span></div>

            <div style={{marginLeft:"10px", display:"inline"}}>
            <h6 className="tx-semibold mg-b-0">{profile.first_name} {profile.last_name}</h6>
            <p className="tx-color-03 tx-12 mg-b-0">{profile.email}</p>
            </div>
            
          </a>
          <div className="dropdown-menu dropdown-menu-right tx-13">
            <h6 className="tx-semibold mg-b-5">{profile.first_name} {profile.last_name}</h6>
            <p className="tx-color-03 tx-12 mg-b-20">{profile.email}</p>


            <NavLink to="/profile" className="dropdown-item">
                <i className="icon ion-ios-contact" style={{fontSize:"18px",marginRight:"10px"}}></i> <span>View Profle</span>
            </NavLink>
          

            <a href="/" onClick={props.signOut} className="dropdown-item"><i className="icon ion-md-log-out" style={{fontSize:"18px",marginRight:"10px"}}></i> <span>Sign Out</span></a>
            
            {/* <button onClick={props.signOut} className="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>Sign Out</button> */}
          </div>
        </div>
      </div>
      <div className="navbar-search">
        <div className="navbar-search-header">
          <input type="search" className="form-control" placeholder="Type and hit enter to search..."></input>
          <button className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
          <a id="navbarSearchClose" href="" className="link-03 mg-l-5 mg-lg-l-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
        </div>
        <div className="navbar-search-body">
          <label className="tx-10 tx-medium tx-uppercase tx-spacing-1 tx-color-03 mg-b-10 d-flex align-items-center">Recent Searches</label>
          <ul className="list-unstyled">
            <li><a href="dashboard-one.html">modern dashboard</a></li>
            <li><a href="app-calendar.html">calendar app</a></li>
            <li><a href="../../collections/modal.html">modal examples</a></li>
            <li><a href="../../components/el-avatar.html">avatar</a></li>
          </ul>

          <hr className="mg-y-30 bd-0"></hr>

          <label className="tx-10 tx-medium tx-uppercase tx-spacing-1 tx-color-03 mg-b-10 d-flex align-items-center">Search Suggestions</label>

          <ul className="list-unstyled">
            <li><a href="dashboard-one.html">cryptocurrency</a></li>
            <li><a href="app-calendar.html">button groups</a></li>
            <li><a href="../../collections/modal.html">form elements</a></li>
            <li><a href="../../components/el-avatar.html">contact app</a></li>
          </ul>
        </div>
      </div>
    </header>
    </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
