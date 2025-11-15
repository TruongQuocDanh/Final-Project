import { useState, useEffect } from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Image,
  Upload,
  Checkbox,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getAuthors } from "../../api/authorApi";
import { getCategories } from "../../api/categoryApi";

const { Option } = Select;

export default function BookDetailsEditForm({ book, onSave, onCancelEdit }) {
  const [form] = Form.useForm();
  const [previewUrl, setPreviewUrl] = useState(
    book?.image_url ? `http://localhost:5000${book.image_url}` : null
  );
  const [fileList, setFileList] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  // 🟢 Load authors & categories
  useEffect(() => {
    loadAuthors();
    loadCategories();
  }, []);

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

  // 🟢 Validate & preview image
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

  // 🟢 Handle Save
  const handleSave = async () => {
    try {
      const values = await form.validateFields();

      // 🔥 Convert Checkbox → status string
      const statusValue = values.status
        ? "Inactive"
        : values.quantity > 0
        ? "In Stock"
        : "Out of Stock";

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description || "");
      formData.append("price", values.price);
      formData.append("quantity", values.quantity || 0);
      formData.append("status", statusValue);
      formData.append("author_id", values.author_id);
      formData.append("category_id", values.category_id);

      if (fileList[0]) {
        formData.append("image", fileList[0]);
      }

      onSave({
        id: book.id,
        ...values,
        status: statusValue,
        imageFile: fileList[0],
        formData,
      });

    } catch (err) {
      message.error("Please check the fields and try again.");
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        title: book.title,
        author_id: book.author_id,
        category_id: book.category_id,
        price: book.price,
        quantity: book.quantity,
        description: book.description,
        status: book.status === "Inactive", // 🔥 Checkbox boolean
      }}
      className="book-details-edit-form"
    >
      <div className="book-edit-layout">
        {/* LEFT SIDE */}
        <div className="book-edit-left">

          <Form.Item
            label="Book Title"
            name="title"
            rules={[{ required: true, message: "Please enter book title." }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Author"
            name="author_id"
            rules={[{ required: true, message: "Please select author." }]}
          >
            <Select placeholder="Select author">
              {authors.map((a) => (
                <Option key={a.id} value={a.id}>
                  {a.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Category"
            name="category_id"
            rules={[{ required: true, message: "Please select category." }]}
          >
            <Select placeholder="Select category">
              {categories.map((c) => (
                <Option key={c.id} value={c.id}>
                  {c.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please enter price." }]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Stock Quantity"
            name="quantity"
            rules={[{ required: true, message: "Please enter quantity." }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea rows={2} />
          </Form.Item>

          {/* ⭐ CHECKBOX STATUS */}
          <Form.Item
            label="Inactive"
            name="status"
            valuePropName="checked"
            tooltip="Tick to mark this book as inactive"
          >
            <Checkbox>Mark this book as Inactive</Checkbox>
          </Form.Item>

          <Form.Item label="Created Date">
            <Input
              value={
                book.created_at
                  ? new Date(book.created_at).toLocaleDateString()
                  : "Not available"
              }
              disabled
            />
          </Form.Item>
        </div>

        {/* RIGHT SIDE */}
        <div className="book-edit-right">
          <p className="cover-label">Cover Image</p>

          <Image
            src={previewUrl || "https://placehold.co/200x250"}
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
              setPreviewUrl(book.image_url);
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
