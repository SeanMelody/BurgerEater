// Const to require Orm
const orm = require("../config/orm.js")

const burger = {
    selectAll(cb) {
        orm.all("burgers", (res) => cb(res));
    },
    insertOne(cols, vals, cb) {
        orm.create("burgers", cols, vals, (res) => cb(res));
    },
    updateOne(objColVal, condition, cb) {
        orm.update("burgers", objColVal, condition, (res) => cb(res));
    },
};

// Gotta Module.Export!
module.exports = cat;