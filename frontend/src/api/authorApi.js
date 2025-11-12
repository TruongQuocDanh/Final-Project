import api from "./apiClient";

// Lấy danh sách tác giả
export const getAuthors = async () => {
  const res = await api.get("/authors");
  return res.data;
};

// Tạo mới tác giả
export const createAuthor = async (data) => {
  const res = await api.post("/authors", data);
  return res.data;
};
