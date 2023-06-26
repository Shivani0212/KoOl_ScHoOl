const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true,"Tiltle is required"]
  },
  photo: {
    type: String,
  },
  date_of_attendance: {
    type: Date,
  },
  
});

const attendanceModel = mongoose.model('attendance', attendanceSchema);
module.exports = attendanceModel;