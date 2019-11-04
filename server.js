const express = require("express");
const app = new express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("server load in port 3000");
});
