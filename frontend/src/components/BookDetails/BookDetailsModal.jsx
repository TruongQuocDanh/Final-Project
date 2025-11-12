import { useState } from "react";
import { Modal, Button, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import BookDetailsView from "./BookDetailsView";
import BookDetailsEditForm from "./BookDetailsEditForm";
import "./BookDetailsModal.css";

export default function BookDetailsModal({
  open,
  onCancel,
  book,
  onSave,
  onDelete,
}) {
  const [editMode, setEditMode] = useState(false);

  if (!book) return null;

  // 🗑️ Delete Confirmation (API-ready)
  const handleDelete = () => {
    Modal.confirm({
      title: `Are you sure you want to delete "${book.title}"?`,
      icon: <ExclamationCircleOutlined />,
      content: "This action cannot be undone.",
      okText: "Yes, delete it",
      cancelText: "No, cancel",
      centered: true,
      onOk: async () => {
        try {
          await onDelete(book);
          message.success(`"${book.title}" has been deleted.`);
        } catch {
          message.error("Failed to delete this book.");
        } finally {
          onCancel();
        }
      },
    });
  };

  // 🟢 Handle save from edit form
  const handleSave = async (updatedBook) => {
    try {
      await onSave(updatedBook); // Dashboard sẽ gọi PUT /books/:id
      message.success("Book updated successfully!");
      setEditMode(false);
    } catch (err) {
      message.error("Failed to update book!");
    }
  };

  return (
    <Modal
      open={open}
      onCancel={() => {
        setEditMode(false);
        onCancel();
      }}
      footer={null}
      centered
      width={750}
      title={editMode ? "✏️ Edit Book Details" : "📘 Book Details"}
      bodyStyle={{ padding: "28px 36px" }}
      destroyOnClose
    >
      {!editMode ? (
        <BookDetailsView
          book={book}
          onEdit={() => setEditMode(true)}
          onDelete={handleDelete}
          onClose={onCancel}
        />
      ) : (
        <BookDetailsEditForm
          book={book}
          onSave={handleSave}
          onCancelEdit={() => setEditMode(false)}
        />
      )}
    </Modal>
  );
}
