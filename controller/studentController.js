const studentModel = require("../model/studentModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const studentController = async (req, res) => {
  try {
    const exisitingStudent = await studentModel.findOne({
      email: req.body.email,
    });
    if (exisitingStudent) {
      return res
        .status(200)
        .send({ message: "Student Already Exist", success: false });
    }
    const newStudent = new studentModel(req.body);
    await newStudent.save();
    res
      .status(201)
      .send({ message: "Student Register Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Student Controller ${error.message}`,
    });
  }
};
const getStudentInfoController = async (req, res) => {
  try {
    const student = await studentModel.findOne({ userId: req.body.rollnumber });
    res.status(200).send({
      success: true,
      message: "student data fetch success",
      data: student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching student Details",
    });
  }
};
const getAllStudentController = async (req, res) => {
  try {
    // Extract the 'fields' query parameter as a comma-separated string
    const projectionFields = req.query.fields
      ? req.query.fields.split(",")
      : [];

    // Build the projection object dynamically based on the query parameters
    const projection = {};
    projectionFields.forEach((field) => {
      projection[field] = 1; // Include the specified field
    });
    const students = await studentModel.find({}, projection);
    res.status(200).send({
      success: true,
      message: "Student Lists Fetched Successfully",
      data: students,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching Student list",
    });
  }
};
const getAllStudentWithSpecificDataController = async (req, res) => {
  try {
    const students = await studentModel.find({});
    res.status(200).send({
      success: true,
      message: "Student Lists Fetched Successfully",
      data: students,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching Student list",
    });
  }
};
module.exports = {
  studentController,
  getStudentInfoController,
  getAllStudentController,
};
