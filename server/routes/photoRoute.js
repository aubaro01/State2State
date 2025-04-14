const express = require("express");
const { uploadPhoto, getPhotos } = require("../controllers/photoController");

const router = express.Router();

router.post("/upload",  uploadPhoto);
router.get("/photos", getPhotos);

module.exports = router;
