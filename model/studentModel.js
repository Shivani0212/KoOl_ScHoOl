const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "school",
    required: true,
  },
  firstName: {
    type: String,
    required: [true,"First name is required"]
  },
  lastName: {
    type: String,
    required: [true,"Last name is required"]
  },
  email: {
    type: String,
    required: [true,"email is required"],
    unique: true
  },
  password: {
    type: String,
    required: [true,"password is required"]
  },
  fatherName: {
    type: String,
    required: [true,"Father name is required"]
  },
  MotherName: {
    type: String,
    required: [true,"Mother name is required"]
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"], // Define possible gender options
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: [true,"DOB is required"]
  },
  mobileNumber: {
    type: String,
    required: [true,"Mobile No. is required"]
  },
  class: {
    type: String,
    required: [true,"Class is required"]
  },
  rollNumber: {
    type: String,
    required: [true,"Roll No. is required"]
  },
  city: {
    type: String,
    required: [true,"City is required"]
  },
  state: {
    type: String,
    required: [true,"State is required"]
  },
  profilePicture: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuysOxtIA-uSerDZ2bji-2l9Uec_kuPfMKLXuDDStF&s"
  },

});

const studentModel = mongoose.model('student', studentSchema);

module.exports = studentModel;
