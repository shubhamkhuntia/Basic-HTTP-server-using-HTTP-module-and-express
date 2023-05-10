const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.json({
    message: "OK",
  });
});

app.post("/home", (req, res) => {
  res.json({
    message: "OK Post",
  });
});

app.listen(PORT, () => {
  console.log(`We are up Shubham at PORT : ${PORT}`);
});
