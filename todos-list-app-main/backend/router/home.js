const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

module.exports = router;