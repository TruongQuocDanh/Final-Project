import { useState, useEffect } from "react";
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

  // 🟢 book trong modal sẽ được lưu local để cập nhật UI ngay lập tức
  const [currentBook, setCurrentBook] = useState(book);

  // Khi Dashboard gửi book mới vào modal → cập nhật lại
  useEffect(() => {
    setCurrentBook(book);
  }, [book]);

  if (!currentBook) return null;

  // 🗑️ Delete Confirmation
  const handleDelete = () => {
    Modal.confirm({
      title: `Are you sure you want to delete "${currentBook.title}"?`,
      icon: <ExclamationCircleOutlined />,
      content: "This action cannot be undone.",
      okText: "Yes, delete it",
      cancelText: "No, cancel",
      centered: true,
      onOk: async () => {
        try {
          await onDelete(currentBook);
          message.success(`"${currentBook.title}" has been deleted.`);
        } catch {
          message.error("Failed to delete this book.");
        } finally {
          onCancel();
        }
      },
    });
  };

  // 🟢 Khi SAVE trong edit form
  const handleSave = async (updatedPayload) => {
    try {
      // Dashboard sẽ return updatedBook từ API
      const updatedBook = await onSave(updatedPayload);

      if (!updatedBook) {
        message.error("Update failed: Dashboard did not return updated book.");
        return;
      }

      // Cập nhật UI trong modal ngay lập tức
      setCurrentBook(updatedBook);

      message.success("Book updated successfully!");
      setEditMode(false);
    } catch (err) {
      console.error(err);
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
          book={currentBook}
          onEdit={() => setEditMode(true)}
          onDelete={handleDelete}
          onClose={onCancel}
        />
      ) : (
        <BookDetailsEditForm
          book={currentBook}
          onSave={handleSave}
          onCancelEdit={() => setEditMode(false)}
        />
      )}
    </Modal>
  );
}
