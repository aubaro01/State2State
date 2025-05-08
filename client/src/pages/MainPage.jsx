import React from "react";
import { BlogPostCard } from "../components/cards";
import imgPath from '../assets/IMG_6750.jpg';
import ImgPag from '../assets/IMG_6750.jpg';
import imgNat from '../assets/nat.jpeg';
import imgRe from '../assets/IMG_0599.jpeg';
export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Paisagens Urbanas",
      excerpt: "Uma coleção de fotografias capturando a beleza da arquitetura urbana.",
      date: "10 Abril, 2025",
      imageUrl: ImgPag, 
      slug: "paisagens",
    },
    {
      id: 2,
      title: "Natureza",
      excerpt: "Explorando a beleza natural através das minhas lentes.",
      date: "5 Abril, 2025",
      imageUrl: imgNat, 
      slug: "Natureza",
    },
    {
      id: 3,
      title: "Retratos",
      excerpt: "A simplicidade e elegância dos retratos em preto e branco.",
      date: "1 Abril, 2025",
      imageUrl: imgRe, 
      slug: "sla",
    },
  ];

  return (
    <div className="min-vh-100 d-flex flex-column">
      <main className="flex-grow-1">
        <div className="container py-5">
          <section
            className="d-flex flex-column justify-content-center align-items-center text-center position-relative overflow-hidden"
            style={{ minHeight: '100vh' }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                backgroundImage: `url(${imgPath})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                zIndex: 0,
                filter: 'brightness(0.7)', 
              }}
              role="img"
              aria-label="Fundo ilustrativo com paisagem dos estados"
            ></div>
            <div className="container position-relative z-1 text-white">
              <h1 className="display-2 fw-bold mb-3">State 2 State</h1>

              <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                <a role="button" className="btn btn-outline-light btn-lg px-4" href="/gallery">
                  Explorar Galeria
                </a>
              </div>
            </div>

            <div className="position-absolute bottom-0 mb-4 text-white z-1 text-center">
              <p className="mb-1 small">Ver mais</p>
              <a href="#PostRe" className="text-white d-inline-block">
                <i className="bi bi-chevron-down fs-4"></i>
              </a>
            </div>
          </section>

          <section id="PostRe" className="py-5">
            <div className="container">
              <h2 className="mb-4 text-center">Coleções de Fotos</h2>

              <div className="row g-4">
                {posts.map((post) => (
                  <div key={post.id} className="col-12 col-md-6 col-lg-4">
                    <BlogPostCard post={post} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}