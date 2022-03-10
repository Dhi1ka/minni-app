import axios from "axios";

const url = "http://localhost:5000";

export const getAllPosts = () => axios.get(`${url}/posts`);
export const createPost = (result) => axios.post(`${url}/posts/create`, result);
export const editPost = (id, result) =>
  axios.put(`${url}/posts/edit/${id}`, result);
