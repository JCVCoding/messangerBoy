const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  //user data is pulled from the database (look at the done statement in async call below).
  done(null, user.id); //user.id is the id assigned by mongo
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    //user is what query returns from database
    done(null, user);
  });
});

//tells passport to use the google oauth 2.0 strategy for authentication
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          //we already have a record with given profile ID, skip user creation
          done(null, existingUser); //tells passport we are done with the creation of the user and returns the user model
        } else {
          //make new record with ID if it is not in database
          new User({ googleID: profile.id })
            .save()
            .then(user => done(null, user)); //tells passport we are done with the creation of the user and returns the user model
        }
      });
    }
  )
);
