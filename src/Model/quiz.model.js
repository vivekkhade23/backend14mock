const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
})

const QuizModel = mongoose.model("quiz", QuizSchema);

module.exports = QuizModel;