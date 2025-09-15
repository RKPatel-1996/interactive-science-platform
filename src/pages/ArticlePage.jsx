// src/pages/ArticlePage.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../lib/sanityClient";
import { PortableText } from "@portabletext/react"; // 1. Import the new component
import "./ArticlePage.css";

function ArticlePage() {
  const [article, setArticle] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const query = `*[_type == "article" && slug.current == $slug][0]{
      title,
      body,
      "category": categories[0]->title,
      publishedAt
    }`;
    const params = { slug };

    client
      .fetch(query, params)
      .then((data) => {
        setArticle(data);
      })
      .catch(console.error);
  }, [slug]);

  if (!article) {
    return <div>Loading...</div>;
  }

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="article-content">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
      <header className="article-header">
        <h1 className="article-title">{article.title}</h1>
        <p className="article-meta">
          Published on {formattedDate} in {article.category}
        </p>
      </header>
      <div className="article-body">
        {/* 2. Use the new PortableText component. It's much simpler! */}
        {article.body && <PortableText value={article.body} />}
      </div>
    </div>
  );
}

export default ArticlePage;
