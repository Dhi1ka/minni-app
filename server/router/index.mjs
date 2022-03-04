import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Minni!",
  });
});

import postRouter from "./post.mjs";
router.use("/posts", postRouter);

export default router;
