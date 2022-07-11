const conn = require('../connection/mysql');

const router = require('express').Router();

router.get('/', (req, res) => {
  conn.query('SELECT * FROM course', function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

module.exports = router;
