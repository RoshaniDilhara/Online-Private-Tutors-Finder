import axios from "axios";

const apistudent = axios.create({
  baseURL: "http://localhost:5000/api/students",
});

export const insertStudent = (payload) => apistudent.post(`/student`, payload);
export const getAllStudent = () => apistudent.get(`/student`);
export const updateStudentById = (id, payload) =>
  apistudent.put(`/student/${id}`, payload);
export const deleteStudentById = (id) => apistudent.delete(`/student/${id}`);
export const getStudentById = (id) => apistudent.get(`/student/${id}`);

const apistudents = {
  insertStudent,
  getAllStudent,
  updateStudentById,
  deleteStudentById,
  getStudentById,
};

export default apistudents;
