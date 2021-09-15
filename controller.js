exports.createEligibleCase = (req, res) => {
    let eligiblecase = {};

    try{
        // Building Customer object from upoading request's body
        eligiblecases.caseid = req.body.caseid;
        eligiblecases.patient = req.body.patient;
        eligiblecases.insurer = req.body.insurer;
        eligiblecases.iro = req.body.iro;
    
        // Save to PostgreSQL database
        eligiblecases.create(eligiblecase, 
                          {attributes: ['caseid', 'patient', 'insurer', 'iro']})
                    .then(result => {    
                      res.status(200).json(result);
                    });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.getEligibleCases = (req, res) => {
    eligiblecases.findByPk(req.params.caseid, 
                        {attributes: ['caseid', 'patient', 'insurer', 'iro']})
        .then(eligiblecase => {
          res.status(200).json(eligiblecase);
        }).catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        })
}

exports.eligibleCases = (req, res) => {
    // find all Customer information from 
    try{
        eligiblecases.findAll({attributes: ['caseid', 'patient', 'insurer', 'iro']})
        .then(cases => {
            res.status(200).json(eligiblecases);
        })
    }catch(error) {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    }
}

exports.deleteEligibleCases = async (req, res) => {
    try{
        let caseid = req.params.caseid;
        let eligiblecase = await eligiblecases.findByPk(caseid);

        if(!eligiblecase){
            res.status(404).json({
                message: "Does Not exist a case with id = " + caseid,
                error: "404",
            });
        } else {
            await eligiblecase.destroy();
            res.status(200);
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Can NOT delete a case with id = " + req.params.caseid,
            error: error.message
        });
    }
}

exports.updateEligibleCases = async (req, res) => {
    try{
        let eligiblecase = await eligiblecases.findByPk(req.body.caseid);
    
        if(!eligiblecase){
            // return a response to client
            res.status(404).json({
                message: "Not Found for updating a case with id = " + caseid,
                error: "404"
            });
        } else {    
            // update new change to database
            let updatedObject = {
              	caseid: req.body.caseid,
       	 	patient: req.body.patient,
        	insurer: req.body.insurer,
        	iro: req.body.iro,
            }
            let result = await eligiblecases.update(updatedObject,
                              { 
                                returning: true, 
                                where: {caseid: req.body.caseid},
                                attributes: ['caseid', 'patient', 'insurer', 'iro']
                              }
                            );

            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> Can not update a customer with id = " + req.params.id,
                    error: "Can NOT Updated",
                });
            }

            res.status(200).json(result);
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Can not update a case with id = " + req.params.caseid,
            error: error.message
        });
    }
}