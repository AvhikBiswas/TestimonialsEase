import express from "express";

const app = express();

app.use(express.json());

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("I am alive");
});

app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
