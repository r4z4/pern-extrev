import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Buttons';
import axios from 'axios';
import './App.css';

// Components
import Header from './components/Header';
import InputCase from './components/InputCase';
import ListCase from './components/ListCase';
import SearchCase from './components/SearchCase';
import ModalAdd from './components/ModalAdd';
import AddInitial from './components/AddInitial';
import Footer from './components/Footer';
import Login from './components/Login';
import LogoutButton from './components/LogoutButton';
import DataFetch from './components/DataFetch';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    //this.rotate = this.rotate.bind(this);
  }
  
  render() {
      return (
        <div className='mainPage'>
        
        <Header className='header' />
        {/*<Login />*/}
        <LogoutButton />
        <ModalAdd />
        {/*<SearchCase />*/}
        <AddInitial />
        <ListCase />
        <Footer />
        </div>
    )
  }
}

export default App;

/*

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      casesJSON: null,
      cases: null,
      setCases: [],
      userSelection: null,
      reviewToAdd: {
      },
    };

    this.clearCases = this.clearCases.bind(this);
    this.getCases = this.getCases.bind(this);
    this.getCasesJSON = this.getCasesJSON.bind(this);
    this.getCaseJSON = this.getCaseJSON.bind(this);
    this.createCase = this.createCase.bind(this);
    this.deleteCase = this.deleteCase.bind(this);
  }

  clearCases() {
    this.setState({ casesJSON: null });
    this.setState({ cases: null });
  }

  getCases() {
    fetch('http://localhost:3001')
      .then(response => {
        console.log('on then 1');
        console.log(response);
        return response.text();
      })
      .then(data => {
        console.log('on then 2');
        this.setState({ cases: data });
      });
  }

  getCasesJSON() {
    fetch('http://localhost:3001')
      .then(response => {
        console.log('on then 1');
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log('on then 2');
        this.setState({ casesJSON: data });
      });
  }

  getCaseJSON() {
    let caseid = prompt('Enter case id');
    console.log(caseid);
    fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: {caseid},
    })
    .then(response => {
      console.log('on then 1');
      console.log(response)
      return response.json();
    })
    .then(data => {
      console.log('on then 2');
      this.setState({ userSelection: data });
    });
}
   

    let caseid = prompt('Enter case id');
    axios({
      method: 'get',
      url: 'http://localhost:3001',
      caseid: {caseid}
    })
    .then(res => this.setState({userSelection: res.data }));
    }

  createCase() {
    let caseid = prompt('Enter caseid');
    let patientid = prompt('Enter patientid');
    fetch('http://localhost:3001/eligiblecases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({caseid, patientid}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        this.getCases();
      });
  }
  deleteCase() {
    let id = prompt('Enter case id');
    fetch(`http://localhost:3001/eligiblecases/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        this.getCases();
      });
  }

  componentDidMount() {
      console.log('compDidMount');
      this.getCasesJSON();
  }

  render() {
    const { cases, casesJSON, userSelection, blogs } = this.state;
    return (
    <div className="App">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <h1>External Review Dashboard</h1>
    <Button
          onClick={this.getCases}
          className='getCases'
          value='Get Cases'
    />
    <Button
          onClick={this.getCasesJSON}
          className='getCasesJSON'
          value='Get Cases JSON'
    />
    <Button
          onClick={this.clearCases}
          className='clearCases'
          value='Clear'
    />
    <Button
          onClick={this.getCaseJSON}
          className='getCase'
          value='Get Case'
    />
    <Button
          onClick={this.getCaseOne}
          className='getCaseOne'
          value='Get Case #1'
    />
    <div className="dataDisplay">
      {userSelection ? 
        (<div className="jsonTable">
        <JSONTable
          list={userSelection}
          fieldArray={fieldArray}
        />
        </div>)
      : 'There is no userSelection'}
      <br />
      {cases ? cases : 'There is no case data available'}
      <br />
      {casesJSON ? 
        (<div className="jsonTable">
            <JSONTable
              list={casesJSON}
              fieldArray={fieldArray}
            />
        </div>)
      : 'There is no JSON case data available'}
      <br />
      <div className="buttons">
      <Button
          onClick={this.createCase}
          className='createCase'
          value='Add Case'
      />
      <br />
      <Button
          onClick={this.deleteCase}
          className='deleteCase'
          value='Delete Case'
      />
      </div>
    </div> 
    </div>  end App div 
  );
  }
}

export default App;


const JSONTable = ({ list, fieldArray }) =>
(!list.length) ? <div className="jsonTable">No JSON</div> :
<div className="table">
{list.map(item =>
      <div key={item.caseid}>
        <span>
            {item.denialreason}
            {item[fieldArray[0]]} -- {item[fieldArray[1]]} -- {item[fieldArray[2]]} -- {item[fieldArray[3]]}
        </span>
      </div>
    )}
    </div>





--As in tutorial - function App() vs. class App extends Component ==
==Where did setCases come from? Will it work with class App??
It did with a few adjustments.  Just used state for cases and setCases() method==

import React, {useState, useEffect} from 'react';

function App() {
  const [cases, setCases] = useState(false);
  useEffect(() => {
    getCases();
    console.log("getCases firing")
  }, []);

function getCases() {
    fetch('http://localhost:3001')
      .then(response => {
        console.log('on then 1');
        return response.text();
      })
      .then(data => {
        console.log('on then 2');
        setCases(data);
      });
  }
  function createCase() {
    let caseid = prompt('Enter caseid');
    let patientid = prompt('Enter patientid');
    fetch('http://localhost:3001/eligiblecases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({caseid, patientid}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getCases();
      });
  }
  function deleteCase() {
    let id = prompt('Enter case id');
    fetch(`http://localhost:3001/eligiblecases/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getCases();
      });
  }
  return (
    <div>
      {cases ? cases : 'There is no case data available'}
      <br />
      <button onClick={createCase}>Add case</button>
      <br />
      <button onClick={deleteCase}>Delete case</button>
    </div>
  );
}
export default App;
*/
