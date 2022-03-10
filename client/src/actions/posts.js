import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllPosts();

    dispatch({ type: "GET_ALL", payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const editPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.editPost(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.error(error);
  }
};
