const express = require('express');
const router = express.Router();
const controller = require('../controller/task');

router.get('/', controller.find);
router.post('/', controller.create);

module.exports = router;