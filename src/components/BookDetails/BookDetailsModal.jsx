import { useState } from "react";
import { Modal, Button, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import BookDetailsView from "./BookDetailsView";
import BookDetailsEditForm from "./BookDetailsEditForm";
import "./BookDetailsModal.css";

export default function BookDetailsModal({ open, onCancel, book, onSave, onDelete }) {
  const [editMode, setEditMode] = useState(false);

  if (!book) return null;

  // 🔴 Delete Confirmation (AC10)
  const handleDelete = () => {
    Modal.confirm({
      title: `Are you sure you want to delete "${book.title}"?`,
      icon: <ExclamationCircleOutlined />,
      content: "This action cannot be undone.",
      okText: "Yes",
      cancelText: "No",
      centered: true,
      onOk: () => {
        onDelete(book);
        message.success("Delete successful");
        onCancel(); // close modal
      },
      onCancel: () => {
        // stay in View Mode
      },
    });
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      width={750}
      title={editMode ? "✏️ Edit Book Details" : "📘 Book Details"}
      bodyStyle={{ padding: "28px 36px" }}
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
          onSave={(updatedBook) => {
            onSave(updatedBook);
            setEditMode(false);
          }}
          onCancelEdit={() => setEditMode(false)}
        />
      )}
    </Modal>
  );
}
