// src/pages/HomePage.jsx
import { useState, useEffect } from "react";
import "./HomePage.css";
import { client } from "../lib/sanityClient";
import ArticleCard from "../components/ArticleCard";

function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const query = `*[_type == "article"]{
      _id,
      title,
      slug,
      excerpt,
      "category": categories[0]->title
    }`;

    client
      .fetch(query)
      .then((data) => {
        setArticles(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <section className="hero-section">
        <h1>Learn Complex Science Interactively</h1>
        <p>
          An educational platform designed to improve knowledge retention
          through engaging, hands-on lessons in biotechnology and microbiology.
        </p>
      </section>

      <section className="articles-section">
        <h2>Explore Articles</h2>
        <div className="article-grid">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
