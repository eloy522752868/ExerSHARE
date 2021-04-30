const router = require("express").Router();
const { User, Routines } = require("../models");
const withAuth = require("../utils/auth");

// Route to root/homepage
router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route

// Use withAuth middleware to prevent access to route
router.get("/generaldashboard", withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id);
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Routines }],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render("generaldashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id);
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Routines }],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to profile if logged in
/* router.get("/dashboard", (req, res) => {
  if (req.session.logged_in) {
    res.render("dashboard", {
      logged_in: req.session.logged_in,
    });
    return;
  }
  res.render("dashboard");
}); */

// Route to profile if logged in
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

module.exports = router;
