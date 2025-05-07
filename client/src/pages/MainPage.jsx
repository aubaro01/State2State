import React, { useState, useEffect } from "react";
import { BlogPostCard } from "../components/cards";
import imgPath from '../uploads/IMG_6750.jpg';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Substitua pela URL real da sua API
        const response = await fetch('https://sua-api.com/posts/recentes');
        
        if (!response.ok) {
          throw new Error('Falha ao carregar posts');
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Dados de fallback caso a API não esteja disponível
  const fallbackPosts = [
    {
      id: 1,
      title: "Paisagens Urbanas",
      excerpt: "Uma coleção de fotografias capturando a beleza da arquitetura urbana.",
      date: "10 Abril, 2025",
      imageUrl: "/placeholder.svg?height=400&width=600",
      slug: "paisagens-urbanas",
    },
    // ... outros posts de fallback
  ];

  // Se estiver carregando, mostra um spinner
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  // Se houver erro, mostra mensagem de erro (mas ainda mostra o conteúdo com fallback)
  if (error) {
    console.error(error);
  }

  // Usa posts da API ou fallback se não houver posts
  const displayedPosts = posts.length > 0 ? posts : fallbackPosts;

  return (
    <div className="min-vh-100 d-flex flex-column">
      <main className="flex-grow-1">
        <div className="container py-5">
          <section
            className="d-flex flex-column justify-content-center align-items-center text-center position-relative overflow-hidden"
            style={{ minHeight: '100vh' }}
          >
            {/* Imagem de fundo */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                backgroundImage: `url(${imgPath})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                zIndex: 0,
              }}
              role="img"
              aria-label="Fundo ilustrativo com paisagem dos estados"
            ></div>

            {/* Conteúdo */}
            <div className="container position-relative z-1 text-white">
              <h1 className="display-2 fw-bold mb-3">State 2 State</h1>

              <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                <a role="button" className="btn btn-outline-light btn-lg px-4" href="/gallery">
                  Explorar Galeria
                </a>
              </div>
            </div>

            {/* Ícone para rolar */}
            <div className="position-absolute bottom-0 mb-4 text-white z-1 text-center">
              <p className="mb-1 small">Ver mais</p>
              <a href="#PostRe" className="text-white d-inline-block">
                <i className="bi bi-chevron-down fs-4"></i>
              </a>
            </div>
          </section>

          <section id="PostRe" className="py-5">
            <div className="container">
              <h2 className="mb-4 text-center">Posts Recentes</h2>

              {error && (
                <div className="alert alert-warning">
                  Não foi possível carregar os posts recentes. Mostrando conteúdo de fallback.
                </div>
              )}

              <div className="row g-4">
                {displayedPosts.map((post) => (
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