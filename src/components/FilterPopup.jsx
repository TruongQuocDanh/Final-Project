import React, { useState } from "react";
import {
  Modal,
  Checkbox,
  InputNumber,
  Slider,
  Select,
  Button,
  Form,
  Typography,
} from "antd";

const { Text } = Typography;
const { Option } = Select;

export default function FilterPopup({ open, onClose, onApply, onClear }) {
  const [form] = Form.useForm();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [priceError, setPriceError] = useState("");

  const handleApply = () => {
    if (minPrice > maxPrice) {
      setPriceError("Minimum price cannot be greater than maximum price.");
      return;
    }
    const filters = form.getFieldsValue();
    onApply({ ...filters, minPrice, maxPrice });
    onClose();
  };

  const handleClear = () => {
    form.resetFields();
    setMinPrice(0);
    setMaxPrice(100);
    setPriceError("");
    onClear();
  };

  return (
    <Modal
      title="Filter Books"
      open={open}
      onCancel={onClose}
      footer={null}
      width={500}
    >
      <Form form={form} layout="vertical">
        {/* Category */}
        <Form.Item label="Category" name="category">
          <Checkbox.Group
            options={[
              "Fantasy",
              "Science",
              "Classic",
              "Thriller",
              "Learning",
              "Children",
            ]}
          />
        </Form.Item>

        {/* Price Range */}
        <Form.Item label="Price Range">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <InputNumber
              min={0}
              value={minPrice}
              onChange={(v) => setMinPrice(v || 0)}
              placeholder="Min"
            />
            <span>-</span>
            <InputNumber
              min={0}
              value={maxPrice}
              onChange={(v) => setMaxPrice(v || 0)}
              placeholder="Max"
            />
          </div>
          {priceError && <Text type="danger">{priceError}</Text>}
          <Slider
            range
            min={0}
            max={500}
            value={[minPrice, maxPrice]}
            onChange={([min, max]) => {
              setMinPrice(min);
              setMaxPrice(max);
              setPriceError("");
            }}
            style={{ marginTop: 16 }}
          />
        </Form.Item>

        {/* Author */}
        <Form.Item label="Author" name="author">
          <Select
            showSearch
            allowClear
            placeholder="Select or type author"
            options={[
              { value: "J.K. Rowling", label: "J.K. Rowling" },
              { value: "Dan Brown", label: "Dan Brown" },
              { value: "Emily Clark", label: "Emily Clark" },
              { value: "Jane Smith", label: "Jane Smith" },
              { value: "Wukong", label: "Wukong" },
            ]}
          />
        </Form.Item>

        {/* Status */}
        <Form.Item label="Status" name="status">
          <Checkbox.Group
            options={["In Stock", "Out of Stock", "Inactive"]}
          />
        </Form.Item>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
            marginTop: 20,
          }}
        >
          <Button onClick={handleClear}>Clear</Button>
          <Button type="primary" onClick={handleApply}>
            Apply
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
