import React from "react";
import { BlogPostCard } from "../components/cards";  // Certifique-se de que o caminho do arquivo está correto

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
  ];

  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      <main className="flex-grow-1">
        <div className="container py-5">
          <section className="text-center mb-5">
            <h1 className="display-4 fw-light mb-3">Meu Blog Fotográfico</h1>
            <p className="lead text-center mb-5">
              Um espaço dedicado à fotografia minimalista, onde compartilho minhas experiências e capturas através de
              uma lente simples.
            </p>
          </section>

          <section className="row g-4">
            {posts.map((post) => (
              <div key={post.id} className="col-12 col-md-6 col-lg-4">
                <BlogPostCard post={post} />  {/* Usando o componente BlogPostCard */}
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
