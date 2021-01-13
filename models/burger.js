// Const to require Orm
const orm = require("../config/orm.js")

// using burger object to use Orm
const burger = {
    // Using the select all orm function
    selectAll(cb) {
        orm.selectAll("burgers", (res) => cb(res));
    },
    // Using the insert one orm function
    insertOne(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, (res) => cb(res));
    },
    // Using the update one orm function
    updateOne(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, (res) => cb(res));
    },
    // BEGIN TEST FOR DELETE ORM FUNCTION
    // deleteOne(objColVal, condition, cb) {
    //     orm.deleteOne("burgers", objColVal, condition, (res) => cb(res))
    // }
    // END TEST FOR DELETE ORM FUNCTION
};

// Don't forget to Module.Export!
module.exports = burger;