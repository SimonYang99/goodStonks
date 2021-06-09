const express = require('express');
// const artistController = require('../controllers/ArtistController');
const router = express.Router();
const tickerController = require('../controllers/tickerController')

router.get('/ticker/:id', tickerController.tickerGetPosts)
router.post('/createPost', tickerController.tickerCreatePost)


module.exports = router;