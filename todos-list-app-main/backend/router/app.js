const express = require('express');
const path = require('path');
const router = express.Router();

router.use(express.static(path.join(__dirname, 'public')));
router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

module.exports = router;
