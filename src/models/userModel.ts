import { DataTypes } from "sequelize"
import connection from "./config"
import bcrypt from "bcrypt";



export default  connection.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value: any) {
            console.log(`value:${value}`);
            const hashPassword = bcrypt.hashSync(value, 10);
            this.setDataValue("password", hashPassword);
        },
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNo: {
        type: DataTypes.STRING,
        allowNull: false
    },

})