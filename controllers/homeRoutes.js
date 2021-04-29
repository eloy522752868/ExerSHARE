const router = require("express").Router();
const { User } = require("../models");
// const withAuth = require("../utils/auth");

// Route to root/homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to profile if logged in
router.get("/dashboard", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("dashboard");
});

// Route to profile if logged in
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

module.exports = router;