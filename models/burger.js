// Const to require Orm
const orm = require("../config/orm.js")

const burger = {
    selectAll(cb) {
        orm.selectAll("burgers", (res) => cb(res));
    },
    insertOne(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, (res) => cb(res));
    },
    updateOne(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, (res) => cb(res));
    },
    // deleteOne(objColVal, condition, cb) {
    //     orm.deleteOne("burgers", objColVal, condition, (res) => cb(res))
    // }
};

// Gotta Module.Export!
module.exports = burger;