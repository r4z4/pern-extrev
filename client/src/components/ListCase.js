import React, { Fragment, useState, useEffect } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import EditCaseModal from './EditCaseModal';
import ShowDetailsModal from './ShowDetailsModal';
import EditCase from './EditCase';
import DeleteCase from './DeleteCase';
import ProviderTooltip from './ProviderTooltip';
import { getParsedDate } from './utils.js';

const ListCase = () => {


  const [cases, setCases] = useState([]);
  const [filteredCases, setFilteredCases] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const [filterSearchTerm, setFilterSearchTerm] = useState();


  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props}
    </Tooltip>
  );

  // deleteCase function
  const deleteCase = async(caseid) => {
    try {
      const data = {caseid};
      const response = await fetch(`http://localhost:3001/eligiblecases`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      console.log('deleteCase' + response);
    } catch (err) {
      console.error(err.message);
    }
  }

  const getCases = async() => {
    try{
      const response = await fetch("http://localhost:3001/eligiblecases")
      const jsonData = await response.json()

      setCases(jsonData.rows); //Using setCases is the only way to change the state
      setFilteredCases(jsonData.rows);
    } catch (err) {
      console.error(err.message)
    }
  }

  const filterArray = (filterSearchTerm) => {
      const keyword = filterSearchTerm;
      console.log(keyword);
      //Turn cases object into an array so that we can use filter function on it
      const data = [...cases]
      //const filtered = data.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));
      const filtered = data.filter(entry => {
        return (entry.denialreason.includes(keyword) || entry.patientlname.includes(keyword) || entry.patientfname.includes(keyword))
      });
      console.log('Filtered:' + filtered);
      setFilteredCases(filtered);
  }

  const getCase = async() => {
    try{
      let caseid = parseInt(prompt('Please enter Case ID'));
      const response = await fetch(`http://localhost:3001/eligiblecases/${caseid}`)
      const jsonData = await response.json()

      setCases([jsonData]); //Using setCases is the only way to change the state -- Use an ARRAY for map to work
    } catch (err) {
      console.error(err.message)
    }
  }
/*
  searchTerm ? 
    filterArray()
  :
    console.log("No searchTerm")
*/
  useEffect(() => {
    getCases();
  }, []);

  return (
    <div className="listcase_frag">
  <Fragment>
  <p style={{"font-weight": "bold", "margin-top": "30px", "margin-bottom": "-50px", "margin-left": "400px"}}>Filter via Denial Reason or Name (Case Sensative):</p>
    <form className="d-flex mt-5"> 
      <input 
        type="text" 
        className="form-control" 
        value={searchTerm}
        onChange={e => setFilterSearchTerm(e.target.value)} 
      />
      <button 
        className="btn btn-success" 
          onClick={(e) => {
          e.preventDefault();
          console.log(filterSearchTerm);
          //Updating the state is not instant; that is why it only works on the 2nd click; filter working though
          //setSearchTerm(filterSearchTerm);
          //console.log('FirstOnClickSearchTerm:' + searchTerm);
          filterArray(filterSearchTerm);
        }
      }>Filter</button>
      {" "}
      <button
        className="btn btn-dark"
        onClick={(e) => {
          e.preventDefault();
          setFilteredCases(cases);
          setSearchTerm(null);
        }}
      >Reset List</button>
    </form>
    {" "}
 <table className="table mt-5 text-center">
    <thead>
      <tr>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip('Click Case ID for Case Details')}
          >
        <th>Case ID</th>
        </OverlayTrigger>
        <th>Patient</th>
        <th>Insurer</th>
        <th>Provider</th>
        <th>Denial Reason</th>
        <th>Date Forwarded</th>
        <th>Decision Date</th>
        <th>IRO</th>
        <th>IRO Decision</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {filteredCases.map(extcase => (
        <tr key={extcase.caseid}>
          <td><ShowDetailsModal extcase={extcase} /></td>
          <td>{extcase.patientfname} {extcase.patientlname}</td>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip(extcase.insurerid)}
          >
            <td>{extcase.insurername}</td>
          </OverlayTrigger>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip(extcase.providerid)}
          >
            <td>{extcase.providername}</td>
          </OverlayTrigger>
          <td>{extcase.denialreason}</td>
          <td>{getParsedDate(extcase.dateforwarded)}</td>
          <td>{getParsedDate(extcase.decisiondate)}</td>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip(extcase.iroid)}
          >
            <td>{extcase.ironame}</td>
          </OverlayTrigger>
          <td>{extcase.irodecision}</td>
          <td><EditCaseModal extcase={extcase} /></td>
          <td><DeleteCase extcase={extcase} /></td>
        </tr>
      )
)}
    </tbody>
  </table>
  </Fragment>
  </div>
  )
}

export default ListCase;
// Map only works on arrays - when I do select with an inner join, I get a JSON back of objects, non array (use Postman to GET)
// So access the rows property of that json to get the array of cases, but could only access it within the getCases function,
// Couldnt get it to work within the cases.map function in the JSX

// UseEffect will make a fetch request to the API everytime the component is rendered
// He keeps adding await saying "this takes time so we need to add await"
// useEffect makes continual requests, and we want to make sure if just makes one, so add the blank array as a callback
// case is a keyword, so if you get TypeScript error (argument expression expected) that is why - use diff var name
// Imports - when you see {} you are dealing with named imports (vs default ones)

// ProviderTooltip being extracted out works, but the CSS is messed up.  The Overlay is behind the list of cases