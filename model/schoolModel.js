const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: [true, "name is required"],
  },
  schoolEmail: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  classList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class", // Reference to the class model
    },
  ],
  teacherList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teachers", // Reference to the teachers model
    },
  ],
  studentList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student", // Reference to the Student model
    },
  ],
  schoolLogo: {
    type: String,
    default:
      "https://kool-school.vercel.app/assets/logo-d75edd75.svg",
  },
});

const schoolModel = mongoose.model("school", schoolSchema);
module.exports = schoolModel;
