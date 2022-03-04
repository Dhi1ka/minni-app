import express from "express";
import {
  createPost,
  deletePost,
  editPost,
  getPosts,
  getPostsById,
} from "../controllers/PostController.mjs";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.get("/detail/:id", getPostsById);
postRouter.post("/create", createPost);
postRouter.put("/edit/:id", editPost);
postRouter.delete("/", deletePost);

export default postRouter;
