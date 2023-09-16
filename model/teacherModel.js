const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
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
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"], // Define possible gender options
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: [true,"DOB is required"]
  },
  address: {
    type: String,
    required: [true,"Address is required"]
  },
  qualifications: {
    type: String,
    required: [true,"Qualification is required"]
  },
  subject: {
    type: String,
    required: [true,"Subject is required"]
  },
  class: {
    type: String,
    required: [true,"Preference class is required"]
  },
  mobileNumber: {
    type: String,
    required: [true,"Mobile No. is required"]
  },
  isHeadMaster:{
    type:Boolean,
    default:false
  },
  profilePicture: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuysOxtIA-uSerDZ2bji-2l9Uec_kuPfMKLXuDDStF&s"
  },

});

const teacherModel = mongoose.model('teachers', teacherSchema);

module.exports = teacherModel;
