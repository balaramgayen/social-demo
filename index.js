const express = require("express");

const app = express();

const PORT = 4000;

app.get("/", (re, res) => {
  res.status(200).send("<h1>Backend Running</h1>");
});

app.get("/api/v1/facebook", (req, res) => {
  const data = {
    username: "Balaram53",
    followers: 444,
    follows: 411,
    date: Date.now(),
  };

  res.status(200).json({ data });
});

app.get("/api/v1/:name", (req, res) => {
  res.status(200).json({ parameter: req.params.name });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
