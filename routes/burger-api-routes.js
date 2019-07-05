var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({
            include: [db.Eater]
        }).then(function (data) {
            console.log(data)
            res.render("index", { burgers: data })
        })
    })


    app.get("/api/burgers", function (req, res) {
        db.Burger.findAll({
            include: [db.Eater]
        }).then(function (dbBurgers) {
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

    app.put("/api/burgers", function (req, res) {
        console.log(req.body)
        if(req.body.EaterId){
        db.Burger.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbPost) {
                res.json(dbPost);
            });
        }else{
            db.Burger.update(req.body,
                {
                    where: {
                        id: req.body.id
                    }
                }).then(function(dbPost){
                    res.json(dbPost)
                })
        }
    });



    app.delete("/api/burgers", function(req, res) {
        
        db.Burger.destroy({
          where: {
            id: req.body.id
          }
        }).then(function(dbTodo) {
          res.json(dbTodo);
        });
    
      });

}