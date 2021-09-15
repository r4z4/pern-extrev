import React, { Fragment, useState } from 'react';
import UserService from '../services/UserService.js';

const LogoutButton = () => {

return (
  <Fragment>
    <button onClick={UserService.doLogout} style={{"float": "left", "margin-left": "80px"}}>
      Logout
    </button>
    <label>Signed in as: KeycloakUser</label>
  </Fragment>
)

}

export default LogoutButton;