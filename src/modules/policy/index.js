const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/fixed-extensions', controller.getFixedExtensions);
router.get('/custom-extensions', controller.getCustomExtensions);

module.exports = router;