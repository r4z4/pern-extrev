const Keycloak = require('keycloak-connect');
const session = require('express-session');

const express = require('express')
const cors = require('cors');
const port = 3001;
const pool = require('./db.js');
const app = express()


const eligiblecases_model = require ('./eligiblecases_model');
let router = require('./routes.js');

/*
The code from line 7 is written so that Express can 
accept incoming requests with JSON payloads. 
To allow requests to this app from React, I also added headers for 
Access-Control-Allow-Origin, Access-Control-Allow-Methods, 
and Access-Control-Allow-Headers.
*/
/* This was my first try - first site
var memoryStore = new session.MemoryStore();                       
var keycloak = new Keycloak({ store: memoryStore });
//session                       
app.use(session({
    secret:'BeALongSecret',                         
    resave: false,                         
    saveUninitialized: true,                         
    store: memoryStore                       
}));

app.use(keycloak.middleware());
*/



// Middleware ----------
app.use(cors());
app.use(express.json()) //This lets us use req.body
const keycloak = require('./config/keycloak-config.js').initKeycloak();
var memoryStore = new session.MemoryStore();                       

//session                       
app.use(session({
    secret:'BeALongSecret',                         
    resave: false,                         
    saveUninitialized: true,                         
    store: memoryStore                       
}));

//var keycloak = new Keycloak({ store: memoryStore });

app.use(keycloak.middleware({
	logout: '/logout',
	admin: '/'
}));
/*
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
	next();
});
*/
// Routes ----------

//const keycloak = require('../config/keycloak-config.js').getKeycloak();
//create, get all, get one, update, delete
//post because we are sending data, async gives us await, which waits for func to complete before it continues
// RETURNING * used whenever you are inserting, updating or deleting data from db
app.post("/eligiblecases", async(req, res) => {
	try {
		const {dateforwarded, caseid, patientid, insurerid, providerid, denialreason, iroid, eligibilitynotice, 
				eligiblecorrespondence, insurernotified, decisiondate, irodecision, fileclosed, invoiceamount} = req.body;
		const newCase = await pool.query(
			"INSERT INTO eligiblecases " +
			"(dateforwarded, caseid, patientid, insurerid, providerid, denialreason, iroid, eligibilitynotice, " +
			"eligiblecorrespondence, insurernotified, decisiondate, irodecision, fileclosed, invoiceamount)" +
			"VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING * ", 
		[dateforwarded, caseid, patientid, insurerid, providerid, denialreason, iroid, eligibilitynotice, 
			eligiblecorrespondence, insurernotified, decisiondate, irodecision, fileclosed, invoiceamount]
		);
		res.json(newCase.rows[0]);
	} catch (err) {
		console.error(err.message);
	}

})

app.put("/eligiblecases", async(req, res) => {
	try {
		const {id_to_edit, dateforwarded, caseid, patientid, insurerid, providerid, denialreason, iroid, eligibilitynotice, 
			eligiblecorrespondence, insurernotified, decisiondate, irodecision, fileclosed, invoiceamount} = req.body;
		const updatedCase = await pool.query(
			"UPDATE eligiblecases SET dateforwarded = $2, caseid = $3, patientid = $4, insurerid = $5, providerid = $6, " +
			"denialreason = $7, iroid = $8, eligibilitynotice = $9, eligiblecorrespondence = $10, insurernotified = $11, " +
			"decisiondate = $12, irodecision = $13, fileclosed = $14, invoiceamount = $15 WHERE caseid = $1",
			[id_to_edit, dateforwarded, caseid, patientid, insurerid, providerid, denialreason, iroid, eligibilitynotice, 
				eligiblecorrespondence, insurernotified, decisiondate, irodecision, fileclosed, invoiceamount]
		);
		res.json(updatedCase.rows[0]);
	} catch (err) {
		console.error(err.message);
	}

})
//Route protected with Keycloak??
app.delete("/eligiblecases", keycloak.protect(), async(req, res) => {
	try {
		const {caseid} = req.body;
		const deleteCase = await pool.query(
			"DELETE FROM eligiblecases WHERE caseid = $1", 
		[caseid]
		);
		res.json(deleteCase.rows[0]);
	} catch (err) {
		console.error(err.message);
	}

})
/*
app.get("/eligibilecases", async(req, res) => {
	try {
		const allCases = await pool.query("SELECT * FROM eligiblecases");
		res.json(allCases.rows);
	} catch (err) {
		console.error(err.message)
	}
});

app.get('/eligiblecases', (req, res) => {
	eligiblecases_model.getCases()
	  .then(response => {
		res.status(200).send(response);
	  })
	  .catch(error => {
		res.status(500).send(error);
	  })
  })
*/
  app.get('/eligiblecases', async (req, res) => {
	try {
		const cases = await pool.query(
			"SELECT * FROM eligiblecases e " +
			"INNER JOIN patient p ON p.patientid = e.patientid " +
			"INNER JOIN insurer i ON i.insurerid = e.insurerid " +
			"LEFT JOIN provider pr ON pr.providerid = e.providerid " +
			"LEFT JOIN iro ON iro.iroid = e.iroid " +
			"ORDER BY caseid ASC"
		);
	
		res.json(cases);
	} catch (err) {
		console.error(err.message);
	}
});
/*
 -------These work individually but only can use one --- combined below to conditionally send the SQL query based on whether or not
 -------the searchTerm can be parsed into a number or not
 
  app.get('/eligiblecases/:caseid', async (req, res) => {
	try {
		const { caseid } = req.params;
		const cases = await pool.query("SELECT * FROM eligiblecases WHERE caseid = $1", [caseid]);
	
		res.json(cases.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});
*/
/*
app.get('/eligiblecases/:searchTerm', async (req, res) => {
	try {
		const { searchTerm } = (req.params)
		console.log(searchTerm);
		const cases = await pool.query(`SELECT * FROM eligiblecases WHERE denialreason LIKE '%'||$1||'%'`, [searchTerm]);
	
		res.json(cases.rows);
	} catch (err) {
		console.error(err.message);
	}
});
*/
//searchTerms is gonna be a string regardless, because we need it to be to work as an SQL query, so need to parse to figure out type (num or string)
app.get('/eligiblecases/:searchTerm', async (req, res) => {
	try {
		const { searchTerm } = (req.params);
			if(isNaN(parseInt(searchTerm))) { 
				const cases = await pool.query(`SELECT * FROM eligiblecases WHERE denialreason LIKE '%'||$1||'%'`, [searchTerm]);
				res.json(cases.rows);
			} else {
				const cases = await pool.query("SELECT * FROM eligiblecases WHERE caseid = $1", [searchTerm]);
				res.json(cases.rows[0]);
			}
	} catch (err) {
		console.error(err.message);
	}
});

app.use( keycloak.middleware( { logout: '/'} ));

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
  })
/*


app.post('/', (req, res) => {
  eligiblecases_model.getCase(req.params.body)
	.then(response => {
	  res.status(200).send(response);
	})
	.catch(error => {
	  res.status(500).send(error);
	})
})

app.delete('/eligiblecases/:caseid', (req, res) => {
  eligiblecases_model.deleteCase(req.params.caseid)
	.then(response => {
	  res.status(200).send(response);
	})
	.catch(error => {
	  res.status(500).send(error);
	})
})

*/

/*
Other video index.js

app.get('/todos/:caseid', async (req, res) => {
	try {
		const { caseid } = req.params';
		const cases = await pool.query("SELECT * FROM eligiblecases WHERE caseid = $1", [caseid]);
	
		res.json(cases.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

app.put('/todos/:caseid', async (req, res) => {
	try {
		const { caseid } = req.params';
		const { denialReson } = req.body;
		const updateCase = await pool.query("UPDATE eligiblecases SET denialReason = $1 WHERE caseid = $2",
		[denialReason, caseid]);

		res.json("Cases was updated");
	} catch (err) {
		console.error(err.message);
	}
});

app.delete('/todos/:caseid', async (req, res) => {
	try {
		const { caseid } = req.params';
		const deleteCase = await pool.query("DELETE FROM eligiblecases WHERE caseid = $1", [caseid]);
	
		res.json("Case was Deleted");
	} catch (err) {
		console.error(err.message);
	}
});


*/  
/*app.get('/eligiblecases/:caseid', async (req, res) => {
	eligiblecases_model.getCase()
	.then(response => {
	  res.status(200).send(response);
	})
	.catch(error => {
	  res.status(500).send(error);
	})
})
*/


// Function in ListCase component - getCases - does a fetch to the 3001/eligiblecases (fetch default is GET)
// You can trace the route as it hits app.get ('eligiblecases/') and where it fires the SELECT statement and how
// the inner joins work.  Use Postman to do those GET requests and see the data as it is returned

// Remember to restart server when you change code here
