import { Modal, Descriptions, Tag } from "antd";

export default function BookDetailsModal({ open, onClose, book }) {
  if (!book) return null;

  const color =
    book.status === "In Stock" ? "green" :
    book.status === "Out of Stock" ? "red" : "default";

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onOk={onClose}
      title="Book Details"
      centered
    >
      <Descriptions bordered size="small" column={1}>
        <Descriptions.Item label="Title">{book.title}</Descriptions.Item>
        <Descriptions.Item label="Author">{book.author}</Descriptions.Item>
        <Descriptions.Item label="Category">{book.category}</Descriptions.Item>
        <Descriptions.Item label="Status">
          <Tag color={color}>{book.status || "In Stock"}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Cover">
          <img src={book.image || book.cover_image_url || "https://placehold.co/200x250"} alt={book.title} style={{ width: 120, borderRadius: 6 }} />
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
}
