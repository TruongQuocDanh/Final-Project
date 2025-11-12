import api from "./apiClient";

// Lấy danh sách sách (có filter/search)
export const getBooks = async (params = {}) => {
  const res = await api.get("/books", { params });
  return res.data;
};

// Lấy chi tiết sách
export const getBookById = async (id) => {
  const res = await api.get(`/books/${id}`);
  return res.data;
};

// Thêm mới sách
export const createBook = async (formData) => {
  const res = await api.post("/books", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// Cập nhật sách
export const updateBook = async (id, formData) => {
  const res = await api.put(`/books/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// Xóa sách
export const deleteBook = async (id) => {
  const res = await api.delete(`/books/${id}`);
  return res.data;
};
