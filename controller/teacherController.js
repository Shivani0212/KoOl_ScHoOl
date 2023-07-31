const teacherModel=require("../model/teacherModel");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const teacherController = async (req, res) =>{
  try {
      const exisitingTeacher = await teacherModel.findOne({ email: req.body.email });
      if (exisitingTeacher) {
        return res
          .status(200)
          .send({ message: "Teacher Already Exist", success: false});
      }
      const newTeacher = new teacherModel(req.body);
      await newTeacher.save();
      res.status(201).send({ message: "Teacher Register Sucessfully", success: true});
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Teacher Controller ${error.message}`,
      });
    }
};
const getTeacherInfoController = async (req, res) => {
  try {
    const teacher = await teacherModel.findOne({ _id: req.body.email });
    res.status(200).send({
      success: true,
      message: "Teacher Info Fetched",
      data: teacher,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Teacher info",
    });
  }
};
const getAllTeacherController = async (req, res) => {
  try {
    const teachers = await teacherModel.find({ status: "approved" });
    res.status(200).send({
      success: true,
      message: "Teacher Lists Fetched Successfully",
      data: teachers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching Teacher list",
    });
  }
};
module.exports={teacherController,getTeacherInfoController,getAllTeacherController};