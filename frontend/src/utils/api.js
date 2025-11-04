import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// GET list of books
export const fetchBooks = async (
  page = 1,
  limit = 10,
  sortBy = "date_added",
  order = "DESC"
) => {
  const res = await axios.get(API_BASE_URL, {
    params: { page, limit, sortBy, order },
  });
  // Backend trả { data, total, page, pages, remainingPages }
  return res.data;
};

export const createBook = async (bookData) => {
  const formData = new FormData();
  Object.entries(bookData).forEach(([k, v]) => {
    if (v !== undefined && v !== null && k !== "_previewUrl") {
      formData.append(k, v);
    }
  });
  const res = await axios.post(`${API_BASE_URL}/create`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const searchBooks = async (q) => {
  const res = await axios.get(`${API_BASE_URL}/search`, { params: { q } });
  return res.data;
};

export const filterBooks = async (filters) => {
  const res = await axios.get(`${API_BASE_URL}/filter`, { params: filters });
  return res.data;
};

export const getBookDetails = async (id) => {
  const res = await axios.get(`${API_BASE_URL}/${id}`);
  return res.data;
};
