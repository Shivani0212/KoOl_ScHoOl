//name-string
//classlist-array of string
//studentlist,teacherlist-array of string
//library-(optinal)
//eventslist-array of string(optional)
//extracurricular activities(optional)
const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: [true,"name is required"]
  },
  schoolEmail: {
    type: String,
    required: [true,"email is required"],
    unique: true
  },
  
  classList:{
    type: [String],
    default: []
  },
  teacherList:{
    type: [String],
    default:[]
  },
  studentList:{
    type: [String],
    default:[]
  },
  eventsList:{
    type: [String],
    default:[]
  },
  extraCurricularActivitiesList:{
    type: [String],
    default:[]
  },
  booksList:{
    type: [String],
    default:[]
  },
  schoolPicture: {
    type: String,
    default:"https://res.cloudinary.com/dvfpkko1z/image/upload/v1589016219/exwm2axhjign3pmawzlv.png"
  },

  
});

const schoolModel = mongoose.model('school', schoolSchema);

module.exports = schoolModel;