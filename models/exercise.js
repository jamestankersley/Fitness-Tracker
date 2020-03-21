const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    enum: ["Cardio", "Resistance"],
    required: "Please select an exercise"
  },
  duration: {
    type: Number,
    required: "Please choose a duration",
    min: 1
  },
  name: {
    type: String,
    trim: true,
    minlength: 2,
    required: "You must specify a name"
  },
  weight: {
    type: Number,
    min: 1
  },
  reps: {
    type: Number,
    min: 1
  },
  sets: {
    type: Number,
    min: 1
  },
  distance: {
    type: Number,
    min: 1
  }
});

module.exports = ExerciseSchema;