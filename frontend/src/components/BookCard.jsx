import { Card, Badge, Button } from "antd";
import "./BookCard.css";

export default function BookCard({ book, onView }) {
  return (
    <div className="book-card-wrapper">
      <Badge.Ribbon
        text={book.status}
        color={
          book.status === "In Stock"
            ? "green"
            : book.status === "Out of Stock"
              ? "red"
              : "gray"
        }
        style={{
          left: "80%",
          transform: "translateX(-90%)",
          textTransform: "uppercase",
        }}
      />
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
        <h3 className="book-card-title">{book.title}</h3>
        <p className="book-card-author">{book.author}</p>
        <p className="book-card-category">Category: {book.category}</p>

        <Button
          type="default"
          block
          size="small"
          className="book-card-btn"
          onClick={() => onView(book)}
        >
          View Details
        </Button>
      </Card>
    </div>
  );
}
