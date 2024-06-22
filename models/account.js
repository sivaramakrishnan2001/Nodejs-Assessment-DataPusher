import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import { v4 as uuidv4 } from 'uuid';

export const Account = sequelize.define('Account', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    secretToken: {
        type: DataTypes.STRING,
        defaultValue: () => uuidv4()
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true
    }
});