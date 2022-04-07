const {
    Reference
} = require('eslint-scope');
const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class History extends Model { }

History.init({
    // columns here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
    },
    patient_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'patient',
            key: 'id',
            unique: false
        }
    },
    illness_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'illness',
            key: 'id',
            unique: false
        }
    }
}, {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'history'
});

module.exports = History;