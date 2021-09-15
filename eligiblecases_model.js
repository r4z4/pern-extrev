const pool = require('./db.js');

const getCases = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM eligiblecases ORDER BY caseid ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

const getCaseOne = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM eligiblecases WHERE caseid = 1', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

const getCase = () => {
  let caseid = parseInt(prompt('Please enter Case ID'));
  console.log(caseid);
  const text = 'SELECT * FROM eligiblecases WHERE caseid = $1'
  const value = [caseid]
  return new Promise(function(resolve, reject) {
    pool.query(text, value, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

const createCase = (body) => {
  return new Promise(function(resolve, reject) {
    const { caseid, patientid } = body
    pool.query('INSERT INTO eligiblecases (caseid, patientid) VALUES ($1, $2) RETURNING *', [caseid, patientid], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new case has been added added: ${results.rows[0]}`)
    })
  })
}
const deleteCase = (caseid) => {
  return new Promise(function(resolve, reject) {
    const caseid = parseInt(request.params.caseid)
    pool.query('DELETE FROM eligiblecases WHERE caseid = $1', [caseid], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Case deleted with CaseID: ${id}`)
    })
  })
}

module.exports = {
  getCases,
  getCase,
  createCase,
  deleteCase,
}

/*
pool.query(text, value).then(res => {
  const data = res.rows;
  data.forEach(row => console.log(row));
});
/*

const createCase = (body) => {
  return new Promise(function(resolve, reject) {
    const { caseid, patientid } = body
    pool.query('INSERT INTO eligiblecases (caseid, patientid) VALUES ($1, $2) RETURNING *', [caseid, patientid], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new case has been added added: ${results.rows[0]}`)
    })
  })
}
const deleteCase = (caseid) => {
  return new Promise(function(resolve, reject) {
    const caseid = parseInt(request.params.caseid)
    pool.query('DELETE FROM eligiblecases WHERE caseid = $1', [caseid], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Case deleted with CaseID: ${id}`)
    })
  })
}
*/
