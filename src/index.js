const express = require("express");
const quizRouter = require("./Controller/quiz.router");
let PORT =process.env.PORT || 8080;


const dbConnect = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Quiz Page");
});

app.use("/", quizRouter);

app.listen(PORT||8080, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});
