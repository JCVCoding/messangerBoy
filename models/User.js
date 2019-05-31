const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  facebookId: String,
  twitterId: String,
  credits: {type: Number, default: 0}
});

mongoose.model("users", userSchema); //loads schema into mongoose and makes model
