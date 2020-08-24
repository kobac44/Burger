const orm = require("../config/orm.js");



const burger = {
    all: function (cb) {
        console.log("all burger model")
        orm.all("burgers", function (res) {
            console.log("res from orm.all : ", res);
            cb(res);
        });
    },
    create: function (name, cb) {
        orm.create("burgers", [
            "burger", "devoured"
        ], [
            name, false
        ], cb);
    },
    update: function (id, cb) {
        const condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burger;