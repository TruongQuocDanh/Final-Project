import { Card, Badge, Button } from "antd";
import "./BookCard.css";

export default function BookCard({ book, onView }) {
  // Determine badge color based on status
  const ribbonColor =
    book.status === "In Stock"
      ? "green"
      : book.status === "Out of Stock"
      ? "red"
      : "gray";

  return (
    <div className="book-card-wrapper">
      <Badge.Ribbon
        text={book.status.toUpperCase()}
        color={ribbonColor}
        placement="end"
        className="book-card-ribbon"
      >
        <Card
          hoverable
          className="book-card"
          cover={
            <img
              alt={book.title}
              src={book.image}
              className="book-card-img"
            />
          }
        >
          <div className="book-card-content">
            <h3 className="book-card-title">{book.title}</h3>
            <p className="book-card-author">
              {book.author || "Unknown Author"}
            </p>
            <p className="book-card-category">
              Category: {book.category || "Uncategorized"}
            </p>

            <Button
              type="default"
              block
              size="small"
              className="book-card-btn"
              onClick={() => onView(book)}
            >
              View Details
            </Button>
          </div>
        </Card>
      </Badge.Ribbon>
    </div>
  );
}
