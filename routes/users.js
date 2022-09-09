const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('hey this is user route');
});

module.exports = router;
