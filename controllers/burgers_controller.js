// Consts for Express and burger.js
const express = require("express");
const burger = require("../models/burger.js")

// const for the router
const router = express.Router();

// Router.get to get all the info from the database
router.get("/", (req, res) => {
    // Use the select all function
    burger.selectAll((data) => {
        // Get all the burger data
        const selectAllBurgers = {
            burgers: data,
        };
        res.render('index', selectAllBurgers);
    });
});

// Router.post to post the new burger
router.post("/api/burgers/", (req, res) => {
    // Use the intsert one function to get the data!
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (results) => {
        res.json({ id: results.insertId });
    })
})

// Router.put to change burgers from not eaten, to eaten!
router.put('/api/burgers/:id', (req, res) => {
    // Set the condition
    const condition = `id = ${req.params.id}`;
    // Use the update One function
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
            // Good status!
            res.status(200).end();
        }
    );
});

// BEGIN TEST DELETE FUNCTION
// router.delete("/api/burgers/:id", (req, res) => {
//     const condition = `id = ${req.params.id}`
//     burger.deleteOne(condition, (res) => {
//         if (res.affectedRows === 0) {
//             return res.status(404).end();
//         }
//         res.status(200).end;
//     })
// })
// END TEST DELETE FUNCTION


// Always gotta module.export!
module.exports = router;