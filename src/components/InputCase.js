import React, { Fragment, useState } from 'react';
import DatePicker from "react-widgets/DatePicker";
import Calendar from "react-widgets/Calendar";
import DropdownList from "react-widgets/DropdownList";
import NumberPicker from "react-widgets/NumberPicker";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
import "../styles/InputCase.css";
import { insurerList, IROList, decisionOptions, Checkbox } from './utils.js';

// Find out why the /api/eligiblecases is not what I am using...where did I set that up at?
const enterCase = async() => {
  try{
    const caseOne = await fetch("http://localhost:3001/api/eligiblecases")
    //const jsonData = await response.json()

    //setCases(jsonData); //Using setCases is the only way to change the state
  } catch (err) {
    console.error(err.message)
  }
}

const InputCase = () => {
// Shit, Dates...ugh
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

    //Phew, changed onSubmitForm instead of chaning addCase().  addCase() is what gets called and executed by Add button.
    //Can probably get rid of onSubmitForm
    const onSubmitForm = async e => {
      e.preventDefault();
      try{
        const body = {dateforwarded, caseid, patientid, insurerid, providerid, iroid, denialreason,
                      eligibilitynotice, eligiblecorrespondence, insurernotified, decisiondate, 
                      irodecision, fileclosed, invoiceamount };
        const response = await fetch("http://localhost:3001/eligibilecases", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
      });
      console.log('OnSubForm' + response);
      Window.location = "/"; //This will make it refresh and show changes - instead of console.log
      } catch (err) {
        console.error(err.message)
      }
    };

    // Doesnt need to be asnyc because not actually writing to DB, just getting the query set up for when we actually hit submit 
    // Figure out how to use useState state var

    const SelectBox = ({className, label, name, options, stateVar, onChangeFunction}) => 
      (
        <div className={className}>
        <label>{ label }</label>
        <select name={ name } onChange={ onChangeFunction }>
          if (options)
            {options.map((value, index) => {
            return <option key={index}>{value}</option>
            })}
        </select>
        </div>
      )
//You are dumb==not seeing time and expedited in state of list because you are not sending it in the request to be saved in the db (below)
//add expedited, dateforwarded, and all else to the const data
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
//Not getting an error message ^^ because its not returning bad - its pending. So invalid syntax when do patient = p01 just sits pending.
//Remember the network tab when trying to send updates with bad sql = pending.
//So add a timeout to the request in order to get an error message to display to user? Validation on client side first?  Also?
//Update - I think timer sounds best

      /* formingQuery() when click add button
      
          INSERT INTO eligiblecases(CaseID, PatientName, Insurer, IRO, DenialReason...)
          VALUES (`useState.caseid .... that might not be right but you get the idea */
  
     /* handleSelectboxChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState(() => ({[name]: event.target.value}));
      } */

    return ( 
    <Fragment>
      <form className='modal-form' onSubmit={onSubmitForm}> 
        
          <div className="leftInputCase">
        <label>Date Forwarded</label>
        <DatePicker className='form-control'
          defaultValue={new Date()}
          valueEditFormat={{ dateStyle: "short" }}
          valueDisplayFormat={{ dateStyle: "medium" }}
          onChange={value => setDateForwarded(value)}
        />
        {/*<label>Date Received</label>
        <Calendar
          value={new Date()}
          onChange={value => setDate(value)}
        />*/}
        
        {/*<AddEligibleCase />*/}
        <label>Case ID</label>
        <input
          type='text' 
          className='form-control'
          value={caseid} 
          onChange={e => setCaseId(e.target.value)}/>
        <label for="modal_chkbx">Expedited</label>
        <Checkbox
          id="modal_chkbx"
          className='form-control'
          name='expedited'
          checked={expedited}
          onChangeFunction={() => setExpedited(!expedited)}
        />
        <label>Patient ID</label>
        <input 
          type='text'
          className='form-control' 
          value={patientid} 
          onChange={e => setPatientId(e.target.value)}/>
        <label>Insurer</label>
        <DropdownList className='form-control'
            defaultValue="ins01"
            data={insurerList}
            dataKey='id'
            textField='name'
            onChange={value => setInsurerId(value.id)}
        />
        <label>Provider ID</label>
        <input 
          type='text'
          className='form-control' 
          value={providerid} 
          onChange={e => setProviderId(e.target.value)}/>
        <label>Denial Reason</label>  
        <input 
          type="text" 
          className="form-control" 
          value={denialreason} 
          onChange={e => setDenialReason(e.target.value)}/>
        <label>Eligibility Notice</label>  
        <DatePicker className='form-control'
          defaultValue={new Date()}
          valueEditFormat={{ dateStyle: "short" }}
          valueDisplayFormat={{ dateStyle: "medium" }}
          onChange={value => setEligibilityNotice(value)}
        />
        </div>
        <div className="rightInputCase">
        <label>Eligibility Correspondence</label>  
        <DatePicker className='form-control'
          defaultValue={new Date()}
          valueEditFormat={{ dateStyle: "short" }}
          valueDisplayFormat={{ dateStyle: "medium" }}
          onChange={value => setEligibleCorrespondence(value)}
        />
        <label>Insurer Notified</label>  
        <DatePicker className='form-control'
          defaultValue={new Date()}
          valueEditFormat={{ dateStyle: "short" }}
          valueDisplayFormat={{ dateStyle: "medium" }}
          onChange={value => setInsurerNotified(value)}
        />
        <label>IRO</label>
        <DropdownList className='form-control'
            defaultValue="null"
            data={IROList}
            dataKey='id'
            textField='name'
            onChange={value => setIROId(value.id)}
        />

        <label>Decision Date</label>
        <DatePicker className='form-control'
          defaultValue={new Date()}
          valueEditFormat={{ dateStyle: "short" }}
          valueDisplayFormat={{ dateStyle: "medium" }}
          onChange={value => setDecisionDate(value)}
        />
        <label>IRO Decision</label>
        <DropdownList className='form-control'
            defaultValue="No Decision Yet"
            data={decisionOptions}
            onChange={value => setIRODecision(value)}
        />
        <label>File Closed</label>
        <DatePicker className='form-control'
          defaultValue={new Date()}
          valueEditFormat={{ dateStyle: "short" }}
          valueDisplayFormat={{ dateStyle: "medium" }}
          onChange={value => setFileClosed(value)}
        />
        <label>Invoice Amount</label>
        <NumberPicker className='form-control'
          defaultValue={500.00}
          step={50}
          max={2000}
          min={0}
          format={{ style: "currency", currency: "USD" }}
          onChange={value => setInvoiceAmount(value)}
        />
        </div>

        <button className="btn btn-success" onClick={addCase}>Add</button>
        
      </form>
    </Fragment>
    )
}

export default InputCase;


// d-flex makes sure the text field and the button are placed together side by side; mt-5 is margin-top 5
// Figure out how to pass state down, because I need to change state in ModalAdd to hide it when click close