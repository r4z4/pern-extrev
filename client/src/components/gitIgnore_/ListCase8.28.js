import React, { Fragment, useState, useMemo, useEffect, componentDidMount } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';
import EditCaseModal from './EditCaseModal';
import EditCase from './EditCase';
import DeleteCase from './DeleteCase';
import ProviderTooltip from './ProviderTooltip';
import { getParsedDate } from './utils.js'; 
import Secured from './DeleteCase';
import {IROList, InsurerList} from './utils.js';
import Pagination from './Pagination';
import '../styles/pagination.css';
//import SearchCase from './SearchCase';
import DataFetch from './DataFetch';

const ListCase = () => {

  const dataFetchResult = DataFetch();
  
  

  const [cases, setCases] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState();
  const [filterSearchTerm, setFilterSearchTerm] = useState();
  const [filteredCases, setFilteredCases] = useState([]);

 

  let PageSize = 10;

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
      const response = await axios.get("http://localhost:3001/eligiblecases")
      console.log('after axios:', response.data);
      console.log('after response.data:', response.data.rows);
      const getCasesResult = response.data.rows;
      console.log('after response.data:', getCasesResult);
      setCases(getCasesResult); //Using setCases is the only way to change the state
      console.log('after setCases:', cases);
    } catch (err) {
      console.error(err.message)
    }
  }
//Have this filter the current list vs. performing another server req???
  const getSearchCases = async() => {
    try{
      const response = await axios.get(`http://localhost:3001/eligiblecases/${searchTerm}`)
      console.log('after axios gSC:', response.data);

      setCases(response.data.rows); //Using setCases is the only way to change the state
      console.log('after setCases:', cases);
    } catch (err) {
      console.error(err.message)
    }
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

  const filterArray = () => {
    try{
      const keyword = filterSearchTerm;
      //Turn cases object into an array so that we can use filter function on it
      const data = [...cases]
      console.log('filter data:' + data);
      //const filtered = data.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));
      const filtered = data.filter(entry => {
        return entry.denialreason.includes(keyword)
      });
      console.log('filter data2:' + data);
      console.log('Keyword:' + keyword);
      console.log('Filtered:' + filtered);
      setFilteredCases(filtered);
    } catch (err) {
    console.error(err.message);
    }
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
      return cases.slice(firstPageIndex, lastPageIndex); 
  }, [currentPage]);

  console.log('currentTableData:'+ currentTableData);
  console.log('currentTableDataCases:'+ cases);
  console.log('currentTableDataFilteredCases:'+ filteredCases);
}

  useEffect(() => {
    getCases();
  }, []);
//UseEffect with 2nd arg as [] mimics componentDidMount()

  return (
    <>
    <h4 className="text-center mt-5">Search Cases</h4>
    <form className="d-flex mt-5" onSubmit={() => getSearchCases()}> 
      <input 
        type="text" 
        className="form-control" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)}/>
      <button className="btn btn-success" onClick={() => getSearchCases()}>Search</button>
    </form>
    <form className="d-flex mt-5" onSubmit={() => filterArray()}> 
      <input 
        type="text" 
        className="form-control" 
        value={filterSearchTerm} 
        onChange={e => setFilterSearchTerm(e.target.value)}/>
      <button className="btn btn-success" onClick={() => filterArray()}>Filter</button>
    </form>
    {" "}
 <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Case ID</th>
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
      {currentTableData.map(extcase => (
        <tr key={extcase.caseid}>
          <td>{extcase.caseid}</td>
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
  <Pagination
        //key={Math.random().toString(36).substr(2, 9)}
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={cases.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
  </>
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

//Axios resposnes are already served in JSON