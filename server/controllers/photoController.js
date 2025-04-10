const Photo = require("../models/photoModel");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error("Arquivo não permitido"), false);
    }
  },
}).single("photo");

const uploadPhoto = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }

    const { title, description } = req.body;

    try {
      const newPhoto = new Photo({
        title,
        description,
        imageUrl: `/uploads/${req.file.filename}`,
        userId: req.userId,
      });

      await newPhoto.save();
      res.status(201).json(newPhoto);
    } catch (err) {
      res.status(500).json({ msg: "Erro ao guardar foto", error: err.message });
    }
  });
};

const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find({ userId: req.userId });
    res.json(photos);
  } catch (err) {
    res.status(500).json({ msg: "Erro ao procurar fotos", error: err.message });
  }
};

module.exports = { uploadPhoto, getPhotos };
