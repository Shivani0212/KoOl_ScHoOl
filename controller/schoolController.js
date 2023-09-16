const schoolModel = require("../model/schoolModel");
const classModel = require("../model/classModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const schoolController = async (req, res) => {
  try {
    const exisitingSchool = await schoolModel.findOne({
      email: req.body.email,
    });
    if (exisitingSchool) {
      return res
        .status(200)
        .send({ message: "School Already Exist", success: false });
    }
    const newSchool = new schoolModel(req.body);
    await newSchool.save();
    res
      .status(201)
      .send({ message: "School Register Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `School Controller ${error.message}`,
    });
  }
};
const getSchoolInfoController = async (req, res) => {
  try {
    const schoolModel = await doctorModel.findOne({ userId: req.body.email });
    res.status(200).send({
      success: true,
      message: "School data fetch success",
      data: school,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching School Details",
    });
  }
};
const getAllSchoolController = async (req, res) => {
  try {
    const schools = await schoolModel.find({ status: "approved" });
    res.status(200).send({
      success: true,
      message: "School Lists Fetched Successfully",
      data: schools,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching all school list",
    });
  }
};

const getAllClassController = async (req, res) => {
  try {
    const schoolId = "65043762089b19e76644c234"; // Replace with the actual school ID

    const school = await schoolModel.findById(schoolId);
    const classList = await classModel.find({ _id: { $in: school.classList } },{className:1,_id:0});
    const updatedClassList = classList.map((val) => val.className)

    res.status(200).send({
      success: true,
      message: "Class List Fetched Successfully",
      data: updatedClassList,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching class list",
    });
  }
};

module.exports = {
  schoolController,
  getSchoolInfoController,
  getAllSchoolController,
  getAllClassController,
};
