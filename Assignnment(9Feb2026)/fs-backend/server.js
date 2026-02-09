const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const FILE = "data.txt";

// write
app.post("/write", (req, res) => {
  fs.writeFile(FILE, req.body.text, (err) => {
    if (err) return res.send("Error");
    res.send("Written");
  });
});

// read
app.get("/read", (req, res) => {
  fs.readFile(FILE, "utf8", (err, data) => {
    if (err) return res.send("Error");
    res.json({ data });
  });
});

app.listen(5000, () => console.log("Server running 5000"));