const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.sendFile('../../../public/home.html')
});

module.exports = router;
