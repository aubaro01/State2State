import React from 'react';
import '../styles/MainPage.css';

const MainPage = () => {
  const photos = [
    { id: 1, src: "https://via.placeholder.com/300", title: "Foto 1" },
    { id: 2, src: "https://via.placeholder.com/300", title: "Foto 2" },
    { id: 3, src: "https://via.placeholder.com/300", title: "Foto 3" },
    { id: 4, src: "https://via.placeholder.com/300", title: "Foto 4" },
    { id: 5, src: "https://via.placeholder.com/300", title: "Foto 5" },
    { id: 6, src: "https://via.placeholder.com/300", title: "Foto 6" },
  ];

  return (
    <div className="main-container">
      <h1>Blog de Fotos</h1>
      <div className="gallery">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.src} alt={photo.title} className="photo-image" />
            <h3>{photo.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
