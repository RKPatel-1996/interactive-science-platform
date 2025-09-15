// src/components/ArticleCard.jsx
import { Link } from "react-router-dom";
import "./ArticleCard.css";

function ArticleCard({ article }) {
  // If an article is missing a slug, don't try to render the card.
  if (!article || !article.slug) {
    return null;
  }

  const { title, excerpt, category, publishedAt } = article;

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="article-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-excerpt">{excerpt}</p>
      <div className="card-meta">
        <span className="card-category">{category}</span>
        <time dateTime={publishedAt}>{formattedDate}</time>
      </div>
      <Link to={`/blogs/${article.slug.current}`} className="card-read-more">
        Read More →
      </Link>
    </article>
  );
}

export default ArticleCard;
