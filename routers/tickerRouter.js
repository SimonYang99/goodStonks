const express = require('express');
// const artistController = require('../controllers/ArtistController');
const router = express.Router();
const tickerController = require('../controllers/tickerController')

router.get('/getAllPosts', tickerController.tickerGetAllPosts)
router.get('/getPost/:id', tickerController.tickerGetPost)
router.get('/ticker/:postid', tickerController.tickerGetPosts)
router.post('/ticker/createPost', tickerController.tickerCreatePost)
router.post('/ticker/createComment', tickerController.tickerCreateComment)

router.get('/value/:id', tickerController.getValue)


module.exports = router;