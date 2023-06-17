const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const dotenv=require("dotenv");
dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => res.send('Hllo world!'));

const port = 8082;

app.listen(port, () => console.log(`Server running on port ${port}`.bgCyan.white));
