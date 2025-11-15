import {
  Modal,
  Form,
  Input,
  Select,
  Upload,
  Button,
  Row,
  Col,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import "./AddBookModal.css";
import { getAuthors } from "../../api/authorApi";
import { getCategories } from "../../api/categoryApi";

const { Option } = Select;

export default function AddBookModal({ open, onCancel, onSave }) {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  // 🟢 Load authors & categories
  useEffect(() => {
    if (open) {
      loadAuthors();
      loadCategories();
    }
  }, [open]);

  const loadAuthors = async () => {
    try {
      const data = await getAuthors();
      setAuthors(data);
    } catch {
      message.error("Failed to load authors");
    }
  };

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch {
      message.error("Failed to load categories");
    }
  };

  // ✅ Validate image
  const beforeUpload = (file) => {
    const isValidType =
      file.type === "image/jpeg" || file.type === "image/png";
    if (!isValidType) {
      message.error("The cover image must be in JPG or PNG format.");
      return Upload.LIST_IGNORE;
    }

    const isLt2M = file.size / 1024 / 1024 <= 2;
    if (!isLt2M) {
      message.error("The image exceeds the maximum allowed size (2MB).");
      return Upload.LIST_IGNORE;
    }

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
    setFileList([file]);
    return false; // prevent auto upload
  };

  // ✅ Save handler
const handleSave = () => {
  form
    .validateFields()
    .then((values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description || "");
      formData.append("price", values.price);
      formData.append("quantity", values.quantity || 0);
      formData.append("status", values.status || "In Stock");
      formData.append("author_id", values.author_id);
      formData.append("category_id", values.category_id);

      if (fileList[0]) {
        formData.append("image", fileList[0]);  // file thật
      }

      onSave(formData);          // 👈 Gửi thẳng FormData cho Dashboard
      form.resetFields();
      setFileList([]);
      setPreviewUrl(null);
    })
    .catch(() => {
      message.error("Please fill in all required fields.");
    });
};


  const handleClear = () => {
    form.resetFields();
    setFileList([]);
    setPreviewUrl(null);
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      width={750}
      bodyStyle={{ padding: 0, borderRadius: "12px" }}
      className="add-book-modal"
      destroyOnClose
    >
      <div className="add-book-container">
        <h2 className="modal-title">Add New Book</h2>

        <Form
          layout="vertical"
          form={form}
          initialValues={{
            status: "In Stock",
          }}
          className="add-book-form"
        >
          <Row gutter={40}>
            {/* Left Column */}
            <Col xs={24} md={14}>
              <Form.Item
                label={
                  <>
                    Book Name<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="title"
                rules={[{ required: true, message: "Please enter Book Name." }]}
              >
                <Input placeholder="Enter Book Name" />
              </Form.Item>

              <Form.Item
                label={
                  <>
                    Author<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="author_id"
                rules={[{ required: true, message: "Please select Author." }]}
              >
                <Select placeholder="Select Author">
                  {authors.map((a) => (
                    <Option key={a.id} value={a.id}>
                      {a.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label={
                  <>
                    Category<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="category_id"
                rules={[{ required: true, message: "Please select Category." }]}
              >
                <Select placeholder="Select Category">
                  {categories.map((c) => (
                    <Option key={c.id} value={c.id}>
                      {c.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label={
                  <>
                    Price<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="price"
                rules={[{ required: true, message: "Please enter Price." }]}
              >
                <Input type="number" min={1} placeholder="Enter Price" />
              </Form.Item>

              <Form.Item label="Quantity" name="quantity">
                <Input type="number" min={0} placeholder="Enter Quantity" />
              </Form.Item>

              <Form.Item
                label={
                  <>
                    Status<span style={{ color: "red" }}> *</span>
                  </>
                }
                name="status"
                rules={[{ required: true, message: "Please select Status." }]}
              >
                <Select placeholder="Select Status">
                  <Option value="In Stock">In Stock</Option>
                  <Option value="Out of Stock">Out of Stock</Option>
                  <Option value="Inactive">Inactive</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Description" name="description">
                <Input.TextArea
                  rows={2}
                  placeholder="Enter a short description..."
                />
              </Form.Item>
            </Col>

            {/* Cover Image */}
            <Col xs={24} md={10} className="upload-section">
              <p className="upload-title">Cover Image</p>
              <div className="upload-box">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="preview"
                    className="upload-preview"
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                ) : (
                  <div className="upload-placeholder">📘 No image uploaded</div>
                )}
              </div>

              <Upload
                beforeUpload={beforeUpload}
                fileList={fileList.map((f) => ({
                  uid: f.uid || f.name,
                  name: f.name,
                }))}
                onRemove={() => {
                  setFileList([]);
                  setPreviewUrl(null);
                }}
                maxCount={1}
                showUploadList={false}
              >
                <Button icon={<UploadOutlined />} className="upload-btn">
                  Upload File
                </Button>
              </Upload>
            </Col>
          </Row>

          <div className="modal-footer">
            <Button className="save-btn" type="primary" onClick={handleSave}>
              Save
            </Button>
            <Button className="clear-btn" onClick={handleClear}>
              Clear
            </Button>
            <Button className="cancel-btn" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
