const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
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
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        //we already have a record with given profile ID, skip user creation
        return done(null, existingUser); //tells passport we are done with the creation of the user and returns the user model
      } else {
        //make new record with ID if it is not in database
        const user = await new User({ googleID: profile.id }).save();
        done(null, user); //tells passport we are done with the creation of the user and returns the user model
      }
    }
  )
);

//FB Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/auth/facebook/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
     const existingUser = await User.findOne({ facebookId: profile.id});
     if(existingUser) {
       return done(null, existingUser);
     } else {
       const user = await new User({ facebookId: profile.id}).save();
       done(null, user);
     }
    }
  )
);
