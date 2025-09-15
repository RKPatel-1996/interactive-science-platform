// src/pages/HomePage.jsx
import "./HomePage.css";
import { mockArticles } from "../data/mockArticles"; // Import the data
import ArticleCard from "../components/ArticleCard"; // Import the component

function HomePage() {
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
        {/* Replace placeholder with the actual grid */}
        <div className="article-grid">
          {mockArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
