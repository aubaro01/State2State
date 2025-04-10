"use client";

import { useState } from "react";
import { GalleryItem } from "../components/galleryItem";
import { GalleryModal } from "../components/galleryModal";


export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "Arquitetura Urbana",
      category: "urbano",
      imageUrl: "/placeholder.svg?height=600&width=800",
      size: "large", 
    },
    {
      id: 2,
      title: "Retrato Minimalista",
      category: "retratos",
      imageUrl: "/placeholder.svg?height=800&width=600",
      size: "medium",
    },
    {
      id: 3,
      title: "Paisagem Natural",
      category: "natureza",
      imageUrl: "/placeholder.svg?height=600&width=800",
      size: "medium",
    },
    {
      id: 4,
      title: "Detalhes Arquitetônicos",
      category: "urbano",
      imageUrl: "/placeholder.svg?height=800&width=800",
      size: "small",
    },
    {
      id: 5,
      title: "Luz e Sombra",
      category: "abstrato",
      imageUrl: "/placeholder.svg?height=600&width=800",
      size: "large",
    },
    {
      id: 6,
      title: "Retrato em Preto e Branco",
      category: "retratos",
      imageUrl: "/placeholder.svg?height=800&width=600",
      size: "medium",
    },
    {
      id: 7,
      title: "Natureza Selvagem",
      category: "natureza",
      imageUrl: "/placeholder.svg?height=600&width=800",
      size: "small",
    },
    {
      id: 8,
      title: "Linhas Urbanas",
      category: "urbano",
      imageUrl: "/placeholder.svg?height=800&width=600",
      size: "medium",
    },
    {
      id: 9,
      title: "Formas Abstratas",
      category: "abstrato",
      imageUrl: "/placeholder.svg?height=800&width=800",
      size: "large",
    },
  ];

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);

  const openModal = (item) => {
    setActiveImage(item);
  };

  const closeModal = () => {
    setActiveImage(null);
  };

  const categories = ["all", ...new Set(galleryItems.map((item) => item.category))];

  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      <main className="flex-grow-1">
        <div className="container py-5">
          <section className="mb-5 text-center">
            <h1 className="display-4 fw-light mb-3">Galeria</h1>
            <p className="lead text-muted mb-5">
              Uma coleção de fotografias.
            </p>

            <div className="d-flex justify-content-center mb-5 flex-wrap">
              <div className="btn-group">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`btn ${activeFilter === category ? "btn-dark" : "btn-outline-dark"}`}
                    onClick={() => setActiveFilter(category)}
                    style={{ margin: "0.2rem" }}
                  >
                    {category === "all" ? "Todos" : category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <div className="row g-3">
            {filteredItems.map((item) => (
              <GalleryItem key={item.id} item={item} onClick={() => openModal(item)} />
            ))}
          </div>
        </div>
      </main>

      {activeImage && <GalleryModal image={activeImage} onClose={closeModal} />}

    </div>
  );
}
