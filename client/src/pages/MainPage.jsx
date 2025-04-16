import React from "react";
import { BlogPostCard } from "../components/cards";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Paisagens Urbanas",
      excerpt: "Uma coleção de fotografias capturando a beleza da arquitetura urbana.",
      date: "10 Abril, 2025",
      imageUrl: "/placeholder.svg?height=400&width=600",
      slug: "paisagens-urbanas",
    },
    {
      id: 2,
      title: "Natureza em Foco",
      excerpt: "Explorando a beleza natural através das minhas lentes.",
      date: "5 Abril, 2025",
      imageUrl: "/placeholder.svg?height=400&width=600",
      slug: "natureza-em-foco",
    },
    {
      id: 3,
      title: "Retratos Minimalistas",
      excerpt: "A simplicidade e elegância dos retratos em preto e branco.",
      date: "1 Abril, 2025",
      imageUrl: "/placeholder.svg?height=400&width=600",
      slug: "retratos-minimalistas",
    },
    {
      id: 4,
      title: "Luz e Sombra",
      excerpt: "Estudos fotográficos sobre o contraste entre luz e sombra.",
      date: "25 Março, 2025",
      imageUrl: "/placeholder.svg?height=400&width=600",
      slug: "luz-e-sombra",
    },
    {
      id: 5,
      title: "Luz e Sombra",
      excerpt: "Estudos fotográficos sobre o contraste entre luz e sombra.",
      date: "25 Março, 2025",
      imageUrl: "/placeholder.svg?height=400&width=600",
      slug: "luz-e-sombra",
    },
    {
      id: 6,
      title: "Luz e Sombra",
      excerpt: "Estudos fotográficos sobre o contraste entre luz e sombra.",
      date: "25 Março, 2025",
      imageUrl: "/placeholder.svg?height=400&width=600",
      slug: "luz-e-sombra",
    },
  ];

  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      <main className="flex-grow-1">
        <div className="container py-5">
          <section
            className="gradient-background d-flex flex-column justify-content-center align-items-center text-center position-relative overflow-hidden"
            style={{ minHeight: '100vh' }}
          >
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{ opacity: 0.5, zIndex: 1 }}></div>

            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                backgroundImage: "url('/api/placeholder/1600/900')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                zIndex: 0
              }}
              role="img"
              aria-label="Fundo ilustrativo com paisagem dos estados"
            ></div>

            <div className="container position-relative z-2">
              <h1 className="display-2 fw-bold text-white mb-3">State 2 State</h1>

              <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                <a role="button" className="btn btn-outline-light btn-lg px-4" href="/gallery">
                  Explorar Galeria
                </a>
                <a role="button" className="btn btn-outline-light btn-lg px-4" href="/about">
                  Sobre o Projeto
                </a>
              </div>
            </div>
            <div className="position-absolute bottom-0 mb-4 text-white z-2 text-center">
              <p className="mb-1 small text-white">Ver mais</p>
              <a href="#PostRe" className="text-white d-inline-block">
                <i className="bi bi-chevron-down fs-4"></i>
              </a>

            </div>
          </section>

          <section id="PostRe" className="py-5 bg-light">
            <div className="container">
              <h2 className="mb-4 text-center">Posts Recentes</h2>

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
