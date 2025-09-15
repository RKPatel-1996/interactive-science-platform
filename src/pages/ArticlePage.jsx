// src/pages/ArticlePage.jsx
import { useParams, Link } from "react-router-dom";
import { mockArticles } from "../data/mockArticles";
import "./ArticlePage.css";

function ArticlePage() {
  // 1. Get the articleId from the URL
  const { articleId } = useParams();

  // 2. Find the article in our data array
  // In a real app, you'd fetch this from a server or CMS.
  // We use '==' because useParams gives a string, and our id is a number.
  const article = mockArticles.find((p) => p.id == articleId);

  // Handle case where article is not found
  if (!article) {
    return (
      <div>
        <h2>Article not found!</h2>
        <Link to="/blogs">Back to all articles</Link>
      </div>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
        {/* This is placeholder content. Later, it will come from the CMS. */}
        <p>{article.excerpt}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris.
        </p>
        <p>
          Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
          lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
    </div>
  );
}

export default ArticlePage;
