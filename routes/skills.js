var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET skills listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', skillsCtrl.index)

// GET /skills.ejs/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
