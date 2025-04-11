"use client";

import React from "react";

export function GalleryItem({ item, onClick }) {
  const sizeClasses = {
    small: "col-12 col-md-4 col-lg-3",
    medium: "col-12 col-md-6 col-lg-4",
    large: "col-12 col-md-6 col-lg-6",
  };

  const columnClass = sizeClasses[item.size] || sizeClasses.medium;

  return (
    <div className={columnClass}>
      <div
        className="position-relative overflow-hidden rounded gallery-item"
        style={{
          height: item.size === "small" ? "200px" : item.size === "medium" ? "300px" : "400px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <img
          src={item.imageUrl || "/placeholder.svg"}
          alt={item.title}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          className="transition-all duration-300 ease-in-out"
        />

        <div className="position-absolute bottom-0 start-0 w-100 p-3 text-white gallery-overlay">
          <h3 className="h6 fw-light mb-0">{item.title}</h3>
        </div>
      </div>
    </div>
  );
}
