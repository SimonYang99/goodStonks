const express = require('express');
// const artistController = require('../controllers/ArtistController');
const router = express.Router();
const tickerController = require('../controllers/tickerController')

router.get('/getAllPosts', tickerController.tickerGetAllPosts)
router.get('/ticker/:id', tickerController.tickerGetPosts)
router.get('/ticker/:id/:postId', tickerController.tickerGetPost)
router.post('/ticker/createPost', tickerController.tickerCreatePost)


module.exports = router;