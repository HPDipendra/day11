import { Sequelize } from "sequelize";
import "dotenv/config"

export default new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USERNAME as string,
    process.env.DB_PASSWORD,
    {
        
        host: process.env.HOST,
        dialect: "mysql",
        query:{
            raw:true
        },
        pool: {
            max: 5
        }
    }
);
