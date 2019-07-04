var db = require("../models");

module.exports = function (app) {

    app.post("/api/burgers", function (req, res) {
        var newBurger = req.body
        db.Burger.create(newBurger
        ).then(function (results) {
            res.json(results)
        })
    })
}