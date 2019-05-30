const passport = require("passport");

module.exports = app => {
  // Route Handlers

  // GOOGLE ROUTES
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  //FB ROUTES
  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", {
      authType: "reauthenticate"
    })
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/" }),
    (req, res) => {
      res.redirect("/");
    }
  );

  // TWITTER ROUTES
  
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
