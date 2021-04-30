const router = require("express").Router();
const { User, Routines } = require("../models");
const withAuth = require("../utils/auth");

// Route to root/homepage
// router.get("/", async (req, res) => {
//   try {
//     res.render("homepage", {
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// Route to profile if logged in
router.get("/home", withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id);
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Routines }],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render("home", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// go home withAuth middleware to prevent access to route
router.get("/", withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id);
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Routines }],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render("homepage", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to profile if logged in
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/home");
    return;
  }
  res.render("login");
});

module.exports = router;
