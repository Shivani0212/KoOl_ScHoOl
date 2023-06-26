const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true,"Tiltle is required"]
  },
  content: {
    type: String,
    required: [true,"Content is required"]
  },

  photo: {
    type: String,
  },
  date_of_notice: {
    type: Date,
  },
  postedby: {
    type: String,
  },
  
});

const noticeModel = mongoose.model('notice', noticeSchema);
module.exports = noticeModel;

