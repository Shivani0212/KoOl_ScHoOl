const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "school",
    required: true,
    index: true, // Add an index for performance
  },
  className: {
    type: String,
    required: true,
  },
  studentList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student", // Reference to the Student model
    },
  ],
  attendance: [
    {
      date:Date,
      list:[
        {
          studentId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "student", // Reference to the Student model
          },
          isPresent: Boolean
        }
      ]
    }
  ]
});

const classModel = mongoose.model("class", classSchema);
module.exports = classModel;
