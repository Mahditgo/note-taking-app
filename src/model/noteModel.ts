import {  DataTypes } from "sequelize";
import sequelize from "../config/database";

const Note = sequelize.define('Note', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    content : {
        type : DataTypes.STRING,
        allowNull : false
    }
},
{
    tableName : "notes",
    timestamps : true
});

export default Note;
