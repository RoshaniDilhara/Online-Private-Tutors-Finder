import axios from "axios";

const apirequest = axios.create({
  baseURL: "http://localhost:5000/api/requests",
});

export const insertRequest = (payload) => apirequest.post(`/request`, payload);
export const getAllRequest = () => apirequest.get(`/request`);
export const updateRequestById = (id, payload) =>
  apirequest.put(`/request/${id}`, payload);
export const deleteRequestById = (id) => apirequest.delete(`/request/${id}`);
export const getRequestById = (id) => apirequest.get(`/request/${id}`);

const apisrequest = {
  insertRequest,
  getAllRequest,
  updateRequestById,
  deleteRequestById,
  getRequestById,
};

export default apisrequest;
