import express from "express";

import {
  getPosts,
  getPostById,
  createPost,
  editPost,
  deletePost,
  likePost,
} from "../controllers/PostController.mjs";
import auth from "../middleware/auth.mjs";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.get("/detail/:id", getPostById);
postRouter.post("/create", auth, createPost);
postRouter.put("/edit/:id", auth, editPost);
postRouter.delete("/delete/:id", auth, deletePost);
postRouter.put("/like/:id", auth, likePost);

export default postRouter;
