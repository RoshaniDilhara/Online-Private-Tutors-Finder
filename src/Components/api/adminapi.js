import axios from "axios";

const apiadmin = axios.create({
  baseURL: "http://localhost:5000/api/adminfunction",
});

export const insertAdmin = (payload) => apiadmin.post(`/admin`, payload);
export const getAllAdmin = () => apiadmin.get(`/admins`);
export const updateAdminById = (id, payload) =>
  apiadmin.put(`/admin/${id}`, payload);
export const deleteAdminById = (id) => apiadmin.delete(`/admin/${id}`);
export const getAdminById = (id) => apiadmin.get(`/admin/${id}`);

const apis = {
  insertAdmin,
  getAllAdmin,
  updateAdminById,
  deleteAdminById,
  getAdminById,
};

export default apis;
