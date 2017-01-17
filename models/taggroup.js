'use strict';
module.exports = function(sequelize, DataTypes) {
  var TagGroup = sequelize.define('TagGroup', {
    tagGroupId: DataTypes.SERIAL
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TagGroup;
};