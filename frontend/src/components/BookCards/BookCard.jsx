import { Card, Badge, Button, Tag } from "antd";
import {
  DollarOutlined,
  UserOutlined,
  BookOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import "./BookCard.css";

export default function BookCard({ book, onView }) {
  const title = book.title || "Untitled";
  const author = book.author_name || "Unknown Author";
  const category = book.category_name || "Uncategorized";
  const imageUrl = book.image_url
    ? `http://localhost:5000${book.image_url}`
    : "https://placehold.co/200x250";

  const ribbonColor =
    book.status === "In Stock"
      ? "green"
      : book.status === "Out of Stock"
      ? "red"
      : "gray";

  // 🪙 Format price
  const displayPrice =
    book.price && !isNaN(Number(book.price))
      ? new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(Number(book.price))
      : "N/A";

  return (
    <div className="book-card-wrapper">
      <Badge.Ribbon
        text={book.status?.toUpperCase() || "UNKNOWN"}
        color={ribbonColor}
        placement="end"
        className="book-card-ribbon"
      >
        <Card
          hoverable
          bordered={false}
          className="book-card"
          cover={
            <div className="book-img-container">
              <img
                alt={title}
                src={imageUrl}
                className="book-card-img"
                onError={(e) => {
                  e.target.src = "https://placehold.co/200x250";
                }}
              />
            </div>
          }
        >
          <div className="book-card-content">
            <h3 className="book-card-title">{title}</h3>

            <p className="book-card-author">
              <UserOutlined style={{ marginRight: 6 }} />
              {author}
            </p>

            <p className="book-card-category">
              <BookOutlined style={{ marginRight: 6 }} />
              {category}
            </p>

            <Tag color="blue" className="book-card-price">
              <DollarOutlined /> {displayPrice}
            </Tag>

            <Button
              type="primary"
              icon={<EyeOutlined />}
              block
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
