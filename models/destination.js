import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import { Account } from './Account.js';

export const Destination = sequelize.define('Destination', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accountId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    method: {
        type: DataTypes.STRING,
        allowNull: false
    },
    headers: {
        type: DataTypes.JSON,
        allowNull: false
    }
});

Destination.belongsTo(Account, { onDelete: 'CASCADE' });
Account.hasMany(Destination);