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

router.get('/', async (req, res) => {
  try {
 
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/log/goal',  function(req, res){
  var options = {
    host : 'https://wger.de/',
    path : '/api/v2/exercisecategory/',
    method : 'GET'
  }

  var req = http.request(options, function(res){
    var body = "";
    res.on('data', function(data) {
        console.log('data came');
        body += data;
    });
    res.on('end', function() {
        console.log('ended too');
        response.send(body);
    });
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
