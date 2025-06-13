const express = require('express');
const post_register = require('../Database/CRUD/post.js');
const router = express.Router();
// Middleware to parse JSON bodies
 // Enable CORS for all origins

router.use(express.json());
users = []; // In-memory array to store users, replace with database in production
router.post('/registers', async (req, res) => {
  
  let firstName = req.body.first;
  let lastName = req.body.last;      
  let email = req.body.email;
  let password = req.body.psw;

 

  // Save new user
  const newUser = { firstName, lastName, email, password };
  users.push(newUser);
  const results = await post_register.registerUser(firstName, lastName, email, password)
  if (results) {
    console.log('Registration successful');
    // Respond with the registered user data
  res.status(200).json({ 
    registered_first: req.body.first,
    registered_last: req.body.last,
    registered_email: req.body.email,
    message: 'Registration successful! Please log in.'
  }); 
  }else {
    res.status(400).json({ message: 'Registration failed. Please try again.' });
  }
});

module.exports = router;
