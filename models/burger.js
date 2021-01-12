// Const to require Orm
const orm = require("../config/orm.js")

const burger = {
    selectAll(cb) {
        orm.selectAll("burgers", (res) => cb(res));
    },
    insertOne(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, (res) => cb(res));
    },
    updateOne(objColVal, condition, cb) {
        orm.updateOne("burgers", objColVal, condition, (res) => cb(res));
    },
};

// Gotta Module.Export!
module.exports = burger;