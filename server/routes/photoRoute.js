const express = require("express");
const { uploadPhoto, getPhotos } = require("../controllers/photoController");
const { authenticate } = require("../middlewares/authMiddleaware");

const router = express.Router();

router.post("/upload", authenticate, uploadPhoto);
router.get("/photos", authenticate, getPhotos);

module.exports = router;
