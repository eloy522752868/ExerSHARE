const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

module.exports = router;

router.get('/', async (req, res) => {
    try {
        res.send('Welcome to ExerShare');
        console.log("access homepage from browser not api controller get/")
    } catch (err) {
      res.status(500).json(err);
    }
  });

