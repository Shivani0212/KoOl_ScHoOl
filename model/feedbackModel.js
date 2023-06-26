const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true,"Tiltle is required"]
  },
  content: {
    type: String,
    required: [true,"Content is required"]
  },
  
});

const feedbackModel = mongoose.model('feedback', feedbackSchema);
module.exports = feedbackModel;