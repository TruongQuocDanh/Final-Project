import { Modal, Descriptions, Image, Tag } from "antd";

export default function BookDetailsModal({ open, onCancel, book }) {
    if (!book) return null;

    const getStatusColor = (status) => {
        switch (status) {
            case "In Stock":
                return "green";
            case "Out of Stock":
                return "red";
            default:
                return "gray";
        }
    };

    return (
        <Modal
            open={open}
            onCancel={onCancel}
            footer={null}
            title="📘 Book Details"
            centered
            width={700}
            bodyStyle={{ padding: "28px 36px" }}
        >
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <Image
                    src={book.image}
                    alt={book.title}
                    width={180}
                    height={240}
                    style={{
                        objectFit: "cover",
                        borderRadius: "8px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                    preview={false}
                />

                <div style={{ flex: 1 }}>
                    <Descriptions column={1} bordered size="middle">
                        <Descriptions.Item label="Title">{book.title}</Descriptions.Item>
                        <Descriptions.Item label="Author">{book.author}</Descriptions.Item>
                        <Descriptions.Item label="Category">{book.category}</Descriptions.Item>
                        <Descriptions.Item label="Status">
                            <Tag color={getStatusColor(book.status)}>{book.status}</Tag>
                        </Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        </Modal>
    );
}
