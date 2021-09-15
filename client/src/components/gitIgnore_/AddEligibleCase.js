import React, { Component } from "react";
import EligibleCasesDataService from "../services/eligiblecases.service";

export default class AddEligibleCase extends Component {
  constructor(props) {
    super(props);
    this.onChangeCaseId = this.onChangeCaseId.bind(this);
    this.onChangePatient = this.onChangePatient.bind(this);
    this.saveEligibleCase = this.saveEligibleCase.bind(this);
    this.newEligibleCase = this.newEligibleCase.bind(this);

    this.state = {
      caseid: "",
      patient: "",
      insurer: "", 
      iro: "",

      submitted: false
    };
  }

  onChangeCaseId(e) {
    this.setState({
      caseid: e.target.value
    });
  }

  onChangePatient(e) {
    this.setState({
      patient: e.target.value
    });
  }

  saveEligibleCase() {
    var data = {
      caseid: this.state.caseid,
      patient: this.state.patient
    };

    EligibleCasesDataService.create(data)
      .then(response => {
        this.setState({
          caseid: response.data.caseid,
          patient: response.data.patient,
          insurer: response.data.insurer,
          iro: response.data.iro,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newEligibleCase() {
    this.setState({
      caseid: "",
      patient: "",
      insurer: "",
      iro: "",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newEligibleCase}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="caseid">Case ID (AddEligibleCase)</label>
              <input
                type="text"
                className="form-control"
                id="caseid"
                required
                value={this.state.caseid}
                onChange={this.onChangeCaseId}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">patient (AddEligibleCase)</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.patient}
                onChange={this.onChangePatient}
                name="description"
              />
            </div>

            <button onClick={this.saveEligibleCase} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
