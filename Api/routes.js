const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('servidor esta pronto e em execução')
});

module.exports = router