import axios from "axios";

const apiappoinment = axios.create({
  baseURL: "http://localhost:5000/api/appoinments",
});

export const insertAppoinment = (payload) =>
  apiappoinment.post(`/appoinment`, payload);
export const getAllAppoinment = () => apiappoinment.get(`/appoinment`);
export const updateAppoinmentById = (id, payload) =>
  apiappoinment.put(`/appoinment/${id}`, payload);
export const deleteAppoinmentById = (id) =>
  apiappoinment.delete(`/appoinment/${id}`);
export const getAppoinmentById = (id) => apiappoinment.get(`/appoinment/${id}`);

const apisappoinment = {
  insertAppoinment,
  getAllAppoinment,
  updateAppoinmentById,
  deleteAppoinmentById,
  getAppoinmentById,
};

export default apisappoinment;
