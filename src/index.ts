import express from "express";
import connection from "./models/config"
import bookRoute from "./routes/bookRoute"
import userRoute from "./routes/userRoute"
import cors from "cors";
// import "../src/controller/auth.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


console.log("hello");




app.get("/", (req, res) => {
    res.end("routes")
})


app.use("/book", bookRoute);
app.use("/user", userRoute);



app.listen(process.env.PORT, async () => {

    console.log(`the server is running in the port : ${process.env.PORT}`);

    try {
        await connection.authenticate();
        console.log("connection succesfully started");
        connection.sync();
    }
    catch (error) {
        console.log("erroer");
    }
})