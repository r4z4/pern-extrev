import React from "react";
import '../styles/InputCase.css';
import InputCase from './InputCase.js';

export default class Modal extends React.Component {

  showModal = () => {
    this.setState({ show: true });
  };
  
  hideModal = () => {
    this.setState({ show: false });
  };

  handleChange = (e) => {
    console.log('handleChange');
  }

  displayModal() {
    if (this.state.show == false) {
      console.log('nerfin');
     } else {
       console.log('sumpin');
    <div className='modalAdd'>
      <p>GOOD LORD</p>
        <button className="btn btn-success">Add</button>
    <div>
      <button
      onClick={e => {
        this.hideModal(e);
      }}
    >
      Close
    </button>
  </div>
  </div>
    }
  }

  constructor() {
    super();
    this.state = {
      show: false,
      caseid: '',
      patient: '',
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  render() {
    return (
      <div className='modals' style={{"textAlign": "right"}}>
        <button style={{"margin-right": "80px"}}
          onClick={e => {
            this.showModal(e);
          }}
          >
          Add Full Case
        </button>
        {!this.state.show ? ''
        :
        <div className='fullcase-modal'>
          <InputCase />
          <button className="btn-modal-close" onClick={this.hideModal} style={{"margin-right": "80px"}}>Close</button>
        </div>
        }
      </div>
        )
  }
}
