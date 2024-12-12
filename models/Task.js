
import { sequelize } from "../databases/connectDb.js";
import { DataTypes } from "sequelize";

export const Task = sequelize.define('task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    item: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    flag: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    timeLimit: {
        type: DataTypes.DATE(),
        allowNull: false
    },
}, {
    tableName: 'tasks',
})