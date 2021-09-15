import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import EditCase from './EditCase';

const SearchCase = () => {


  const [searchTerm, setSearchTerm] = useState([]);
  const [cases, setCases] = useState([]);

  const getSearchCases = async() => {
    try{
      console.log('getSearchCases:' + searchTerm);
      const response = await axios.get(`http://localhost:3001/eligiblecases/${searchTerm}`)
      console.log('after getSearchCase axios:', response.data);

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


  return (
      <>
        <h3 className="text-center mt-5">Search Cases</h3>
        <form className="d-flex mt-5" onSubmit={() => getSearchCases()}> 
          <input 
            type="text" 
            className="form-control" 
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value)}/>
          <button className="btn btn-success" onClick={() => getSearchCases()}>Search</button>
        </form>
      </>
  )
}

export default SearchCase;

//<> and </> is shorthand for <Fragment> and </Fragment>