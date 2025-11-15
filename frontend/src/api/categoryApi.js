import api from "./apiClient";

// Lấy danh sách thể loại
export const getCategories = async () => {
  const res = await api.get("/categories");
  return res.data;
};

// Tạo mới thể loại
export const createCategory = async (data) => {
  const res = await api.post("/categories", data);
  return res.data;
};
