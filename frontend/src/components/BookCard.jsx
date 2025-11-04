import { Card, Badge, Button } from "antd";
import "./BookCard.css";

export default function BookCard({ book, onView }) {
  const statusColor =
    book.status === "In Stock" ? "green" :
    book.status === "Out of Stock" ? "red" : "gray";

  return (
    <div className="book-card-wrapper">
      <Badge.Ribbon
        text={(book.status || "In Stock").toUpperCase()}
        color={statusColor}
        style={{ left: "85%", transform: "translateX(-100%)" }}
      />
      <Card
        hoverable
        className="book-card"
        cover={<img alt={book.title} src={book.image || book.cover_image_url || "https://placehold.co/200x250"} className="book-card-img" />}
      >
        <div className="book-card-content">
          <h3 className="book-card-title">{book.title}</h3>
          <p className="book-card-author">{book.author}</p>
          <p className="book-card-category">Category: {book.category}</p>

          <div className="book-card-actions">
            <Button
              type="default"
              block
              size="small"
              className="book-card-btn"
              onClick={() => onView?.(book)}
            >
              View Details
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
