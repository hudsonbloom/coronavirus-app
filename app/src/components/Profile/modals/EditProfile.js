import React, { useState } from 'react'
import { connect } from 'react-redux'



const EditProfile = (props) => {

   const { id, puzzles, handleAddNewClue } = props;


    return (
<div className="modal fade" id="editProfile" tabIndex="-1" role="dialog" aria-hidden="true">

      <div className="modal-dialog modal-dialog-centered wd-sm-650" role="document">
        <div className="modal-content">

            
          <div className="modal-header pd-y-20 pd-x-20 pd-sm-x-30">
            <a href="/" role="button" className="close pos-absolute t-15 r-15" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </a>
            <div className="media align-items-center">
              <span className="tx-color-03 d-none d-sm-block">
                <i className="icon ion-ios-cog" style={{fontSize:"30px"}}></i></span>
              <div className="media-body mg-sm-l-20">
                <h4 className="tx-18 tx-sm-20 mg-b-2">Edit Profile</h4>
              </div>
            </div>
          </div>
          <div className="modal-body">
            
          </div>
          <div className="modal-footer pd-x-20 pd-y-15">
            <button type="button" className="btn btn-xs btn-white" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-xs btn-primary" data-dismiss="modal">Save</button>
          </div>
        </div>
      </div>
    </div>
    )
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         addNewClue: (data, id) => dispatch(addNewClue(data, id))
//     }
// }

// export default connect(null, mapDispatchToProps)(AddClueModal)
export default EditProfile