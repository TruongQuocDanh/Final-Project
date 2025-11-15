import api from "./apiClient";

export const checkServerHealth = async () => {
  const res = await api.get("/health");
  return res.data;
};
