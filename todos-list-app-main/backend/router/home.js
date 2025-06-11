const express = require('express');
const router = express.Router();
router.use(express.static(path.join(__dirname, 'public')));

router.get('/', (req, res) => {
  res.send('Welcome to backend :)');
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
module.exports = router;
