import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/subjects",
});

export const insertSubject = (payload) => api.post(`/subject`, payload);
export const getAllSubject = () => api.get(`/subject`);
export const updateSubjectById = (id, payload) =>
  api.put(`/subject/${id}`, payload);
export const deleteSubjectById = (id) => api.delete(`/subject/${id}`);
export const getSubjectById = (id) => api.get(`/subject/${id}`);

const sbj = {
  insertSubject,
  getAllSubject,
  updateSubjectById,
  deleteSubjectById,
  getSubjectById,
};

export default sbj;
