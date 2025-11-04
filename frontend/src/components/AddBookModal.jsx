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
import { useState } from "react";
import "./AddBookModal.css";

const { Option } = Select;

export default function AddBookModal({ open, onCancel, onSave }) {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);

  // image validation + preview
  const beforeUpload = (file) => {
    const valid = file.type === "image/jpeg" || file.type === "image/png";
    if (!valid) {
      message.error("The cover image must be in JPG or PNG format.");
      return Upload.LIST_IGNORE;
    }
    if (file.size / 1024 / 1024 > 2) {
      message.error("The image exceeds the maximum allowed size (2MB).");
      return Upload.LIST_IGNORE;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setFileList([file]);
    return false;
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      const price = Number(values.price);
      const quantity = Number(values.quantity ?? 0);

      if (price <= 0 || !Number.isFinite(price)) {
        form.setFields([{ name: "price", errors: ["Please enter a valid positive number."] }]);
        return;
      }
      if (quantity < 0 || !Number.isInteger(quantity)) {
        form.setFields([{ name: "quantity", errors: ["Please enter a valid positive integer."] }]);
        return;
      }

      const payload = {
        title: values.title,
        author: values.author || "",
        category: values.category,
        price: String(price),
        quantity: String(quantity || 0),
        description: values.description || "",
        // IMPORTANT: pass the raw File as 'cover_image' so API receives multipart correctly
        cover_image: fileList[0] || null,
        // keep UI-only preview
        _previewUrl: previewUrl,
      };

      Modal.success({
        title: "Book added successfully.",
        centered: true,
        onOk: () => {
          onSave(payload);
          form.resetFields();
          setFileList([]);
          setPreviewUrl(null);
        },
      });
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

        <Form layout="vertical" form={form} className="add-book-form">
          <Row gutter={40}>
            <Col xs={24} md={14}>
              <Form.Item
                label={<>Book Name<span style={{color: 'red'}}> *</span></>}
                name="title"
                rules={[{ required: true, message: "Please enter Book Name." }]}
              >
                <Input placeholder="Enter Book Name" />
              </Form.Item>

              <Form.Item label="Author" name="author">
                <Input placeholder="Enter Author (optional)" />
              </Form.Item>

              <Form.Item
                label={<>Category<span style={{color: 'red'}}> *</span></>}
                name="category"
                rules={[{ required: true, message: "Please select Category." }]}
              >
                <Select placeholder="Select Category">
                  <Option value="Learning">Learning</Option>
                  <Option value="Study">Study</Option>
                  <Option value="Fiction">Fiction</Option>
                  <Option value="History">History</Option>
                  <Option value="Fantasy">Fantasy</Option>
                  <Option value="Science">Science</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label={<>Price<span style={{color: 'red'}}> *</span></>}
                name="price"
                rules={[{ required: true, message: "Please enter Price." }]}
              >
                <Input placeholder="Enter Price" type="number" min={1} />
              </Form.Item>

              <Form.Item
                label="Quantity"
                name="quantity"
                rules={[{
                  validator: (_, v) =>
                    v === undefined || v === "" || (Number(v) >= 0 && Number.isInteger(Number(v)))
                      ? Promise.resolve()
                      : Promise.reject(new Error("Please enter a valid positive integer."))
                }]}
              >
                <Input placeholder="Enter Quantity" type="number" min={0} />
              </Form.Item>

              <Form.Item label="Description" name="description">
                <Input.TextArea rows={2} placeholder="Enter a short description..." />
              </Form.Item>
            </Col>

            <Col xs={24} md={10} className="upload-section">
              <p className="upload-title">Cover Image</p>
              <div className="upload-box">
                {previewUrl
                  ? <img src={previewUrl} alt="preview" className="upload-preview" />
                  : <div className="upload-placeholder">📘 No image uploaded</div>}
              </div>

              <Upload
                beforeUpload={beforeUpload}
                fileList={fileList.map(f => ({ uid: f.uid || f.name, name: f.name }))}
                onRemove={() => { setFileList([]); setPreviewUrl(null); }}
                maxCount={1}
                showUploadList={false}
              >
                <Button icon={<UploadOutlined />} className="upload-btn">Upload File</Button>
              </Upload>
            </Col>
          </Row>

          <div className="modal-footer">
            <Button className="save-btn" type="primary" onClick={handleSave}>Save</Button>
            <Button className="clear-btn" onClick={handleClear}>Clear</Button>
            <Button className="cancel-btn" onClick={onCancel}>Cancel</Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
