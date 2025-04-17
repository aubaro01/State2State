const path = require('path');
const Photo = require('../models/photoModel');

const getPhotosByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const photos = await Photo.find({ category });
    res.status(200).json(photos.map(photo => ({
      ...photo.toObject(),
      imageUrl: path.join('/uploads/', photo.imageUrl) 
    })));
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar fotos por categoria', error });
  }
};

const getRecentPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json(photos.map(photo => ({
      ...photo.toObject(),
      imageUrl: path.join('/uploads/', photo.imageUrl)
      
    })));
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar fotos recentes', error });
  }
};

const getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();

    const result = photos.map(photo => ({
      ...photo.toObject(),
      imageUrl: `/uploads/${photo.imageUrl}` 
    }));

    res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao buscar fotos:", error);
    res.status(500).json({ message: 'Erro ao buscar todas as fotos', error: error.message });
  }
};


module.exports = {
  getPhotosByCategory,
  getRecentPhotos,
  getAllPhotos, 
};
