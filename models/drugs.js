const {
    Reference
} = require('eslint-scope');
const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Drugs extends Model { }

Drugs.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true

    },
    rec_drugs: {
        type: DataTypes.STRING,
    }

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
});

module.exports = Drugs