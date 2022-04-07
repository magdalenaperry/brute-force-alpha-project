const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Symptoms extends Model { }

Symptoms.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true

    },
    Symptoms: {
        type: DataTypes.STRING,
    }

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
});

module.exports = Symptoms