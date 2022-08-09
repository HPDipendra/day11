import { DataTypes } from "sequelize"
import connection from "./config"
import bcrypt from "bcrypt";



const User = connection.define("books", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.BLOB,

    },

})

export default User;