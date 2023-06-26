const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true,"First name is required"]
  },
  lastname: {
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
  admin:{
    type:Boolean,
    default:false
  },
  fathername: {
    type: String,
    required: [true,"Father name is required"]
  },
  Mothername: {
    type: String,
    required: [true,"Mother name is required"]
  },
  gender: {
    type: String,
    required: [true,"Gender is required"]
  },
  date_of_birth: {
    type: String,
    required: [true,"DOB is required"]
  },
  mobilenumber: {
    type: Number,
    required: [true,"Mobile No. is required"]
  },
  class: {
    type: Number,
    required: [true,"Class is required"]
  },
  rollnumber: {
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
  pic: {
    type: String,
  },

});

const studentModel = mongoose.model('student', studentSchema);

module.exports = studentModel;
