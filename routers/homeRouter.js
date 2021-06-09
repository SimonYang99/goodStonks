const express = require('express');

const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.mainPage);

router.post('/', homeController.newAccount);

module.exports = router;