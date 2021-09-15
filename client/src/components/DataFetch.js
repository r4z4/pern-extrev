import React, { Fragment } from 'react';
import axios from 'axios';

const DataFetch = async() => {
    try{
      const response = await axios.get("http://localhost:3001/eligiblecases")
      const dataFetchResult = response.data.rows;
      return dataFetchResult;
    } catch (err) {
      console.error(err.message)
    }
  }

export default DataFetch;