import React, { useState } from "react";
import { Input, Button, Space } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import FilterPopup from "./FilterPopup";

export default function SearchFilterBar({
  searchTerm,
  onSearchChange,      // gọi khi thực sự tìm kiếm
  onSearchSubmit,
  onFilterApply,
  onFilterClear,
}) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(searchTerm); // 🆕 lưu text đang gõ

  // 🟢 Khi nhấn Enter hoặc icon search
  const handleSearch = () => {
    onSearchChange(searchInput); // gửi text lên Dashboard
    onSearchSubmit();            // reset trang, trigger kết quả
  };

  return (
    <>
      <Space size="middle">
        {/* 🔍 Search Input */}
        <Input
          placeholder="Search by book title or author"
          prefix={<SearchOutlined onClick={handleSearch} />} // 🆕 icon click = search
          style={{ width: 260 }}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}   // 🆕 chỉ lưu local text
          onPressEnter={handleSearch}                       // 🆕 chỉ khi Enter mới search
          allowClear
        />

        {/* 🧩 Filter Button */}
        <Button
          icon={<FilterOutlined />}
          onClick={() => setFilterOpen(true)}
        >
          Filter
        </Button>
      </Space>

      {/* 🪟 Filter Popup */}
      <FilterPopup
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        onApply={onFilterApply}
        onClear={onFilterClear}
      />
    </>
  );
}
