import axios from "axios";

const url = "http://localhost:5000";

export const getPosts = () => axios.get(url + "/posts");
