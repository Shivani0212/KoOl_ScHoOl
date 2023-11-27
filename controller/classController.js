const classModel = require("../model/classModel");

const isAttendanceTakenController = async (req, res) => {
  try {
    const schoolId = "65043762089b19e76644c234"; // Replace with the actual school ID
    const className = await req.query.className;
    const today = new Date();
    const attendance = await classModel.findOne({
      schoolId: schoolId,
      className: className,
    },{attendance:1});

    console.log(lastDate);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `isAttendanceTakenController error : ${error.message}`,
    });
  }
};

module.exports = {isAttendanceTakenController}
