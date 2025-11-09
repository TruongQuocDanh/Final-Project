import { Descriptions, Image, Tag, Button } from "antd";

export default function BookDetailsView({ book, onEdit, onDelete, onClose }) {
  const getStatusColor = (status, quantity) => {
    if (status === "Inactive") return "gray";
    if (quantity === 0) return "red";
    return "green";
  };

  const getStatusText = (status, quantity) => {
    if (status === "Inactive") return "Hidden";
    if (quantity === 0) return "Out of Stock";
    return "In Stock";
  };

  return (
    <>
      <div className="book-details-view">
        <Image
          src={book.image}
          alt={book.title}
          width={200}
          height={260}
          className="book-details-image"
          preview={false}
        />

        <div className="book-details-info">
          <Descriptions
            column={1}
            bordered
            size="middle"
            labelStyle={{ fontWeight: 600, width: 130 }}
          >
            <Descriptions.Item label="Title">{book.title || "Not updated"}</Descriptions.Item>
            <Descriptions.Item label="Author">{book.author || "Not updated"}</Descriptions.Item>
            <Descriptions.Item label="Category">{book.category || "Not updated"}</Descriptions.Item>
            <Descriptions.Item label="Price">
              {book.price ? `$${book.price}` : "Not updated"}
            </Descriptions.Item>
            <Descriptions.Item label="Stock Quantity">
              {book.quantity ?? "Not updated"}
            </Descriptions.Item>
            <Descriptions.Item label="Description">
              {book.description || "Not updated"}
            </Descriptions.Item>
            <Descriptions.Item label="Created Date">
              {book.createdAt
                ? new Date(book.createdAt).toLocaleDateString()
                : "Not updated"}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <Tag color={getStatusColor(book.status, book.quantity)}>
                {getStatusText(book.status, book.quantity)}
              </Tag>
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>

      <div className="book-details-buttons">
        <Button type="primary" onClick={onEdit}>
          Edit
        </Button>
        <Button danger onClick={onDelete}>
          Delete
        </Button>
        <Button onClick={onClose}>Close</Button>
      </div>
    </>
  );
}
