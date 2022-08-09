import userModel from "../models/userModel";
import bycrypt from "bcrypt"
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config"
import { Model } from "mongoose";
//import{user1} from "../models/userModel";


interface user{
    userName:string,
    password:string
    address:string,
    phoneNo:number
}
export default class UsersController {

    async get(req:Request,res:Response) {

        console.log(req.body);

        const data:user = req.body

         const result:any = await userModel.findOne({
            where: {
                userName:data.userName
            }

        });

        console.log(result.password);


        if (result === null) {
            return res.json({ success: "false", message: "user doesnot exist" })
        }
    
        else {
            const match = bycrypt.compareSync(req.body.password, result.password);

            if (match) {
                //jwt
                const token = jwt.sign({ id: result.id }, process.env.JWT_SECRET as string, { expiresIn: "5h" })
                console.log(`token:${token}`);
               
                result.token = token;
                delete result.password;
                delete result.address;
                delete result.phoneNo;

                console.log(result);
                

                
                res.json(
                    {
                        // token,
                        result
                    }
                )
            }
            else {
                res.status(403).json({ success: "false", message: "invalid password" })
            }
        }
    }

    async add(req:Request,res:Response) {
        console.log(req.body);
        // const{userName,password,address,phoneNo} = req.body;

        const data = await userModel.create(req.body)
        console.log(data);

        if (data) { res.json({ message: "data inserted succesfully" }) }

        else { res.json({ message: "data not inserted" }) }
    }
}