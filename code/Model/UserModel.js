const mongoose = require("mongoose");
const userSchema = require("../Schema/User");

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;