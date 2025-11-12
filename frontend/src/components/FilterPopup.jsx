import React, { useState, useEffect } from "react";
import {
  Modal,
  Checkbox,
  InputNumber,
  Slider,
  Select,
  Button,
  Form,
  Typography,
  message,
} from "antd";
import { getAuthors } from "../api/authorApi";
import { getCategories } from "../api/categoryApi";

const { Text } = Typography;
const { Option } = Select;

export default function FilterPopup({ open, onClose, onApply, onClear }) {
  const [form] = Form.useForm();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [priceError, setPriceError] = useState("");
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  // 🟢 Load authors & categories from API when open
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
      message.error("Failed to load authors.");
    }
  };

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch {
      message.error("Failed to load categories.");
    }
  };

  // 🟡 Apply filters
  const handleApply = () => {
    if (minPrice > maxPrice) {
      setPriceError("Minimum price cannot be greater than maximum price.");
      return;
    }

    const filters = form.getFieldsValue();

    onApply({
      category_ids: filters.category_ids || [],
      status: filters.status || [],
      author_id: filters.author_id || null,
      minPrice,
      maxPrice,
    });

    onClose();
  };

  // 🔵 Clear all filters
  const handleClear = () => {
    form.resetFields();
    setMinPrice(0);
    setMaxPrice(500);
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
        <Form.Item label="Category" name="category_ids">
          <Checkbox.Group
            options={categories.map((c) => ({
              label: c.name,
              value: c.id,
            }))}
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
        <Form.Item label="Author" name="author_id">
          <Select
            showSearch
            allowClear
            placeholder="Select author"
            optionFilterProp="label"
          >
            {authors.map((a) => (
              <Option key={a.id} value={a.id} label={a.name}>
                {a.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Status */}
        <Form.Item label="Status" name="status">
          <Checkbox.Group
            options={[
              { label: "In Stock", value: "In Stock" },
              { label: "Out of Stock", value: "Out of Stock" },
              { label: "Inactive", value: "Inactive" },
            ]}
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
