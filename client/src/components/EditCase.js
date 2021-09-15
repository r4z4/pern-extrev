import React, { Fragment, useState } from 'react';
import { insurerList, IROList, decisionOptions, Checkbox } from './utils.js';
import DatePicker from "react-widgets/DatePicker";
import DropdownList from "react-widgets/DropdownList";

const EditCase = ({ extcase }) => {

  const [denialreason, setDenialReason] = useState(extcase.denialreason);
  const [dateforwarded, setDateForwarded] = useState(extcase.dateforwarded);
  const [decisiondate, setDecisionDate] = useState(extcase.decisiondate);
  const [caseid, setCaseId] = useState(extcase.caseid);
  const [patientid, setPatientId] = useState(extcase.patientid);
  const [rep, setRep] = useState(extcase.rep);
  const [insurerid, setInsurerId] = useState(extcase.insurerid);
  const [providerid, setProviderId] = useState(extcase.providerid);
  const [iroid, setIROId] = useState(extcase.iroid);
  const [expedited, setExpedited] = useState(extcase.expedited);
  const [irodecision, setIRODecision] = useState(extcase.irodecision);

  // Edit denialReason function
  const updateDenialReason = async (e) => {
    e.preventDefault();
    try{
      const body = { denialreason };
      const response = await fetch(`http://localhost:3001/eligiblecases/${extcase.caseid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })

      Window.location = "/";

    } catch (err) {
      console.error(err.message);
    }
  }

  
    return (
    <Fragment>
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${extcase.caseid}`}>
        Edit
      </button>
      {/* id = id01 or id02 etc... */}
      <div className="modal" id={`id${extcase.caseid}`} onClick={() => setDenialReason(extcase.denialreason)}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Case</h4>
              <button 
                type="button" 
                className="close" 
                data-dismiss="modal" 
                onClick={() => setDenialReason(extcase.denialreason)}>&times;</button>
            </div>
        
            <div className="modal-body">
              <div className="mb-container">
            <label>Case ID</label>
              <input
                type='text' 
                className='form-control'
                value={caseid} 
                onChange={e => setCaseId(e.target.value)}/>
              <label>Expedited</label>
              <Checkbox
                className='form-control'
                name='expedited'
                checked={expedited}
                onChangeFunction={e => setExpedited(!expedited)}
              />
              <label>Denial Reason</label>
              <input type="text" 
                className="form-control" 
                value={denialreason} 
                onChange={e => setDenialReason(e.target.value)}
              />
              <label>Patient ID</label>
                <input 
                  type='text'
                  className='form-control' 
                  value={patientid} 
                  onChange={e => setPatientId(e.target.value)}/>
              <label>Insurer ID</label>
                <input 
                  type='text'
                  className='form-control' 
                  value={insurerid} 
                  onChange={e => setInsurerId(e.target.value)}/>
              <label>Provider ID</label>
                <input 
                  type='text'
                  className='form-control' 
                  value={providerid} 
                  onChange={e => setProviderId(e.target.value)}/>
              <label>IRO</label>
                <DropdownList className='form-control'
                    defaultValue={iroid}
                    data={IROList}
                    dataKey='id'
                    textField='name'
                    onChange={value => setIROId(value.id)}
                />
              <label>Insurer</label>
                <DropdownList className='form-control'
                    defaultValue={insurerid}
                    data={insurerList}
                    dataKey='id'
                    textField='name'
                    onChange={value => setInsurerId(value.id)}
                />
              <label>Decision Date</label>
                <DatePicker className='form-control'
                  defaultValue={decisiondate}
                  valueEditFormat={{ dateStyle: "short" }}
                  valueDisplayFormat={{ dateStyle: "medium" }}
                  onChange={value => setDateForwarded(value)}
                />
              <label>IRO Decision</label>
                <DropdownList className='form-control'
                    defaultValue={irodecision ? irodecision : 'No Decision Yet'}
                    data={decisionOptions}
                    onChange={value => setIRODecision(value)}
                />
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateDenialReason(e)}>Edit</button>
              <button 
                type="button" 
                className="btn btn-danger" 
                data-dismiss="modal" 
                onClick={() => setDenialReason(extcase.denialreason)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    )
}

export default EditCase;


// d-flex makes sure the text field and the button are placed together side by side; mt-5 is margin-top 5
// Instead of putting this in Add.js, we put in ListCases
// Backticks = "making it a template string" allows you to put variables in strings - `$()`