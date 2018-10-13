var orm = require("../config/orm.js");

var burgers = {
        all: function(cb) {
          orm.all("hotdogs", function(res) {
            cb(res);
          });
        }
};

module.exports = burgers;
