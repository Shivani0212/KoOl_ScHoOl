const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  sub_name: {
    type: String,
  },
  sub_class: {
    type: String,
  },
  sub_marks: {
    type: String,
  },
  sub_code: {
    type: String,
  },
  
  
});

const subjectModel = mongoose.model('subject', subjectSchema);
module.exports = subjectModel;