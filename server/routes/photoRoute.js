const express = require('express');
const router = express.Router();
const { getPhotosByCategory, getRecentPhotos, getAllPhotos } = require('../controllers/photoController');

router.get('/category/:category', getPhotosByCategory);
router.get('/recent', getRecentPhotos);
router.get('/all', getAllPhotos); 

module.exports = router;
