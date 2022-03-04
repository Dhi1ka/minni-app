import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();

const CONNECTION_URL = `${process.env.CONNECTION_URL}`;
const PORT = +process.env.PORT || 5000;

import router from "./router/index.mjs";
app.use(router);

app.use("/", (req, res) => {
  res.status(404).json({
    message: "404 Page Not Found",
  });
});

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server listening on http://localhost:${PORT}`),
    ),
  )
  .catch((error) => console.error(error.message));
