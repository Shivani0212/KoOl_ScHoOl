const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
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
  isHeadMaster:{
    type:Boolean,
    default:false
  },

  gender: {
    type: String,
    required: [true,"Gender is required"]
  },
  date_of_birth: {
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
  teaching_subject: {
    type: String,
    required: [true,"Subject is required"]
  },
  preferenceclass: {
    type: String,
    required: [true,"Preference class is required"]
  },
  mobilenumber: {
    type: String,
    required: [true,"Mobile No. is required"]
  },
  pic: {
    type: String,
    default:"https://res.cloudinary.com/dvfpkko1z/image/upload/v1589016219/exwm2axhjign3pmawzlv.png"
  },

});

const teacherModel = mongoose.model('teachers', teacherSchema);

module.exports = teacherModel;
