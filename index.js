const express = require("express");
const urlRoute = require("./routes/url.js");
const { connectToMongoDB } = require("./connect.js");
const path = require('path')
const URL = require("./models/url.js");

const PORT = 8001;
const app = express();
app.use(express.json());

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("MongoDB Connected");
});
app.set("view engine","ejs")
app.set("views", path.resolve("./views"))

app.use("/url", urlRoute);

app.get("/test", async (req, res) => {
  const allUrl = await URL.find({});
  return res.render("home",{
    urls: allUrl,
  })
});

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`App is listening on PORT: ${PORT}`));
