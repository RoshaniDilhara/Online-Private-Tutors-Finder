import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/tutors",
});

export const insertTutor = (payload) => api.post(`/tutor`, payload);
export const getAllTutor = () => api.get(`/tutor`);
export const updateTutorById = (id, payload) =>
  api.put(`/tutor/${id}`, payload);
export const deleteTutorById = (id) => api.delete(`/tutor/${id}`);
export const getTutorById = (id) => api.get(`/tutor/${id}`);

const apis = {
  insertTutor,
  getAllTutor,
  updateTutorById,
  deleteTutorById,
  getTutorById,
};

export default apis;
