import React, { Fragment, useState } from 'react';
import { insurerList, IROList, decisionOptions, Checkbox } from './utils.js';
import DatePicker from "react-widgets/DatePicker";
import DropdownList from "react-widgets/DropdownList";
import NumberPicker from "react-widgets/NumberPicker";
import Modal from 'react-bootstrap/Modal'
import { getParsedDate } from './utils.js';


const EditCaseModal = ({ extcase }) => {


  const [dateforwarded, setDateForwarded] = useState(extcase.dateforwarded);
  const [caseid, setCaseId] = useState(extcase.caseid);
  const [patientid, setPatientId] = useState(extcase.patientid);
  const [rep, setRep] = useState(extcase.rep);
  const [insurerid, setInsurerId] = useState(extcase.insurerid);
  const [providerid, setProviderId] = useState(extcase.providerid);
  const [denialreason, setDenialReason] = useState(extcase.denialreason);
  const [iroid, setIROId] = useState(extcase.iroid);
  const [expedited, setExpedited] = useState(extcase.expedited);
  const [irodecision, setIRODecision] = useState(extcase.irodecision);
  const [decisiondate, setDecisionDate] = useState(extcase.decisiondate);
  const [eligibilitynotice, setEligibilityNotice] = useState(extcase.eligibilitynotice);
  const [eligiblecorrespondence, setEligibleCorrespondence] = useState(extcase.eligiblecorrespondence);
  const [insurernotified, setInsurerNotified] = useState(extcase.insurernotified);
  const [fileclosed, setFileClosed] = useState(extcase.fileclosed);
  const [invoiceamount, setInvoiceAmount] = useState(parseInt(extcase.invoiceamount));
//rep is #4 which is underfined - in state when open edit - make sure that is not messing anything up

  // Edit denialReason function
  /*
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
  */
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
      setShow(false);
      //window.location.reload();
      //Want it to reload when an edit is done, so db can refresh (if needs to) but diable for now b/c not editing cases really
    }
    const handleShow = () => setShow(true);
    const id_to_edit = extcase.caseid;
  
    const updateCase = async e => {
      e.preventDefault();
        try {
          //const id_to_edit = e.target.value;
          const data = {id_to_edit, dateforwarded, caseid, patientid, insurerid, providerid, iroid, denialreason,
            eligibilitynotice, eligiblecorrespondence, insurernotified, decisiondate, irodecision, fileclosed, invoiceamount};
          const response = await fetch(`/eligiblecases`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
          })
          console.log('updateCase' + response);
          alert('Sucessfully Updated Case # ' + id_to_edit);
          window.location.reload();
          //Window.location = "/"; //This will make it refresh and show changes - instead of console.log
          //To update through state would be better, but not the best with DB and lots of records -- e.g. setCart(cart => [...cart, item]);
        } catch (err) {
          console.error(err.message);
          alert('Unable to Update.  Please Check SQL'); //Probably need a timer
        }
      }


    return (
    <Fragment>
      <button type="button" className="btn btn-info" onClick={handleShow} value={id_to_edit}>
        Edit
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size={'lg'}
        style={{
          content:{
            display: 'inline'
          }
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Case</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className="mb-container">
        <div className="flex-row">
            <label>Date Forwarded</label>
              <DatePicker className='form-control'
                defaultValue={new Date(extcase.dateforwarded)}
                valueEditFormat={{ dateStyle: "short" }}
                valueDisplayFormat={{ dateStyle: "medium" }}
                onChange={value => setDateForwarded(new Date(value))}
              />
              </div>
              <div class="flex-row">
            <label>Case ID</label>
              <input
                type='text' 
                className='form-control'
                value={caseid} 
                onChange={e => setCaseId(e.target.value)}/>
              </div>
              <div class="flex-row">
              <label>Expedited</label>
                <input
                  type="checkbox"
                  style={{'display': 'inline'}}
                  className='form-control'
                  name='expedited'
                  checked={expedited}
                  onChange={e => setExpedited(!expedited)}/>
              </div>
              <div class="flex-row">
              <label>Patient ID</label>
                <input 
                  type='text'
                  className='form-control' 
                  value={patientid} 
                  onChange={e => setPatientId(e.target.value)}/>
                  </div>
              <div class="flex-row">
              <label>Insurer ID</label>
                <input 
                  type='text'
                  className='form-control' 
                  value={insurerid} 
                  onChange={e => setInsurerId(e.target.value)}/>
                  </div>
                  <div class="flex-row">
              <label>Provider ID</label>
                <input 
                  type='text'
                  className='form-control' 
                  value={providerid} 
                  onChange={e => setProviderId(e.target.value)}/>
              </div>
              <div class="flex-row">
              <label>IRO</label>
                <DropdownList className='form-control'
                    defaultValue={extcase.iroid}
                    data={IROList}
                    dataKey='id'
                    textField='name'
                    onChange={value => setIROId(value.id)}
                />
              </div>
              <div class="flex-row">
              <label>Insurer</label>
                <DropdownList className='form-control'
                    defaultValue={extcase.insurerid}
                    data={insurerList}
                    dataKey='id'
                    textField='name'
                    onChange={value => setInsurerId(value.id)}
                />
              </div>
              <div class="flex-row">
              <label>Denial Reason</label>
              <input type="text" 
                className="form-control" 
                value={denialreason} 
                onChange={e => setDenialReason(e.target.value)}
              />
              </div>
              <div class="flex-row">
              <label>Eligibility Notice</label>  
                <DatePicker className='form-control'
                  defaultValue={eligibilitynotice ? new Date(extcase.eligibilitynotice) : null}
                  valueEditFormat={{ dateStyle: "short" }}
                  valueDisplayFormat={{ dateStyle: "medium" }}
                  onChange={value => setEligibilityNotice(new Date(value))}
                />
                </div>
                <div class="flex-row">
              <label>Eligibility Correspondence</label>  
                <DatePicker className='form-control'
                  defaultValue={extcase.eligiblecorrespondence ? new Date(extcase.eligiblecorrespondence) : null}
                  valueEditFormat={{ dateStyle: "short" }}
                  valueDisplayFormat={{ dateStyle: "medium" }}
                  onChange={value => setEligibleCorrespondence(new Date(value))}
                />
                </div>
                <div class="flex-row">
              <label>Insurer Notified</label>  
                <DatePicker className='form-control'
                  defaultValue={extcase.insurernotified ? new Date(extcase.insurernotified) : null}
                  valueEditFormat={{ dateStyle: "short" }}
                  valueDisplayFormat={{ dateStyle: "medium" }}
                  onChange={value => setInsurerNotified(new Date(value))}
                />
                </div>
                <div class="flex-row">
              <label>Decision Date</label>
                <DatePicker className='form-control'
                  defaultValue={extcase.decisiondate ? new Date(extcase.decisiondate) : null}
                  valueEditFormat={{ dateStyle: "short" }}
                  valueDisplayFormat={{ dateStyle: "medium" }}
                  onChange={value => setDecisionDate(new Date(value))}
                />
                </div>
                <div class="flex-row">
              <label>IRO Decision</label>
                <DropdownList className='form-control'
                    defaultValue={extcase.irodecision}
                    data={decisionOptions}
                    onChange={value => setIRODecision(value)}
                />
                </div>
                <div class="flex-row">
              <label>File Closed</label>
                <DatePicker className='form-control'
                  defaultValue={fileclosed ? new Date(extcase.fileclosed) : null}
                  valueEditFormat={{ dateStyle: "short" }}
                  valueDisplayFormat={{ dateStyle: "medium" }}
                  onChange={value => setFileClosed(value)}
                />
                </div>
                <div class="flex-row">
              <label>Invoice Amount</label>
                <NumberPicker className='form-control'
                  defaultValue={parseInt(invoiceamount)}
                  step={50}
                  max={2000}
                  min={0}
                  format={{ style: "currency", currency: "USD" }}
                  onChange={value => setInvoiceAmount(parseInt(value))}
                />
                </div>
                </div>

        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-dark" onClick={handleClose}>
            Close
          </button>
          <button type="button" className="btn btn-info" onClick={updateCase}>Update</button>
        </Modal.Footer>
      </Modal>
      </Fragment>
  );
}


export default EditCaseModal;


// d-flex makes sure the text field and the button are placed together side by side; mt-5 is margin-top 5
// Instead of putting this in Add.js, we put in ListCases
// Backticks = "making it a template string" allows you to put variables in strings - `$()`


//Need to parse date data before sending to Postgres.  Its format from the form is the long date - need 
//it to be yyyy-mm-dd