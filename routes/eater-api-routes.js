var db = require("../models");

module.exports = function (app) {


    app.get("/api/eaters", function(req,res){
        db.Eater.findAll({}).then(function(dbEaters){
            res.json(dbEaters)
        })
    })
 
     app.post("/api/eaters", function (req, res) {
         var newEater = req.body
         db.Eater.create(newEater
         ).then(function (results) {
             res.json(results)
         })
     })
}