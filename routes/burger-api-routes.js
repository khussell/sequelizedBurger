var db = require("../models");

module.exports = function (app) {
  app.get("/", function(req,res){
      db.Burger.findAll({}).then(function(data){
          console.log(data)
          res.render("index", {burgers: data})
      })
  })


   app.get("/api/burgers", function(req,res){
       db.Burger.findAll({}).then(function(dbBurgers){
           res.json(dbBurgers)
       })
   })

    app.post("/api/burgers", function (req, res) {
        var newBurger = req.body
        db.Burger.create(newBurger
        ).then(function (results) {
            res.json(results)
        })
    })
}