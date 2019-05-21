const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
});

mongoose.model("users", userSchema); //loads schema into mongoose and makes model
