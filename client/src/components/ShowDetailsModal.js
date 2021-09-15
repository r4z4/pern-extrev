import React, { Fragment, useState } from 'react';
import { insurerList, IROList, decisionOptions, Checkbox } from './utils.js';
import Modal from 'react-bootstrap/Modal'
import { getParsedDate } from './utils.js';


const ShowDetailsModal = ({ extcase }) => {


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

    return (
    <Fragment>
      <a onClick={handleShow} value={id_to_edit} style={{cursor:'pointer', color:'blue', fontWeight:'bold'}}>
        {extcase.caseid}
      </a>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size={'md'}
        style={{
          content:{
            display: 'inline'
          }
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Case Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className="mb-container">
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>Date Forwarded:</span> {getParsedDate(extcase.dateforwarded)}</p>
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>Case ID:</span> {extcase.caseid}</p>
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>Expedited:</span> {extcase.expedited}</p>
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>Patient ID:</span> {extcase.patientid}</p>
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>Insurer ID:</span> {extcase.insurerid}</p>
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>Provider ID:</span> {extcase.providerid}</p>
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>IRO ID:</span> {extcase.iroid}</p>
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>Denial Reason:</span> {extcase.denialreason}</p>
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>Eligibility Notice:</span> {getParsedDate(extcase.eligibilitynotice)}</p>
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>Eligibility Correspondence:</span> {getParsedDate(extcase.eligiblecorrespondence)}</p>
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>Insurer Notified:</span> {getParsedDate(extcase.insurernotified)}</p>
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>Decision Date:</span> {getParsedDate(extcase.decisiondate)}</p>
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>IRO Decision:</span> {extcase.irodecision}</p>
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>File Closed:</span> {getParsedDate(extcase.fileclosed)}</p>
            <p><span style={{'color':'teal', 'margin-right':'20px'}}>Invoice Amount:</span> {extcase.invoiceamount}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-dark" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
      </Fragment>
  );
}


export default ShowDetailsModal;


// d-flex makes sure the text field and the button are placed together side by side; mt-5 is margin-top 5
// Instead of putting this in Add.js, we put in ListCases
// Backticks = "making it a template string" allows you to put variables in strings - `$()`


//Need to parse date data before sending to Postgres.  Its format from the form is the long date - need 
//it to be yyyy-mm-dd