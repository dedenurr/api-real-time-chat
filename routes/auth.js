const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('hey this is auth route');
});

module.exports = router;
