import React, { Fragment, useState } from 'react';
import DatePicker from "react-widgets/DatePicker";
import NumberPicker from "react-widgets/NumberPicker";
import DropdownList from "react-widgets/DropdownList";
import { insurerList, IROList, decisionOptions, Checkbox } from './utils.js';


const AddFull = () => {

  const [dateforwarded, setDateForwarded] = useState("");
  const [caseid, setCaseId] = useState("");
  const [patientid, setPatientId] = useState("");
  const [rep, setRep] = useState("");
  const [insurerid, setInsurerId] = useState("");
  const [providerid, setProviderId] = useState("");
  const [iroid, setIROId] = useState("");
  const [expedited, setExpedited] = useState(false);
  const [denialreason, setDenialReason] = useState("");
  const [eligibilitynotice, setEligibilityNotice] = useState("");
  const [eligiblecorrespondence, setEligibleCorrespondence] = useState("");
  const [insurernotified, setInsurerNotified] = useState("");
  const [irodecision, setIRODecision] = useState("");
  const [decisiondate, setDecisionDate] = useState("");
  const [fileclosed, setFileClosed] = useState("");
  const [invoiceamount, setInvoiceAmount] = useState("");
  // Edit denialReason function

  const addCase = async e => {
    e.preventDefault();
      try {
        const data = {dateforwarded, caseid, patientid, insurerid, providerid, iroid, denialreason,
          eligibilitynotice, eligiblecorrespondence, insurernotified, decisiondate, 
          irodecision, fileclosed, invoiceamount };
        const response = await fetch(`http://localhost:3001/eligiblecases`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        })
        console.log('addCase' + response);
        alert('Sucessfully Added Case # ' + caseid);
        window.location.reload();
        //Window.location = "/"; //This will make it refresh and show changes - instead of console.log
      } catch (err) {
        console.error(err.message);
        alert('Unable to Add Case # ' + caseid + '; Message = ' + err.message);
      }
    }

  
    return (
    <Fragment>
      <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#add-initial" style={{"margin-bottom": "10px", "margin-left": "80px"}}>
        Add Full Case
      </button>
      {/* id = id01 or id02 etc... */}
      <div className="modal" id="add-initial">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Full Case</h4>
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
              <tr>
              <label>Eligibility Corr.</label>  
              <DatePicker className='form-control'
                defaultValue={new Date()}
                valueEditFormat={{ dateStyle: "short" }}
                valueDisplayFormat={{ dateStyle: "medium" }}
                onChange={value => setEligibleCorrespondence(value)}
              />
              </tr>
              <tr>
              <label>Insurer Notified</label>  
              <DatePicker className='form-control'
                defaultValue={new Date()}
                valueEditFormat={{ dateStyle: "short" }}
                valueDisplayFormat={{ dateStyle: "medium" }}
                onChange={value => setInsurerNotified(value)}
              />
              </tr>
              <tr>
              <label>IRO</label>
              <DropdownList className='form-control'
                  defaultValue="null"
                  data={IROList}
                  dataKey='id'
                  textField='name'
                  onChange={value => setIROId(value.id)}
              />
              </tr>
              <tr>
              <label>Decision Date</label>
              <DatePicker className='form-control'
                defaultValue={new Date()}
                valueEditFormat={{ dateStyle: "short" }}
                valueDisplayFormat={{ dateStyle: "medium" }}
                onChange={value => setDecisionDate(value)}
              />
              </tr>
              <tr>
              <label>IRO Decision</label>
              <DropdownList className='form-control'
                  defaultValue="No Decision Yet"
                  data={decisionOptions}
                  onChange={value => setIRODecision(value)}
              />
              </tr>
              <tr>
              <label>File Closed</label>
              <DatePicker className='form-control'
                defaultValue={new Date()}
                valueEditFormat={{ dateStyle: "short" }}
                valueDisplayFormat={{ dateStyle: "medium" }}
                onChange={value => setFileClosed(value)}
              />
              </tr>
              <tr>
              <label>Invoice Amount</label>
              <NumberPicker className='form-control'
                defaultValue={500.00}
                step={50}
                max={2000}
                min={0}
                format={{ style: "currency", currency: "USD" }}
                onChange={value => setInvoiceAmount(value)}
              />
              </tr>
            </table>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={addCase}>Add Case</button>
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

export default AddFull;


// d-flex makes sure the text field and the button are placed together side by side; mt-5 is margin-top 5
// Instead of putting this in Add.js, we put in ListCases
// Backticks = "making it a template string" allows you to put variables in strings - `$()`