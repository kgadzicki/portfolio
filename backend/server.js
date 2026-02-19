const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend działa 🚀");
});

app.listen(3001, () => {
  console.log("Serwer działa na http://localhost:3001");
});
app.get("/defect", (req, res) => {
  const before = 14.9;
  const after = 2.1;
  const improvement = before - after;

  res.json({
    before,
    after,
    improvement,
  });
});
