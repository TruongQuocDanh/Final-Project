import { useState } from "react";
import { Form, Input, InputNumber, Select, Button, Image, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function BookDetailsEditForm({ book, onSave, onCancelEdit }) {
  const [form] = Form.useForm();
  const [previewUrl, setPreviewUrl] = useState(book?.image || null);
  const [fileList, setFileList] = useState([]);

  const beforeUpload = (file) => {
    const isValid = file.type === "image/jpeg" || file.type === "image/png";
    if (!isValid) {
      message.error("Image must be JPG or PNG format.");
      return Upload.LIST_IGNORE;
    }
    if (file.size / 1024 / 1024 > 2) {
      message.error("Image exceeds 2MB.");
      return Upload.LIST_IGNORE;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setFileList([file]);
    return false;
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      const price = Number(values.price);
      const quantity = Number(values.quantity);

      if (price <= 0 || !Number.isInteger(price))
        throw { price: "Price must be a positive integer." };
      if (quantity < 0 || !Number.isInteger(quantity))
        throw { quantity: "Stock must be a non-negative integer." };

      const updated = { ...book, ...values, image: previewUrl || book.image };
      message.success("Save successful");
      onSave(updated);
    } catch (err) {
      if (err.price || err.quantity) message.error(Object.values(err).join(" "));
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        title: book.title,
        author: book.author,
        category: book.category,
        price: book.price,
        quantity: book.quantity,
        description: book.description,
        status: book.status,
      }}
      className="book-details-edit-form"
    >
      <div className="book-edit-layout">
        <div className="book-edit-left">
          <Form.Item label="Book Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Author" name="author">
            <Input />
          </Form.Item>

          <Form.Item label="Category" name="category" rules={[{ required: true }]}>
            <Select placeholder="Select category">
              <Option value="Learning">Learning</Option>
              <Option value="Study">Study</Option>
              <Option value="Fiction">Fiction</Option>
              <Option value="History">History</Option>
              <Option value="Fantasy">Fantasy</Option>
              <Option value="Science">Science</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Price" name="price" rules={[{ required: true }]}>
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Stock Quantity" name="quantity" rules={[{ required: true }]}>
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea rows={2} />
          </Form.Item>

          <Form.Item label="Status" name="status" rules={[{ required: true }]}>
            <Select>
              <Option value="In Stock">In Stock</Option>
              <Option value="Out of Stock">Out of Stock</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Created Date">
            <Input
              value={
                book.createdAt
                  ? new Date(book.createdAt).toLocaleDateString()
                  : "Not updated"
              }
              disabled
            />
          </Form.Item>
        </div>

        <div className="book-edit-right">
          <p className="cover-label">Cover Image</p>
          <Image
            src={previewUrl}
            alt="preview"
            width={180}
            height={230}
            className="cover-preview"
            preview={false}
          />
          <Upload
            beforeUpload={beforeUpload}
            fileList={fileList}
            onRemove={() => {
              setFileList([]);
              setPreviewUrl(book.image);
            }}
            maxCount={1}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Upload New</Button>
          </Upload>
        </div>
      </div>

      <div className="book-details-buttons">
        <Button type="primary" onClick={handleSave}>
          Save
        </Button>
        <Button onClick={onCancelEdit}>Cancel</Button>
      </div>
    </Form>
  );
}
