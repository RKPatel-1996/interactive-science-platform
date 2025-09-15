// src/components/ArticleCard.jsx
import { Link } from "react-router-dom";
import "./ArticleCard.css";

function ArticleCard({ article }) {
  const { id, title, excerpt, category, date } = article;

  // Format the date for better display
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
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
        <time dateTime={date}>{formattedDate}</time>
      </div>
      <Link to={`/blogs/${id}`} className="card-read-more">
        Read More →
      </Link>
    </article>
  );
}

export default ArticleCard;
