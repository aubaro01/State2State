import React from "react";

export function GalleryModal({ image, onClose }) {
  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content bg-transparent border-0">
          <div className="modal-header border-0">
            <h5 className="modal-title text-white">{image.title}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body p-0 text-center">
            <div className="position-relative" style={{ height: "70vh" }}>
              <img src={image.imageUrl || "/placeholder.svg"} alt={image.title} className="object-fit-contain" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
