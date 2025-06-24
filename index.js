const express = require("express");
const app = express();
const path = require("path");

const servePage = (fileName, res) => {
  const fullPath = path.resolve(__dirname, fileName);
  res.sendFile(fullPath, (err) => {
    if (err) {
      res.status(500).send("Server error.");
    } else {
      console.log("Sent:", fileName);
    }
  });
};

app.get("/", (req, res) => servePage("./index.html", res));

app.get("/about", (req, res) => servePage("./about.html", res));

app.get("/contact-me", (req, res) => servePage("./contact-me.html", res));

app.use((req, res) => servePage("./404.html", res));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Express app - listening on port ${PORT}`);
});
