// Consts for Express and burger.js
const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();

// Router.get to get all the info from the database
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// Router.post to post the new burger
router.post("/api/burgers/", (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (results) => {
        res.json({ id: results.insertId });
    })
})

// Router.put to change from not eaten, to eaten!
router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log('condition', condition);

    burger.updateOne(
        {
            devoured: req.body.devoured,
        },
        condition,
        (result) => {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

router.delete("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`
    burger.deleteOne(condition, (res) => {
        if (res.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end;
    })
})

// Always gotta module.export!
module.exports = router;