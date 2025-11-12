import React, { useState, useEffect } from "react";
import { Input, Button, Space } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import FilterPopup from "./FilterPopup";

export default function SearchFilterBar({
  searchTerm,
  onSearchChange,
  onSearchSubmit,
  onFilterApply,
  onFilterClear,
}) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(searchTerm);

  // 🕓 Debounce typing — chỉ gửi search sau 300ms người dùng ngừng gõ
  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchInput.trim() !== searchTerm.trim()) {
        onSearchChange(searchInput.trim());
        onSearchSubmit();
      }
    }, 300);
    return () => clearTimeout(delay);
  }, [searchInput]);

  return (
    <>
      <Space size="middle">
        <Input
          placeholder="Search by title, author, or category"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          allowClear
          style={{
            width: 280,
            borderRadius: 8,
            boxShadow: "0 0 4px rgba(0,0,0,0.08)",
          }}
          prefix={<SearchOutlined style={{ color: "#888" }} />}
        />

        <Button
          icon={<FilterOutlined />}
          onClick={() => setFilterOpen(true)}
          style={{
            borderRadius: 8,
            background: "#f7f9ff",
          }}
        >
          Filter
        </Button>
      </Space>

      <FilterPopup
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        onApply={(filters) => {
          onFilterApply(filters);
          setFilterOpen(false);
        }}
        onClear={() => {
          onFilterClear();
          setFilterOpen(false);
        }}
      />
    </>
  );
}
