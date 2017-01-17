'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rounds = sequelize.define('Rounds', {
    roundId: DataTypes.SERIAL
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rounds;
};