import React, { Fragment, useState } from 'react';
import { insurerList, Checkbox } from './utils.js';
import DatePicker from "react-widgets/DatePicker";
import DropdownList from "react-widgets/DropdownList";

const AddInitial = () => {

  const [denialreason, setDenialReason] = useState("");
  const [dateforwarded, setDateForwarded] = useState("");
  const [caseid, setCaseId] = useState("");
  const [patientid, setPatientId] = useState("");
  const [rep, setRep] = useState("");
  const [insurerid, setInsurerId] = useState("");
  const [providerid, setProviderId] = useState("");
  const [expedited, setExpedited] = useState("");
  // Edit denialReason function

  const addCase = async e => {
    e.preventDefault();
      try {
        const data = {caseid, dateforwarded, patientid, insurerid, providerid, denialreason};
        const response = await fetch(`/eligiblecases`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        })
        console.log('addCase' + response);
        window.location.reload();
        //Window.location = "/"; //This will make it refresh and show changes - instead of console.log
      } catch (err) {
        console.error(err.message);
      }
    }

  
    return (
    <Fragment>
      <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#add-initial" style={{"margin-bottom": "30px", "margin-left": "80px"}}>
        Add Initial
      </button>
      {/* id = id01 or id02 etc... */}
      <div className="modal" id="add-initial">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Initial Case</h4>
              <button 
                type="button" 
                className="close" 
                data-dismiss="modal" 
              >&times;</button>
            </div>
        
            <table className="modal-body" style={{"margin-top": "10px"}}>
            <tr>
              <label>Date Forwarded</label>
              <DatePicker className='form-control'
                defaultValue={new Date()}
                valueEditFormat={{ dateStyle: "short" }}
                valueDisplayFormat={{ dateStyle: "medium" }}
                onChange={value => setDateForwarded(value)}
              />
            </tr>
            <tr>
            <label>Case ID</label>
              <input
                type='text' 
                className='form-control'
                value={caseid} 
                onChange={e => setCaseId(e.target.value)}/>
            </tr>
            <tr>
              <li className="exp">
              <label for="exp_chk" style={{'word-wrap': 'break-word'}}>Expedited
              <Checkbox
                id="exp_chk"
                className='form-control_exp'
                name='expedited'
                checked={expedited}
                onChangeFunction={e => setExpedited(!expedited)}
              />
              </label>
              </li>
              </tr>
              <tr>
              <label>Patient ID</label>
                <input 
                  type='text'
                  className='form-control' 
                  value={patientid} 
                  onChange={e => setPatientId(e.target.value)}/>
              </tr>
              <tr>
              <label>Provider ID</label>
                <input 
                  type='text'
                  className='form-control' 
                  value={providerid} 
                  onChange={e => setProviderId(e.target.value)}/>
              </tr>
              <tr>
              <label>Insurer</label>
                <DropdownList className='form-control'
                    defaultValue={insurerid}
                    data={insurerList}
                    dataKey='id'
                    textField='name'
                    onChange={value => setInsurerId(value.id)}
                />
              </tr>
              <tr>
              <label>Denial Reason</label>
                <input type="text" 
                  className="form-control" 
                  value={denialreason} 
                  onChange={e => setDenialReason(e.target.value)}
                />
              </tr>
            </table>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={addCase}>Add Initial</button>
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-dismiss="modal" 
              >Close</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    )
}

export default AddInitial;


// d-flex makes sure the text field and the button are placed together side by side; mt-5 is margin-top 5
// Instead of putting this in Add.js, we put in ListCases
// Backticks = "making it a template string" allows you to put variables in strings - `$()`