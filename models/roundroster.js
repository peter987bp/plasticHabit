'use strict';
module.exports = function(sequelize, DataTypes) {
  var RoundRoster = sequelize.define('RoundRoster', {
    roundRosterId: DataTypes.SERIAL
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return RoundRoster;
};