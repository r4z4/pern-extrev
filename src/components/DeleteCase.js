import React, { Fragment, Component, useState } from 'react';
import Keycloak from 'keycloak-js';

/*
class Secured extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false, caseid: null };
  }

  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({onLoad: 'login-required'}).then(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated })
    })
  }
*/
const DeleteCase = ({ extcase }) => {

  const [caseid, setCaseId] = useState(extcase.caseid);

  // Delete case function
  const deleteCase = async(caseid) => {
    try {
      const data = {caseid};
      const response = await fetch(`http://localhost:3001/eligiblecases`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      console.log('deleteCase' + response);
    } catch (err) {
      console.error(err.message);
    }
  }

  // Had to made the data-target attrib different than what it was on Edit - if it matched both modals were the same, added an _
    return (
    <Fragment>
      <button type="button" className="btn btn-danger" data-toggle="modal" data-target={`#id_${extcase.caseid}`}>
        Delete
      </button>
      {/* id = id01 or id02 etc... */}
      <div className="modal" id={`id_${extcase.caseid}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Confirm Delete - Case {`${extcase.caseid}`}</h2>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={e => deleteCase(extcase.caseid)}>Delete</button>
              <button 
                type="button" 
                className="btn btn-warning" 
                data-dismiss="modal" 
              >Close</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    )
}


export default DeleteCase;


// d-flex makes sure the text field and the button are placed together side by side; mt-5 is margin-top 5
// Instead of putting this in Add.js, we put in ListCases
// Backticks = "making it a template string" allows you to put variables in strings - `$()`