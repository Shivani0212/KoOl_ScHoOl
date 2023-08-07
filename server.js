const express = require("express");

const colors = require("colors");
const connectDB = require("./config/db");

const dotenv=require("dotenv");

const cors=require("cors");
const {registerController,loginController} = require("./controller/userController");
const {schoolController,getSchoolInfoController,getAllSchoolController} = require("./controller/schoolController");
const {teacherController,getTeacherInfoController,getAllTeacherController} = require("./controller/teacherController");
const {studentController,getStudentInfoController,getAllStudentController} = require("./controller/studentController");


dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(cors());



app.post("/api/v1/user/register",registerController);
app.post("/api/v1/user/signin",loginController);
app.post("/api/v1/user/teacher",teacherController);
app.post("/api/v1/user/school",schoolController);
app.post("/api/v1/user/student",studentController);
app.get("/api/v1/user/getStudent",getStudentInfoController);
app.get("/api/v1/user/getAllStudents",getAllStudentController);
app.get("/api/v1/user/getTeacher",getTeacherInfoController);
app.get("/api/v1/user/getAllTeachers",getAllTeacherController);
app.get("/api/v1/user/getSchool",getSchoolInfoController);
app.get("/api/v1/user/getAllSchool",getAllSchoolController);



const port = 8082;

app.listen(port, () => console.log(`Server running on port ${port}`.bgCyan.white));
