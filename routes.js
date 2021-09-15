let express = require('express');
let router = express.Router();
 
const eligiblecases = require('./controller.js');

router.post('/api/eligiblecases', eligiblecases.createEligibleCase);
router.get('/api/eligiblecases/:caseid', eligiblecases.getEligibleCases);
router.get('/api/eligiblecases', eligiblecases.eligibleCases);
router.put('/api/eligiblecases', eligiblecases.updateEligibleCases);
router.delete('/api/eligiblecases/:caseid', eligiblecases.deleteEligibleCases);

module.exports = router;