import React from "react";

export function BlogPostCard({ post }) {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <a href={`/${post.slug}`} className="text-decoration-none">
        <div className="position-relative" style={{ height: "240px" }}>
          
          <img
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            className="card-img-top"
          />
        </div>
        <div className="card-body p-4">
          <h2 className="h5 card-title fw-medium text-dark mb-2">{post.title}</h2>
          <p className="card-subtitle text-muted small mb-3">{post.date}</p>
          <p className="card-text text-secondary">{post.excerpt}</p>
        </div>
      </a>
    </div>
  );
}
