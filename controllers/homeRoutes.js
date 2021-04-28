const router = require("express").Router();
const { User } = require("../models");
// const withAuth = require("../utils/auth");

// Render homepage
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
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
