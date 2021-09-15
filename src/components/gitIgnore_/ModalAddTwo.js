import React, { Fragment, useState } from 'react';


const ModalAddTwo = ({ }) => {

 // const [denialreason, setDenialReason] = useState(extcase.denialreason);
 const [denialreason, setDenialReason] = useState([]);

 function hideModal() {
 console.log('hideModal');
};

  
//Do I want to pass it a value (for id, could pass the current list of cases and do count + 1) and could do list of insurers that way too
//Instead of a hard-coded list - but is it worth it? Can go back and change...I just want to see about writing to db for now
//Use context to pass it?  It is just 'cases' var from ListCases.js
  return (
    <Fragment>
      {/*<button type="button" className="btn btn-warning" data-toggle="modalAddTwo" data-target={`#id${extcase.caseid}`}>*/}
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target="modal">
        Add Case
      </button>
      {/* id = id01 or id02 etc... */}
      <div className="modal" id="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Case</h4>
              <button 
                type="button" 
                className="close" 
                data-dismiss="modal" 
                onClick={hideModal}>Close</button>
            </div>
            <div className="modal-body">
              <input type="text" 
                className="form-control" 
                value={denialreason} 
                onChange={e => setDenialReason(e.target.value)}
              />
              <input type="text" 
                className="form-control" 
                value={denialreason} 
                onChange={e => setDenialReason(e.target.value)}
              />
              <input type="text" 
                className="form-control" 
                value={denialreason} 
                onChange={e => setDenialReason(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-danger" 
                data-dismiss="modal" 
                onClick={hideModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    )
}

export default ModalAddTwo;