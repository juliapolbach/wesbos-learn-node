const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  console.log('hey!');
  res.send('Hey! It works!');
});

module.exports = router;
