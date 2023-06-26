const express = require("express");

const colors = require("colors");
const connectDB = require("./config/db");
const dotenv=require("dotenv");
const {registerController,loginController} = require("./controller/userController");
dotenv.config();
connectDB();
const app = express();

app.use(express.json());


app.get('/', (req, res) => res.send('Hello world!'));
app.post("/register",registerController);
app.post("/login",loginController);

const port = 8082;

app.listen(port, () => console.log(`Server running on port ${port}`.bgCyan.white));
