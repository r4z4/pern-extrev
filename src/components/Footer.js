import React, { Component } from "react";

export default class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ modal: !this.state.modal })
  }

  render() {

  const show = (this.state.modal) ? "show" : "" ;

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse " + show}>
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="/">Features</a>
          <a className="nav-item nav-link" href="/">Pricing</a>
          <a className="nav-item nav-link" href="/">logout</a>
        </div>
      </div>
    </nav>

  );
  }
}