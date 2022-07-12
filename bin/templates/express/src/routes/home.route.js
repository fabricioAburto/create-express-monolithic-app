const router = require('express').Router();
router.get('/', (req, res) => {
  return 'Home';
});

module.exports = router;
