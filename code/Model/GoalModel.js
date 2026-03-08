const mongoose = require("mongoose");
const goalSchema = require("../Schema/GoalSchema");

const goalModel = mongoose.model("Goal", goalSchema);

module.exports = goalModel;