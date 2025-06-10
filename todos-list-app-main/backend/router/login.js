const express = require('express');
const post_login = require('../Database/CRUD/post.js');
const router = express.Router();

const bodyParser = require('body-parser');

// Middleware to parse JSON bodies 
router.use(bodyParser.json());

router.post('/logins', async (req, res) => {
  let email = req.body.email;
  let password = req.body.psw;
  try {
    const results = await post_login.loginUser(email, password);
    console.log(results['first_name'])
    if (results) {
      res.status(200).json({
       
          logged_first: results['first_name'],
          logged_last: results['last_name'],
          logged_email: results['email'],
          message: 'Login successful. Welcome back!'
      });
    } else {
      res.status(400).json({ message: 'Login failed. Please check your credentials.' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'An error occurred while logging in. Please try again later.' });
  }
});

module.exports = router;