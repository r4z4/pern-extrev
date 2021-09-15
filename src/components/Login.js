import React, { Fragment, useState } from 'react';
const Keycloak = require('C:/Users/aaroz/Node/node-postgres/node_modules/keycloak-connect/keycloak.js');

const Login = () => {

function output(content) {
  if (typeof content === 'object') {
      content = JSON.stringify(content, null, 2)
  }
  document.getElementById('output').textContent = content;
}


function sendRequest() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
      if (req.readyState === 4) {
          output(req.status + '\n\n' + req.responseText);
      }
  }
  req.open('GET', 'SERVICE_URL', true);
  req.setRequestHeader('Authorization', 'Bearer ' + kc.token);
  req.send();
}

const kc = new Keycloak({ realm: 'myrealm', clientId: 'myclient' });
window.onload = function() {
  kc.init().then(function() {
      if(kc.authenticated) {
          console.log("authenticated");
      } else {
          console.log("not authenticated");
      }
  });
}

return (
  <Fragment>
    <h1 className="text-center mt-5">Login</h1>
    <div id="anonymous" style="display: none">
      <button onclick="window.kc.login()">Login</button>
    </div>
  </Fragment>
)

}

export default Login;